import { isPreview } from "@/lib/preview";

/*
 * TTR OS's "Suggest a change" bar (TTR-585), only in a TTR OS draft preview or on a Vercel preview, never on the
 * live site. It does nothing unless the page was opened from the client's private review link (a review token
 * after #); the client highlights words on the draft and leaves notes for TTR. The site's CSP already allows
 * ttr-portal.vercel.app.
 */
export async function ReviewBar() {
  if (process.env.VERCEL_ENV !== "preview" && !(await isPreview())) return null;
  return <script defer src="https://ttr-portal.vercel.app/api/site/notes/bar" />;
}
