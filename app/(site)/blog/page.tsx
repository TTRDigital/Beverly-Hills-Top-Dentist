import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { AUTHORS, CATEGORIES, authorFor, DEFAULT_AUTHOR } from "@/lib/data/blog";

/* The blog: every post is by one of our dentists and supports one part of the site, so the list is grouped by category. */
export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  return {
    title: { absolute: "Dental Health Blog by Dr. Nushin Shir | Beverly Hills Dental Arts Studio" },
    description: "Plain answers about implants, cosmetic dentistry, clear aligners, gum care and prevention from Dr. Nushin Shir, DDS, MPH, in Beverly Hills.",
    alternates: { canonical: "/blog/" },
    ...(posts.length ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function BlogPage() {
  const posts = await getPosts();
  const author = AUTHORS[DEFAULT_AUTHOR];
  return (
    <section className="bg-paper py-20">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }])} />
      <div className="container-box">
        <p className="text-sm uppercase tracking-wide text-sage">Blog</p>
        <h1 className="mt-2 text-h1 font-semibold">Dental health, explained by Dr. Nushin Shir</h1>
        <p className="mt-4 flex items-center gap-3 text-sm text-sage md:max-w-[640px]">
          <Image src={author.image.src} alt={author.image.alt} width={40} height={40} className="h-10 w-10 rounded-full object-cover object-top" />
          <span>Written by <Link href={author.url} className="font-semibold text-black hover:underline">{author.name}, {author.credentials}</Link>: plain answers to the questions patients ask us in Beverly Hills.</span>
        </p>
        {posts.length === 0 ? <p className="mt-10">Our first articles are on the way. In the meantime, see our <Link href="/services/" className="underline">services</Link> or <Link href="/appointment/" className="underline">book a visit</Link>.</p> : null}
        {CATEGORIES.map((c) => {
          const list = posts.filter((p) => (p.category || "cosmetic") === c.key);
          if (!list.length) return null;
          return (
            <section key={c.key} aria-labelledby={`cat-${c.key}`} className="mt-12">
              <h2 id={`cat-${c.key}`} className="h2 text-black"><Link href={c.path} className="hover:underline">{c.name}</Link></h2>
              <ul className="mt-4 grid gap-6 md:grid-cols-2">
                {list.map((p) => {
                  const a = authorFor(p.author);
                  return (
                    <li key={p.slug} className="rounded-lg bg-white p-6">
                      {p.image ? <Link href={`/blog/${p.slug}/`}><Image src={p.image.src} alt={p.image.alt || p.title} width={p.image.width} height={p.image.height} sizes="(min-width: 768px) 400px, 100vw" className="h-auto w-full rounded" /></Link> : null}
                      <h3 className="mt-4 text-lg font-semibold"><Link href={`/blog/${p.slug}/`} className="hover:underline">{p.title}</Link></h3>
                      {p.excerpt ? <p className="mt-2 text-sm">{p.excerpt}</p> : null}
                      <p className="mt-3 text-sm text-sage">By {a.name}, {a.credentials} · {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
