import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LpForm } from "@/components/lp/LpForm";
import { LP_PAGES, PRACTICE, lpBySlug, type LpPage, type LpSection } from "@/lib/lp-pages";

export const dynamicParams = false;
export const generateStaticParams = () => LP_PAGES.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = lpBySlug((await params).slug);
  return p ? { title: { absolute: p.title }, robots: { index: false, follow: false } } : {};
}

const btn = "inline-flex min-h-[50px] items-center justify-center rounded-[3px] px-7 text-[16px] font-bold transition-colors";

function Section({ s, i }: { s: LpSection; i: number }) {
  return (
    <section className={i % 2 === 0 ? "bg-white" : "bg-paper"}>
      <div className="container-x max-w-[860px] py-12 sm:py-16">
        <h2 className="text-h2 font-bold text-ink sm:text-[28px]">{s.heading}</h2>
        {s.kind === "text" || s.kind === "bio" ? (
          <div className="mt-4 space-y-3 text-[17px] leading-relaxed text-body">{s.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
        ) : null}
        {s.kind === "list" ? (
          <>
            {s.intro ? <p className="mt-4 text-[17px] text-body">{s.intro}</p> : null}
            <ul className="mt-4 space-y-2.5 text-[17px] text-body">
              {s.items.map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-[9px] h-2.5 w-2.5 shrink-0 rounded-full bg-tick" />{t}</li>
              ))}
            </ul>
          </>
        ) : null}
        {s.kind === "steps" ? (
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {s.items.map((t, n) => (
              <li key={t.title} className="rounded-[6px] border border-line bg-white p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-white" aria-hidden="true">{n + 1}</span>
                <p className="mt-3 text-[18px] font-bold text-ink">{t.title}</p>
                <p className="mt-1 text-[16px] text-body">{t.text}</p>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </section>
  );
}

function Hours() {
  return (
    <dl className="mt-3 space-y-1 text-[16px] text-body">
      {PRACTICE.hours.map((h) => (
        <div key={h.days} className="flex justify-between gap-4 border-b border-line py-1.5"><dt className="font-semibold text-ink">{h.days}</dt><dd>{h.time}</dd></div>
      ))}
    </dl>
  );
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const p: LpPage | undefined = lpBySlug((await params).slug);
  if (!p) notFound();
  const call = p.primary.target === "call";
  return (
    <>
      {p.notice ? (
        <div role="note" className="bg-[#fff4e5] text-[#5c3b00]">
          <p className="container-x py-3 text-[15px] font-semibold leading-snug">{p.notice}</p>
        </div>
      ) : null}

      <section className="bg-header">
        <div className="container-x grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <h1 className="text-h1 font-extrabold text-ink sm:text-[44px] sm:leading-[1.08]">{p.headline}</h1>
            <p className="mt-4 max-w-[600px] text-[18px] leading-relaxed text-body">{p.support}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {call ? (
                <>
                  <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}`} className={`${btn} bg-brand text-white hover:bg-brand-2`}>{p.primary.label}</a>
                  <a href="#request" className={`${btn} border-2 border-brand text-brand hover:bg-white`}>Request a Callback</a>
                </>
              ) : (
                <>
                  <a href="#request" className={`${btn} bg-brand text-white hover:bg-brand-2`}>{p.primary.label}</a>
                  <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}`} className={`${btn} border-2 border-brand text-brand hover:bg-white`}>Call {PRACTICE.phone}</a>
                </>
              )}
            </div>
            {p.availability ? <p className="mt-3 text-[14px] text-body">{p.availability}</p> : null}
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[6px] lg:block">
              <Image src={p.hero.src} alt={p.hero.alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
          </div>
          <div id="request" className="scroll-mt-6">
            <LpForm pageKey={p.key} title={p.formTitle} button={p.formButton} note={p.formNote} />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] lg:hidden">
            <Image src={p.hero.src} alt={p.hero.alt} fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {p.sections.map((s, i) => <Section key={s.heading} s={s} i={i} />)}

      <section className={p.sections.length % 2 === 0 ? "bg-white" : "bg-paper"}>
        <div className="container-x max-w-[860px] py-12 sm:py-16">
          <h2 className="text-h2 font-bold text-ink sm:text-[28px]">Questions, answered</h2>
          <div className="mt-5 divide-y divide-line border-y border-line">
            {p.faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-bold text-ink focus-visible:outline-2 focus-visible:outline-brand-2">
                  {f.q}<span aria-hidden="true" className="text-2xl leading-none text-brand group-open:hidden">+</span><span aria-hidden="true" className="hidden text-2xl leading-none text-brand group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-[17px] leading-relaxed text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x max-w-[860px] py-12 sm:py-16">
          <h2 className="text-h2 font-bold text-ink sm:text-[28px]">Visit {PRACTICE.name}</h2>
          <p className="mt-3 text-[17px] text-body">{PRACTICE.doctor}<br />{PRACTICE.address}</p>
          <p className="mt-2"><a href={PRACTICE.map} className="font-semibold text-brand underline" target="_blank" rel="noopener noreferrer">Open in Maps<span className="sr-only"> (opens in a new tab)</span></a></p>
          <h3 className="mt-6 text-[18px] font-bold text-ink">Office hours</h3>
          <Hours />
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="container-x max-w-[860px] py-12 text-center sm:py-16">
          <h2 className="text-h2 font-bold sm:text-[28px]">{p.closing.heading}</h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[17px] text-white/90">{p.closing.text}</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            {call ? (
              <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-end`} className={`${btn} bg-white text-brand hover:bg-cream`}>{p.primary.label}</a>
            ) : (
              <a href="#request" className={`${btn} bg-white text-brand hover:bg-cream`}>{p.primary.label}</a>
            )}
            {call ? <a href="#request" className={`${btn} border-2 border-white text-white hover:bg-white/10`}>Request a Callback</a> : <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-end`} className={`${btn} border-2 border-white text-white hover:bg-white/10`}>Call {PRACTICE.phone}</a>}
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 shadow-[0_-4px_14px_rgb(0_0_0/0.08)] lg:hidden">
        <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-bar`} className="inline-flex min-h-[48px] items-center justify-center rounded-[3px] border-2 border-brand text-[16px] font-bold text-brand">Call</a>
        <a href="#request" className="inline-flex min-h-[48px] items-center justify-center rounded-[3px] bg-brand text-[16px] font-bold text-white">{call ? "Request Callback" : "Request"}</a>
      </div>
    </>
  );
}
