import type { Metadata } from "next";
import { smsTerms } from "@/lib/data/sms-terms";
import { pageMetadata } from "@/lib/seo";
import { Inline } from "@/components/ui/RichText";

export function generateMetadata(): Metadata {
  return pageMetadata(smsTerms.seo, "/sms-terms/");
}

/** Public terms for the practice's text messages (linked from the request forms' consent box). Paragraphs starting "## " are headings. */
export default function SmsTermsPage() {
  return (
    <section className="bg-paper py-20">
      <div className="container-box max-w-[820px]">
        <h1 className="text-h1 font-semibold">{smsTerms.title}</h1>
        <div className="prose-p mt-8">
          {smsTerms.body.map((p, i) =>
            p.startsWith("## ") ? (
              <h2 key={i} className="!mb-3 mt-10 text-h3 font-semibold text-black">{p.slice(3)}</h2>
            ) : (
              <p key={i}><Inline text={p} /></p>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
