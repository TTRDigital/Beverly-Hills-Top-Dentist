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
          { label: "No-Drill Cavity Care", href: "/services/preventive-dentistry/no-drill-cavity-care/" },
          { label: "Biofilm Therapy", href: "/services/preventive-dentistry/biofilm-therapy/" },
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
  { label: "Blog", href: "/blog/" },
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
  // TTR-910 (Oct 26, 2026): Dr. Shir's two new services. Each "TODO(TTR-910)" marks a line to update once she answers.
  {
    slug: "no-drill-cavity-care-biofilm-therapy",
    title: "No-drill cavity care and biofilm therapy: what they can and cannot do",
    date: "2026-10-26",
    author: "Dr. Nushin Shir",
    category: "preventive",
    service: "/services/preventive-dentistry/no-drill-cavity-care/",
    excerpt: "Early tooth decay can often be stopped without drilling, and biofilm therapy cleans away plaque you can see. What each one does, what the research says, and what neither can promise.",
    image: images.hygienistTreatingPatient,
    cta: "At your next checkup we can look for early white spots and check your gums, and tell you whether no-drill care or biofilm therapy makes sense for you.",
    figures: [
      { beforeHeading: "What are the no-drill options?", image: images.digitalXRayRoom, alt: "Treatment room with a dental chair and the digital X-ray monitor used to find early decay", caption: "Early lesions are found with an exam and, when needed, digital X-rays, here in one of our treatment rooms.", position: "center 40%" },
      { beforeHeading: "What happens during biofilm therapy?", image: images.treatmentChair, alt: "Treatment room at the Bedford Drive office with a dental chair", caption: "Biofilm therapy is done in the chair, like any professional cleaning.", position: "center 45%" },
    ],
    blocks: [
      {
        _type: "facts",
        heading: "At a glance",
        items: [
          { icon: "tooth", label: "Early decay (white spots)", value: "Can often be stopped or reversed without drilling" },
          { icon: "shield", label: "Enamel that is already lost", value: "Does not grow back" },
          { icon: "layers", label: "Biofilm therapy", value: "A dye shows plaque, then air polishing and ultrasonic cleaning remove it" },
          { icon: "clock", label: "Fluoride varnish", value: "A few minutes, often at a checkup" },
        ],
      },
      {
        _type: "options",
        beforeHeading: "When is a filling still the right choice?",
        heading: "Which no-drill option fits which lesion",
        items: [
          { icon: "tooth", title: "A white spot on a smooth surface", text: "Fluoride varnish, a prescription fluoride toothpaste or a self-assembling peptide." },
          { icon: "layers", title: "An early lesion in a groove or between teeth", text: "A sealant over a groove; resin infiltration between teeth." },
          { icon: "shield", title: "A cavity that needs stopping", text: "Silver diamine fluoride, which stops many cavities but stains the decay black." },
        ],
      },
      {
        _type: "steps",
        beforeHeading: "Is biofilm therapy better than a regular cleaning?",
        heading: "A biofilm therapy visit",
        items: [
          { title: "Exam and gum check", text: "Your health history, an exam and gum measurements, so we know what kind of cleaning you need." },
          { title: "Disclosing dye", text: "A solution colors the plaque so it can be seen, and we show you where it builds up." },
          { title: "Air polishing", text: "A fine spray of water, air and powder removes the colored plaque." },
          { title: "Tartar and a final check", text: "Ultrasonic or hand instruments remove hard tartar, then we check that nothing colored is left." },
        ],
      },
    ],
    body: [
      "Early tooth decay can often be stopped, and sometimes reversed, without drilling, by putting minerals back into weakened enamel with treatments such as fluoride varnish, sealants, silver diamine fluoride, resin infiltration or a self-assembling peptide. Enamel that is already lost does not grow back. Biofilm therapy is a professional cleaning that colors plaque with a dye, then removes it with air polishing and ultrasonic instruments. Both aim to stop problems early, and neither replaces brushing and flossing every day.",
      // TODO(TTR-910): once Dr. Shir names her methods, say which ones the office uses here.
      "Our office now offers both. This article explains what each one does, who it suits and what the research says. For the details, see our [no-drill cavity care](/services/preventive-dentistry/no-drill-cavity-care/) and [biofilm therapy](/services/preventive-dentistry/biofilm-therapy/) pages.",
      "## Can early tooth decay heal without drilling?",
      "Sometimes. Decay is a tug of war: acid made by the bacteria in plaque pulls minerals out of enamel, and saliva and fluoride put them back. When minerals are lost faster than they return, a chalky white spot can appear. At that stage, decay can be stopped or reversed. Once it breaks through the surface and forms a cavity, the damage stays, and a dentist has to repair it with a filling ([NIDCR](https://www.nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process)).",
      "So no-drill care does not rebuild lost enamel, which cannot grow back ([Cleveland Clinic](https://my.clevelandclinic.org/health/diseases/tooth-erosion)). What it can do is harden weakened enamel, seal early lesions so acid cannot reach them, and keep many lesions from getting bigger.",
      "## What are the no-drill options?",
      "An American Dental Association expert panel reviewed the randomized trials and recommends several no-drill treatments for stopping or reversing decay in children and adults, including 5% sodium fluoride varnish, sealants, 5,000 ppm fluoride toothpaste or gel, and 38% silver diamine fluoride ([ADA guideline, 2018](https://pubmed.ncbi.nlm.nih.gov/30261951/)). Which one fits depends on where the lesion is and how deep it goes.",
      "**Fluoride varnish** is painted on in a few minutes and helps put minerals back into early white spots. **Prescription fluoride toothpaste** is used at home by people more likely to get decay, especially on exposed roots. A **sealant** placed over an early lesion in the groove of a back tooth can help stop it from getting worse; see our [dental sealants](/services/preventive-dentistry/dental-sealants/) page.",
      "**Silver diamine fluoride** is a liquid brushed onto decay that can stop it from getting worse. It turns the decayed area black, and the stain stays. In the US it is cleared by the FDA for tooth sensitivity, so using it to stop decay is off-label, and it is usually reapplied twice a year ([ADA](https://www.ada.org/resources/ada-library/oral-health-topics/silver-diamine-fluoride)).",
      "**Resin infiltration** is for early lesions between teeth. A very thin resin soaks into the weakened enamel and blocks the paths acid travels through; a review of randomized trials found treated lesions were less likely to get worse ([Cebula and colleagues, 2023](https://pubmed.ncbi.nlm.nih.gov/36675656/)), though some of its authors work with the company that makes the material. A **self-assembling peptide** (P11-4) forms a framework inside an early white spot that minerals from saliva can build on. A 2023 review of six trials found it likely helps stop early lesions and makes them smaller, but the trials had weaknesses and longer studies are needed ([Keeper and colleagues, 2023](https://pubmed.ncbi.nlm.nih.gov/37245138/)).",
      "## When is a filling still the right choice?",
      "When decay has made a hole in the tooth, reaches deep inside it, or keeps growing despite no-drill care. No-drill treatment is a plan, not a one-time fix: we record each lesion and recheck it at your visits with an exam and, when needed, [digital X-rays](/services/dental-technology/digital-x-rays/). If it keeps growing, a small [filling](/services/restorative-dentistry/dental-fillings/) protects the tooth.",
      "## What is biofilm, and why does it matter?",
      "Plaque is a biofilm, a sticky film of bacteria on the teeth and along the gums. The bacteria in plaque and tartar can trigger the inflammation that damages the gums, and early gum disease can often be reversed with daily brushing and flossing ([NIDCR](https://www.nidcr.nih.gov/health-info/gum-disease)). Hardened tartar can only be removed by a dental professional, which is where a professional cleaning comes in.",
      "## What happens during biofilm therapy?",
      // TODO(TTR-910): name the system (for example Guided Biofilm Therapy) once Dr. Shir confirms it.
      "Biofilm therapy is a way of doing that cleaning. One well-known version is called Guided Biofilm Therapy. First, a disclosing solution colors the plaque so it shows up, and we show you where it builds up. Most of it is then removed with air polishing, a fine spray of water, air and a very fine powder. Ultrasonic or hand instruments remove any hard tartar that remains, and a final look makes sure nothing colored is left behind.",
      "The dye makes a difference. In a randomized trial, a cleaning guided by the disclosing dye left about half as much plaque behind as the same cleaning without it ([Mensi and colleagues, 2020](https://pubmed.ncbi.nlm.nih.gov/32348624/)). Air-polishing powders have also been studied for cleaning below the gumline, including around implants ([Gheorghe and colleagues, 2023](https://pubmed.ncbi.nlm.nih.gov/37959401/)).",
      "## Is biofilm therapy better than a regular cleaning?",
      "Not clearly, and we will not tell you otherwise. A 2026 review of five studies comparing Guided Biofilm Therapy with standard scaling found that patients reported less pain and the treatment took less time, but the effect on gum measurements such as bleeding and pocket depth was mixed, and the authors concluded the evidence does not show it is clinically better ([Yein and colleagues, 2026](https://pubmed.ncbi.nlm.nih.gov/42032569/)). It is a thorough, visible way to clean. If you have deep gum pockets or bone loss, you may still need [deep cleanings](/services/periodontic-dentistry/deep-cleanings/) or other [gum disease treatment](/services/periodontic-dentistry/gum-disease-treatment/).",
      "If you would like to know whether either one fits you, [book a visit](/appointment/) and we will check your teeth and gums first.",
      "## Do healthy gums protect your heart and blood sugar?",
      "The research shows a link, not a promise. Diabetes is a risk factor for gum disease, and heart and blood vessel disease is among the illnesses associated with it ([NIDCR](https://www.nidcr.nih.gov/health-info/gum-disease)). The American Heart Association found that studies support a link between gum disease and heart and blood vessel disease, but do not show that gum disease causes it, or that treating gum disease prevents it ([AHA, 2012](https://pubmed.ncbi.nlm.nih.gov/22514251/)).",
      "Diabetes is where the evidence for treatment is stronger. In people with both diabetes and gum disease, a Cochrane review of randomized trials found that treating the gum disease with deep cleaning improved blood sugar control over the following months ([Simpson and colleagues, 2022](https://pubmed.ncbi.nlm.nih.gov/35420698/)). That is a good reason to keep your gums healthy. It does not make biofilm therapy a treatment for heart disease or diabetes, and your doctor's care stays just as important.",
      "## Questions patients ask about no-drill care and biofilm therapy",
      "### Can tooth enamel grow back?",
      "No. Lost enamel cannot grow back. Weakened enamel in an early lesion can take minerals back in from saliva and fluoride, which can stop or reverse early decay. That is what no-drill care aims for.",
      "### Does silver diamine fluoride stain teeth?",
      "Yes. It turns the decayed part of the tooth black, and the stain stays. We talk it through with you before using it, especially on a tooth that shows when you smile.",
      "### Who is no-drill cavity care for?",
      // TODO(TTR-910): confirm who Dr. Shir offers each service to.
      "People with white spots or early lesions that have not broken through the enamel, decay starting on exposed roots, and children and adults who are more likely to get decay. A checkup shows whether your lesions are early enough.",
      "### How often should I have biofilm therapy?",
      "It depends on the health of your gums. We set how often you come back with you after the exam.",
      "### Is either one covered by insurance?",
      // TODO(TTR-910): replace with Dr. Shir's cost or insurance note, or keep this neutral answer.
      "Coverage depends on your plan and on the treatment, so we check your plan and give you the cost before we start. We accept Aetna, Cigna, Delta Dental, MetLife and UnitedHealthcare, and offer payment plans through Cherry and CareCredit.",
      "If you have white spots, sensitive areas or gums that bleed when you brush, come and see us. We will check your teeth and gums and go through your options, with no pressure to decide that day. Our office is at 416 N. Bedford Dr. in Beverly Hills, a short drive from [Century City](/areas-we-serve/century-city/) and [West Hollywood](/areas-we-serve/west-hollywood/). [Request an appointment](/appointment/), or call us.",
    ],
    seo: { title: "No-Drill Cavity Care & Biofilm Therapy | Beverly Hills Dentist Dr. Shir", description: "No-drill cavity care and biofilm therapy in Beverly Hills: what each does, what the research shows, and why enamel does not grow back, from Dr. Shir." },
  },
  {
    slug: "dental-implants-beverly-hills-what-to-expect",
    title: "Dental implant timeline and recovery: what to expect, week by week",
    date: "2026-10-23",
    author: "Dr. Nushin Shir",
    category: "implants",
    service: "/services/dental-implants-dentistry/",
    excerpt: "A dental implant from the first visit to the final crown: how long each stage usually takes, what recovery feels like and how to care for it.",
    image: images.seniorPatientMirror,
    cta: "At the first visit we examine your mouth and, if an implant looks right for you, take a 3D scan, so you know your timeline before anything starts.",
    figures: [
      { beforeHeading: "What happens on the day of surgery?", image: images.dentistsTreatingPatient, alt: "Two clinicians treating a patient in a treatment room at the Bedford Drive office", caption: "Two of our clinicians at work in a treatment room on Bedford Drive.", position: "center 40%" },
      { beforeHeading: "Why does the bone need months to heal?", image: images.cbctScanner, alt: "Cone beam CT scanner used to plan where each implant sits in the bone", caption: "Implants are planned on a 3D scan taken in our imaging room.", position: "center 35%" },
      { beforeHeading: "How is the final crown made?", image: images.iteroScanner, alt: "Digital intraoral scanner that records the teeth for the final implant crown, with no impression trays", caption: "Our digital scanner records your teeth for the final crown, with no impression trays.", position: "center 30%" },
    ],
    blocks: [
      {
        _type: "facts",
        heading: "Quick facts",
        items: [
          { icon: "clock", label: "From the first visit to the finished tooth", value: "Several months, longer with a graft" },
          { icon: "shield", label: "Bone healing around the implant", value: "Often 3 to 6 months, sometimes longer" },
          { icon: "calendar", label: "Feeling like yourself after surgery", value: "Usually within a week or so" },
          { icon: "pin", label: "Scan, surgery and crown", value: "Planned at one office" },
        ],
      },
      {
        _type: "steps",
        beforeHeading: "What happens on the day of surgery?",
        heading: "The implant timeline",
        items: [
          { title: "First visit", text: "Exam, medical history and, if an implant is planned, a 3D scan. You leave with a written plan and a timeline." },
          { title: "Surgery day", text: "The area is numbed, the implant is placed and the gum is closed with a few stitches." },
          { title: "The first one to two weeks", text: "Swelling and soreness usually settle within days; soft foods for a week or two." },
          { title: "The next few months", text: "The bone grows onto the implant, often over three to six months and sometimes longer. A temporary tooth can cover the gap." },
          { title: "The final crown", text: "The implant is uncovered if needed, a connector goes on, and the crown is made from a digital scan." },
        ],
      },
    ],
    body: [
      "From the first visit to the finished tooth, a dental implant usually takes several months, and longer if a tooth has to come out first or a bone graft is needed. The main surgery is one appointment, and most people feel like themselves within a week or so. Most of the time is the bone healing around the implant, often three to six months and sometimes longer ([Cleveland Clinic](https://my.clevelandclinic.org/health/treatments/10903-dental-implants)).",
      "This article is about that timeline: what each stage usually feels like, how long it takes and what you can do to help it go well. For what an implant is and who is a good candidate, see our [dental implants](/services/dental-implants-dentistry/) page. If you are still deciding between an implant and a bridge, start with [bridge or implant: how to choose](/blog/bridge-or-implant-beverly-hills/).",
      "## What happens at the first visit?",
      "The first appointment is about information, not treatment. We examine your mouth, go through your medical history and every medicine you take, and, if an implant looks like the right choice, take a 3D scan here in the office. A regular X-ray is a flat picture; the scan shows the width and height of your bone and where the nerve and sinuses sit. The American Academy of Oral and Maxillofacial Radiology recommends cross-sectional imaging for implant sites, and a 3D scan is the usual way to get it ([AAOMR](https://pubmed.ncbi.nlm.nih.gov/22668710/)). You leave with a written plan and a timeline.",
      "If a failing tooth has to come out first, or the bone needs a graft, the plan says so and the timeline gets longer, often by a few months and sometimes more for larger grafts. Some grafts are placed in the same surgery as the implant. That is the main reason two people's timelines differ.",
      "## What happens on the day of surgery?",
      "The area is numbed with local anesthetic, and sedation may be an option if you are anxious or several implants are being placed. The gum is opened, a small channel is prepared in the bone, the implant is placed, and the gum is closed with a few stitches. You should feel pressure, not pain; tell us if you feel anything sharp.",
      "## What does recovery feel like?",
      "Expect some swelling, soreness and perhaps a little bruising for the first few days, with minor bleeding on the first day. Over-the-counter pain relief is usually enough. Eat soft foods for the first week or two and chew on the other side. Cleveland Clinic says most people feel like themselves within a week or so ([Cleveland Clinic](https://my.clevelandclinic.org/health/treatments/10903-dental-implants)). Many go back to work within a few days; plan for longer after a bone graft, several implants or if your job is physical.",
      "Call us the same day if swelling or pain gets worse after the third day instead of better, or if you have a fever, pus or a bad taste, bleeding that does not stop with pressure, numbness or tingling in your lip, chin or tongue that lasts after the anesthetic should have worn off (usually by that evening), or the implant feels loose. If you have trouble breathing or swallowing, or swelling spreads toward your eye or neck, go to the nearest emergency room or call 911.",
      "Smoking slows healing and raises the chance that an implant does not take, and vaping may do the same, so stopping before surgery and through healing helps.",
      "## Why does the bone need months to heal?",
      "Over the following months the bone grows onto the implant and locks it in place, a process called osseointegration. It often takes three to six months, longer where a graft was needed or the bone is softer. Chewing hard on the implant before then can make it fail, so this stage is not rushed.",
      "If the gap shows when you smile, a temporary tooth can cover it while you heal. Sometimes a temporary crown can go on the implant the same day, but only when the implant is very firm and your bite and bone allow it, and it is kept out of your bite while you heal. Your dentist will tell you whether yours qualifies.",
      "If you would like to know your own timeline, [book a first visit](/appointment/) and you will leave with it in writing.",
      "## How is the final crown made?",
      "Once the bone is ready, the implant is uncovered if the gum was closed over it (a short, numbed visit), a small connector called an abutment is attached, and the gum heals around it for a couple of weeks. Our digital scanner then records your teeth as a 3D model, with no impression trays, and the crown is shaded to match your other teeth. For one missing tooth that is a [single tooth implant](/services/dental-implants-dentistry/single-tooth-implants/); for a whole arch, see [full arch implants](/services/dental-implants-dentistry/full-arch-implants/).",
      "## How long does an implant last, and how do I care for it?",
      "With good care, implants last a long time. A 2019 review of 18 studies found about 93 to 96 in 100 implants still in place after 10 years, depending on how people who stopped coming to checkups were counted. The same review found the risk of losing an implant may be up to about twice as high in people 65 and older ([Howe and colleagues, 2019](https://pubmed.ncbi.nlm.nih.gov/30904559/)). The crown on top is not permanent: in another review, about 9 in 10 implant crowns were still in place after 10 years, and repairs such as a loose screw or chipped porcelain were common ([Jung and colleagues, 2012](https://pubmed.ncbi.nlm.nih.gov/23062124/)).",
      "The implant itself cannot get a cavity, but the gum and bone around it can become inflamed. In one review, about 4 in 10 people with implants had gum inflammation around an implant, and about 1 in 5 had inflammation with bone loss ([Derks and Tomasi, 2015](https://pubmed.ncbi.nlm.nih.gov/25495683/)). Caught early, when the gum is red, swollen or bleeds, the inflammation can often be reversed with a professional cleaning and better cleaning at home, though the redness and bleeding can take more than three weeks to settle ([Heitz-Mayfield and Salvi, 2018](https://pubmed.ncbi.nlm.nih.gov/29926954/)). If it goes on, it can lead to bone loss around the implant, which is harder to treat, so regular checkups with X-rays matter ([2017 World Workshop](https://pubmed.ncbi.nlm.nih.gov/29926955/)). So the care is the same as for your own teeth: brush twice a day, clean around the implant with floss or small interdental brushes, and keep your checkups. If you grind at night, a night guard can protect the crown.",
      "## Questions patients ask about the implant timeline",
      "### Can the whole thing be done in one day?",
      "Usually not. In some cases a temporary tooth can go on the same day if the implant is very firm, and it is kept out of your bite. The final crown usually waits for the bone to heal, which often takes three months or more.",
      "### When can I go back to work?",
      "Many people go back within a few days. Plan for longer after a bone graft, several implants, or if your job is physical.",
      "### What can I eat after implant surgery?",
      "Soft, cool foods for the first few days, then soft foods for a week or two, chewing on the other side. Avoid very hot drinks and anything crunchy over the implant until we say it is ready.",
      "### Can I get an implant years after losing the tooth?",
      "Often, yes. The bone shrinks where a tooth is missing, most in the first months, so a graft may be needed, which can add a few months, sometimes more. The 3D scan shows how much bone is there before anything starts.",
      "If you are missing a tooth and want to know what an implant would involve for you, come and see us. The first visit includes the exam and, if an implant is planned, the 3D scan, and you will leave with a clear plan and a timeline. Our office is at 416 N. Bedford Dr. in Beverly Hills, a short drive from [Century City](/areas-we-serve/century-city/) and [West Hollywood](/areas-we-serve/west-hollywood/). [Request an appointment](/appointment/), or call us.",
    ],
    seo: { title: "Dental Implant Timeline & Recovery | Beverly Hills Dentist Dr. Shir", description: "The dental implant timeline in Beverly Hills: the first visit, surgery, recovery, the months of healing and the final crown, and how to care for it." },
  },
  {
    slug: "bridge-or-implant-beverly-hills",
    title: "Bridge or implant? How to choose, from a Beverly Hills dentist",
    date: "2026-10-23",
    author: "Dr. Nushin Shir",
    category: "restorative",
    service: "/services/restorative-dentistry/dental-bridges/",
    excerpt: "How to choose between a dental bridge and an implant: the teeth beside the gap, the bone, your health, time and cost, explained by our Beverly Hills dental team.",
    image: images.dentalModels,
    cta: "Not sure which is right for you? At your consult we check the teeth beside the gap, the bone and your health, and go through both options with you, with no pressure to decide that day.",
    figures: [
      { beforeHeading: "What decides between a bridge and an implant?", image: images.patientReviewingXRay, alt: "Patient looking at a dental X-ray before choosing between a bridge and an implant", caption: "Regular X-rays are usually the first look at the teeth on either side of a gap.", position: "center 40%" },
      { beforeHeading: "When is a bridge a good choice?", image: images.shadeGuideSmile, alt: "Shade guide held up to a smile to match a bridge to the natural teeth", caption: "A bridge is shaded to match your own teeth, so the replacement tooth blends in.", position: "center 55%" },
      { beforeHeading: "When is a 3D scan needed?", image: images.cbctScanner, alt: "Cone beam CT scanner in the imaging room, used when X-rays cannot show enough of the bone", caption: "The 3D scanner in our imaging room, used when regular X-rays cannot show enough of the bone or roots.", position: "center 35%" },
    ],
    blocks: [
      {
        _type: "facts",
        heading: "At a glance",
        items: [
          { icon: "clock", label: "Bridge: time to finish", value: "Usually 2 to 4 weeks" },
          { icon: "calendar", label: "Implant: time to finish", value: "Several months, longer with a graft" },
          { icon: "shield", label: "How long they last", value: "Both last many years with good care; repairs are common with both" },
          { icon: "tooth", label: "Teeth beside the gap", value: "Bridge: usually crowned. Implant: left alone" },
        ],
      },
      {
        _type: "options",
        beforeHeading: "How do bridges and implants compare over time?",
        heading: "Which one fits which situation",
        items: [
          { icon: "bridge", title: "A bridge may fit", text: "When the teeth beside the gap already need crowns, the bone is thin and you would rather avoid a graft, surgery is riskier for your health, or you want the gap closed in weeks." },
          { icon: "implant", title: "An implant may fit", text: "When the teeth beside the gap are healthy and untouched, there is enough bone (or you are open to a graft), and you can wait a few months while the bone heals." },
          { icon: "arch", title: "Several teeth in a row", text: "Three or more missing teeth can be carried by an implant-supported bridge, on fewer implants than teeth, without relying on your natural teeth." },
        ],
      },
      {
        _type: "steps",
        beforeHeading: "Questions patients ask before choosing",
        heading: "What happens at the consult",
        items: [
          { title: "Exam and X-rays", text: "The teeth beside the gap, their roots and any old fillings or crowns are checked." },
          { title: "A 3D scan, only if needed", text: "When the X-rays cannot show enough of the bone or roots, or once an implant is being planned." },
          { title: "Both options, side by side", text: "What each involves for your mouth, how long it usually takes and what it costs, so you can decide at home." },
        ],
      },
    ],
    body: [
      "A bridge is often a good choice when the teeth beside the gap already need crowns, when there is not enough bone for an implant, or when surgery is riskier for you. An implant is often a good choice when those teeth are healthy, because it replaces the missing tooth without involving them. Your teeth, your bone, your health and your preferences decide it.",
      "Both close the gap with a fixed tooth that looks natural, and both are good treatments. This article is about choosing between them. For how a bridge is made and the types we offer, see our [dental bridges](/services/restorative-dentistry/dental-bridges/) page. For the implant steps, see [dental implants](/services/dental-implants-dentistry/) and [what to expect from an implant, week by week](/blog/dental-implants-beverly-hills-what-to-expect/).",
      "## What decides between a bridge and an implant?",
      "Four things decide most cases: the health of the teeth on either side of the gap, the bone under the gap, your general health, and how soon you want the gap closed. Cost, your bite and the length of the gap matter too. We start with an exam and regular X-rays, which show decay, old fillings and crowns, and the roots of the neighboring teeth.",
      "The neighboring teeth often matter most. A regular bridge is held by crowns on those teeth, and shaping a tooth for a crown cannot be undone ([Cleveland Clinic](https://my.clevelandclinic.org/health/treatments/10921-dental-bridges)). A bonded bridge needs less shaping, but it suits only some gaps. If the neighboring teeth are healthy and untouched, that is a strong reason to consider an implant. If they already have large fillings or old crowns, they may need crowns anyway, and then a bridge does both jobs at once.",
      "## When is a 3D scan needed?",
      "Not for every patient. The American Dental Association advises dentists to order a cone beam CT scan only when it is expected to improve care or safety, not as a routine step ([ADA Council on Scientific Affairs](https://pubmed.ncbi.nlm.nih.gov/22855905/)). Regular X-rays are often enough to start the conversation about a bridge or an implant.",
      "We use our in-office 3D scanner when the X-rays cannot show what we need. If an implant is being planned, the American Academy of Oral and Maxillofacial Radiology recommends cross-sectional imaging of the site, and a 3D scan is the usual way to get it ([AAOMR](https://pubmed.ncbi.nlm.nih.gov/22668710/)). It shows how much bone there is and where the nerve and sinus sit. It uses more radiation than a regular X-ray, which is why we take it only when it will help plan your care.",
      "## When is a bridge a good choice?",
      "When the teeth beside the gap already need crowns, when the bone under the gap has thinned and you would rather avoid a bone graft (which sometimes means an extra procedure), or when your health makes surgery riskier, such as diabetes that is not well controlled or certain bone or immune medicines. Smoking also raises the risks of implant surgery. Many people with well-managed health conditions can still have implants ([Cleveland Clinic](https://my.clevelandclinic.org/health/treatments/10903-dental-implants)). Gum disease needs treating first with either option, because it can also harm the teeth that hold a bridge.",
      "A bridge is also usually quicker: often two visits over about two to four weeks while the lab makes the bridge, against several months for an implant. If a tooth has to come out first, healing can add a few months to either. Lab schedules, healing and your own situation can change either timeline. Replacing a worn-out bridge is another common case: the supporting teeth already have crowns, so a new bridge can be the natural repair, as long as those teeth are still sound underneath.",
      "## When is an implant a good choice?",
      "When the teeth beside the gap are healthy, an implant replaces the one tooth without involving its neighbors. It also gives the bone a root to support, which helps it hold its shape. Most bone loss happens in the first months after a tooth is lost, and under a bridge the bone can keep thinning slowly after that.",
      "When three or more teeth in a row are missing, an implant-supported bridge is often considered, because a long bridge needs strong support from the teeth at each end ([Cleveland Clinic](https://my.clevelandclinic.org/health/treatments/10921-dental-bridges)).",
      "If you are weighing the two now, [book a consult](/appointment/) and we will look at your teeth and bone together before you decide anything.",
      "## How do bridges and implants compare over time?",
      "Both last for many years with good care, and repairs are common with both. In one large review of fixed bridges, about 89 in 100 were still in place after 10 years, and about 3 in 10 had needed a repair or had some other problem along the way ([Tan and colleagues, 2004](https://pubmed.ncbi.nlm.nih.gov/15533126/)). In another review, about 89 in 100 crowns on implants were still in place after 10 years, the implant posts themselves did a little better, and repairs such as a loose screw or chipped porcelain were common ([Jung and colleagues, 2012](https://pubmed.ncbi.nlm.nih.gov/23062124/); [Howe and colleagues, 2019](https://pubmed.ncbi.nlm.nih.gov/30904559/)). These studies looked at different patients and measured different things, so they do not rank one option above the other. Your dentist can explain what to expect for your mouth.",
      "Each has its weak point. A bridge depends on the teeth that hold it, so decay or gum disease on those teeth can put the whole bridge at risk ([ADA, MouthHealthy](https://www.mouthhealthy.org/all-topics-a-z/bridges)). That is why cleaning under it every day, with a floss threader or a small brush, matters ([Cleveland Clinic](https://my.clevelandclinic.org/health/treatments/10921-dental-bridges)). An implant cannot get a cavity, but the gum and bone around it can become inflamed. In one review, about 4 in 10 people with implants had gum inflammation around an implant, and about 1 in 5 had inflammation with bone loss ([Derks and Tomasi, 2015](https://pubmed.ncbi.nlm.nih.gov/25495683/)). A history of gum disease and poor cleaning raise the risk, so an implant needs the same daily care and regular checkups as your own teeth ([2017 World Workshop](https://pubmed.ncbi.nlm.nih.gov/29926955/)).",
      "## What about cost and insurance?",
      "A bridge usually costs less up front ([Cleveland Clinic](https://my.clevelandclinic.org/health/treatments/10921-dental-bridges)). For a single missing tooth, a review of cost studies from 2000 to 2010 found an implant was often good value over the long run compared with a three-tooth bridge, though the studies varied, and your own costs depend on your teeth and your insurance ([Vogel and colleagues, 2013](https://pubmed.ncbi.nlm.nih.gov/23527335/)). We give you the cost of each option before you decide. We accept Aetna, Cigna, Delta Dental, MetLife and UnitedHealthcare, and offer payment plans through Cherry and CareCredit.",
      "## Questions patients ask before choosing",
      "### Is an implant always better than a bridge?",
      "No. An implant is often a good long-term choice when the teeth beside the gap are healthy, but a bridge may be the better fit when those teeth need crowns anyway, when the bone is thin, or when surgery is riskier for you.",
      "### Can I start with a bridge and switch to an implant later?",
      "Often, yes. The bridge would be removed, and the teeth that held it will still need their own crowns. The bone under the gap can thin over time, so a graft may be needed first. A 3D scan at that point shows what is possible.",
      "### Does either one hurt?",
      "You are numbed for both, so you should feel pressure but not pain; tell us if you feel anything sharp. After a bridge, some sensitivity to cold for a week or two is common; call us if it gets worse, if it hurts to bite, if the bridge feels loose, or if your gums are sore or bleed. After implant surgery, most people have a few days of soreness and swelling. Everyone's experience is a little different.",
      "### What happens if I leave the gap?",
      "Over time, the teeth beside it can tip or drift and the opposite tooth can move toward the space, which can change your bite. How much and how fast varies from person to person, so we check the gap at your visits. Replacing the tooth sooner usually keeps more options open.",
      "If you have a gap and are weighing a bridge against an implant, come in and we will look at the whole picture with you: the teeth beside the gap, the bone and your health. Our office is at 416 N. Bedford Dr. in Beverly Hills, a short drive from [Century City](/areas-we-serve/century-city/) and [West Hollywood](/areas-we-serve/west-hollywood/). [Request an appointment](/appointment/) and we will go through both options with no pressure.",
    ],
    seo: { title: "Bridge or Implant? How to Choose | Beverly Hills Dentist Dr. Shir", description: "How to choose between a dental bridge and an implant: the teeth beside the gap, the bone, your health, time and cost, from our Beverly Hills office." },
  },
];
