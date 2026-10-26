import Image from "next/image";
import Link from "next/link";
import type { Img, Post } from "@/lib/types";
import type { Author } from "@/lib/data/blog";
import { ArrowRight } from "@/components/ui/Icons";
import { PostCard } from "@/components/blog/PostCard";
import { btnOutline, btnPrimary, card, cardLift, eyebrow } from "@/components/blog/styles";

export type RelatedPage = { title: string; path: string; line?: string; image?: Img };

/** The page this post supports, with its photo and a button, plus small cards for the other services the post links to. */
export function RelatedCard({ page, more }: { page: RelatedPage; more: RelatedPage[] }) {
  return (
    <aside aria-labelledby="related-title" className="mt-14" data-reveal>
      <h2 id="related-title" className={eyebrow}>
        Related page
      </h2>
      <div className={`mt-3 overflow-hidden ${card} ${cardLift} sm:grid sm:grid-cols-[240px_minmax(0,1fr)]`}>
        {page.image ? (
          <Link href={page.path} tabIndex={-1} aria-hidden="true" className="relative block aspect-[16/10] bg-dropdown sm:aspect-auto sm:h-full sm:min-h-[220px]">
            <Image src={page.image.src} alt={page.image.alt || page.title} fill sizes="(min-width: 640px) 240px, 100vw" className="object-cover" />
          </Link>
        ) : null}
        <div className="p-6">
          <h3 className="text-xl font-semibold leading-snug text-ink">
            <Link href={page.path} className="transition-colors hover:text-brand">
              {page.title}
            </Link>
          </h3>
          {page.line ? <p className="mt-2 text-[15px] leading-[1.6] text-body">{page.line}</p> : null}
          <Link href={page.path} className={`${btnPrimary} mt-5`}>
            Learn more<span className="sr-only"> about {page.title}</span>
          </Link>
        </div>
      </div>
      {more.length ? (
        <>
          <h3 className="mt-6 text-sm font-semibold text-ink/70">Related services</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {more.map((m) => (
              <li key={m.path}>
                <Link href={m.path} className={`flex items-center justify-between gap-3 px-4 py-3 text-[15px] font-semibold text-ink transition-colors hover:text-brand ${card} ${cardLift}`}>
                  {m.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </aside>
  );
}

/** Who wrote the post: a larger photo, name and credentials, the bio from the site and a button to the author page. */
export function AuthorCard({ author }: { author: Author }) {
  return (
    <footer aria-labelledby="author-title" className={`mt-12 p-6 md:p-8 ${card}`} data-reveal>
      <h2 id="author-title" className={eyebrow}>
        About the author
      </h2>
      <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image src={author.image.src} alt={author.image.alt} width={120} height={120} className="h-[120px] w-[120px] shrink-0 rounded-full object-cover object-top ring-4 ring-paper" />
        <div>
          <h3 className="text-xl font-semibold leading-snug text-ink">
            {author.name}, {author.credentials}
          </h3>
          <div className="mt-0.5 text-sm text-ink/70">{author.jobTitle}</div>
          <p className="mt-3 leading-[1.7] text-body">{author.blurb}</p>
          <Link href={author.url} className={`${btnOutline} mt-5`}>
            More about {author.name}
          </Link>
        </div>
      </div>
    </footer>
  );
}

/** Up to three other posts as cards. Hidden when there are none. */
export function MoreFromBlog({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  return (
    <section aria-labelledby="more-posts" className="bg-white py-16">
      <div className="container-box">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="more-posts" className="post-h2">
            More from the blog
          </h2>
          <Link href="/blog/" className="text-cta font-semibold text-brand">
            All articles
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <li key={p.slug} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
