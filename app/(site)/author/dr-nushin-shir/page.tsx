import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { authorSchema, breadcrumbSchema } from "@/lib/schema";
import { AUTHORS, authorFor, DEFAULT_AUTHOR } from "@/lib/data/blog";
import { JsonLd } from "@/components/ui/JsonLd";
import { PhoneIcon } from "@/components/ui/Icons";
import { PostCard } from "@/components/blog/PostCard";
import { btnOnDark, btnPrimary, card, eyebrow } from "@/components/blog/styles";

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;
const author = AUTHORS[DEFAULT_AUTHOR];
const PATH = author.url;

/*
 * Dr. Shir's author page. It replaces the WordPress /author/dr-nushin-shir/ page that every old blog post pointed to.
 * Every fact here comes from the About Us team data: no awards, ratings or credentials are added. The list holds all of
 * her posts (the ones whose byline resolves to her, the same rule the byline link uses).
 */
export const metadata: Metadata = pageMetadata(
  {
    title: "Dr. Nushin Shir, DDS, MPH | Beverly Hills Dentist and Blog Author",
    description: "Meet Dr. Nushin Shir, DDS, MPH, principal dentist at Beverly Hills Dental Arts Studio, and read every article she has written about implants, cosmetic dentistry, gum care and prevention.",
  },
  PATH,
  author.image,
);

export default async function AuthorPage() {
  const [allPosts, settings] = await Promise.all([getPosts(), getSiteSettings()]);
  const posts = allPosts.filter((p) => authorFor(p.author) === author);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: author.name, path: PATH }])} />
      <JsonLd data={authorSchema(settings.social.map((x) => x.href))} />
      <section className="relative overflow-hidden bg-header">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_85%_10%,rgb(214_234_221_/_0.95),transparent_70%)]" />
        <div className="container-box relative py-10 lg:py-16">
          <nav aria-label="Breadcrumb" className="post-rise text-sm text-ink/70" style={css(0)}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="font-semibold transition-colors hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink/30">
                /
              </li>
              <li>
                <Link href="/blog/" className="font-semibold transition-colors hover:text-brand">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink/30">
                /
              </li>
              <li aria-current="page">{author.name}</li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:items-center lg:gap-14">
            <div className="post-rise mx-auto w-full max-w-[240px] md:mx-0" style={css(1)}>
              <Image src={author.image.src} alt={author.image.alt} width={author.image.width} height={author.image.height} priority sizes="240px" className="h-auto w-full rounded-xl object-cover shadow-[0_24px_60px_rgb(33_29_29_/_0.18)]" />
            </div>
            <div>
              <p className={`post-rise ${eyebrow}`} style={css(2)}>
                Author
              </p>
              <h1 className="post-rise mt-3 text-[2rem] font-semibold leading-[1.1] text-ink sm:text-[2.5rem] lg:text-[2.875rem]" style={css(3)}>
                {author.name}, {author.credentials}
              </h1>
              <p className="post-rise mt-2 text-lg text-ink/70" style={css(4)}>
                Principal dentist, Beverly Hills Dental Arts Studio
              </p>
              <p className="post-rise mt-5 max-w-[620px] text-lg leading-[1.7] text-body" style={css(5)}>
                Dr. Shir earned her DDS from UCLA and holds two master&rsquo;s degrees in public health from UCLA, in epidemiology and healthcare policy. She has practiced dentistry for over 30 years and has a background teaching restorative dentistry.
              </p>
              <div className="post-rise mt-7 flex flex-col gap-4 sm:flex-row sm:items-center" style={css(6)}>
                <Link href="/appointment/" data-track="book_appointment" className={btnPrimary}>
                  Request a consultation
                </Link>
                <Link href="/about-us/" className="font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand-2">
                  Meet the whole team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="posts-title" className="bg-paper py-12 lg:py-16">
        <div className="container-box">
          <h2 id="posts-title" className="post-h2">
            Articles by {author.name}
          </h2>
          <p className="mt-2 max-w-[620px] text-[15px] text-ink/70">
            {posts.length} {posts.length === 1 ? "article" : "articles"} written for patients in Beverly Hills and the neighborhoods around it.
          </p>
          {posts.length ? (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <li key={p.slug} data-reveal style={css(i)}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          ) : (
            <p className={`mt-8 p-6 ${card}`}>
              Her first articles are on the way. In the meantime, see our{" "}
              <Link href="/blog/" className="underline">
                blog
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <section aria-labelledby="consult-title" className="bg-brand py-14 text-white">
        <div className="container-box flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="consult-title" className="h2">
              Want to talk with Dr. Shir?
            </h2>
            <p className="mt-2 max-w-[560px] text-white/80">Request a consultation and she will go through your options with you.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/appointment/" data-track="book_appointment" className={btnOnDark}>
              Request a consultation
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
