import Image from "next/image";
import Link from "next/link";
import type { BeforeAfterCase, HomeContent } from "@/lib/types";
import { RichText } from "@/components/ui/RichText";
import { TechSwitcher } from "@/components/sections/TechSwitcher";
import { Slideshow } from "@/components/sections/Slideshow";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { HeroVideo } from "@/components/sections/HeroVideo";

/** Full-screen video hero (muted, looping) over the poster photo, which shows until the video starts. */
export function HomeHero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden py-[100px] md:aspect-video md:min-h-0">
      {hero.poster ? <Image src={hero.poster.src} alt="" fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" /> : <div className="absolute inset-0 bg-night" />}
      {hero.videoMp4 || hero.videoWebm ? <HeroVideo mp4={hero.videoMp4} webm={hero.videoWebm} /> : null}
      {/* Light shade so the white headline reads on bright frames. */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
      <div className="container-x relative text-white">
        <h1 className="text-h1 font-semibold">{hero.heading}</h1>
        <p className="mt-[10px]">{hero.tagline}</p>
        <Link
          href={hero.cta.href}
          className="mt-[30px] flex w-full items-center justify-center rounded-[18px] border-2 border-white bg-white/20 px-[22px] py-[22px] text-[15px] font-semibold leading-none text-white transition-colors duration-300 hover:border-brand-2 hover:bg-brand-2 md:inline-flex md:w-auto md:px-7 md:py-3"
        >
          {hero.cta.label}
        </Link>
      </div>
    </section>
  );
}

/** "We treat you, not just your teeth" with three image cards. */
export function HomeIntro({ intro }: { intro: HomeContent["intro"] }) {
  return (
    <section className="bg-white p-2.5 pt-[60px]">
      <h2 className="h2 text-ink text-center">{intro.heading}</h2>
      <p className="mx-auto mb-[50px] mt-[30px] max-w-[1000px] px-2.5 text-center">{intro.text}</p>
      <div className="grid md:grid-cols-3">
        {intro.cards.map((c, i) => (
          <article key={i} className="flex flex-col" data-reveal style={{ "--i": i } as React.CSSProperties}>
            {c.image ? (
              <div className="relative aspect-video overflow-hidden">
                <Image src={c.image.src} alt={c.image.alt ?? ""} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            ) : null}
            <div className="flex-1 bg-paper p-5">
              <h3 className="mb-[5px] text-h3 font-semibold">{c.title}</h3>
              <RichText paras={c.text} className="leading-[1.65]" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** "Thirty Years of Doing It Differently" over a cross-fading slideshow of the office. */
export function HomeStory({ story }: { story: HomeContent["story"] }) {
  return (
    <section className="relative mt-[90px] flex min-h-[850px] flex-col justify-end overflow-hidden py-[150px]">
      <Slideshow images={story.slides} />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
      <div className="container-x relative text-white">
        <h2 className="h2">{story.heading}</h2>
        <RichText paras={story.text} className="mt-5 md:max-w-[680px]" />
        <Link
          href={story.cta.href}
          className="mt-5 inline-block border-b-2 border-white px-3 py-2 text-[15px] font-semibold capitalize leading-none transition-colors duration-300 hover:border-brand-2 hover:bg-brand-2"
        >
          {story.cta.label}
        </Link>
      </div>
    </section>
  );
}

export function HomeTechnology({ technology }: { technology: HomeContent["technology"] }) {
  return <TechSwitcher heading={technology.heading} text={technology.text} items={technology.items} />;
}

/** "Our Work": heading and the smile carousel with a lightbox (also used on the thank-you page). */
export function OurWork({ work, cases }: { work: HomeContent["work"]; cases: BeforeAfterCase[] }) {
  return (
    <section className="bg-white py-[60px]">
      <div className="container-x">
        <h2 className="h2 text-ink text-center">{work.heading}</h2>
        <p className="mb-[30px] mt-[30px] text-center">{work.text}</p>
        {cases.length ? (
          <WorkGallery label={work.heading} cases={cases} />
        ) : null}
      </div>
    </section>
  );
}

/** "Biological. Biomimetic. Holistic. Natural." with the consultation button and three photo cards. */
export function HomeValues({ values, areasLink = false }: { values: HomeContent["values"]; areasLink?: boolean }) {
  return (
    <section className="bg-white pt-[60px]">
      <div className="container-x text-center">
        <h2 className="h2 text-ink">{values.heading}</h2>
        <p className="mx-auto mt-[30px] max-w-[1000px] md:leading-[1.4]">{values.text}</p>
        <Link
          href={values.cta.href}
          className="mt-[30px] inline-block rounded-[6px] border border-black px-7 py-[14px] text-[24px] font-semibold leading-[1.3] text-black transition-colors duration-300 hover:border-brand-2 hover:bg-brand-2 hover:text-white"
        >
          {values.cta.label}
        </Link>
      </div>
      <div className="mt-[60px] grid md:grid-cols-3">
        {values.cards.map((c, i) => (
          <article key={i} className="relative flex min-h-[650px] flex-col justify-end overflow-hidden p-10 text-white">
            {c.image ? <Image src={c.image.src} alt={c.image.alt ?? ""} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /> : null}
            <div aria-hidden="true" className="absolute inset-0 bg-black/25" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="relative">
              <h3 className="text-[20px] font-semibold leading-[1.5]">{c.title}</h3>
              <RichText paras={c.text} className="mt-4" />
              {/* First card links to the Areas We Serve hub once it is approved. */}
              {areasLink && i === 0 ? (
                <Link href="/areas-we-serve/" className="mt-5 inline-block border-b-2 border-white px-3 py-2 text-[15px] font-semibold leading-none transition-colors duration-300 hover:border-brand-2 hover:bg-brand-2">
                  See the areas we serve
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
