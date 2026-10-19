import type { Metadata } from "next";
import Link from "next/link";
import { getAreaPages, getAreasHub, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { RichText } from "@/components/ui/RichText";
import { MapMarker } from "@/components/ui/Icons";
import { AreaFaq, AreaHero, FinalCta, Intro, OfficeMap, StickyMobileBar, TrustStrip, WhyRow } from "@/components/areas/AreaBlocks";

export async function generateMetadata(): Promise<Metadata> {
  const hub = await getAreasHub();
  return pageMetadata({ ...hub.seo, noIndex: hub.seo.noIndex || !hub.approved }, "/areas-we-serve/", hub.heroImage);
}

/** Areas We Serve hub: map, six area cards, why patients make the trip, first visit, FAQ, zips. */
export default async function AreasHubPage() {
  const [hub, areas, s] = await Promise.all([getAreasHub(), getAreaPages(), getSiteSettings()]);
  const track = "areas-we-serve";
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Areas We Serve", path: "/areas-we-serve/" }])} />
      <JsonLd data={faqPageSchema(hub.faqs)} />
      <AreaHero s={s} page={track} heading={hub.heading} subhead={hub.subhead} image={hub.heroImage} />
      <TrustStrip items={s.trustStrip} />
      <Intro paras={hub.intro} />

      <section className="bg-paper pb-14 md:pb-20">
        <figure className="container-x">
          <OfficeMap title="Map of our office at 416 N. Bedford Dr., Suite 105, Beverly Hills" embedUrl={hub.mapEmbedUrl} className="aspect-[4/3] md:aspect-[21/9]" />
          <figcaption className="mt-3 flex items-start gap-2 text-[15px] text-body">
            <MapMarker className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            {hub.mapCaption}
          </figcaption>
        </figure>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-x">
          <h2 className="h2 text-black md:text-center">{hub.cardsHeading}</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <li key={a.slug} className="flex flex-col rounded-[12px] border border-line bg-paper p-6">
                <MapMarker className="h-8 w-8 text-brand" />
                <h3 className="mt-4 text-h3 font-semibold text-black">{a.name}</h3>
                <p className="mt-1 text-[15px] font-semibold text-brand-2">{a.zips.join(", ")}</p>
                <p className="mt-3 flex-1 leading-[1.65]">{a.cardLine}</p>
                <Link
                  href={`/areas-we-serve/${a.slug}/`}
                  className="mt-5 inline-flex min-h-[48px] items-center justify-center self-start rounded-[6px] border-2 border-brand px-5 py-2.5 font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  See {a.name} details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyRow heading={hub.whyHeading} items={hub.whyItems} text={hub.whyText} />

      <section className="bg-white py-14 md:py-20">
        <div className="container-x max-w-[860px]">
          <h2 className="h2 text-black md:text-center">{hub.planHeading}</h2>
          <RichText paras={hub.planText} className="mt-5 text-[17px] leading-[1.7]" />
        </div>
      </section>

      <AreaFaq faqs={hub.faqs} />

      <section className="bg-white py-14 md:py-16">
        <div className="container-x max-w-[860px] md:text-center">
          <h2 className="h2 text-black">{hub.zipsHeading}</h2>
          <p className="mt-4 text-[17px] tracking-wide">{hub.zips}</p>
        </div>
      </section>

      <FinalCta s={s} page={track} heading={hub.ctaHeading} text={hub.ctaText} />
      <StickyMobileBar s={s} page={track} />
    </>
  );
}
