/*
 * ChatGPT Ads landing pages (TTR-1156; brief of Nov 3, 2026, docs/LANDING-PAGES-BRIEF.md). Built like the homepage: the practice's own
 * photos, the same ideas (biological, biomimetic, holistic), the technology and Dr. Shir's background, in the practice's own words from
 * its homepage and About page. No prices, ratings, badges, testimonials, guarantees or "24/7".
 * Offers: only the practice's own new patient specials, as on its printed flyers (Nov 9, 2026), in OFFERS below. Add no terms the practice did not give.
 * The practice confirmed the Invisalign name (Carlos Torres, Nov 5, 2026). CONFIRM with the practice: the hours.
 */
export type LpImage = { src: string; alt: string };
export type OfferKey = "cleaning" | "treatment" | "invisalign" | "invisalignConsult";
export type TechKey = "ozone" | "ct" | "scanner" | "laser" | "xray";

export type LpPage = {
  slug: string;
  key: string; // page key sent with the lead
  title: string; // browser title
  headline: string;
  support: string;
  primary: { label: string; target: "form" | "call" };
  formTitle: string;
  formButton: string;
  formNote: string;
  hero: LpImage & { pos?: string };
  heroVideo?: boolean; // the website hero video plays over the hero photo (large screens, normal connections; the photo is the poster). On unless false.
  focusWide?: boolean; // the main-section photo is landscape (e.g. the team): the card is 3:2 on desktop too, so nobody is cropped out
  closingImage?: LpImage & { pos?: string }; // behind the closing action; the reception hallway when not set
  notice?: string; // urgent care notice
  availability?: string;
  offers?: OfferKey[]; // new patient specials shown in the hero; DEFAULT_OFFERS when not set
  focus: { heading: string; intro?: string; items?: string[]; paragraphs?: string[]; image: LpImage };
  steps: { heading: string; intro?: string; items: { title: string; text: string }[] };
  tech: TechKey[];
  showWork: boolean;
  faqs: { q: string; a: string }[];
  closing: { heading: string; text: string };
};

export const PRACTICE = {
  name: "Beverly Hills Dental Arts Studio",
  doctor: "Dr. Nushin Shir",
  // Call tracking number for the ChatGPT ad pages only (Nov 5, 2026); it forwards to the practice line 310-274-7005, which the main site and Google listing keep.
  phone: "424-424-3347",
  tel: "tel:+14244243347",
  address: "416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210",
  map: "https://www.google.com/maps/search/?api=1&query=416+N+Bedford+Dr+Suite+105+Beverly+Hills+CA+90210",
  hours: [
    { days: "Monday to Thursday", time: "8:00 a.m. to 5:30 p.m." },
    { days: "Friday", time: "8:00 a.m. to 1:00 p.m." },
    { days: "Saturday and Sunday", time: "Closed" },
  ],
};

/* New patient specials, as printed on the practice's flyers (Kia, Nov 9, 2026). Add no terms the practice did not give. */
export const OFFERS: Record<OfferKey, { amount: string; text: string; aside?: string; or?: boolean }> = {
  cleaning: { amount: "$99", text: "new patient exam, x-rays and cleaning", aside: "(without insurance)" },
  treatment: { amount: "$200 off", text: "your treatment", or: true },
  invisalign: { amount: "$2,000 off", text: "Invisalign" },
  invisalignConsult: { amount: "Free", text: "Invisalign consultation" },
};
export const DEFAULT_OFFERS: OfferKey[] = ["cleaning", "treatment"];

/** The small print under the offer card. Pages with the two choices say to choose one. */
export const finePrint = (keys: OfferKey[]) =>
  keys.includes("cleaning") && keys.includes("treatment") ? "New patients only. Choose one offer. Offers can't be combined. Ends Dec 31, 2026." : "New patients only. Offers can't be combined. Ends Dec 31, 2026.";

/* Shared building blocks, from the practice's homepage and About page. */
export const STRIP = ["Over 30 years of experience", "In-office 3D imaging", "Ozone therapy and soft-tissue lasers"];

export const PILLARS = {
  heading: "We treat you, not just your teeth",
  text: "Dr. Shir has spent over thirty years refining an approach that protects your health while it rebuilds your smile.",
  items: [
    { title: "Biological", text: "Ozone therapy, biocompatible materials, and a health-first plan. Dr. Shir holds two Master's degrees in Public Health, and it shows in every decision." },
    { title: "Biomimetic", text: "We rebuild teeth to match what nature built. Soft-tissue lasers and in-office CT mean less drilling, and more of your own tooth stays." },
    { title: "Holistic", text: "Your mouth is connected to the rest of you. Dr. Shir screens, treats, and plans with your whole health in view, not just the tooth in front of her." },
  ],
};

export const BAND = {
  heading: "Thirty Years of Doing It Differently",
  text: "Ozone therapy, soft-tissue lasers, in-office CT. Dr. Shir invested in the technology most practices refer out for, so your care never leaves this office.",
  image: { src: "/images/office/hallway-wide.jpg", alt: "The hallway at Beverly Hills Dental Arts Studio, with a silver vase on a round white table and framed photographs on the walls" },
};

export const TECH_INTRO = { heading: "Technology and Innovation", text: "Imaging, diagnosis and treatment happen in one office, with one team accountable for your care from the first scan to the final result." };
export const TECH: Record<TechKey, { title: string; text: string; image: LpImage }> = {
  ct: { title: "3D CT scans", text: "In-office 3D imaging, so planning and diagnosis happen in the same office.", image: { src: "/images/technology/cbct-scanner.jpg", alt: "The 3D CT scanner at Beverly Hills Dental Arts Studio" } },
  scanner: { title: "Digital scanner", text: "A digital scan of your teeth, where suitable, to plan your care.", image: { src: "/images/technology/itero-scanner.jpg", alt: "The iTero digital scanner at Beverly Hills Dental Arts Studio" } },
  ozone: { title: "Ozone therapy", text: "Used alongside conventional treatment, for example in prepared cavities, cleaned gum pockets and extraction sockets.", image: { src: "/images/technology/ozone-unit.jpg", alt: "The ozone therapy unit at Beverly Hills Dental Arts Studio" } },
  laser: { title: "Soft-tissue lasers", text: "Laser care for the gums, as part of a plan made for you.", image: { src: "/images/technology/soft-tissue-laser.jpg", alt: "The soft-tissue laser at Beverly Hills Dental Arts Studio" } },
  xray: { title: "Digital X-rays", text: "Digital X-rays taken in the office, as part of your examination.", image: { src: "/images/technology/digital-x-ray-room.jpg", alt: "The digital X-ray room at Beverly Hills Dental Arts Studio" } },
};

