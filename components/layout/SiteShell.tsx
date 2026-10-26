import type { ReactNode } from "react";
import { preconnect } from "react-dom";
import { getAreasHub, getSiteSettings, getTeam, getTestimonials } from "@/lib/content";
import { businessSchema } from "@/lib/schema";
import { revealScript } from "@/lib/reveal-script";
import { JsonLd } from "@/components/ui/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Analytics } from "@/components/layout/Analytics";
import { HydrationSignal } from "@/components/layout/HydrationSignal";
import { AttributionCapture } from "@/components/forms/AttributionCapture";

/** Header, footer and site-wide behaviors. Used by the site layout and the 404 page. */
export async function SiteShell({ children }: { children: ReactNode }) {
  const [settings, team, testimonials, areas] = await Promise.all([getSiteSettings(), getTeam(), getTestimonials(), getAreasHub()]);
  // The logo and most hero photos come from Sanity's image CDN: open that connection early.
  preconnect("https://cdn.sanity.io");
  return (
    <>
      <JsonLd data={businessSchema(settings, team, testimonials)} />
      <a href="#main" className="sr-only z-[100] rounded bg-brand px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Header menu={settings.menu} cta={settings.headerCta} phone={settings.phone} phoneHref={settings.phoneHref} logo={settings.logo} siteName={settings.name} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer settings={settings} areasLink={areas.approved} />
      <ChatWidget />
      <AttributionCapture />
      <HydrationSignal />
      <Analytics />
      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </>
  );
}
