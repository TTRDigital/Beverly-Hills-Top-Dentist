/* Content types shared by lib/data (built-in content), lib/content.ts (Sanity) and the components. */

export type Img = { src: string; alt: string; width: number; height: number };
export type Link = { label: string; href: string };
export type Seo = { title: string; description: string; noIndex?: boolean; image?: Img };

/** Paragraphs are plain strings; **double asterisks** mark bold text (see components/ui/RichText.tsx). */
export type Paragraphs = string[];

/* ---------- Sections of the treatment template (services, categories, McLean and root pages) ---------- */

export type Overlay = "none" | "dark" | "left";

export type HeroSection = {
  _type: "hero";
  _key?: string;
  heading: string;
  subheading?: string;
  text: Paragraphs;
  image?: Img;
  overlay: Overlay;
  overlayOpacity?: number;
};

export type TextBandSection = { _type: "textBand"; _key?: string; heading: string; text: Paragraphs; link?: Link; tone: "light" | "dark" };

export type AccordionFeatureSection = {
  _type: "accordionFeature";
  _key?: string;
  heading: string;
  text: Paragraphs;
  image?: Img;
  items: { title: string; body: Paragraphs }[];
  link?: Link;
};

export type CardPairSection = {
  _type: "cardPair";
  _key?: string;
  heading: string;
  text: Paragraphs;
  link?: Link;
  cards: { image?: Img; title: string; text: Paragraphs }[];
};

export type StepsSection = {
  _type: "steps";
  _key?: string;
  heading: string;
  text: Paragraphs;
  link?: Link;
  items: { icon?: Img; title: string; text: string }[];
};

export type ImageBandSection = { _type: "imageBand"; _key?: string; heading: string; text: Paragraphs; image?: Img; overlay: Overlay; overlayOpacity?: number };

export type Faq = { question: string; answer: Paragraphs };

export type FaqSection = { _type: "faq"; _key?: string; heading: string; text: Paragraphs; items: Faq[] };

export type TopicsSection = {
  _type: "topics";
  _key?: string;
  blocks: { heading: string; text: Paragraphs }[];
  columns: string[][];
  logos: Img[];
};

export type IconFeaturesSection = {
  _type: "iconFeatures";
  _key?: string;
  heading: string;
  text: Paragraphs;
  items: { icon?: Img; title: string; text: string }[];
};

export type Section =
  | HeroSection
  | TextBandSection
  | AccordionFeatureSection
  | CardPairSection
  | StepsSection
  | ImageBandSection
  | FaqSection
  | TopicsSection
  | IconFeaturesSection;

/** A page built from treatment-template sections. */
export type TreatmentPage = { slug: string; title: string; sections: Section[]; seo: Seo };

export type ServiceCategory = TreatmentPage & { order: number };
export type Service = TreatmentPage & { category: string; order: number };

/** McLean treatment pages and the other location-style pages, keyed by the folder they live in. */
export type LocationBase = "/locations/mclean/" | "/locations/" | "/";
export type LocationPage = TreatmentPage & { basePath: LocationBase; order: number };

/* ---------- Site ---------- */

export type MenuItem = { label: string; href: string; children?: MenuItem[] };

export type Hours = { day: string; value: string; opens?: string; closes?: string };

export type SiteSettings = {
  name: string;
  legalName: string;
  phone: string;
  phoneDisplay: string;
  phoneHref: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  latitude?: number;
  longitude?: number;
  mapsUrl?: string;
  hours: Hours[];
  hoursLabel: string;
  social: { network: "facebook" | "instagram" | "google" | "yelp" | "youtube" | "tiktok" | "x" | "linkedin"; href: string }[];
  headerCta: Link;
  menu: MenuItem[];
  logo: Img;
  footerLogo: Img;
  privacyPolicyUrl: string;
};

export type TeamMember = {
  id: string;
  name: string;
  heading: string;
  /** Phones show a shorter heading and bio for some members, exactly as on the old site. */
  mobileHeading?: string;
  bio: Paragraphs;
  mobileBio?: Paragraphs;
  photo?: Img;
  order: number;
};

export type BeforeAfterCase = {
  id: string;
  title: string;
  image: Img;
  /** results: home and thank-you carousel; gallery: before/after page grid (desktop); galleryMobile: before/after page carousel (phones). */
  groups: ("results" | "gallery" | "galleryMobile")[];
  order: number;
};

export type Testimonial = { quote: string; name: string; rating: number; source?: string };

export type Post = { slug: string; title: string; date: string; excerpt?: string; body: Paragraphs; image?: Img; seo: Seo };

/* ---------- Page singletons ---------- */

export type Card = { image?: Img; title: string; text: Paragraphs };

export type HomeContent = {
  hero: { heading: string; tagline: string; cta: Link; videoMp4?: string; videoWebm?: string; poster?: Img };
  intro: { heading: string; text: string; cards: Card[] };
  story: { heading: string; text: Paragraphs; cta: Link; slides: Img[] };
  technology: { heading: string; text: Paragraphs; items: { title: string; text: string; image?: Img }[] };
  work: { heading: string; text: string };
  values: { heading: string; text: string; cta: Link; cards: Card[] };
  seo: Seo;
};

export type AboutContent = {
  hero: { heading: string; text: string; image?: Img };
  intro: { heading: string; text: string };
  mission: { heading: string; text: string };
  seo: Seo;
};

export type BeforeAfterContent = { hero: { heading: string; text: string; image?: Img }; gallery: { heading: string; text: string }; seo: Seo };

export type AppointmentContent = { heading: string; image?: Img; hoursLabel: string; formButton: string; seo: Seo };

export type ThankYouContent = { heading: string; text: string; seo: Seo };

export type HubContent = { title: string; sections: Section[]; seo: Seo };

export type LegalContent = { title: string; body: Paragraphs; seo: Seo };
