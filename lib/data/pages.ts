/* Built-in page content, copied word for word from the old WordPress site. /cms values replace these. */
import type { AboutContent, AppointmentContent, BeforeAfterContent, HomeContent, HubContent, LegalContent, ThankYouContent } from "../types";
import { images } from "./images.ts";

export const fallbackHome: HomeContent = {
  hero: {
    heading: "The Art of Natural Dentistry",
    tagline: "Biological, biomimetic care in the heart of Beverly Hills.",
    cta: { label: "Schedule Appointment", href: "/appointment/" },
    videoMp4: "/video/home-hero.mp4",
    videoWebm: "/video/home-hero.webm",
    poster: images.heroPoster,
  },
  intro: {
    heading: "We treat you, not just your teeth",
    text: "Dr. Shir has spent over thirty years refining an approach that protects your health while it rebuilds your smile.",
    cards: [
      {
        image: images.biological,
        title: "Biological",
        text: ["Ozone therapy, biocompatible materials, and a health-first plan. Dr. Shir holds two Master's degrees in Public Health, and it shows in every decision."],
      },
      {
        image: images.biomimetic,
        title: "Biomimetic",
        text: ["We rebuild teeth to match what nature built. Soft-tissue lasers and in-office CT mean less drilling, and more of your own tooth stays."],
      },
      {
        image: images.holistic,
        title: "Holistic",
        text: ["Your mouth is connected to the rest of you. Dr. Shir screens, treats, and plans with your whole health in view, not just the tooth in front of her."],
      },
    ],
  },
  story: {
    heading: "Thirty Years of Doing It Differently",
    text: ["Ozone therapy, soft-tissue lasers, in-office CT. Dr. Shir invested in the technology most practices refer out for, so your care never leaves this office."],
    cta: { label: "About us", href: "/about-us/" },
    slides: [
      images.hallwayRoundTable,
      images.cosmeticDentistrySign,
      images.receptionDesk,
      images.hallwayTableDetail,
      images.imagingArea,
      images.frontOffice,
      images.hallwayFlowers,
      images.hallwayWide,
    ],
  },
  technology: {
    heading: "Technology and Innovation",
    text: [
      "Dr. Shir invested in the equipment most general practices refer out for. Imaging, diagnosis and treatment all happen in this office, which means fewer appointments, faster answers, and one team accountable for your care from the first scan to the final result.",
    ],
    items: [
      {
        title: "Ozone Therapy",
        text: "Ozone neutralizes bacteria, viruses and fungi on contact. Dr. Shir uses it to stop early decay without drilling, treat gum infection without antibiotics, and support healing after extractions. Very few practices in Los Angeles offer it.",
        image: images.ozoneUnit,
      },
      {
        title: "CT Scans",
        text: "Cone beam CT produces a three-dimensional image of your teeth, roots, bone, nerves and sinuses. Dr. Shir measures bone before placing an implant and sees nerve position before an extraction, rather than discovering either mid-procedure.",
        image: images.cbctScanner,
      },
      {
        title: "Soft Tissue Lasers",
        text: "Lasers treat gum tissue with far less discomfort than a scalpel. Bleeding is minimal, healing is quicker, and procedures that once meant stitches and days of recovery often no longer do.",
        image: images.softTissueLaser,
      },
      {
        title: "Digital Scanner",
        text: "No trays, no impression putty, no gagging. A handheld scanner captures your teeth in minutes and produces a more accurate result for aligners, crowns and veneers than a physical mold can.",
        image: images.iteroScanner,
      },
      {
        title: "Digital X-Rays",
        text: "Digital sensors give clearer images at a fraction of the radiation of film. You see what Dr. Shir sees on screen straight away, so nothing about your diagnosis has to be taken on trust.",
        image: images.digitalXRayRoom,
      },
    ],
  },
  work: {
    heading: "Our Work",
    text: "Dr. Shir and the team at Beverly Hills Dental Art Studio are here to give you a smile that looks natural, feels healthy, and is done right the first time",
  },
  values: {
    heading: "Biological. Biomimetic. Holistic. Natural.",
    text: "Four ideas behind every treatment Dr. Shir plans. Healthier teeth, preserved structure, and a smile that looks like it was always yours.",
    cta: { label: "Schedule a Consultation", href: "/appointment/" },
    cards: [
      {
        image: images.receptionDeskPortrait,
        title: "1. Biological Assessment",
        text: ["The first visit is about your health, not just your teeth. Dr. Shir examines, scans in-house, and plans around your whole body before any treatment begins."],
      },
      {
        image: images.treatmentChair,
        title: "2. Biomimetic Treatment",
        text: ["We rebuild teeth the way nature made them. Ozone and lasers instead of drilling where possible, so more of your own tooth stays where it belongs."],
      },
      {
        image: images.hallwayWide1024,
        title: "3. Natural, Lasting Results",
        text: ["A smile that looks like yours, only healthier. Holistic care continues after you leave the chair, with one team who already knows your history."],
      },
    ],
  },
  seo: {
    title: "Home - Beverly Hills Dental",
    description: "Dr. Shir has spent over thirty years refining an approach that protects your health while it rebuilds your smile.",
  },
};

