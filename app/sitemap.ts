import type { MetadataRoute } from "next";
import { getCategories, getPosts, getServices } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Every indexable page (thank-you and the unlinked privacy draft are noindex). Old McLean / Virginia URLs are 301 redirects in .htaccess, so they are not listed. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, services, posts] = await Promise.all([getCategories(), getServices(), getPosts()]);
  const entry = (path: string, priority: number) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority });
  return [
    entry("/", 1),
    entry("/about-us/", 0.8),
    entry("/services/", 0.8),
    ...categories.map((c) => entry(`/services/${c.slug}/`, 0.8)),
    ...services.map((s) => entry(`/services/${s.category}/${s.slug}/`, 0.7)),
    entry("/before-after/", 0.7),
    entry("/appointment/", 0.8),
    ...posts.map((p) => entry(`/blog/${p.slug}/`, 0.5)),
  ];
}
