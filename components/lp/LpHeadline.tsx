"use client";

import { useSyncExternalStore } from "react";
import { resolveHeadline } from "@/lib/lp-headlines";

const subscribe = () => () => {};
const noSearch = () => "";
const search = () => window.location.search;

/** The page headline: the allow-listed ad headline when the URL names one, otherwise the page's own (the server-rendered text). */
export function LpHeadline({ pageKey, fallback, className }: { pageKey: string; fallback: string; className?: string }) {
  const s = useSyncExternalStore(subscribe, search, noSearch);
  return <h1 className={className}>{resolveHeadline(pageKey, fallback, s)}</h1>;
}
