/*
 * Appointment form handler on Vercel (Vercel has no PHP). It does what public/api/lead.php does on SiteGround: validates
 * the request like the form, filters spam, and posts the lead as flat JSON to the GoHighLevel inbound webhook. Keep the
 * two in sync. The webhooks are listed in lib/ghl.ts (a GHL_WEBHOOK_URL environment variable on Vercel adds more).
 */
import { deliverLead, ghlWebhooks } from "@/lib/ghl";
import { attributionKeys, MIN_FILL_MS } from "@/lib/lead-options";
import { sendLeadToTtrOs } from "@/lib/ttr-os-lead";
import { after } from "next/server";
import { cookieOf, leadSource, sendLeadEvent } from "@/lib/ads-capi";

type In = Record<string, unknown>;


const reply = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

const text = (input: In, key: string, max: number) => {
  const v = input[key];
  return typeof v === "string" ? v.trim().slice(0, max) : "";
};

/* Best-effort per-address limit: 10 requests per 10 minutes on this server instance. */
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
  // Same-site posts only.
  const origin = request.headers.get("origin");
  const host = (request.headers.get("host") ?? "").replace(/:\d+$/, "").toLowerCase();
  if (origin) {
    try {
      if (new URL(origin).hostname.toLowerCase() !== host) return reply(403, { ok: false, error: "Forbidden." });
    } catch {
      return reply(403, { ok: false, error: "Forbidden." });
    }
  }
  const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (tooMany(ip)) return reply(429, { ok: false, error: "Too many requests. Please call us instead." });

  let input: In;
  try {
    const raw = await request.text();
    input = JSON.parse(raw.slice(0, 64 * 1024));
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error();
  } catch {
    return reply(400, { ok: false, error: "Invalid request." });
  }

  // Keep in sync with components/forms/AppointmentForm.tsx and public/api/lead.php.
  const lead = {
    full_name: text(input, "full_name", 120),
    email: text(input, "email", 200),
    phone: text(input, "phone", 40),
    comment: text(input, "comment", 3000),
  };
  const errors: Record<string, string> = {};
  if (lead.full_name.length < 2) errors.full_name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) errors.email = "Please enter a valid email address.";
  if (!/^[0-9()#&+*\-=. ]+$/.test(lead.phone) || lead.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number with area code.";
  if (input.consent !== true) errors.consent = "Please agree so we can contact you.";
  if (Object.keys(errors).length) return reply(422, { ok: false, error: "Please check the form.", fields: errors });

  // Spam: drop only when both signals agree (hidden field filled AND sent faster than a person can type).
  const trapFilled = text(input, "website_url", 200) !== "";
  const elapsed = Number.isInteger(input.elapsed_ms) ? (input.elapsed_ms as number) : null;
  const tooFast = elapsed !== null && elapsed < MIN_FILL_MS;
  if (trapFilled && tooFast) return reply(200, { ok: true });
  const spamCheck = trapFilled ? "suspect: hidden field filled" : tooFast ? `suspect: sent in ${elapsed} ms` : "ok";

  if (!ghlWebhooks().length) return reply(503, { ok: false, error: "The form is not connected yet. Please call us instead." });

  // E.164 for US numbers.
  const digits = lead.phone.replace(/\D/g, "");
  const phone = digits.length === 10 ? `+1${digits}` : digits.length === 11 && digits[0] === "1" ? `+${digits}` : `${lead.phone.startsWith("+") ? "+" : ""}${digits}`;
  const [first = "", ...rest] = lead.full_name.split(/\s+/);
  const tags = ["website-lead", "appointment-request"];
  if (spamCheck !== "ok") tags.push("suspected-spam");

  const payload: Record<string, unknown> = {
    source: "Website appointment form",
    submitted_at: new Date().toISOString(),
    name: lead.full_name,
    first_name: first,
    last_name: rest.join(" "),
    email: lead.email,
    phone,
    phone_raw: lead.phone,
    message: lead.comment,
    consent: true,
    tags,
    spam_check: spamCheck,
  };
  for (const key of ["page_url", "landing_page", "referrer", ...attributionKeys]) payload[key] = text(input, key, 1000);
  payload.lead_source = leadSource(text(input, "utm_source", 100), text(input, "referrer", 500));
  payload.lead_id = text(input, "lead_id", 80);
  payload.event_id = text(input, "event_id", 100);

  // TTR OS is the practice's record of every request (TTR-1164); the GoHighLevel webhooks in lib/ghl.ts get a copy until Kia says to stop.
  // The request counts as saved when either accepts it, so a lead is never lost to one side being down.
  const [ghl, os] = await Promise.all([
    deliverLead(payload, "lead"),
    sendLeadToTtrOs({ name: lead.full_name, phone: lead.phone, email: lead.email, service: "Appointment request", message: lead.comment, pageUrl: text(input, "page_url", 1000), landingUrl: text(input, "landing_page", 1000) || text(input, "page_url", 1000), referrer: text(input, "referrer", 1000),
      ip: (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim(), userAgent: request.headers.get("user-agent") ?? "" }),
  ]);
  if (ghl || os) {
    // The same lead_created event goes to OpenAI from the server, with the id the browser used (counted once). Skipped without the key,
    // for test leads and for Global Privacy Control; a failure is logged and never changes the visitor's answer.
    const eventId = text(input, "event_id", 100), leadId = text(input, "lead_id", 80);
    if (/^[A-Za-z0-9_-]{8,100}$/.test(eventId) && /^[A-Za-z0-9_-]{8,80}$/.test(leadId)) {
      const cookies = request.headers.get("cookie");
      const hdr = (k: string) => request.headers.get(k) ?? "";
      after(async () => {
        await sendLeadEvent({
          eventId, leadId, name: lead.full_name, email: lead.email, phone: lead.phone, sourceUrl: text(input, "page_url", 1000) || "https://beverlyhillstopdentist.com/",
          ip: hdr("x-forwarded-for").split(",")[0].trim(), userAgent: hdr("user-agent"),
          oppref: text(input, "oppref", 300) || cookieOf(cookies, "__oppref"), obref: cookieOf(cookies, "__obref"), gpc: hdr("sec-gpc") === "1",
        });
      });
    }
    return reply(200, { ok: true, delivered: true });
  }
  return reply(502, { ok: false, error: "We could not send your request. Please call us instead." });
}
