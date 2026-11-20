/*
 * TTR-2491 (batch 2, page 1): "Composite Fillings for West Hollywood Patients", at /blog/composite-fillings-west-hollywood/. Same structure as the
 * Hollywood page (batch 1). The only office is in Beverly Hills, so the page is written for patients who come from
 * West Hollywood to Bedford Drive. Facts only from the client brain and the live Dental Fillings page. No drive times,
 * prices, lifespans or health claims. Preview only: noIndex until Kia approves it.
 */
import type { Post } from "../types";
import { images } from "./images.ts";

export const compositeFillingsWestHollywood: Post = {
  slug: "composite-fillings-west-hollywood",
  title: "Composite Fillings for West Hollywood Patients",
  date: "2026-11-20",
  author: "Dr. Nushin Shir",
  category: "restorative",
  service: "/services/restorative-dentistry/dental-fillings/",
  excerpt:
    "Tooth-colored composite fillings for West Hollywood patients at Beverly Hills Dental Arts Studio, a holistic, modern practice with in-house CT scanning and in-house specialists.",
  image: images.frontDeskSignWide,
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
      beforeHeading: "Questions West Hollywood patients ask about composite fillings",
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
    "West Hollywood patients can get tooth-colored composite fillings at Beverly Hills Dental Arts Studio, 416 N. Bedford Dr., Suite 105, Beverly Hills, CA. The studio places composite and ceramic fillings only, with no metal, as part of a holistic, modern practice with in-house CT scanning and in-house specialists.",
    "If you live or work in West Hollywood and have a chipped tooth, a worn edge or an old metal filling you would rather not see, here is how composite can help and how to reach us.",
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
    "## Can composite repair a chipped or worn tooth?",
    "Chips and worn edges can be rebuilt with composite in most cases, restoring the shape without preparing the whole tooth. Where the wear is caused by grinding, that needs addressing alongside, or the same forces will act on the new filling.",
    "That is why your dentist may talk with you about a [night guard](/services/preventive-dentistry/night-guards/). For chips and gaps on front teeth, [dental bonding](/services/cosmetic-dentistry/dental-bonding/) uses the same tooth-colored material.",
    "## How is a composite filling placed at the studio?",
    "Digital X-rays help find decay. The tooth is numbed, the decay is removed, and the composite is layered and shaped by hand at the chairside. Your bite is checked and refined before you leave rather than at a follow-up.",
    "Ozone and a soft tissue laser are tools the studio can use as part of the process. Your dentist will tell you if they fit your treatment. Sedation is available for anyone anxious.",
    "## When is ceramic or an onlay a better fit?",
    "Ceramic is durable and stain-resistant, and better suited to larger cavities and to back teeth under heavy chewing pressure. Where a cavity is too large for composite but the tooth does not need a full crown, a ceramic inlay or onlay covers only the part that needs covering. Learn more about [porcelain inlays and onlays](/services/restorative-dentistry/porcelain-inlays-onlays/).",
    "## Can old metal fillings be replaced?",
    "Old metal fillings can be replaced with tooth-colored material where you would rather they were not visible. Your dentist will look at each filling and talk through your options.",
    "## Visiting our Beverly Hills studio from West Hollywood",
    "The studio is at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, and serves West Hollywood, CA patients. You can read more on our [West Hollywood page](/areas-we-serve/west-hollywood/). We also see patients from Hollywood, Studio City, Culver City, West LA, Century City and Mid-City.",
    "If this is your first visit, call the studio before you set out. The team can help with directions and arrival details.",
    "## Questions West Hollywood patients ask about composite fillings",
    "### Do you have an office in West Hollywood?",
    "No. Our only office is in Beverly Hills, at 416 N. Bedford Dr., Suite 105. Many of our patients come to see us from West Hollywood and the areas around it.",
    "### Do you place metal fillings?",
    "No. The studio places composite and ceramic fillings only. We do not place amalgam.",
    "### Can you replace my old silver fillings?",
    "Old metal fillings can be replaced with tooth-colored material where you would rather they were not visible. Your dentist will look at each one first.",
    "### Are composite fillings covered by insurance?",
    "The studio does not list filling insurance details or fees online. Coverage depends on your own plan, so check your benefits and ask the office what information they can share when you book.",
    "### Where can I get a composite filling near West Hollywood?",
    "Beverly Hills Dental Arts Studio, at 416 N. Bedford Dr., Suite 105, Beverly Hills, CA, offers composite fillings with in-house CT scanning and in-house specialists.",
    "If you have a sensitive tooth, a rough edge or a spot you have been meaning to have looked at, a visit with our team is a good first step. [Book your visit](/appointment/) at our Beverly Hills studio.",
  ],
  seo: {
    title: "Composite Fillings West Hollywood | Beverly Hills Dental Arts Studio",
    description: "Tooth-colored composite fillings for West Hollywood patients at Beverly Hills Dental Arts Studio, a holistic, modern practice with in-house CT and specialists.",
    noIndex: true,
  },
};
