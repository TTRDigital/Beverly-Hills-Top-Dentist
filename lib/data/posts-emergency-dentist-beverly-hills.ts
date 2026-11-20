/*
 * TTR-2491 (batch 1, page 2): "Emergency Dentist in Beverly Hills", at /blog/emergency-dentist-beverly-hills/. A post like
 * Night Guards Hollywood. Facts only from the client brain and the live site. No promise of a same-day visit, no opening
 * hours (the brain and the site differ on weekday hours, so only "closed on Saturday and Sunday", which both agree on), no
 * home-care advice. The 911 line is the live site's own wording. Preview only: noIndex until Kia approves it.
 */
import type { Post } from "../types";
import { images } from "./images.ts";

export const emergencyDentistBeverlyHills: Post = {
  slug: "emergency-dentist-beverly-hills",
  title: "Emergency Dentist in Beverly Hills",
  date: "2026-11-20",
  author: "Dr. Nushin Shir",
  category: "restorative",
  service: "/services/restorative-dentistry/",
  excerpt:
    "A toothache, a broken tooth or a lost filling or crown? Call Beverly Hills Dental Arts Studio at 310.274.7005. Here is what happens when you call and what we can treat.",
  image: images.receptionWindowWide,
  cta: "If a tooth is hurting or something has broken, call us at 310.274.7005 and tell us what is going on.",
  figures: [
    {
      beforeHeading: "How does the studio find the cause?",
      image: images.digitalXRayRoom,
      alt: "Treatment room with a dental chair and a digital X-ray monitor at the Bedford Drive studio",
      caption: "An exam and digital X-rays come first, and a 3D scan only when it will help.",
      position: "center 40%",
    },
  ],
  blocks: [
    {
      _type: "facts",
      heading: "At a glance",
      items: [
        { icon: "clock", label: "To reach us", value: "Call 310.274.7005" },
        { icon: "pin", label: "Where", value: "416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210" },
        { icon: "calendar", label: "Weekends", value: "The studio is closed on Saturday and Sunday" },
        { icon: "shield", label: "Trouble breathing or swallowing", value: "Go to the nearest emergency room or call 911" },
      ],
    },
    {
      _type: "steps",
      beforeHeading: "Frequently asked questions",
      heading: "What happens when you call",
      items: [
        { title: "Tell us what is going on", text: "Which tooth, what happened and how it feels. The team will let you know which times are open." },
        { title: "Exam and X-rays", text: "Your dentist examines the tooth and takes digital X-rays to find the cause." },
        { title: "A 3D scan if it helps", text: "When the X-rays cannot show enough, a CT scan can be taken in the studio." },
        { title: "Your options explained", text: "Your dentist explains what they see and what your options are before anything is done." },
      ],
    },
  ],
  body: [
    "If you have a dental problem that cannot wait, such as a toothache, a broken tooth or a lost filling or crown, call Beverly Hills Dental Arts Studio at 310.274.7005. The studio is at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, and the team will let you know which times are open.",
    "If you have trouble breathing or swallowing, or swelling spreads toward your eye or neck, go to the nearest emergency room or call 911.",
    "## Which problems should I call about?",
    "Call the studio if you have:",
    "- Tooth pain, or pain when you bite on one tooth",
    "- A chipped, cracked or broken tooth",
    "- A filling, crown or bridge that has come loose or fallen out",
    "- Swelling, bleeding or a bad taste around a tooth or an implant",
    "- Pain or sensitivity that lingers after something hot, cold or sweet",
    "Any of these is a reason to call, not a diagnosis. Only an exam can tell what is going on.",
    "## What happens when you call?",
    "Tell the team which tooth is bothering you, what happened and how it feels. They will let you know which times are open and what to bring. Bring your insurance details and a list of any medications.",
    "## How does the studio find the cause?",
    "Your visit starts with an exam and digital X-rays. When the X-rays cannot show enough, a 3D CT scan can be taken in the studio, not at a separate imaging center.",
    "A 3D scan uses more radiation than a regular X-ray. For that reason, the American Dental Association advises using it only when, after a thorough exam, it is expected to benefit your care ([ADA, 2012](https://pubmed.ncbi.nlm.nih.gov/22855905/)).",
    "## Which treatments can help?",
    "Your dentist explains what they see and what your options are before anything is done. Depending on the cause, care at the studio can include:",
    "- [Dental fillings](/services/restorative-dentistry/dental-fillings/) in composite or ceramic, with no metal",
    "- [Dental bonding](/services/cosmetic-dentistry/dental-bonding/) to repair a chipped tooth",
    "- Porcelain crowns for a tooth too damaged to hold a filling",
    "- [Root canal therapy](/services/restorative-dentistry/root-canal-therapy/) to treat the infection inside the tooth and keep the tooth itself",
    "- [Tooth extractions](/services/restorative-dentistry/tooth-extractions/) and [wisdom teeth extractions](/services/restorative-dentistry/wisdom-teeth-extractions/)",
    "## Who will I see?",
    "Your care is led by Dr. Charlton, General & Cosmetic Dentist, and Dr. Shir, General & Cosmetic Dentist. Specialty doctors, including an endodontist and a periodontist, join your care when your plan calls for them.",
    "## Visiting our Beverly Hills studio",
    "The studio serves Beverly Hills, West Hollywood, Hollywood, Studio City, Culver City, West LA, Century City and Mid-City.",
    "If this is your first visit, call the studio before you set out. The team can help with directions and arrival details.",
    "## Frequently asked questions",
    "### Can I call about an urgent dental problem?",
    "Yes. Call 310.274.7005 and tell the team what is going on. They will let you know which times are open.",
    "### What should I do if my face is swelling?",
    "If you have trouble breathing or swallowing, or swelling spreads toward your eye or neck, go to the nearest emergency room or call 911. For other swelling around a tooth, call the studio.",
    "### Is the studio open on weekends?",
    "No. The studio is closed on Saturday and Sunday.",
    "### Is an urgent visit covered by insurance?",
    "The studio does not list insurance details or fees online. Coverage depends on your own plan, so check your benefits and ask the office what information they can share when you book.",
    "### Where is the studio?",
    "Beverly Hills Dental Arts Studio is at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210.",
    "If a tooth is hurting or something has broken, call us at 310.274.7005 or [request an appointment](/appointment/) at our Beverly Hills studio.",
  ],
  seo: {
    title: "Emergency Dentist in Beverly Hills | Beverly Hills Dental Arts Studio",
    description: "Toothache, broken tooth or lost filling or crown? Call Beverly Hills Dental Arts Studio at 310.274.7005. In-house CT scanning and in-house specialists.",
    noIndex: true,
  },
};
