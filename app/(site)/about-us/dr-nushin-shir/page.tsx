import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, drShirSchema, profilePageSchema } from "@/lib/schema";
import { PROFILE_PATH, drShirProfile as p } from "@/lib/data/profile";
import { DEFAULT_AUTHOR } from "@/lib/data/blog";
import { JsonLd } from "@/components/ui/JsonLd";
import { PhoneIcon } from "@/components/ui/Icons";
import { PostCard } from "@/components/blog/PostCard";
import { btnOnDark, btnOutline, btnPrimary, card, eyebrow } from "@/components/blog/styles";

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({ title: p.seo.title, description: p.seo.description }, PROFILE_PATH, p.photo);
}

/*
 * Dr. Shir's profile (TTR-921): who she is and where she practices now, her education, teaching and recognition, and her
 * articles. ProfilePage + Person data tie her to this practice; the About page, every post byline and the author card link
 * here. Built in the blog's visual language (sage hero, white cards) so it sits between the About page and the posts.
 */
export default async function DrShirPage() {
  const [posts, settings] = await Promise.all([getPosts(), getSiteSettings()]);
  const hers = posts.filter((post) => (post.author || DEFAULT_AUTHOR) === DEFAULT_AUTHOR);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us/" }, { name: p.name, path: PROFILE_PATH }])} />
      <JsonLd data={profilePageSchema()} />
      <JsonLd data={drShirSchema()} />

      <section className="relative overflow-hidden bg-header">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_85%_10%,rgb(214_234_221_/_0.95),transparent_70%)]" />
        <div className="container-box relative grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center lg:gap-16 lg:py-16">
          <div>
            <p className="post-rise flex flex-wrap items-center gap-3 text-sm" style={css(0)}>
              <Link href="/about-us/" className="font-semibold text-ink/70 transition-colors hover:text-brand">
                About Us
              </Link>
              <span aria-hidden="true" className="text-ink/30">
                /
              </span>
              <span className="font-semibold text-brand">Our dentist</span>
            </p>
            <h1 className="post-rise mt-5 text-[2rem] font-semibold leading-[1.1] text-ink sm:text-[2.5rem] lg:text-[2.875rem]" style={css(1)}>
              {p.name}, {p.credentials}
            </h1>
            <p className="post-rise mt-3 text-lg font-semibold text-brand" style={css(2)}>
              {p.role}
            </p>
            <div className="post-rise mt-5 max-w-[640px] space-y-4 text-lg leading-[1.6] text-body" style={css(3)}>
              {p.intro.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <div className="post-rise mt-8 flex flex-wrap gap-3" style={css(4)}>
              <Link href="/appointment/" data-track="book_appointment" className={btnPrimary}>
                Book a visit with Dr. Shir
              </Link>
              <a href={settings.phoneHref} data-track="click_to_call" className={btnOutline}>
                <PhoneIcon className="h-4 w-4" />
                {settings.phone}
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[360px]">
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-brand/25" />
            <div className="relative aspect-[690/1024] overflow-hidden rounded-xl bg-dropdown shadow-[0_24px_60px_rgb(33_29_29_/_0.18)]">
              <Image src={p.photo.src} alt={p.photo.alt} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 360px, 90vw" className="post-settle object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="facts" className="bg-paper py-12 lg:py-16">
        <div className="container-box">
          <h2 id="facts" className={eyebrow}>
            At a glance
          </h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.facts.map((f, i) => (
              <div key={f.label} className={`p-5 ${card}`} data-reveal style={css(i)}>
                <dt className="text-sm text-ink/70">{f.label}</dt>
                <dd className="mt-1 font-semibold leading-snug text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {p.sections.map((s) => (
              <section key={s.heading} aria-labelledby={`h-${s.heading}`} data-reveal>
                <h2 id={`h-${s.heading}`} className="post-h2">
                  {s.heading}
                </h2>
                <ul className="mt-5 space-y-3">
                  {s.items.map((it) => (
                    <li key={it.title} className={`p-5 ${card}`}>
                      <h3 className="font-semibold text-ink">{it.title}</h3>
                      <p className="mt-1 leading-[1.6] text-body">{it.text}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {hers.length ? (
        <section aria-labelledby="articles" className="bg-white py-16">
          <div className="container-box">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="articles" className="post-h2">
                Articles by Dr. Shir
              </h2>
              <Link href="/blog/" className="text-cta font-semibold text-brand">
                All articles
              </Link>
            </div>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hers.slice(0, 6).map((post, i) => (
                <li key={post.slug} data-reveal style={css(i)}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="bg-brand py-14 text-white">
        <div className="container-box flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">See Dr. Shir on Bedford Drive</h2>
            <p className="mt-2 max-w-[560px] text-white/80">
              {settings.street}, {settings.city}. Meet the rest of the team on our <Link href="/about-us/" className="underline underline-offset-4">About page</Link>.
            </p>
          </div>
          <Link href="/appointment/" data-track="book_appointment" className={btnOnDark}>
            Request an appointment
          </Link>
        </div>
      </section>
    </>
  );
}
