import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategories } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { TreatmentView } from "@/components/pages/TreatmentView";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getCategories()).map((c) => ({ category: c.slug }));
}

async function load(params: Props["params"]) {
  const { category } = await params;
  return (await getCategories()).find((c) => c.slug === category) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await load(params);
  return page ? pageMetadata(page.seo, `/services/${page.slug}/`, page.sections[0]?._type === "hero" ? page.sections[0].image : undefined) : {};
}

export default async function CategoryPage({ params }: Props) {
  const page = await load(params);
  if (!page) notFound();
  const path = `/services/${page.slug}/`;
  return (
    <TreatmentView
      sections={page.sections}
      path={path}
      name={page.title}
      description={page.seo.description}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
        { name: page.title, path },
      ]}
    />
  );
}
