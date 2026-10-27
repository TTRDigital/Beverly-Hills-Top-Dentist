"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Img } from "@/lib/types";

/** Background slideshow that cross-fades every few seconds (the old site's Elementor slideshow). Each office photo keeps its description. */
export function Slideshow({ images, interval = 5000, sizes = "100vw" }: { images: Img[]; interval?: number; sizes?: string }) {
  const [i, setI] = useState(0);
  // Slides that have shown, plus the next one: a photo loads one slide ahead of its turn instead of all at once with the page.
  const [shown, setShown] = useState(1);
  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      setI((x) => (x + 1) % images.length);
      setShown((s) => s + 1);
    }, interval);
    return () => window.clearInterval(t);
  }, [images.length, interval]);
  return (
    <div className="absolute inset-0">
      {images.map((img, n) => (
        <div key={img.src} className={`absolute inset-0 transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}>
          {/* The band sits below the first screen, so every slide loads lazily. */}
          {n <= shown ? <Image src={img.src} alt={img.alt || "Beverly Hills Dental Arts Studio office"} fill sizes={sizes} className="object-cover" loading="lazy" /> : null}
        </div>
      ))}
    </div>
  );
}
