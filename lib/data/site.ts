/* Built-in site content, copied from the old WordPress site. /cms values replace these once filled in. */
import type { BeforeAfterCase, Faq, MenuItem, Post, SiteSettings, TeamMember, Testimonial } from "../types";
import { images } from "./images.ts";

/** Main menu, in the old site's order (Services has two levels of dropdowns). */
export const fallbackMenu: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      {
        label: "Dental Implants Dentistry",
        href: "/services/dental-implants-dentistry/",
        children: [
          { label: "Single Tooth Implants", href: "/services/dental-implants-dentistry/single-tooth-implants/" },
          { label: "Full Arch Implants", href: "/services/dental-implants-dentistry/full-arch-implants/" },
        ],
      },
      {
        label: "Cosmetic Dentistry",
        href: "/services/cosmetic-dentistry/",
        children: [
          { label: "Porcelain Veneers", href: "/services/cosmetic-dentistry/porcelain-veneers/" },
          { label: "Smile Makeover", href: "/services/cosmetic-dentistry/smile-makeover/" },
          { label: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening/" },
          { label: "Dental Bonding", href: "/services/cosmetic-dentistry/dental-bonding/" },
          { label: "Clear Aligners", href: "/services/cosmetic-dentistry/clear-aligners/" },
        ],
      },
      {
        label: "Restorative Dentistry",
        href: "/services/restorative-dentistry/",
        children: [
          { label: "Dental Fillings", href: "/services/restorative-dentistry/dental-fillings/" },
          { label: "Dental Bridges", href: "/services/restorative-dentistry/dental-bridges/" },
          { label: "Tooth Extractions", href: "/services/restorative-dentistry/tooth-extractions/" },
          { label: "Porcelain Inlays & Onlays", href: "/services/restorative-dentistry/porcelain-inlays-onlays/" },
          { label: "Root Canal Therapy", href: "/services/restorative-dentistry/root-canal-therapy/" },
          { label: "Wisdom Teeth Extractions", href: "/services/restorative-dentistry/wisdom-teeth-extractions/" },
          { label: "Partial Dentures", href: "/services/restorative-dentistry/partial-dentures/" },
        ],
      },
      {
        label: "Periodontic Dentistry",
        href: "/services/periodontic-dentistry/",
        children: [
          { label: "Gum Disease Treatment", href: "/services/periodontic-dentistry/gum-disease-treatment/" },
          { label: "Crown Lengthening", href: "/services/periodontic-dentistry/crown-lengthening/" },
          { label: "Gum Graft Surgery", href: "/services/periodontic-dentistry/gum-graft-surgery/" },
          { label: "Deep Cleanings (Scaling & Root Planing)", href: "/services/periodontic-dentistry/deep-cleanings/" },
          { label: "Laser Gum Treatments", href: "/services/periodontic-dentistry/laser-gum-treatments/" },
          { label: "Gum Contouring", href: "/services/periodontic-dentistry/gum-contouring/" },
        ],
      },
      {
        label: "Preventive Dentistry",
        href: "/services/preventive-dentistry/",
        children: [
          { label: "Teeth Cleaning", href: "/services/preventive-dentistry/teeth-cleaning/" },
          { label: "Dental Sealants", href: "/services/preventive-dentistry/dental-sealants/" },
          { label: "Dental Checkups & Exams", href: "/services/preventive-dentistry/checkups-exams/" },
          { label: "Night Guards", href: "/services/preventive-dentistry/night-guards/" },
          { label: "Sleep Apnea Treatment", href: "/services/preventive-dentistry/sleep-apnea-treatment/" },
        ],
      },
      {
        label: "Dental Technology hub",
        href: "/services/dental-technology/",
        children: [
          { label: "Ozone Therapy", href: "/services/dental-technology/ozone-therapy/" },
          { label: "Digital Scanner", href: "/services/dental-technology/digital-scanner/" },
          { label: "Digital X-Rays", href: "/services/dental-technology/digital-x-rays/" },
          { label: "3D CT Scans", href: "/services/dental-technology/ct-scans/" },
        ],
      },
    ],
  },
];

export const fallbackSettings: Omit<SiteSettings, "phoneHref"> = {
  name: "Beverly Hills Dental Art Studio",
  legalName: "Beverly Hills Dental Arts Studio",
  phone: "(310) 274-7005",
  // The footer writes the number with dashes; the header and appointment page with brackets.
  phoneDisplay: "310-274-7005",
  street: "416 N. Bedford Dr., Suite 105",
  city: "Beverly Hills",
  region: "CA",
  postalCode: "90210",
  latitude: 34.0684016,
  longitude: -118.4050211,
  mapsUrl:
    "https://www.google.com/maps/place/Beverly+Hills+Dental+Arts+Studio/@34.0684016,-118.4050211,15z/data=!4m6!3m5!1s0x80c2bb639f83cb85:0xfacde87966461c7f!8m2!3d34.0684016!4d-118.4050211",
  hoursLabel: "Working Hours:",
  hours: [
    { day: "Monday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Tuesday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Wednesday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Thursday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Friday", value: "8:00 a.m. – 1:00 p.m.", opens: "08:00", closes: "13:00" },
    { day: "Saturday", value: "Closed" },
    { day: "Sunday", value: "Closed" },
  ],
  social: [
    { network: "facebook", href: "https://www.facebook.com/beverlyhillstopdentist/" },
    { network: "instagram", href: "https://www.instagram.com/beverlyhillsdentalartsstudio/" },
    {
      network: "google",
      href: "https://www.google.com/maps/place/Beverly+Hills+Dental+Arts+Studio/@34.0684016,-118.4050211,15z/data=!4m6!3m5!1s0x80c2bb639f83cb85:0xfacde87966461c7f!8m2!3d34.0684016!4d-118.4050211",
    },
  ],
  headerCta: { label: "Schedule Appointment", href: "/appointment/" },
  menu: fallbackMenu,
  logo: images.logo,
  footerLogo: images.logo300,
  privacyPolicyUrl: "/privacy-policy/",
};

