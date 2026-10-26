import type { Faq, Post, SiteSettings, TeamMember, Testimonial } from "@/lib/types";
import { authorFor, categoryFor } from "@/lib/data/blog";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { images } from "@/lib/data/images";
import { plainText } from "@/lib/text";
import { outlinePost } from "@/lib/blog-post";
import { PROFILE_PATH, drShirProfile } from "@/lib/data/profile";

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
    // Dr. Shir is the same Person as on her profile page (one @id), so search engines tie her to this practice.
    ...(principal ? { employee: drShirSchema(principal.photo, false) } : {}),
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

export const drShirId = `${siteUrl}/#dr-nushin-shir`;

/**
 * Dr. Shir as a Person: education, credentials, awards and her current practice (worksFor the Dentist entity), with sameAs
 * only to her current profiles. Used on her profile page and inside the site-wide Dentist entity (without worksFor there).
 */
export function drShirSchema(photo = drShirProfile.photo, withContext = true) {
  const p = drShirProfile;
  return {
    ...(withContext ? { "@context": "https://schema.org" } : {}),
    "@type": "Person",
    "@id": drShirId,
    name: "Nushin Shir",
    honorificPrefix: "Dr.",
    honorificSuffix: p.credentials,
    jobTitle: "Dentist",
    description: p.intro[0],
    url: absoluteUrl(PROFILE_PATH),
    image: { "@type": "ImageObject", url: abs(photo.src), caption: p.photo.alt },
    ...(withContext ? { worksFor: { "@id": `${siteUrl}/#dentist` }, workLocation: { "@id": `${siteUrl}/#dentist` } } : {}),
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "UCLA School of Dentistry" },
      { "@type": "CollegeOrUniversity", name: "University of California, Los Angeles" },
      { "@type": "CollegeOrUniversity", name: "University of California, Irvine" },
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Doctor of Dental Surgery (DDS)", recognizedBy: { "@type": "CollegeOrUniversity", name: "UCLA School of Dentistry" } },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Master of Public Health (MPH), epidemiology", recognizedBy: { "@type": "CollegeOrUniversity", name: "University of California, Los Angeles" } },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Master of Public Health (MPH), health care policy", recognizedBy: { "@type": "CollegeOrUniversity", name: "University of California, Los Angeles" } },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Bachelor's degree, biological sciences", recognizedBy: { "@type": "CollegeOrUniversity", name: "University of California, Irvine" } },
    ],
    award: ["America's Top Dentist (2010, 2011, 2012, 2013, 2015)", "Top Southern California Dentists (2014)"],
    knowsAbout: ["General dentistry", "Restorative dentistry", "Cosmetic dentistry", "Dental implants", "Public health"],
    sameAs: p.sameAs,
  };
}

/** The profile page itself, about Dr. Shir. */
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(PROFILE_PATH)}#page`,
    url: absoluteUrl(PROFILE_PATH),
    name: drShirProfile.seo.title,
    mainEntity: { "@id": drShirId },
    about: { "@id": drShirId },
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

/** A blog post: who wrote it (with the author page), when, what it is about and which part of the site it supports. */
export function postSchema(post: Post) {
  const a = authorFor(post.author), c = categoryFor(post.category);
  const { words, minutes } = outlinePost(post.body);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(`/blog/${post.slug}/`)}#article`,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`),
    headline: post.title,
    ...(post.excerpt ? { description: plainText([post.excerpt]) } : {}),
    datePublished: post.date,
    dateModified: post.date,
    ...(post.image ? { image: abs(post.image.src) } : {}),
    wordCount: words,
    timeRequired: `PT${minutes}M`,
    author: {
      "@type": "Person",
      ...(a.url === PROFILE_PATH ? { "@id": drShirId } : {}),
      name: `${a.name}, ${a.credentials}`,
      jobTitle: a.jobTitle,
      url: absoluteUrl(a.url),
      image: abs(a.image.src),
      worksFor: { "@id": `${siteUrl}/#dentist` },
    },
    publisher: { "@id": `${siteUrl}/#dentist` },
    ...(c ? { articleSection: c.name, about: { "@type": "Thing", name: c.name, url: absoluteUrl(post.service || c.path) } } : {}),
    inLanguage: "en-US",
  };
}
