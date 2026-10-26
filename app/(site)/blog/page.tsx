import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts, getSiteSettings } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { AUTHORS, CATEGORIES, DEFAULT_AUTHOR } from "@/lib/data/blog";
import { PhoneIcon } from "@/components/ui/Icons";
import { PostCard } from "@/components/blog/PostCard";
import { btnOnDark, card, chip, chipActive } from "@/components/blog/styles";

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

/* The blog: every post is by one of our dentists and supports one part of the site, so the list is grouped by category. */
export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  return {
    title: { absolute: "Dental Health Blog | Beverly Hills Dental Arts Studio" },
    description: "Plain answers about implants, cosmetic dentistry, clear aligners, gum care and prevention from Dr. Nushin Shir, DDS, MPH, in Beverly Hills.",
    alternates: { canonical: "/blog/" },
    ...(posts.length ? {} : { robots: { index: false, follow: true } }),
  };
}

/*
 * Top to bottom: a hero band with the heading, one line about the author and the author strip; category chips that jump
 * to each group (plain anchors, no JavaScript); the posts as cards in a grid, grouped by category; a "Have a question?"
 * band with the primary button. The hero text fades and rises on load; the cards reveal as they scroll into view.
 */
export default async function BlogPage() {
  const [posts, settings] = await Promise.all([getPosts(), getSiteSettings()]);
  const author = AUTHORS[DEFAULT_AUTHOR];
  const groups = CATEGORIES.map((c) => ({ ...c, posts: posts.filter((p) => (p.category || "cosmetic") === c.key) })).filter((g) => g.posts.length);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }])} />
      <section className="relative overflow-hidden bg-header">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_85%_10%,rgb(214_234_221_/_0.95),transparent_70%)]" />
        <div className="container-box relative py-14 lg:py-20">
          <p className="post-rise text-sm font-semibold uppercase tracking-[0.12em] text-brand" style={css(0)}>
            Blog
          </p>
          <h1 className="post-rise mt-3 max-w-[760px] text-[2rem] font-semibold leading-[1.1] text-ink sm:text-[2.5rem] lg:text-[2.875rem]" style={css(1)}>
            Dental health, explained by Dr. Nushin Shir
          </h1>
          <p className="post-rise mt-5 max-w-[620px] text-lg leading-[1.6] text-body" style={css(2)}>
            Plain answers to the questions patients ask us in Beverly Hills, written by the dentist who treats them.
          </p>
          <div className={`post-rise mt-8 inline-flex max-w-full items-center gap-4 bg-white/85 p-3 pr-5 ring-1 ring-black/5 ${card}`} style={css(3)}>
            <Image src={author.image.src} alt={author.image.alt} width={56} height={56} className="h-14 w-14 shrink-0 rounded-full object-cover object-top" />
            <div className="text-sm leading-snug">
              <div className="font-semibold text-ink">
                <Link href={author.url} className="underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand">
                  {author.name}, {author.credentials}
                </Link>
              </div>
              <div className="mt-0.5 text-ink/70">{author.jobTitle}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 lg:py-16">
        <div className="container-box">
          {posts.length === 0 ? (
            <p>
              Our first articles are on the way. In the meantime, see our{" "}
              <Link href="/services/" className="underline">
                services
              </Link>{" "}
              or{" "}
              <Link href="/appointment/" className="underline">
                book a visit
              </Link>
              .
            </p>
          ) : null}
          {groups.length ? (
            <nav aria-label="Categories" className="flex flex-wrap gap-2">
              <a href="#articles" className={chipActive}>
                All articles
                <span className="rounded-full bg-white/20 px-2 text-xs">{posts.length}</span>
              </a>
              {groups.map((g) => (
                <a key={g.key} href={`#cat-${g.key}`} className={chip}>
                  {g.name}
                  <span className="rounded-full bg-paper px-2 text-xs text-ink/70">{g.posts.length}</span>
                </a>
              ))}
            </nav>
          ) : null}
          <div id="articles" className="scroll-mt-28">
            {groups.map((g) => (
              <section key={g.key} id={`cat-${g.key}`} aria-labelledby={`cat-${g.key}-title`} className="mt-12 scroll-mt-28">
                <h2 id={`cat-${g.key}-title`} className="post-h2">
                  {g.name}
                </h2>
                <p className="mt-2 max-w-[620px] text-[15px] text-ink/70">
                  {g.blurb}{" "}
                  <Link href={g.path} className="text-cta font-semibold text-brand">
                    See the service page
                    <span className="sr-only"> for {g.name}</span>
                  </Link>
                </p>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {g.posts.map((p, i) => (
                    <li key={p.slug} data-reveal style={css(i)}>
                      <PostCard post={p} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ask-title" className="bg-brand py-14 text-white">
        <div className="container-box flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="ask-title" className="h2">
              Have a question about your teeth?
            </h2>
            <p className="mt-2 max-w-[560px] text-white/80">Ask us at your next visit, or request an appointment and Dr. Shir will go through your options with you.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/appointment/" data-track="book_appointment" className={btnOnDark}>
              Request an appointment
            </Link>
            <a href={settings.phoneHref} data-track="click_to_call" className="inline-flex items-center gap-2 font-semibold text-white/90 transition-colors hover:text-white">
              <PhoneIcon className="h-4 w-4" />
              {settings.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
