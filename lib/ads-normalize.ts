/*
 * Normalizing contact details before they are hashed for the ChatGPT Ads pixel and Conversions API (TTR-3042). Shared by the browser and
 * the server (no Node imports), so both sides hash exactly the same string. Rules from OpenAI's Measurement Pixel and Conversions API docs
 * (developers.openai.com/ads/measurement-pixel, /ads/conversions-api): the normalized value is UTF-8 encoded, hashed with SHA-256 and
 * sent as 64 lowercase hex characters. Raw values are never sent.
 */

/** Email: trim surrounding whitespace and lowercase. */
export const normEmail = (e: string) => e.trim().toLowerCase();

/** Phone: keep the country code, digits only, no leading "+" or zeros; a US 10 digit number gets 1. Null when it is not 8 to 15 digits. */
export function normPhone(p: string): string | null {
  let d = p.replace(/\D/g, "");
  if (d.length === 10) d = `1${d}`;
  d = d.replace(/^0+/, "");
  return d.length >= 8 && d.length <= 15 ? d : null;
}

/** First or last name: lowercase, whitespace and ASCII punctuation removed, other letters kept ("O'Connor" is "oconnor", "José" is "josé"). */
export const normName = (n: string) => n.toLowerCase().replace(/[\s!-/:-@[-`{-~]/g, "");

/** A full name from the form, split into first name (the first word) and last name (the rest). */
export function splitName(full: string): { first: string; last: string } {
  const [first = "", ...rest] = full.trim().split(/\s+/);
  return { first, last: rest.join(" ") };
}
