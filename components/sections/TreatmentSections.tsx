import Image from "next/image";
import type {
  AccordionFeatureSection,
  CardPairSection,
  FaqSection,
  HeroSection,
  IconFeaturesSection,
  ImageBandSection,
  Overlay,
  Section,
  StepsSection,
  TextBandSection,
  TopicsSection,
} from "@/lib/types";
import { RichText } from "@/components/ui/RichText";
import { Accordion } from "@/components/ui/Accordion";
import { Carousel } from "@/components/ui/Carousel";
import { TextLink } from "@/components/ui/TextLink";
import { CheckCircle } from "@/components/ui/Icons";

/*
 * The section set of the old site's treatment template (every service,
 * category, McLean and location page). Spacing, colors and type follow the
 * old Elementor styles; text contrast on dark backgrounds is raised.
 */

/** Overlay over a background photo. "none" still gets a light shade so white text stays readable. */
function Shade({ overlay, opacity, side = "bottom" }: { overlay: Overlay; opacity?: number; side?: "bottom" | "left" }) {
  if (overlay === "dark") return <div aria-hidden="true" className="absolute inset-0 bg-black" style={{ opacity: opacity ?? 0.5 }} />;
  if (overlay === "left") return <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black to-transparent" style={{ opacity: opacity ?? 0.5 }} />;
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 ${side === "left" ? "bg-gradient-to-r from-black/45 via-black/15" : "bg-gradient-to-t from-black/50 via-black/10"} to-transparent`}
    />
  );
}

export function Hero({ s, first = true }: { s: HeroSection; first?: boolean }) {
  return (
    <section className="relative flex min-h-[637px] flex-col justify-end overflow-hidden py-[100px] md:aspect-video md:min-h-0">
      {s.image ? (
        <Image src={s.image.src} alt={s.image.alt ?? ""} fill preload={first} sizes="100vw" className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-night" />
      )}
      <Shade overlay={s.overlay} opacity={s.overlayOpacity} />
      <div className="container-x relative text-white">
        <h1 className="pb-[60px] text-h1 font-semibold lg:max-w-[34%]">{s.heading}</h1>
        {s.subheading ? <h2 className="h2 capitalize">{s.subheading}</h2> : null}
        <div style={s.textMaxWidth ? { maxWidth: s.textMaxWidth } : undefined}>
          <RichText paras={s.text} className="mt-5" />
        </div>
      </div>
    </section>
  );
}

export function TextBand({ s }: { s: TextBandSection }) {
  const dark = s.tone === "dark";
  return (
    <section className={`py-20 ${dark ? "bg-night text-white" : "bg-paper text-body"}`}>
      <div className="container-x">
        <h2 className="h2 text-black">{s.heading}</h2>
        <RichText paras={s.text} className="mt-5 md:max-w-[80%]" />
        {s.link ? (
          <p className="mt-5">
            <TextLink link={s.link} className="font-semibold text-brand" />
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function AccordionFeature({ s }: { s: AccordionFeatureSection }) {
  return (
    <section className="bg-night py-20 text-white">
      <div className="container-x">
        <h2 className="h2 uppercase">{s.heading}</h2>
        <div style={s.textMaxWidth ? { maxWidth: s.textMaxWidth } : undefined}>
          <RichText paras={s.text} className="mt-5 text-white/75" />
        </div>
        <div className="mt-[50px] flex flex-col-reverse gap-10 lg:flex-row lg:gap-[92px]">
          {s.image ? (
            <div className="relative h-[337px] lg:h-[700px] lg:w-[48.6%] lg:shrink-0">
              <Image src={s.image.src} alt={s.image.alt ?? ""} fill sizes="(min-width: 1024px) 55vw, 90vw" className="object-cover" />
            </div>
          ) : null}
          <div className="flex-1 lg:px-2.5">
            <Accordion
              tone="dark"
              items={s.items.map((it) => ({
                title: it.title,
                content: it.body.length ? <RichText paras={it.body} className="text-white/80" /> : undefined,
              }))}
            />
            {s.link ? (
              <p className="mt-8">
                <TextLink link={s.link} className="text-white" />
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CardPair({ s }: { s: CardPairSection }) {
  return (
    <section className="bg-paper py-20 lg:px-20">
      <div className="container-x flex flex-col gap-10 lg:w-auto lg:flex-row lg:items-center lg:gap-5">
        <div className="lg:w-[40%] lg:px-2.5">
          <h2 className="h2 uppercase text-black">{s.heading}</h2>
          <RichText paras={s.text} className="mt-5 lg:max-w-[70%]" />
          {s.link ? (
            <p className="mt-9">
              <TextLink link={s.link} className="text-brand" />
            </p>
          ) : null}
        </div>
        {s.cards.length ? (
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-5 lg:w-[60%] lg:items-start">
            {s.cards.map((c, i) => (
              <div key={i}>
                {c.image ? (
                  <div className="relative h-[270px]">
                    <Image src={c.image.src} alt={c.image.alt ?? ""} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" className="object-cover" />
                  </div>
                ) : null}
                <h3 className="mb-2.5 mt-[25px] text-h3 font-semibold uppercase text-black">{c.title}</h3>
                <RichText paras={c.text} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Step({ it }: { it: StepsSection["items"][number] }) {
  return (
    <div>
      {it.icon ? <Image src={it.icon.src} alt="" width={96} height={96} className="mb-[15px] h-auto w-[84px]" /> : null}
      <h3 className="mb-2.5 text-h3 font-semibold">{it.title}</h3>
      <p>{it.text}</p>
    </div>
  );
}

export function Steps({ s }: { s: StepsSection }) {
  return (
    <section className="bg-night py-20 text-white">
      <div className="container-x flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col justify-center lg:w-[40%]">
          <h2 className="h2 uppercase">{s.heading}</h2>
          <RichText paras={s.text} className="mt-5 text-white/75" />
          {s.link ? (
            <p className="mt-5">
              <TextLink link={s.link} className="text-white" />
            </p>
          ) : null}
        </div>
        <div className="lg:w-[60%]">
          {/* Phones: one step at a time with arrows, like the old carousel. */}
          <div className="md:hidden">
            <Carousel label={s.heading} arrows="below" tone="dark">
              {s.items.map((it, i) => (
                <Step key={i} it={it} />
              ))}
            </Carousel>
          </div>
          <div className="hidden gap-[60px] md:grid md:grid-cols-2">
            {s.items.map((it, i) => (
              <Step key={i} it={it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImageBand({ s }: { s: ImageBandSection }) {
  return (
    <section className="relative flex min-h-[400px] flex-col justify-end overflow-hidden p-5 md:aspect-video md:min-h-0 md:px-[90px] md:py-20">
      {s.image ? <Image src={s.image.src} alt={s.image.alt ?? ""} fill sizes="100vw" className="object-cover" /> : <div className="absolute inset-0 bg-night" />}
      <Shade overlay={s.overlay} opacity={s.overlayOpacity} side="left" />
      <div className="relative text-white">
        <h2 className="h2 uppercase">{s.heading}</h2>
        <div style={s.textMaxWidth ? { maxWidth: s.textMaxWidth } : undefined}>
          <RichText paras={s.text} className="mt-5" />
        </div>
      </div>
    </section>
  );
}

export function Faqs({ s }: { s: FaqSection }) {
  if (!s.items.length && !s.heading) return null;
  return (
    <section className="bg-paper py-20 md:px-20">
      <div className="container-x pb-[70px] md:w-auto">
        <h2 className="h2 uppercase text-black md:text-center">{s.heading}</h2>
        <RichText paras={s.text} className="mx-auto mt-5 md:text-center" />
        <div className="mt-5">
          <Accordion
            items={s.items.map((f) => ({ title: f.question, content: f.answer.length ? <RichText paras={f.answer} className="px-5" /> : undefined }))}
          />
        </div>
      </div>
    </section>
  );
}

export function Topics({ s }: { s: TopicsSection }) {
  const hasContent = s.blocks.length || s.columns.some((c) => c.length) || s.logos.length;
  if (!hasContent) return null;
  return (
    <section className="bg-paper pb-20">
      <div className="container-x">
        {s.blocks.map((b, i) => (
          <div key={i} className="mb-10 text-center">
            <h2 className="h2 uppercase text-black">{b.heading}</h2>
            <RichText paras={b.text} className="mx-auto mt-5 max-w-[850px]" />
          </div>
        ))}
        {s.columns.some((c) => c.length) ? (
          <div className="grid gap-x-2.5 gap-y-[18px] px-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {s.columns.map((col, i) => (
              <ul key={i} className="space-y-[18px]">
                {col.map((t) => (
                  <li key={t} className="flex items-center gap-1.5 text-base uppercase leading-[1.65]">
                    <CheckCircle className="h-6 w-6 shrink-0 text-black" />
                    {t}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ) : null}
        {s.logos.length ? (
          <ul className="mt-16 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5" aria-label="Insurance accepted">
            {s.logos.map((l) => (
              <li key={l.src} className="flex justify-center">
                <Image src={l.src} alt={l.alt ?? ""} width={l.width} height={l.height} sizes="224px" className="h-auto max-h-16 w-auto max-w-[210px] object-contain opacity-80 grayscale" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export function IconFeatures({ s }: { s: IconFeaturesSection }) {
  return (
    <section className="bg-night py-20 text-white">
      <div className="container-x">
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="h2 uppercase">{s.heading}</h2>
          <RichText paras={s.text} className="mt-5" />
        </div>
        <div className="mt-12 grid gap-12 md:mt-0 md:grid-cols-3 md:gap-[50px] md:pt-20">
          {s.items.map((it, i) => (
            <div key={i} className="text-center">
              {it.icon ? <Image src={it.icon.src} alt={it.icon.alt ?? ""} width={96} height={96} className="mx-auto h-20 w-20 md:h-[100px] md:w-[100px]" /> : null}
              <h3 className="mt-5 text-h3 font-semibold">{it.title}</h3>
              <p className="mt-2">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Renders a page's sections in order. */
export function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s, i) => {
        const key = s._key ?? `${s._type}-${i}`;
        switch (s._type) {
          case "hero":
            return <Hero key={key} s={s} first={i === 0} />;
          case "textBand":
            return <TextBand key={key} s={s} />;
          case "accordionFeature":
            return <AccordionFeature key={key} s={s} />;
          case "cardPair":
            return <CardPair key={key} s={s} />;
          case "steps":
            return <Steps key={key} s={s} />;
          case "imageBand":
            return <ImageBand key={key} s={s} />;
          case "faq":
            return <Faqs key={key} s={s} />;
          case "topics":
            return <Topics key={key} s={s} />;
          case "iconFeatures":
            return <IconFeatures key={key} s={s} />;
          default:
            return null;
        }
      })}
    </>
  );
}
