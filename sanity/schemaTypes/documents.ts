import { defineArrayMember, defineField, defineType } from "sanity";
import { sectionsField } from "./objects";

const seoField = defineField({ name: "seo", title: "SEO", type: "seo" });
const paragraphs = (name = "text", title = "Text") =>
  defineField({ name, title, type: "array", of: [defineArrayMember({ type: "text", rows: 4 })], description: "One box per paragraph. **Double asterisks** make text bold." });
const slugField = defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title" }, validation: (r) => r.required(), description: "Changing it changes the page address. Keep the old one unless you add a redirect." });
const orderField = defineField({ name: "order", title: "Order", type: "number" });

/* ---------- Settings ---------- */

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "practice", title: "Practice", default: true },
    { name: "hours", title: "Hours" },
    { name: "header", title: "Header & menu" },
    { name: "social", title: "Social" },
  ],
  fields: [
    defineField({ name: "name", title: "Practice name (as shown)", type: "string", group: "practice" }),
    defineField({ name: "legalName", title: "Business name (Google / schema)", type: "string", group: "practice" }),
    defineField({ name: "phone", title: "Phone", type: "string", group: "practice", description: "Shown in the header and on the appointment page, e.g. (310) 274-7005. Links call this number." }),
    defineField({ name: "phoneDisplay", title: "Phone as shown in the footer", type: "string", group: "practice" }),
    defineField({ name: "street", title: "Street address", type: "string", group: "practice" }),
    defineField({ name: "city", type: "string", group: "practice" }),
    defineField({ name: "region", title: "State", type: "string", group: "practice" }),
    defineField({ name: "postalCode", title: "ZIP code", type: "string", group: "practice" }),
    defineField({ name: "latitude", type: "number", group: "practice" }),
    defineField({ name: "longitude", type: "number", group: "practice" }),
    defineField({ name: "mapsUrl", title: "Google Maps link", type: "url", group: "practice" }),
    defineField({ name: "privacyPolicyUrl", title: "Privacy policy link", type: "string", group: "practice", initialValue: "/privacy-policy/" }),
    defineField({ name: "trustStrip", title: "Trust strip (under the buttons on area pages)", type: "array", group: "practice", of: [defineArrayMember({ type: "string" })], description: "Short points, e.g. Dr. Nushin Shir, DDS, MPH · In-office 3D CT. Add the Google rating once confirmed." }),
    defineField({ name: "logo", title: "Header logo", type: "altImage", group: "practice" }),
    defineField({ name: "footerLogo", title: "Footer logo", type: "altImage", group: "practice" }),
    defineField({ name: "hoursLabel", title: "Hours heading (footer)", type: "string", group: "hours" }),
    defineField({
      name: "hours",
      title: "Opening hours",
      type: "array",
      group: "hours",
      of: [
        defineArrayMember({
          type: "object",
          name: "dayHours",
          fields: [
            defineField({ name: "day", type: "string", validation: (r) => r.required() }),
            defineField({ name: "value", title: "Hours as shown", type: "string", description: "e.g. 8:00 a.m. – 5:30 p.m. or Closed", validation: (r) => r.required() }),
            defineField({ name: "opens", title: "Opens (24h, for Google)", type: "string", description: "e.g. 08:00. Leave empty when closed." }),
            defineField({ name: "closes", title: "Closes (24h, for Google)", type: "string", description: "e.g. 17:30" }),
          ],
          preview: { select: { title: "day", subtitle: "value" } },
        }),
      ],
    }),
    defineField({ name: "headerCta", title: "Header button", type: "link", group: "header" }),
    defineField({ name: "menu", title: "Main menu", type: "array", group: "header", of: [defineArrayMember({ type: "menuItem" })] }),
    defineField({
      name: "social",
      title: "Social links",
      type: "array",
      group: "social",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({ name: "network", type: "string", options: { list: ["facebook", "instagram", "google", "yelp", "youtube", "tiktok", "x", "linkedin"] }, validation: (r) => r.required() }),
            defineField({ name: "href", title: "URL", type: "url", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "network", subtitle: "href" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

/* ---------- Page singletons ---------- */

const heroLink = (name: string, title: string) => defineField({ name, title, type: "link" });

export const homePage = defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Video banner",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "tagline", type: "string" }),
        heroLink("cta", "Button"),
        defineField({ name: "videoMp4", title: "Video (MP4)", type: "file", options: { accept: "video/mp4" }, description: "Muted, looping background. Keep it under 5 MB." }),
        defineField({ name: "videoWebm", title: "Video (WebM, optional)", type: "file", options: { accept: "video/webm" } }),
        defineField({ name: "poster", title: "Poster image (shown while the video loads)", type: "altImage" }),
      ],
    }),
    defineField({ name: "intro", title: "We treat you…", type: "object", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 3 }), defineField({ name: "cards", type: "array", of: [defineArrayMember({ type: "card" })] })] }),
    defineField({
      name: "story",
      title: "Thirty years band",
      type: "object",
      fields: [defineField({ name: "heading", type: "string" }), paragraphs(), heroLink("cta", "Button"), defineField({ name: "slides", title: "Slideshow photos", type: "array", of: [defineArrayMember({ type: "altImage" })] })],
    }),
    defineField({
      name: "technology",
      title: "Technology and innovation",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string" }),
        paragraphs(),
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "techItem",
              fields: [defineField({ name: "title", type: "string" }), defineField({ name: "text", type: "text", rows: 4 }), defineField({ name: "image", type: "altImage" })],
              preview: { select: { title: "title", media: "image" } },
            }),
          ],
        }),
      ],
    }),
    defineField({ name: "work", title: "Our work", type: "object", description: "The photos come from Before & after cases marked “Home / thank-you carousel”.", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 2 })] }),
    defineField({
      name: "values",
      title: "Biological. Biomimetic…",
      type: "object",
      fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 2 }), heroLink("cta", "Button"), defineField({ name: "cards", type: "array", of: [defineArrayMember({ type: "card" })] })],
    }),
    seoField,
  ],
  preview: { prepare: () => ({ title: "Home" }) },
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "hero", type: "object", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 3 }), defineField({ name: "image", type: "altImage" })] }),
    defineField({ name: "intro", type: "object", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 4 })] }),
    defineField({ name: "mission", type: "object", description: "The team members in between come from Team.", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 3 })] }),
    seoField,
  ],
  preview: { prepare: () => ({ title: "About" }) },
});

