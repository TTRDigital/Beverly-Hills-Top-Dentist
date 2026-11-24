"use client";

import { useEffect, useRef } from "react";

type Review = { quote: string; name: string; rating: number; source?: string };

/**
 * Google reviews as a row that drifts slowly sideways (TTR-3066, Kia Nov 24). It is a normal scrolling row, so phones can swipe it and
 * keyboards can scroll it; the drift only starts once the row is on screen, pauses on touch, hover or focus (and for 4 seconds after a
 * swipe), and never runs for prefers-reduced-motion. The list is drawn twice so the drift can loop; the copy is hidden from screen readers.
 * Visible text only: no Review or AggregateRating markup.
 */
export function ReviewCarousel({ reviews, moreHref }: { reviews: Review[]; moreHref?: string }) {
  if (!reviews.length) return null;
  return <Carousel reviews={reviews} moreHref={moreHref} />;
}

function Carousel({ reviews, moreHref }: { reviews: Review[]; moreHref?: string }) {
  const row = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = row.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, last = 0, visible = false, hold = 0, pos = el.scrollLeft;
    const speed = 0.03; // px per ms, about 30 px a second
    const tick = (t: number) => {
      const dt = last ? Math.min(t - last, 50) : 0;
      last = t;
      if (visible && Date.now() > hold) {
        // One full set is the distance from the first card to the first card of the second copy, so the loop has no jump.
        const loop = el.querySelector<HTMLElement>("[data-loop]");
        const first = el.querySelector<HTMLElement>("li");
        const span = loop && first ? loop.offsetLeft - first.offsetLeft : el.scrollWidth / 2;
        pos += speed * dt;
        if (pos >= span) pos -= span;
        el.scrollLeft = pos;
      } else pos = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };
    const pause = (ms: number) => () => { hold = Date.now() + ms; };
    const stop = pause(1e9), resume = pause(4000);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    const on: [string, EventListener][] = [["pointerenter", stop], ["pointerleave", resume], ["touchstart", stop], ["touchend", resume], ["focusin", stop], ["focusout", resume], ["wheel", resume]];
    on.forEach(([n, f]) => el.addEventListener(n, f, { passive: true }));
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); on.forEach(([n, f]) => el.removeEventListener(n, f)); };
  }, []);

  // Enough cards to fill a wide screen and loop: with 2 reviews they repeat; the extra copies are hidden from screen readers.
  const set: Review[] = [];
  while (reviews.length && set.length < Math.max(6, reviews.length)) set.push(...reviews);
  const card = (r: Review, i: number, copy: boolean) => (
    <li key={`${copy ? "c" : "o"}${i}`} aria-hidden={copy || undefined} data-loop={i === set.length || undefined} className="flex w-[280px] shrink-0 flex-col rounded-[12px] border border-line bg-white p-5 shadow-[0_2px_10px_rgb(0_0_0/0.06)] sm:w-[320px]">
      <p className="text-[18px] leading-none tracking-[2px] text-[#f4b400]" role={copy ? undefined : "img"} aria-label={copy ? undefined : `${r.rating} out of 5 stars`}>{"★".repeat(Math.round(r.rating))}</p>
      <blockquote className="mt-3 flex-1 text-[15px] leading-[1.6] text-ink">{r.quote}</blockquote>
      <p className="mt-4 flex items-center justify-between text-[14px]">
        <span className="font-semibold text-ink">{r.name}</span>
        <span className="text-[12px] font-medium text-body">Google</span>
      </p>
    </li>
  );

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-x">
        <h2 className="h2 text-ink md:text-center">What patients say</h2>
      </div>
      <div ref={row} tabIndex={0} aria-label="Google reviews, scroll sideways for more" className="mt-8 overflow-x-auto px-4 pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-brand-2 [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max gap-4">
          {set.map((r, i) => card(r, i, i >= reviews.length))}
          {set.map((r, i) => card(r, i + set.length, true))}
        </ul>
      </div>
      {moreHref ? (
        <p className="container-x mt-6 md:text-center"><a href={moreHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline">Read more reviews on Google<span className="sr-only"> (opens in a new tab)</span></a></p>
      ) : null}
    </section>
  );
}
