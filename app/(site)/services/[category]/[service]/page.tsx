import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategories, getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { TreatmentView } from "@/components/pages/TreatmentView";

type Props = { params: Promise<{ category: string; service: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getServices()).map((s) => ({ category: s.category, service: s.slug }));
}

async function load(params: Props["params"]) {
  const { category, service } = await params;
  return (await getServices()).find((s) => s.category === category && s.slug === service) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await load(params);
  return page ? pageMetadata(page.seo, `/services/${page.category}/${page.slug}/`, page.sections[0]?._type === "hero" ? page.sections[0].image : undefined) : {};
}

export default async function ServicePage({ params }: Props) {
  const page = await load(params);
  if (!page) notFound();
  const category = (await getCategories()).find((c) => c.slug === page.category);
  const path = `/services/${page.category}/${page.slug}/`;
  return (
    <TreatmentView
      sections={page.sections}
      path={path}
      name={page.title}
      description={page.seo.description}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
        ...(category ? [{ name: category.title, path: `/services/${category.slug}/` }] : []),
        { name: page.title, path },
      ]}
    />
  );
}
