/*
 * Turns a list of image swaps (lib/sanity-edits/*.json) into Sanity patches, checking each field first. Pure functions:
 * the route (app/api/ttr/sanity-edits/route.vercel.ts) fetches the documents and sends the mutations.
 *
 * A field is changed only when it still holds the expected old image, so running twice, or after someone edited the field
 * in /cms, never overwrites newer work. A hero whose photo changes also gets the left shade, as on the repo's pages.
 */
export type ImageEdit = { doc: string; path: string; from: string; to: string; alt: string; fromFile: string; toFile: string };
export type EditSet = { name: string; source: string; edits: ImageEdit[] };
export type SanityDoc = { _id: string; _rev: string; [k: string]: unknown };

export type Planned = { doc: string; path: string; status: "change" | "done" | "skip" | "excluded"; why?: string; fromFile: string; toFile: string };
export type Patch = { patch: { id: string; ifRevisionID: string; set: Record<string, unknown> } };

type Seg = { key: string } | { match: string } | { index: number };

/** Splits a path like `sections[_key=="k7u"].cards[0].image` into its steps. */
export function parsePath(path: string): Seg[] {
  const segs: Seg[] = [];
  const re = /([A-Za-z_][\w]*)|\[_key=="([^"]+)"\]|\[(\d+)\]|\./g;
  let m: RegExpExecArray | null;
  let at = 0;
  while ((m = re.exec(path))) {
    if (m.index !== at) throw new Error(`Bad path: ${path}`);
    at = re.lastIndex;
    if (m[1]) segs.push({ key: m[1] });
    else if (m[2]) segs.push({ match: m[2] });
    else if (m[3]) segs.push({ index: Number(m[3]) });
  }
  if (at !== path.length) throw new Error(`Bad path: ${path}`);
  return segs;
}

/** The value at a path, or undefined. */
export function resolve(doc: unknown, path: string): unknown {
  let cur: unknown = doc;
  for (const s of parsePath(path)) {
    if (cur == null) return undefined;
    if ("key" in s) cur = (cur as Record<string, unknown>)[s.key];
    else if ("index" in s) cur = Array.isArray(cur) ? cur[s.index] : undefined;
    else cur = Array.isArray(cur) ? cur.find((x) => (x as { _key?: string })?._key === s.match) : undefined;
  }
  return cur;
}

/** `sections[_key=="x"].image` -> `sections[_key=="x"]` when that item is a hero, else null. */
function heroOf(doc: SanityDoc, path: string): string | null {
  const m = path.match(/^(sections\[_key=="[^"]+"\])\.image$/);
  if (!m) return null;
  const section = resolve(doc, m[1]) as { _type?: string } | undefined;
  return section?._type === "hero" ? m[1] : null;
}

/**
 * Checks every edit against the current documents and builds one patch per document. Documents listed in `exclude` are
 * left untouched: their rows are reported as "excluded" and they get no patch.
 */
export function plan(set: EditSet, docs: Map<string, SanityDoc>, exclude: string[] = []): { rows: Planned[]; patches: Patch[] } {
  const rows: Planned[] = [];
  const sets = new Map<string, Record<string, unknown>>();
  const skipDocs = new Set(exclude);
  for (const e of set.edits) {
    const base = { doc: e.doc, path: e.path, fromFile: e.fromFile, toFile: e.toFile };
    if (skipDocs.has(e.doc)) {
      rows.push({ ...base, status: "excluded", why: "document excluded in this request" });
      continue;
    }
    const doc = docs.get(e.doc);
    if (!doc) {
      rows.push({ ...base, status: "skip", why: "document not found" });
      continue;
    }
    const ref = (resolve(doc, e.path) as { asset?: { _ref?: string } } | undefined)?.asset?._ref;
    if (ref === e.to) {
      rows.push({ ...base, status: "done", why: "already the new photo" });
      continue;
    }
    if (ref !== e.from) {
      rows.push({ ...base, status: "skip", why: ref ? `field now holds ${ref}, not the old photo` : "field is empty or gone" });
      continue;
    }
    const s = sets.get(e.doc) ?? {};
    s[`${e.path}.asset._ref`] = e.to;
    s[`${e.path}.alt`] = e.alt;
    const hero = heroOf(doc, e.path);
    if (hero) {
      s[`${hero}.overlay`] = "left";
      s[`${hero}.overlayOpacity`] = 0.7;
    }
    sets.set(e.doc, s);
    rows.push({ ...base, status: "change" });
  }
  const patches: Patch[] = [...sets].map(([id, set]) => ({ patch: { id, ifRevisionID: (docs.get(id) as SanityDoc)._rev, set } }));
  return { rows, patches };
}
