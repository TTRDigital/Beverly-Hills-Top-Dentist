/*
 * Lead handler for the ChatGPT Ads landing pages (/lp/, TTR-1156). Same delivery as app/api/lead/route.vercel.ts (the practice's
 * GoHighLevel inbound webhook), with the landing page's rules: name, phone and a short comment required (Nov 5, 2026), email optional, and the page key plus campaign details kept as hidden fields in the internal lead record.
 */
import { deliverLead, ghlWebhooks } from "@/lib/ghl";
import { MIN_FILL_MS } from "@/lib/lead-options";
import { sendLeadToTtrOs } from "@/lib/ttr-os-lead";
import { after } from "next/server";
import { cookieOf, leadSource, sendLeadEvent } from "@/lib/ads-capi";

type In = Record<string, unknown>;
const PAGE_KEYS = new Set(["general-biomimetic", "clear-aligners", "emergency", "dental-implants", "veneers-smile-makeover", "cleaning-exam", "teeth-whitening", "full-arch-implants", "dental-crowns", "dental-bridges", "tooth-colored-fillings", "restorative-dentistry", "toothache", "broken-tooth", "new-patient", "best-dentist", "dentist-near-me"]);
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

  const name = text(input, "full_name", 120), email = text(input, "email", 200), phoneIn = text(input, "phone", 40), pageKey = text(input, "page_key", 40), comment = text(input, "comment", 1000);
  const errors: Record<string, string> = {};
  if (!PAGE_KEYS.has(pageKey)) return reply(400, { ok: false, error: "Invalid request." });
  if (name.length < 2) errors.full_name = "Please enter your full name.";
  if (!/^[0-9()#&+*\-=. ]+$/.test(phoneIn) || phoneIn.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number with area code.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email address or leave it empty.";
  if (comment.length < 2) errors.comment = "Please add a short comment.";
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
    message: comment, comment, // "message" is the key the main site form uses for GoHighLevel
    consent: true, tags, spam_check: spamCheck,
  };
  for (const k of HIDDEN) payload[k] = text(input, k, 1000);
  payload.lead_source = leadSource(text(input, "utm_source", 100), text(input, "referrer", 500));
  payload.lead_id = text(input, "lead_id", 80);
  payload.event_id = text(input, "event_id", 100);

  // TTR OS is the practice's record of every request (TTR-1164); the GoHighLevel webhooks in lib/ghl.ts get a copy until Kia says to stop.
  // The request counts as saved when either accepts it, so a lead is never lost to one side being down.
  const PAGE_LABEL: Record<string, string> = { "general-biomimetic": "General and biomimetic dentistry", "clear-aligners": "Clear aligners", emergency: "Emergency dentist", "dental-implants": "Dental implants", "veneers-smile-makeover": "Veneers and smile makeovers", "cleaning-exam": "Teeth cleaning and new patient exams", "teeth-whitening": "Teeth whitening", "full-arch-implants": "Full arch implants", "dental-crowns": "Dental crowns and broken tooth repair", "dental-bridges": "Dental bridges", "tooth-colored-fillings": "Tooth-colored fillings", "restorative-dentistry": "Restorative dentistry", toothache: "Toothache and urgent care", "broken-tooth": "Broken tooth repair", "new-patient": "New patient visit", "best-dentist": "Dentist consultation", "dentist-near-me": "Dentist near me" };
  const hid = Object.fromEntries(HIDDEN.map((k) => [k, text(input, k, 300)]));
  const details = [`ChatGPT Ads landing page: ${PAGE_LABEL[pageKey]}`, hid.campaign && `campaign ${hid.campaign}`, hid.ad_group && `ad group ${hid.ad_group}`, hid.ad_id && `ad ${hid.ad_id}`, hid.oppref && `oppref ${hid.oppref}`, spamCheck !== "ok" && `check: ${spamCheck}`].filter(Boolean).join(" | ");
  const [ghl, os] = await Promise.all([
    deliverLead(payload, "lp-lead"),
    sendLeadToTtrOs({ name, phone: phoneIn, email, service: PAGE_LABEL[pageKey], message: `${comment}\n\n${details}`, pageUrl: text(input, "page_url", 1000), landingUrl: text(input, "page_url", 1000), referrer: text(input, "referrer", 1000),
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
          eventId, leadId, name: name, email: email, phone: phoneIn, sourceUrl: text(input, "page_url", 1000) || "https://beverlyhillstopdentist.com/",
          ip: hdr("x-forwarded-for").split(",")[0].trim(), userAgent: hdr("user-agent"),
          oppref: text(input, "oppref", 300) || cookieOf(cookies, "__oppref"), obref: cookieOf(cookies, "__obref"), gpc: hdr("sec-gpc") === "1",
        });
      });
    }
    return reply(200, { ok: true, delivered: true });
  }
  return reply(502, { ok: false, error: "We could not send your request. Please call us instead." });
}
