/*
 * Applies a reviewed list of Sanity edits (lib/sanity-edits/<set>.json) to the live CMS, for TTR agents only. Vercel only
 * (files named *.vercel.ts are not part of the static SiteGround build).
 *
 *   POST /api/ttr/sanity-edits/   Authorization: Bearer <TTR agent key>   body: { "set": "photo-swap", "apply": false }
 *   Optional "exclude": ["homePage", "beforeAfterPage"] leaves those documents untouched (rows reported as "excluded").
 *
 * - The key is checked against TTR OS (GET ttr-portal /api/v1/me), as on Ideal's seed route: only kind "owner", or kind
 *   "agent" with role "build_lead", may use it (403 for any other agent); a missing or unknown key is a 401.
 * - Dry run by default: it reads the documents and reports, field by field, what would change, what is already done and
 *   what it would skip. Only { "apply": true } writes, in one transaction that fails if a document changed meanwhile.
 * - Writes need SANITY_WRITE_TOKEN (an Editor token) in Vercel > Settings > Environment Variables, Production only.
 *   Without it a dry run still works from the public API; applying is refused.
 * - Only published documents are changed. A document with an unpublished draft is reported, so the draft can be checked.
 * The live pages read Sanity at build time, so redeploy on Vercel after applying.
 */
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { plan, type EditSet, type SanityDoc } from "@/lib/sanity-edits/plan";
import photoSwap from "@/lib/sanity-edits/photo-swap.json";
import sculptureSwap from "@/lib/sanity-edits/sculpture-swap.json";

const SETS: Record<string, EditSet> = { "photo-swap": photoSwap as EditSet, "sculpture-swap": sculptureSwap as EditSet };
const PORTAL = (process.env.TTR_PORTAL_URL || "https://ttr-portal.vercel.app").replace(/\/$/, "");

const reply = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

/** Who is asking, per TTR OS. Null when the key is missing or not accepted. */
async function agent(request: Request): Promise<Record<string, unknown> | null> {
  const auth = request.headers.get("authorization") ?? "";
  if (!/^Bearer \S{16,}$/.test(auth)) return null;
  try {
    const res = await fetch(`${PORTAL}/api/v1/me`, { headers: { Authorization: auth, Accept: "application/json" }, cache: "no-store" });
    if (!res.ok) return null;
    const me = (await res.json().catch(() => null)) as Record<string, unknown> | null;
    return me && typeof me === "object" && !Array.isArray(me) ? me : null;
  } catch {
    return null;
  }
}

/** A valid key is not enough: only the owner or a build lead may change the live CMS (social, browser and other agents may not). */
const mayEdit = (me: Record<string, unknown>) => me.kind === "owner" || (me.kind === "agent" && me.role === "build_lead");

