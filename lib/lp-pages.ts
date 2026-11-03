/*
 * ChatGPT Ads landing pages (TTR-1156; brief of Nov 3, 2026, docs/LANDING-PAGES-BRIEF.md). One entry per page, rendered by
 * app/lp/[slug]/page.tsx. Plain copy only: no prices, offers, ratings, badges, testimonials, guarantees or "24/7".
 * Items marked CONFIRM need the practice's yes before the page goes live (see the brief's launch requirements).
 */
export type LpImage = { src: string; alt: string };
export type LpSection =
  | { kind: "text"; heading: string; paragraphs: string[]; image?: LpImage }
  | { kind: "list"; heading: string; intro?: string; items: string[]; image?: LpImage }
  | { kind: "steps"; heading: string; items: { title: string; text: string }[] }
  | { kind: "bio"; heading: string; paragraphs: string[]; image?: LpImage };

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
  highlights: { title: string; text: string }[]; // three short points under the hero
  notice?: string; // urgent care notice
  availability?: string;
  sections: LpSection[];
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
  // CONFIRM with the practice before launch.
  hours: [
    { days: "Monday to Thursday", time: "8:00 a.m. to 5:30 p.m." },
    { days: "Friday", time: "8:00 a.m. to 1:00 p.m." },
    { days: "Saturday and Sunday", time: "Closed" },
  ],
};

