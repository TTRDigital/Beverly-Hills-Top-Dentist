import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/lib/types";
import { Facebook, Google, Instagram, MapMarker, PhoneIcon } from "@/components/ui/Icons";

const SOCIAL = {
  facebook: { Icon: Facebook, bg: "bg-facebook", label: "Facebook" },
  instagram: { Icon: Instagram, bg: "bg-[#262626]", label: "Instagram" },
  google: { Icon: Google, bg: "bg-google", label: "Google" },
} as const;

/** Dark footer from the old site: logo, address and phone, social squares, working hours. */
export function Footer({ settings: s, areasLink = false }: { settings: SiteSettings; areasLink?: boolean }) {
  const address = `${s.street}, ${s.city}, ${s.region} ${s.postalCode}`;
  return (
    <footer className="mt-5 bg-ink text-white">
      <div className="container-x flex flex-col gap-10 py-5 md:flex-row md:gap-0">
        <div className="px-2.5 py-2.5 md:w-1/2">
          <Link href="/" aria-label={`${s.name}, home`} className="inline-block">
            <Image src={s.footerLogo.src} alt={s.footerLogo.alt || s.name} width={s.footerLogo.width} height={s.footerLogo.height} sizes="300px" className="h-auto w-[300px] max-w-full" />
          </Link>
          <ul className="mt-6 space-y-5 text-base leading-[1.2]">
            <li>
              <a href={s.mapsUrl} target="_blank" rel="noopener" className="flex items-start gap-3 transition-colors hover:text-brand-2">
                <MapMarker className="mt-0.5 h-[25px] w-[25px] shrink-0 p-[2px]" />
                <span className="max-w-[290px]">{address}</span>
              </a>
            </li>
            <li>
              <a href={s.phoneHref} data-track="click_to_call" className="flex items-center gap-3 transition-colors hover:text-brand-2">
                <PhoneIcon className="h-[25px] w-[25px] shrink-0 p-[1px]" />
                {s.phoneDisplay}
              </a>
            </li>
            {/* Shown once the Areas We Serve hub is approved (handoff: paused until then). */}
            {areasLink ? (
              <li>
                <Link href="/areas-we-serve/" className="flex items-center gap-3 transition-colors hover:text-brand-2">
                  <MapMarker className="h-[25px] w-[25px] shrink-0 p-[2px]" />
                  Areas We Serve
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        <ul className="flex gap-[5px] px-2.5 md:self-start md:py-2.5" aria-label="Social media">
          {s.social.map((x) => {
            const cfg = SOCIAL[x.network as keyof typeof SOCIAL];
            if (!cfg) return null;
            return (
              <li key={x.href}>
                <a href={x.href} target="_blank" rel="noopener" aria-label={cfg.label} className={`flex h-[50px] w-[50px] items-center justify-center text-white transition-opacity hover:opacity-90 ${cfg.bg}`}>
                  <cfg.Icon />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="px-2.5 py-2.5 md:ml-auto md:w-[30%]">
          <p className="text-2xl font-semibold leading-none">{s.hoursLabel}</p>
          <ul className="mt-5 space-y-[10px] text-base leading-[1.2]">
            {s.hours.map((h) => (
              <li key={h.day}>
                {h.day} - {h.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