/** Team, in the order of the About page. */
export const fallbackTeam: TeamMember[] = [
  {
    id: "dr-daniel-charlton",
    name: "Dr. Daniel Charlton",
    heading: "Dr. Daniel Charlton - General & Cosmetic Dentist.",
    bio: [
      "Dr. Charlton has dedicated his life to providing the best that dentistry has to offer. Continually upgrading himself and his practice on the newest and latest techniques, he combines experience with advanced training and state-of-the-art technology to provide patients of all ages with top-quality dental care. Dr. Charlton’s training includes cosmetic dentistry, TMJ therapy, endodontics, orthodontics, periodontal surgery, laser dentistry and implant dentistry. We invite you to contact our team today to learn more about our comprehensive dental services and schedule your personal consultation with our skilled dentist in Beverly Hills, California!",
    ],
    photo: images.drDanielCharlton,
    order: 1,
  },
  {
    id: "dr-nushin-shir",
    name: "Dr. Nushin Shir",
    heading: "Dr. Nushin Shir - General & Cosmetic Dentist.",
    bio: [
      "Dr. Shir, our principal dentist, earned her DDS from UCLA and holds two master’s degrees in public health from UCLA in epidemiology and healthcare policy. With over 30 years of experience, six practices, and a background teaching restorative dentistry, she is a multiple-time America’s Top Dentist honoree known for complex cosmetic and restorative care.",
    ],
    photo: images.drNushinShir,
    order: 2,
  },
  {
    id: "thanys-m",
    name: "Thanys M.",
    heading: "Thanys M. — Practice Professional",
    bio: [
      "Thanys M., our practice professional, holds a Bachelor’s degree in Business and brings nearly a decade of experience across clinical support, office management, treatment coordination, billing, and patient relations. Currently pursuing a law degree focused on healthcare compliance and regulatory law, Thanys blends dentistry, business, and legal insight to strengthen patient care and practice operations.",
    ],
    photo: images.thanysM,
    order: 3,
  },
  {
    id: "nicole-vazquez",
    name: "Nicole Vazquez",
    heading: "Nicole Vazquez — Dental Hygienist",
    bio: [
      "My name is Nicole Vazquez and I’m a dental hygienist heading into my fourth year in the field. I’m completely passionate about prevention and helping people take charge of their health. I love showing patients how a clean, healthy mouth supports their overall well-being and energy, since everything in the body is connected. My favorite part of the job is making dental visits comfortable, educational, and genuinely stress-free so you can walk out feeling great and smiling with total confidence.",
    ],
    photo: images.nicoleVazquez,
    order: 4,
  },
  {
    id: "carlos-torres",
    name: "Carlos Torres",
    heading: "Carlos Torres — Operations Leader",
    bio: [
      "With over 25 years of experience in project management, staff leadership, and business operations, Carlos Torres is a seasoned dental industry professional with a proven ability to drive growth and build high-performing practices. Throughout his career, Carlos has successfully managed several dental offices, including orthodontic practices, while developing strong teams and improving day-to-day operations. Outside of work, he is an avid gym-goer who enjoys traveling and exploring new destinations.",
    ],
    photo: images.carlosTorres,
    order: 5,
  },
];

const galleryOrder = [
  images.case01, images.case02, images.case05, images.case03, images.case04, images.case06, images.case07,
  images.case08, images.case09, images.case10, images.case11, images.case12, images.case13, images.case15,
  images.case16, images.case17, images.case18, images.case19, images.case20, images.case21, images.case08B,
];

/**
 * Smile cases. "results": the home / thank-you carousel (the old home page's six
 * before-after lightbox images, then its three smile photos). "gallery": the
 * before-after grid (desktop). "galleryMobile": the before-after carousel (phones).
 */
export const fallbackCases: BeforeAfterCase[] = [
  ...[images.smile1, images.smile2, images.smile3, images.smile4, images.smile5, images.smile6].map((image, i) => ({
    id: `gallery-mobile-${i + 1}`,
    title: image.alt,
    image,
    groups: ["results" as const, "galleryMobile" as const],
    order: i + 1,
  })),
  ...[images.smileResult1, images.smileResult2, images.smileResult3].map((image, i) => ({
    id: `result-${i + 1}`,
    title: `Smile result ${i + 1}`,
    image,
    groups: ["results" as const],
    order: 7 + i,
  })),
  ...galleryOrder.map((image, i) => ({ id: `gallery-${i + 1}`, title: image.alt, image, groups: ["gallery" as const], order: 10 + i })),
];

/** The old site shows no patient reviews. Add real ones in /cms (Reviews); none are invented here. */
export const fallbackTestimonials: Testimonial[] = [];

/** Shared FAQs (each treatment page keeps its own FAQ list inside its FAQ section). */
export const fallbackFaqs: Faq[] = [];

/** The old site has no blog posts. */
export const fallbackPosts: Post[] = [];
