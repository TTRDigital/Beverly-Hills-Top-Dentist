/*
 * Lead alerts sent by the site itself (Kia, Nov 5, 2026): GoHighLevel's own email notifications were not reaching the office.
 * Every landing page lead now also goes out as
 * - a plain text email through Postmark (POSTMARK_SERVER_TOKEN) or Resend (RESEND_API_KEY), from LEAD_ALERT_FROM, an address on a
 *   domain verified with that service (Kia, Nov 5: the agency's own domain, ttrdigitalmarketing.com), and
 * - a text message through the GoHighLevel API, from the practice's GoHighLevel number (needs GHL_API_KEY and GHL_LOCATION_ID).
 * The GoHighLevel webhooks in lib/ghl.ts are unchanged. Alerts run after the visitor's answer is sent: a missing key skips that
 * alert with a log line, and a failure is logged, so neither can block or fail a form submit. Keys live only in Vercel's
 * environment variables, never in code.
 */

const EMAIL_TO = ["kia@ttrdigitalmarketing.com", "carlos@beverlyhillstopdentist.com", "info@beverlyhillstopdentist.com"];
const SMS_TO = ["+13102747005", "+15718308125", "+13234451710"];
const GHL_API = "https://services.leadconnectorhq.com";

export type LeadAlert = {
  name: string; phone: string; email?: string; comment?: string; page: string; pageUrl?: string;
  utmSource?: string; utmMedium?: string; utmCampaign?: string; campaign?: string; adGroup?: string; spamCheck?: string;
};

/** A comma or space separated list from an environment variable, or the default list. */
const listFrom = (env: string | undefined, fallback: string[]) => {
  const items = (env ?? "").split(/[\s,;]+/).map((s) => s.trim()).filter(Boolean);
  return items.length ? items : fallback;
};

/** US numbers in E.164 (+1XXXXXXXXXX); other numbers keep their digits with a +. */
export function e164(p: string): string {
  const d = p.replace(/\D/g, "");
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d[0] === "1") return `+${d}`;
  return d ? `+${d}` : "";
}

/** (310) 555-1234 for a US number, the number as typed otherwise. */
const pretty = (p: string) => {
  const d = p.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : p;
};

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();
const suspect = (l: LeadAlert) => !!l.spamCheck && l.spamCheck !== "ok";