export const beforeAfterPage = defineType({
  name: "beforeAfterPage",
  title: "Before & after",
  type: "document",
  fields: [
    defineField({ name: "hero", type: "object", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 4 }), defineField({ name: "image", type: "altImage" })] }),
    defineField({ name: "gallery", type: "object", description: "The photos come from Before & after cases.", fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 2 })] }),
    seoField,
  ],
  preview: { prepare: () => ({ title: "Before & after" }) },
});

export const appointmentPage = defineType({
  name: "appointmentPage",
  title: "Appointment",
  type: "document",
  fields: [
    defineField({ name: "heading", type: "string" }),
    defineField({ name: "image", title: "Banner photo", type: "altImage" }),
    defineField({ name: "hoursLabel", title: "Hours heading", type: "string" }),
    defineField({ name: "formButton", title: "Form button", type: "string" }),
    seoField,
  ],
  preview: { prepare: () => ({ title: "Appointment" }) },
});

export const thankYouPage = defineType({
  name: "thankYouPage",
  title: "Thank you",
  type: "document",
  fields: [defineField({ name: "heading", type: "string" }), defineField({ name: "text", type: "text", rows: 2 }), seoField],
  preview: { prepare: () => ({ title: "Thank you" }) },
});

const hubPage = (name: string, title: string) =>
  defineType({ name, title, type: "document", fields: [defineField({ name: "title", type: "string" }), sectionsField, seoField], preview: { prepare: () => ({ title }) } });

export const servicesPage = hubPage("servicesPage", "Services hub");

/* ---------- Areas We Serve ---------- */

const approvedField = defineField({
  name: "approved",
  title: "Approved by Dr. Shir (publish)",
  type: "boolean",
  initialValue: false,
  description: "Off: the page works at its address for review but is hidden from Google and the sitemap. Turn on only after Dr. Shir approves it.",
});
const whyItems = defineField({
  name: "whyItems",
  title: "Why patients make the trip (icon row)",
  type: "array",
  of: [defineArrayMember({ type: "object", name: "whyItem", fields: [defineField({ name: "title", type: "string" }), defineField({ name: "text", title: "Line under the title (optional)", type: "text", rows: 2 })], preview: { select: { title: "title" } } })],
});
const faqsField = defineField({ name: "faqs", title: "FAQ (also marked up for Google, word for word)", type: "array", of: [defineArrayMember({ type: "faqItem" })] });

export const areasPage = defineType({
  name: "areasPage",
  title: "Areas We Serve hub",
  type: "document",
  fields: [
    approvedField,
    defineField({ name: "heading", title: "H1", type: "string" }),
    defineField({ name: "subhead", type: "string" }),
    defineField({ name: "heroImage", title: "Hero photo (real office or Dr. Shir)", type: "altImage" }),
    paragraphs("intro", "Intro"),
    defineField({ name: "mapEmbedUrl", title: "Custom map embed URL (optional)", type: "url", description: "e.g. a Google My Maps embed with the six areas shaded. Empty: a map with the office pin." }),
    defineField({ name: "mapCaption", type: "string" }),
    defineField({ name: "cardsHeading", title: "Area cards heading", type: "string" }),
    defineField({ name: "whyHeading", type: "string" }),
    whyItems,
    paragraphs("whyText", "Why patients make the trip (text)"),
    defineField({ name: "planHeading", type: "string" }),
    paragraphs("planText", "Planning your first visit"),
    faqsField,
    defineField({ name: "zipsHeading", type: "string" }),
    defineField({ name: "zips", title: "Zip code list", type: "text", rows: 2 }),
    defineField({ name: "ctaHeading", title: "Final call-to-action heading", type: "string" }),
    defineField({ name: "ctaText", title: "Final call-to-action text", type: "text", rows: 2 }),
    seoField,
  ],
  preview: { prepare: () => ({ title: "Areas We Serve hub" }) },
});

