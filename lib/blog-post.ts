/*
 * Reads a blog post's body (plain paragraphs with "## " and "### " heading markers) into the parts the post page lays out:
 * the opening answer, the sections with anchor ids, the FAQ (a section whose "### " headings are questions) and the closing
 * invitation. Pure functions, so the schema can use them too. The text itself is never changed here.
 */
import type { Faq, Post, PostBlock, PostFigure } from "@/lib/types";
import { plainText, stripMarks } from "@/lib/text";

export const WORDS_PER_MINUTE = 220;

export type PostSection = { id: string; heading: string; paras: string[] };
export type PostFaq = { id: string; heading: string; intro: string[]; items: Faq[] };
export type PostOutline = {
  /** Paragraphs before the first heading. The first one is the direct answer. */
  intro: string[];
  sections: PostSection[];
  faq: PostFaq | null;
  /** The last paragraph(s) when they invite the reader to get in touch: shown after the FAQ as the article's ending. */
  closing: string[];
  words: number;
  minutes: number;
};

export const slugify = (s: string) =>
  stripMarks(s)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";

export const wordCount = (paras: string[] | undefined) => plainText(paras).split(/\s+/).filter(Boolean).length;
export const readingMinutes = (words: number) => Math.max(1, Math.round(words / WORDS_PER_MINUTE));
export const minutesFor = (post: Pick<Post, "body">) => readingMinutes(wordCount(post.body));
export const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

const isH2 = (p: string) => p.startsWith("## ");
const isH3 = (p: string) => p.startsWith("### ");
const invites = (p: string) => /\]\(\/appointment\/\)/.test(p);

export function outlinePost(body: string[]): PostOutline {
  const intro: string[] = [];
  const raw: { heading: string; paras: string[] }[] = [];
  for (const p of body) {
    if (isH2(p)) raw.push({ heading: p.slice(3).trim(), paras: [] });
    else if (raw.length) raw[raw.length - 1].paras.push(p);
    else intro.push(p);
  }
  const used = new Set<string>();
  const idFor = (heading: string) => {
    const base = slugify(heading);
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    return id;
  };
  const sections: PostSection[] = [];
  let faq: PostFaq | null = null;
  const closing: string[] = [];
  raw.forEach((s, i) => {
    const questions = s.paras.filter(isH3);
    const isFaq = !faq && questions.length >= 2 && questions.every((q) => stripMarks(q).trim().endsWith("?"));
    if (!isFaq) {
      sections.push({ id: idFor(s.heading), heading: s.heading, paras: s.paras });
      return;
    }
    const lead: string[] = [];
    const items: Faq[] = [];
    for (const p of s.paras) {
      if (isH3(p)) items.push({ question: p.slice(4).trim(), answer: [] });
      else if (items.length) items[items.length - 1].answer.push(p);
      else lead.push(p);
    }
    // The closing invitation ends the article, not the last answer.
    const last = items[items.length - 1];
    if (i === raw.length - 1 && last) {
      while (last.answer.length > 1 && invites(last.answer[last.answer.length - 1])) closing.unshift(last.answer.pop() as string);
    }
    faq = { id: idFor(s.heading), heading: s.heading, intro: lead, items };
  });
  const words = wordCount(body);
  return { intro, sections, faq, closing, words, minutes: readingMinutes(words) };
}

/** Site paths the body links to, in order, without repeats. */
export function linkedPaths(body: string[]): string[] {
  const out: string[] = [];
  for (const p of body) for (const m of p.matchAll(/\]\((\/[^)\s]*)\)/g)) if (!out.includes(m[1])) out.push(m[1]);
  return out;
}

export type Extras = { blocks: PostBlock[]; figures: PostFigure[] };
export type PlacedExtras = { top: Extras; before: (heading: string) => Extras };

const norm = (s: string) => stripMarks(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** Where each photo and block goes: above the heading it names, or under the opening answer when no heading matches. */
export function placeExtras(post: Pick<Post, "figures" | "blocks">, outline: PostOutline): PlacedExtras {
  const headings = [...outline.sections.map((s) => s.heading), ...(outline.faq ? [outline.faq.heading] : [])];
  const find = (h?: string) => (h ? headings.find((x) => x === h) ?? headings.find((x) => norm(x) === norm(h)) : undefined);
  const map = new Map<string, Extras>();
  const top: Extras = { blocks: [], figures: [] };
  const at = (h?: string) => {
    const key = find(h);
    if (!key) return top;
    if (!map.has(key)) map.set(key, { blocks: [], figures: [] });
    return map.get(key) as Extras;
  };
  for (const b of post.blocks ?? []) at(b.beforeHeading).blocks.push(b);
  for (const f of post.figures ?? []) at(f.beforeHeading).figures.push(f);
  return { top, before: (heading) => map.get(heading) ?? { blocks: [], figures: [] } };
}