export function emailText(l: LeadAlert): { subject: string; text: string } {
  const subject = `${suspect(l) ? "[Possible spam] " : ""}New lead: ${oneLine(l.name)} (${l.page})`.slice(0, 200);
  const rows: [string, string | undefined][] = [
    ["Name", l.name], ["Phone", pretty(l.phone)], ["Email", l.email || "not given"], ["Landing page", l.page], ["Page URL", l.pageUrl],
    ["UTM source", l.utmSource || "none"], ["UTM medium", l.utmMedium], ["UTM campaign", l.utmCampaign], ["Campaign", l.campaign], ["Ad group", l.adGroup],
    ["Spam check", suspect(l) ? l.spamCheck : undefined],
  ];
  const lines = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${oneLine(v as string)}`);
  const text = [
    "New request from a ChatGPT Ads landing page on beverlyhillstopdentist.com.", "",
    ...lines, "", "Comment:", l.comment?.trim() || "(none)", "",
    "Please call the patient back as soon as you can. This lead was also sent to GoHighLevel as usual.",
  ].join("\n");
  return { subject, text };
}

export function smsText(l: LeadAlert): string {
  return `${suspect(l) ? "Possible spam. " : ""}New BHDA lead from the ChatGPT ad page (${l.page}): ${oneLine(l.name)}, ${pretty(l.phone)}. Details are in the lead email.`.slice(0, 320);
}

/** Postmark when POSTMARK_SERVER_TOKEN is set, otherwise Resend when RESEND_API_KEY is set. */
async function sendEmail(l: LeadAlert): Promise<void> {
  const postmark = process.env.POSTMARK_SERVER_TOKEN, resend = process.env.RESEND_API_KEY, from = process.env.LEAD_ALERT_FROM;
  if ((!postmark && !resend) || !from) {
    console.warn(`[lead-alert] email skipped: ${!from ? "LEAD_ALERT_FROM" : "POSTMARK_SERVER_TOKEN (or RESEND_API_KEY)"} is not set`);
    return;
  }
  const { subject, text } = emailText(l);
  const to = listFrom(process.env.LEAD_ALERT_EMAILS, EMAIL_TO);
  const [service, url, headers, body] = postmark
    ? ["Postmark", "https://api.postmarkapp.com/email", { "X-Postmark-Server-Token": postmark, Accept: "application/json", "Content-Type": "application/json" },
      { From: from, To: to.join(", "), Subject: subject, TextBody: text, MessageStream: process.env.POSTMARK_MESSAGE_STREAM || "outbound", ...(l.email ? { ReplyTo: l.email } : {}) }]
    : ["Resend", "https://api.resend.com/emails", { Authorization: `Bearer ${resend}`, "Content-Type": "application/json" },
      { from, to, subject, text, ...(l.email ? { reply_to: l.email } : {}) }];
  try {
    const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body), signal: AbortSignal.timeout(8000) });
    if (!res.ok) console.error(`[lead-alert] ${service} answered ${res.status}: ${(await res.text().catch(() => "")).slice(0, 300)}`);
  } catch (error) {
    console.error(`[lead-alert] ${service} could not be reached`, error);
  }
}

/** GoHighLevel sends texts to contacts, so each alert number is kept as a contact (found or created by phone) and texted. */
async function ghlText(to: string, message: string, key: string, locationId: string, from: string | undefined): Promise<void> {
  const headers = { Authorization: `Bearer ${key}`, "Content-Type": "application/json", Accept: "application/json" };
  const up = await fetch(`${GHL_API}/contacts/upsert`, {
    method: "POST", headers: { ...headers, Version: "2021-07-28" }, signal: AbortSignal.timeout(8000),
    body: JSON.stringify({ locationId, phone: to, firstName: "Lead Alerts", lastName: to.slice(-4), tags: ["lead-alert-recipient"], source: "Website lead alerts" }),
  });
  if (!up.ok) throw new Error(`contact upsert answered ${up.status}: ${(await up.text().catch(() => "")).slice(0, 300)}`);
  const contactId = ((await up.json()) as { contact?: { id?: string } }).contact?.id;
  if (!contactId) throw new Error("contact upsert returned no contact id");
  const res = await fetch(`${GHL_API}/conversations/messages`, {
    method: "POST", headers: { ...headers, Version: "2021-04-15" }, signal: AbortSignal.timeout(8000),
    body: JSON.stringify({ type: "SMS", contactId, message, ...(from ? { fromNumber: from } : {}) }),
  });
  if (!res.ok) throw new Error(`send answered ${res.status}: ${(await res.text().catch(() => "")).slice(0, 300)}`);
}

async function sendTexts(l: LeadAlert): Promise<void> {
  const key = process.env.GHL_API_KEY, locationId = process.env.GHL_LOCATION_ID;
  if (!key || !locationId) {
    console.warn(`[lead-alert] text skipped: ${!key ? "GHL_API_KEY" : "GHL_LOCATION_ID"} is not set`);
    return;
  }
  const from = process.env.GHL_SMS_FROM_NUMBER ? e164(process.env.GHL_SMS_FROM_NUMBER) : undefined;
  const message = smsText(l);
  const to = listFrom(process.env.LEAD_ALERT_PHONES, SMS_TO).map(e164).filter(Boolean);
  await Promise.all(to.map(async (n) => {
    try {
      await ghlText(n, message, key, locationId, from);
    } catch (error) {
      console.error(`[lead-alert] text to ...${n.slice(-4)} failed`, error);
    }
  }));
}

/** Sends the email and the texts. Never throws. */
export async function sendLeadAlerts(l: LeadAlert): Promise<void> {
  await Promise.all([sendEmail(l), sendTexts(l)]).catch((error) => console.error("[lead-alert] failed", error));
}
