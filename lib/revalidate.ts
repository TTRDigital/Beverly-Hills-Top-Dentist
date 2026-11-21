import { createHmac, timingSafeEqual } from "node:crypto";

/*
 * On-demand refresh for TTR OS v2 (TTR-2639). A Sanity webhook POSTs the changed document to /api/revalidate with the header
 * sanity-webhook-signature: t=<unix ms>,v1=<base64url HMAC-SHA256 of "<t>.<raw body>" with SANITY_REVALIDATE_SECRET>.
 * A valid call refreshes the cached Sanity reads tagged with the document's id and type (lib/sanity/fetch.ts) and, when the
 * body names one, that page path. Vercel only: the SiteGround static export has no server and rebuilds on publish instead.
 * Pure functions here so they can be tested without Next.js.
 */

/** Is the signature header valid for this raw body? Constant-time compare of the HMAC bytes. */
export function checkSignature(header: string | null, body: string, secret: string): boolean {
  if (!header || !secret) return false;
  let t = "";
  const sigs: string[] = [];
  for (const part of header.split(",")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    const k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (k === "t") t = v;
    else if (k === "v1") sigs.push(v);
  }
  if (!/^\d{1,16}$/.test(t) || !sigs.length) return false;
  const want = createHmac("sha256", secret).update(`${t}.${body}`).digest();
  let ok = false;
  for (const s of sigs) {
    // base64url, padded or not ("base64" decoding in Node also reads the url-safe alphabet).
    if (!/^[A-Za-z0-9+/_-]{20,100}={0,2}$/.test(s)) continue;
    const got = Buffer.from(s, "base64");
    if (got.length === want.length && timingSafeEqual(got, want)) ok = true;
  }
  return ok;
}

const SAFE_PATH = /^\/(?!\/)[A-Za-z0-9\-._~/]*$/;
const SAFE_TAG = /^[A-Za-z0-9._\-]{1,200}$/;

/** Published id of a document: drafts.x and versions.<release>.x refresh the same reads as x. */
export function publishedId(id: string): string {
  if (id.startsWith("drafts.")) return id.slice("drafts.".length);
  const m = /^versions\.[^.]+\.(.+)$/.exec(id);
  return m ? m[1] : id;
}

/** Pure: the tags and page path to refresh for a webhook body. Unknown or unsafe values are left out, never trusted. */
export function refreshTargets(body: unknown): { tags: string[]; path: string | null } {
  const b = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const tags: string[] = [];
  const id = typeof b._id === "string" ? publishedId(b._id) : "";
  if (SAFE_TAG.test(id)) tags.push(id);
  const type = typeof b._type === "string" ? b._type : "";
  if (SAFE_TAG.test(type) && !tags.includes(type)) tags.push(type);
  const p = typeof b.path === "string" ? b.path : "";
  const path = p && p.length <= 300 && SAFE_PATH.test(p) && !p.split("/").includes("..") ? p : null;
  return { tags, path };
}
