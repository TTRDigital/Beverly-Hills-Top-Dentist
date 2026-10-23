/* Built-in site content, copied from the old WordPress site. /cms values replace these once filled in. */
import type { BeforeAfterCase, Faq, MenuItem, Post, SiteSettings, TeamMember, Testimonial } from "../types";
import { images } from "./images.ts";

/** Main menu, in the old site's order (Services has two levels of dropdowns). */
export const fallbackMenu: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      {
        label: "Dental Implants Dentistry",
        href: "/services/dental-implants-dentistry/",
        children: [
          { label: "Single Tooth Implants", href: "/services/dental-implants-dentistry/single-tooth-implants/" },
          { label: "Full Arch Implants", href: "/services/dental-implants-dentistry/full-arch-implants/" },
        ],
      },
      {
        label: "Cosmetic Dentistry",
        href: "/services/cosmetic-dentistry/",
        children: [
          { label: "Porcelain Veneers", href: "/services/cosmetic-dentistry/porcelain-veneers/" },
          { label: "Smile Makeover", href: "/services/cosmetic-dentistry/smile-makeover/" },
          { label: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening/" },
          { label: "Dental Bonding", href: "/services/cosmetic-dentistry/dental-bonding/" },
          { label: "Clear Aligners", href: "/services/cosmetic-dentistry/clear-aligners/" },
        ],
      },
      {
        label: "Restorative Dentistry",
        href: "/services/restorative-dentistry/",
        children: [
          { label: "Dental Fillings", href: "/services/restorative-dentistry/dental-fillings/" },
          { label: "Dental Bridges", href: "/services/restorative-dentistry/dental-bridges/" },
          { label: "Tooth Extractions", href: "/services/restorative-dentistry/tooth-extractions/" },
          { label: "Porcelain Inlays & Onlays", href: "/services/restorative-dentistry/porcelain-inlays-onlays/" },
          { label: "Root Canal Therapy", href: "/services/restorative-dentistry/root-canal-therapy/" },
          { label: "Wisdom Teeth Extractions", href: "/services/restorative-dentistry/wisdom-teeth-extractions/" },
          { label: "Partial Dentures", href: "/services/restorative-dentistry/partial-dentures/" },
        ],
      },
      {
        label: "Periodontic Dentistry",
        href: "/services/periodontic-dentistry/",
        children: [
          { label: "Gum Disease Treatment", href: "/services/periodontic-dentistry/gum-disease-treatment/" },
          { label: "Crown Lengthening", href: "/services/periodontic-dentistry/crown-lengthening/" },
          { label: "Gum Graft Surgery", href: "/services/periodontic-dentistry/gum-graft-surgery/" },
          { label: "Deep Cleanings (Scaling & Root Planing)", href: "/services/periodontic-dentistry/deep-cleanings/" },
          { label: "Laser Gum Treatments", href: "/services/periodontic-dentistry/laser-gum-treatments/" },
          { label: "Gum Contouring", href: "/services/periodontic-dentistry/gum-contouring/" },
        ],
      },
      {
        label: "Preventive Dentistry",
        href: "/services/preventive-dentistry/",
        children: [
          { label: "Teeth Cleaning", href: "/services/preventive-dentistry/teeth-cleaning/" },
          { label: "Dental Sealants", href: "/services/preventive-dentistry/dental-sealants/" },
          { label: "Dental Checkups & Exams", href: "/services/preventive-dentistry/checkups-exams/" },
          { label: "Night Guards", href: "/services/preventive-dentistry/night-guards/" },
          { label: "Sleep Apnea Treatment", href: "/services/preventive-dentistry/sleep-apnea-treatment/" },
        ],
      },
      {
        label: "Dental Technology hub",
        href: "/services/dental-technology/",
        children: [
          { label: "Ozone Therapy", href: "/services/dental-technology/ozone-therapy/" },
          { label: "Digital Scanner", href: "/services/dental-technology/digital-scanner/" },
          { label: "Digital X-Rays", href: "/services/dental-technology/digital-x-rays/" },
          { label: "3D CT Scans", href: "/services/dental-technology/ct-scans/" },
        ],
      },
    ],
  },
  {
    label: "Areas We Serve",
    href: "/areas-we-serve/",
    children: [
      { label: "All Areas We Serve", href: "/areas-we-serve/" },
      { label: "Beverly Grove", href: "/areas-we-serve/beverly-grove/" },
      { label: "Century City", href: "/areas-we-serve/century-city/" },
      { label: "West Hollywood", href: "/areas-we-serve/west-hollywood/" },
      { label: "Culver City", href: "/areas-we-serve/culver-city/" },
      { label: "West LA & Palms", href: "/areas-we-serve/west-la-palms/" },
      { label: "Hollywood", href: "/areas-we-serve/hollywood/" },
    ],
  },
];

