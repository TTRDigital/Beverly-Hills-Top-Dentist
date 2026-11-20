/*
 * TTR-2491 (batch 1, page 3): "In-House Specialists and 3D CT Scanning in Beverly Hills", at
 * /blog/in-house-specialists-ct-scanning-beverly-hills/. A post like Night Guards Hollywood. Facts only from the client brain
 * and the live site (the 3D CT Scans page and Dr. Kim's live bio); the approved lines from TTR-961 and TTR-976 word for word.
 * Preview only: noIndex until Kia approves it.
 */
import type { Post } from "../types";
import { images } from "./images.ts";

export const inHouseSpecialistsCtScanning: Post = {
  slug: "in-house-specialists-ct-scanning-beverly-hills",
  title: "In-House Specialists and 3D CT Scanning in Beverly Hills",
  date: "2026-11-20",
  author: "Dr. Nushin Shir",
  category: "technology",
  service: "/services/dental-technology/ct-scans/",
  excerpt:
    "Specialists and 3D CT scanning under one roof at Beverly Hills Dental Arts Studio, a holistic, modern practice at 416 N. Bedford Dr. in Beverly Hills.",
  image: { ...images.cbctScanner, alt: "Cone beam CT scanner in the imaging room at Beverly Hills Dental Arts Studio" },
  imagePosition: "50% 40%",
  cta: "Want to know whether a 3D scan or a specialist belongs in your plan? Come in for an exam and we will talk it through.",
  figures: [
    {
      beforeHeading: "Who are the specialists?",
      image: images.teamPhoto,
      alt: "The Beverly Hills Dental Arts Studio team",
      caption: "Our dentists and specialists work in the same studio on Bedford Drive.",
      position: "center",
    },
  ],
  blocks: [
    {
      _type: "facts",
      heading: "At a glance",
      items: [
        { icon: "pin", label: "Where", value: "416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210" },
        { icon: "scan", label: "3D CT scanning", value: "Taken in the studio, when it will help your care" },
        { icon: "tooth", label: "Specialty doctors", value: "Including an endodontist and a periodontist" },
        { icon: "clock", label: "To ask about it", value: "Call 310.274.7005" },
      ],
    },
    {
      _type: "steps",
      beforeHeading: "Frequently asked questions",
      heading: "How the scan and the specialists fit into your care",
      items: [
        { title: "Exam first", text: "Your dentist examines you and talks through your health and what you want." },
        { title: "A 3D scan when it helps", text: "If the exam shows a scan would help, it is taken in the studio's imaging room." },
        { title: "Specialists when needed", text: "Specialty doctors join your care when your plan calls for them, in the same office." },
        { title: "One plan", text: "Your dentist explains your options so you can decide what feels right." },
      ],
    },
  ],
  body: [
    "Beverly Hills Dental Arts Studio, at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, has 3D CT scanning and in-house specialists in the same office. Specialty doctors, including an endodontist and a periodontist, join your care when your plan calls for them, and the scan happens in the studio, not at a separate imaging center.",
    "Many dental offices send patients elsewhere for a 3D scan or for specialist care. Here is how it works at our studio.",
    "## Why does it help to have specialists in the same office?",
    "Our specialists work in the same office. If your plan needs a closer look, you are not handed a referral and left to work out the next step alone.",
    "The studio brings together ozone therapy, in-house CT scanning, lasers, holistic care and in-house specialists, so your dentists and specialists can plan your care together.",
    "## Who are the specialists?",
    "Your care is led by Dr. Charlton, General & Cosmetic Dentist, and Dr. Shir, General & Cosmetic Dentist. Specialty doctors, including an endodontist and a periodontist, join your care when your plan calls for them.",
    "Dr. Jinnu Kim, Periodontist & Implant Surgeon, focuses on the gums, the bone that supports the teeth, and dental implants. Dr. Kim earned a D.M.D. from the University of Pennsylvania School of Dental Medicine, then completed specialty training in Periodontics and Implantology at the USC Herman Ostrow School of Dentistry. In practice, Dr. Kim places dental implants, performs All-on-X full-arch implant surgery, and rebuilds the tissue around the teeth with bone grafting, sinus augmentation, and gum grafting.",
    "Read more about our team on the [About Us](/about-us/) page.",
    "## What is a 3D CT scan?",
    "A standard dental X-ray is a two-dimensional image of a three-dimensional structure. Cone beam CT, also called CBCT, builds a three-dimensional model of your jaw instead. Bone height and width are measured directly, the nerve is located, and the sinus floor is visible.",
    "Learn more about [3D CT scans at our studio](/services/dental-technology/ct-scans/).",
    "## When is a 3D scan used?",
    "A cone beam scan is not taken routinely. At the studio it is used for situations such as:",
    "- Dental implant planning, to measure the bone and find the nerve canal and the floor of the sinus",
    "- Wisdom teeth removal, where lower roots can sit close to the nerve",
    "- Complex root canal cases, to see the canal system in three dimensions",
    "- Extractions near the sinus, where upper molar roots can sit against the sinus floor",
    "A 3D scan uses more radiation than a regular X-ray. For that reason, the American Dental Association advises using it only when, after a thorough exam, it is expected to benefit your care ([ADA, 2012](https://pubmed.ncbi.nlm.nih.gov/22855905/)).",
    "## How do the scan and the specialists work together?",
    "Take an implant. A CT scan gives your dentist a 3D view of the bone where an implant would go, which helps with planning. Dr. Kim places dental implants in the same office, and the crown is made from a digital scan. Read more about [dental implants in Beverly Hills](/blog/dental-implants-beverly-hills/).",
    "Take a root canal. Canal anatomy is mapped in 3D where the case calls for it, and the protective restoration afterwards is completed in the same office. Learn more about [root canal therapy](/services/restorative-dentistry/root-canal-therapy/).",
    "## What other technology does the studio use?",
    "Alongside CT scanning, the studio uses [digital X-rays](/services/dental-technology/digital-x-rays/), an iTero® [digital scanner](/services/dental-technology/digital-scanner/) in place of impression trays, soft tissue lasers and [ozone therapy](/services/dental-technology/ozone-therapy/).",
    "## Visiting our Beverly Hills studio",
    "The studio serves Beverly Hills, West Hollywood, Hollywood, Studio City, Culver City, West LA, Century City and Mid-City.",
    "If this is your first visit, call the studio before you set out. The team can help with directions and arrival details.",
    "## Frequently asked questions",
    "### Do I have to go to an imaging center for a 3D scan?",
    "No. With in-house CT scanning, the scan happens in the studio, not at a separate imaging center.",
    "### Does every patient need a 3D scan?",
    "No. A cone beam scan is not taken routinely. Your dentist decides after an exam whether a scan is expected to benefit your care.",
    "### Which specialists are on the team?",
    "Specialty doctors, including an endodontist and a periodontist, join your care when your plan calls for them. Dr. Jinnu Kim is the studio's Periodontist & Implant Surgeon.",
    "### Will I see a specialist at my first visit?",
    "Your first visit starts with an exam and a conversation about your health and goals. If your plan calls for a specialist, your dentist will talk with you about it.",
    "### Where is the studio?",
    "Beverly Hills Dental Arts Studio is at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210.",
    "If you want a plan made with 3D imaging and specialists in one place, a visit with our team is a good first step. [Book your visit](/appointment/) at our Beverly Hills studio.",
  ],
  seo: {
    title: "In-House Specialists & 3D CT Scanning | Beverly Hills Dental Arts Studio",
    description: "In-house specialists and 3D CT scanning in one Beverly Hills studio: an endodontist and a periodontist join your care when your plan calls for them.",
    noIndex: true,
  },
};