export const BIO = {
  heading: "Meet Dr. Nushin Shir",
  paragraphs: [
    "Dr. Shir, the principal dentist at Beverly Hills Dental Arts Studio, earned her DDS from UCLA and holds two master's degrees in public health from UCLA, in epidemiology and healthcare policy.",
    "With over 30 years of experience and a background teaching restorative dentistry, she is known for complex cosmetic and restorative care. Every plan is tailored to your goals, your comfort, and your long-term well-being.",
  ],
  image: { src: "/images/team/dr-nushin-shir.jpg", alt: "Dr. Nushin Shir" },
};

export const WORK = {
  heading: "Our Work",
  text: "Real patients of the practice. Results vary and depend on your examination.",
  images: [
    { src: "/images/results/smile-result-1.jpg", alt: "A patient's smile before and after treatment at the practice" },
    { src: "/images/results/smile-result-2.jpg", alt: "A patient's smile before and after treatment at the practice" },
    { src: "/images/results/smile-result-3.jpg", alt: "A patient's smile before and after treatment at the practice" },
  ],
};

const SUCCESS_NOTE = "Your request is not a confirmed appointment. Our team will contact you about availability.";
const HERO = (pos: string) => ({ src: "/images/office/hallway-wide.jpg", alt: "The reception area of Beverly Hills Dental Arts Studio", pos });

