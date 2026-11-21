/* Refreshes cached Sanity content after a publish (TTR-2639): a signed Sanity webhook, see lib/revalidate.ts. */
import { revalidatePath, revalidateTag } from "next/cache";
import { checkSignature, refreshTargets } from "@/lib/revalidate";

const json = (status: number, data: unknown) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return json(503, { ok: false, error: "Refresh is not set up on this site." });

  const body = await request.text();
  if (body.length > 100_000) return json(413, { ok: false, error: "Body too large." });
  if (!checkSignature(request.headers.get("sanity-webhook-signature"), body, secret)) {
    return json(401, { ok: false, error: "Bad signature." });
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(body);
  } catch {
    return json(400, { ok: false, error: "Body is not JSON." });
  }
  const { tags, path } = refreshTargets(parsed);
  if (!tags.length && !path) return json(400, { ok: false, error: "Nothing to refresh: no _id, _type or path." });

  // expire 0: the next visit reads fresh content instead of being served the old copy once more.
  for (const tag of tags) revalidateTag(tag, { expire: 0 });
  if (path) revalidatePath(path);
  return json(200, { ok: true, tags, path, now: Date.now() });
}
