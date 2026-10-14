import type { Metadata } from "next";
import { getPrivacyPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { RichText } from "@/components/ui/RichText";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPrivacyPage()).seo, "/privacy-policy/");
}

/** Linked from the appointment form's consent box. The text comes from /cms (Pages > Privacy policy). */
export default async function PrivacyPage() {
  const page = await getPrivacyPage();
  return (
    <section className="bg-paper py-20">
      <div className="container-box max-w-[820px]">
        <h1 className="text-h1 font-semibold">{page.title}</h1>
        <RichText paras={page.body} className="mt-8" />
      </div>
    </section>
  );
}
