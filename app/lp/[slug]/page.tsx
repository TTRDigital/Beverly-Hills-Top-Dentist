import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RequestButton, RequestModal } from "@/components/lp/RequestModal";
import { LP_PAGES, PRACTICE, lpBySlug, type LpSection } from "@/lib/lp-pages";

export const dynamicParams = false;
export const generateStaticParams = () => LP_PAGES.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = lpBySlug((await params).slug);
  return p ? { title: { absolute: p.title }, robots: { index: false, follow: false } } : {};
}

// Width of one step on desktop, so the row always fills evenly (3, 4 or 5 steps, 32px gaps).
const STEP_W: Record<number, string> = { 2: "lg:w-[calc((100%-32px)/2)]", 3: "lg:w-[calc((100%-64px)/3)]", 4: "lg:w-[calc((100%-96px)/4)]", 5: "lg:w-[calc((100%-128px)/5)]" };

const btn = "inline-flex min-h-[50px] items-center justify-center rounded-[3px] px-7 text-[16px] font-semibold transition-colors";
const onDark = { solid: `${btn} bg-white text-brand hover:bg-cream`, ghost: `${btn} border-2 border-white text-white hover:bg-white/15` };

function Heading({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return <h2 className={`text-[26px] font-semibold leading-tight text-ink sm:text-[32px] ${center ? "text-center" : ""}`}>{children}</h2>;
}

function Split({ s, flip, tone }: { s: Extract<LpSection, { kind: "text" | "list" | "bio" }>; flip: boolean; tone: string }) {
  return (
    <section className={tone}>
      <div className={`container-x grid items-center gap-8 py-14 sm:py-20 ${s.image ? "lg:grid-cols-2 lg:gap-16" : "max-w-[820px] text-center"}`}>
        <div className={flip && s.image ? "lg:order-2" : ""}>
          <Heading>{s.heading}</Heading>
          {s.kind === "list" ? (
            <>
              {s.intro ? <p className="mt-4 text-[17px] leading-relaxed text-body">{s.intro}</p> : null}
              <ul className={`mt-5 space-y-3 text-[17px] text-body ${s.image ? "" : "mx-auto max-w-[560px] text-left"}`}>
                {s.items.map((t) => <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-brand" />{t}</li>)}
              </ul>
            </>
          ) : (
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-body">{s.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
          )}
        </div>
        {s.image ? (
          <div className={`relative aspect-[4/3] overflow-hidden rounded-[6px] lg:aspect-[4/4.2] ${flip ? "lg:order-1" : ""}`}>
            <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = lpBySlug((await params).slug);
  if (!p) notFound();
  const call = p.primary.target === "call";
  const main = p.sections.filter((s) => s.kind !== "steps");
  const steps = p.sections.filter((s): s is Extract<LpSection, { kind: "steps" }> => s.kind === "steps");
  const callBtn = (where: string, cls: string, label?: string) => (
    <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-${where}`} className={cls}>{label ?? `Call ${PRACTICE.phone}`}</a>
  );
  const requestLabel = call ? "Request a Callback" : p.primary.label;

  return (
    <>
      {p.notice ? (
        <div role="note" className="bg-[#fff4e5] text-[#5c3b00]">
          <p className="container-x py-3 text-[15px] font-semibold leading-snug">{p.notice}</p>
        </div>
      ) : null}

      {/* Hero: the practice's own photo, the headline and the two actions */}
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-night sm:min-h-[640px]">
        <Image src={p.hero.src} alt={p.hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: p.hero.pos ?? "50% 50%" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/10 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/40 sm:to-black/5" />
        <div className="container-x pb-12 pt-32 sm:pb-20">
          <div className="max-w-[680px]">
            <h1 className="lp-rise text-[38px] font-semibold leading-[1.08] text-white sm:text-[56px]">{p.headline}</h1>
            <p className="lp-rise lp-rise-2 mt-5 max-w-[580px] text-[18px] leading-relaxed text-white/90 sm:text-[20px]">{p.support}</p>
            <div className="lp-rise lp-rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              {call ? (
                <>{callBtn("hero", onDark.solid, p.primary.label)}<RequestButton className={onDark.ghost}>{requestLabel}</RequestButton></>
              ) : (
                <><RequestButton className={onDark.solid}>{requestLabel}</RequestButton>{callBtn("hero", onDark.ghost)}</>
              )}
            </div>
            {p.availability ? <p className="mt-4 max-w-[520px] text-[14px] leading-snug text-white/80">{p.availability}</p> : null}
          </div>
        </div>
      </section>

      {/* Three short points */}
      <section className="bg-white">
        <div className="container-x grid gap-8 py-12 sm:grid-cols-3 sm:gap-10 sm:py-16">
          {p.highlights.map((h) => (
            <div key={h.title} className="text-center sm:px-2">
              <p className="text-[20px] font-semibold text-ink">{h.title}</p>
              <p className="mx-auto mt-2 max-w-[300px] text-[16px] leading-relaxed text-body">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {main.map((s, i) => <Split key={s.heading} s={s as Extract<LpSection, { kind: "text" | "list" | "bio" }>} flip={i % 2 === 1} tone={i % 2 === 0 ? "bg-paper" : "bg-white"} />)}

      {steps.map((s) => (
        <section key={s.heading} className="bg-header">
          <div className="container-x py-14 sm:py-20">
            <Heading center>{s.heading}</Heading>
            <ol className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-10">
              {s.items.map((t, n) => (
                <li key={t.title} className={`w-full text-center sm:w-[calc(50%-16px)] ${STEP_W[s.items.length] ?? "lg:w-[calc((100%-96px)/4)]"}`}>
                  <span aria-hidden="true" className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand text-[18px] font-semibold text-brand">{n + 1}</span>
                  <p className="mt-4 text-[19px] font-semibold text-ink">{t.title}</p>
                  <p className="mx-auto mt-1.5 max-w-[240px] text-[16px] leading-relaxed text-body">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="bg-white">
        <div className="container-x max-w-[820px] py-14 sm:py-20">
          <Heading center>Questions, answered</Heading>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {p.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-semibold text-ink focus-visible:outline-2 focus-visible:outline-brand-2">
                  {f.q}
                  <span aria-hidden="true" className="text-[26px] font-light leading-none text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[680px] text-[17px] leading-relaxed text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="bg-paper">
        <div className="container-x grid gap-10 py-14 sm:py-20 md:grid-cols-2">
          <div>
            <Heading>Visit us</Heading>
            <p className="mt-4 text-[17px] leading-relaxed text-body"><span className="font-semibold text-ink">{PRACTICE.name}</span><br />{PRACTICE.doctor}<br />{PRACTICE.address}</p>
            <p className="mt-3"><a href={PRACTICE.map} className="font-semibold text-brand underline" target="_blank" rel="noopener noreferrer">Open in Maps<span className="sr-only"> (opens in a new tab)</span></a></p>
            <p className="mt-2"><a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-visit`} className="font-semibold text-brand underline">{PRACTICE.phone}</a></p>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold text-ink">Office hours</h3>
            <dl className="mt-3 text-[16px] text-body">
              {PRACTICE.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-line py-2.5"><dt className="font-medium text-ink">{h.days}</dt><dd>{h.time}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Closing action over the practice photo */}
      <section className="relative isolate overflow-hidden bg-night">
        <Image src="/images/office/hallway-wide.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: "40% 55%" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60" />
        <div className="container-x max-w-[820px] py-16 text-center sm:py-24">
          <h2 className="text-[28px] font-semibold leading-tight text-white sm:text-[38px]">{p.closing.heading}</h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[17px] text-white/90">{p.closing.text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {call ? (
              <>{callBtn("end", onDark.solid, p.primary.label)}<RequestButton className={onDark.ghost}>{requestLabel}</RequestButton></>
            ) : (
              <><RequestButton className={onDark.solid}>{requestLabel}</RequestButton>{callBtn("end", onDark.ghost)}</>
            )}
          </div>
        </div>
      </section>

      {/* Phones: both actions stay in reach */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 shadow-[0_-4px_14px_rgb(0_0_0/0.08)] lg:hidden">
        {callBtn("bar", "inline-flex min-h-[48px] items-center justify-center rounded-[3px] border-2 border-brand text-[16px] font-semibold text-brand", "Call")}
        <RequestButton className="inline-flex min-h-[48px] items-center justify-center rounded-[3px] bg-brand text-[16px] font-semibold text-white">{call ? "Request Callback" : "Request"}</RequestButton>
      </div>

      <RequestModal pageKey={p.key} title={p.formTitle} button={p.formButton} note={p.formNote} />
    </>
  );
}
