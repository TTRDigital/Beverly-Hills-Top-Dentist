/*
 * ChatGPT Ads Conversions API (server side), TTR-1186; the spec of Nov 4, 2026. After a lead is saved, the same lead_created event the
 * browser sent goes to OpenAI from the server, with the same id (so it counts once), hashed contact details for matching, and the
 * ad click reference (oppref). Docs: developers.openai.com/ads/conversions-api. Needs OPENAI_ADS_CAPI_KEY (created in Ads Manager,
 * Conversions, Conversion keys; never in client code). Without the key nothing is sent. Test leads and visitors who send Global Privacy
 * Control are never sent. Set OPENAI_ADS_VALIDATE_ONLY=1 to check the wiring without recording conversions.
 */
import { createHash } from "node:crypto";

const PIXEL_ID = process.env.NEXT_PUBLIC_CHATGPT_PIXEL || "3Son8DJqAvAi4ET8SZPsD5";
const sha = (s: string) => createHash("sha256").update(s, "utf8").digest("hex");

/** Email: trim and lowercase. */
export const normEmail = (e: string) => e.trim().toLowerCase();
/** Phone: keep the country code, digits only, no leading zeros; a US 10 digit number gets 1. Null when it is not 8 to 15 digits. */
export function normPhone(p: string): string | null {
  let d = p.replace(/\D/g, "");
  if (d.length === 10) d = `1${d}`;
  d = d.replace(/^0+/, "");
  return d.length >= 8 && d.length <= 15 ? d : null;
}

export type CapiLead = {
  eventId: string; leadId: string; name: string; email?: string; phone: string; sourceUrl: string;
  ip?: string; userAgent: string; oppref?: string; obref?: string; gpc: boolean;
};

export async function sendLeadEvent(l: CapiLead): Promise<"sent" | "skipped" | "failed"> {
  const key = process.env.OPENAI_ADS_CAPI_KEY;
  if (!key || l.gpc || /\btest\b/i.test(l.name) || !l.userAgent) return "skipped";
  const user: Record<string, unknown> = { user_agent: l.userAgent.slice(0, 500), external_ids_sha256: [sha(l.leadId.trim())] };
  const email = l.email ? normEmail(l.email) : "";
  if (email) user.emails_sha256 = [sha(email)];
  const phone = normPhone(l.phone);
  if (phone) user.phone_numbers_sha256 = [sha(phone)];
  if (l.ip && /^[0-9a-fA-F:.]+$/.test(l.ip)) user.ip_address = l.ip;
  if (l.obref) user.obref = l.obref;
  const body = {
    integration_source: "ttr-os-beverly-hills",
    ...(process.env.OPENAI_ADS_VALIDATE_ONLY === "1" ? { validate_only: true } : {}),
    events: [{
      id: l.eventId, type: "lead_created", timestamp_ms: Date.now(), action_source: "web", source_url: l.sourceUrl,
      ...(l.oppref ? { oppref: l.oppref } : {}), user, opt_out: false, data: { type: "customer_action" },
    }],
  };
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://bzr.openai.com/v1/events?pid=${encodeURIComponent(PIXEL_ID)}`, {
        method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(8000),
      });
      if (res.ok) return "sent";
      console.error(`[capi] OpenAI answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
      if (res.status < 500 && res.status !== 429) return "failed";
    } catch (error) {
      console.error("[capi] OpenAI could not be reached", error);
    }
    await new Promise((r) => setTimeout(r, 800 * 2 ** attempt));
  }
  return "failed";
}

/** Where a lead came from, in one word, from the UTM source. */
export function leadSource(utmSource: string, referrer: string): string {
  const s = utmSource.toLowerCase();
  if (s === "chatgpt" || s === "openai") return "chatgpt_ads";
  if (s === "google" || s === "adwords") return "google";
  if (s) return s.slice(0, 40);
  if (/google\./i.test(referrer)) return "google";
  return referrer ? "referral" : "direct";
}

/** The cookie value, or "". */
export function cookieOf(header: string | null, name: string): string {
  const m = (header ?? "").match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : "";
}
