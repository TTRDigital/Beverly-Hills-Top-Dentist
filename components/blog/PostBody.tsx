import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PostFigure } from "@/lib/types";
import type { Extras, PlacedExtras, PostFaq, PostOutline } from "@/lib/blog-post";
import { Inline } from "@/components/ui/RichText";
import { Minus, PhoneIcon, Plus } from "@/components/ui/Icons";
import { PostBlockView } from "@/components/blog/PostBlocks";
import { btnOnDark, card } from "@/components/blog/styles";

/** A photo between sections, with its caption. Reveals as it scrolls into view (visible from the start without JavaScript). */
export function Figure({ figure }: { figure: PostFigure }) {
  return (
    <figure className="mt-10" data-reveal>
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-dropdown shadow-[0_12px_32px_rgb(33_29_29_/_0.12)]">
        <Image src={figure.image.src} alt={figure.alt || figure.image.alt || figure.caption} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" style={figure.position ? { objectPosition: figure.position } : undefined} />
      </div>
      {figure.caption ? <figcaption className="mt-3 text-sm leading-snug text-ink/70">{figure.caption}</figcaption> : null}
    </figure>
  );
}

/** The blocks and photos that sit above one heading. */
export function ExtrasView({ extras }: { extras: Extras }) {
  return (
    <>
      {extras.blocks.map((b, i) => (
        <PostBlockView key={b._key ?? `b${i}`} block={b} />
      ))}
      {extras.figures.map((f, i) => (
        <Figure key={`f${i}`} figure={f} />
      ))}
    </>
  );
}

export type Cta = { text: string; phone: string; phoneHref: string };

/** One sentence that fits the topic, the primary button and the phone number, on a brand-green band. */
export function CtaBand({ cta }: { cta: Cta }) {
  return (
    <aside aria-label="Request an appointment" className="relative mt-12 overflow-hidden rounded-lg bg-brand p-7 text-white md:p-9" data-reveal>
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-white/[0.06]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 right-16 h-40 w-40 rounded-full bg-white/[0.05]" />
      <p className="relative max-w-[32ch] text-xl font-semibold leading-snug md:text-2xl">{cta.text}</p>
      <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link href="/appointment/" data-track="book_appointment" className={btnOnDark}>
          Request an appointment
        </Link>
        <a href={cta.phoneHref} data-track="click_to_call" className="inline-flex items-center gap-2 font-semibold text-white/90 transition-colors hover:text-white">
          <PhoneIcon className="h-4 w-4" />
          {cta.phone}
        </a>
      </div>
    </aside>
  );
}

/** The post's questions as cards on details/summary: the text stays in the page for Google and AI tools, the first one starts open. */
export function FaqCards({ faq }: { faq: PostFaq }) {
  return (
    <section aria-labelledby={faq.id} className="mt-14">
      <h2 id={faq.id} className="post-h2 scroll-mt-28">
        <Inline text={faq.heading} />
      </h2>
      {faq.intro.map((p, i) => (
        <p key={i}>
          <Inline text={p} />
        </p>
      ))}
      <div className="mt-6 space-y-3">
        {faq.items.map((f, i) => (
          <details key={i} open={i === 0} className={`group transition-shadow duration-300 hover:shadow-[0_12px_32px_rgb(33_29_29_/_0.1)] ${card}`}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left">
              <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink md:text-[1.125rem]">
                <Inline text={f.question} />
              </h3>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper text-brand">
                <Plus className="acc-plus h-3 w-3" />
                <Minus className="acc-minus h-3 w-3" />
              </span>
            </summary>
            <div className="space-y-3 px-5 pb-5 text-base leading-[1.7] text-body">
              {f.answer.map((p, j) => (
                <p key={j}>
                  <Inline text={p} />
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/**
 * The article from the opening answer to the closing invitation: the intro, every H2 section with its anchor id, the photos
 * and visual blocks placed above their headings, the call-to-action band after the third or fourth section, then the FAQ.
 */
export function PostBody({ outline, extras, cta }: { outline: PostOutline; extras: PlacedExtras; cta: Cta }) {
  const n = outline.sections.length;
  const ctaAfter = n ? Math.min(n, n >= 6 ? 4 : 3) - 1 : -1;
  return (
    <div className="post-body mt-8">
      {outline.intro.slice(1).map((p, i) => (
        <p key={i}>
          <Inline text={p} />
        </p>
      ))}
      {outline.sections.map((s, i) => (
        <Fragment key={s.id}>
          <ExtrasView extras={extras.before(s.heading)} />
          <section aria-labelledby={s.id} className="mt-12">
            <h2 id={s.id} className="post-h2 scroll-mt-28">
              <Inline text={s.heading} />
            </h2>
            {s.paras.map((p, j) =>
              p.startsWith("### ") ? (
                <h3 key={j} className="mt-8 text-[1.25rem] font-semibold leading-snug text-ink">
                  <Inline text={p.slice(4)} />
                </h3>
              ) : (
                <p key={j}>
                  <Inline text={p} />
                </p>
              ),
            )}
          </section>
          {i === ctaAfter ? <CtaBand cta={cta} /> : null}
        </Fragment>
      ))}
      {outline.faq ? (
        <>
          <ExtrasView extras={extras.before(outline.faq.heading)} />
          <FaqCards faq={outline.faq} />
        </>
      ) : null}
      {outline.closing.map((p, i) => (
        <p key={i} className="mt-10 text-[1.0625rem] leading-[1.7] text-ink md:text-lg">
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}
