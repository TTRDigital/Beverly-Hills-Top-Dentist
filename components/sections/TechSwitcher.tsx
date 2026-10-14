"use client";

import Image from "next/image";
import { useState } from "react";
import type { HomeContent } from "@/lib/types";
import { RichText } from "@/components/ui/RichText";

type Props = HomeContent["technology"];

/**
 * "Technology and Innovation": a list of technologies; choosing one shows its
 * text under it and swaps the photo (the old site's custom switcher).
 */
export function TechSwitcher({ heading, text, items }: Props) {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-white py-[30px] md:py-[60px]">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="relative z-10 md:flex md:min-h-[525px] md:w-[40%] md:items-start md:justify-end">
          <div className="bg-white px-5 py-2.5 text-center md:w-[min(100%,516px)] md:translate-x-[20%] md:px-[34px] md:pb-[60px] md:pt-[50px] md:text-left">
            <h2 className="h2 font-bold">{heading}</h2>
            <RichText paras={text} className="mt-5 text-ink/90" />
            <ul className="mt-6 space-y-3 text-left">
              {items.map((it, i) => (
                <li key={it.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={active === i}
                    className={`group relative text-left text-[20px] leading-[1.35] transition-colors hover:text-olive ${active === i ? "text-olive" : "text-black"}`}
                  >
                    {it.title}
                    <span aria-hidden="true" className={`absolute -bottom-1 left-0 h-px bg-black transition-[width] duration-300 ${active === i && i !== 0 ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </button>
                  {active === i ? <p className="mt-1 text-base leading-[1.65] text-[#333]">{it.text}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative mt-6 min-h-[313px] md:mt-0 md:w-[60%]">
          {items.map((it, i) =>
            it.image ? (
              <Image
                key={it.title}
                src={it.image.src}
                alt={it.image.alt}
                width={it.image.width}
                height={it.image.height}
                sizes="(min-width: 768px) 60vw, 100vw"
                className={`h-auto w-full transition-[opacity,transform] duration-500 ${active === i ? "relative scale-100 opacity-100" : "invisible absolute inset-0 scale-[0.97] opacity-0"}`}
              />
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
