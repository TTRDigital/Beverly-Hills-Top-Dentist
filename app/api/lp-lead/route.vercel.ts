/*
 * Lead handler for the ChatGPT Ads landing pages (/lp/, TTR-1156). Same delivery as app/api/lead/route.vercel.ts (the practice's
 * GoHighLevel inbound webhook), with the landing page's rules: name and phone required, email optional, no symptoms or medical
 * fields, and the page key plus campaign details kept as hidden fields in the internal lead record.
 */
import { deliverLead, ghlWebhooks } from "@/lib/ghl";
import { MIN_FILL_MS } from "@/lib/lead-options";

type In = Record<string, unknown>;
const PAGE_KEYS = new Set(["general-biomimetic", "clear-aligners", "emergency", "dental-implants", "veneers-smile-makeover", "cleaning-exam"]);
// Hidden fields kept with the lead: where it came from, never what it is about.
const HIDDEN = ["page_url", "landing_page", "referrer", "campaign", "ad_group", "ad_id", "oppref", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

const reply = (status: number, body: Record<string, unknown>) => Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
const text = (input: In, key: string, max: number) => (typeof input[key] === "string" ? (input[key] as string).trim().slice(0, max) : "");

const recent = new Map<string, number[]>();
function tooMany(ip: string): boolean {
  const now = Date.now();
  const times = (recent.get(ip) ?? []).filter((t) => now - t < 600_000);
  times.push(now);
  recent.set(ip, times);
  if (recent.size > 5000) recent.clear();
  return times.length > 10;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = (request.headers.get("host") ?? "").replace(/:\d+$/, "").toLowerCase();
  if (origin) {
    try {
      if (new URL(origin).hostname.toLowerCase() !== host) return reply(403, { ok: false, error: "Forbidden." });
    } catch {
      return reply(403, { ok: false, error: "Forbidden." });
    }
  }
  if (tooMany((request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim())) return reply(429, { ok: false, error: "Too many requests. Please call us instead." });

  let input: In;
  try {
    input = JSON.parse((await request.text()).slice(0, 32 * 1024));
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error();
  } catch {
    return reply(400, { ok: false, error: "Invalid request." });
  }

  const name = text(input, "full_name", 120), email = text(input, "email", 200), phoneIn = text(input, "phone", 40), pageKey = text(input, "page_key", 40);
  const errors: Record<string, string> = {};
  if (!PAGE_KEYS.has(pageKey)) return reply(400, { ok: false, error: "Invalid request." });
  if (name.length < 2) errors.full_name = "Please enter your full name.";
  if (!/^[0-9()#&+*\-=. ]+$/.test(phoneIn) || phoneIn.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number with area code.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email address or leave it empty.";
  if (input.consent !== true) errors.consent = "Please agree so we can contact you.";
  if (Object.keys(errors).length) return reply(422, { ok: false, error: "Please check the form.", fields: errors });

  const trapFilled = text(input, "website_url", 200) !== "";
  const elapsed = Number.isInteger(input.elapsed_ms) ? (input.elapsed_ms as number) : null;
  const tooFast = elapsed !== null && elapsed < MIN_FILL_MS;
  if (trapFilled && tooFast) return reply(200, { ok: true });
  const spamCheck = trapFilled ? "suspect: hidden field filled" : tooFast ? `suspect: sent in ${elapsed} ms` : "ok";

  if (!ghlWebhooks().length) return reply(503, { ok: false, error: "The form is not connected yet. Please call us instead." });


  const digits = phoneIn.replace(/\D/g, "");
  const phone = digits.length === 10 ? `+1${digits}` : digits.length === 11 && digits[0] === "1" ? `+${digits}` : `${phoneIn.startsWith("+") ? "+" : ""}${digits}`;
  const [first = "", ...rest] = name.split(/\s+/);
  const tags = ["website-lead", "chatgpt-ads-landing-page", `lp-${pageKey}`];
  if (spamCheck !== "ok") tags.push("suspected-spam");

  const payload: Record<string, unknown> = {
    source: `ChatGPT Ads landing page: ${pageKey}`,
    page_key: pageKey,
    submitted_at: new Date().toISOString(),
    name, first_name: first, last_name: rest.join(" "), email, phone, phone_raw: phoneIn,
    consent: true, tags, spam_check: spamCheck,
  };
  for (const k of HIDDEN) payload[k] = text(input, k, 1000);

  // To every GoHighLevel webhook in lib/ghl.ts; saved when at least one accepts it.
  if (await deliverLead(payload, "lp-lead")) return reply(200, { ok: true, delivered: true });
  return reply(502, { ok: false, error: "We could not send your request. Please call us instead." });
}
