/*
 * TTR-2491 (batch 2, pages 3 and 4): two services the practice offers (client brain, onboarding form) that had no page:
 * Porcelain Crowns and TMJ Treatment. Same treatment template as the other service pages (hero, text band, accordion,
 * card pair, steps, image band, FAQ). Facts only from the client brain and the live site (the Restorative Dentistry
 * category lines for crowns and TMJ, the Root Canal, Inlays and Onlays, Night Guards and 3D CT Scans pages, the area
 * pages and Dr. Charlton's bio). No prices, no treatment times, no lifespans. Preview only: noIndex until Kia approves.
 */
import type { Service } from "../types";
import { images, videos } from "./images.ts";

export const ttr2491Services: Service[] = [
  {
    slug: "porcelain-crowns",
    title: "Porcelain Crowns",
    category: "restorative-dentistry",
    order: 8.1,
    sections: [
      {
        _type: "hero",
        heading: "Porcelain Crowns in Beverly Hills",
        subheading: "Restorative Dentistry",
        text: [
          "Full coverage for a tooth too damaged to hold a filling. Metal-free porcelain, made from a digital scan and shaded against your own teeth.",
        ],
        image: images.frontDeskVaseWide,
        overlay: "left",
        overlayOpacity: 0.7,
        textMaxWidth: 630,
      },
      {
        _type: "textBand",
        heading: "When a Crown Is the Right Repair",
        text: [
          "A crown covers the whole visible part of a tooth. It is used where a filling is not enough and an onlay would not give enough protection.",
          "The examination decides it, and usually the answer is the most conservative option that will hold. A filling where a filling is enough. An onlay rather than a full crown where the tooth allows it, since onlays conserve more of your own structure. Your dentist explains the options before anything starts.",
        ],
        tone: "light",
      },
      {
        _type: "accordionFeature",
        heading: "When a Crown May Be Part of Your Plan",
        text: ["These are the situations where a crown is most often discussed. Only an exam can tell whether one is right for your tooth."],
        image: images.treatmentChair,
        items: [
          {
            title: "A Tooth Too Damaged for a Filling",
            body: ["Where decay, a crack or an old large filling has left too little tooth to hold a filling, a crown gives the tooth full coverage."],
          },
          {
            title: "A Broken or Cracked Cusp",
            body: ["When a cusp fractures, a filling may no longer be enough. Discomfort on one tooth when you bite is worth having examined."],
          },
          {
            title: "After Root Canal Treatment",
            body: [
              "A root treated back tooth still takes heavy chewing loads. Full coverage with a crown or onlay distributes that load. Learn more about [root canal therapy](/services/restorative-dentistry/root-canal-therapy/).",
            ],
          },
          {
            title: "On a Dental Implant",
            body: [
              "An implant has three parts: the post, an abutment that connects it, and a custom porcelain crown on top. See [single tooth implants](/services/dental-implants-dentistry/single-tooth-implants/).",
            ],
          },
          {
            title: "Holding a Bridge",
            body: [
              "A bridge is a fixed replacement for one or more missing teeth, supported by crowns on the teeth either side. See [dental bridges](/services/restorative-dentistry/dental-bridges/).",
            ],
          },
        ],
        textMaxWidth: 814,
      },
      {
        _type: "cardPair",
        heading: "Crown or Onlay?",
        text: ["Two ways to restore a damaged tooth, chosen by how much of the tooth is left and how much protection it needs."],
        cards: [
          {
            // TTR-2604 (Dr. Shir, Nov 20): one of the practice's own before and after cases, shown whole (not cropped).
            image: {
              ...images.smileResult2,
              alt: "Before and after from one of Dr. Shir's patients: upper front teeth with a dark line at the gum, then an even row of new teeth",
            },
            imageFit: "contain",
            title: "PORCELAIN CROWN:",
            text: ["Full coverage for a tooth too damaged to hold a filling. Metal-free porcelain, made from a digital scan and shaded against your own teeth. Used where an onlay would not give enough protection."],
          },
          {
            image: images.imagingArea,
            title: "PORCELAIN ONLAY:",
            text: [
              "A conservative alternative to a full crown. Custom porcelain that covers only the damaged part of the tooth, so more of your own structure stays where it is. See [porcelain inlays and onlays](/services/restorative-dentistry/porcelain-inlays-onlays/).",
            ],
          },
        ],
      },
      {
        _type: "steps",
        heading: "How a Porcelain Crown Is Made",
        text: ["Every crown starts with an exam, and ends with your bite checked in the chair."],
        items: [
          { title: "Exam and X-rays", text: "Your dentist examines the tooth and takes digital X-rays to see what is under the surface.", icon: images.stepConsultation },
          { title: "The Tooth Is Prepared", text: "The tooth is numbed and shaped so the crown can sit over it.", icon: images.stepPreparation },
          { title: "A Digital Scan", text: "Our iTero® digital scanner records your teeth, with no impression trays.", icon: images.stepTreatment },
          { title: "Fitted and Checked", text: "The crown is shaded against your own teeth, fitted, and your bite is checked and adjusted.", icon: images.stepAftercare },
        ],
      },
      {
        _type: "imageBand",
        heading: "A Tooth Worth Keeping",
        text: [
          "If a tooth is cracked, heavily filled or has had a root canal, an exam and a digital X-ray will tell you where you stand and whether a filling, an onlay or a crown is the right repair. Book an appointment with our team.",
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69,
        textMaxWidth: 728,
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Porcelain Crowns",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "What is a porcelain crown?",
            answer: ["A crown is a cover for the whole visible part of a tooth. At the studio, crowns are metal-free porcelain, made from a digital scan and shaded against your own teeth."],
          },
          {
            question: "Why would I need a crown instead of a filling?",
            answer: ["When a tooth is too damaged to hold a filling and an onlay would not give enough protection. Your dentist looks at the tooth and explains the options before anything starts."],
          },
          {
            question: "Do you use metal in your crowns?",
            answer: ["No. The studio's crowns are metal-free porcelain."],
          },
          {
            question: "Do I need impression trays for a crown?",
            answer: ["No. Our iTero® digital scanner records your teeth as a 3D model, and the crown is made from that scan."],
          },
          {
            question: "Are crowns covered by insurance?",
            answer: ["The studio does not list crown insurance details or fees online. Coverage depends on your own plan, so check your benefits and ask the office what information they can share when you book."],
          },
        ],
      },
    ],
    seo: {
      title: "Porcelain Crowns in Beverly Hills | Beverly Hills Dental Arts Studio",
      description: "Metal-free porcelain crowns in Beverly Hills, made from a digital scan and shaded against your own teeth. Call 310.274.7005.",
      noIndex: true,
    },
  },
  {
    slug: "tmj-treatment",
    title: "TMJ Treatment",
    category: "restorative-dentistry",
    order: 14.1,
    sections: [
      {
        _type: "hero",
        heading: "TMJ Treatment in Beverly Hills",
        subheading: "Restorative Dentistry",
        text: ["Assessment and treatment for jaw pain, clicking and the headaches that come with it. Diagnosis first, then the most conservative treatment that addresses the cause."],
        image: images.lobbyRoundTableWide,
        overlay: "left",
        overlayOpacity: 0.7,
        textMaxWidth: 630,
      },
      {
        _type: "textBand",
        heading: "Treatment Planned From the Cause",
        text: [
          "Jaw pain, clicking, headaches on waking and worn teeth can all point to a bite or jaw joint problem.",
          "Dr. Shir screens for TMJ and TMD as part of your whole-health picture and plans treatment from the cause, not just the symptom. Dr. Charlton's training also includes TMJ therapy.",
        ],
        tone: "light",
      },
      {
        _type: "accordionFeature",
        heading: "Signs Worth Asking About",
        text: ["Any of these is a reason to ask, not a diagnosis. Only an exam can tell what is going on."],
        image: images.treatmentRoomSmileWide,
        items: [
          { title: "A Jaw That Aches in the Morning", body: ["Jaw muscles that ache when you wake and loosen through the day can be a sign of clenching overnight."] },
          { title: "Headaches on Waking", body: ["Headaches at the temples when you wake can show up with clenching, because the muscle that closes your jaw sits there."] },
          { title: "Clicking or a Tired Jaw Joint", body: ["Clicking when you open, difficulty opening wide first thing, or a jaw that feels tired by mid-morning."] },
          { title: "Pain When You Chew", body: ["Pain in the jaw when you chew can trace back to the jaw joint and the bite."] },
          { title: "Worn or Flattened Teeth", body: ["Teeth that look flatter, shorter or chipped can be a sign of grinding, which a dentist may notice at a checkup."] },
        ],
        textMaxWidth: 814,
      },
      {
        _type: "cardPair",
        heading: "How the Picture Comes Together",
        text: ["Grinding, jaw joint problems and sleep can overlap, so they are assessed together."],
        cards: [
          {
            // TTR-2593: the practice's video in place of the CT scanner photo (the photo stays as the fallback).
            image: images.cbctScanner,
            video: videos.treatmentRoom,
            videoPosition: "center 30%",
            title: "JAW JOINT IMAGING:",
            text: [
              "For TMJ cases where the picture is unclear, the joint structures can be viewed in three dimensions with our [in-house CT scanning](/services/dental-technology/ct-scans/), rather than inferred from symptoms alone. A scan is taken only when the exam shows it would help.",
            ],
          },
          {
            image: images.treatmentChair,
            title: "GRINDING AND SLEEP:",
            text: [
              "If you clench or grind, a custom [night guard](/services/preventive-dentistry/night-guards/) may be part of the plan. The studio also offers [sleep apnea treatment](/services/preventive-dentistry/sleep-apnea-treatment/), so if the exam points that way, it can be discussed in the same office.",
            ],
          },
        ],
      },
      {
        _type: "steps",
        heading: "How TMJ Care Works at the Studio",
        text: ["Diagnosis first, then the most conservative treatment that addresses the cause."],
        items: [
          { title: "We Listen and Examine", text: "Your dentist asks about your jaw, your mornings and your sleep, and examines your teeth, bite and jaw.", icon: images.stepConsultation },
          { title: "Imaging When It Helps", text: "Digital X-rays, and a 3D CT scan in the studio when the picture is unclear.", icon: images.stepPreparation },
          { title: "We Find the Cause", text: "Bite, grinding, the jaw joint and sleep are looked at together, not one at a time.", icon: images.stepTreatment },
          { title: "A Conservative Plan", text: "Your dentist explains your options, starting with the most conservative one that addresses the cause.", icon: images.stepAftercare },
        ],
      },
      {
        _type: "imageBand",
        heading: "Let Us Look at Your Jaw",
        text: [
          "If your jaw clicks, aches in the morning or makes chewing uncomfortable, tell us what you are noticing at your first visit and we will talk through your options. Book an appointment with our team.",
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69,
        textMaxWidth: 728,
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About TMJ Treatment",
        text: ["The questions patients ask most often, answered plainly."],
        items: [
          {
            question: "Do you treat TMJ problems?",
            answer: ["Yes. TMJ care is among the services we offer. Tell us what you are noticing at your first visit and we will talk through your options."],
          },
          {
            question: "What is the TMJ?",
            answer: ["The TMJ is your jaw joint, just in front of each ear. TMD is the name for problems with that joint and the muscles around it."],
          },
          {
            question: "Will a night guard help my jaw?",
            answer: [
              "A guard protects your teeth from the contact when you clench or grind. It does not promise that you will stop clenching. That is why we also look at what may be behind it, and keep checking your guard and your teeth at your regular visits.",
            ],
          },
          {
            question: "Do I need a 3D scan for TMJ?",
            answer: ["Not always. Where the picture is unclear, the jaw joint can be viewed in three dimensions in the studio. Your dentist decides after an exam whether a scan will help your care."],
          },
          {
            question: "Is TMJ treatment covered by insurance?",
            answer: ["The studio does not list TMJ insurance details or fees online. Coverage depends on your own plan, so check your benefits and ask the office what information they can share when you book."],
          },
        ],
      },
    ],
    seo: {
      title: "TMJ Treatment in Beverly Hills | Beverly Hills Dental Arts Studio",
      description: "TMJ treatment in Beverly Hills for jaw pain, clicking and morning headaches. Diagnosis first, with in-house CT scanning when it helps. Call 310.274.7005.",
      noIndex: true,
    },
  },
];