export const fallbackSettings: Omit<SiteSettings, "phoneHref"> = {
  name: "Beverly Hills Dental Art Studio",
  legalName: "Beverly Hills Dental Arts Studio",
  phone: "(310) 274-7005",
  // The footer writes the number with dashes; the header and appointment page with brackets.
  phoneDisplay: "310-274-7005",
  street: "416 N. Bedford Dr., Suite 105",
  city: "Beverly Hills",
  region: "CA",
  postalCode: "90210",
  latitude: 34.0684016,
  longitude: -118.4050211,
  mapsUrl:
    "https://www.google.com/maps/place/Beverly+Hills+Dental+Arts+Studio/@34.0684016,-118.4050211,15z/data=!4m6!3m5!1s0x80c2bb639f83cb85:0xfacde87966461c7f!8m2!3d34.0684016!4d-118.4050211",
  hoursLabel: "Working Hours:",
  hours: [
    { day: "Monday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Tuesday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Wednesday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Thursday", value: "8:00 a.m. – 5:30 p.m.", opens: "08:00", closes: "17:30" },
    { day: "Friday", value: "8:00 a.m. – 1:00 p.m.", opens: "08:00", closes: "13:00" },
    { day: "Saturday", value: "Closed" },
    { day: "Sunday", value: "Closed" },
  ],
  social: [
    { network: "facebook", href: "https://www.facebook.com/beverlyhillstopdentist/" },
    { network: "instagram", href: "https://www.instagram.com/beverlyhillsdentalartsstudio/" },
    {
      network: "google",
      href: "https://www.google.com/maps/place/Beverly+Hills+Dental+Arts+Studio/@34.0684016,-118.4050211,15z/data=!4m6!3m5!1s0x80c2bb639f83cb85:0xfacde87966461c7f!8m2!3d34.0684016!4d-118.4050211",
    },
  ],
  headerCta: { label: "Schedule Appointment", href: "/appointment/" },
  menu: fallbackMenu,
  logo: images.logo,
  footerLogo: images.logo300,
  privacyPolicyUrl: "/privacy-policy/",
  // Trust strip spec: Google rating, years in practice, Dr. Shir's credentials, 3D CT / laser / ozone.
  // No Google rating until the office confirms the current figure; years per the site's own copy ("over thirty years").
  trustStrip: ["Dr. Nushin Shir, DDS, MPH", "Over 30 years in practice", "In-office 3D CT", "Soft-tissue lasers", "Ozone therapy"],
};

