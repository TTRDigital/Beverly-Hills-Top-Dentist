/*
 * Browser side of the ChatGPT Ads and Google measurement for a lead (TTR-1186; spec of Nov 4, 2026). Syntax from OpenAI's docs
 * (developers.openai.com/ads): oaiq("init", { pixelId, user }) takes SHA-256 hashes the site makes itself; oaiq("measure", event, data,
 * { event_id }) deduplicates with the server's Conversions API event (lib/ads-capi.ts) on the same id. Nothing personal goes to GA4.
 * Where the browser sends Global Privacy Control, no ad event or hash is sent.
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_CHATGPT_PIXEL || "3Son8DJqAvAi4ET8SZPsD5";

type W = { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[]; oaiq?: (...a: unknown[]) => void };

const hex = async (s: string) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
};
function normPhone(p: string): string | null {
  let d = p.replace(/\D/g, "");
  if (d.length === 10) d = `1${d}`;
  d = d.replace(/^0+/, "");
  return d.length >= 8 && d.length <= 15 ? d : null;
}

/** A lead id (not personal) and the event id the browser and the server both use, so the lead counts once. */
export function newLeadIds() {
  const id = typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`;
  return { leadId: id, eventId: `lead_${id}` };
}

/** The ad click reference the OpenAI pixel keeps in a first-party cookie, for the server event. */
export function oppref(): string {
  const m = document.cookie.match(/(?:^|;\s*)__oppref=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "";
}

/** After the server accepted a lead: GA4 and the dataLayer (no personal data), then the ChatGPT Ads lead_created with hashed details. */
export async function trackLead(o: { form: string; page?: string; email?: string; phone?: string; leadId: string; eventId: string }) {
  const w = window as unknown as W;
  const params = { form: o.form, ...(o.page ? { page: o.page } : {}) };
  w.gtag?.("event", "generate_lead", params);
  w.dataLayer?.push({ event: "generate_lead", ...params });
  if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) return;
  try {
    const user: Record<string, string> = { external_id_sha256: await hex(o.leadId.trim()) };
    const email = (o.email ?? "").trim().toLowerCase();
    if (email) user.email_sha256 = await hex(email);
    const phone = o.phone ? normPhone(o.phone) : null;
    if (phone) user.phone_number_sha256 = await hex(phone);
    w.oaiq?.("init", { pixelId: PIXEL_ID, user });
  } catch {
    /* hashing unavailable: the event still goes out without the details */
  }
  w.oaiq?.("measure", "lead_created", { type: "customer_action" }, { event_id: o.eventId });
}
