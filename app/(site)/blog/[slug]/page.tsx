import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategories, getPosts, getServices, getSiteSettings } from "@/lib/content";
import type { Service, ServiceCategory } from "@/lib/types";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, postSchema } from "@/lib/schema";
import { authorFor, categoryFor, CATEGORIES } from "@/lib/data/blog";
import { linkedPaths, outlinePost, placeExtras } from "@/lib/blog-post";
import { JsonLd } from "@/components/ui/JsonLd";
import { InShort, PostHero, ReadingProgress, SideCta, Toc } from "@/components/blog/PostHeader";
import { ExtrasView, PostBody } from "@/components/blog/PostBody";
import { AuthorCard, MoreFromBlog, RelatedCard, type RelatedPage } from "@/components/blog/PostFooter";

type Props = { params: Promise<{ slug: string }> };

/* The old site has no blog posts; posts published in /cms (Posts) are built here at /blog/<slug>/. */
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  // A static export needs at least one path. The placeholder renders the 404 page, is not linked anywhere,
  // and public/.htaccess answers it with a real 404.
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_none" }];
}

async function load(params: Props["params"]) {
  const { slug } = await params;
  return (await getPosts()).find((p) => p.slug === slug) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await load(params);
  return post ? pageMetadata(post.seo, `/blog/${post.slug}/`, post.image) : { robots: { index: false } };
}

/** The service or category page at a site path, with its title, banner photo and one line (for the related cards). */
function relatedPage(path: string, categories: ServiceCategory[], services: Service[]): RelatedPage | null {
  const m = path.match(/^\/services\/([^/]+)\/(?:([^/]+)\/)?$/);
  if (!m) {
    const c = CATEGORIES.find((x) => x.path === path);
    return c ? { title: c.name, path, line: c.blurb } : null;
  }
  const [, cat, svc] = m;
  const page = svc ? services.find((s) => s.category === cat && s.slug === svc) : categories.find((c) => c.slug === cat);
  if (!page) return null;
  const blogCategory = svc ? null : CATEGORIES.find((x) => x.path === path);
  const hero = page.sections[0]?._type === "hero" ? page.sections[0] : null;
  return { title: blogCategory?.name ?? page.title, path, line: blogCategory?.blurb ?? page.seo.description, image: hero?.image };
}

/*
 * A post, top to bottom: hero (category, title, byline, photo), the direct answer in the In-short box, jump links, quick
 * facts, the sections with photos and visual blocks, a call-to-action band, the FAQ as cards, the closing invitation, the
 * related page and services, the author, then more posts. Structured data: BlogPosting (with word count and reading time)
 * and FAQPage. Everything reads without JavaScript; the motion is a gentle extra.
 */
export default async function PostPage({ params }: Props) {
  const [post, posts, settings, categories, services] = await Promise.all([load(params), getPosts(), getSiteSettings(), getCategories(), getServices()]);
  if (!post) notFound();
  const author = authorFor(post.author);
  const category = categoryFor(post.category);
  const outline = outlinePost(post.body);
  const extras = placeExtras(post, outline);
  const supports = post.service || category?.path || null;
  const related = supports ? relatedPage(supports, categories, services) : null;
  const more = linkedPaths(post.body)
    .filter((p) => p !== supports && p.startsWith("/services/"))
    .map((p) => relatedPage(p, categories, services))
    .filter((p): p is RelatedPage => !!p)
    .slice(0, 3);
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const cta = {
    text: post.cta || `Have a question about ${category ? category.name.toLowerCase() : "your teeth"}? Dr. Shir will go through your options with you at the first visit.`,
    phone: settings.phone,
    phoneHref: settings.phoneHref,
  };
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: post.title, path: `/blog/${post.slug}/` }])} />
      <JsonLd data={postSchema(post)} />
      {outline.faq?.items.length ? <JsonLd data={faqPageSchema(outline.faq.items)} /> : null}
      <article data-post className="bg-paper">
        <PostHero post={post} author={author} category={category} minutes={outline.minutes} />
        <div className="container-box grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
          <div className="min-w-0 lg:max-w-[720px]">
            <InShort paragraph={outline.intro[0]} />
            <Toc outline={outline} collapsible className="mt-5 lg:hidden" />
            <ExtrasView extras={extras.top} />
            <PostBody outline={outline} extras={extras} cta={cta} />
            {related ? <RelatedCard page={related} more={more} /> : null}
            <AuthorCard author={author} />
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <Toc outline={outline} />
              <SideCta phone={settings.phone} phoneHref={settings.phoneHref} />
            </div>
          </aside>
        </div>
        <ReadingProgress />
      </article>
      <MoreFromBlog posts={others} />
    </>
  );
}
