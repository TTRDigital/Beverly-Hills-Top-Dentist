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
import { addedServiceItems, addedServiceLinks, fallbackCategories, fallbackServices, fallbackServicesHub } from "@/lib/data/services";
import { fallbackAreaPages, fallbackAreasHub } from "@/lib/data/areas";
import type {
  AboutContent,
  AreaPage,
  AreasHub,
  Img,
  MenuItem,
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

const IMG = `{ "src": asset->url, "alt": coalesce(alt, asset->altText, asset->title, ""), "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }`;
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

/**
 * Services added after the CMS was loaded (lib/data/services.ts) appear in the menu, the Services hub and their category
 * page even when those were saved in Sanity before the services existed. Nothing is added twice.
 */
function withAddedMenuItems(menu: MenuItem[]): MenuItem[] {
  return menu.map((top) =>
    top.href !== "/services/"
      ? top
      : {
          ...top,
          children: top.children?.map((cat) => {
            const missing = addedServiceLinks.filter((a) => cat.href === `/services/${a.category}/` && !cat.children?.some((c) => c.href === a.href));
            return missing.length ? { ...cat, children: [...(cat.children ?? []), ...missing.map((a) => ({ label: a.title, href: a.href }))] } : cat;
          }),
        },
  );
}

/** Adds the category's new services to the accordion section that matches (the first one when no test is given). */
function withAddedItems(sections: Section[], category: string, matches: (s: Section) => boolean = () => true): Section[] {
  const add = addedServiceItems(category);
  if (!add.length) return sections;
  const at = sections.findIndex((s) => s._type === "accordionFeature" && matches(s));
  if (at < 0) return sections;
  return sections.map((s, i) => {
    if (i !== at || s._type !== "accordionFeature") return s;
    const missing = add.filter((a) => !s.items.some((it) => it.href === a.href));
    return missing.length ? { ...s, items: [...s.items, ...missing] } : s;
  });
}

/* ---------- Settings ---------- */

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const cms = await sanityFetch<Partial<SiteSettings>>(
    `*[_id == "siteSettings"][0]{
      name, legalName, phone, phoneDisplay, street, city, region, postalCode, latitude, longitude, mapsUrl,
      hoursLabel, hours[]{ day, value, opens, closes }, social[]{ network, href }, headerCta${LINK},
      menu[]{ label, href, children[]{ label, href, children[]{ label, href } } },
      privacyPolicyUrl, trustStrip, "logo": logo${IMG}, "footerLogo": footerLogo${IMG}
    }`,
    {},
    ["siteSettings"],
  );
  const s = merge({ ...fallbackSettings, menu: fallbackMenu }, cms);
  // The blog is always in the top menu (Kia, Oct 23), even when the menu saved in Sanity was made before it existed.
  if (!s.menu.some((m) => m.href === "/blog/")) s.menu = [...s.menu, { label: "Blog", href: "/blog/" }];
  s.menu = withAddedMenuItems(s.menu);
  // tel: link always follows the displayed phone number.
  const digits = s.phone.replace(/\D/g, "");
  return { ...s, phoneHref: `tel:+${digits.length === 10 ? `1${digits}` : digits}` };
});

/* ---------- Treatment-template pages ---------- */

