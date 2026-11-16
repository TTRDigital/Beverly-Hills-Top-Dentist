import type { SiteSettings } from "@/lib/types";

/*
 * Two pages the practice approved on Nov 13 now carry the call tracking number of the ChatGPT ad pages (Kia, Nov 16, TTR-2195).
 * The number forwards to the practice line 310-274-7005, which the rest of the site and the Google listing keep.
 */
export const ADS_NUMBER_PATHS = ["/blog/night-guards-hollywood/", "/areas-we-serve/marina-del-rey/"];

const ADS_PHONE = { phone: "424-424-3347", phoneHref: "tel:+14244243347" };

/** The site settings for one page: the ads number on the two pages above, the usual number everywhere else. */
export function settingsForPath<T extends Pick<SiteSettings, "phone" | "phoneHref">>(settings: T, path: string): T {
  return ADS_NUMBER_PATHS.includes(path) ? { ...settings, ...ADS_PHONE } : settings;
}
