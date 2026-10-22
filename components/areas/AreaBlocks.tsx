import Image from "next/image";
import Link from "next/link";
import type { AreaPage, AreaWhyItem, Faq, Img, SiteSettings, Testimonial } from "@/lib/types";
import { RichText } from "@/components/ui/RichText";
import { Accordion } from "@/components/ui/Accordion";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { CheckCircle, LaserIcon, LeafIcon, MapMarker, OzoneIcon, PhoneIcon, ScanIcon, ToothIcon } from "@/components/ui/Icons";

/*
 * Blocks of the "Areas We Serve" template (handoff: hero, trust strip, intro,
 * getting here + map, popular treatments, CTA band, why patients make the trip,
 * reviews, FAQ, final CTA, sticky mobile bar). Buttons are the same on every
 * block and page: Book an Appointment and Call, tracked with the page name.
 */

const OFFICE = "416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210";
export const BOOK = { label: "Book an Appointment", href: "/appointment/" };

/** Display form of the phone number used in the handoff (310-274-7005). */
export const dashed = (phone: string) => phone.replace(/\D/g, "").replace(/^1?(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3");

const btn = "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[6px] px-6 py-3 text-[16px] font-semibold leading-tight transition-colors duration-200";

/** Book + Call, identical everywhere. tone: "dark" for photo/dark backgrounds. */
export function CtaButtons({ s, page, tone = "dark", className = "" }: { s: SiteSettings; page: string; tone?: "dark" | "light"; className?: string }) {
  const phone = dashed(s.phone);
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <Link href={BOOK.href} data-track="book_appointment" data-track-page={page} className={`${btn} bg-brand text-white hover:bg-brand-2`}>
        {BOOK.label}
      </Link>
      <a
        href={s.phoneHref}
        data-track="click_to_call"
        data-track-page={page}
        className={`${btn} border-2 ${tone === "dark" ? "border-white text-white hover:border-brand-2 hover:bg-brand-2" : "border-brand text-brand hover:bg-brand hover:text-white"}`}
      >
        <PhoneIcon className="h-4 w-4" />
        Call {phone}
      </a>
    </div>
  );
}

/** Hero: real office photo, H1, subhead with the drive time, both buttons above the fold. */
export function AreaHero({ s, page, heading, subhead, image }: { s: SiteSettings; page: string; heading: string; subhead: string; image?: Img }) {
  return (
    <section className="relative flex min-h-[460px] flex-col justify-end overflow-hidden py-12 md:min-h-[560px] md:py-20">
      {image ? (
        <Image src={image.src} alt={image.alt || heading} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-night" />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
      <div className="container-x relative text-white">
        <h1 className="max-w-[760px] text-h1 font-semibold md:text-[44px]">{heading}</h1>
        <p className="mt-4 max-w-[640px] text-[18px] leading-snug text-white/90">{subhead}</p>
        <CtaButtons s={s} page={page} className="mt-7" />
      </div>
    </section>
  );
}

/** Trust strip directly under the buttons. */
export function TrustStrip({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section aria-label="Why patients trust us" className="border-b border-line bg-header">
      <ul className="container-x flex flex-wrap justify-center gap-x-8 gap-y-3 py-5 text-[15px] font-semibold text-ink">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 shrink-0 text-tick" />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Intro({ paras }: { paras: string[] }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <RichText paras={paras} className="container-x max-w-[860px] text-[17px] leading-[1.7] md:text-center" />
    </section>
  );
}

/** Lazy-loaded Google Map: a route when `from` is given, else the office pin. */
export function OfficeMap({ from, title, embedUrl, className = "" }: { from?: string; title: string; embedUrl?: string; className?: string }) {
  const src =
    embedUrl ||
    (from
      ? `https://www.google.com/maps?saddr=${encodeURIComponent(from)}&daddr=${encodeURIComponent(OFFICE)}&output=embed`
      : `https://www.google.com/maps?q=${encodeURIComponent(OFFICE)}&z=15&output=embed`);
  return (
    <div className={`relative overflow-hidden rounded-[12px] bg-beige ${className}`}>
      <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" allowFullScreen />
    </div>
  );
}

export function GettingHere({ page, mapCaption }: { page: AreaPage; mapCaption: string }) {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="h2 text-black">Getting here</h2>
          <RichText paras={page.gettingHere} className="mt-5 leading-[1.7]" />
        </div>
        <figure>
          <OfficeMap from={page.mapFrom} title={page.mapTitle} className="aspect-[4/3]" />
          <figcaption className="mt-3 flex items-start gap-2 text-[15px] text-body">
            <MapMarker className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            {mapCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Treatments({ page }: { page: AreaPage }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-x">
        <h2 className="h2 text-black md:text-center">{page.treatmentsHeading}</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {page.treatments.map((t) => (
            <li key={t.title} className="flex flex-col rounded-[12px] border border-line bg-paper p-6">
              <ToothIcon className="h-10 w-10 text-brand" />
              <h3 className="mt-4 text-h3 font-semibold text-black">{t.title}</h3>
              <p className="mt-2 flex-1 leading-[1.65]">{t.text}</p>
              {t.links.length ? (
                <p className="mt-4 flex flex-col gap-2">
                  {t.links.map((l) => (
                    <Link key={l.href} href={l.href} className="text-cta self-start font-semibold text-brand">
                      {l.label}
                      {l.label === "Learn more" ? <span className="sr-only"> about {t.title.toLowerCase()}</span> : null}
                    </Link>
                  ))}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** CTA band #2: the same two buttons. */
export function CtaBand({ s, page }: { s: SiteSettings; page: string }) {
  return (
    <section aria-label="Book or call" className="bg-brand py-10">
      <div className="container-x flex justify-center">
        <CtaButtons s={s} page={page} className="w-full justify-center sm:w-auto [&>a:first-child]:bg-white [&>a:first-child]:text-brand [&>a:first-child:hover]:bg-paper" />
      </div>
    </section>
  );
}

const WHY_ICONS = [OzoneIcon, ScanIcon, LaserIcon, LeafIcon];

/** "Why patients make the trip": 4-item icon row, then the page's own text. */
export function WhyRow({ heading, items, text }: { heading: string; items: AreaWhyItem[]; text: string[] }) {
  return (
    <section className="bg-night py-14 text-white md:py-20">
      <div className="container-x">
        <h2 className="h2 md:text-center">{heading}</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <li key={it.title} className="text-center">
                <Icon className="mx-auto h-12 w-12 text-[#9fd2ae]" />
                <h3 className="mt-4 text-h3 font-semibold">{it.title}</h3>
                {it.text ? <p className="mt-2 text-white/80">{it.text}</p> : null}
              </li>
            );
          })}
        </ul>
        <RichText paras={text} className="mx-auto mt-10 max-w-[860px] text-[17px] leading-[1.7] text-white/85 md:text-center" />
      </div>
    </section>
  );
}

/** Area reviews: hidden until the office supplies reviews with written permission. */
export function Reviews({ reviews, area }: { reviews: Testimonial[]; area: string }) {
  if (!reviews.length) return null;
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-x">
        <h2 className="h2 text-black md:text-center">What {area} patients say</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <li key={r.quote} className="rounded-[12px] border border-line bg-paper p-6">
              <p className="text-[#b98b1b]" aria-label={`${r.rating} out of 5 stars`}>
                {"★".repeat(Math.round(r.rating))}
              </p>
              <blockquote className="mt-3 leading-[1.65]">{r.quote}</blockquote>
              <p className="mt-3 font-semibold text-black">{r.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AreaFaq({ faqs, heading = "Frequently asked questions" }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="container-x max-w-[900px]">
        <h2 className="h2 text-black md:text-center">{heading}</h2>
        <div className="mt-8">
          <Accordion items={faqs.map((f) => ({ title: f.question, content: f.answer.length ? <RichText paras={f.answer} /> : undefined }))} />
        </div>
      </div>
    </section>
  );
}

/** Final block: phone, Book button and the 4-field form, office hours beside it. */
export function FinalCta({ s, page, heading, text }: { s: SiteSettings; page: string; heading: string; text?: string }) {
  return (
    <section id="book" className="bg-night py-14 text-white md:py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <h2 className="h2">{heading}</h2>
          {text ? <p className="mt-4 text-white/85">{text}</p> : null}
          <CtaButtons s={s} page={page} className="mt-6" />
          <h3 className="mt-10 text-h3 font-semibold">Office hours</h3>
          <ul className="mt-3 space-y-1.5 text-white/85">
            {s.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6 border-b border-white/10 pb-1.5 sm:max-w-[360px]">
                <span>{h.day}</span>
                <span>{h.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-white/85">
            <MapMarker className="mt-1 h-4 w-4 shrink-0" />
            {s.street}, {s.city}, {s.region} {s.postalCode}
          </p>
        </div>
        <div>
          <AppointmentForm buttonLabel={BOOK.label} businessName={s.name} phone={s.phone} phoneHref={s.phoneHref} variant="area" trackPage={page} />
        </div>
      </div>
    </section>
  );
}

/** Call + Book fixed to the bottom on phones (≤767px). */
export function StickyMobileBar({ s, page }: { s: SiteSettings; page: string }) {
  return (
    <>
      <div aria-hidden="true" className="h-[68px] md:hidden" />
      <nav aria-label="Call or book" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 shadow-[0_-4px_16px_rgb(0_0_0/0.12)] md:hidden">
        <a href={s.phoneHref} data-track="click_to_call" data-track-page={page} className={`${btn} border-2 border-brand px-3 text-brand`}>
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
        <Link href={BOOK.href} data-track="book_appointment" data-track-page={page} className={`${btn} bg-brand px-3 text-white`}>
          Book
        </Link>
      </nav>
    </>
  );
}
