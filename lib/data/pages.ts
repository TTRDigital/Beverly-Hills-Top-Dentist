/* Built-in page content, copied word for word from the old WordPress site. /cms values replace these. */
import type { AboutContent, AppointmentContent, BeforeAfterContent, HomeContent, LegalContent, ThankYouContent } from "../types";
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
  seo: {
    title: "Appointment - Beverly Hills Dental",
    description: "Request an appointment at Beverly Hills Dental Art Studio, 416 N. Bedford Dr., Suite 105, Beverly Hills. Call (310) 274-7005 or send the form and our team will reach out.",
  },
};

export const fallbackThankYou: ThankYouContent = {
  heading: "Thank you for your submission",
  text: "Someone on our team will reach out to you.",
  seo: { title: "Thank You - Beverly Hills Dental", description: "Someone on our team will reach out to you.", noIndex: true },
};

/**
 * The old site had no privacy policy, but the appointment form's consent box
 * (phone, text and email) links here. This text describes what this website
 * actually does with form data; the practice should review it (with counsel)
 * and edit it in /cms before launch. Paragraphs starting "## " are headings.
 */
export const fallbackPrivacy: LegalContent = {
  title: "Privacy Policy",
  body: [
    "Last updated: October 15, 2026",
    "This policy explains how Beverly Hills Dental Arts Studio (“we”, “us”), 416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210, collects and uses information through this website, beverlyhillstopdentist.com. It covers the website only. The health information in your patient record is handled under our Notice of Privacy Practices, which we provide at the office and on request.",
    "## Information we collect",
    "**Information you send us.** When you use the appointment form we receive your full name, email address, phone number and anything you write in the comment box. Please do not include detailed medical information in the comment box; we will discuss your health with you directly.",
    "**Information sent automatically.** With a form request we also receive the page you sent it from, the page you first arrived on, the website that referred you, and any campaign tags in the link you followed (such as utm_source or gclid). Like any website, our hosting server records technical details of each visit, such as your IP address, browser type and the pages requested, for security and troubleshooting.",
    "## How we use your information",
    "We use the information you send us to answer your request, schedule and confirm appointments, and contact you about your request by phone, text message or email. We use the technical and referral information to protect the form from spam and abuse and to understand which pages and advertising bring patients to us.",
    "## Phone, text message and email consent",
    "By checking the consent box on the appointment form, you agree that we may contact you by phone, text message (SMS) and email about your appointment request. Message frequency varies with your request. Message and data rates may apply. You can reply **STOP** to any text message to stop receiving texts, or **HELP** for help, and you can ask us at any time to stop calling or emailing you. Consent is not a condition of receiving care.",
    "We do not sell, rent or share your mobile phone number or your text message opt-in consent with third parties or affiliates for their marketing purposes.",
    "## Who receives your information",
    "We do not sell your personal information. Form requests are delivered to our patient communication system (GoHighLevel), which stores them and sends our calls, texts and emails on our behalf. Our website host, SiteGround, stores the website and its server logs. These service providers may use the information only to provide their services to us. We may also disclose information when the law requires it.",
    "## Cookies and similar technologies",
    "This website does not set advertising or analytics cookies. To credit a form request to the link you arrived from, the site keeps that link information in your browser’s session storage, which is cleared when you close the tab. If we add a chat tool or analytics later, we will update this policy.",
    "## How long we keep information",
    "We keep appointment requests for as long as needed to respond to you and to keep reasonable business records, and server logs for a limited period set by our host. If you become a patient, your patient record is kept as the law requires.",
    "## Security",
    "This website uses an encrypted (HTTPS) connection, and form requests are sent to our patient communication system over an encrypted connection. No method of sending or storing information is completely secure, so we cannot guarantee absolute security.",
    "## Your choices and California privacy rights",
    "You can ask us what personal information we hold about you from this website, ask us to correct or delete it, and opt out of texts, calls or emails at any time. We do not sell or share personal information for cross-context behavioral advertising. We will not treat you differently for making a request. To make a request, call us or write to us at the address below.",
    "## Children",
    "This website is not directed to children under 13, and we do not knowingly collect their information through it. A parent or guardian should request appointments for a child.",
    "## Changes to this policy",
    "We may update this policy. The date at the top shows when it last changed.",
    "## Contact us",
    "Beverly Hills Dental Arts Studio, 416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210. Phone: (310) 274-7005.",
  ],
  seo: {
    title: "Privacy Policy - Beverly Hills Dental",
    description: "How Beverly Hills Dental Arts Studio collects and uses the information you send through this website, including phone, text message and email consent.",
    // Draft awaiting the practice's approval: not linked anywhere, kept out of search.
    noIndex: true,
  },
};
