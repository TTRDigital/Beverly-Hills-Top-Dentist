/*
 * Page events for the landing pages (TTR-2344, for the visit tracking in TTR-2343): lp_form_open, lp_form_submit, lp_scroll.
 * No personal data is sent, only the page key and where on the page. They go to GA4 / the dataLayer like the call taps do, and as a
 * browser event ("bh:event") the TTR OS tracker can listen for.
 */
type W = { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] };
export function lpEvent(name: "lp_form_open" | "lp_form_submit" | "lp_scroll", params: Record<string, string | number>) {
  try {
    const w = window as unknown as W;
    const p = { page: location.pathname, ...params };
    if (w.gtag) w.gtag("event", name, p);
    else (w.dataLayer = w.dataLayer || []).push({ event: name, ...p });
    window.dispatchEvent(new CustomEvent("bh:event", { detail: { name, ...p } }));
  } catch {
    /* tracking never breaks the page */
  }
}