/** Team, in the order of the About page. */
export const fallbackTeam: TeamMember[] = [
  {
    id: "dr-daniel-charlton",
    name: "Dr. Daniel Charlton",
    heading: "Dr. Daniel Charlton - General & Cosmetic Dentist.",
    bio: [
      "Dr. Charlton has dedicated his life to providing the best that dentistry has to offer. Continually upgrading himself and his practice on the newest and latest techniques, he combines experience with advanced training and state-of-the-art technology to provide patients of all ages with top-quality dental care. Dr. Charlton’s training includes cosmetic dentistry, TMJ therapy, endodontics, orthodontics, periodontal surgery, laser dentistry and implant dentistry. We invite you to contact our team today to learn more about our comprehensive dental services and schedule your personal consultation with our skilled dentist in Beverly Hills, California!",
    ],
    photo: images.drDanielCharlton,
    order: 1,
  },
  {
    id: "dr-nushin-shir",
    name: "Dr. Nushin Shir",
    heading: "Dr. Nushin Shir - General & Cosmetic Dentist.",
    bio: [
      "Dr. Shir, our principal dentist, earned her DDS from UCLA and holds two master’s degrees in public health from UCLA in epidemiology and healthcare policy. With over 30 years of experience, six practices, and a background teaching restorative dentistry, she is a multiple-time America’s Top Dentist honoree known for complex cosmetic and restorative care.",
    ],
    photo: images.drNushinShir,
    order: 2,
  },
  {
    id: "thanys-m",
    name: "Thanys M.",
    heading: "Thanys M. — Practice Professional",
    bio: [
      "Thanys M., our practice professional, holds a Bachelor’s degree in Business and brings nearly a decade of experience across clinical support, office management, treatment coordination, billing, and patient relations. Currently pursuing a law degree focused on healthcare compliance and regulatory law, Thanys blends dentistry, business, and legal insight to strengthen patient care and practice operations.",
    ],
    photo: images.thanysM,
    order: 3,
  },
  {
    id: "nicole-vazquez",
    name: "Nicole Vazquez",
    heading: "Nicole Vazquez — Dental Hygienist",
    bio: [
      "My name is Nicole Vazquez and I’m a dental hygienist heading into my fourth year in the field. I’m completely passionate about prevention and helping people take charge of their health. I love showing patients how a clean, healthy mouth supports their overall well-being and energy, since everything in the body is connected. My favorite part of the job is making dental visits comfortable, educational, and genuinely stress-free so you can walk out feeling great and smiling with total confidence.",
    ],
    photo: images.nicoleVazquez,
    order: 4,
  },
  {
    id: "carlos-torres",
    name: "Carlos Torres",
    heading: "Carlos Torres — Operations Leader",
    bio: [
      "With over 25 years of experience in project management, staff leadership, and business operations, Carlos Torres is a seasoned dental industry professional with a proven ability to drive growth and build high-performing practices. Throughout his career, Carlos has successfully managed several dental offices, including orthodontic practices, while developing strong teams and improving day-to-day operations. Outside of work, he is an avid gym-goer who enjoys traveling and exploring new destinations.",
    ],
    photo: images.carlosTorres,
    order: 5,
  },
];

const galleryOrder = [
  images.case01, images.case02, images.case05, images.case03, images.case04, images.case06, images.case07,
  images.case08, images.case09, images.case10, images.case11, images.case12, images.case13, images.case15,
  images.case16, images.case17, images.case18, images.case19, images.case20, images.case21, images.case08B,
];

/**
 * Smile cases. "results": the home / thank-you carousel (the old home page's six
 * before-after lightbox images, then its three smile photos). "gallery": the
 * before-after grid (desktop). "galleryMobile": the before-after carousel (phones).
 */
export const fallbackCases: BeforeAfterCase[] = [
  ...[images.smile1, images.smile2, images.smile3, images.smile4, images.smile5, images.smile6].map((image, i) => ({
    id: `gallery-mobile-${i + 1}`,
    title: image.alt,
    image,
    groups: ["results" as const, "galleryMobile" as const],
    order: i + 1,
  })),
  ...[images.smileResult1, images.smileResult2, images.smileResult3].map((image, i) => ({
    id: `result-${i + 1}`,
    title: `Smile result ${i + 1}`,
    image,
    groups: ["results" as const],
    order: 7 + i,
  })),
  ...galleryOrder.map((image, i) => ({ id: `gallery-${i + 1}`, title: image.alt, image, groups: ["gallery" as const], order: 10 + i })),
];

/** The old site shows no patient reviews. Add real ones in /cms (Reviews); none are invented here. */
export const fallbackTestimonials: Testimonial[] = [];

/** Shared FAQs (each treatment page keeps its own FAQ list inside its FAQ section). */
export const fallbackFaqs: Faq[] = [];

