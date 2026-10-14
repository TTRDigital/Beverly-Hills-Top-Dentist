import type { MetadataRoute } from "next";
import { getCategories, getLocationPages, getPosts, getServices } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Every indexable page, at the same paths as the old WordPress sitemap (thank-you and privacy are noindex). */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, services, locations, posts] = await Promise.all([getCategories(), getServices(), getLocationPages(), getPosts()]);
  const entry = (path: string, priority: number) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority });
  return [
    entry("/", 1),
    entry("/about-us/", 0.8),
    entry("/services/", 0.8),
    ...categories.map((c) => entry(`/services/${c.slug}/`, 0.8)),
    ...services.map((s) => entry(`/services/${s.category}/${s.slug}/`, 0.7)),
    entry("/before-after/", 0.7),
    entry("/appointment/", 0.8),
    entry("/locations/", 0.5),
    entry("/locations/mclean/", 0.5),
    ...locations.map((l) => entry(`${l.basePath}${l.slug}/`, 0.6)),
    ...posts.map((p) => entry(`/blog/${p.slug}/`, 0.5)),
  ];
}
