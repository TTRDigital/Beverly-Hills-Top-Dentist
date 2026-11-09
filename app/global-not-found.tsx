import "./globals.css";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";

/*
 * The 404 page for addresses that match no route. It is rendered on its own, so the site menu (which the header carries as page data)
 * is not packed into every other page's HTML, the ad landing pages included. Looks the same as the old app/not-found.tsx.
 */
const urbanist = Urbanist({ subsets: ["latin"], display: "swap", variable: "--font-urbanist", weight: ["400", "500", "600", "700"] });

export const metadata = { title: { absolute: "Page not found - Beverly Hills Dental" }, robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <html lang="en-US" className={urbanist.variable} suppressHydrationWarning>
      <body>
        <SiteShell>
          <section className="bg-paper py-28 text-center">
            <div className="container-box">
              <h1 className="text-h1 font-semibold">Page not found</h1>
              <p className="mt-4">The page you were looking for has moved or no longer exists.</p>
              <Link href="/" className="mt-8 inline-block rounded-[6px] border border-black px-7 py-3 font-semibold transition-colors hover:border-brand-2 hover:bg-brand-2 hover:text-white">
                Back to the home page
              </Link>
            </div>
          </section>
        </SiteShell>
      </body>
    </html>
  );
}
