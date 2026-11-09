/*
 * ChatGPT Ads Conversions API (server side), TTR-1186; the spec of Nov 4, 2026. After a lead is saved, the same lead_created event the
 * browser sent goes to OpenAI from the server, with the same id (so it counts once), hashed contact details for matching, and the
 * ad click reference (oppref). Docs: developers.openai.com/ads/conversions-api. Needs OPENAI_ADS_CAPI_KEY (created in Ads Manager,
 * Conversions, Conversion keys; never in client code). Without the key nothing is sent. Test leads and visitors who send Global Privacy
 * Control are never sent. Set OPENAI_ADS_VALIDATE_ONLY=1 to check the wiring without recording conversions. Also used for call taps
 * (phone_call_click, app/api/lp-call) and only on the real site (VERCEL_ENV production).
 */
import { createHash } from "node:crypto";
import { LIVE_HOST, VISITOR_COOKIE, VISITOR_ID_RE } from "./ads-gate.ts";
export { LIVE_HOST, VISITOR_COOKIE };

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

const validVisitorId = (v: string) => VISITOR_ID_RE.test(v);

export type CapiEvent = {
  /** The same id the browser pixel used for this event (OpenAI keeps the first of a matching id). */
  eventId: string;
  /** lead_created, or a custom event such as phone_call_click. */
  name: string;
  sourceUrl: string;
  /** First-party visitor id (hashed here), sent on every event. Falls back to the lead id when the cookie is missing. */
  visitorId?: string;
  fallbackId?: string;
  email?: string; phone?: string;
  ip?: string; userAgent: string; oppref?: string; obref?: string; gpc: boolean;
  /** Visitor name: used only to skip obvious test leads, never sent. */
  name_hint?: string;
};

export type CapiResult = { status: "sent" | "skipped" | "failed"; reason?: string; http?: number; body?: string };

/** The JSON body for OpenAI (no health details, no comment, no name: only hashes, the ids OpenAI asks for, the user agent and the IP). */
export function buildBody(e: CapiEvent, now = Date.now()) {
  const user: Record<string, unknown> = { user_agent: e.userAgent.slice(0, 500) };
  const ext = e.visitorId && validVisitorId(e.visitorId) ? e.visitorId : e.fallbackId ?? "";
  if (ext) user.external_ids_sha256 = [sha(ext.trim())];
  const email = e.email ? normEmail(e.email) : "";
  if (email) user.emails_sha256 = [sha(email)];
  const phone = e.phone ? normPhone(e.phone) : null;
  if (phone) user.phone_numbers_sha256 = [sha(phone)];
  if (e.ip && /^[0-9a-fA-F:.]+$/.test(e.ip)) user.ip_address = e.ip;
  if (e.obref) user.obref = e.obref;
  const custom = e.name !== "lead_created";
  return {
    integration_source: "ttr-os-beverly-hills",
    ...(process.env.OPENAI_ADS_VALIDATE_ONLY === "1" ? { validate_only: true } : {}),
    events: [{
      id: e.eventId, type: custom ? "custom" : e.name, ...(custom ? { custom_event_name: e.name } : {}),
      timestamp_ms: now, action_source: "web", source_url: e.sourceUrl,
      ...(e.oppref ? { oppref: e.oppref } : {}), user, opt_out: false, data: { type: custom ? "custom" : "customer_action" },
    }],
  };
}

/**
 * Sends one event. Only the real site sends (VERCEL_ENV production); previews and local runs are skipped, except in validate-only mode,
 * which records nothing. Also skipped: no key, Global Privacy Control, a test lead (name has the word "test"), no user agent.
 */
export async function sendEvent(e: CapiEvent): Promise<CapiResult> {
  const key = process.env.OPENAI_ADS_CAPI_KEY;
  const validateOnly = process.env.OPENAI_ADS_VALIDATE_ONLY === "1";
  if (!key) return { status: "skipped", reason: "no key" };
  if (process.env.VERCEL_ENV !== "production" && !validateOnly) return { status: "skipped", reason: "not production" };
  if (e.gpc) return { status: "skipped", reason: "global privacy control" };
  if (/\btest\b/i.test(e.name_hint ?? "")) return { status: "skipped", reason: "test lead" };
  if (!e.userAgent) return { status: "skipped", reason: "no user agent" };
  const body = buildBody(e);
  let last: CapiResult = { status: "failed" };
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`${process.env.OPENAI_ADS_API_URL || "https://bzr.openai.com"}/v1/events?pid=${encodeURIComponent(PIXEL_ID)}`, {
        method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(8000),
      });
      const text = (await res.text().catch(() => "")).slice(0, 500);
      if (res.ok) return { status: "sent", http: res.status, body: text };
      console.error(`[capi] OpenAI answered ${res.status}: ${text.slice(0, 300)}`);
      last = { status: "failed", http: res.status, body: text };
      if (res.status < 500 && res.status !== 429) return last;
    } catch (error) {
      console.error("[capi] OpenAI could not be reached", error);
    }
    await new Promise((r) => setTimeout(r, 800 * 2 ** attempt));
  }
  return last;
}

export type CapiLead = {
  eventId: string; leadId: string; name: string; email?: string; phone: string; sourceUrl: string;
  ip?: string; userAgent: string; oppref?: string; obref?: string; gpc: boolean; visitorId?: string;
};

/** lead_created, after a lead was saved. */
export const sendLeadEvent = (l: CapiLead) =>
  sendEvent({ eventId: l.eventId, name: "lead_created", sourceUrl: l.sourceUrl, visitorId: l.visitorId, fallbackId: l.leadId, email: l.email, phone: l.phone,
    ip: l.ip, userAgent: l.userAgent, oppref: l.oppref, obref: l.obref, gpc: l.gpc, name_hint: l.name });

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
