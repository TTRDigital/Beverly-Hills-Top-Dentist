/**
 * Loads the built-in content (lib/data) and its photos into Sanity, so the
 * CMS starts full instead of empty.
 *
 *   npm run seed            # create documents that don't exist yet
 *   npm run seed -- --force # overwrite everything with the built-in content
 *   npm run seed -- --dry-run  # build every document without uploading or writing
 *   npm run seed -- --force --only=areasPage,areaPage-  # only documents whose ID starts with these
 *   npm run seed -- --seo-only --dry-run  # list the SEO titles and descriptions in Sanity that differ from the built-in ones
 *   npm run seed -- --seo-only  # set only the SEO title and description of documents already in Sanity (text and photos untouched)
 *
 * Writes to project q5yxih7t / production unless NEXT_PUBLIC_SANITY_PROJECT_ID /
 * NEXT_PUBLIC_SANITY_DATASET say otherwise (environment or .env.local). Needs
 * SANITY_WRITE_TOKEN (Editor token from sanity.io/manage > API > Tokens) in
 * .env.local. Without --force, anything an editor already changed is kept.
 */
import { createReadStream, existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { createClient } from "@sanity/client";
import type { Img, Link, MenuItem, Section, TreatmentPage } from "../lib/types";
import { fallbackCases, fallbackFaqs, fallbackMenu, fallbackPosts, fallbackSettings, fallbackTeam, fallbackTestimonials } from "../lib/data/site.ts";
import {
  fallbackAbout,
  fallbackAppointment,
  fallbackBeforeAfter,
  fallbackHome,
  fallbackPrivacy,
  fallbackThankYou,
} from "../lib/data/pages.ts";
import { fallbackCategories, fallbackServices, fallbackServicesHub } from "../lib/data/services.ts";
import { fallbackAreaPages, fallbackAreasHub } from "../lib/data/areas.ts";

const root = new URL("..", import.meta.url).pathname;

// Minimal .env.local reader so the script works without extra packages.
if (existsSync(join(root, ".env.local"))) {
  for (const line of readFileSync(join(root, ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

// Imported after .env.local is loaded so its values apply.
const { dataset, projectId } = await import("../sanity/env.ts");
const token = process.env.SANITY_WRITE_TOKEN;
const force = process.argv.includes("--force");
const dryRun = process.argv.includes("--dry-run");
// --seo-only sets just the seo field (title, description, noIndex) of documents that already exist in Sanity. It uploads
// nothing and changes no other field, so approved titles and descriptions can go live without touching text an editor changed.
const seoOnly = process.argv.includes("--seo-only");
// --only=areasPage,areaPage- limits the run to documents whose ID starts with one of these.
const only = (process.argv.find((a) => a.startsWith("--only="))?.slice(7) ?? "").split(",").map((x) => x.trim()).filter(Boolean);

if (!dryRun && (!projectId || !token)) {
  console.error("Set SANITY_WRITE_TOKEN in .env.local (Editor token from sanity.io/manage > API > Tokens).");
  process.exit(1);
}

const client = createClient({ projectId: projectId || "dry-run", dataset, token, apiVersion: "2025-02-19", useCdn: false });

/* ---------- helpers ---------- */

let keyN = 0;
const key = () => `k${(keyN++).toString(36)}`;
const uploaded = new Map<string, string>();

async function asset(src: string, kind: "image" | "file" = "image") {
  if (uploaded.has(src)) return uploaded.get(src)!;
  const file = join(root, "public", src);
  if (!existsSync(file)) throw new Error(`Missing file: ${file}`);
  if (dryRun || seoOnly) {
    uploaded.set(src, `${kind}-dry-${uploaded.size}`);
    return uploaded.get(src)!;
  }
  const doc = await client.assets.upload(kind, createReadStream(file), { filename: basename(file) });
  uploaded.set(src, doc._id);
  process.stdout.write(".");
  return doc._id;
}

async function altImage(img?: Img) {
  if (!img) return undefined;
  return { _type: "altImage", alt: img.alt, asset: { _type: "reference", _ref: await asset(img.src) } };
}
async function images(list: Img[] = []) {
  return Promise.all(list.map(async (img) => ({ ...(await altImage(img)), _key: key() })));
}
async function fileAsset(src?: string) {
  if (!src) return undefined;
  return { _type: "file", asset: { _type: "reference", _ref: await asset(src, "file") } };
}

const link = (l?: Link) => (l ? { _type: "link", label: l.label, href: l.href } : undefined);
const seo = (s: { title: string; description: string; noIndex?: boolean }) => ({ _type: "seo", title: s.title, description: s.description, noIndex: !!s.noIndex });

async function section(s: Section): Promise<Record<string, unknown>> {
  const base = { _key: key() };
  switch (s._type) {
    case "hero":
      return { ...base, _type: "hero", heading: s.heading, subheading: s.subheading, text: s.text, image: await altImage(s.image), overlay: s.overlay, overlayOpacity: s.overlayOpacity, textMaxWidth: s.textMaxWidth };
    case "textBand":
      return { ...base, _type: "textBand", heading: s.heading, text: s.text, link: link(s.link), tone: s.tone };
    case "accordionFeature":
      return {
        ...base,
        _type: "accordionFeature",
        heading: s.heading,
        text: s.text,
        image: await altImage(s.image),
        items: s.items.map((it) => ({ _key: key(), _type: "accordionItem", title: it.title, body: it.body, href: it.href })),
        link: link(s.link),
        tone: s.tone,
        textMaxWidth: s.textMaxWidth,
      };
    case "cardPair":
      return {
        ...base,
        _type: "cardPair",
        heading: s.heading,
        text: s.text,
        link: link(s.link),
        cards: await Promise.all(s.cards.map(async (c) => ({ _key: key(), _type: "photoCard", title: c.title, text: c.text, image: await altImage(c.image) }))),
      };
    case "steps":
      return {
        ...base,
        _type: "steps",
        heading: s.heading,
        text: s.text,
        link: link(s.link),
        items: await Promise.all(s.items.map(async (it) => ({ _key: key(), _type: "step", title: it.title, text: it.text, icon: await altImage(it.icon) }))),
      };
    case "imageBand":
      return { ...base, _type: "imageBand", heading: s.heading, text: s.text, image: await altImage(s.image), overlay: s.overlay, overlayOpacity: s.overlayOpacity, textMaxWidth: s.textMaxWidth };
    case "faq":
      return { ...base, _type: "faqSection", heading: s.heading, text: s.text, items: s.items.map((f) => ({ _key: key(), _type: "faqItem", question: f.question, answer: f.answer })) };
    case "topics":
      return {
        ...base,
        _type: "topics",
        blocks: s.blocks.map((b) => ({ _key: key(), _type: "topicBlock", heading: b.heading, text: b.text })),
        columns: s.columns.map((items) => ({ _key: key(), _type: "topicColumn", items })),
        logos: await images(s.logos),
      };
    case "iconFeatures":
      return {
        ...base,
        _type: "iconFeatures",
        heading: s.heading,
        text: s.text,
        items: await Promise.all(s.items.map(async (it) => ({ _key: key(), _type: "iconFeature", title: it.title, text: it.text, icon: await altImage(it.icon) }))),
      };
  }
}
const sections = (list: Section[]) => Promise.all(list.map(section));

const pageFields = async (p: TreatmentPage) => ({ title: p.title, slug: { _type: "slug", current: p.slug }, sections: await sections(p.sections), seo: seo(p.seo) });

const menu = (items: MenuItem[]) =>
  items.map((m) => ({
    _key: key(),
    _type: "menuItem",
    label: m.label,
    href: m.href,
    children: m.children?.map((c) => ({ _key: key(), _type: "subMenuItem", label: c.label, href: c.href, children: c.children?.map((g) => ({ _key: key(), ...link(g) })) })),
  }));

const cards = (list: { image?: Img; title: string; text: string[] }[]) =>
  Promise.all(list.map(async (c) => ({ _key: key(), _type: "card", title: c.title, text: c.text, image: await altImage(c.image) })));

/* ---------- documents ---------- */

async function build() {
  const docs: Record<string, unknown>[] = [];
  const s = fallbackSettings;

  docs.push({
    _id: "siteSettings",
    _type: "siteSettings",
    name: s.name,
    legalName: s.legalName,
    phone: s.phone,
    phoneDisplay: s.phoneDisplay,
    street: s.street,
    city: s.city,
    region: s.region,
    postalCode: s.postalCode,
    latitude: s.latitude,
    longitude: s.longitude,
    mapsUrl: s.mapsUrl,
    privacyPolicyUrl: s.privacyPolicyUrl,
    trustStrip: s.trustStrip,
    logo: await altImage(s.logo),
    footerLogo: await altImage(s.footerLogo),
    hoursLabel: s.hoursLabel,
    hours: s.hours.map((h) => ({ _key: key(), _type: "dayHours", ...h })),
    headerCta: link(s.headerCta),
    menu: menu(fallbackMenu),
    social: s.social.map((x) => ({ _key: key(), _type: "socialLink", ...x })),
  });

  const h = fallbackHome;
  docs.push({
    _id: "homePage",
    _type: "homePage",
    hero: { heading: h.hero.heading, tagline: h.hero.tagline, cta: link(h.hero.cta), videoMp4: await fileAsset(h.hero.videoMp4), videoWebm: await fileAsset(h.hero.videoWebm), poster: await altImage(h.hero.poster) },
    intro: { heading: h.intro.heading, text: h.intro.text, cards: await cards(h.intro.cards) },
    story: { heading: h.story.heading, text: h.story.text, cta: link(h.story.cta), slides: await images(h.story.slides) },
    technology: {
      heading: h.technology.heading,
      text: h.technology.text,
      items: await Promise.all(h.technology.items.map(async (it) => ({ _key: key(), _type: "techItem", title: it.title, text: it.text, image: await altImage(it.image) }))),
    },
    work: h.work,
    values: { heading: h.values.heading, text: h.values.text, cta: link(h.values.cta), cards: await cards(h.values.cards) },
    seo: seo(h.seo),
  });

  const a = fallbackAbout;
  docs.push({ _id: "aboutPage", _type: "aboutPage", hero: { ...a.hero, image: await altImage(a.hero.image) }, intro: a.intro, mission: a.mission, seo: seo(a.seo) });

  const b = fallbackBeforeAfter;
  docs.push({ _id: "beforeAfterPage", _type: "beforeAfterPage", hero: { ...b.hero, image: await altImage(b.hero.image) }, gallery: b.gallery, seo: seo(b.seo) });

  const ap = fallbackAppointment;
  docs.push({ _id: "appointmentPage", _type: "appointmentPage", heading: ap.heading, image: await altImage(ap.image), hoursLabel: ap.hoursLabel, formButton: ap.formButton, seo: seo(ap.seo) });

  const t = fallbackThankYou;
  docs.push({ _id: "thankYouPage", _type: "thankYouPage", heading: t.heading, text: t.text, seo: seo(t.seo) });

  const hub = fallbackServicesHub;
  docs.push({ _id: "servicesPage", _type: "servicesPage", title: hub.title, sections: await sections(hub.sections), seo: seo(hub.seo) });

  docs.push({ _id: "privacyPage", _type: "privacyPage", title: fallbackPrivacy.title, body: fallbackPrivacy.body, seo: seo(fallbackPrivacy.seo) });

  const faqItems = (faqs: { question: string; answer: string[] }[]) => faqs.map((f) => ({ _key: key(), _type: "faqItem", question: f.question, answer: f.answer }));
  const whyItems = (items: { title: string; text: string }[]) => items.map((w) => ({ _key: key(), _type: "whyItem", title: w.title, text: w.text }));
  const ah = fallbackAreasHub;
  docs.push({
    _id: "areasPage",
    _type: "areasPage",
    approved: ah.approved,
    heading: ah.heading,
    subhead: ah.subhead,
    heroImage: await altImage(ah.heroImage),
    intro: ah.intro,
    mapEmbedUrl: ah.mapEmbedUrl,
    mapCaption: ah.mapCaption,
    cardsHeading: ah.cardsHeading,
    whyHeading: ah.whyHeading,
    whyItems: whyItems(ah.whyItems),
    whyText: ah.whyText,
    planHeading: ah.planHeading,
    planText: ah.planText,
    faqs: faqItems(ah.faqs),
    zipsHeading: ah.zipsHeading,
    zips: ah.zips,
    ctaHeading: ah.ctaHeading,
    ctaText: ah.ctaText,
    seo: seo(ah.seo),
  });
  for (const a of fallbackAreaPages) {
    docs.push({
      _id: `areaPage-${a.slug}`,
      _type: "areaPage",
      approved: a.approved,
      name: a.name,
      slug: { _type: "slug", current: a.slug },
      order: a.order,
      zips: a.zips,
      cardLine: a.cardLine,
      heading: a.heading,
      subhead: a.subhead,
      heroImage: await altImage(a.heroImage),
      intro: a.intro,
      gettingHere: a.gettingHere,
      mapFrom: a.mapFrom,
      mapTitle: a.mapTitle,
      treatmentsHeading: a.treatmentsHeading,
      treatments: a.treatments.map((t) => ({ _key: key(), _type: "areaTreatment", title: t.title, text: t.text, links: t.links.map((l) => ({ _key: key(), ...link(l) })) })),
      whyHeading: a.whyHeading,
      whyItems: whyItems(a.whyItems),
      whyText: a.whyText,
      faqs: faqItems(a.faqs),
      seo: seo(a.seo),
    });
  }

  for (const c of fallbackCategories) docs.push({ _id: `serviceCategory-${c.slug}`, _type: "serviceCategory", order: c.order, ...(await pageFields(c)) });
  for (const sv of fallbackServices)
    docs.push({ _id: `service-${sv.slug}`, _type: "service", order: sv.order, category: { _type: "reference", _ref: `serviceCategory-${sv.category}` }, ...(await pageFields(sv)) });

  for (const m of fallbackTeam) {
    docs.push({ _id: `teamMember-${m.id}`, _type: "teamMember", name: m.name, heading: m.heading, bio: m.bio, photo: await altImage(m.photo), order: m.order });
  }
  for (const c of fallbackCases) docs.push({ _id: `beforeAfterCase-${c.id}`, _type: "beforeAfterCase", title: c.title, image: await altImage(c.image), groups: c.groups, order: c.order });
  fallbackTestimonials.forEach((x, n) => docs.push({ _id: `testimonial-${n + 1}`, _type: "testimonial", ...x }));
  fallbackFaqs.forEach((f, n) => docs.push({ _id: `faq-${n + 1}`, _type: "faq", question: f.question, answer: f.answer, order: n + 1 }));
  for (const p of fallbackPosts) docs.push({ _id: `post-${p.slug}`, _type: "post", title: p.title, slug: { _type: "slug", current: p.slug }, date: p.date, excerpt: p.excerpt, body: p.body, image: await altImage(p.image), seo: seo(p.seo) });

  return docs;
}

const clean = (v: unknown): unknown =>
  Array.isArray(v)
    ? v.map(clean)
    : v && typeof v === "object"
      ? Object.fromEntries(Object.entries(v).filter(([, x]) => x !== undefined && x !== "").map(([k, x]) => [k, clean(x)]))
      : v;

const mode = seoOnly ? " (SEO fields only)" : force ? " (overwriting)" : " (keeping existing documents)";
console.log(`Seeding ${projectId}/${dataset}${mode}${dryRun ? " [dry run]" : ""}. ${seoOnly ? "Building documents" : "Uploading photos"}`);
const docs = (await build()).map((d) => clean(d) as { _id: string; _type: string }).filter((d) => !only.length || only.some((p) => d._id.startsWith(p)));

type SeoDoc = { _id: string; seo?: { title?: string; description?: string; noIndex?: boolean } };
if (seoOnly) {
  // Only documents that already exist in Sanity are touched, and only where their SEO text differs from the built-in copy.
  const wanted = docs.filter((d) => "seo" in d) as SeoDoc[];
  const current = await client.fetch<SeoDoc[]>(`*[_id in $ids]{ _id, seo }`, { ids: wanted.map((d) => d._id) });
  const byId = new Map(current.map((c) => [c._id, c.seo]));
  const same = (a?: SeoDoc["seo"], b?: SeoDoc["seo"]) =>
    (a?.title ?? "") === (b?.title ?? "") && (a?.description ?? "") === (b?.description ?? "") && !!a?.noIndex === !!b?.noIndex;
  const missing = wanted.filter((d) => !byId.has(d._id)).map((d) => d._id);
  const changes = wanted.filter((d) => byId.has(d._id) && !same(byId.get(d._id), d.seo));
  for (const d of changes) {
    const was = byId.get(d._id);
    console.log(`\n${d._id}`);
    if ((was?.title ?? "") !== (d.seo?.title ?? "")) console.log(`  title: ${was?.title ?? "(none)"}\n     -> ${d.seo?.title}`);
    if ((was?.description ?? "") !== (d.seo?.description ?? "")) console.log(`  description: ${was?.description ?? "(none)"}\n     -> ${d.seo?.description}`);
  }
  console.log(`\n${changes.length} of ${wanted.length} documents differ${missing.length ? `; not in Sanity, skipped: ${missing.join(", ")}` : ""}.`);
  if (dryRun) {
    console.log("Dry run, nothing written.");
    process.exit(0);
  }
  for (let i = 0; i < changes.length; i += 20) {
    const tx = client.transaction();
    for (const d of changes.slice(i, i + 20)) tx.patch(d._id, (p) => p.set({ seo: d.seo }));
    await tx.commit({ visibility: "async" });
  }
  console.log(`Done: SEO fields set on ${changes.length} documents. The site picks them up on its next build.`);
  process.exit(0);
}

console.log(`\n${uploaded.size} files ${dryRun ? "checked" : "uploaded"}. Writing ${docs.length} documents…`);
if (dryRun) {
  const counts = docs.reduce<Record<string, number>>((acc, d) => ((acc[d._type] = (acc[d._type] ?? 0) + 1), acc), {});
  console.log("Dry run, nothing written:", counts, `${Math.round(JSON.stringify(docs).length / 1024)} KB of content`);
  process.exit(0);
}

// Small transactions keep each request well under Sanity's size limit.
for (let i = 0; i < docs.length; i += 20) {
  const tx = client.transaction();
  for (const d of docs.slice(i, i + 20)) {
    if (force) tx.createOrReplace(d);
    else tx.createIfNotExists(d);
  }
  await tx.commit({ visibility: "async" });
  process.stdout.write(`${Math.min(i + 20, docs.length)}/${docs.length} `);
}
console.log("\nDone. Open /cms to see the content.");
