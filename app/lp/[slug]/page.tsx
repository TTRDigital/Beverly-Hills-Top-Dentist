import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RequestButton, RequestModal } from "@/components/lp/RequestModal";
import { BAND, BIO, DEFAULT_OFFERS, finePrint, LP_PAGES, OFFERS, PILLARS, PRACTICE, STRIP, TECH, TECH_INTRO, WORK } from "@/lib/lp-pages";
import { getLpPage } from "@/lib/lp-content";
import { HeroVideo } from "@/components/sections/HeroVideo";

export const dynamicParams = false;
export const generateStaticParams = () => LP_PAGES.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await getLpPage((await params).slug);
  return p ? { title: { absolute: p.title }, robots: { index: false, follow: false } } : {};
}

const btn = "inline-flex min-h-[50px] items-center justify-center rounded-[3px] px-7 text-[16px] font-semibold transition-colors";
const onDark = { solid: `${btn} bg-white text-brand hover:bg-cream`, ghost: `${btn} border-2 border-white text-white hover:bg-white/15` };
const onLight = { solid: `${btn} bg-brand text-white hover:bg-brand-2`, ghost: `${btn} border-2 border-brand text-brand hover:bg-brand hover:text-white` };
// Width of one step on desktop, so the row always fills evenly (32px gaps).
const STEP_W: Record<number, string> = { 2: "lg:w-[calc((100%-32px)/2)]", 3: "lg:w-[calc((100%-64px)/3)]", 4: "lg:w-[calc((100%-96px)/4)]", 5: "lg:w-[calc((100%-128px)/5)]" };

