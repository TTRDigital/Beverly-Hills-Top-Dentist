import type { Metadata } from "next";
import { getPrivacyPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { Inline } from "@/components/ui/RichText";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getPrivacyPage()).seo, "/privacy-policy/");
}

/** Linked from the appointment form's consent box and the footer. Text from /cms (Pages > Privacy policy); paragraphs starting "## " are headings. */
export default async function PrivacyPage() {
  const page = await getPrivacyPage();
  return (
    <section className="bg-paper py-20">
      <div className="container-box max-w-[820px]">
        <h1 className="text-h1 font-semibold">{page.title}</h1>
        <div className="prose-p mt-8">
          {page.body.map((p, i) =>
            p.startsWith("## ") ? (
              <h2 key={i} className="!mb-3 mt-10 text-h3 font-semibold text-black">
                {p.slice(3)}
              </h2>
            ) : (
              <p key={i}>
                <Inline text={p} />
              </p>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
