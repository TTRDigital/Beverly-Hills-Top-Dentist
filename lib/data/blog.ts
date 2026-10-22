// The blog's authors and categories. Every post is by a named dentist (Dr. Shir by default; the About page is the author
// page) and supports one part of the site, so posts are never random: each one links up to the page it is written for.
import { images } from "@/lib/data/images";
import type { Img } from "@/lib/types";

export type Author = { name: string; credentials: string; jobTitle: string; url: string; image: Img; blurb: string };
export const AUTHORS: Record<string, Author> = {
  "Dr. Nushin Shir": {
    name: "Dr. Nushin Shir", credentials: "DDS, MPH", jobTitle: "General & Cosmetic Dentist", url: "/about-us/", image: images.drNushinShir,
    blurb: "Dr. Shir earned her DDS at the UCLA School of Dentistry and holds two master's degrees in public health from UCLA. She has practiced dentistry for over 30 years.",
  },
  "Dr. Daniel Charlton": {
    name: "Dr. Daniel Charlton", credentials: "DDS", jobTitle: "General & Cosmetic Dentist", url: "/about-us/", image: images.drDanielCharlton,
    blurb: "Dr. Charlton combines decades of experience with the newest techniques in general and cosmetic dentistry.",
  },
};
export const DEFAULT_AUTHOR = "Dr. Nushin Shir";
export const authorFor = (name?: string | null): Author => AUTHORS[name || ""] || AUTHORS[DEFAULT_AUTHOR];

export type Category = { key: string; name: string; path: string; blurb: string };
export const CATEGORIES: Category[] = [
  { key: "implants", name: "Dental implants", path: "/services/dental-implants-dentistry/", blurb: "Single tooth and full arch implants, planned with our in-office 3D CT scan." },
  { key: "cosmetic", name: "Cosmetic dentistry and clear aligners", path: "/services/cosmetic-dentistry/", blurb: "Veneers, bonding, whitening, smile makeovers and clear aligners." },
  { key: "restorative", name: "Restorative dentistry", path: "/services/restorative-dentistry/", blurb: "Fillings, bridges, inlays and onlays, root canals and extractions." },
  { key: "periodontics", name: "Periodontics (gum care)", path: "/services/periodontic-dentistry/", blurb: "Deep cleanings, laser gum treatments, grafts and gum contouring." },
  { key: "preventive", name: "Preventive dentistry", path: "/services/preventive-dentistry/", blurb: "Cleanings, checkups, sealants, night guards and sleep apnea care." },
  { key: "technology", name: "Dental technology", path: "/services/dental-technology/", blurb: "3D CT scans, digital X-rays, the digital scanner and ozone therapy." },
  { key: "areas", name: "Areas we serve", path: "/areas-we-serve/", blurb: "Patients come to Bedford Drive from across West LA and the neighborhoods around Beverly Hills." },
];
export const categoryFor = (key?: string | null): Category | null => CATEGORIES.find((c) => c.key === key) || null;