function H2({ children, center, light }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return <h2 className={`text-[28px] font-semibold leading-tight sm:text-[36px] ${light ? "text-white" : "text-ink"} ${center ? "text-center" : ""}`}>{children}</h2>;
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await getLpPage((await params).slug);
  if (!p) notFound();
  const call = p.primary.target === "call";
  const offerKeys = p.offers ?? DEFAULT_OFFERS;
  const offers = offerKeys.map((k) => OFFERS[k]);
  const fine = finePrint(offerKeys);
  const requestLabel = call ? "Request a Callback" : p.primary.label;
  const callBtn = (where: string, cls: string, label?: string) => (
    <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-${where}`} className={cls}>{label ?? `Call ${PRACTICE.phone}`}</a>
  );
  const actions = (where: string, dark: boolean) => {
    const c = dark ? onDark : onLight;
    return call ? (
      <>{callBtn(where, c.solid, p.primary.label)}<RequestButton className={c.ghost}>{requestLabel}</RequestButton></>
    ) : (
      <><RequestButton className={c.solid}>{requestLabel}</RequestButton>{callBtn(where, c.ghost)}</>
    );
  };

  return (
    <>
      {p.notice ? (
        <div role="note" className="bg-[#fff4e5] text-[#5c3b00]">
          <p className="container-x py-3 text-[15px] font-semibold leading-snug">{p.notice}</p>
        </div>
      ) : null}

      {/* Hero: the practice's own photo, the headline and the two actions */}
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-night sm:min-h-[660px]">
        <Image src={p.hero.src} alt={p.hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: p.hero.pos ?? "50% 50%" }} />
        {/* The site's hero video over the photo: only large screens on a normal connection, after the page has loaded; the photo shows until it plays. */}
        {p.heroVideo !== false ? <HeroVideo mp4="/video/home-hero.mp4" webm="/video/home-hero.webm" className="absolute inset-0 -z-[15] h-full w-full object-cover" /> : null}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/10 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/40 sm:to-black/5" />
        <div className="container-x pb-12 pt-32 sm:pb-20">
          <div className="max-w-[680px]">
            <h1 className="lp-rise text-[38px] font-semibold leading-[1.08] text-white sm:text-[56px]">{p.headline}</h1>
            <p className="lp-rise lp-rise-2 mt-5 max-w-[580px] text-[18px] leading-relaxed text-white/90 sm:text-[20px]">{p.support}</p>
            <div className="lp-rise lp-rise-3 mt-8 flex flex-col gap-3 sm:flex-row">{actions("hero", true)}</div>
            {/* New patient specials: under the actions, so the Call button stays where it was */}
            {offers.length ? (
            <div className="lp-rise lp-rise-3 mt-5 max-w-[520px] rounded-[6px] bg-white/95 px-5 py-4 text-ink shadow-[0_6px_24px_rgb(0_0_0/0.25)]">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">New patient {offers.length > 1 ? "specials" : "special"}</p>
              <ul className="mt-2 space-y-1">
                {offers.map((o) => (
                  <li key={o.text} className="text-[18px] leading-snug sm:text-[19px]">{o.or ? "or " : ""}<span className="font-bold text-brand">{o.amount}</span> {o.text}{o.aside ? <span className="text-[15px] text-body"> {o.aside}</span> : null}</li>
                ))}
              </ul>
              <p className="mt-2 text-[13px] leading-snug text-body">{fine}</p>
            </div>
            ) : null}
            {p.availability ? <p className="mt-4 max-w-[520px] text-[14px] leading-snug text-white/80">{p.availability}</p> : null}
          </div>
        </div>
      </section>

      {/* Three quick facts */}
      <section className="bg-brand text-white">
        <ul className="container-x grid gap-3 py-5 text-center text-[15px] font-semibold sm:grid-cols-3 sm:gap-6 sm:py-6 sm:text-[16px]">
          {STRIP.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      {/* The practice's approach, as on the homepage */}
      <section className="bg-white">
        <div className="container-x py-16 sm:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <H2>{PILLARS.heading}</H2>
            <p className="mt-4 text-[18px] leading-relaxed text-body">{PILLARS.text}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
            {PILLARS.items.map((it, n) => (
              <div key={it.title} className="rounded-[6px] border border-line bg-paper p-7 text-center sm:p-8">
                <span aria-hidden="true" className="text-[15px] font-semibold tracking-[0.18em] text-brand">0{n + 1}</span>
                <h3 className="mt-2 text-[24px] font-semibold text-ink">{it.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-body">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This page's own topic */}
      <section className="bg-paper">
        <div className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2>{p.focus.heading}</H2>
            {p.focus.intro ? <p className="mt-4 text-[18px] leading-relaxed text-body">{p.focus.intro}</p> : null}
            {p.focus.items ? (
              <ul className="mt-5 space-y-3 text-[17px] text-body">
                {p.focus.items.map((t) => <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-brand" />{t}</li>)}
              </ul>
            ) : null}
            {p.focus.paragraphs ? <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-body">{p.focus.paragraphs.map((t) => <p key={t}>{t}</p>)}</div> : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions("focus", false)}</div>
          </div>
          <div className={`relative aspect-[4/3] overflow-hidden rounded-[6px] ${p.focusWide ? "lg:aspect-[3/2]" : "lg:aspect-[4/4.4]"}`}>
            <Image src={p.focus.image.src} alt={p.focus.image.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" style={p.focusWide ? { objectPosition: "50% 20%" } : undefined} />
          </div>
        </div>
      </section>

      {/* Full-width photo band, like the homepage */}
      <section className="relative isolate overflow-hidden bg-night">
        <Image src={BAND.image.src} alt={BAND.image.alt} fill sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: "50% 58%" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="container-x flex min-h-[420px] items-end py-14 sm:min-h-[520px] sm:py-20">
          <div className="max-w-[640px]">
            <H2 light>{BAND.heading}</H2>
            <p className="mt-4 text-[18px] leading-relaxed text-white/90">{BAND.text}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">{actions("band", true)}</div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white">
        <div className="container-x py-16 sm:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <H2>{TECH_INTRO.heading}</H2>
            <p className="mt-4 text-[18px] leading-relaxed text-body">{TECH_INTRO.text}</p>
          </div>
          <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${p.tech.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {p.tech.map((k) => (
              <div key={k} className="overflow-hidden rounded-[6px] border border-line bg-paper">
                <div className="relative aspect-[4/3]">
                  <Image src={TECH[k].image.src} alt={TECH[k].image.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-[20px] font-semibold text-ink">{TECH[k].title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-body">{TECH[k].text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Shir */}
      <section className="bg-header">
        <div className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[6px] lg:max-w-none">
            <Image src={BIO.image.src} alt={BIO.image.alt} fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" style={{ objectPosition: "50% 20%" }} />
          </div>
          <div>
            <H2>{BIO.heading}</H2>
            <div className="mt-5 space-y-4 text-[18px] leading-relaxed text-body">{BIO.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions("bio", false)}</div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="container-x py-16 sm:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <H2>{p.steps.heading}</H2>
            {p.steps.intro ? <p className="mt-4 text-[18px] leading-relaxed text-body">{p.steps.intro}</p> : null}
          </div>
          <ol className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-10">
            {p.steps.items.map((t, n) => (
              <li key={t.title} className={`w-full text-center sm:w-[calc(50%-16px)] ${STEP_W[p.steps.items.length] ?? "lg:w-[calc((100%-96px)/4)]"}`}>
                <span aria-hidden="true" className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-[19px] font-semibold text-white">{n + 1}</span>
                <p className="mt-4 text-[20px] font-semibold text-ink">{t.title}</p>
                <p className="mx-auto mt-2 max-w-[300px] text-[16px] leading-relaxed text-body">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Our work */}
      {p.showWork ? (
        <section className="bg-paper">
          <div className="container-x py-16 sm:py-24">
            <div className="mx-auto max-w-[760px] text-center">
              <H2>{WORK.heading}</H2>
              <p className="mt-4 text-[17px] leading-relaxed text-body">{WORK.text}</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {WORK.images.map((im, i) => (
                <div key={im.src} className="relative aspect-square overflow-hidden rounded-[6px] border border-line">
                  <Image src={im.src} alt={`${im.alt} (${i + 1})`} fill sizes="(min-width: 640px) 380px, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white">
        <div className="container-x max-w-[820px] py-16 sm:py-24">
          <H2 center>Questions, answered</H2>
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
        <div className="container-x grid gap-10 py-16 sm:py-20 md:grid-cols-2">
          <div>
            <H2>Visit us</H2>
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
        <Image src={p.closingImage?.src ?? "/images/office/hallway-wide.jpg"} alt="" fill sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: p.closingImage?.pos ?? "40% 55%" }} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/60" />
        <div className="container-x max-w-[820px] py-16 text-center sm:py-24">
          <h2 className="text-[30px] font-semibold leading-tight text-white sm:text-[40px]">{p.closing.heading}</h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[17px] text-white/90">{p.closing.text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">{actions("end", true)}</div>
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
