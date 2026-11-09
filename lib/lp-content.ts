import { cache } from "react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { merge } from "@/lib/merge";
import { lpBySlug, type LpPage } from "@/lib/lp-pages";

/*
 * Landing page content: the built-in page in lib/lp-pages.ts, with the client's own Sanity document ("lpPage-<slug>") laid over it
 * when there is one. A page with no document, or a Sanity that cannot be reached, shows the built-in content unchanged.
 */
const FIELDS = `{
  title, headline, support, primary{ label, target }, formTitle, formButton, formNote,
  hero{ src, alt, pos }, notice, availability, offers,
  focus{ heading, intro, items, paragraphs, image{ src, alt } },
  steps{ heading, intro, items[]{ title, text } },
  tech, showWork, faqs[]{ q, a }, closing{ heading, text }
}`;

export const getLpPage = cache(async (slug: string): Promise<LpPage | undefined> => {
  const base = lpBySlug(slug);
  if (!base) return undefined;
  const cms = await sanityFetch<Partial<LpPage>>(`*[_type == "lpPage" && _id == $id][0]${FIELDS}`, { id: `lpPage-${slug}` }, ["lpPage"]);
  const page = merge(base, cms);
  // An empty list is a real choice here (no offer card), and merge keeps the built-in list when the CMS one is empty.
  if (cms && Array.isArray(cms.offers) && cms.offers.length === 0) page.offers = [];
  return page;
});
