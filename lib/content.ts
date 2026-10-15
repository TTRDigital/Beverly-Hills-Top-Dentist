import "server-only";
import { cache } from "react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { merge } from "@/lib/merge";
import { fallbackCases, fallbackFaqs, fallbackMenu, fallbackPosts, fallbackSettings, fallbackTeam, fallbackTestimonials } from "@/lib/data/site";
import {
  fallbackAbout,
  fallbackAppointment,
  fallbackBeforeAfter,
  fallbackHome,
  fallbackPrivacy,
  fallbackThankYou,
} from "@/lib/data/pages";
import { fallbackCategories, fallbackServices, fallbackServicesHub } from "@/lib/data/services";
import type {
  AboutContent,
  Img,
  Section,
  AppointmentContent,
  BeforeAfterCase,
  BeforeAfterContent,
  Faq,
  HomeContent,
  HubContent,
  LegalContent,
  Post,
  Service,
  ServiceCategory,
  SiteSettings,
  TeamMember,
  Testimonial,
  ThankYouContent,
  TreatmentPage,
} from "@/lib/types";

/* ==========================================================================
   Content layer
   Every page reads through these functions. Sanity values win when present;
   anything missing falls back to lib/data, so the site works before the CMS
   is filled in, and an empty field never breaks a page.
   ========================================================================== */

/* ---------- GROQ fragments ---------- */

const IMG = `{ "src": asset->url, "alt": coalesce(alt, ""), "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }`;
const SEO = `seo{ title, description, noIndex, "image": ogImage${IMG} }`;
const LINK = `{ label, href }`;

/** Treatment-template sections: images resolved, nested string lists flattened. */
const SECTIONS = `sections[]{
  "_type": select(_type == "faqSection" => "faq", _type), _key, heading, subheading, text, tone, overlay, overlayOpacity, textMaxWidth,
  "image": image${IMG},
  "link": link${LINK},
  "items": items[]{ title, body, href, text, question, answer, "icon": icon${IMG} },
  "cards": cards[]{ title, text, "image": image${IMG} },
  "blocks": blocks[]{ heading, text },
  "columns": columns[].items,
  "logos": logos[]${IMG},
  "shared": faqs[]->{ question, answer }
}`;

const PAGE = `{ "slug": slug.current, title, order, ${SECTIONS}, ${SEO} }`;

type Loose = Record<string, unknown>;
const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

/**
 * Sections from the CMS, made safe to render: every list a component reads is
 * present (an emptied field comes back missing), and shared FAQs (references)
 * are appended to each FAQ section's own questions.
 */
function normalizeSection(raw: unknown): Section | null {
  const s = (raw ?? {}) as Loose;
  if (typeof s._type !== "string") return null;
  const base = { ...s, text: arr<string>(s.text) };
  switch (s._type) {
    case "hero":
    case "imageBand":
      return { overlay: "none", ...base } as Section;
    case "textBand":
      return { tone: "light", ...base } as Section;
    case "accordionFeature":
      return { tone: "dark", ...base, items: arr<Loose>(s.items).map((it) => ({ ...it, title: String(it.title ?? ""), body: arr<string>(it.body) })) } as Section;
    case "cardPair":
      return { ...base, cards: arr<Loose>(s.cards).map((c) => ({ ...c, title: String(c.title ?? ""), text: arr<string>(c.text) })) } as Section;
    case "steps":
    case "iconFeatures":
      return { ...base, items: arr<Loose>(s.items).map((it) => ({ ...it, title: String(it.title ?? ""), text: String(it.text ?? "") })) } as Section;
    case "faq": {
      const items = [...arr<Loose>(s.items), ...arr<Loose>(s.shared)].map((f) => ({ question: String(f.question ?? ""), answer: arr<string>(f.answer) }));
      const { shared: _shared, ...rest } = base as Loose;
      void _shared;
      return { ...rest, heading: String(s.heading ?? ""), items } as Section;
    }
    case "topics":
      return { ...s, blocks: arr<Loose>(s.blocks).map((b) => ({ heading: String(b.heading ?? ""), text: arr<string>(b.text) })), columns: arr<unknown>(s.columns).map((c) => arr<string>(c)), logos: arr<Img>(s.logos) } as Section;
    default:
      return null;
  }
}

