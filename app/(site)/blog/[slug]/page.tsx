import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
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
  return (
    <article className="bg-paper py-20">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: post.title, path: `/blog/${post.slug}/` }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, datePublished: post.date, ...(post.image ? { image: post.image.src } : {}) }} />
      <div className="container-box max-w-[820px]">
        <p className="text-sm text-sage">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <h1 className="mt-2 text-h1 font-semibold">{post.title}</h1>
        {post.image ? <Image src={post.image.src} alt={post.image.alt || post.title} width={post.image.width} height={post.image.height} sizes="820px" className="mt-8 h-auto w-full" /> : null}
        <RichText paras={post.body} className="mt-8" />
      </div>
    </article>
  );
}
