import "./globals.css";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata = { title: { absolute: "Page not found - Beverly Hills Dental" }, robots: { index: false } };

export default function NotFound() {
  return (
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
  );
}
