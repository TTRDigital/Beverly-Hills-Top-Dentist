"use client";

import { useEffect } from "react";
import { lpEvent } from "@/lib/lp-events";

/** Sends lp_scroll once at 25, 50, 75 and 90 percent of the page. */
export function LpScrollTracker({ pageKey }: { pageKey: string }) {
  useEffect(() => {
    const sent = new Set<number>();
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h <= 0) return;
      const pct = (window.scrollY / h) * 100;
      for (const m of [25, 50, 75, 90]) if (pct >= m && !sent.has(m)) { sent.add(m); lpEvent("lp_scroll", { page_key: pageKey, percent: m }); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pageKey]);
  return null;
}
