import type { Metadata } from "next";
import { getServicesHub } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { TreatmentView } from "@/components/pages/TreatmentView";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getServicesHub()).seo, "/services/");
}

export default async function ServicesPage() {
  const page = await getServicesHub();
  return (
    <TreatmentView
      sections={page.sections}
      path="/services/"
      name={page.title}
      description={page.seo.description}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
      ]}
    />
  );
}
