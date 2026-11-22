/*
 * Pages that TTR OS writes into Sanity (TTR-1873): city pages and service pages, Sanity type "seoPage", at /<slug>/.
 * TTR OS (ttr-portal lib/connectors/sanity.ts, pieceToDoc) saves each page as a draft with:
 *   _type, title, path ("/<slug>/"), slug.current, body (Portable Text: h2-h4, normal, bullet and number lists, strong, em, links;
 *   photos as image blocks), seo { title, description, canonical, publishedTime, modifiedTime, schema }, and a featured photo.
 * The site shows the body in its own paragraph format (components/ui/RichText.tsx), so the page looks like the Areas We Serve pages.
 * Pure functions here so they can be tested without Next.js or Sanity.
 */

export type BodyImage = { src: string; alt: string; width: number; height: number };
export type BodyItem = { kind: "text"; text: string } | { kind: "image"; image: BodyImage };
export type FaqItem = { question: string; answer: string[] };

type Loose = Record<string, unknown>;
const list = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

/** The same question heading TTR OS uses for its FAQ structured data (ttr-portal lib/agents/seo/answers.ts). */
export const FAQ_HEADING = /\b(faq|frequently asked|questions)\b/i;

/** A link on this site becomes a site path (/services/.../), so it goes through the router; anything else stays as written. */
export function sitePath(href: string, siteUrl: string): string {
  try {
    const own = new URL(siteUrl);
    const u = new URL(href, own);
    const bare = (h: string) => h.replace(/^www\./, "");
    if (/^https?:$/.test(u.protocol) && bare(u.hostname) === bare(own.hostname)) return `${u.pathname}${u.search}${u.hash}`;
  } catch {
    /* not a URL: kept as written */
  }
  return href;
}

/** The text of one Portable Text block in the site's format: **bold** and [words](/path/) links. Italics show as plain text. */
function blockText(b: Loose, siteUrl: string): string {
  const defs = new Map(list<Loose>(b.markDefs).map((d) => [String(d._key ?? ""), d]));
  return list<Loose>(b.children)
    .map((c) => {
      let t = String(c.text ?? "");
      if (!t) return "";
      const marks = list<string>(c.marks);
      // "*" and "[" inside the words would be read as formatting; they are rare in this text, so they are dropped.
      t = t.replace(/\*\*/g, "");
      if (marks.includes("strong") && t.trim()) t = `**${t}**`;
      const link = marks.map((m) => defs.get(m)).find((d) => d && d._type === "link" && typeof d.href === "string");
      if (link) t = `[${t.replace(/[[\]]/g, "")}](${sitePath(String(link.href), siteUrl).replace(/[()\s]/g, (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")}`)})`;
      return t;
    })
    .join("");
}

/**
 * Portable Text (as TTR OS writes it) to the site's paragraphs and photos, in order. Plain strings (typed in Studio) pass through.
 * h2 starts "## ", h3 and h4 "### ", list items "- " or "1. " (components/ui/RichText.tsx and lib/text-blocks.ts).
 */
export function bodyItems(body: unknown, siteUrl: string): BodyItem[] {
  const out: BodyItem[] = [];
  for (const raw of list<unknown>(body)) {
    if (typeof raw === "string") {
      if (raw.trim()) out.push({ kind: "text", text: raw });
      continue;
    }
    const b = (raw ?? {}) as Loose;
    if (b._type === "image") {
      const src = typeof b.src === "string" ? b.src : "";
      if (src) out.push({ kind: "image", image: { src, alt: String(b.alt ?? ""), width: Number(b.width) || 1200, height: Number(b.height) || 800 } });
      continue;
    }
    if (b._type !== "block") continue;
    const text = blockText(b, siteUrl).trim();
    if (!text) continue;
    const style = String(b.style ?? "normal");
    if (b.listItem === "bullet") out.push({ kind: "text", text: `- ${text}` });
    else if (b.listItem === "number") out.push({ kind: "text", text: `1. ${text}` });
    else if (style === "h2") out.push({ kind: "text", text: `## ${text}` });
    else if (style === "h3" || style === "h4") out.push({ kind: "text", text: `### ${text}` });
    else out.push({ kind: "text", text });
  }
  return out;
}

/**
 * The body around its question section: everything before it, the questions (each "### " heading with the paragraphs under it),
 * and everything after it. The question section is the first "## " heading that names questions or an FAQ and holds at least
 * one "### " question; without one, the whole body is `before`.
 */
export function splitFaq(items: BodyItem[]): { before: BodyItem[]; faq: { heading: string; items: FaqItem[] } | null; after: BodyItem[] } {
  const isH2 = (i: BodyItem) => i.kind === "text" && i.text.startsWith("## ");
  for (let at = 0; at < items.length; at++) {
    const h = items[at];
    if (h.kind !== "text" || !isH2(h) || !FAQ_HEADING.test(h.text)) continue;
    let end = at + 1;
    while (end < items.length && !isH2(items[end])) end++;
    const faqs: FaqItem[] = [];
    let cur: FaqItem | null = null;
    for (const i of items.slice(at + 1, end)) {
      if (i.kind !== "text") continue;
      if (i.text.startsWith("### ")) {
        cur = { question: i.text.slice(4).trim(), answer: [] };
        faqs.push(cur);
      } else if (cur) cur.answer.push(i.text);
    }
    const answered = faqs.filter((f) => f.question && f.answer.length);
    if (!answered.length) continue;
    return { before: items.slice(0, at), faq: { heading: h.text.slice(3).trim(), items: answered }, after: items.slice(end) };
  }
  return { before: items, faq: null, after: [] };
}

/** The page's slug from its address or slug field: one lowercase path segment, or null. */
export function cleanSlug(v: unknown): string | null {
  const s = typeof v === "string" ? v.replace(/^\/+|\/+$/g, "") : "";
  return /^[a-z0-9][a-z0-9-]{0,120}$/.test(s) ? s : null;
}
