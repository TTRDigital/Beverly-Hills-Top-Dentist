import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";
import type { Author, Category } from "@/lib/data/blog";
import type { PostOutline } from "@/lib/blog-post";
import { formatDate } from "@/lib/blog-post";
import { stripMarks } from "@/lib/text";
import { Inline } from "@/components/ui/RichText";
import { Minus, PhoneIcon, Plus } from "@/components/ui/Icons";
import { btnOnDark, card, eyebrow, pill } from "@/components/blog/styles";

const css = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * The top of a post: category pill, title and byline card on the left, the featured photo in a frame on the right (above
 * the text on phones). The text fades and rises on load (CSS only, so it also runs without JavaScript and is instant when
 * the reader prefers reduced motion); the photo settles in without changing opacity, so it still counts as the first big
 * paint for Google.
 */
export function PostHero({ post, author, category, minutes }: { post: Post; author: Author; category: Category | null; minutes: number }) {
  return (
    <header className="relative overflow-hidden bg-header">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_85%_10%,rgb(214_234_221_/_0.95),transparent_70%)]" />
      <div className="container-box relative grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center lg:gap-16 lg:py-16">
        <div>
          <div className="post-rise flex flex-wrap items-center gap-3 text-sm" style={css(0)}>
            <Link href="/blog/" className="font-semibold text-ink/70 transition-colors hover:text-brand">
              Blog
            </Link>
            {category ? (
              <>
                <span aria-hidden="true" className="text-ink/30">
                  /
                </span>
                <Link href={`/blog/#cat-${category.key}`} className={`${pill} transition-colors hover:bg-brand hover:text-white`}>
                  {category.name}
                </Link>
              </>
            ) : null}
          </div>
          <h1 className="post-rise mt-5 text-[2rem] font-semibold leading-[1.1] text-ink sm:text-[2.5rem] lg:text-[2.875rem]" style={css(1)}>
            {post.title}
          </h1>
          <div className={`post-rise mt-8 inline-flex max-w-full items-center gap-4 bg-white/85 p-3 pr-5 ring-1 ring-black/5 ${card}`} style={css(2)}>
            <Image src={author.image.src} alt={author.image.alt} width={56} height={56} className="h-14 w-14 shrink-0 rounded-full object-cover object-top" />
            <div className="min-w-0 text-sm leading-snug">
              <div className="font-semibold text-ink">
                By{" "}
                <Link href={author.url} className="underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand">
                  {author.name}, {author.credentials}
                </Link>
              </div>
              <div className="mt-0.5 text-ink/70">{author.jobTitle}</div>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 text-ink/70">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{minutes} min read</span>
              </div>
            </div>
          </div>
        </div>
        {post.image ? (
          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-brand/25" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-dropdown shadow-[0_24px_60px_rgb(33_29_29_/_0.18)] lg:aspect-[5/4]">
              <Image src={post.image.src} alt={post.image.alt || post.title} fill loading="eager" fetchPriority="high" sizes="(min-width: 1024px) 520px, 100vw" className="post-settle object-cover" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

/** The direct answer, highlighted: the first paragraph a reader and an AI answer engine should see. */
export function InShort({ paragraph }: { paragraph?: string }) {
  if (!paragraph) return null;
  return (
    <div className={`relative border-l-4 border-brand p-6 md:p-7 ${card}`}>
      <div className={eyebrow}>In short</div>
      <p className="mt-2 text-[1.125rem] leading-[1.65] text-ink md:text-[1.25rem]">
        <Inline text={paragraph} />
      </p>
    </div>
  );
}

/** Jump links to every H2. A sticky column on desktop; a compact details/summary list under the In-short box on phones. */
export function Toc({ outline, collapsible = false, className = "" }: { outline: PostOutline; collapsible?: boolean; className?: string }) {
  const items = [...outline.sections.map((s) => ({ id: s.id, label: stripMarks(s.heading) })), ...(outline.faq ? [{ id: outline.faq.id, label: stripMarks(outline.faq.heading) }] : [])];
  if (items.length < 2) return null;
  const list = (
    <ol className="space-y-0.5">
      {items.map((it, i) => (
        <li key={it.id}>
          <a href={`#${it.id}`} className="flex gap-3 rounded px-2 py-1.5 text-[15px] leading-snug text-body transition-colors hover:bg-paper hover:text-brand">
            <span aria-hidden="true" className="w-5 shrink-0 text-xs font-semibold leading-[1.6] text-brand/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            {it.label}
          </a>
        </li>
      ))}
    </ol>
  );
  if (collapsible) {
    return (
      <details className={`${card} ${className}`}>
        <summary className={`flex cursor-pointer items-center justify-between gap-4 p-4 ${eyebrow}`}>
          In this article
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper">
            <Plus className="acc-plus h-3 w-3" />
            <Minus className="acc-minus h-3 w-3" />
          </span>
        </summary>
        <nav aria-label="In this article" className="px-3 pb-3">
          {list}
        </nav>
      </details>
    );
  }
  return (
    <nav aria-labelledby="toc-title" className={`p-5 ${card} ${className}`}>
      <div id="toc-title" className={eyebrow}>
        In this article
      </div>
      <div className="mt-3">{list}</div>
    </nav>
  );
}

/** A small card under the jump links on desktop: the primary button and the phone number. */
export function SideCta({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  return (
    <div className="rounded-lg bg-brand p-5 text-white">
      <p className="font-semibold leading-snug">Want to talk it through?</p>
      <p className="mt-1 text-sm text-white/80">The first visit is an exam and a conversation about your options.</p>
      <Link href="/appointment/" data-track="book_appointment" className={`${btnOnDark} mt-4 w-full`}>
        Request an appointment
      </Link>
      <a href={phoneHref} data-track="click_to_call" className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-white">
        <PhoneIcon className="h-4 w-4" />
        {phone}
      </a>
    </div>
  );
}

/* A thin bar at the top of the page that fills as the reader moves through the article. Decorative: it stays empty without JavaScript. */
const progressScript = `(function(){var b=document.getElementById("post-progress-bar"),a=document.querySelector("article[data-post]");if(!b||!a)return;var t=false;function u(){t=false;var r=a.getBoundingClientRect(),h=r.height-window.innerHeight,p=h>0?Math.min(1,Math.max(0,-r.top/h)):1;b.style.transform="scaleX("+p+")"}function q(){if(!t){t=true;requestAnimationFrame(u)}}addEventListener("scroll",q,{passive:true});addEventListener("resize",q);u()})();`;

export function ReadingProgress() {
  return (
    <>
      <div aria-hidden="true" className="post-progress">
        <div id="post-progress-bar" className="post-progress-bar" />
      </div>
      <script dangerouslySetInnerHTML={{ __html: progressScript }} />
    </>
  );
}
