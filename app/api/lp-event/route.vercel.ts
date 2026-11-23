/*
 * Server copy of the ChatGPT Ads landing page events (TTR-3042). The page sends one small beacon per event with the same event id the
 * browser pixel used, and this sends the event to OpenAI from the server too (Conversions API), so the two count once (OpenAI keeps the
 * first event for a pixel id, event name and id). Events: page_viewed and contents_viewed (standard), request_appointment_click and
 * form_started (custom). Call taps keep their own route (app/api/lp-call) and leads are sent by app/api/lp-lead after the lead is saved.
 * Only the event id, the event name, the landing page address and its title come in: no name, number, email or health detail. The
 * visitor id cookie is hashed, the IP and user agent come from the request. Skipped (answer is still 204) without the key, off the real
 * site (except OPENAI_ADS_VALIDATE_ONLY=1, which records nothing), for Global Privacy Control and for anything that does not look right.
 */
import { after } from "next/server";
import { VISITOR_COOKIE, cookieOf, sendEvent } from "@/lib/ads-capi";
import { LP_PAGES } from "@/lib/lp-pages";

const reply = () => new Response(null, { status: 204, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
const bad = (status: number) => new Response(null, { status, headers: { "Cache-Control": "no-store" } });

/** The events this route accepts, each with the prefix of the id the page makes for it. */
const EVENTS: Record<string, string> = { page_viewed: "pv", contents_viewed: "cv", request_appointment_click: "ra", form_started: "fs" };
const SLUGS = new Set(LP_PAGES.map((p) => p.slug));

const recent = new Map<string, number[]>();
function tooMany(ip: string): boolean {
  const now = Date.now();
  const times = (recent.get(ip) ?? []).filter((t) => now - t < 600_000);
  times.push(now);
  recent.set(ip, times);
  if (recent.size > 5000) recent.clear();
  return times.length > 60;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = (request.headers.get("host") ?? "").replace(/:\d+$/, "").toLowerCase();
  try {
    if (!origin || new URL(origin).hostname.toLowerCase() !== host) return bad(403);
  } catch {
    return bad(403);
  }
  if (tooMany((request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim())) return bad(429);

  let input: Record<string, unknown>;
  try {
    input = JSON.parse((await request.text()).slice(0, 2048));
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error();
  } catch {
    return bad(400);
  }
  const name = typeof input.event === "string" ? input.event : "";
  const prefix = Object.hasOwn(EVENTS, name) ? EVENTS[name] : "";
  const eventId = typeof input.event_id === "string" ? input.event_id : "";
  if (!prefix || !new RegExp(`^${prefix}_[a-z0-9]{6,40}$`).test(eventId)) return bad(400);

  // Only the ChatGPT ad landing pages (/lp/<slug>/) on this same host.
  let pageUrl = "", path = "", slug = "";
  try {
    const u = new URL(typeof input.page_url === "string" ? input.page_url : "");
    const m = u.pathname.match(/^\/lp\/([a-z0-9-]{1,80})\/?$/);
    if (u.hostname.toLowerCase() === host && m && SLUGS.has(m[1])) {
      pageUrl = u.origin + u.pathname + u.search.slice(0, 300);
      path = u.pathname;
      slug = m[1];
    }
  } catch {
    /* no usable address */
  }
  if (!pageUrl) return bad(400);
  // The page title (public text, the same the pixel sends), without control characters.
  const title = (typeof input.title === "string" ? input.title : "").replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 150);
  const contents =
    name === "page_viewed" ? [{ id: path, ...(title ? { name: title } : {}), content_type: "page" }]
    : name === "contents_viewed" ? [{ id: slug, ...(title ? { name: title } : {}), content_type: "product" }]
    : undefined;

  const cookies = request.headers.get("cookie");
  const hdr = (k: string) => request.headers.get(k) ?? "";
  after(async () => {
    await sendEvent({
      eventId, name, contents, sourceUrl: pageUrl, visitorId: cookieOf(cookies, VISITOR_COOKIE),
      ip: hdr("x-forwarded-for").split(",")[0].trim(), userAgent: hdr("user-agent"),
      oppref: (typeof input.oppref === "string" ? input.oppref.slice(0, 300) : "") || cookieOf(cookies, "__oppref"), obref: cookieOf(cookies, "__obref"),
      gpc: hdr("sec-gpc") === "1",
    });
  });
  return reply();
}
