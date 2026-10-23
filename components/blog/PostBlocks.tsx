import type { PostBlock } from "@/lib/types";
import { BlogIcon } from "@/components/blog/BlogIcons";
import { card, eyebrow } from "@/components/blog/styles";

/*
 * The visual blocks inside a post, built in HTML so every word stays readable by Google and AI tools:
 * quick facts, a numbered step timeline and option cards with line icons. Their labels are plain text, not headings,
 * so the article's outline stays the post's own H2s and H3s.
 */

type Facts = Extract<PostBlock, { _type: "facts" }>;
type Steps = Extract<PostBlock, { _type: "steps" }>;
type Options = Extract<PostBlock, { _type: "options" }>;

export function QuickFacts({ block }: { block: Facts }) {
  if (!block.items?.length) return null;
  return (
    <aside aria-label={block.heading || "Quick facts"} className={`mt-8 p-6 ${card}`} data-reveal>
      <div className={eyebrow}>{block.heading || "Quick facts"}</div>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-brand">
              <BlogIcon name={it.icon} className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm text-ink/70">{it.label}</span>
              <span className="block font-semibold leading-snug text-ink">{it.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

const COLS: Record<number, string> = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" };

export function StepTimeline({ block }: { block: Steps }) {
  if (!block.items?.length) return null;
  const wide = COLS[block.items.length];
  return (
    <aside aria-label={block.heading || "Step by step"} className="mt-10 rounded-lg bg-cream p-6 md:p-8" data-reveal>
      {block.heading ? <div className={eyebrow}>{block.heading}</div> : null}
      <ol className={`relative mt-8 grid gap-7 border-l-2 border-brand/20 pl-8 ${wide ? `${wide} md:border-l-0 md:border-t-2 md:pl-0 md:pt-8` : ""}`}>
        {block.items.map((it, i) => (
          <li key={i} className="relative">
            <span aria-hidden="true" className={`absolute -left-[49px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white shadow-[0_0_0_4px_var(--color-cream)] ${wide ? "md:-top-[49px] md:left-0" : ""}`}>
              {i + 1}
            </span>
            <div className="font-semibold leading-snug text-ink">
              <span className="sr-only">Step {i + 1}: </span>
              {it.title}
            </div>
            <p className="mt-1 text-[15px] leading-[1.6] text-body">{it.text}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function OptionCards({ block }: { block: Options }) {
  if (!block.items?.length) return null;
  const n = block.items.length;
  const cols = n % 3 === 0 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <aside aria-label={block.heading || "Options"} className="mt-10" data-reveal>
      {block.heading ? <div className={eyebrow}>{block.heading}</div> : null}
      <ul className={`mt-4 grid gap-4 ${cols}`}>
        {block.items.map((it, i) => (
          <li key={i} className={`p-5 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(33_29_29_/_0.12)] ${card}`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dropdown text-brand">
              <BlogIcon name={it.icon} className="h-6 w-6" />
            </span>
            <div className="mt-4 font-semibold leading-snug text-ink">{it.title}</div>
            <p className="mt-1 text-[15px] leading-[1.6] text-body">{it.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function PostBlockView({ block }: { block: PostBlock }) {
  switch (block._type) {
    case "facts":
      return <QuickFacts block={block} />;
    case "steps":
      return <StepTimeline block={block} />;
    case "options":
      return <OptionCards block={block} />;
    default:
      return null;
  }
}
