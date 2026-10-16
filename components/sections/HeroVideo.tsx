"use client";

import { useEffect, useRef } from "react";

/**
 * The home hero video. It starts downloading only after the page has loaded,
 * so the poster photo underneath (the first thing visitors see) is not slowed
 * down by the multi-megabyte video. Until the first frame plays, the video is
 * transparent and the poster shows through. Not played for reduced motion.
 */
export function HeroVideo({ mp4, webm }: { mp4?: string; webm?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const start = () => {
      timer = window.setTimeout(() => {
        video.preload = "auto";
        video.play().catch(() => {
          /* autoplay blocked: the poster stays */
        });
      }, 300);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      window.clearTimeout(timer);
    };
  }, []);
  return (
    <video ref={ref} className="absolute inset-0 h-full w-full object-cover" muted loop playsInline preload="none" aria-hidden="true">
      {webm ? <source src={webm} type="video/webm" /> : null}
      {mp4 ? <source src={mp4} type="video/mp4" /> : null}
    </video>
  );
}
