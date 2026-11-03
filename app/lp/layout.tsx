import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { Analytics } from "@/components/layout/Analytics";
import { AttributionCapture } from "@/components/forms/AttributionCapture";
import { PRACTICE } from "@/lib/lp-pages";

/*
 * Landing pages for the ChatGPT Ads (TTR-1156): a compact header with the logo and the call button, no site menu, the privacy
 * link in the footer, and noindex (still crawlable, so ad review can read them; they are not in the sitemap).
 */
export const metadata: Metadata = { robots: { index: false, follow: false } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#edf2ed" };

export default function LpLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded bg-brand px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <header className="bg-header">
        <div className="container-x flex h-[68px] items-center justify-between gap-4 sm:h-20">
          <Link href="/" aria-label={`${PRACTICE.name}, home`} className="shrink-0">
            <Image src="/images/brand/logo-300.png" alt={PRACTICE.name} width={300} height={71} priority sizes="(min-width: 640px) 240px, 180px" className="h-auto w-[180px] sm:w-[240px]" />
          </Link>
          <a href={PRACTICE.tel} data-track="click_to_call" data-track-page="lp-header" className="inline-flex min-h-[44px] items-center justify-center rounded-[3px] bg-brand px-4 text-[15px] font-bold text-white hover:bg-brand-2 sm:px-6 sm:text-[16px]">
            <span className="sr-only">Call </span>{PRACTICE.phone}
          </a>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="pb-[76px] outline-none lg:pb-0">{children}</main>
      <footer className="bg-ink pb-[96px] pt-8 text-[14px] text-white/85 lg:pb-8">
        <div className="container-x flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{PRACTICE.name} · {PRACTICE.address}</p>
          <p><Link href="/privacy-policy/" className="underline hover:text-white">Privacy policy</Link></p>
        </div>
      </footer>
      <AttributionCapture />
      <Analytics />
    </>
  );
}
