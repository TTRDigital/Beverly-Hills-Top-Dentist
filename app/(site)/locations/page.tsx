import type { Metadata } from "next";
import { getLocationsHub } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { Sections } from "@/components/sections/TreatmentSections";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getLocationsHub()).seo, "/locations/");
}

/** Empty on the old site (header and footer only); sections added in /cms appear here. */
export default async function HubPage() {
  const page = await getLocationsHub();
  return (
    <>
      {page.sections[0]?._type === "hero" ? null : <h1 className="sr-only">{page.title}</h1>}
      <Sections sections={page.sections} />
    </>
  );
}
