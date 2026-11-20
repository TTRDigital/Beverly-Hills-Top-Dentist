/*
 * TTR-2491 (batch 1, page 1): "Dental Implants in Beverly Hills". A post like Night Guards Hollywood (byline, related page
 * card, article and FAQ structured data), at /blog/dental-implants-beverly-hills/. Facts only from the client brain and the
 * live site; the approved lines from TTR-961 and TTR-976 are used word for word. No prices, no timelines, no outcome figures.
 * Preview only: noIndex stays true until Kia approves it (for Beverly, live means findable).
 */
import type { Post } from "../types";
import { images } from "./images.ts";

export const dentalImplantsBeverlyHills: Post = {
  slug: "dental-implants-beverly-hills",
  title: "Dental Implants in Beverly Hills",
  date: "2026-11-20",
  author: "Dr. Nushin Shir",
  category: "implants",
  service: "/services/dental-implants-dentistry/",
  excerpt:
    "Dental implants at Beverly Hills Dental Arts Studio, a holistic, modern practice with in-house CT scanning and in-house specialists, at 416 N. Bedford Dr. in Beverly Hills.",
  image: { ...images.imagingArea, alt: "The imaging area at Beverly Hills Dental Arts Studio with the CT scanner and flowers" },
  imagePosition: "50% 45%",
  cta: "Missing a tooth? Come in for an exam and we will talk through whether an implant fits your plan.",
  figures: [
    {
      beforeHeading: "How does in-house CT scanning help plan an implant?",
      image: images.cbctScanner,
      alt: "Cone beam CT scanner in the imaging room at the Bedford Drive studio",
      caption: "Implant planning starts with a 3D scan taken in the studio, when it will help your care.",
      position: "center 35%",
    },
    {
      beforeHeading: "How is the crown on top made?",
      image: images.iteroScanner,
      alt: "iTero digital scanner used to record the teeth for an implant crown",
      caption: "The crown is made from a digital scan, with no impression trays.",
      position: "center 30%",
    },
  ],
  blocks: [
    {
      _type: "facts",
      heading: "At a glance",
      items: [
        { icon: "pin", label: "Where", value: "416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210" },
        { icon: "scan", label: "Planning", value: "A 3D CT scan in the studio, when it will help your care" },
        { icon: "tooth", label: "Your team", value: "Dr. Charlton and Dr. Shir, General & Cosmetic Dentists, with Dr. Jinnu Kim, Periodontist & Implant Surgeon" },
        { icon: "clock", label: "To ask about it", value: "Call 310.274.7005" },
      ],
    },
    {
      _type: "steps",
      beforeHeading: "Frequently asked questions",
      heading: "How implant care starts at the studio",
      items: [
        { title: "Exam and conversation", text: "Your dentist looks at your teeth, gums and bone and asks about your health and what you want." },
        { title: "A 3D scan when it helps", text: "If an implant is being planned, a CT scan can be taken in the studio to see the bone in three dimensions." },
        { title: "Your options explained", text: "You hear what an implant would involve for you, and other options such as a bridge, before anything is decided." },
        { title: "Specialist care when needed", text: "Dr. Kim, Periodontist & Implant Surgeon, joins your care when your plan calls for it." },
      ],
    },
  ],
  body: [
    "Beverly Hills Dental Arts Studio plans dental implants at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, with a 3D CT scan taken in the studio when it will help your care. Dr. Jinnu Kim, Periodontist & Implant Surgeon, is part of the in-house team.",
    "This page explains how implant care works at our studio and who you will see. For each stage of the process, read [what to expect with dental implants](/blog/dental-implants-beverly-hills-what-to-expect/).",
    "## What is a dental implant?",
    "A single tooth implant is an artificial tooth root, usually titanium, placed into the jawbone to replace one missing tooth. It has three parts: the post that does the work of the root, an abutment that connects it, and a custom porcelain crown on top.",
    "What separates it from a bridge is that the teeth on either side stay untouched. Learn more about [single tooth implants](/services/dental-implants-dentistry/single-tooth-implants/) and [full arch implants](/services/dental-implants-dentistry/full-arch-implants/).",
    "## Is an implant right for you?",
    "Only an exam can tell. Your dentist looks at your teeth, your gums, the bone where the tooth is missing and your health, then talks you through your options.",
    "Sometimes an implant is the right fit. Sometimes a bridge is. If you are weighing the two, read [bridge or implant: how to choose](/blog/bridge-or-implant-beverly-hills/).",
    "## How does in-house CT scanning help plan an implant?",
    "A CT scan gives your dentist a 3D view of the bone where an implant would go, which helps with planning. Bone height and width at the site are measured directly, along with the position of the nerve canal and the floor of the sinus.",
    "With [in-house CT scanning](/services/dental-technology/ct-scans/), the scan happens in the studio, not at a separate imaging center. A 3D scan uses more radiation than a regular X-ray. For that reason, the American Dental Association advises using it only when, after a thorough exam, it is expected to benefit your care ([ADA, 2012](https://pubmed.ncbi.nlm.nih.gov/22855905/)).",
    "## Who is on your implant team?",
    "Your care is led by Dr. Charlton, General & Cosmetic Dentist, and Dr. Shir, General & Cosmetic Dentist. Specialty doctors, including an endodontist and a periodontist, join your care when your plan calls for them.",
    "Dr. Jinnu Kim, Periodontist & Implant Surgeon, focuses on the gums, the bone that supports the teeth, and dental implants. In practice, Dr. Kim places dental implants, performs All-on-X full-arch implant surgery, and rebuilds the tissue around the teeth with bone grafting, sinus augmentation, and gum grafting.",
    "## How is the crown on top made?",
    "Our iTero® digital scanner records your teeth as a 3D model, with no impression trays. The crown is made from that scan and shaded to match your other teeth.",
    "## Where does holistic care fit in?",
    "The studio brings together ozone therapy, in-house CT scanning, lasers, holistic care and in-house specialists. Ozone therapy is one of the tools the studio can use as part of a holistic plan. Whether it suits you depends on your teeth and your treatment, and your dentist will tell you if it fits.",
    "## Visiting our Beverly Hills studio",
    "The studio serves Beverly Hills, West Hollywood, Hollywood, Studio City, Culver City, West LA, Century City and Mid-City. See our pages for [Century City](/areas-we-serve/century-city/) and [West Hollywood](/areas-we-serve/west-hollywood/) patients.",
    "If this is your first visit, call the studio before you set out. The team can help with directions and arrival details.",
    "## Frequently asked questions",
    "### Do you offer dental implants in Beverly Hills?",
    "Yes. Beverly Hills Dental Arts Studio, at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, offers single tooth and full arch implants, planned with in-house CT scanning when it will help your care.",
    "### Do I need a CT scan for an implant?",
    "If an implant is being planned, a 3D scan is the usual way to see the bone where it would go. Your dentist decides after an exam whether a scan will help your care.",
    "### Who places the implant?",
    "Dr. Jinnu Kim, Periodontist & Implant Surgeon, places dental implants and performs All-on-X full-arch implant surgery. Your dentist will explain who is involved in your plan.",
    "### Are dental implants covered by insurance, and what do they cost?",
    "The studio does not list implant insurance details or fees online. Coverage depends on your own plan, so check your benefits and ask the office what information they can share when you book.",
    "### How can I make an appointment?",
    "Call the studio or request an appointment online. The team will let you know which times are open.",
    "If you are missing a tooth and want to know whether an implant fits your plan, a visit with our team is a good first step. [Book your implant consultation](/appointment/) at our Beverly Hills studio.",
  ],
  seo: {
    title: "Dental Implants in Beverly Hills | Beverly Hills Dental Arts Studio",
    description: "Dental implants in Beverly Hills, planned with in-house CT scanning and an in-house periodontist and implant surgeon. Call 310.274.7005.",
    noIndex: true,
  },
};
