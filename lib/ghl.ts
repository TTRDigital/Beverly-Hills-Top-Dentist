/*
 * GoHighLevel inbound webhooks that receive every website lead (appointment form and landing pages).
 * Each lead is posted to all of them. A GHL_WEBHOOK_URL environment variable (comma-separated) adds more.
 * public/api/lead.php (SiteGround) and .github/workflows/deploy-siteground.yml carry the same list: keep them in sync.
 */
export const GHL_WEBHOOKS = [
  "https://services.leadconnectorhq.com/hooks/4f5ooGf1YaKbVDMaK1ft/webhook-trigger/ce205296-0ed3-45f7-b761-409d18189c2e",
  // Added Nov 3, 2026: all leads also go to this trigger.
  "https://services.leadconnectorhq.com/hooks/4f5ooGf1YaKbVDMaK1ft/webhook-trigger/LBQDldmGnUwLcvmrXwcl",
];

/** The code list plus any from GHL_WEBHOOK_URL, https only, without duplicates. */
export function ghlWebhooks(): string[] {
  const fromEnv = (process.env.GHL_WEBHOOK_URL ?? "").split(/[\s,]+/).map((u) => u.trim().replace(/^["']|["']$/g, ""));
  return [...new Set([...GHL_WEBHOOKS, ...fromEnv])].filter((u) => u.startsWith("https://"));
}

/** Posts one webhook, with one retry for rate limits, server errors and network failures. */
async function post(url: string, body: string, label: string): Promise<boolean> {
  for (let attempt = 0; attempt < 2; attempt++) {
    let status = 0;
    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body, signal: AbortSignal.timeout(8000) });
      status = res.status;
      if (res.ok) return true;
      console.error(`[${label}] GoHighLevel webhook ${url.slice(-20)} answered ${status}`);
    } catch (error) {
      console.error(`[${label}] GoHighLevel webhook ${url.slice(-20)} failed`, error);
    }
    if (status !== 0 && status !== 429 && status < 500) break;
    await new Promise((r) => setTimeout(r, 600));
  }
  return false;
}

/** Sends the lead to every webhook at once. True when at least one accepted it (the lead is saved). */
export async function deliverLead(payload: Record<string, unknown>, label: string): Promise<boolean> {
  const urls = ghlWebhooks();
  if (!urls.length) return false;
  const body = JSON.stringify(payload);
  const results = await Promise.all(urls.map((u) => post(u, body, label)));
  return results.some(Boolean);
}
