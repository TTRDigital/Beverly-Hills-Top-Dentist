import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { Analytics } from "@/components/layout/Analytics";
import { AttributionCapture } from "@/components/forms/AttributionCapture";
import { RequestButton } from "@/components/lp/RequestModal";
import { PRACTICE } from "@/lib/lp-pages";

/*
 * Landing pages for the ChatGPT Ads (TTR-1156): a slim header with the logo and the two actions (call, request), no site menu,
 * the privacy link in the footer, and noindex (still crawlable, so ad review can read them; not in the sitemap).
 */
export const metadata: Metadata = { robots: { index: false, follow: false } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#edf2ed" };

const css = `html{scroll-behavior:smooth}@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}.lp-rise{animation:none!important}}
@keyframes lp-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}.lp-rise{animation:lp-rise .7s var(--ease-out-expo,ease-out) both}.lp-rise-2{animation-delay:.12s}.lp-rise-3{animation-delay:.24s}
dialog[open]{animation:lp-rise .25s ease-out both}`;

export default function LpLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <a href="#main" className="sr-only z-[100] rounded bg-brand px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <header className="sticky top-0 z-40 bg-header/95 backdrop-blur">
        <div className="container-x flex h-[64px] items-center justify-between gap-3 sm:h-[76px]">
          <Link href="/" aria-label={`${PRACTICE.name}, home`} className="shrink-0">
            <Image src="/images/brand/logo-300.png" alt={PRACTICE.name} width={300} height={71} priority sizes="(min-width: 640px) 240px, 170px" className="h-auto w-[170px] sm:w-[240px]" />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={PRACTICE.tel} data-track="click_to_call" data-track-page="lp-header" className="inline-flex min-h-[42px] items-center justify-center rounded-[3px] border-2 border-brand px-3 text-[14px] font-bold text-brand transition-colors hover:bg-brand hover:text-white sm:px-5 sm:text-[15px]">
              <span className="sm:hidden">Call</span><span className="hidden sm:inline">Call {PRACTICE.phone}</span>
            </a>
            <RequestButton className="hidden min-h-[42px] items-center justify-center rounded-[3px] bg-brand px-5 text-[15px] font-bold text-white transition-colors hover:bg-brand-2 sm:inline-flex">Request an Appointment</RequestButton>
          </div>
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
      <Analytics pixelNow />
    </>
  );
}
