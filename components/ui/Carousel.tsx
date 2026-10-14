"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";

/**
 * Scroll-snap carousel with previous/next arrows (no library). Slides are
 * swipeable on touch screens; arrows sit at the sides or under the slides.
 */
export function Carousel({
  children,
  label,
  perView = "w-full",
  arrows = "sides",
  tone = "light",
  gap = "gap-[10px]",
}: {
  children: ReactNode[];
  label: string;
  /** Tailwind width class for one slide, e.g. "w-full md:w-1/3". */
  perView?: string;
  arrows?: "sides" | "below";
  tone?: "light" | "dark";
  gap?: string;
}) {
  const row = useRef<HTMLDivElement>(null);
  const go = (dir: 1 | -1) => {
    const el = row.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    const step = (slide?.offsetWidth ?? el.clientWidth) + 10;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    // Loop around like the old site's carousels.
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const btn = `flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70 ${tone === "dark" ? "text-white drop-shadow-[0_1px_2px_rgb(0_0_0/0.6)]" : "text-ink/60"}`;
  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="relative">
      <div ref={row} className={`snap-row flex overflow-x-auto ${gap}`}>
        {children.map((c, i) => (
          <div key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${children.length}`} className={`shrink-0 ${perView}`}>
            {c}
          </div>
        ))}
      </div>
      {children.length > 1 ? (
        arrows === "sides" ? (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className={`${btn} absolute left-0 top-1/2 -translate-y-1/2`}>
              <ArrowLeft />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next slide" className={`${btn} absolute right-0 top-1/2 -translate-y-1/2`}>
              <ArrowRight />
            </button>
          </>
        ) : (
          <div className="mt-4 flex justify-center gap-4">
            <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className={btn}>
              <ArrowLeft />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next slide" className={btn}>
              <ArrowRight />
            </button>
          </div>
        )
      ) : null}
    </div>
  );
}
