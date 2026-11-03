/*
 * ChatGPT Ads landing pages (TTR-1156; brief of Nov 3, 2026, docs/LANDING-PAGES-BRIEF.md). Built like the homepage: the practice's own
 * photos, the same ideas (biological, biomimetic, holistic), the technology and Dr. Shir's background, in the practice's own words from
 * its homepage and About page. No prices, offers, ratings, badges, testimonials, guarantees or "24/7".
 * CONFIRM with the practice before launch: the Invisalign name (copy stays "clear aligners"), the hours.
 */
export type LpImage = { src: string; alt: string };
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
  notice?: string; // urgent care notice
  availability?: string;
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
  phone: "310-274-7005",
  tel: "tel:+13102747005",
  address: "416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210",
  map: "https://www.google.com/maps/search/?api=1&query=416+N+Bedford+Dr+Suite+105+Beverly+Hills+CA+90210",
  hours: [
    { days: "Monday to Thursday", time: "8:00 a.m. to 5:30 p.m." },
    { days: "Friday", time: "8:00 a.m. to 1:00 p.m." },
    { days: "Saturday and Sunday", time: "Closed" },
  ],
};

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
  image: { src: "/images/office/hallway-round-table.jpg", alt: "The hallway at Beverly Hills Dental Arts Studio" },
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
    // CONFIRM: use the Invisalign name in visible copy only after the practice confirms it offers Invisalign.
    title: "Clear Aligners in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Explore Clear Aligners in Beverly Hills",
    support: "Considering a straighter smile? Meet Dr. Nushin Shir to review your teeth, bite, and clear aligner options, with a treatment plan tailored to your needs.",
    primary: { label: "Request an Aligner Consultation", target: "form" },
    formTitle: "Request an aligner consultation",
    formButton: "Request an Aligner Consultation",
    formNote: "Find out whether clear aligners are suitable for you. Treatment and timing depend on an examination. " + SUCCESS_NOTE,
    hero: HERO("30% 50%"),
    focus: {
      heading: "Why consider clear aligners",
      intro: "Many adults look at aligners because they are:",
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
      { q: "Are clear aligners right for everyone?", a: "No. Suitability depends on your teeth, gums, and bite. Some cases need another treatment or specialist care." },
      { q: "How long does treatment take?", a: "Your clinician will discuss an expected timeline after assessment. Timing varies by case and prescribed wear." },
      { q: "What does treatment cost?", a: "Ask for a personalized estimate after the consultation." },
    ],
    closing: { heading: "Find out if clear aligners suit you", text: "Request a consultation and our team will contact you about availability." },
  },
  {
    slug: "emergency-dentist-beverly-hills",
    key: "emergency",
    title: "Emergency Dentist in Beverly Hills | Beverly Hills Dental Arts Studio",
    headline: "Need an Emergency Dentist in Beverly Hills",
    support: "For an urgent dental concern, call Beverly Hills Dental Arts Studio to ask about the next available appointment. Our team can help you arrange an assessment during office hours.",
    primary: { label: "Call 310-274-7005", target: "call" },
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
      image: { src: "/images/office/treatment-chair.jpg", alt: "A treatment room at Beverly Hills Dental Arts Studio" },
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
];

function TECH_IMAGE(k: TechKey): LpImage { return TECH[k].image; }

export const lpBySlug = (slug: string) => LP_PAGES.find((p) => p.slug === slug);
