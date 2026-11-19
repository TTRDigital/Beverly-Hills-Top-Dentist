/*
 * Ad headline on the ChatGPT Ads landing pages (TTR-2344). The headline at the top can match the ad the visitor tapped, chosen by the
 * ad's utm_content (or ad_group) value. ONLY the headlines listed here can ever appear: the URL value is used as a lookup key, never
 * printed, and anything not in the list (or any value that is not a plain key) falls back to the page's own headline.
 *
 * PLACEHOLDER: the variants below are built from copy already approved on these pages and the Nov 3 brief. Replace them with the real ad
 * headlines (and set the same key as utm_content on each ad) once Kia has the ad list; Carlos approves any new wording before it goes live.
 * Keys: lowercase letters, digits and hyphens.
 */
export const LP_HEADLINES: Record<string, Record<string, string>> = {
  "general-biomimetic": {
    "natural-teeth": "Dental Care That Puts Your Natural Teeth First",
    "beverly-hills-dentist": "A Beverly Hills Dentist Who Puts Your Natural Teeth First",
  },
  "clear-aligners": {
    "invisalign-beverly-hills": "Invisalign in Beverly Hills",
    "explore-invisalign": "Explore Invisalign in Beverly Hills",
  },
  emergency: {
    "emergency-dentist": "Need an Emergency Dentist in Beverly Hills",
    "toothache-beverly-hills": "Toothache? Call a Beverly Hills Dentist",
  },
  "dental-implants": {
    "dental-implants-beverly-hills": "Explore Dental Implants in Beverly Hills",
  },
};

const KEY_RE = /^[a-z0-9-]{1,60}$/;
const PARAMS = ["utm_content", "ad_group"] as const;

/** The allow-listed headline for this URL, or the page's own headline. Never returns text taken from the URL. */
export function resolveHeadline(pageKey: string, fallback: string, search: string): string {
  const list = LP_HEADLINES[pageKey];
  if (!list) return fallback;
  const params = new URLSearchParams(search);
  for (const name of PARAMS) {
    const raw = (params.get(name) ?? "").trim().toLowerCase().replace(/[\s_]+/g, "-");
    if (KEY_RE.test(raw) && Object.hasOwn(list, raw)) return list[raw];
  }
  return fallback;
}