function normalizePage<T>(page: T): T {
  const sections = (page as { sections?: unknown[] } | null)?.sections;
  if (!sections) return page;
  return { ...page, sections: sections.map(normalizeSection).filter(Boolean) };
}

/** CMS documents merge over the matching fallback (same slug); CMS-only documents are added. */
function mergeBySlug<T extends { slug: string; order: number }>(fallback: T[], cms: Partial<T>[] | null, blank: T): T[] {
  if (!cms?.length) return fallback;
  const bySlug = new Map(fallback.map((f) => [f.slug, f]));
  const merged = cms.map((c) => normalizePage(merge(bySlug.get(c.slug ?? "") ?? { ...blank, slug: c.slug ?? "" }, c)));
  const missing = fallback.filter((f) => !cms.some((c) => c.slug === f.slug));
  return [...merged, ...missing].sort((a, b) => a.order - b.order);
}

const blankPage: TreatmentPage = { slug: "", title: "", sections: [], seo: { title: "", description: "" } };

/* ---------- Settings ---------- */

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const cms = await sanityFetch<Partial<SiteSettings>>(
    `*[_id == "siteSettings"][0]{
      name, legalName, phone, phoneDisplay, street, city, region, postalCode, latitude, longitude, mapsUrl,
      hoursLabel, hours[]{ day, value, opens, closes }, social[]{ network, href }, headerCta${LINK},
      menu[]{ label, href, children[]{ label, href, children[]{ label, href } } },
      privacyPolicyUrl, "logo": logo${IMG}, "footerLogo": footerLogo${IMG}
    }`,
    {},
    ["siteSettings"],
  );
  const s = merge({ ...fallbackSettings, menu: fallbackMenu }, cms);
  // tel: link always follows the displayed phone number.
  const digits = s.phone.replace(/\D/g, "");
  return { ...s, phoneHref: `tel:+${digits.length === 10 ? `1${digits}` : digits}` };
});

/* ---------- Treatment-template pages ---------- */

export const getCategories = cache(async (): Promise<ServiceCategory[]> => {
  const cms = await sanityFetch<Partial<ServiceCategory>[]>(`*[_type == "serviceCategory" && defined(slug.current)] | order(order asc) ${PAGE}`, {}, ["serviceCategory"]);
  return mergeBySlug(fallbackCategories, cms, { ...blankPage, order: 99 });
});

export const getServices = cache(async (): Promise<Service[]> => {
  const cms = await sanityFetch<Partial<Service>[]>(
    `*[_type == "service" && defined(slug.current)] | order(order asc){ "slug": slug.current, "category": category->slug.current, title, order, ${SECTIONS}, ${SEO} }`,
    {},
    ["service"],
  );
  return mergeBySlug(fallbackServices, cms, { ...blankPage, category: "", order: 99 });
});

async function hub(id: string, fallback: HubContent): Promise<HubContent> {
  const cms = await sanityFetch<Partial<HubContent>>(`*[_id == $id][0]{ title, ${SECTIONS}, ${SEO} }`, { id }, [id]);
  return normalizePage(merge(fallback, cms));
}

export const getServicesHub = cache(() => hub("servicesPage", fallbackServicesHub));

/* ---------- Collections ---------- */

export const getTeam = cache(async (): Promise<TeamMember[]> => {
  const cms = await sanityFetch<TeamMember[]>(
    `*[_type == "teamMember"] | order(order asc){ "id": _id, name, heading, bio, order, "photo": photo${IMG} }`,
    {},
    ["teamMember"],
  );
  if (!cms?.length) return fallbackTeam;
  return cms.map((m) => merge(fallbackTeam.find((f) => f.name === m.name) ?? { id: m.id, name: m.name, heading: m.heading, bio: [], order: m.order }, m));
});

export const getCases = cache(async (): Promise<BeforeAfterCase[]> => {
  const cms = await sanityFetch<BeforeAfterCase[]>(`*[_type == "beforeAfterCase" && defined(image.asset)] | order(order asc){ "id": _id, title, groups, order, "image": image${IMG} }`, {}, [
    "beforeAfterCase",
  ]);
  return cms?.length ? cms : fallbackCases;
});

