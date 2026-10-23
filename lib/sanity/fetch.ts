import "server-only";

import { apiVersion, dataset, projectId } from "@/sanity/env";
import { isPreview } from "@/lib/preview";

/**
 * Fetch published content from Sanity's API CDN.
 *
 * - Runs at build time only (static export): publishing in Sanity starts a
 *   rebuild + upload (.github/workflows/deploy-siteground.yml).
 * - Never throws: returns null on any failure so pages fall back to
 *   lib/content.ts defaults and the site keeps working.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  if (!projectId) return null;

  // A TTR OS draft preview (lib/preview.ts) reads the drafts with the site's Viewer token; everyone else gets published content.
  const token = process.env.SANITY_READ_TOKEN;
  const preview = !!token && (await isPreview());
  const search = new URLSearchParams({ query, perspective: preview ? "drafts" : "published" });
  for (const [key, value] of Object.entries(params)) {
    search.set(`$${key}`, JSON.stringify(value));
  }
  // SANITY_API_URL points the build at another API host (used to test the
  // queries against a local mock of the seeded dataset); normally unset.
  const host = process.env.SANITY_API_URL?.replace(/\/$/, "") || `https://${projectId}.${preview ? "api" : "apicdn"}.sanity.io`;
  const url = `${host}/v${apiVersion}/data/query/${dataset}?${search}`;

  try {
    const res = preview
      ? await fetch(url, { cache: "no-store", headers: { Authorization: `Bearer ${token}` } })
      : await fetch(url, { cache: "force-cache" });
    if (!res.ok) {
      console.warn(`[sanity] ${res.status} for query tags=${tags.join(",")}`);
      return null;
    }
    const json = (await res.json()) as { result?: T };
    return json.result ?? null;
  } catch (error) {
    console.warn("[sanity] fetch failed, using fallbacks", error);
    return null;
  }
}
