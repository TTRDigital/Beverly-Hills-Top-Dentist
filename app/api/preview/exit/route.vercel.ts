/* Leaves a draft preview (TTR-566) and opens the live home page. */
import { draftMode } from "next/headers";

export async function GET(request: Request) {
  (await draftMode()).disable();
  return new Response(null, { status: 307, headers: { Location: new URL("/", request.url).toString(), "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}
