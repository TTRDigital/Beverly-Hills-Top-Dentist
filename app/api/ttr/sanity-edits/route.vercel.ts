/*
 * Applies a reviewed list of Sanity edits (lib/sanity-edits/<set>.json) to the live CMS, for TTR agents only. Vercel only
 * (files named *.vercel.ts are not part of the static SiteGround build).
 *
 *   POST /api/ttr/sanity-edits/   Authorization: Bearer <TTR agent key>   body: { "set": "photo-swap", "apply": false }
 *
 * - The key is checked against TTR OS (GET ttr-portal /api/v1/me); anything but a 2xx answer is refused.
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

const SETS: Record<string, EditSet> = { "photo-swap": photoSwap as EditSet };
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
    const me = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    return me && typeof me === "object" ? me : {};
  } catch {
    return null;
  }
}

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

  let body: { set?: unknown; apply?: unknown };
  try {
    body = JSON.parse((await request.text()).slice(0, 4096) || "{}");
  } catch {
    return reply(400, { ok: false, error: "Body must be JSON: { \"set\": \"photo-swap\", \"apply\": false }." });
  }
  const set = typeof body.set === "string" ? SETS[body.set] : undefined;
  if (!set) return reply(400, { ok: false, error: `Unknown set. Known sets: ${Object.keys(SETS).join(", ")}.` });
  const apply = body.apply === true;
  const token = process.env.SANITY_WRITE_TOKEN || "";
  if (apply && !token) return reply(503, { ok: false, error: "SANITY_WRITE_TOKEN is not set on this deployment, so nothing can be written. A dry run still works." });

  const ids = [...new Set(set.edits.map((e) => e.doc))];
  let docs: SanityDoc[];
  let drafts: string[];
  try {
    docs = await query<SanityDoc[]>("*[_id in $ids]", { ids }, token || undefined);
    drafts = token ? await query<string[]>("*[_id in $ids]._id", { ids: ids.map((id) => `drafts.${id}`) }, token) : [];
  } catch (e) {
    return reply(502, { ok: false, error: (e as Error).message });
  }
  const { rows, patches } = plan(set, new Map(docs.map((d) => [d._id, d])));
  const count = (s: string) => rows.filter((r) => r.status === s).length;
  const summary = {
    set: set.name,
    source: set.source,
    mode: apply ? "apply" : "dry run",
    agent: me.email ?? me.name ?? me.id ?? null,
    fields: { total: rows.length, change: count("change"), done: count("done"), skip: count("skip") },
    documents: patches.length,
    draftsToCheck: drafts.map((d) => d.replace(/^drafts\./, "")),
    canWrite: !!token,
  };
  if (!apply) return reply(200, { ok: true, ...summary, rows, patches });
  if (!patches.length) return reply(200, { ok: true, ...summary, note: "Nothing to change.", rows });

  const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}?returnIds=true&visibility=sync`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ mutations: patches }),
    cache: "no-store",
  });
  const out = await res.json().catch(() => ({}));
  if (!res.ok) return reply(502, { ok: false, ...summary, error: "Sanity refused the transaction; nothing was changed.", sanity: out, rows });
  return reply(200, { ok: true, ...summary, transactionId: (out as { transactionId?: string }).transactionId, note: "Applied. Redeploy on Vercel so the pages pick it up.", rows });
}