export const LP_PAGES: LpPage[] = [
  {
    slug: "beverly-hills-dentist",
    key: "general-biomimetic",
    title: "Dentist in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Dental Care That Puts Your Natural Teeth First",
    support: "Meet Dr. Nushin Shir in Beverly Hills for a personalized dental assessment and a clear plan for your next step. Explore general, restorative, and biomimetic care with your goals in mind.",
    primary: { label: "Request an Appointment", target: "form" },
    formTitle: "Request an appointment",
    formButton: "Request an Appointment",
    formNote: SUCCESS_NOTE,
    hero: HERO("60% 50%"),
    focus: {
      heading: "Care centered on your goals",
      intro: "Every visit starts with listening. Your first appointment is built around three things:",
      items: ["An examination of your teeth, gums and bite", "A discussion of your options, explained in plain language", "A personalized treatment plan that fits your goals"],
      image: { src: "/images/office/reception-desk.jpg", alt: "The reception desk at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your first visit, step by step",
      items: [
        { title: "Biological Assessment", text: "The first visit is about your health, not just your teeth. Dr. Shir examines, scans in-house, and plans around your whole body before any treatment begins." },
        { title: "Biomimetic Treatment", text: "We rebuild teeth the way nature made them, with ozone and lasers instead of drilling where possible, so more of your own tooth stays where it belongs." },
        { title: "Natural Care That Continues", text: "A smile that looks like yours, only healthier. Holistic care continues after you leave the chair, with one team who already knows your history." },
      ],
    },
    tech: ["ct", "scanner", "ozone", "laser"],
    showWork: true,
    faqs: [
      { q: "What is biomimetic dentistry?", a: "It is an approach to restoring teeth with attention to natural tooth structure and function. Dr. Shir can explain whether it fits your needs after an examination." },
      { q: "Can I discuss more than one concern?", a: "Yes. Tell the team that you would like a comprehensive consultation when arranging your visit." },
      { q: "How much will treatment cost?", a: "Costs depend on your assessment and recommended treatment. Ask the team about a written plan before deciding." },
    ],
    closing: { heading: "Ready to take the next step?", text: "Request an appointment and our team will contact you about availability." },
  },
  {
    slug: "invisalign-beverly-hills",
    key: "clear-aligners",
    // The practice asked for the Invisalign name in visible copy (Carlos Torres, Nov 5, 2026). The key stays "clear-aligners" for lead reports.
    title: "Invisalign in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Explore Invisalign in Beverly Hills",
    support: "Considering a straighter smile? Meet Dr. Nushin Shir to review your teeth, bite, and Invisalign options, with a treatment plan tailored to your needs.",
    primary: { label: "Request an Invisalign Consultation", target: "form" },
    formTitle: "Request an Invisalign consultation",
    formButton: "Request an Invisalign Consultation",
    formNote: "Find out whether Invisalign is suitable for you. Treatment and timing depend on an examination. " + SUCCESS_NOTE,
    hero: HERO("30% 50%"),
    offers: ["invisalign", "invisalignConsult"],
    focus: {
      heading: "Why consider Invisalign",
      intro: "Many adults choose Invisalign aligners because they are:",
      items: ["Removable trays", "A discreet appearance", "Digitally planned treatment", "Not right for everyone: suitability depends on your teeth, gums and bite"],
      image: TECH_IMAGE("scanner"),
    },
    steps: {
      heading: "Your consultation, step by step",
      items: [
        { title: "Assessment", text: "Dr. Shir looks at your teeth, gums and bite." },
        { title: "Digital scanning", text: "A digital scan, if appropriate for your case." },
        { title: "Options", text: "You discuss your choices, the expected timing and the cost." },
        { title: "Treatment and retainers", text: "You wear your trays as prescribed and return for reviews. Retainers help maintain the result afterwards." },
      ],
    },
    tech: ["scanner", "xray", "ct"],
    showWork: true,
    faqs: [
      { q: "Is Invisalign right for everyone?", a: "No. Suitability depends on your teeth, gums, and bite. Some cases need another treatment or specialist care." },
      { q: "How long does treatment take?", a: "Your clinician will discuss an expected timeline after assessment. Timing varies by case and prescribed wear." },
      { q: "What does treatment cost?", a: "Ask for a personalized estimate after the consultation." },
    ],
    closing: { heading: "Find out if Invisalign suits you", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "emergency-dentist-beverly-hills",
    key: "emergency",
    title: "Emergency Dentist in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Need an Emergency Dentist in Beverly Hills",
    support: "For an urgent dental concern, call Beverly Hills Dental Arts Studio to ask about the next available appointment. Our team can help you arrange an assessment during office hours.",
    primary: { label: "Call 424-424-3347", target: "call" },
    formTitle: "Request a callback",
    formButton: "Request a Callback",
    formNote: "Appointment availability varies. Online requests are not monitored continuously and are not confirmed bookings.",
    availability: "Appointment availability varies. Online requests are not monitored continuously and are not confirmed bookings.",
    hero: HERO("50% 60%"),
    notice: "For trouble breathing or swallowing, severe facial swelling, uncontrolled bleeding, or a serious injury, seek emergency medical care immediately. Do not wait for an online response.",
    focus: {
      heading: "Reasons to call",
      intro: "Call the office if you have:",
      items: ["A toothache", "A chipped or broken tooth", "A lost filling", "A loose crown"],
      image: { src: "/images/office/treatment-room-chair.jpg", alt: "A treatment room at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "What happens next",
      items: [
        { title: "Call the practice", text: "Tell the team you need an urgent appointment." },
        { title: "Confirm availability", text: "The team checks what time can be offered." },
        { title: "Attend an examination", text: "Dr. Shir examines the problem and explains your options." },
      ],
    },
    tech: ["xray", "ct", "laser"],
    showWork: false,
    faqs: [
      { q: "Can I get a same-day appointment?", a: "Call the office to check. Same-day availability is not guaranteed." },
      { q: "What if the office is closed?", a: "Check the practice voicemail for any after-hours instructions. Online forms are not monitored continuously." },
      { q: "Does submitting the form reserve a visit?", a: "No. The team must contact you to confirm an appointment." },
    ],
    closing: { heading: "Call the office to ask about the next available appointment", text: "Same-day availability is not guaranteed." },
  },
  {
    slug: "dental-implants-beverly-hills",
    key: "dental-implants",
    title: "Dental Implants in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Explore Dental Implants in Beverly Hills",
    support: "Meet Dr. Nushin Shir to discuss options for replacing missing teeth. Your assessment can include in-office 3D imaging and a personalized plan based on your oral health and goals.",
    primary: { label: "Request an Implant Consultation", target: "form" },
    formTitle: "Request an implant consultation",
    formButton: "Request an Implant Consultation",
    formNote: "An examination is needed to determine suitability, treatment sequence, and costs. " + SUCCESS_NOTE,
    hero: HERO("70% 50%"),
    offers: ["cleaning", "treatment"],
    focus: {
      heading: "Understand your options",
      paragraphs: ["Missing teeth can be replaced in different ways, from a single tooth to a full arch. Dr. Shir assesses your mouth and explains which choices may suit you.", "Your assessment can include in-office 3D imaging, an assessment of your bone and gums, and a discussion of a written treatment plan."],
      image: TECH_IMAGE("ct"),
    },
    steps: {
      heading: "Treatment stages",
      intro: "The sequence and the length of treatment vary. Your plan will be explained to you before you decide.",
      items: [
        { title: "Consultation", text: "You talk through your goals and your health." },
        { title: "Any preparation", text: "Some cases need work before an implant is placed." },
        { title: "Implant placement", text: "The implant is placed as planned." },
        { title: "Healing", text: "Healing takes time and varies from person to person." },
        { title: "Restoration", text: "The final tooth is fitted." },
      ],
    },
    tech: ["ct", "scanner", "ozone", "laser"],
    showWork: true,
    faqs: [
      { q: "Am I a candidate for implants?", a: "Suitability depends on your oral health, bone, medical history, and other factors assessed by the clinician." },
      { q: "How long does the process take?", a: "The timeline depends on your treatment plan and healing. Your consultation will clarify the expected stages." },
      { q: "How much do implants cost?", a: "Costs vary with the number of teeth and treatment required. Request an individualized written estimate." },
    ],
    closing: { heading: "Talk through your options", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "veneers-smile-makeover-beverly-hills",
    key: "veneers-smile-makeover",
    title: "Veneers and Smile Makeovers in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Explore Veneers and Smile Makeovers in Beverly Hills",
    support: "Meet Dr. Nushin Shir to talk about your smile goals. Your consultation covers what is possible for your teeth, your options, and a plan made for you.",
    primary: { label: "Request a Smile Consultation", target: "form" },
    formTitle: "Request a smile consultation",
    formButton: "Request a Smile Consultation",
    formNote: "Whether veneers or another option suits you depends on an examination. " + SUCCESS_NOTE,
    hero: HERO("45% 50%"),
    focus: {
      heading: "Designed around your smile",
      intro: "A smile makeover is a plan, not a single treatment. Your consultation can cover:",
      items: ["Your goals for the look of your smile", "Options such as porcelain veneers, whitening, bonding or aligners, where suitable", "How your teeth, gums and bite affect the plan", "Timing and costs, explained before you decide"],
      image: { src: "/images/office/cosmetic-dentistry-sign.jpg", alt: "The cosmetic dentistry sign at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your smile consultation, step by step",
      intro: "The sequence and the length of treatment vary. Your plan will be explained to you before you decide.",
      items: [
        { title: "Talk about your goals", text: "You tell Dr. Shir what you would like to change." },
        { title: "Examination and scan", text: "Dr. Shir examines your teeth, gums and bite, with a digital scan if suitable." },
        { title: "Your plan", text: "You review the options, the timing and the cost." },
        { title: "Treatment in stages", text: "Your plan is carried out as discussed, with reviews along the way." },
      ],
    },
    tech: ["scanner", "xray", "ct"],
    showWork: true,
    faqs: [
      { q: "Are veneers right for everyone?", a: "No. Suitability depends on your teeth, gums, and bite, and some smiles are better served by another treatment. Dr. Shir can explain after an examination." },
      { q: "How long does a smile makeover take?", a: "Timing depends on your plan. Your consultation will explain the expected stages." },
      { q: "How much does it cost?", a: "Costs depend on the treatment in your plan. Ask the team for a written estimate before you decide." },
    ],
    closing: { heading: "Start with a conversation about your smile", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "teeth-cleaning-exam-beverly-hills",
    key: "cleaning-exam",
    title: "Teeth Cleaning and New Patient Exams in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Teeth Cleaning and New Patient Exams in Beverly Hills",
    support: "New to the practice? Meet Dr. Nushin Shir's team for a thorough examination and a clear plan for your next step.",
    primary: { label: "Request a New Patient Visit", target: "form" },
    formTitle: "Request a new patient visit",
    formButton: "Request a New Patient Visit",
    formNote: "Ask the team about insurance and costs when they contact you. " + SUCCESS_NOTE,
    hero: HERO("55% 50%"),
    focus: {
      heading: "What your first visit includes",
      intro: "Your first visit is about your health, not just your teeth. It can include:",
      items: ["A conversation about your health and your goals", "An examination of your teeth, gums and bite", "Digital X-rays, where needed", "A professional cleaning, where appropriate", "A clear plan for what comes next"],
      image: { src: "/images/office/hygienist-treating-patient.jpg", alt: "A hygienist treating a patient at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your first visit, step by step",
      items: [
        { title: "Request a visit", text: "Send the short form or call the office." },
        { title: "Talk about availability", text: "Our team contacts you to find a time that works." },
        { title: "Exam and cleaning", text: "Dr. Shir's team examines your teeth and gums and cleans them where appropriate." },
        { title: "Your plan", text: "You go over what was found and the recommended next steps before deciding." },
      ],
    },
    tech: ["xray", "scanner", "ct"],
    showWork: false,
    faqs: [
      { q: "How do I become a new patient?", a: "Send a request or call the office. The team will contact you about availability. Your request is not a confirmed appointment." },
      { q: "What happens at a new patient exam?", a: "The team looks at your teeth, gums and bite, may take digital X-rays if needed, and talks with you about your health and your goals." },
      { q: "Will my insurance cover a cleaning?", a: "Coverage depends on your plan. Ask the team about your insurance before your visit." },
    ],
    closing: { heading: "Ready for a visit?", text: "Request a new patient visit and our team will contact you about availability." },
  },
  {
    slug: "teeth-whitening-beverly-hills",
    key: "teeth-whitening",
    title: "Professional Teeth Whitening in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Professional Teeth Whitening in Beverly Hills",
    support: "Dentist-supervised whitening with Dr. Nushin Shir, chosen to suit your teeth and your timeframe. Your teeth are examined first, so the treatment fits you.",
    primary: { label: "Request a Whitening Consultation", target: "form" },
    formTitle: "Request a whitening consultation",
    formButton: "Request a Whitening Consultation",
    formNote: "Whether and how to whiten depends on an examination. " + SUCCESS_NOTE,
    hero: HERO("45% 50%"),
    focus: {
      heading: "Whitening that starts with an examination",
      intro: "Professional whitening is supervised, not just dispensed. Your visit can include:",
      items: ["An examination for decay, leaking fillings and gum recession", "A look at your starting shade, so the change can be measured", "In-office treatment, custom take-home trays, or both, chosen for your situation", "Sensitivity managed where needed"],
      image: { src: "/images/office/cosmetic-dentistry-sign.jpg", alt: "The cosmetic dentistry sign at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your whitening visit, step by step",
      items: [
        { title: "Examination", text: "Dr. Shir checks your teeth and gums first." },
        { title: "Choose your option", text: "In-office, take-home trays, or both, based on your teeth and timeframe." },
        { title: "Whitening", text: "Professional-grade agents, with your gums protected." },
        { title: "Review", text: "You are shown your starting shade and reviewed against it afterwards." },
      ],
    },
    tech: ["scanner", "xray", "laser"],
    showWork: true,
    faqs: [
      { q: "Is professional whitening right for my teeth?", a: "Dr. Shir examines your teeth and gums first, because whitening over decay, leaking fillings or gum recession causes problems. Whether and how to whiten depends on that examination." },
      { q: "Will my crowns, veneers or fillings whiten too?", a: "No. Whitening changes natural tooth structure only, so existing crowns, veneers and fillings keep their shade. If they are in your smile line, the plan takes that into account." },
      { q: "Will it make my teeth sensitive?", a: "Some people feel sensitivity. It is managed where needed, and the approach is adjusted to what your teeth can comfortably handle. How much it costs is explained after your examination." },
    ],
    closing: { heading: "Start with an examination", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "full-arch-implants-beverly-hills",
    key: "full-arch-implants",
    title: "Full Arch Dental Implants in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Full Arch Implants in Beverly Hills",
    support: "Missing most or all of your teeth, or living with a denture that will not stay put? Meet Dr. Nushin Shir to discuss a fixed set of teeth carried by a small number of implants, planned on a 3D scan taken in this office.",
    primary: { label: "Request a Full Arch Consultation", target: "form" },
    formTitle: "Request a full arch consultation",
    formButton: "Request a Full Arch Consultation",
    formNote: "An examination and a 3D scan are needed to know whether full arch implants suit you. " + SUCCESS_NOTE,
    hero: HERO("70% 50%"),
    focus: {
      heading: "What are full arch implants?",
      paragraphs: ["Full arch implants replace a complete upper or lower arch using a small number of implants to carry a fixed set of teeth. The implants are placed where your bone can support them.", "Unlike a conventional denture, the result is fixed in place, so it does not move while you eat or speak. Whether it is right for you depends on your bone and your health, which is why the plan starts with a 3D scan taken in this office."],
      image: TECH_IMAGE("ct"),
    },
    steps: {
      heading: "Treatment stages",
      intro: "The sequence and the length of treatment vary. Your plan will be explained to you before you decide.",
      items: [
        { title: "Consultation and 3D scan", text: "You talk through your goals, and the scan maps your bone." },
        { title: "Planning", text: "Positions are planned on your scan before treatment begins." },
        { title: "Implant placement", text: "The implants are placed as planned." },
        { title: "Healing", text: "Healing takes time and varies from person to person." },
        { title: "Your new teeth", text: "The arch is designed for your face and reviewed with you." },
      ],
    },
    tech: ["ct", "scanner", "laser"],
    showWork: true,
    faqs: [
      { q: "Am I a candidate for full arch implants?", a: "Suitability depends on the bone available, your health and other factors. A 3D scan and an examination show what is possible." },
      { q: "Will my case need any preparation first?", a: "Some cases need preparation and others do not. Your plan is made from your own scan, and Dr. Shir will explain what your case needs." },
      { q: "How long does it take, and what does it cost?", a: "Timing and cost depend on your plan and your healing. Request a written estimate after your consultation." },
    ],
    closing: { heading: "Talk through your options", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "dental-crowns-beverly-hills",
    key: "dental-crowns",
    title: "Dental Crowns and Broken Tooth Repair in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Dental Crowns and Broken Tooth Repair in Beverly Hills",
    support: "A cracked, broken or heavily worn tooth? Meet Dr. Nushin Shir to look at your options, from a conservative onlay to a metal-free porcelain crown, chosen after an examination.",
    primary: { label: "Request a Crown Consultation", target: "form" },
    formTitle: "Request a crown consultation",
    formButton: "Request a Crown Consultation",
    formNote: "Which restoration suits your tooth depends on an examination. " + SUCCESS_NOTE,
    hero: HERO("50% 55%"),
    focus: {
      heading: "Protecting a damaged tooth",
      intro: "Dr. Shir removes as little healthy tooth as the situation allows and chooses the smallest restoration that will hold. Depending on your tooth, that may be:",
      items: ["A tooth-colored filling, for smaller damage", "An onlay, which covers only the part of the tooth that needs covering", "A metal-free porcelain crown, made from a digital scan and shaded against your own teeth, where the tooth needs full coverage"],
      image: { src: "/images/office/treatment-room-chair.jpg", alt: "A treatment room at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your visit, step by step",
      items: [
        { title: "Examination", text: "Dr. Shir examines the tooth, with digital X-rays where needed." },
        { title: "Your options", text: "You go over what the tooth needs and the alternatives." },
        { title: "Preparation and scan", text: "The tooth is prepared and a digital scan is taken." },
        { title: "Your restoration", text: "The finished restoration is fitted and checked with you." },
      ],
    },
    tech: ["xray", "scanner", "ct"],
    showWork: true,
    faqs: [
      { q: "Do I need a crown or a filling?", a: "It depends on how much of the tooth is damaged. A crown is used where a tooth is too damaged to hold a filling and an onlay would not give enough protection." },
      { q: "What if my tooth is broken right now?", a: "Call the office to ask about the next available appointment. Same-day availability is not guaranteed. For trouble breathing or swallowing, severe facial swelling or uncontrolled bleeding, seek emergency medical care immediately." },
      { q: "How much does a crown cost?", a: "Costs depend on the treatment in your plan. Ask the team for a written estimate before you decide." },
    ],
    closing: { heading: "Get your tooth looked at", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "dental-bridges-beverly-hills",
    key: "dental-bridges",
    title: "Dental Bridges in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Dental Bridges in Beverly Hills",
    support: "Replace one or more missing teeth with a fixed bridge, custom made and shaded to your own teeth. Dr. Nushin Shir will explain your options, including bridges and implants, against your situation.",
    primary: { label: "Request a Bridge Consultation", target: "form" },
    formTitle: "Request a bridge consultation",
    formButton: "Request a Bridge Consultation",
    formNote: "Which option suits you depends on an examination. " + SUCCESS_NOTE,
    hero: HERO("35% 50%"),
    focus: {
      heading: "Closing the gap",
      paragraphs: ["A bridge replaces one or more missing teeth by anchoring the replacement to the teeth on either side, or to implants.", "The trade-off is worth understanding before you choose: the anchor teeth are prepared for crowns, and enamel removed for a bridge does not grow back. Dr. Shir will set out the options against your situation and will not default to one."],
      image: TECH_IMAGE("scanner"),
    },
    steps: {
      heading: "Your bridge consultation, step by step",
      items: [
        { title: "Examination", text: "Dr. Shir examines the gap and the teeth around it." },
        { title: "Options explained", text: "A bridge, an implant or another option, set out against your situation." },
        { title: "Digital scan", text: "A digital scan is taken so the bridge can be made to fit." },
        { title: "Your bridge", text: "The finished bridge is fitted and checked with you." },
      ],
    },
    tech: ["scanner", "xray", "ct"],
    showWork: true,
    faqs: [
      { q: "What types of bridge are there?", a: "Traditional, cantilever, Maryland bonded and implant-supported bridges. Which one suits you depends on your teeth, your bite and where the gap is." },
      { q: "Should I choose a bridge or an implant?", a: "A bridge uses the neighboring teeth as anchors, so those teeth are prepared. An implant is a different option that leaves the neighboring teeth untouched. Dr. Shir can explain both after an examination." },
      { q: "How much does a bridge cost?", a: "Costs depend on the type of bridge and the number of teeth. Request a written estimate after your consultation." },
    ],
    closing: { heading: "Talk through your options", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "tooth-colored-fillings-beverly-hills",
    key: "tooth-colored-fillings",
    title: "Tooth-Colored Fillings in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Tooth-Colored Fillings in Beverly Hills",
    support: "Metal-free fillings that bond to your own tooth, placed conservatively so as little healthy tooth as possible is removed. Meet Dr. Nushin Shir for an examination.",
    primary: { label: "Request a Filling Consultation", target: "form" },
    formTitle: "Request a filling consultation",
    formButton: "Request a Filling Consultation",
    formNote: "Whether you need a filling depends on an examination. " + SUCCESS_NOTE,
    hero: HERO("55% 50%"),
    focus: {
      heading: "Metal-free fillings that bond to the tooth",
      intro: "Fillings repair teeth affected by decay, fracture or wear. The practice places composite resin and ceramic fillings only. Signs worth getting checked:",
      items: ["Sensitivity to hot, cold or sweet", "A visible hole or a dark spot", "Pain when biting or chewing", "A chipped or worn tooth", "A rough edge you keep catching with your tongue"],
      image: { src: "/images/office/hygienist-treating-patient.jpg", alt: "A hygienist treating a patient at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your visit, step by step",
      items: [
        { title: "Examination", text: "Dr. Shir examines the tooth, with digital X-rays where needed." },
        { title: "Your options", text: "You go over what the tooth needs." },
        { title: "Treatment", text: "The filling is placed conservatively and shaped to match the tooth." },
        { title: "Check", text: "The fit and the bite are checked with you." },
      ],
    },
    tech: ["xray", "scanner", "laser"],
    showWork: false,
    faqs: [
      { q: "Do you use amalgam fillings?", a: "No. The practice places composite resin and ceramic fillings, which bond to the remaining tooth." },
      { q: "How do I know if I need a filling?", a: "Decay can be well established before it hurts. Sensitivity, a visible hole or pain when biting are reasons to book an examination." },
      { q: "How much does a filling cost?", a: "Costs depend on the tooth and the treatment. Ask the team for an estimate before you decide." },
    ],
    closing: { heading: "Get your tooth checked", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "restorative-dentistry-beverly-hills",
    key: "restorative-dentistry",
    title: "Restorative Dentistry in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Restorative Dentistry in Beverly Hills",
    support: "Repair damaged teeth and replace missing ones, restoring function and appearance. Planned with 3D imaging taken in this office and carried out by Dr. Nushin Shir.",
    primary: { label: "Request a Consultation", target: "form" },
    formTitle: "Request a consultation",
    formButton: "Request a Consultation",
    formNote: "Which treatment your case needs is decided at the examination. " + SUCCESS_NOTE,
    hero: HERO("50% 50%"),
    focus: {
      heading: "Rebuild what is damaged, replace what is missing",
      intro: "Restorative dentistry covers everything from a single filling to rebuilding a full arch. The principle throughout is conservation: remove as little healthy tooth as the situation allows, and choose the smallest restoration that will hold. Treatments include:",
      items: ["Tooth-colored fillings", "Dental crowns, and inlays and onlays", "Dental bridges", "Dentures and partial dentures", "Dental implants", "Root canal therapy"],
      image: { src: "/images/office/dentists-treating-patient.jpg", alt: "Dr. Shir's team treating a patient at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your first visit, step by step",
      items: [
        { title: "Examination and imaging", text: "Dr. Shir examines your teeth, with imaging taken in this office." },
        { title: "Your options", text: "You go over what each tooth needs, in plain language." },
        { title: "Your plan", text: "The treatment, the timing and the cost are explained before you decide." },
        { title: "Treatment", text: "Your care is carried out as planned, with one team who knows your history." },
      ],
    },
    tech: ["ct", "scanner", "xray", "laser"],
    showWork: true,
    faqs: [
      { q: "What does restorative dentistry include?", a: "Fillings, crowns, inlays and onlays, bridges, dentures and partial dentures, implants and root canal therapy. Which one your case needs is decided at the examination." },
      { q: "Will I need a crown?", a: "Not always. Onlays are used instead of full crowns wherever the tooth permits, and Dr. Shir will tell you when a tooth others have written off can still be restored." },
      { q: "How much will treatment cost?", a: "Costs depend on your assessment and recommended treatment. Ask the team about a written plan before deciding." },
    ],
    closing: { heading: "Ready to start?", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "full-mouth-rehabilitation-beverly-hills",
    key: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Full Mouth Rehabilitation in Beverly Hills",
    support: "Worn, damaged or missing teeth, planned as one complete restoration with crowns, bridges, veneers and smile makeovers. Dr. Nushin Shir treats you, not just your teeth.",
    primary: { label: "Request a Free Consultation", target: "form" },
    formTitle: "Request a free consultation",
    formButton: "Request a Free Consultation",
    formNote: "What your mouth needs is decided at the examination. " + SUCCESS_NOTE,
    hero: { src: "/images/office/hallway-wide.jpg", alt: "The hallway at Beverly Hills Dental Arts Studio, with a silver vase on a round white table and framed photographs on the walls", pos: "50% 55%" },
    closingImage: { src: "/images/office/front-desk-wide.jpg", alt: "The front desk at Beverly Hills Dental Arts Studio, with a mosaic mirror and the Cosmetic Dentistry sign", pos: "50% 50%" },
    offers: [],
    focusWide: true,
    focus: {
      heading: "One plan for your whole smile",
      intro: "Full mouth rehabilitation looks at how your teeth, gums and bite work together, then restores them as a whole instead of one tooth at a time. After your examination, your plan may include:",
      items: ["Porcelain crowns, made from a digital scan and shaded to your own teeth", "Dental bridges, to replace missing teeth with a fixed restoration", "Porcelain veneers, to reshape and refine the front of your smile", "A smile makeover, planned around your face and your goals"],
      image: { src: "/images/team/team-photo.jpg", alt: "The team at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your visit, step by step",
      items: [
        { title: "Examination and imaging", text: "Dr. Shir looks at your teeth, gums and bite, with imaging taken in this office." },
        { title: "Your whole-mouth plan", text: "You go over your options in plain language, with the timing and cost explained before you decide." },
        { title: "Your treatment", text: "Your care is carried out as planned, with one team who knows your history." },
        { title: "Final fit and follow-up", text: "Your restorations are fitted and checked with you, and your ongoing care is planned." },
      ],
    },
    tech: ["ct", "scanner", "xray", "laser"],
    showWork: true,
    faqs: [
      { q: "What is full mouth rehabilitation?", a: "It is a complete plan to restore the health, function and appearance of your teeth together. It can include crowns, bridges, veneers and other restorations, depending on what your examination shows." },
      { q: "Is it right for me?", a: "Dr. Shir will tell you after an examination. Some people need only a few restorations, and she will explain your options before anything begins." },
      { q: "Will it take more than one visit?", a: "Because the plan covers your whole mouth, care is usually planned across more than one visit. Dr. Shir explains the timing before you decide." },
      { q: "How much will it cost?", a: "Costs depend on your assessment and the treatment in your plan. Ask the team for a written plan before you decide." },
    ],
    closing: { heading: "Start with a conversation", text: "Request a free consultation and our team will contact you about availability." },
  },
  {
    slug: "gum-health-beverly-hills",
    key: "gum-health",
    title: "Gum Health and Gum Disease Treatment in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Gum Health and Gum Disease Treatment in Beverly Hills",
    support: "Bleeding, swollen or receding gums? Dr. Nushin Shir cares for your gums with your whole health in view, from deep cleaning to ongoing periodontal maintenance.",
    primary: { label: "Request a Free Consultation", target: "form" },
    formTitle: "Request a free consultation",
    formButton: "Request a Free Consultation",
    formNote: "What your gums need is decided at the examination. " + SUCCESS_NOTE,
    hero: { src: "/images/office/hallway-wide.jpg", alt: "The hallway at Beverly Hills Dental Arts Studio, with a silver vase on a round white table and framed photographs on the walls", pos: "50% 55%" },
    closingImage: { src: "/images/office/round-table-lobby-wide.jpg", alt: "The lobby at Beverly Hills Dental Arts Studio, with a round table and spring blossoms and treatment rooms beyond", pos: "50% 55%" },
    offers: [],
    focusWide: true,
    focus: {
      heading: "Care for your gums, at every stage",
      intro: "Healthy gums support your teeth, and gum health is connected to the rest of your health. After an examination, your care may include:",
      items: ["A gum evaluation, with digital X-rays and a check of your gums and the bone around your teeth", "Deep cleaning (scaling and root planing), which cleans below the gumline", "Ozone therapy and soft-tissue laser care, used alongside conventional treatment where suitable", "Periodontal maintenance, regular visits to help keep your gums healthy over time"],
      image: { src: "/images/team/team-photo.jpg", alt: "The team at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your visit, step by step",
      items: [
        { title: "Gum examination", text: "Dr. Shir checks your gums and teeth, with digital X-rays taken in the office." },
        { title: "Your options", text: "You go over what your gums need and why, in plain language." },
        { title: "Your treatment", text: "Deep cleaning and any other care in your plan are carried out as agreed with you." },
        { title: "Keeping your gums healthy", text: "A maintenance schedule is set for you, so your care continues with a team who knows your history." },
      ],
    },
    tech: ["xray", "ozone", "laser"],
    showWork: false,
    faqs: [
      { q: "What are signs of gum disease?", a: "Bleeding when you brush or floss, red or swollen gums, gums pulling away from the teeth, ongoing bad breath or teeth that feel loose. Gum disease is often painless in its early stages, so an examination matters." },
      { q: "What is scaling and root planing?", a: "A deep cleaning that removes plaque and tartar from below the gumline and smooths the root surfaces. Whether you need it is decided at your examination." },
      { q: "What is periodontal maintenance?", a: "Regular cleanings after gum treatment, to help keep your gums healthy. Dr. Shir sets how often you come in, based on your needs." },
      { q: "How much will treatment cost?", a: "Costs depend on your assessment and the treatment in your plan. Ask the team for an estimate before you decide." },
    ],
    closing: { heading: "Get your gums checked", text: "Request a free consultation and our team will contact you about availability." },
  },
  {
    slug: "dental-anxiety-beverly-hills",
    key: "dental-anxiety",
    title: "Nervous About the Dentist? Gentle Dental Care in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Nervous About the Dentist?",
    support: "Whether you are anxious, or have not been in years, you set the pace here. Dr. Nushin Shir explains every step before it happens, with no judgment.",
    primary: { label: "Book a Visit", target: "form" },
    formTitle: "Book a visit",
    formButton: "Book a Visit",
    formNote: "Tell us anything that would help you feel at ease. " + SUCCESS_NOTE,
    hero: { src: "/images/office/lobby-round-table-wide.jpg", alt: "The lobby at Beverly Hills Dental Arts Studio, with a round table and spring blossoms", pos: "50% 55%" },
    closingImage: { src: "/images/office/treatment-room-chair.jpg", alt: "A treatment room at Beverly Hills Dental Arts Studio", pos: "50% 80%" },
    offers: [],
    focusWide: true,
    focus: {
      heading: "A calm visit, at your pace",
      intro: "Many of our patients feel nervous, and many have not seen a dentist in a long time. You will not be judged for either. Your first visit is built around you:",
      items: ["We talk first, before anyone looks in your mouth", "Every step is explained in plain words before it happens", "You decide the pace, and you can ask us to pause at any time", "Nothing is done until you have said yes"],
      image: { src: "/images/office/front-desk-vase-wide.jpg", alt: "A silver vase with blossoms at the front desk of Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your first visit, step by step",
      items: [
        { title: "Tell us what worries you", text: "A quiet conversation with Dr. Shir about your history and what you would like us to know. There is no rush." },
        { title: "A gentle look", text: "A calm examination, with digital X-rays taken in the office, and each step explained as we go." },
        { title: "Your options, in plain words", text: "You hear what we see and what your choices are. You decide what happens next, and when." },
        { title: "Care at your pace", text: "If you want treatment, we plan it with you and keep you informed, so there are no surprises." },
      ],
    },
    tech: ["xray", "laser", "scanner"],
    showWork: false,
    faqs: [
      { q: "I have not been to a dentist in years. Will I be judged?", a: "No. Many people come to us after a long time away. Dr. Shir will focus on where you are today and what would help you most." },
      { q: "Can I ask you to stop during a visit?", a: "Yes. You set the pace, and we will pause whenever you ask." },
      { q: "Do I have to start treatment at my first visit?", a: "No. The first visit can be only a conversation and an examination. Treatment begins when you are ready." },
      { q: "Can I tell you about my fears before I come?", a: "Yes. Add a note when you request your visit, or tell the team when they call you, so we can plan around what matters to you." },
    ],
    closing: { heading: "Start with a conversation", text: "Book a visit and our team will contact you about availability." },
  },
  {
    slug: "second-opinion-beverly-hills",
    key: "second-opinion",
    title: "Need a Second Opinion? Dental Second Opinion in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Need a Second Opinion?",
    support: "Told you need major dental work? Dr. Nushin Shir reviews your X-rays and treatment plan, and explains your options in plain words, with no pressure.",
    primary: { label: "Book a Visit", target: "form" },
    formTitle: "Book a visit",
    formButton: "Book a Visit",
    formNote: "If you have X-rays or a written plan, bring them. " + SUCCESS_NOTE,
    hero: { src: "/images/office/reception-window-wide.jpg", alt: "The reception window at Beverly Hills Dental Arts Studio, beside the Cosmetic Dentistry sign", pos: "50% 50%" },
    closingImage: { src: "/images/office/lobby-round-table-wide.jpg", alt: "The lobby at Beverly Hills Dental Arts Studio, with a round table and spring blossoms", pos: "50% 55%" },
    offers: [],
    focusWide: true,
    focus: {
      heading: "A clear second look at your plan",
      intro: "A big treatment plan is a big decision. A second opinion helps you understand what is needed, what can wait, and what your options are. Dr. Shir starts with the most conservative, biomimetic choices that protect your natural teeth. Your visit may include:",
      items: ["A review of the X-rays and treatment plan you bring, plus new imaging taken in our office where needed", "An examination of your teeth, gums and bite", "A talk about your options in plain words, including what is urgent and what is not", "Time for your questions, and no pressure to decide"],
      image: { src: "/images/office/front-desk-sign-wide.jpg", alt: "The front desk at Beverly Hills Dental Arts Studio, with the Cosmetic Dentistry sign and a mosaic mirror" },
    },
    steps: {
      heading: "Your visit, step by step",
      items: [
        { title: "Bring what you have", text: "Your X-rays, your written plan and any questions. If you do not have them, we can still help." },
        { title: "Review and examination", text: "Dr. Shir looks at your records and your mouth, with imaging taken in this office where needed." },
        { title: "Your options, in plain words", text: "You hear what she sees, what may be needed and what your choices are, with conservative options first." },
        { title: "You decide", text: "Take your time. Whether you stay with your first plan or choose another, the decision is yours." },
      ],
    },
    tech: ["ct", "xray", "scanner"],
    showWork: false,
    faqs: [
      { q: "Will you tell me the other dentist is wrong?", a: "No. A second opinion is about helping you understand your own mouth and your options. Dr. Shir will tell you honestly what she sees." },
      { q: "What should I bring?", a: "Any X-rays and the written treatment plan you were given. If you cannot get them, tell the team and we will work with what we can." },
      { q: "Will I be pressured to start treatment?", a: "No. You leave with a clear understanding of your options, and you decide what comes next." },
      { q: "What does biomimetic mean?", a: "It means restoring teeth to match what nature built, keeping as much of your own tooth as possible. Dr. Shir will explain whether it fits your needs." },
      { q: "How much will a visit cost?", a: "Ask the team when you are contacted. Costs depend on your assessment, and we will explain them before you decide." },
    ],
    closing: { heading: "Get a clear second look", text: "Book a visit and our team will contact you about availability." },
  },
  {
    slug: "bad-breath-beverly-hills",
    key: "bad-breath",
    title: "Bad Breath That Won't Go Away? Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Bad Breath That Won't Go Away?",
    support: "Mints and mouthwash only cover it up. Dr. Nushin Shir looks for the cause and treats it, with your whole health in view.",
    primary: { label: "Book a Visit", target: "form" },
    formTitle: "Book a visit",
    formButton: "Book a Visit",
    formNote: "What is causing it is decided at the examination. " + SUCCESS_NOTE,
    hero: { src: "/images/office/front-desk-vase-wide.jpg", alt: "A silver vase with blossoms at the front desk of Beverly Hills Dental Arts Studio", pos: "50% 50%" },
    closingImage: { src: "/images/office/front-desk-sign-wide.jpg", alt: "The front desk at Beverly Hills Dental Arts Studio, with the Cosmetic Dentistry sign", pos: "50% 50%" },
    offers: [],
    focusWide: true,
    focus: {
      heading: "Finding the cause first",
      intro: "Bad breath has a reason, and it is often in the mouth. At your examination, Dr. Shir looks at the common causes:",
      items: ["Gum problems, including bacteria below the gumline", "The surface of the tongue", "A dry mouth", "Old fillings or restorations that no longer seal well", "A cleaning that is overdue"],
      image: { src: "/images/office/reception-window-wide.jpg", alt: "The reception window at Beverly Hills Dental Arts Studio" },
    },
    steps: {
      heading: "Your visit, step by step",
      items: [
        { title: "Your story", text: "When you notice it, what you have tried, and your general health. Everything matters here." },
        { title: "Examination", text: "Dr. Shir checks your teeth, gums, tongue and existing dental work, with digital X-rays taken in the office." },
        { title: "A plan for the cause", text: "You hear what she found and what it means, in plain words. Treatment may include a deep cleaning, repair of old work, and ozone therapy where it fits." },
        { title: "Keeping it under control", text: "Home care advice and a visit schedule made for you. If the cause lies outside the mouth, we will tell you so you can see your doctor." },
      ],
    },
    tech: ["xray", "ozone", "laser"],
    showWork: false,
    faqs: [
      { q: "What causes persistent bad breath?", a: "Often it starts in the mouth: gum disease, bacteria on the tongue, dry mouth, worn fillings or a long gap between cleanings. Your examination shows which applies to you." },
      { q: "Can you promise it will go away?", a: "No one can promise that. We find the cause, treat what we can, and tell you honestly what to expect." },
      { q: "Is it always a dental problem?", a: "Not always. If we do not find a cause in your mouth, Dr. Shir will say so and suggest you speak with your doctor." },
      { q: "What is ozone therapy?", a: "Ozone is used alongside conventional treatment, for example in cleaned gum pockets. Dr. Shir will tell you whether it fits your care." },
    ],
    closing: { heading: "Find out what is behind it", text: "Book a visit and our team will contact you about availability." },
  },
  {
    slug: "sensitive-teeth-beverly-hills",
    key: "sensitive-teeth",
    title: "Sensitive Teeth Treatment in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Sensitive Teeth?",
    support: "A sting with hot, cold or sweets means something. Dr. Nushin Shir finds out why, and treats it with the most conservative care that fits.",
    primary: { label: "Book a Visit", target: "form" },
    formTitle: "Book a visit",
    formButton: "Book a Visit",
    formNote: "What is causing it is decided at the examination. " + SUCCESS_NOTE,
    hero: { src: "/images/office/front-desk-sign-wide.jpg", alt: "The front desk at Beverly Hills Dental Arts Studio, with the Cosmetic Dentistry sign and a mosaic mirror", pos: "50% 50%" },
    closingImage: { src: "/images/office/front-desk-vase-wide.jpg", alt: "A silver vase with blossoms at the front desk of Beverly Hills Dental Arts Studio", pos: "50% 50%" },
    offers: [],
    focusWide: true,
    focus: {
      heading: "Why do your teeth hurt?",
      intro: "Sensitivity is a signal, and the cause is different for each person. At your examination, Dr. Shir looks at:",
      items: ["Thinning enamel", "Gums that have pulled back from the teeth", "Cracks in a tooth", "Old fillings that no longer fit well", "How you bite and whether you clench or grind"],
      image: { src: "/images/office/lobby-round-table-wide.jpg", alt: "The lobby at Beverly Hills Dental Arts Studio, with a round table and spring blossoms" },
    },
    steps: {
      heading: "Your visit, step by step",
      items: [
        { title: "What you feel", text: "Which teeth, what sets it off, and how long it lasts. You know it best." },
        { title: "Examination", text: "Dr. Shir checks your teeth, gums and bite, with digital X-rays taken in the office." },
        { title: "The reason, in plain words", text: "You hear what is behind the sensitivity and what your options are." },
        { title: "Conservative care", text: "Treatment starts with the gentlest option that fits, so more of your own tooth stays where it belongs." },
      ],
    },
    tech: ["xray", "scanner", "laser"],
    showWork: false,
    faqs: [
      { q: "Why are my teeth sensitive to hot, cold or sweets?", a: "Common reasons are thinning enamel, gum recession, a crack or an old filling. An examination shows which one applies to you." },
      { q: "Is sensitivity serious?", a: "It can be minor, but it can also point to a problem that grows if left alone. It is worth having it checked." },
      { q: "Will I need a lot of treatment?", a: "Not necessarily. Dr. Shir starts with the most conservative option that fits, and explains it before anything is done." },
      { q: "How much will a visit cost?", a: "Costs depend on your assessment. Ask the team and we will explain them before you decide." },
    ],
    closing: { heading: "Find out why", text: "Book a visit and our team will contact you about availability." },
  },
];

function TECH_IMAGE(k: TechKey): LpImage { return TECH[k].image; }

export const lpBySlug = (slug: string) => LP_PAGES.find((p) => p.slug === slug);
