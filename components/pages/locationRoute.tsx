import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationPagesIn } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import type { LocationBase } from "@/lib/types";
import { TreatmentView } from "@/components/pages/TreatmentView";

type Props = { params: Promise<{ slug: string }> };

const CRUMBS: Record<LocationBase, { name: string; path: string }[]> = {
  "/locations/mclean/": [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "McLean", path: "/locations/mclean/" },
  ],
  "/locations/": [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
  ],
  "/": [{ name: "Home", path: "/" }],
};

/**
 * Route helpers for the location-style pages (same template as services):
 * /locations/mclean/<slug>/, /locations/<slug>/ and /<slug>/ at the root.
 */
export function locationRoute(base: LocationBase) {
  const load = async (params: Props["params"]) => {
    const { slug } = await params;
    return (await getLocationPagesIn(base)).find((p) => p.slug === slug) ?? null;
  };
  return {
    generateStaticParams: async () => (await getLocationPagesIn(base)).map((p) => ({ slug: p.slug })),
    generateMetadata: async ({ params }: Props): Promise<Metadata> => {
      const page = await load(params);
      return page ? pageMetadata(page.seo, `${base}${page.slug}/`, page.sections[0]?._type === "hero" ? page.sections[0].image : undefined) : {};
    },
    Page: async function LocationPageView({ params }: Props) {
      const page = await load(params);
      if (!page) notFound();
      const path = `${base}${page.slug}/`;
      return (
        <TreatmentView
          sections={page.sections}
          path={path}
          name={page.title}
          description={page.seo.description}
          crumbs={[...CRUMBS[base], { name: page.title, path }]}
        />
      );
    },
  };
}
