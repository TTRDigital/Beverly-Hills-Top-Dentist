"use client";

import { useEffect, useRef } from "react";

/**
 * The home hero video. It starts downloading only after the page has loaded,
 * so the poster photo underneath (the first thing visitors see) is not slowed
 * down by the multi-megabyte video. Until the first frame plays, the video is
 * transparent and the poster shows through. Not played for reduced motion,
 * Save-Data or a slow connection.
 *
 * phoneMp4 (the ChatGPT ad landing pages, TTR-3066): phones also play the video,
 * from this smaller copy (about 0.75 MB, no sound), right after the page has
 * loaded. Without it, phones keep the poster only (the home page). poster: the
 * same photo as the one underneath, so the largest paint stays the photo.
 */
export function HeroVideo({ mp4, webm, phoneMp4, poster, className = "absolute inset-0 h-full w-full object-cover" }: { mp4?: string; webm?: string; phoneMp4?: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = !!conn && (conn.saveData === true || /(^|\b)(slow-2g|2g|3g)\b/.test(conn.effectiveType ?? ""));
    const wide = window.matchMedia("(min-width: 768px)").matches;
    if (!video || slow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Phones get the poster photo only, unless a phone copy is given (the home page's speed score on phones depends on it).
    if (!wide && !phoneMp4) return;
    let timer = 0;
    const start = () => {
      timer = window.setTimeout(() => {
        if (phoneMp4) video.src = wide ? (mp4 ?? phoneMp4) : phoneMp4;
        video.preload = "auto";
        video.play().catch(() => {
          /* autoplay blocked: the poster stays */
        });
      }, phoneMp4 ? 0 : 300);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      window.clearTimeout(timer);
    };
  }, [mp4, phoneMp4]);
  return (
    <video ref={ref} className={className} muted loop playsInline preload="none" poster={poster} aria-hidden="true">
      {/* With a phone copy, the address is set when the video starts, so the browser never picks a file before then. */}
      {!phoneMp4 && webm ? <source src={webm} type="video/webm" /> : null}
      {!phoneMp4 && mp4 ? <source src={mp4} type="video/mp4" /> : null}
    </video>
  );
}
