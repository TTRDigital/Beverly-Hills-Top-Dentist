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

/** True when TTR OS took the request (it answers 204 to a form it saved or deliberately ignored). One retry for a network failure. */
export async function sendLeadToTtrOs(l: OsLead): Promise<boolean> {
  const path = (() => { try { return new URL(l.pageUrl || "").pathname || "/"; } catch { return "/"; } })();
  const body = new URLSearchParams({ k: SITE_KEY, p: path, r: l.referrer || "", u: l.landingUrl || l.pageUrl || SITE_ORIGIN + path, f_name: l.name, f_phone: l.phone });
  if (l.email) body.set("f_email", l.email);
  if (l.service) body.set("f_service", l.service);
  if (l.message) body.set("f_message", l.message);
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(`${OS_URL}/api/site/form`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded", "user-agent": l.userAgent || "Mozilla/5.0 (beverlyhillstopdentist.com form)", "x-forwarded-for": l.ip || "", origin: SITE_ORIGIN },
        body, signal: AbortSignal.timeout(8000),
      });
      if (res.status < 500) return true;
      console.error(`[lead] TTR OS answered ${res.status}`);
    } catch (error) {
      console.error("[lead] TTR OS could not be reached", error);
    }
    await new Promise((r) => setTimeout(r, 600));
  }
  return false;
}
