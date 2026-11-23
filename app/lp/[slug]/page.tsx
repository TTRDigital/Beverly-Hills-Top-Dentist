import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RequestButton, RequestModal } from "@/components/lp/RequestModal";
import { finePrint, LP_PAGES, OFFERS, PILLARS, PRACTICE, type OfferKey } from "@/lib/lp-pages";
import { getLpPage } from "@/lib/lp-content";
import { images } from "@/lib/data/images";
import { HeroVideo } from "@/components/sections/HeroVideo";

export const dynamicParams = false;
export const generateStaticParams = () => LP_PAGES.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await getLpPage((await params).slug);
  return p ? { title: { absolute: p.title }, robots: { index: false, follow: false } } : {};
}

/*
 * ChatGPT ad landing pages, the calm version (TTR-3066, Kia Nov 23: "cleaner, like their homepage, the video plays in the banner when you
 * land, most people visit from a phone"). Built like the home page: its hero video and poster, its type, spacing and soft buttons.
 * First screen on a phone: the headline, the offer in one line, a big Call button and Request an Appointment. Below, four short parts:
 * what the treatment is, why this practice, a few questions, and a last Call. The required notes (offer terms, the emergency safety line,
 * the availability note) stay in small text. Every tracked action is unchanged: tel: links (phone_call_click), the Request buttons
 * (request_appointment_click), the form in the pop-up (form_started, lead_created), the bottom call bar.
 */
const PHONE_DISPLAY = `(${PRACTICE.phone.slice(0, 3)}) ${PRACTICE.phone.slice(4)}`;
// The one-line offer: the $99 visit everywhere, Invisalign's own offer on the Invisalign page. No implant offer anywhere in the banner.
const offerFor = (keys: OfferKey[]): OfferKey => (keys.includes("invisalign") ? "invisalign" : "cleaning");

