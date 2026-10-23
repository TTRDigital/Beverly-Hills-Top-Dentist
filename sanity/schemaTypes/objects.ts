import { defineArrayMember, defineField, defineType } from "sanity";

/** SEO fields on every page. Lengths are warnings, not hard errors. */
export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({ name: "title", title: "SEO title", type: "string", description: "Shown in Google and the browser tab. Aim for under 60 characters.", validation: (r) => r.max(70).warning("Long titles may be cut off in Google.") }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 3, description: "Aim for under 155 characters.", validation: (r) => r.max(170).warning("Long descriptions may be cut off in Google.") }),
    defineField({ name: "ogImage", title: "Social share image", type: "altImage", description: "1200 x 630. Leave empty to use the page's main photo." }),
    defineField({ name: "noIndex", title: "Hide from search engines", type: "boolean", initialValue: false }),
  ],
});

/** Image that always has alt text. */
export const altImage = defineType({
  name: "altImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description: 'Describe the photo for people who cannot see it, e.g. "Reception desk with the Cosmetic Dentistry sign". Leave empty only for decorative icons.',
    }),
  ],
});

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Link", type: "string", description: "A page on this site like /appointment/, or a full URL. tel:+13102747005 calls.", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

const paragraphs = (name = "text", title = "Text") =>
  defineField({
    name,
    title,
    type: "array",
    of: [defineArrayMember({ type: "text", rows: 4 })],
    description: "One box per paragraph. Wrap words in **double asterisks** to make them bold, write [words](/page/) for a link, and start a box with ## for a heading (### for a smaller one).",
  });

const overlay = defineField({
  name: "overlay",
  title: "Photo shade",
  type: "string",
  options: { list: [{ title: "Light (default)", value: "none" }, { title: "Dark", value: "dark" }, { title: "Dark on the left", value: "left" }], layout: "radio" },
  initialValue: "none",
});
const overlayOpacity = defineField({ name: "overlayOpacity", title: "Shade strength (0 to 1)", type: "number", validation: (r) => r.min(0).max(1) });
const textMaxWidth = defineField({ name: "textMaxWidth", title: "Text width limit (px, optional)", type: "number", description: "Leave empty for the full width." });

/* ---------- Treatment-template sections (services, categories, McLean pages) ---------- */

export const hero = defineType({
  name: "hero",
  title: "Banner",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Main heading (H1)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subheading", type: "string" }),
    paragraphs(),
    defineField({ name: "image", title: "Background photo", type: "altImage" }),
    overlay,
    overlayOpacity,
    textMaxWidth,
  ],
  preview: { select: { title: "heading", media: "image" }, prepare: (v) => ({ title: v.title, subtitle: "Banner", media: v.media }) },
});

export const textBand = defineType({
  name: "textBand",
  title: "Text band",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    paragraphs(),
    defineField({ name: "link", type: "link" }),
    defineField({ name: "tone", type: "string", options: { list: ["light", "dark"], layout: "radio" }, initialValue: "light" }),
  ],
  preview: { select: { title: "heading" }, prepare: (v) => ({ title: v.title, subtitle: "Text band" }) },
});

