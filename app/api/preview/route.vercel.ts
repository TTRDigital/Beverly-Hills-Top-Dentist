/* Opens a TTR OS draft preview (TTR-566): checks the signed link, turns on draft mode, then opens the page on this site. */
import { draftMode } from "next/headers";
import { checkPreviewLink } from "@/lib/preview";

const plain = (status: number, text: string) =>
  new Response(text, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });

export async function GET(request: Request) {
  const url = new URL(request.url);
  const r = checkPreviewLink(
    { path: url.searchParams.get("path"), exp: url.searchParams.get("exp"), sig: url.searchParams.get("sig") },
    process.env.SANITY_PREVIEW_SECRET || "",
    new Date(),
  );
  if (!r.ok) return plain(r.why.startsWith("Previews are not") ? 503 : 401, r.why);
  (await draftMode()).enable();
  // Same site only: the path was checked above, so this can never send the visitor elsewhere.
  return new Response(null, { status: 307, headers: { Location: new URL(r.path, url.origin).toString(), "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}
