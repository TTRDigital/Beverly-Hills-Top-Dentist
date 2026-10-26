import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";
import { authorFor, categoryFor } from "@/lib/data/blog";
import { formatDate, minutesFor } from "@/lib/blog-post";
import { card, cardLift, pill } from "@/components/blog/styles";

/** A post as a card: photo (16:9), category pill, title, excerpt, author, date and reading time. Used on the index and under each post. */
export function PostCard({ post, excerpt = true }: { post: Post; excerpt?: boolean }) {
  const a = authorFor(post.author);
  const c = categoryFor(post.category);
  const href = `/blog/${post.slug}/`;
  return (
    <article className={`group flex h-full flex-col overflow-hidden ${card} ${cardLift}`}>
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-video overflow-hidden bg-dropdown">
        {post.image ? (
          <Image src={post.image.src} alt={post.image.alt || post.title} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {c ? <span className={`${pill} self-start`}>{c.name}</span> : null}
        <h3 className="mt-3 text-[20px] font-semibold leading-snug text-ink">
          <Link href={href} className="transition-colors hover:text-brand">
            {post.title}
          </Link>
        </h3>
        {excerpt && post.excerpt ? <p className="mt-2 line-clamp-3 text-[15px] leading-[1.6] text-body">{post.excerpt}</p> : null}
        <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-5 text-sm text-ink/70">
          <Image src={a.image.src} alt={a.image.alt || a.name} width={32} height={32} className="h-8 w-8 rounded-full object-cover object-top" />
          <span className="font-semibold text-ink">{a.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{minutesFor(post)} min read</span>
        </div>
      </div>
    </article>
  );
}