export const accordionFeature = defineType({
  name: "accordionFeature",
  title: "Photo + accordion",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    paragraphs(),
    defineField({ name: "image", type: "altImage" }),
    defineField({
      name: "items",
      title: "Accordion items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "accordionItem",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            paragraphs("body", "Content"),
            defineField({ name: "href", title: "Link (optional)", type: "string", description: "A page this item links to, e.g. /services/cosmetic-dentistry/porcelain-veneers/" }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({ name: "link", type: "link" }),
    defineField({ name: "tone", type: "string", options: { list: ["dark", "light"], layout: "radio" }, initialValue: "dark" }),
    textMaxWidth,
  ],
  preview: { select: { title: "heading", media: "image" }, prepare: (v) => ({ title: v.title, subtitle: "Photo + accordion", media: v.media }) },
});

export const cardPair = defineType({
  name: "cardPair",
  title: "Intro + photo cards",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    paragraphs(),
    defineField({ name: "link", type: "link" }),
    defineField({
      name: "cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "photoCard",
          fields: [defineField({ name: "image", type: "altImage" }), defineField({ name: "title", type: "string", validation: (r) => r.required() }), paragraphs()],
          preview: { select: { title: "title", media: "image" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: (v) => ({ title: v.title, subtitle: "Intro + photo cards" }) },
});

export const steps = defineType({
  name: "steps",
  title: "Steps (dark)",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    paragraphs(),
    defineField({ name: "link", type: "link" }),
    defineField({
      name: "items",
      title: "Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "step",
          fields: [defineField({ name: "icon", type: "altImage" }), defineField({ name: "title", type: "string", validation: (r) => r.required() }), defineField({ name: "text", type: "text", rows: 4 })],
          preview: { select: { title: "title", subtitle: "text", media: "icon" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: (v) => ({ title: v.title, subtitle: "Steps" }) },
});

export const imageBand = defineType({
  name: "imageBand",
  title: "Photo band",
  type: "object",
  fields: [defineField({ name: "heading", type: "string", validation: (r) => r.required() }), paragraphs(), defineField({ name: "image", type: "altImage" }), overlay, overlayOpacity, textMaxWidth],
  preview: { select: { title: "heading", media: "image" }, prepare: (v) => ({ title: v.title, subtitle: "Photo band", media: v.media }) },
});

export const faqItem = defineType({
  name: "faqItem",
  title: "Question",
  type: "object",
  fields: [defineField({ name: "question", type: "string", validation: (r) => r.required() }), paragraphs("answer", "Answer")],
  preview: { select: { title: "question" } },
});

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string" }),
    paragraphs(),
    defineField({ name: "items", title: "Questions on this page", type: "array", of: [defineArrayMember({ type: "faqItem" })] }),
    defineField({ name: "faqs", title: "Shared questions (from FAQs)", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "faq" }] })], description: "Optional: questions kept in the FAQs list, added after the ones above." }),
  ],
  preview: { select: { title: "heading" }, prepare: (v) => ({ title: v.title || "FAQ", subtitle: "FAQ" }) },
});

export const topics = defineType({
  name: "topics",
  title: "Topics checklist + insurance logos",
  type: "object",
  fields: [
    defineField({
      name: "blocks",
      title: "Headings and text above the checklist",
      type: "array",
      of: [defineArrayMember({ type: "object", name: "topicBlock", fields: [defineField({ name: "heading", type: "string" }), paragraphs()], preview: { select: { title: "heading" } } })],
    }),
    defineField({
      name: "columns",
      title: "Checklist columns",
      type: "array",
      of: [defineArrayMember({ type: "object", name: "topicColumn", fields: [defineField({ name: "items", type: "array", of: [defineArrayMember({ type: "string" })] })], preview: { select: { items: "items" }, prepare: (v) => ({ title: (v.items ?? []).join(", ") }) } })],
    }),
    defineField({ name: "logos", title: "Insurance logos", type: "array", of: [defineArrayMember({ type: "altImage" })] }),
  ],
  preview: { prepare: () => ({ title: "Topics checklist + insurance logos" }) },
});

export const iconFeatures = defineType({
  name: "iconFeatures",
  title: "Icon features (dark)",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
    paragraphs(),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "iconFeature",
          fields: [defineField({ name: "icon", type: "altImage" }), defineField({ name: "title", type: "string", validation: (r) => r.required() }), defineField({ name: "text", type: "text", rows: 3 })],
          preview: { select: { title: "title", media: "icon" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "heading" }, prepare: (v) => ({ title: v.title, subtitle: "Icon features" }) },
});

export const sectionTypes = ["hero", "textBand", "accordionFeature", "cardPair", "steps", "imageBand", "faqSection", "topics", "iconFeatures"];

export const sectionsField = defineField({
  name: "sections",
  title: "Page sections",
  type: "array",
  of: sectionTypes.map((type) => defineArrayMember({ type })),
  description: "The page from top to bottom. Drag to reorder.",
});

/* ---------- Home page parts ---------- */

export const card = defineType({
  name: "card",
  title: "Card",
  type: "object",
  fields: [defineField({ name: "image", type: "altImage" }), defineField({ name: "title", type: "string", validation: (r) => r.required() }), paragraphs()],
  preview: { select: { title: "title", media: "image" } },
});

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu item",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Link", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "children",
      title: "Dropdown items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "subMenuItem",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", title: "Link", type: "string", validation: (r) => r.required() }),
            defineField({ name: "children", title: "Second-level items", type: "array", of: [defineArrayMember({ type: "link" })] }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const objectTypes = [seo, altImage, link, hero, textBand, accordionFeature, cardPair, steps, imageBand, faqItem, faqSection, topics, iconFeatures, card, menuItem];