export async function getCaseGroup(group: BeforeAfterCase["groups"][number]) {
  return (await getCases()).filter((c) => c.groups?.includes(group));
}

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const cms = await sanityFetch<Testimonial[]>(`*[_type == "testimonial"] | order(_createdAt asc){ quote, name, rating, source }`, {}, ["testimonial"]);
  return cms?.length ? cms.map((t) => ({ ...t, rating: t.rating ?? 5 })) : fallbackTestimonials;
});

export const getFaqs = cache(async (): Promise<Faq[]> => {
  const cms = await sanityFetch<Faq[]>(`*[_type == "faq"] | order(order asc){ question, answer }`, {}, ["faq"]);
  return cms?.length ? cms : fallbackFaqs;
});

export const getPosts = cache(async (): Promise<Post[]> => {
  const cms = await sanityFetch<Post[]>(
    `*[_type == "post" && defined(slug.current)] | order(date desc){ "slug": slug.current, title, date, excerpt, body, "image": image${IMG}, ${SEO} }`,
    {},
    ["post"],
  );
  return cms?.length ? cms.map((p) => ({ ...p, body: p.body ?? [], seo: merge({ title: p.title, description: p.excerpt ?? "" }, p.seo) })) : fallbackPosts;
});

/* ---------- Page singletons ---------- */

export const getHome = cache(async (): Promise<HomeContent> => {
  const CARDS = `cards[]{ title, text, "image": image${IMG} }`;
  const cms = await sanityFetch<Partial<HomeContent>>(
    `*[_id == "homePage"][0]{
      hero{ heading, tagline, cta${LINK}, "videoMp4": videoMp4.asset->url, "videoWebm": videoWebm.asset->url, "poster": poster${IMG} },
      intro{ heading, text, ${CARDS} },
      story{ heading, text, cta${LINK}, "slides": slides[]${IMG} },
      technology{ heading, text, items[]{ title, text, "image": image${IMG} } },
      work{ heading, text },
      values{ heading, text, cta${LINK}, ${CARDS} },
      ${SEO}
    }`,
    {},
    ["homePage"],
  );
  return merge(fallbackHome, cms);
});

export const getAboutPage = cache(async (): Promise<AboutContent> => {
  const cms = await sanityFetch<Partial<AboutContent>>(
    `*[_id == "aboutPage"][0]{ hero{ heading, text, "image": image${IMG} }, intro{ heading, text }, mission{ heading, text }, ${SEO} }`,
    {},
    ["aboutPage"],
  );
  return merge(fallbackAbout, cms);
});

export const getBeforeAfterPage = cache(async (): Promise<BeforeAfterContent> => {
  const cms = await sanityFetch<Partial<BeforeAfterContent>>(`*[_id == "beforeAfterPage"][0]{ hero{ heading, text, "image": image${IMG} }, gallery{ heading, text }, ${SEO} }`, {}, ["beforeAfterPage"]);
  return merge(fallbackBeforeAfter, cms);
});

export const getAppointmentPage = cache(async (): Promise<AppointmentContent> => {
  const cms = await sanityFetch<Partial<AppointmentContent>>(`*[_id == "appointmentPage"][0]{ heading, "image": image${IMG}, hoursLabel, formButton, ${SEO} }`, {}, ["appointmentPage"]);
  return merge(fallbackAppointment, cms);
});

export const getThankYouPage = cache(async (): Promise<ThankYouContent> => {
  const cms = await sanityFetch<Partial<ThankYouContent>>(`*[_id == "thankYouPage"][0]{ heading, text, ${SEO} }`, {}, ["thankYouPage"]);
  const page = merge(fallbackThankYou, cms);
  return { ...page, seo: { ...page.seo, noIndex: true } };
});

export const getPrivacyPage = cache(async (): Promise<LegalContent> => {
  const cms = await sanityFetch<Partial<LegalContent>>(`*[_id == "privacyPage"][0]{ title, body, ${SEO} }`, {}, ["privacyPage"]);
  return merge(fallbackPrivacy, cms);
});
