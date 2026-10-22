"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { BeforeAfterCase } from "@/lib/types";
import { Carousel } from "@/components/ui/Carousel";
import { ArrowLeft, ArrowRight, CloseIcon } from "@/components/ui/Icons";

/**
 * "Our Work" carousel. Each photo opens a lightbox (native <dialog>: focus is
 * kept inside, Escape closes) with previous/next, like the old site's
 * Elementor lightbox.
 */
export function WorkGallery({ label, cases }: { label: string; cases: BeforeAfterCase[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = cases[index];

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + cases.length) % cases.length);
  const ctl = "flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-brand-2";

  return (
    <>
      <Carousel label={label} perView="w-full md:w-[calc((100%-20px)/3)]" arrows="sides" tone="dark">
        {cases.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => open(i)}
            aria-label={`Enlarge: ${c.image.alt || c.title}`}
            className="relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-[12px] focus-visible:outline-offset-4"
          >
            <Image src={c.image.src} alt={c.image.alt || `${c.title}: before and after`} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
          </button>
        ))}
      </Carousel>

      <dialog
        ref={dialog}
        aria-label={`${label}: ${index + 1} of ${cases.length}`}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        {current ? (
          <div className="relative flex h-[100svh] w-screen items-center justify-center p-4 md:p-16">
            <Image
              src={current.image.src}
              alt={current.image.alt || `${current.title}: before and after`}
              width={current.image.width}
              height={current.image.height}
              sizes="(min-width: 768px) 80vw, 100vw"
              className="h-auto max-h-full w-auto max-w-full object-contain md:min-w-[min(560px,80vw)]"
            />
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className={`absolute right-4 top-4 ${ctl}`} autoFocus>
              <CloseIcon />
            </button>
            {cases.length > 1 ? (
              <>
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={`absolute left-4 top-1/2 -translate-y-1/2 ${ctl}`}>
                  <ArrowLeft />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo" className={`absolute right-4 top-1/2 -translate-y-1/2 ${ctl}`}>
                  <ArrowRight />
                </button>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80" aria-live="polite">
                  {index + 1} / {cases.length}
                </p>
              </>
            ) : null}
          </div>
        ) : null}
      </dialog>
    </>
  );
}