// Buttons in the home page's soft style (rounded, generous), with the Call button the strongest thing on the screen.
const callBig = "flex min-h-[60px] w-full items-center justify-center rounded-[18px] bg-brand px-7 text-[19px] font-bold text-white shadow-[0_6px_20px_rgb(0_0_0/0.25)] transition-colors hover:bg-brand-2 md:inline-flex md:w-auto";
const requestOnDark = "flex min-h-[54px] w-full items-center justify-center rounded-[18px] border-2 border-white bg-white/20 px-7 text-[16px] font-semibold text-white transition-colors hover:border-brand-2 hover:bg-brand-2 md:inline-flex md:w-auto";
const requestOnLight = "flex min-h-[54px] w-full items-center justify-center rounded-[18px] border-2 border-brand px-7 text-[16px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white md:inline-flex md:w-auto";

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await getLpPage((await params).slug);
  if (!p) notFound();
  const offerKey = offerFor(p.offers ?? []);
  const offer = OFFERS[offerKey];
  const terms = finePrint([offerKey]);
  const call = (where: string, cls: string) => (
    <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-${where}`} className={cls}>Call {PHONE_DISPLAY}</a>
  );
  const what = p.focus.paragraphs?.slice(0, 2) ?? [];

  return (
    <>
      {/*
        Banner: the home page's video over its poster photo, the headline, the offer in one line and the two actions. The video is wide
        (960 x 404), so on phones it plays as a 4:3 strip at the top with the words under it on the dark background (filling a tall phone
        screen would blow a small slice of it up and blur it). From tablet width up, the words sit over the video, as on the home page.
      */}
      <section className="relative isolate overflow-hidden bg-night text-white md:flex md:min-h-[640px] md:items-end">
        <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:-z-10 md:aspect-auto">
          <Image src={images.heroPoster.src} alt={images.heroPoster.alt} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
          <HeroVideo mp4="/video/home-hero.mp4" webm="/video/home-hero.webm" phoneMp4="/video/home-hero-phone.mp4" poster={images.heroPoster.src} className="absolute inset-0 h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent md:from-black/80 md:via-black/35 md:to-black/10" />
        </div>
        <div className="container-x pb-6 pt-1 md:pb-16 md:pt-32">
          <div className="max-w-[640px]">
            <h1 className="text-[34px] font-semibold leading-[1.1] sm:text-[48px]">{p.headline}</h1>
            <p className="mt-3 text-[18px] leading-snug sm:text-[20px]">
              <span className="font-bold">{offer.amount}</span> {offer.text}{offer.aside ? <span className="text-white/80"> {offer.aside}</span> : null}
            </p>
            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              {call("hero", callBig)}
              <RequestButton className={requestOnDark}>Request an Appointment</RequestButton>
            </div>
            <p className="mt-4 text-[12px] leading-snug text-white/75">{terms}</p>
          </div>
        </div>
      </section>

      {/* Required safety note on the emergency page, small, right under the banner */}
      {p.notice ? <p role="note" className="container-x bg-white py-3 text-[13px] leading-snug text-[#5c3b00]">{p.notice}</p> : null}

      {/* 1. What the treatment is */}
      <section className="bg-white">
        <div className="container-x max-w-[760px] py-14 sm:py-20">
          <h2 className="h2 text-ink">{p.focus.heading}</h2>
          {p.focus.intro ? <p className="mt-4 leading-[1.65] text-body">{p.focus.intro}</p> : null}
          {p.focus.items ? (
            <ul className="mt-4 space-y-2 leading-[1.6] text-body">
              {p.focus.items.slice(0, 5).map((t) => <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{t}</li>)}
            </ul>
          ) : null}
          {what.length ? <div className="mt-4 space-y-3 leading-[1.65] text-body">{what.map((t) => <p key={t}>{t}</p>)}</div> : null}
        </div>
      </section>

      {/* 2. Why this practice: the home page's three ideas */}
      <section className="bg-paper">
        <div className="container-x py-14 sm:py-20">
          <h2 className="h2 text-center text-ink">{PILLARS.heading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
            {PILLARS.items.map((it) => (
              <div key={it.title}>
                <h3 className="text-h3 font-semibold text-ink">{it.title}</h3>
                <p className="mt-1.5 leading-[1.65] text-body">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A few questions */}
      {p.faqs.length ? (
        <section className="bg-white">
          <div className="container-x max-w-[760px] py-14 sm:py-20">
            <h2 className="h2 text-ink">Questions</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {p.faqs.slice(0, 4).map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                    {f.q}<span aria-hidden="true" className="text-[22px] leading-none text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-[1.65] text-body">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. The last Call */}
      <section className="bg-cream">
        <div className="container-x max-w-[760px] py-14 text-center sm:py-20">
          <h2 className="h2 text-ink">{p.closing.heading}</h2>
          <p className="mx-auto mt-3 max-w-[560px] leading-[1.65] text-body">{p.closing.text}</p>
          <div className="mx-auto mt-7 flex max-w-[520px] flex-col justify-center gap-3 md:max-w-none md:flex-row">
            {call("end", callBig)}
            <RequestButton className={requestOnLight}>Request an Appointment</RequestButton>
          </div>
          <p className="mt-5 text-[12px] leading-snug text-body">{offer.amount} {offer.text}. {terms}</p>
          {p.availability ? <p className="mt-1.5 text-[12px] leading-snug text-body">{p.availability}</p> : null}
          <p className="mt-4 text-[14px] text-body">{PRACTICE.doctor} · {PRACTICE.address}</p>
        </div>
      </section>

      {/* Phones: both actions stay in reach */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 shadow-[0_-4px_14px_rgb(0_0_0/0.08)] lg:hidden">
        <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-bar`} className="inline-flex min-h-[48px] items-center justify-center rounded-[3px] border-2 border-brand text-[16px] font-semibold text-brand">Call</a>
        <RequestButton className="inline-flex min-h-[48px] items-center justify-center rounded-[3px] bg-brand text-[16px] font-semibold text-white">Request</RequestButton>
      </div>

      <RequestModal pageKey={p.key} title={p.formTitle} button={p.formButton} note={p.formNote} />
    </>
  );
}
