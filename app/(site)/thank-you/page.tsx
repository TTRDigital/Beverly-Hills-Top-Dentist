import type { Metadata } from "next";
import { getCaseGroup, getHome, getThankYouPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { OurWork } from "@/components/sections/HomeSections";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata((await getThankYouPage()).seo, "/thank-you/");
}

export default async function ThankYouPage() {
  const [page, home, results] = await Promise.all([getThankYouPage(), getHome(), getCaseGroup("results")]);
  return (
    <>
      <section className="flex flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-20">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="mb-[22px] h-12 w-12 sm:mb-7 sm:h-14 sm:w-14" fill="none" stroke="#5B8C4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="11" />
          <path d="M17 8.5 10.5 15.5 7 12" />
        </svg>
        <h1 className="max-w-[720px] text-h1 font-semibold tracking-[-0.01em] text-[#1f2a33]">{page.heading}</h1>
        <p className="mt-4 max-w-[720px] text-[1.0625rem] leading-[1.55] text-[#4f5a52]">{page.text}</p>
      </section>
      <OurWork work={home.work} cases={results} />
    </>
  );
}
