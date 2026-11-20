"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The Google Maps iframe, added only when its box comes near the screen (or is tapped or focused), so Google's map
 * scripts never load with the page (TTR-2518). Until then the box shows its usual background, as it does while a map
 * loads. Without JavaScript the <noscript> copy loads the map as before.
 */
export function MapFrame({ src, title }: { src: string; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || show) return;
    // Every browser Next.js 16 supports has IntersectionObserver.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setShow(true);
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  const frame = <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" allowFullScreen />;
  return (
    <div ref={box} className="absolute inset-0" onPointerDown={() => setShow(true)} onFocus={() => setShow(true)}>
      {show ? frame : <noscript>{frame}</noscript>}
    </div>
  );
}
