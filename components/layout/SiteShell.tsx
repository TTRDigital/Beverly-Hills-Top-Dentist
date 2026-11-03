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
  // The practice's name is Beverly Hills Dental Arts Studio. The logo images stored in Sanity still spell "ART", so the corrected
  // files in /images/brand/ are used until the practice's final logo is uploaded (TTR-1146).
  const logo = { ...settings.logo, src: "/images/brand/logo.png", width: 1607, height: 378 };
  const footerLogo = { ...settings.footerLogo, src: "/images/brand/logo-300.png", width: 300, height: 71 };
  // The logo and most hero photos come from Sanity's image CDN: open that connection early.
  preconnect("https://cdn.sanity.io");
  return (
    <>
      <JsonLd data={businessSchema(settings, team, testimonials)} />
      <a href="#main" className="sr-only z-[100] rounded bg-brand px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Header menu={settings.menu} cta={settings.headerCta} phone={settings.phone} phoneHref={settings.phoneHref} logo={logo} siteName={settings.name} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer settings={{ ...settings, footerLogo }} areasLink={areas.approved} />
      <ChatWidget />
      <AttributionCapture />
      <HydrationSignal />
      <Analytics />
      <script dangerouslySetInnerHTML={{ __html: revealScript }} />
    </>
  );
}
