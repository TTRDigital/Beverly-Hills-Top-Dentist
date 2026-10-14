import { useId } from "react";
import type { ReactNode } from "react";
import { Minus, Plus } from "@/components/ui/Icons";

/**
 * Accordion on native <details>: works without JavaScript, the first item
 * starts open, and the shared name keeps one item open at a time (as on the
 * old site). Items without content render as plain titles.
 */
export function Accordion({
  items,
  tone = "light",
  titleClass = "",
}: {
  items: { title: string; content?: ReactNode }[];
  tone?: "light" | "dark";
  titleClass?: string;
}) {
  const name = useId();
  const color = tone === "dark" ? "text-white" : "text-ink";
  return (
    <div className="flex flex-col gap-[25px]">
      {items.map((it, i) =>
        it.content ? (
          <details key={i} name={name} open={i === 0} className="group">
            <summary className={`flex cursor-pointer items-center justify-between gap-4 text-[20px] font-medium leading-[1.4] ${color} ${titleClass}`}>
              <span>{it.title}</span>
              <span className="shrink-0">
                <Plus className="acc-plus h-[15px] w-[15px]" />
                <Minus className="acc-minus h-[15px] w-[15px]" />
              </span>
            </summary>
            <div className="pt-[25px]">{it.content}</div>
          </details>
        ) : (
          <div key={i} className={`flex items-center justify-between gap-4 text-[20px] font-medium leading-[1.4] ${color} ${titleClass}`}>
            <span>{it.title}</span>
            <Plus className="h-[15px] w-[15px] shrink-0" />
          </div>
        ),
      )}
    </div>
  );
}