export const fallbackAbout: AboutContent = {
  hero: {
    heading: "Meet the Team Behind Your Healthiest Smile",
    text: "With more than 50 years of combined expertise, our doctors and team craft personalized treatment plans that blend natural aesthetics with care built around your whole-body health.",
    image: images.teamPhoto,
  },
  intro: {
    heading: "Beverly Hills' Premier Dental Team",
    text: "Welcome to Beverly Hills Dental Art Studio, where your health and your smile come first. Led by Dr. Nushin Shir, our team combines decades of experience with a biological, biomimetic approach to dentistry — treating you, not just your teeth. Every plan we create is tailored to your goals, your comfort, and your long-term well-being.",
  },
  mission: {
    heading: "Our Mission",
    text: "Our mission is to provide compassionate, advanced dental care that helps our community achieve healthy, beautiful smiles — in a comfortable, welcoming environment where your whole health always comes first.",
  },
  seo: {
    title: "Top Dentist in Beverly Hills | Dr. Nushin Shir, DDS",
    description: "Meet Dr. Nushin Shir and the caring team at Beverly Hills Dental Arts Studio. Modern dentistry with a personal touch. Book your first visit today.",
  },
};

export const fallbackBeforeAfter: BeforeAfterContent = {
  hero: {
    heading: "A Gentle, Conservative Approach",
    image: images.smilingWomanProfile,
    text: "We focus on preserving as much of your natural tooth structure as possible, helping minimize discomfort and shorten recovery time. Using advanced techniques and precise care, we create beautiful, natural-looking results while protecting the long-term health and strength of your teeth.",
  },
  gallery: { heading: "Before and After Photos", text: "More than transforming teeth, we help inspire a more confident way of living." },
  seo: {
    title: "Before/After Page - Beverly Hills Dental",
    description:
      "We focus on preserving as much of your natural tooth structure as possible, helping minimize discomfort and shorten recovery time. Using advanced techniques",
  },
};

export const fallbackAppointment: AppointmentContent = {
  heading: "Call to schedule an appointment",
  image: images.teamPhoto,
  hoursLabel: "Office Hours",
  formButton: "Request an Appointment",
  seo: { title: "Appointment - Beverly Hills Dental", description: "☎ (310) 274-7005" },
};

export const fallbackThankYou: ThankYouContent = {
  heading: "Thank you for your submission",
  text: "Someone on our team will reach out to you.",
  seo: { title: "Thank You - Beverly Hills Dental", description: "Someone on our team will reach out to you.", noIndex: true },
};

/** /locations/ and /locations/mclean/ are empty pages on the old site (header and footer only). */
export const fallbackLocationsHub: HubContent = { title: "locations", sections: [], seo: { title: "locations - Beverly Hills Dental", description: "" } };
export const fallbackMcleanHub: HubContent = { title: "Mclean", sections: [], seo: { title: "Mclean - Beverly Hills Dental", description: "" } };

/**
 * The old site has no privacy policy page, but the appointment form links to one.
 * [PLACEHOLDER]: the practice must supply the policy text before launch.
 */
export const fallbackPrivacy: LegalContent = {
  title: "Privacy Policy",
  body: ["[PLACEHOLDER: privacy policy text to be supplied by the practice]"],
  seo: { title: "Privacy Policy - Beverly Hills Dental", description: "", noIndex: true },
};
