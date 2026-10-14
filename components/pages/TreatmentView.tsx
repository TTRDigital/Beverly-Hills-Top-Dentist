import type { Section } from "@/lib/types";
import { Sections } from "@/components/sections/TreatmentSections";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

/** A treatment-template page: its sections plus breadcrumb, FAQ and procedure JSON-LD. */
export function TreatmentView({ sections, path, crumbs, name, description }: { sections: Section[]; path: string; crumbs: { name: string; path: string }[]; name: string; description: string }) {
  const faqs = sections.flatMap((s) => (s._type === "faq" ? s.items : []));
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {faqs.length ? <JsonLd data={faqPageSchema(faqs)} /> : null}
      <JsonLd data={serviceSchema(name, description, path)} />
      <Sections sections={sections} />
    </>
  );
}
