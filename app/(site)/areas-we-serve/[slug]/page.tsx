import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAreaPages, getAreasHub, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { AreaFaq, AreaHero, CtaBand, FinalCta, GettingHere, Intro, Reviews, StickyMobileBar, Treatments, TrustStrip, WhyRow } from "@/components/areas/AreaBlocks";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getAreaPages()).map((p) => ({ slug: p.slug }));
}

async function find(slug: string) {
  return (await getAreaPages()).find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = await find((await params).slug);
  if (!page) return {};
  // Until Dr. Shir approves it, the page works for review but stays out of search.
  return pageMetadata({ ...page.seo, noIndex: page.seo.noIndex || !page.approved }, `/areas-we-serve/${page.slug}/`, page.heroImage);
}

/** One neighborhood page: the shared Areas We Serve template. */
export default async function AreaRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [page, hub, s] = await Promise.all([find(slug), getAreasHub(), getSiteSettings()]);
  if (!page) notFound();
  const track = `area-${page.slug}`;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve/" },
          { name: page.name, path: `/areas-we-serve/${page.slug}/` },
        ])}
      />
      <JsonLd data={faqPageSchema(page.faqs)} />
      <AreaHero s={s} page={track} heading={page.heading} subhead={page.subhead} image={page.heroImage} />
      <TrustStrip items={s.trustStrip} />
      <Intro paras={page.intro} />
      <GettingHere page={page} mapCaption={hub.mapCaption} />
      <Treatments page={page} />
      <CtaBand s={s} page={track} />
      <WhyRow heading={page.whyHeading} items={page.whyItems} text={page.whyText} />
      <Reviews reviews={page.reviews} area={page.name} />
      <AreaFaq faqs={page.faqs} />
      <FinalCta s={s} page={track} heading={hub.ctaHeading} />
      <StickyMobileBar s={s} page={track} />
    </>
  );
}