export const getCategories = cache(async (): Promise<ServiceCategory[]> => {
  const cms = await sanityFetch<Partial<ServiceCategory>[]>(`*[_type == "serviceCategory" && defined(slug.current)] | order(order asc) ${PAGE}`, {}, ["serviceCategory"]);
  return mergeBySlug(fallbackCategories, cms, { ...blankPage, order: 99 }).map((c) => ({ ...c, sections: withAddedItems(c.sections, c.slug) }));
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

export const getServicesHub = cache(async () => {
  const page = await hub("servicesPage", fallbackServicesHub);
  const categories = [...new Set(addedServiceLinks.map((a) => a.category))];
  const sections = categories.reduce(
    (secs, cat) => withAddedItems(secs, cat, (s) => s._type === "accordionFeature" && s.link?.href === `/services/${cat}/`),
    page.sections,
  );
  return { ...page, sections };
});

/* ---------- Areas We Serve ---------- */

const WHY = `whyItems[]{ title, "text": coalesce(text, "") }`;
const FAQS = `faqs[]{ question, answer }`;

/** Lists a component reads are always present, even when emptied in the CMS. */
function normalizeArea<T>(page: T): T {
  const p = page as Loose;
  const out: Loose = {
    ...p,
    intro: arr<string>(p.intro),
    whyText: arr<string>(p.whyText),
    whyItems: arr<Loose>(p.whyItems).map((w) => ({ title: String(w.title ?? ""), text: String(w.text ?? "") })),
    faqs: arr<Loose>(p.faqs).map((f) => ({ question: String(f.question ?? ""), answer: arr<string>(f.answer) })),
  };
  if ("treatments" in p) {
    out.gettingHere = arr<string>(p.gettingHere);
    out.zips = arr<string>(p.zips);
    out.treatments = arr<Loose>(p.treatments).map((t) => ({ title: String(t.title ?? ""), text: String(t.text ?? ""), links: arr(t.links) }));
  } else {
    out.planText = arr<string>(p.planText);
  }
  return out as T;
}

export const getAreasHub = cache(async (): Promise<AreasHub> => {
  const cms = await sanityFetch<Partial<AreasHub>>(
    `*[_id == "areasPage"][0]{ approved, heading, subhead, "heroImage": heroImage${IMG}, intro, mapEmbedUrl, mapCaption, cardsHeading, whyHeading, ${WHY}, whyText, planHeading, planText, ${FAQS}, zipsHeading, zips, ctaHeading, ctaText, ${SEO} }`,
    {},
    ["areasPage"],
  );
  const hub = normalizeArea(merge(fallbackAreasHub, cms));
  return { ...hub, approved: cms?.approved ?? fallbackAreasHub.approved };
});

export const getAreaPages = cache(async (): Promise<AreaPage[]> => {
  const cms = await sanityFetch<Partial<AreaPage>[]>(
    `*[_type == "areaPage" && defined(slug.current)] | order(order asc){
      "slug": slug.current, order, approved, name, zips, cardLine, heading, subhead, "heroImage": heroImage${IMG},
      intro, gettingHere, mapFrom, mapTitle, treatmentsHeading, treatments[]{ title, text, "links": links[]${LINK} },
      whyHeading, ${WHY}, whyText, ${FAQS}, "reviews": reviews[]->{ quote, name, "rating": coalesce(rating, 5), source }, ${SEO}
    }`,
    {},
    ["areaPage"],
  );
  if (!cms?.length) return fallbackAreaPages;
  const bySlug = new Map(fallbackAreaPages.map((f) => [f.slug, f]));
  const blank: AreaPage = { ...fallbackAreaPages[0], slug: "", name: "", treatments: [], faqs: [], reviews: [], approved: false, order: 99 };
  // Treatment links and reviews may be emptied on purpose, so the CMS list replaces the built-in one.
  const merged = cms.map((c) => {
    const base = bySlug.get(c.slug ?? "") ?? { ...blank, slug: c.slug ?? "" };
    const page = normalizeArea(merge(base, c));
    return { ...page, approved: c.approved ?? base.approved, reviews: arr(c.reviews) as AreaPage["reviews"] };
  });
  const missing = fallbackAreaPages.filter((f) => !cms.some((c) => c.slug === f.slug));
  return [...merged, ...missing].sort((a, b) => a.order - b.order);
});

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
    `*[_type == "post" && defined(slug.current)] | order(date desc){ "slug": slug.current, title, date, author, category, service, excerpt, body, "image": image${IMG}, cta,
      "figures": figures[]{ _key, beforeHeading, "image": image${IMG}, caption, position },
      "blocks": blocks[]{ "_type": select(_type == "postFacts" => "facts", _type == "postSteps" => "steps", _type == "postOptions" => "options", _type), _key, beforeHeading, heading, items[]{ icon, label, value, title, text } },
      ${SEO} }`,
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
