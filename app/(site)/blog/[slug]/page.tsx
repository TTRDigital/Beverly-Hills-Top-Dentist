import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, postSchema } from "@/lib/schema";
import { authorFor, categoryFor } from "@/lib/data/blog";
import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { RichText } from "@/components/ui/RichText";

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

export default async function PostPage({ params }: Props) {
  const post = await load(params);
  if (!post) notFound();
  const author = authorFor(post.author), category = categoryFor(post.category);
  const supports = post.service || category?.path || null;
  const date = new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  return (
    <article className="bg-paper py-20">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: post.title, path: `/blog/${post.slug}/` }])} />
      <JsonLd data={postSchema(post)} />
      <div className="container-box max-w-[820px]">
        {category ? <p className="text-sm uppercase tracking-wide text-sage"><Link href="/blog/" className="hover:underline">Blog</Link> · {category.name}</p> : null}
        <h1 className="mt-2 text-h1 font-semibold">{post.title}</h1>
        <p className="mt-4 flex items-center gap-3 text-sm text-sage">
          <Image src={author.image.src} alt={author.image.alt} width={40} height={40} className="h-10 w-10 rounded-full object-cover object-top" />
          <span>By <Link href={author.url} className="font-semibold text-black hover:underline">{author.name}, {author.credentials}</Link>, {author.jobTitle} · {date}</span>
        </p>
        {post.image ? <Image src={post.image.src} alt={post.image.alt || post.title} width={post.image.width} height={post.image.height} sizes="820px" className="mt-8 h-auto w-full" /> : null}
        <RichText paras={post.body} className="mt-8" />
        {supports && category ? (
          <aside className="mt-10 rounded-lg border border-black/10 bg-white p-6">
            <p className="text-sm uppercase tracking-wide text-sage">Related</p>
            <p className="mt-2 text-lg font-semibold"><Link href={supports} className="hover:underline">{category.name} at Beverly Hills Dental Arts Studio</Link></p>
            <p className="mt-2 text-sm">{category.blurb}</p>
          </aside>
        ) : null}
        <aside className="mt-8 flex items-start gap-4 rounded-lg bg-white p-6">
          <Image src={author.image.src} alt={author.image.alt} width={64} height={64} className="h-16 w-16 rounded-full object-cover object-top" />
          <div>
            <p className="font-semibold"><Link href={author.url} className="hover:underline">{author.name}, {author.credentials}</Link></p>
            <p className="mt-1 text-sm">{author.blurb}</p>
          </div>
        </aside>
      </div>
    </article>
  );
}
