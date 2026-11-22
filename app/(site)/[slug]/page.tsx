import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAreasHub, getSeoPages, getSiteSettings } from "@/lib/content";
import type { SeoPage } from "@/lib/types";
import type { BodyItem } from "@/lib/seo-page";
import { splitFaq } from "@/lib/seo-page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, seoPageSchema } from "@/lib/schema";
import { images } from "@/lib/data/images";
import { AUTHORS, DEFAULT_AUTHOR } from "@/lib/data/blog";
import { JsonLd } from "@/components/ui/JsonLd";
import { RichText } from "@/components/ui/RichText";
import { AreaFaq, AreaHero, Byline, CtaBand, FinalCta, StickyMobileBar, TrustStrip } from "@/components/areas/AreaBlocks";

type Props = { params: Promise<{ slug: string }> };

/*
 * City and service pages TTR OS writes into Sanity (TTR-1873, type seoPage), at /<slug>/, in the Areas We Serve design: hero with
 * the H1 and both buttons, Dr. Shir's byline, the trust strip, the text, the call band, the questions, the closing form.
 * Structured data: breadcrumb, WebPage (author, practice, dates) and FAQPage when the text has a questions section.
 *
 * Drafts: TTR OS saves a page as a draft and opens it with a signed preview link (lib/preview.ts, Vercel only). dynamicParams stays
 * at its default (true), like the blog, so a page that was not built yet opens in draft mode, and a page published later shows
 * after /api/revalidate. Anyone without draft mode gets published pages only; an address with no page gets the 404 page. A draft is
 * never indexed: only someone with the preview cookie can see one, and vercel.json sends X-Robots-Tag: noindex to them.
 * The static export only writes the slugs below.
 */

/** Top-level addresses that belong to other parts of the site; a page from TTR OS can never take one. */
const RESERVED = new Set(["about-us", "appointment", "areas-we-serve", "author", "before-after", "blog", "privacy-policy", "services", "sms-terms", "thank-you", "lp", "cms", "api", "_none"]);

export async function generateStaticParams() {
  const pages = (await getSeoPages()).filter((p) => !RESERVED.has(p.slug));
  // A static export needs at least one path. The placeholder renders the 404 page, is not linked anywhere,
  // and public/.htaccess answers it with a real 404.
  return pages.length ? pages.map((p) => ({ slug: p.slug })) : [{ slug: "_none" }];
}

async function load(params: Props["params"]): Promise<SeoPage | null> {
  const { slug } = await params;
  if (RESERVED.has(slug)) return null;
  const page = (await getSeoPages()).find((p) => p.slug === slug);
  return page && page.title ? page : null;
}

const HERO = images.hallwayWide2;

/** The H1 without a trailing "| <practice name>" (TTR OS titles end with it; the SEO title keeps it). */
function heading(title: string, names: string[]): string {
  const esc = (x: string) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const alts = names.filter(Boolean).map(esc).join("|");
  const short = alts ? title.replace(new RegExp(`\\s*[|]\\s*(?:${alts})\\s*$`, "i"), "").trim() : title;
  return short || title;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await load(params);
  return page ? pageMetadata(page.seo, `/${page.slug}/`, page.image ?? HERO) : { robots: { index: false } };
}

/** The text with its photos, in order. */
function Body({ items }: { items: BodyItem[] }) {
  if (!items.length) return null;
  const runs: ({ kind: "text"; paras: string[] } | Extract<BodyItem, { kind: "image" }>)[] = [];
  for (const i of items) {
    const last = runs[runs.length - 1];
    if (i.kind === "image") runs.push(i);
    else if (last?.kind === "text") last.paras.push(i.text);
    else runs.push({ kind: "text", paras: [i.text] });
  }
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-x max-w-[860px] text-[17px] leading-[1.7]">
        {runs.map((r, n) =>
          r.kind === "text" ? (
            <RichText key={n} paras={r.paras} />
          ) : (
            <figure key={n} className="my-8">
              <Image src={r.image.src} alt={r.image.alt} width={r.image.width} height={r.image.height} sizes="(min-width: 900px) 860px, 100vw" className="h-auto w-full rounded-[12px]" />
            </figure>
          ),
        )}
      </div>
    </section>
  );
}

export default async function SeoPageRoute({ params }: Props) {
  const [page, hub, s] = await Promise.all([load(params), getAreasHub(), getSiteSettings()]);
  if (!page) notFound();
  const path = `/${page.slug}/`;
  const track = `page-${page.slug}`;
  const { before, faq, after } = splitFaq(page.body);
  const h1 = heading(page.title, [s.name, s.legalName]);
  const author = AUTHORS[DEFAULT_AUTHOR];
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: h1, path }])} />
      <JsonLd data={seoPageSchema(page)} />
      {faq ? <JsonLd data={faqPageSchema(faq.items)} /> : null}
      <AreaHero s={s} page={track} heading={h1} subhead={page.subhead} image={page.image ?? HERO} />
      <Byline names={[author.name]} url={author.url} />
      <TrustStrip items={s.trustStrip} />
      <Body items={before} />
      <CtaBand s={s} page={track} />
      {faq ? <AreaFaq faqs={faq.items} heading={faq.heading} /> : null}
      {after.length ? <Body items={after} /> : null}
      <FinalCta s={s} page={track} heading={hub.ctaHeading} />
      <StickyMobileBar s={s} page={track} />
    </>
  );
}