async function query<T>(groq: string, params: Record<string, unknown>, token?: string): Promise<T> {
  const search = new URLSearchParams({ query: groq, perspective: "raw" });
  for (const [k, v] of Object.entries(params)) search.set(`$${k}`, JSON.stringify(v));
  const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?${search}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Sanity query failed (${res.status})`);
  return (await res.json()).result as T;
}

export async function POST(request: Request) {
  const me = await agent(request);
  if (!me) return reply(401, { ok: false, error: "A TTR agent key is required (Authorization: Bearer <key>)." });
  if (!mayEdit(me)) return reply(403, { ok: false, error: "This key may not change the CMS: only the owner or a build lead can." });

  let body: { set?: unknown; apply?: unknown; exclude?: unknown };
  try {
    body = JSON.parse((await request.text()).slice(0, 4096) || "{}");
  } catch {
    return reply(400, { ok: false, error: "Body must be JSON: { \"set\": \"photo-swap\", \"apply\": false }." });
  }
  const set = typeof body.set === "string" ? SETS[body.set] : undefined;
  if (!set) return reply(400, { ok: false, error: `Unknown set. Known sets: ${Object.keys(SETS).join(", ")}.` });
  const apply = body.apply === true;
  const exclude = body.exclude ?? [];
  if (!Array.isArray(exclude) || exclude.length > 100 || !exclude.every((x) => typeof x === "string")) {
    return reply(400, { ok: false, error: "\"exclude\" must be a list of document ids, e.g. [\"homePage\", \"beforeAfterPage\"]." });
  }
  const token = process.env.SANITY_WRITE_TOKEN || "";
  if (apply && !token) return reply(503, { ok: false, error: "SANITY_WRITE_TOKEN is not set on this deployment, so nothing can be written. A dry run still works." });

  const ids = [...new Set(set.edits.map((e) => e.doc))].filter((id) => !exclude.includes(id));
  let docs: SanityDoc[];
  let drafts: string[];
  try {
    docs = await query<SanityDoc[]>("*[_id in $ids]", { ids }, token || undefined);
    drafts = token ? await query<string[]>("*[_id in $ids]._id", { ids: ids.map((id) => `drafts.${id}`) }, token) : [];
  } catch (e) {
    return reply(502, { ok: false, error: (e as Error).message });
  }
  const { rows, patches } = plan(set, new Map(docs.map((d) => [d._id, d])), exclude);
  const count = (s: string) => rows.filter((r) => r.status === s).length;
  const summary = {
    set: set.name,
    source: set.source,
    mode: apply ? "apply" : "dry run",
    agent: me.email ?? me.name ?? me.id ?? null,
    fields: { total: rows.length, change: count("change"), done: count("done"), skip: count("skip"), excluded: count("excluded") },
    excluded: exclude,
    excludeNotInSet: exclude.filter((id) => !set.edits.some((e) => e.doc === id)),
    documents: patches.length,
    draftsToCheck: drafts.map((d) => d.replace(/^drafts\./, "")),
    canWrite: !!token,
  };
  // a set may need its new photo in Sanity first: check it, and on apply upload it from this site (the id is the file's hash, so a wrong file is refused)
  let upload: string | undefined;
  if (set.upload) {
    try {
      const have = await query<string[]>("*[_id == $id]._id", { id: set.upload.id }, token || undefined);
      upload = have.length ? "already in Sanity" : "not in Sanity yet";
      if (apply && !have.length) {
        const img = await fetch(new URL(set.upload.url, request.url), { cache: "no-store" });
        if (!img.ok) return reply(502, { ok: false, ...summary, error: `Could not read ${set.upload.url} from this site (${img.status}). Deploy the photo first.` });
        const bytes = await img.arrayBuffer();
        const up = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/assets/images/${dataset}?filename=${encodeURIComponent(set.upload.filename)}`, {
          method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "image/jpeg" }, body: bytes, cache: "no-store",
        });
        const upJson = (await up.json().catch(() => ({}))) as { document?: { _id?: string } };
        if (!up.ok) return reply(502, { ok: false, ...summary, error: "Sanity refused the photo upload; nothing was changed.", sanity: upJson });
        if (upJson.document?._id !== set.upload.id) return reply(502, { ok: false, ...summary, error: `The uploaded photo got id ${upJson.document?._id}, not the expected ${set.upload.id}. Nothing was changed.` });
        upload = "uploaded";
      }
    } catch (e) {
      return reply(502, { ok: false, ...summary, error: (e as Error).message });
    }
  }
  if (!apply) return reply(200, { ok: true, ...summary, upload, rows, patches });
  if (!patches.length) return reply(200, { ok: true, ...summary, note: "Nothing to change.", rows });

  const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}?returnIds=true&visibility=sync`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ mutations: patches }),
    cache: "no-store",
  });
  const out = await res.json().catch(() => ({}));
  if (!res.ok) return reply(502, { ok: false, ...summary, error: "Sanity refused the transaction; nothing was changed.", sanity: out, rows });
  // an old photo the set replaced is deleted from Sanity once nothing refers to it (Sanity refuses to delete a referenced asset, so a leftover use keeps it)
  let deleted: string | undefined;
  if (set.deleteAsset) {
    try {
      const refs = await query<string[]>("*[references($id)]._id", { id: set.deleteAsset }, token);
      if (refs.length) deleted = `kept: still used by ${refs.join(", ")}`;
      else {
        const del = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ mutations: [{ delete: { id: set.deleteAsset } }] }), cache: "no-store" });
        deleted = del.ok ? "old photo deleted from Sanity" : `kept: Sanity said ${del.status}`;
      }
    } catch (e) { deleted = `kept: ${(e as Error).message}`; }
  }
  return reply(200, { ok: true, ...summary, transactionId: (out as { transactionId?: string }).transactionId, oldPhoto: deleted, note: "Applied. Redeploy on Vercel so the pages pick it up.", rows });
}