const SUCCESS_NOTE = "Your request is not a confirmed appointment. Our team will contact you about availability.";

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
    hero: { src: "/images/office/hallway-wide.jpg", alt: "The reception area of Beverly Hills Dental Arts Studio", pos: "60% 50%" },
    highlights: [{ title: "Your goals first", text: "An examination, a clear discussion and a plan that fits you." }, { title: "Your natural teeth first", text: "Care that pays attention to natural tooth structure and function." }, { title: "A clear next step", text: "You leave knowing your options and what comes next." }],
    sections: [
      { kind: "list", heading: "Care centered on your goals", intro: "Every visit starts with listening. Your first appointment is built around three things:", items: ["An examination of your teeth, gums and bite", "A discussion of your options, explained in plain language", "A personalized treatment plan that fits your goals"], image: { src: "/images/office/hallway-round-table.jpg", alt: "The hallway at Beverly Hills Dental Arts Studio" } },
      { kind: "text", heading: "Preserving natural tooth structure", paragraphs: ["Biomimetic dentistry is an approach to restoring teeth with attention to natural tooth structure and function. The aim is to protect as much of your own tooth as possible.", "Which treatment is right for you depends on your examination. Dr. Shir will explain your options before anything is decided."] },
      { kind: "bio", heading: "Meet Dr. Shir", paragraphs: ["Dr. Nushin Shir, DDS leads Beverly Hills Dental Arts Studio. The practice takes a biological, biomimetic approach to dentistry, treating you, not just your teeth.", "Every plan is tailored to your goals, your comfort, and your long-term well-being."], image: { src: "/images/team/dr-nushin-shir.jpg", alt: "Dr. Nushin Shir" } },
      { kind: "steps", heading: "What to expect", items: [{ title: "Request a visit", text: "Send the short form or call the office." }, { title: "Talk about availability", text: "Our team contacts you to find a time that works." }, { title: "Attend an assessment", text: "Dr. Shir examines your teeth, gums and bite." }, { title: "Review your options", text: "You go over the recommended options and costs before deciding." }] },
    ],
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
    hero: { src: "/images/office/hallway-wide.jpg", alt: "The reception area of Beverly Hills Dental Arts Studio", pos: "30% 50%" },
    highlights: [{ title: "Removable trays", text: "Aligners you can take out." }, { title: "A discreet appearance", text: "Clear trays that are hard to notice." }, { title: "Digitally planned", text: "Treatment planned from a digital scan, if suitable." }],
    sections: [
      { kind: "list", heading: "Why consider clear aligners", intro: "Many adults look at aligners because they are:", items: ["Removable trays", "A discreet appearance", "Digitally planned treatment"], image: { src: "/images/technology/itero-scanner.jpg", alt: "The digital scanner at Beverly Hills Dental Arts Studio" } },
      { kind: "text", heading: "Suitability varies", paragraphs: ["Clear aligners are not right for everyone. Whether they fit depends on your teeth, gums and bite, and some cases need a different treatment."] },
      { kind: "steps", heading: "Your consultation", items: [{ title: "Assessment", text: "Dr. Shir looks at your teeth, gums and bite." }, { title: "Digital scanning", text: "If appropriate for your case." }, { title: "Options", text: "You discuss your choices, the expected timing and the cost." }] },
      { kind: "steps", heading: "Treatment overview", items: [{ title: "Assessment and planning", text: "A plan built around your teeth and your goals." }, { title: "Tray wear and reviews", text: "You wear your trays as prescribed and return for check-ins." }, { title: "Retainers", text: "Retainers help maintain the result afterwards." }] },
      { kind: "bio", heading: "Dr. Shir and the office", paragraphs: ["Dr. Nushin Shir, DDS leads Beverly Hills Dental Arts Studio, a practice that tailors every plan to the person in the chair."], image: { src: "/images/team/dr-nushin-shir.jpg", alt: "Dr. Nushin Shir" } },
    ],
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
    hero: { src: "/images/office/hallway-wide.jpg", alt: "The reception area of Beverly Hills Dental Arts Studio", pos: "50% 60%" },
    highlights: [{ title: "Call first", text: "Tell the team you need an urgent appointment." }, { title: "Availability is checked", text: "The team tells you what time can be offered." }, { title: "Examined by Dr. Shir", text: "You get an assessment and a clear explanation." }],
    notice: "For trouble breathing or swallowing, severe facial swelling, uncontrolled bleeding, or a serious injury, seek emergency medical care immediately. Do not wait for an online response.",
    sections: [
      { kind: "list", heading: "Reasons to call", intro: "Call the office if you have:", items: ["A toothache", "A chipped or broken tooth", "A lost filling", "A loose crown"], image: { src: "/images/office/treatment-chair.jpg", alt: "A treatment room at Beverly Hills Dental Arts Studio" } },
      { kind: "steps", heading: "What happens next", items: [{ title: "Call the practice", text: "Tell the team you need an urgent appointment." }, { title: "Confirm availability", text: "The team checks what time can be offered." }, { title: "Attend an examination", text: "Dr. Shir examines the problem and explains your options." }] },
    ],
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
    hero: { src: "/images/office/hallway-wide.jpg", alt: "The reception area of Beverly Hills Dental Arts Studio", pos: "70% 50%" },
    highlights: [{ title: "In-office 3D imaging", text: "Part of your assessment, where suitable." }, { title: "A personalized plan", text: "Based on your oral health and your goals." }, { title: "A written estimate", text: "Costs explained before you decide." }],
    sections: [
      { kind: "text", heading: "Understand your options", paragraphs: ["Missing teeth can be replaced in different ways, from a single tooth to a full arch. Dr. Shir assesses your mouth and explains which choices may suit you."], image: { src: "/images/technology/cbct-scanner.jpg", alt: "The 3D imaging scanner at Beverly Hills Dental Arts Studio" } },
      { kind: "list", heading: "Planning in the practice", intro: "Your assessment can include:", items: ["In-office 3D imaging", "An assessment of your bone and gums", "A discussion of a written treatment plan"] },
      { kind: "steps", heading: "Treatment stages", items: [{ title: "Consultation", text: "You talk through your goals and your health." }, { title: "Any preparation", text: "Some cases need work before an implant is placed." }, { title: "Implant placement", text: "The implant is placed as planned." }, { title: "Healing", text: "Healing takes time and varies from person to person." }, { title: "Restoration", text: "The final tooth is fitted." }] },
      { kind: "bio", heading: "Meet Dr. Shir", paragraphs: ["Dr. Nushin Shir, DDS leads Beverly Hills Dental Arts Studio. The sequence and the length of treatment vary, and your plan will be explained to you before you decide."], image: { src: "/images/team/dr-nushin-shir.jpg", alt: "Dr. Nushin Shir" } },
    ],
    faqs: [
      { q: "Am I a candidate for implants?", a: "Suitability depends on your oral health, bone, medical history, and other factors assessed by the clinician." },
      { q: "How long does the process take?", a: "The timeline depends on your treatment plan and healing. Your consultation will clarify the expected stages." },
      { q: "How much do implants cost?", a: "Costs vary with the number of teeth and treatment required. Request an individualized written estimate." },
    ],
    closing: { heading: "Talk through your options", text: "Request a consultation and our team will contact you about availability." },
  },
];

export const lpBySlug = (slug: string) => LP_PAGES.find((p) => p.slug === slug);
