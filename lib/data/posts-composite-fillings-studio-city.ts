/*
 * TTR-2491 (batch 2, page 2): "Composite Fillings for Studio City Patients", at /blog/composite-fillings-studio-city/. Same structure as the
 * Hollywood page (batch 1). The only office is in Beverly Hills, so the page is written for patients who come from
 * Studio City to Bedford Drive. There is no Studio City area page on the site, so it links to the Areas We Serve hub. Facts only from the client brain and the live Dental Fillings page. No drive times,
 * prices, lifespans or health claims. Preview only: noIndex until Kia approves it.
 */
import type { Post } from "../types";
import { images } from "./images.ts";

export const compositeFillingsStudioCity: Post = {
  slug: "composite-fillings-studio-city",
  title: "Composite Fillings for Studio City Patients",
  date: "2026-11-20",
  author: "Dr. Nushin Shir",
  category: "restorative",
  service: "/services/restorative-dentistry/dental-fillings/",
  excerpt:
    "Tooth-colored composite fillings for Studio City patients at Beverly Hills Dental Arts Studio, a holistic, modern practice with in-house CT scanning and in-house specialists.",
  image: images.receptionWindowWide,
  cta: "Have a sensitive tooth or a rough edge you keep catching? Come in and we will show you what we see.",
  figures: [
    {
      beforeHeading: "How is a composite filling placed at the studio?",
      image: images.treatmentChair,
      alt: "A treatment room at the Bedford Drive studio with a dental chair and a window",
      caption: "Composite is layered and shaped by hand at the chairside.",
      position: "center 40%",
    },
  ],
  blocks: [
    {
      _type: "facts",
      heading: "At a glance",
      items: [
        { icon: "pin", label: "Where", value: "416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210" },
        { icon: "tooth", label: "Materials", value: "Composite and ceramic only, no metal" },
        { icon: "scan", label: "Finding decay", value: "An exam and digital X-rays" },
        { icon: "clock", label: "To ask about it", value: "Call 310.274.7005" },
      ],
    },
    {
      _type: "steps",
      beforeHeading: "Questions Studio City patients ask about composite fillings",
      heading: "What a filling visit looks like",
      items: [
        { title: "Exam and X-rays", text: "Your dentist examines the tooth and takes digital X-rays to see the decay." },
        { title: "The tooth is numbed", text: "The tooth is numbed before any work starts, and sedation is available for anyone anxious." },
        { title: "Decay removed, filling layered", text: "The decay is removed and the composite is built up in layers, cured as it goes." },
        { title: "Bite checked", text: "Your bite is checked and refined before you leave." },
      ],
    },
  ],
  body: [
    "Studio City patients can get tooth-colored composite fillings at Beverly Hills Dental Arts Studio, 416 N. Bedford Dr., Suite 105, Beverly Hills, CA. The studio places composite and ceramic fillings only, with no metal, as part of a holistic, modern practice with in-house CT scanning and in-house specialists.",
    "If you live or work in Studio City, here is when a filling is needed, what a composite filling involves at our studio and how to reach us.",
    "## What is a composite filling?",
    "Composite resin is a tooth-colored material bonded directly to the tooth and built up in layers, cured as it goes. It suits small and moderate cavities and repairs on front teeth, where the shade and translucency can be matched closely.",
    "Composite is shaded against your own teeth and layered rather than placed as one flat color, so a repair on a front tooth is not obvious. Learn more about [dental fillings at our studio](/services/restorative-dentistry/dental-fillings/).",
    "## Why does the studio place composite instead of metal?",
    "The studio places mercury-free composite fillings as part of its holistic, biological approach. Composite and ceramic both bond to the tooth.",
    "Amalgam had to be mechanically locked into the tooth, which meant cutting away healthy structure to create the shape that would hold it. A bonded filling does not. We do not place amalgam.",
    "## How do you know if you might need a filling?",
    "Decay is often well established before it becomes uncomfortable. Signs worth asking about include:",
    "- Sensitivity to something hot, cold or sweet",
    "- A visible hole, a dark spot or a spot that catches your tongue",
    "- Pain on one tooth when you bite or chew",
    "- A chipped or worn tooth",
    "- A rough edge you keep catching with your tongue",
    "Any of these is a reason to ask, not a diagnosis. Only an exam can tell what is going on in your mouth.",
    "## Is a filling always needed?",
    "Not always. If decay is found at the early white-spot stage, before it breaks through the surface, the studio offers [no-drill cavity care](/services/preventive-dentistry/no-drill-cavity-care/) with Curodont, applied with no drilling.",
    "Once a cavity has broken through the surface, the damage stays, and a filling is how a dentist repairs it. Your dentist will tell you which one you need and why.",
    "## How is a composite filling placed at the studio?",
    "Digital X-rays help find decay. The tooth is numbed, the decay is removed, and the composite is layered and shaped by hand at the chairside. Your bite is checked and refined before you leave rather than at a follow-up.",
    "Ozone and a soft tissue laser are tools the studio can use as part of the process. Your dentist will tell you if they fit your treatment. Sedation is available for anyone anxious.",
    "## When is ceramic or an onlay a better fit?",
    "Ceramic is durable and stain-resistant, and better suited to larger cavities and to back teeth under heavy chewing pressure. Where a cavity is too large for composite but the tooth does not need a full crown, a ceramic inlay or onlay covers only the part that needs covering. Learn more about [porcelain inlays and onlays](/services/restorative-dentistry/porcelain-inlays-onlays/).",
    "## Can old metal fillings be replaced?",
    "Old metal fillings can be replaced with tooth-colored material where you would rather they were not visible. Your dentist will look at each filling and talk through your options.",
    "## Visiting our Beverly Hills studio from Studio City",
    "The studio is at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, and serves Studio City, CA patients. We also see patients from West Hollywood, Hollywood, Culver City, West LA, Century City and Mid-City. See all the [areas we serve](/areas-we-serve/).",
    "If this is your first visit, call the studio before you set out. The team can help with directions and arrival details.",
    "## Questions Studio City patients ask about composite fillings",
    "### Do you have an office in Studio City?",
    "No. Our only office is in Beverly Hills, at 416 N. Bedford Dr., Suite 105. Many of our patients come to see us from Studio City and the areas around it.",
    "### Do you place metal fillings?",
    "No. The studio places composite and ceramic fillings only. We do not place amalgam.",
    "### Can you replace my old silver fillings?",
    "Old metal fillings can be replaced with tooth-colored material where you would rather they were not visible. Your dentist will look at each one first.",
    "### Are composite fillings covered by insurance?",
    "The studio does not list filling insurance details or fees online. Coverage depends on your own plan, so check your benefits and ask the office what information they can share when you book.",
    "### Where can I get a composite filling near Studio City?",
    "Beverly Hills Dental Arts Studio, at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, offers composite fillings with in-house CT scanning and in-house specialists.",
    "If you have a sensitive tooth, a rough edge or a spot you have been meaning to have looked at, a visit with our team is a good first step. [Book your visit](/appointment/) at our Beverly Hills studio.",
  ],
  seo: {
    title: "Composite Fillings Studio City | Beverly Hills Dental Arts Studio",
    description: "Tooth-colored composite fillings for Studio City patients at Beverly Hills Dental Arts Studio, a holistic, modern practice with in-house CT and specialists.",
    noIndex: true,
  },
};
