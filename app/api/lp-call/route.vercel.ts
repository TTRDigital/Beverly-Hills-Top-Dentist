/*
 * Call taps for the ChatGPT Ads (TTR-1434). The page sends one small beacon the first time a visitor taps a phone number, with the same
 * id the browser pixel used for its phone_call_click event; this sends the event to OpenAI from the server too (Conversions API), so
 * the two count once. Only an event id, the page address and where on the page the tap was go in: no name, number or health detail.
 * Skipped (answer is still 204) without the key, off the real site, for Global Privacy Control and for ids that do not look right.
 */
import { after } from "next/server";
import { VISITOR_COOKIE, cookieOf, sendEvent } from "@/lib/ads-capi";

const reply = () => new Response(null, { status: 204, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
const bad = (status: number) => new Response(null, { status, headers: { "Cache-Control": "no-store" } });

const recent = new Map<string, number[]>();
function tooMany(ip: string): boolean {
  const now = Date.now();
  const times = (recent.get(ip) ?? []).filter((t) => now - t < 600_000);
  times.push(now);
  recent.set(ip, times);
  if (recent.size > 5000) recent.clear();
  return times.length > 30;
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
  const eventId = typeof input.event_id === "string" ? input.event_id : "";
  if (!/^call_[a-z0-9]{6,40}$/.test(eventId)) return bad(400);
  let pageUrl = "";
  try {
    const u = new URL(typeof input.page_url === "string" ? input.page_url : "");
    if (u.hostname.toLowerCase() === host) pageUrl = u.origin + u.pathname + u.search.slice(0, 300);
  } catch {
    /* no usable address */
  }
  if (!pageUrl) return bad(400);

  const cookies = request.headers.get("cookie");
  const hdr = (k: string) => request.headers.get(k) ?? "";
  after(async () => {
    await sendEvent({
      eventId, name: "phone_call_click", sourceUrl: pageUrl, visitorId: cookieOf(cookies, VISITOR_COOKIE), fallbackId: eventId,
      ip: hdr("x-forwarded-for").split(",")[0].trim(), userAgent: hdr("user-agent"),
      oppref: (typeof input.oppref === "string" ? input.oppref.slice(0, 300) : "") || cookieOf(cookies, "__oppref"), obref: cookieOf(cookies, "__obref"),
      gpc: hdr("sec-gpc") === "1",
    });
  });
  return reply();
}
