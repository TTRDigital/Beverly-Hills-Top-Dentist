/*
 * Leads go to TTR OS, the practice's own record of every request (Kia, Nov 3: no GoHighLevel; TTR-1164). Server to server, form
 * encoded, the same call the TTR OS tracker makes; the site key is public. TTR OS saves the lead (source "form") with the page and
 * the campaign details, and shows it on the Leads page. The visitor's address is forwarded so one visitor's tries are counted as one.
 */
const OS_URL = process.env.TTR_OS_URL || "https://portal.ttrdigitalmarketing.com";
const SITE_KEY = process.env.NEXT_PUBLIC_TTR_SITE_KEY || "upT3tdzrNNsUUjhtnbz_Nw";
const SITE_ORIGIN = "https://beverlyhillstopdentist.com";

export type OsLead = {
  name: string; phone: string; email?: string; service?: string; message?: string;
  pageUrl?: string; landingUrl?: string; referrer?: string; ip?: string; userAgent?: string;
};

/** The landing address with the ad details added when it lacks them, so TTR OS can read the source (utm_*, click ids) from the one address it is given. */
const ATTR = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;
export function landingWithAttribution(landing: string, attrs: Record<string, string | undefined>): string {
  try {
    const u = new URL(landing);
    for (const k of ATTR) { const v = (attrs[k] || "").trim(); if (v && !u.searchParams.has(k)) u.searchParams.set(k, v.slice(0, 200)); }
    return u.toString().slice(0, 1000);
  } catch { return landing; }
}

/**
 * True when TTR OS took the request (it answers 204 to a form it saved or deliberately ignored). By default one retry for a network failure.
 * On the visitor's request pass { attempts: 1, timeoutMs: 4000 } so a TTR OS outage can never hold the form up for long; a failed first try is
 * retried after the answer has been sent.
 */
export async function sendLeadToTtrOs(l: OsLead, opts: { attempts?: number; timeoutMs?: number } = {}): Promise<boolean> {
  const attempts = opts.attempts ?? 2, timeoutMs = opts.timeoutMs ?? 8000;
  const path = (() => { try { return new URL(l.pageUrl || "").pathname || "/"; } catch { return "/"; } })();
  const body = new URLSearchParams({ k: SITE_KEY, p: path, r: l.referrer || "", u: l.landingUrl || l.pageUrl || SITE_ORIGIN + path, f_name: l.name, f_phone: l.phone });
  if (l.email) body.set("f_email", l.email);
  if (l.service) body.set("f_service", l.service);
  if (l.message) body.set("f_message", l.message);
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      const res = await fetch(`${OS_URL}/api/site/form`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded", "user-agent": l.userAgent || "Mozilla/5.0 (beverlyhillstopdentist.com form)", "x-forwarded-for": l.ip || "", origin: SITE_ORIGIN },
        body, signal: AbortSignal.timeout(timeoutMs),
      });
      if (res.status < 500) return true;
      console.error(`[lead] TTR OS answered ${res.status}`);
    } catch (error) {
      console.error("[lead] TTR OS could not be reached", error);
    }
    if (attempt + 1 < attempts) await new Promise((r) => setTimeout(r, 600));
  }
  return false;
}
