import type { Metadata } from "next";
import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { notFound } from "next/navigation";
import { RequestButton, RequestModal } from "@/components/lp/RequestModal";
import { finePrint, GOOGLE_PROFILE, LP_PAGES, LP_REVIEWS, OFFERS, PILLARS, PRACTICE, type OfferKey } from "@/lib/lp-pages";
import { getLpPage } from "@/lib/lp-content";
import { images } from "@/lib/data/images";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { Reviews } from "@/components/areas/AreaBlocks";
import { getTeam, getTestimonials } from "@/lib/content";

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
/*
 * The banner photo (TTR-3066 speed, Kia's bar: PageSpeed mobile 90+ and largest paint 2.5 s or less). Phones get their own 4:3 crop of the
 * home poster (780 x 585 WebP, about 29 KB), preloaded at high priority; from tablet width up, the home poster at full width. The video
 * starts only after the page has loaded and covers the photo once it plays.
 */
const PHONE_POSTER = "/lp/hero-poster-phone.webp";
const wideSrcSet = getImageProps({ src: images.heroPoster.src, alt: "", fill: true, sizes: "100vw" }).props.srcSet;

const PHONE_DISPLAY = `(${PRACTICE.phone.slice(0, 3)}) ${PRACTICE.phone.slice(4)}`;
// The one-line offer: the $99 visit everywhere, Invisalign's own offer on the Invisalign page. No implant offer anywhere in the banner.
const offerFor = (keys: OfferKey[]): OfferKey => (keys.includes("invisalign") ? "invisalign" : "cleaning");

// Buttons in the home page's soft style (rounded, generous), with the Call button the strongest thing on the screen.
const callBig = "flex min-h-[60px] w-full items-center justify-center rounded-[18px] bg-brand px-7 text-[19px] font-bold text-white shadow-[0_6px_20px_rgb(0_0_0/0.25)] transition-colors hover:bg-brand-2 md:inline-flex md:w-auto";
const requestOnDark = "flex min-h-[54px] w-full items-center justify-center rounded-[18px] border-2 border-white bg-white/20 px-7 text-[16px] font-semibold text-white transition-colors hover:border-brand-2 hover:bg-brand-2 md:inline-flex md:w-auto";
const requestOnLight = "flex min-h-[54px] w-full items-center justify-center rounded-[18px] border-2 border-brand px-7 text-[16px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white md:inline-flex md:w-auto";

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const [p, team, reviews] = await Promise.all([getLpPage((await params).slug), getTeam(), getTestimonials()]);
  if (!p) notFound();
  // Dr. Shir's bio in the About page's approved words (Kia, Nov 24): the first sentence shows, the rest opens with "Read more".
  const shir = team.find((m) => m.name === "Dr. Nushin Shir");
  const bio = (shir?.bio ?? []).join(" ");
  const cut = bio.indexOf(". ", 60) + 1; // the first sentence end, past titles such as "Dr."
  const photo = shir?.photo ?? images.drNushinShir;
  const { style: _s, ...shirPhoto } = getImageProps({ src: photo.src, alt: photo.alt || "Dr. Nushin Shir", fill: true, sizes: "(min-width: 640px) 200px, 140px" }).props;
  void _s;
  const [bioLead, bioMore] = cut > 0 ? [bio.slice(0, cut), bio.slice(cut).trim()] : [bio, ""];
  const offerKey = offerFor(p.offers ?? []);
  const offer = OFFERS[offerKey];
  const terms = finePrint([offerKey]);
  const call = (where: string, cls: string) => (
    <a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-${where}`} className={cls}>Call {PHONE_DISPLAY}</a>
  );
  const what = p.focus.paragraphs?.slice(0, 2) ?? [];
  preload(PHONE_POSTER, { as: "image", fetchPriority: "high", media: "(max-width: 767px)" });

  return (
    <>
      {/*
        Banner: the home page's video over its poster photo, the headline, the offer in one line and the two actions. The video is wide
        (960 x 404), so on phones it plays as a 4:3 strip at the top with the words under it on the dark background (filling a tall phone
        screen would blow a small slice of it up and blur it). From tablet width up, the words sit over the video, as on the home page.
      */}
      <section className="relative isolate overflow-hidden bg-night text-white md:flex md:min-h-[640px] md:items-end">
        <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:-z-10 md:aspect-auto">
          <picture>
            {/* Art direction (next/image getImageProps pattern): a phone crop under 768 px, the wide home poster above */}
            <source media="(min-width: 768px)" srcSet={wideSrcSet} sizes="100vw" />
            <img src={PHONE_POSTER} alt={images.heroPoster.alt} width={780} height={585} loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
          <HeroVideo mp4="/video/home-hero.mp4" webm="/video/home-hero.webm" phoneMp4="/video/home-hero-phone.mp4" className="absolute inset-0 h-full w-full object-cover" />
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

      {/* About Dr. Shir (Kia, Nov 24): her photo (loads lazily) and the About page's bio, short on phones with "Read more" */}
      {shir ? (
        <section className="bg-cream">
          <div className="container-x grid max-w-[900px] items-start gap-5 py-14 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-20">
            <div className="relative aspect-[4/5] w-[140px] overflow-hidden rounded-[12px] sm:w-full">
              {/* A plain lazy image (getImageProps), so this photo adds no page script and never competes with the banner */}
              {/* eslint-disable-next-line @next/next/no-img-element -- getImageProps gives the optimized srcset; plain img keeps the page script-free */}
              <img {...shirPhoto} alt={shirPhoto.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 20%" }} />
            </div>
            <div>
              <h2 className="h2 text-ink">Meet {shir.name}</h2>
              <p className="mt-1 text-[14px] font-semibold text-brand">General &amp; Cosmetic Dentist</p>
              <p className="mt-3 leading-[1.65] text-body">{bioLead}</p>
              {bioMore ? (
                <details className="group mt-1">
                  <summary className="cursor-pointer list-none font-semibold text-brand underline group-open:hidden">Read more</summary>
                  <p className="leading-[1.65] text-body">{bioMore}</p>
                </details>
              ) : null}
              <p className="mt-4"><a href={PRACTICE.tel} data-track="click_to_call" data-track-page={`lp-${p.key}-doctor`} className="font-semibold text-brand underline">Call {PHONE_DISPLAY}</a></p>
            </div>
          </div>
        </section>
      ) : null}

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

      {/* Reviews: the site's reviews component. The CMS reviews when there are any, else the two Google reviews in LP_REVIEWS (Kia, Nov 23),
          and a link to the practice's Google profile. Visible text only: no rating or review structured data. */}
      <Reviews reviews={(reviews.length ? reviews : LP_REVIEWS).slice(0, 3)} area="Beverly Hills" moreHref={GOOGLE_PROFILE} />

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