/** Built-in posts by Dr. Shir (drafts for Kia and the client; a post published in /cms with the same slug replaces its built-in copy). */
export const fallbackPosts: Post[] = [
  {
    slug: "dental-implants-beverly-hills-what-to-expect",
    title: "Dental implant timeline and recovery: what to expect, week by week",
    date: "2026-10-23",
    author: "Dr. Nushin Shir",
    category: "implants",
    service: "/services/dental-implants-dentistry/",
    excerpt: "Dr. Nushin Shir walks through a dental implant from the first scan to the final crown: how long each stage takes, what recovery feels like and how to care for it.",
    image: images.seniorPatientMirror,
    cta: "The first visit includes the exam and, where an implant is planned, the 3D scan, so you will know your timeline before anything starts.",
    figures: [
      { beforeHeading: "What happens on the day of surgery?", image: images.dentistsTreatingPatient, alt: "Two clinicians treating a patient in a treatment room at the Bedford Drive office", caption: "Two of our clinicians at work in the treatment room on Bedford Drive.", position: "center 40%" },
      { beforeHeading: "Why does the bone need months to heal?", image: images.cbctScanner, alt: "Cone beam CT scanner used to plan where each implant sits in the bone", caption: "Each implant is planned on a 3D scan taken in our imaging room.", position: "center 35%" },
      { beforeHeading: "How is the final crown made?", image: images.iteroScanner, alt: "Digital intraoral scanner that records the teeth for the final implant crown, with no impression trays", caption: "Our digital scanner records your teeth for the final crown, with no impression trays.", position: "center 30%" },
    ],
    blocks: [
      {
        _type: "facts",
        heading: "Quick facts",
        items: [
          { icon: "clock", label: "From the first visit to the finished tooth", value: "3 to 9 months" },
          { icon: "shield", label: "Bone healing around the implant", value: "3 to 6 months" },
          { icon: "calendar", label: "Back to normal routine after surgery", value: "Usually within a few days" },
          { icon: "pin", label: "Scan, surgery and crown", value: "All at one office" },
        ],
      },
      {
        _type: "steps",
        beforeHeading: "What happens on the day of surgery?",
        heading: "The implant timeline",
        items: [
          { title: "First visit", text: "Exam, medical history and the 3D scan. You leave with a written plan and a timeline." },
          { title: "Surgery day", text: "The area is numbed, the implant is placed and the gum is closed with a few stitches." },
          { title: "The first two weeks", text: "Swelling and soreness settle within days; soft foods for a week or two." },
          { title: "Three to six months", text: "The bone grows onto the implant. A temporary tooth can cover the gap." },
          { title: "The final crown", text: "A connector goes on, the gum heals around it, and the crown is made from a digital scan." },
        ],
      },
    ],
    body: [
      "From the first visit to the finished tooth, most dental implants take three to nine months. The surgery itself is one appointment, and most people are back to their normal routine within a few days. Most of the time is the bone healing around the implant, which usually takes three to six months.",
      "This article is about that timeline: what each stage feels like, how long it takes and what you can do to help it go well. For what an implant is and who is a good candidate, see our [dental implants](/services/dental-implants-dentistry/) page. If you are still deciding between an implant and a bridge, start with [bridge or implant: how to choose](/blog/bridge-or-implant-beverly-hills/).",
      "## What happens at the first visit?",
      "The first appointment is about information, not treatment. I examine your mouth, go through your medical history and every medicine you take, and take a 3D scan here in the office. A regular X-ray is a flat picture; the scan shows the width and height of your bone and where the nerve and sinuses sit. The American Academy of Oral and Maxillofacial Radiology recommends this kind of cross-sectional imaging for every implant site ([AAOMR](https://pubmed.ncbi.nlm.nih.gov/22668710/)). You leave with a written plan and a timeline.",
      "If a failing tooth has to come out first, or the bone needs a graft, the plan says so and the timeline gets longer, often by a few months. That is the main reason two people's timelines differ.",
      "## What happens on the day of surgery?",
      "The area is fully numbed with local anesthetic, and sedation is an option if you are anxious or several implants are being placed. I open the gum, prepare a small channel in the bone, place the implant and close the gum with a few stitches. You should feel pressure, not pain.",
      "## What does recovery feel like?",
      "Expect some swelling, soreness and perhaps a little bruising for the first few days, with minor bleeding on the first day. Over-the-counter pain relief is usually enough. Eat soft foods for the first week or two and chew on the other side. Most people are back at work within a few days. If swelling or pain gets worse after the third day instead of better, call us the same day.",
      "Smoking and vaping slow healing and raise the chance that an implant does not take, so stopping around the time of surgery helps.",
      "## Why does the bone need months to heal?",
      "Over the following months the bone grows onto the implant and locks it in place, a process called osseointegration. It usually takes three to six months, longer where a graft was needed or the bone is softer. Chewing hard on the implant before then can cost you the implant, so this stage is not rushed.",
      "If the gap shows when you smile, a temporary tooth can cover it while you heal. Sometimes a temporary crown can go on the implant the same day, but only when the implant is firm enough at placement; I will tell you whether yours qualifies.",
      "If you would like to know your own timeline, [book a first visit](/appointment/) and you will leave with it in writing.",
      "## How is the final crown made?",
      "Once the bone is ready, a small connector called an abutment is attached and the gum heals around it for a couple of weeks. Our digital scanner then records your teeth as a 3D model, with no impression trays, and the crown is shaded to match your other teeth. For one missing tooth that is a [single tooth implant](/services/dental-implants-dentistry/single-tooth-implants/); for a whole arch, see [full arch implants](/services/dental-implants-dentistry/full-arch-implants/).",
      "## How long does an implant last, and how do I care for it?",
      "With good care, implants last a long time: a 2019 review of studies found about 96 in 100 still in place after 10 years ([Howe and colleagues, 2019](https://pubmed.ncbi.nlm.nih.gov/30904559/)). The crown on top wears like any tooth and may need replacing over the years.",
      "An implant cannot decay, but the gum and bone around it can become inflamed. Caught early, when the gum is red or bleeds, it is reversible; later it can mean bone loss around the implant. So the care is the same as for your own teeth: brush twice a day, clean around the implant with floss or small interdental brushes, and keep your checkups. If you grind at night, a night guard protects the crown.",
      "## Questions patients ask about the implant timeline",
      "### Can the whole thing be done in one day?",
      "Sometimes a temporary tooth goes on the same day, but the bone still needs months to heal before the final crown. A same-day temporary depends on how firm the implant is at placement.",
      "### When can I go back to work?",
      "Most people return within a few days. If you have a physical job or several implants placed, plan for a little longer.",
      "### What can I eat after implant surgery?",
      "Soft, cool foods for the first few days, then soft foods for a week or two, chewing on the other side. Avoid very hot drinks and anything crunchy over the implant until we say it is ready.",
      "### Can I get an implant years after losing the tooth?",
      "Often, yes. The bone shrinks over time where a tooth is missing, so a graft may be needed first, which adds a few months. The 3D scan shows how much bone is there before anything starts.",
      "If you are missing a tooth and want to know what an implant would involve for you, come and see us. The first visit includes the exam and the 3D scan, and you will leave with a clear plan and a timeline. Our office is at 416 N. Bedford Dr. in Beverly Hills, a short drive from [Century City](/areas-we-serve/century-city/) and [West Hollywood](/areas-we-serve/west-hollywood/). [Request an appointment](/appointment/), or call us.",
    ],
    seo: { title: "Dental Implant Timeline & Recovery | Beverly Hills Dentist Dr. Shir", description: "Dr. Nushin Shir explains the dental implant timeline in Beverly Hills: the first visit, surgery, recovery, the months of healing and the final crown." },
  },
  {
    slug: "bridge-or-implant-beverly-hills",
    title: "Bridge or implant? How to choose, from a Beverly Hills dentist",
    date: "2026-10-23",
    author: "Dr. Nushin Shir",
    category: "restorative",
    service: "/services/restorative-dentistry/dental-bridges/",
    excerpt: "Dr. Nushin Shir on how she helps patients choose between a dental bridge and an implant: the teeth beside the gap, the bone, your health and your timeline.",
    image: images.dentalModels,
    cta: "Not sure which is right for you? At your consult, Dr. Shir checks the teeth beside the gap, the bone and your health, and goes through both options with you, with no pressure to decide that day.",
    figures: [
      { beforeHeading: "What decides between a bridge and an implant?", image: images.patientReviewingXRay, alt: "Patient looking at a dental X-ray with the dentist before choosing between a bridge and an implant", caption: "Regular X-rays are usually the first look at the teeth on either side of a gap.", position: "center 40%" },
      { beforeHeading: "When is a bridge the better choice?", image: images.shadeGuideSmile, alt: "Shade guide held up to a smile to match a bridge to the natural teeth", caption: "A bridge is shaded to match your own teeth, so the replacement tooth blends in.", position: "center 55%" },
      { beforeHeading: "When is a 3D scan needed?", image: images.cbctScanner, alt: "Cone beam CT scanner in the imaging room, used when X-rays cannot show enough of the bone", caption: "The 3D scanner in our imaging room, used when regular X-rays cannot show enough of the bone or roots.", position: "center 35%" },
    ],
    blocks: [
      {
        _type: "facts",
        heading: "At a glance",
        items: [
          { icon: "clock", label: "Bridge: time to finish", value: "2 to 4 weeks" },
          { icon: "calendar", label: "Implant: time to finish", value: "3 to 9 months" },
          { icon: "shield", label: "Still in place after 10 years", value: "About 9 in 10 bridges; about 96 in 100 implants" },
          { icon: "tooth", label: "Teeth beside the gap", value: "Bridge: crowned. Implant: left alone" },
        ],
      },
      {
        _type: "options",
        beforeHeading: "How do bridges and implants compare over time?",
        heading: "Which one fits which situation",
        items: [
          { icon: "bridge", title: "A bridge often fits", text: "When the teeth beside the gap already need crowns, the bone is thin and you would rather avoid a graft, surgery is not wise for your health, or you need the gap closed in weeks." },
          { icon: "implant", title: "An implant often fits", text: "When the teeth beside the gap are healthy and untouched, there is enough bone (or you are open to a graft), and you can wait a few months while the bone heals." },
          { icon: "arch", title: "Several teeth in a row", text: "Three or more missing teeth can be carried by an implant-supported bridge, on fewer implants than teeth, without involving your natural teeth." },
        ],
      },
      {
        _type: "steps",
        beforeHeading: "Questions patients ask before choosing",
        heading: "What happens at the consult",
        items: [
          { title: "Exam and X-rays", text: "The teeth beside the gap, their roots and any old fillings or crowns are checked." },
          { title: "A 3D scan, only if needed", text: "When the X-rays cannot show enough of the bone or roots to decide, or once you choose an implant." },
          { title: "Both options, side by side", text: "What each involves for your mouth, how long it takes and what it costs, so you can decide at home." },
        ],
      },
    ],
    body: [
      "A bridge is usually the better choice when the teeth beside the gap already need crowns, when there is not enough bone for an implant, or when surgery is not right for you. An implant is usually better when those teeth are healthy, because it replaces the missing tooth without touching them. Your teeth, your bone and your health decide it.",
      "Both close the gap with a fixed tooth that looks natural, and both are good treatments. This article is only about choosing between them. For how a bridge is made and the types we offer, see our [dental bridges](/services/restorative-dentistry/dental-bridges/) page. For the implant steps, see [dental implants](/services/dental-implants-dentistry/) and [what to expect from an implant, week by week](/blog/dental-implants-beverly-hills-what-to-expect/).",
      "## What decides between a bridge and an implant?",
      "Four things decide most cases: the health of the teeth on either side of the gap, the bone under the gap, your general health, and how soon you need the gap closed. I start with an exam and regular X-rays, which show decay, old fillings and crowns, and the roots of the neighboring teeth.",
      "The neighboring teeth matter most. A bridge is held by crowns on those teeth, and shaping a tooth for a crown is permanent. If they are healthy and untouched, I would rather leave them alone. If they already have large fillings or old crowns, they need rebuilding anyway, and a bridge does both jobs at once.",
      "## When is a 3D scan needed?",
      "Not for every patient. The American Dental Association advises dentists to order a cone beam CT scan only when it is expected to improve care or safety, not as a routine step ([ADA Council on Scientific Affairs](https://pubmed.ncbi.nlm.nih.gov/22855905/)). Regular X-rays are often enough to weigh a bridge against an implant.",
      "I use our in-office 3D scanner when the X-rays cannot show what I need, such as how wide the bone is where an implant would go, or how close it is to a nerve or sinus. If you choose an implant, a 3D scan is part of planning it, as the American Academy of Oral and Maxillofacial Radiology recommends for implant sites ([AAOMR](https://pubmed.ncbi.nlm.nih.gov/22668710/)).",
      "## When is a bridge the better choice?",
      "When the teeth beside the gap already need crowns, when the bone under the gap has shrunk and you would rather not have a graft and a second surgery, or when your health makes surgery unwise, for example diabetes that is not well controlled or medicines that slow bone healing. A bridge is also faster: usually two visits over two to four weeks, against several months for an implant.",
      "Replacing a worn-out bridge is another common case. The supporting teeth already have crowns, so a new bridge is the natural repair, as long as those teeth are still sound underneath.",
      "## When is an implant the better choice?",
      "When the teeth beside the gap are healthy, an implant replaces the one tooth without involving its neighbors. It also puts a root back into the bone, which helps keep the shape of the jaw, while the bone under a bridge keeps shrinking slowly over the years. And when three or more teeth in a row are missing, an implant-supported bridge is usually the stronger design.",
      "If you are weighing the two now, [book a consult](/appointment/) and we will look at your teeth and bone together before you decide anything.",
      "## How do bridges and implants compare over time?",
      "Both last for many years with good care. In a large review of studies, about 89 in 100 conventional bridges were still in place after 10 years ([Tan and colleagues, 2004](https://pubmed.ncbi.nlm.nih.gov/15533126/)). For implants, a 2019 review found about 96 in 100 still in place after 10 years ([Howe and colleagues, 2019](https://pubmed.ncbi.nlm.nih.gov/30904559/)).",
      "Each has its weak point. A bridge depends on its anchor teeth: if one decays at the edge of its crown or its root fails, the bridge usually has to be redone, which is why daily cleaning under it matters so much ([ADA, MouthHealthy](https://www.mouthhealthy.org/all-topics-a-z/bridges)). An implant cannot decay, but the gum and bone around it can become inflamed, so it needs the same daily care and checkups as your own teeth.",
      "## What about cost and insurance?",
      "A bridge usually costs less up front, and an implant often costs less over a lifetime because it does not depend on other teeth. What you pay depends on your mouth and your plan, so we give you the cost of each option before you decide. We accept Aetna, Cigna, Delta Dental, MetLife and UnitedHealthcare, and offer payment plans through Cherry and CareCredit.",
      "## Questions patients ask before choosing",
      "### Is an implant always better than a bridge?",
      "No. An implant is often the better long-term choice when the teeth beside the gap are healthy, but a bridge is the better fit when those teeth need crowns anyway, when the bone is thin, or when surgery is not right for you.",
      "### Can I start with a bridge and switch to an implant later?",
      "Often, yes. The bone under the gap shrinks slowly over time, so a graft may be needed first. A 3D scan at that point shows what is possible.",
      "### Which one hurts more?",
      "Neither should hurt during treatment, because the area is numbed. After a bridge, some sensitivity to cold for a few days is common. After implant surgery, expect a few days of soreness and swelling, much like having a tooth out.",
      "### What happens if I leave the gap?",
      "The teeth beside it tip and drift into the space, the opposite tooth can move toward it, and your bite changes in ways that are harder to fix later. Whichever you choose, replacing the tooth sooner keeps more options open.",
      "If you have a gap and are weighing a bridge against an implant, come in and we will look at the whole picture with you: the teeth beside the gap, the bone and your health. Our one office is at 416 N. Bedford Dr. in Beverly Hills, a short drive from [Century City](/areas-we-serve/century-city/) and [West Hollywood](/areas-we-serve/west-hollywood/). [Request an appointment](/appointment/) and we will go through both options with no pressure.",
    ],
    seo: { title: "Bridge or Implant? How to Choose | Beverly Hills Dentist Dr. Shir", description: "Dr. Nushin Shir explains how to choose between a dental bridge and an implant: the teeth beside the gap, the bone, your health, time and cost." },
  },
];