export const areaPage = defineType({
  name: "areaPage",
  title: "Area page",
  type: "document",
  fields: [
    approvedField,
    defineField({ name: "name", title: "Area name", type: "string", validation: (r) => r.required() }),
    defineField({ ...slugField, options: { source: "name" } }),
    orderField,
    defineField({ name: "zips", title: "Zip codes", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "cardLine", title: "Line on the hub card", type: "string" }),
    defineField({ name: "heading", title: "H1", type: "string" }),
    defineField({ name: "subhead", title: "Subhead (with the drive time)", type: "string" }),
    defineField({ name: "heroImage", title: "Hero photo (real office or Dr. Shir)", type: "altImage" }),
    paragraphs("intro", "Intro"),
    paragraphs("gettingHere", "Getting here"),
    defineField({ name: "mapFrom", title: "Route map: start address", type: "string", description: "The route ends at the office." }),
    defineField({ name: "mapTitle", title: "Route map: label", type: "string" }),
    defineField({ name: "treatmentsHeading", type: "string" }),
    defineField({
      name: "treatments",
      title: "Popular treatments (cards)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "areaTreatment",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 4 }),
            defineField({ name: "links", title: "Learn more links", type: "array", of: [defineArrayMember({ type: "link" })], description: "Only to live Beverly Hills service pages. Leave empty otherwise." }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({ name: "whyHeading", type: "string" }),
    whyItems,
    paragraphs("whyText", "Why patients make the trip (text)"),
    faqsField,
    defineField({ name: "reviews", title: "Area reviews (written permission only)", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })], description: "Hidden while empty." }),
    seoField,
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "slug.current", approved: "approved" }, prepare: (v) => ({ title: v.title, subtitle: `/areas-we-serve/${v.subtitle ?? ""}/${v.approved ? "" : " · not approved"}` }) },
});

export const privacyPage = defineType({
  name: "privacyPage",
  title: "Privacy policy",
  type: "document",
  fields: [defineField({ name: "title", type: "string" }), paragraphs("body", "Policy text (a paragraph starting with ## is a heading)"), seoField],
  preview: { prepare: () => ({ title: "Privacy policy" }) },
});

/* ---------- Collections ---------- */

export const serviceCategory = defineType({
  name: "serviceCategory",
  title: "Service category",
  type: "document",
  fields: [defineField({ name: "title", type: "string", validation: (r) => r.required() }), slugField, orderField, sectionsField, seoField],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", slug: "slug.current" }, prepare: (v) => ({ title: v.title, subtitle: `/services/${v.slug}/` }) },
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    slugField,
    defineField({ name: "category", type: "reference", to: [{ type: "serviceCategory" }], validation: (r) => r.required() }),
    orderField,
    sectionsField,
    seoField,
  ],
  preview: { select: { title: "title", slug: "slug.current", cat: "category.slug.current" }, prepare: (v) => ({ title: v.title, subtitle: `/services/${v.cat}/${v.slug}/` }) },
});

export const beforeAfterCase = defineType({
  name: "beforeAfterCase",
  title: "Before & after case",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "image", title: "Before & after photo", type: "altImage", validation: (r) => r.required() }),
    defineField({
      name: "groups",
      title: "Show in",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: [
          { title: "Home / thank-you carousel", value: "results" },
          { title: "Before & after page grid (computers)", value: "gallery" },
          { title: "Before & after page carousel (phones)", value: "galleryMobile" },
        ],
      },
    }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", media: "image" } },
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Review",
  type: "document",
  description: "Real patient reviews only, with permission.",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "rating", type: "number", initialValue: 5, validation: (r) => r.min(1).max(5) }),
    defineField({ name: "source", type: "string", description: "e.g. Google" }),
  ],
  preview: { select: { title: "name", subtitle: "quote" } },
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  description: "Shared questions that FAQ sections can include.",
  fields: [defineField({ name: "question", type: "string", validation: (r) => r.required() }), paragraphs("answer", "Answer"), orderField],
  preview: { select: { title: "question" } },
});

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Heading (name and role)", type: "string" }),
    paragraphs("bio", "Bio"),
    defineField({ name: "photo", type: "altImage" }),
    orderField,
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "heading", media: "photo" } },
});

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    slugField,
    defineField({ name: "date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "image", type: "altImage" }),
    paragraphs("body", "Body"),
    seoField,
  ],
  preview: { select: { title: "title", subtitle: "date", media: "image" } },
});

export const singletonTypes = new Set([
  "siteSettings",
  "homePage",
  "aboutPage",
  "beforeAfterPage",
  "appointmentPage",
  "thankYouPage",
  "servicesPage",
  "privacyPage",
  "areasPage",
]);

export const documentTypes = [
  siteSettings,
  homePage,
  aboutPage,
  beforeAfterPage,
  appointmentPage,
  thankYouPage,
  servicesPage,
  privacyPage,
  areasPage,
  areaPage,
  serviceCategory,
  service,
  beforeAfterCase,
  testimonial,
  faq,
  teamMember,
  post,
];
