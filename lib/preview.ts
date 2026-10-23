import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/*
 * Draft previews for TTR OS (TTR-566). TTR OS saves a page update as a Sanity draft and sends Kia, then the client, a signed
 * link: /api/preview?path=<page>&exp=<unix seconds>&sig=<hex HMAC-SHA256 of "<path>\n<exp>" with PREVIEW_SECRET>.
 * The same secret is saved (encrypted) in TTR OS, which tells Kia to name it PREVIEW_SECRET in Vercel. A valid link turns on Next.js draft mode for that browser and opens the
 * page; while it is on, Sanity reads use the drafts (SANITY_READ_TOKEN, a Viewer token). Vercel only: the SiteGround static
 * export has no server, so it never previews.
 */
export const PREVIEW_MAX_DAYS = 31;

/** Pure: is this signed link valid now? Returns the path to open, or why not. */
export function checkPreviewLink(
  q: { path: string | null; exp: string | null; sig: string | null },
  secret: string,
  now: Date,
): { ok: true; path: string } | { ok: false; why: string } {
  const { path, exp, sig } = q;
  if (!secret) return { ok: false, why: "Previews are not set up on this site." };
  if (!path || !/^\/(?!\/)[A-Za-z0-9\-._~/]*$/.test(path) || path.length > 300) return { ok: false, why: "That page address is not valid." };
  if (!exp || !/^\d{9,11}$/.test(exp)) return { ok: false, why: "This preview link is not valid." };
  const left = Number(exp) - Math.floor(now.getTime() / 1000);
  if (left <= 0) return { ok: false, why: "This preview link has expired. Ask TTR for a new one." };
  if (left > PREVIEW_MAX_DAYS * 86_400) return { ok: false, why: "This preview link is not valid." };
  if (!sig || !/^[0-9a-f]{64}$/.test(sig)) return { ok: false, why: "This preview link is not valid." };
  const want = createHmac("sha256", secret).update(`${path}\n${exp}`).digest();
  const got = Buffer.from(sig, "hex");
  if (got.length !== want.length || !timingSafeEqual(got, want)) return { ok: false, why: "This preview link is not valid." };
  return { ok: true, path };
}

/** Is this request in draft mode? False in the static export, at build time and anywhere outside a request. */
export async function isPreview(): Promise<boolean> {
  if (!process.env.VERCEL) return false;
  try {
    const { draftMode } = await import("next/headers");
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}
