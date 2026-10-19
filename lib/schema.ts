import type { Faq, SiteSettings, TeamMember, Testimonial } from "@/lib/types";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { images } from "@/lib/data/images";
import { plainText } from "@/lib/text";

const abs = (src: string) => (src.startsWith("http") ? src : absoluteUrl(src));

/** Dentist (a LocalBusiness) for the whole site, from the practice's own address, phone and hours. */
export function businessSchema(s: SiteSettings, team: TeamMember[] = [], testimonials: Testimonial[] = []) {
  // Days with the same hours are grouped, like the old site's own schema.
  const groups = new Map<string, string[]>();
  for (const h of s.hours) {
    if (!h.opens || !h.closes) continue;
    const k = `${h.opens}-${h.closes}`;
    groups.set(k, [...(groups.get(k) ?? []), h.day]);
  }
  const principal = team.find((m) => /shir/i.test(m.name));
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": `${siteUrl}/#dentist`,
    name: s.legalName,
    alternateName: s.name,
    url: absoluteUrl("/"),
    telephone: `+1-${s.phone.replace(/\D/g, "").replace(/^1?(\d{3})(\d{3})(\d{4})$/, "$1-$2-$3")}`,
    image: abs(images.receptionDesk.src),
    logo: abs(s.logo.src),
    address: { "@type": "PostalAddress", streetAddress: s.street, addressLocality: s.city, addressRegion: s.region, postalCode: s.postalCode, addressCountry: "US" },
    ...(s.latitude && s.longitude ? { geo: { "@type": "GeoCoordinates", latitude: s.latitude, longitude: s.longitude } } : {}),
    ...(s.mapsUrl ? { hasMap: s.mapsUrl } : {}),
    openingHoursSpecification: [...groups].map(([k, days]) => {
      const [opens, closes] = k.split("-");
      return { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens, closes };
    }),
    // Neighborhoods patients travel from (Areas We Serve). The address stays the Beverly Hills office.
    areaServed: [
      { "@type": "City", name: "Beverly Hills" },
      { "@type": "Place", name: "Beverly Grove" },
      { "@type": "Place", name: "Century City" },
      { "@type": "City", name: "West Hollywood" },
      { "@type": "City", name: "Culver City" },
      { "@type": "Place", name: "West Los Angeles" },
      { "@type": "Place", name: "Palms" },
      { "@type": "Place", name: "Hollywood" },
    ],
    sameAs: s.social.map((x) => x.href),
    ...(principal
      ? {
          employee: {
            "@type": "Person",
            name: principal.name,
            jobTitle: "Dentist",
            honorificSuffix: "DDS, MPH",
            alumniOf: [
              { "@type": "CollegeOrUniversity", name: "UCLA School of Dentistry" },
              { "@type": "CollegeOrUniversity", name: "University of California, Irvine" },
            ],
            ...(principal.photo ? { image: abs(principal.photo.src) } : {}),
          },
        }
      : {}),
    // Only real reviews entered in /cms are listed; the old site has none.
    ...(testimonials.length
      ? {
          review: testimonials.slice(0, 5).map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
            reviewBody: t.quote,
          })),
        }
      : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function faqPageSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      .filter((f) => f.answer.length)
      .map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: plainText(f.answer) } })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#dentist` },
  };
}

export const defaultShareImage = images.teamPhoto;
