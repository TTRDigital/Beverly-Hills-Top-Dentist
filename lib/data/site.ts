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
    title: "Dental implants in Beverly Hills: what to expect",
    date: "2026-10-23",
    author: "Dr. Nushin Shir",
    category: "implants",
    service: "/services/dental-implants-dentistry/",
    excerpt: "Dr. Nushin Shir explains each step of getting a dental implant in Beverly Hills: the 3D scan, the surgery, the months of healing and the final crown.",
    image: images.biomimetic,
    cta: "The first visit includes the exam and the 3D scan, so you will know whether an implant is right for you before anything starts.",
    // Real photos of the office, each above the section it illustrates.
    figures: [
      { beforeHeading: "What happens at the first visit?", image: images.cbctScanner, caption: "The cone beam CT scanner in our imaging room. Every implant is planned on a 3D scan taken here, in the office.", position: "center 35%" },
      { beforeHeading: "What does the implant surgery feel like?", image: images.dentistsTreatingPatient, caption: "Two of our clinicians at work in the treatment room on Bedford Drive.", position: "center 40%" },
      { beforeHeading: "Why the wait between the implant and the crown?", image: images.iteroScanner, caption: "Our digital scanner records your teeth as a 3D model, with no impression trays. We scan again once the implant is ready for its crown.", position: "center 30%" },
    ],
    // Short summaries of what the text says, as real text (facts, steps and option cards).
    blocks: [
      {
        _type: "facts",
        heading: "Quick facts",
        items: [
          { icon: "clock", label: "From the first scan to the finished tooth", value: "3 to 9 months" },
          { icon: "shield", label: "Bone healing around the implant", value: "3 to 6 months" },
          { icon: "scan", label: "Planning", value: "In-office 3D CT scan" },
          { icon: "pin", label: "Scan, surgery and crown", value: "All at one office" },
        ],
      },
      {
        _type: "steps",
        beforeHeading: "What happens at the first visit?",
        heading: "The four stages of an implant",
        items: [
          { title: "First visit", text: "Exam, medical history, the 3D CT scan and a digital scan. You leave with a written plan and a timeline." },
          { title: "Implant surgery", text: "The area is numbed, the post is placed in the bone and the gum is closed with a few stitches." },
          { title: "Healing", text: "Three to six months while the bone grows onto the post. A temporary tooth can cover the gap." },
          { title: "Abutment and crown", text: "A small connector goes on, the gum heals around it, and the final crown is shaded to match your teeth." },
        ],
      },
      {
        _type: "options",
        beforeHeading: "How do I take care of an implant?",
        heading: "One tooth, a few, or all of them",
        items: [
          { icon: "implant", title: "Single tooth implant", text: "One post and one crown, with the neighboring teeth left untouched." },
          { icon: "bridge", title: "Implant-supported bridge", text: "Three or more missing teeth in a row, carried by fewer posts than teeth." },
          { icon: "arch", title: "Full arch on implants", text: "A fixed set of teeth on four or more implants spread around the jaw." },
        ],
      },
    ],
    body: [
      "A dental implant replaces a missing tooth from the root up. A small titanium post is placed in the jawbone, the bone heals around it over several months, and a custom crown is then attached on top. From the first scan to the finished tooth, most patients are looking at three to nine months, depending on their bone and on whether a tooth has to come out first.",
      "Patients ask me about implants more than any other treatment, often with a mix of stories from friends. So here is what actually happens when you come to us for [dental implants in Beverly Hills](/services/dental-implants-dentistry/), step by step.",
      "## Why replace a missing tooth at all?",
      "A gap does more than change your smile. The teeth either side drift into the space, which changes your bite and makes those teeth harder to clean. Chewing shifts to the other side. And the bone that held the root slowly shrinks once the root is gone.",
      "An implant is the one replacement that puts a root back into that bone, which is why it helps hold the shape of your jaw and why it does not lean on the neighboring teeth the way a bridge does. Whether it is right for you depends on your bone, your health and the teeth around the gap.",
      "## Who is a good candidate for an implant?",
      "The main requirement is enough healthy bone for the post to take hold, along with healthy gums and a jaw that has finished growing. Your general health matters more than your age. Conditions that slow bone healing, such as diabetes that is not well managed, and some medicines call for a conversation, sometimes with your physician, first.",
      "Smoking and vaping come up most often, because they interfere with healing and raise the chance that an implant does not integrate. If you smoke, stopping around the time of surgery helps, and I will be straight with you about the added risk. Where the bone has already shrunk, a graft can rebuild the site first. It adds a few months, but it makes an implant possible where the bone alone could not hold one.",
      "## What happens at the first visit?",
      "The first appointment is about information, not treatment. I examine your mouth, go through your medical history and every medicine and supplement you take, and we talk about what you want the finished tooth to look like. Then we take a [3D CT scan](/services/dental-technology/ct-scans/) here in the office. A regular X-ray is a flat picture; the CT scan shows the width and height of your bone, the nerve in the lower jaw and the sinuses in the upper jaw, in three dimensions. The American Academy of Oral and Maxillofacial Radiology recommends cross-sectional imaging for every implant site, with cone beam CT as the preferred method, and I would not plan an implant without one.",
      "Our digital scanner records your teeth as a 3D model, with no impression trays. From the scan and the model I plan exactly where the implant should sit so the crown looks and works like the tooth you lost. You leave with a written plan and a timeline.",
      "## What does the implant surgery feel like?",
      "Less than most people expect. The area is fully numbed with local anesthetic, and sedation is an option if you are anxious or if several implants are being placed. I open the gum, prepare a small channel in the bone, seat the implant and close the gum with a few stitches. If a failing tooth has to come out first, that happens at the same visit or an earlier one, depending on the case.",
      "Afterward, expect some swelling, a little bruising and soreness for a few days, and minor bleeding on the first day. Most patients manage with over-the-counter pain relief, eat soft foods for the first week or two, and are back to their normal routine within a day or two. If swelling or pain gets worse instead of better, call us the same day; I want to see you.",
      "## Why the wait between the implant and the crown?",
      "This is the part nobody enjoys, but it is what makes implants work. Over the following months the bone grows onto the titanium post and locks it in place, a process called osseointegration. It usually takes three to six months, longer where a graft was needed or the bone is softer. Chewing on the implant before the bone is ready can cost you the implant, so I do not rush this stage.",
      "If the gap shows when you smile, we can usually give you a temporary tooth for the healing period. Sometimes a temporary crown can go on the implant the same day, but that depends on how firm the implant is at placement, and I will tell you whether yours qualifies. Once the bone is ready, a small connector called an abutment is attached, the gum heals around it for a couple of weeks, and we scan again for the final crown, shaded to match your other teeth.",
      "## What if I am missing several teeth, or all of them?",
      "The plan changes with the size of the gap. One missing tooth is usually a [single tooth implant](/services/dental-implants-dentistry/single-tooth-implants/) with its own crown, leaving the neighbors untouched. Three or more missing teeth in a row can be carried by an implant-supported bridge, so you do not need a post for every tooth. A whole upper or lower arch can be replaced with a fixed set of teeth on a small number of implants, usually four or more spread around the jaw: our [full arch implant](/services/dental-implants-dentistry/full-arch-implants/) option, for patients who are tired of a denture that moves.",
      "## How do I take care of an implant?",
      "An implant cannot decay, but the gum and bone around it can get inflamed, just as they can around a natural tooth. The early stage, where the gum is red or bleeds when you brush, is reversible if we catch it. The later stage involves bone loss around the implant and usually needs surgical treatment. So the care is the same as for your own teeth: brush twice a day, floss or use small interdental brushes around the implant, and keep your checkups so we can measure the gum and check the bone. Smoking, diabetes and a history of gum disease all raise the risk, and a night guard protects the crown if you grind.",
      "## Questions patients ask about implants",
      "### Does getting an implant hurt?",
      "The surgery is done under local anesthetic, so you should feel pressure, not pain. The days after feel much like a tooth extraction: sore, a bit swollen, manageable with ordinary pain relief. Most patients tell me it was easier than they feared.",
      "### How long does a dental implant last?",
      "With good home care and regular checkups, the implant itself can last a lifetime. The crown on top is a working part that wears like any tooth and may need replacing over the years. How long yours lasts depends on your gum health, your habits and whether you grind.",
      "### Can I get an implant years after losing the tooth?",
      "Often, yes. The bone shrinks over time where a tooth is missing, so some patients need a graft first. The 3D scan shows exactly how much bone is there, so you will know before anything starts.",
      "### Is everything done in one office?",
      "Yes. The scan, the planning, the surgery and the crown all happen at 416 N. Bedford Dr., Suite 105, with our in-house specialists, so one team follows your case from start to finish.",
      "### Why a CT scan and not just an X-ray?",
      "Because an X-ray cannot show how wide the bone is or exactly where the nerve runs. The CT scan lets me measure the site and place the implant in the right position the first time.",
      "If you are missing a tooth and want to know whether an implant is right for you, come and see us. The first visit includes the exam and the 3D scan, and you will leave with a clear plan and an honest view of your options. [Request an appointment](/appointment/) at our Beverly Hills office, or call us.",
    ],
    seo: { title: "Dental Implants in Beverly Hills: What to Expect | Dr. Shir", description: "Dr. Nushin Shir explains each step of getting a dental implant in Beverly Hills: the 3D scan, the surgery, the months of healing and the final crown." },
  },
  {
    slug: "dental-bridges-beverly-hills",
    title: "Dental bridges in Beverly Hills: when a bridge is the right fix",
    date: "2026-10-23",
    author: "Dr. Nushin Shir",
    category: "restorative",
    service: "/services/restorative-dentistry/dental-bridges/",
    excerpt: "Dr. Nushin Shir on when a fixed dental bridge is the better choice than an implant, the types of bridges, what the visits involve and how to care for one.",
    image: images.treatmentChair,
    cta: "Dr. Shir will look at the neighboring teeth, the bone and your health with you, so you can weigh a bridge against an implant with no pressure.",
    figures: [
      { beforeHeading: "When is an implant the better choice?", image: images.cbctScanner, caption: "The 3D CT scan shows how much bone sits under the gap, which is often what decides between a bridge and an implant.", position: "center 35%" },
      { beforeHeading: "What happens at the visits?", image: images.digitalXRayRoom, caption: "One of our treatment rooms on Bedford Drive, where the teeth are shaped and scanned at the first visit.", position: "center 45%" },
      { beforeHeading: "How long does a bridge last, and how do I care for it?", image: images.hygienistTreatingPatient, caption: "Regular checkups let us look at the edges of the crowns and the teeth that carry the bridge.", position: "center 35%" },
    ],
    blocks: [
      {
        _type: "facts",
        heading: "Quick facts",
        items: [
          { icon: "clock", label: "Time to finish", value: "2 to 4 weeks" },
          { icon: "calendar", label: "Visits", value: "Two, a few weeks apart" },
          { icon: "shield", label: "Typical lifespan", value: "5 to 15 years, often longer" },
          { icon: "layers", label: "Materials", value: "Porcelain, zirconia or metal" },
        ],
      },
      {
        _type: "options",
        beforeHeading: "What happens at the visits?",
        heading: "The four types of bridges",
        items: [
          { icon: "bridge", title: "Traditional bridge", text: "A crown on each side of the gap holds the replacement tooth. The most common design." },
          { icon: "anchor", title: "Cantilever bridge", text: "Anchored on one side of the gap only. Not as strong, so it is used sparingly." },
          { icon: "wing", title: "Maryland bridge", text: "Thin wings bonded to the back of the neighboring teeth, mostly for front teeth." },
          { icon: "implant", title: "Implant-supported bridge", text: "Rests on implants rather than natural teeth, for longer gaps." },
        ],
      },
      {
        _type: "steps",
        beforeHeading: "How long does a bridge last, and how do I care for it?",
        heading: "A bridge in two visits",
        items: [
          { title: "Exam and X-rays", text: "The teeth either side of the gap are checked, with a 3D scan where the roots and bone need a closer look." },
          { title: "Shaping and scanning", text: "The anchor teeth are numbed and shaped, the digital scanner records them, and you leave with a temporary bridge." },
          { title: "Fitting", text: "Two to four weeks later the finished bridge is checked for fit, color and bite, then cemented in place." },
        ],
      },
    ],
    body: [
      "A dental bridge is a fixed row of teeth that closes a gap: crowns on the teeth either side hold a replacement tooth in the middle. It is the right fix when the neighboring teeth already need crowns, when there is not enough bone for an implant or surgery is unwise for you, or when you want the gap closed in weeks rather than months.",
      "Implants get most of the attention these days, and often deserve it, but I still make bridges every month because for some patients a bridge is simply the better answer. Here is how I decide, what the visits involve and how to make a [dental bridge in Beverly Hills](/services/restorative-dentistry/dental-bridges/) last.",
      "## What exactly is a dental bridge?",
      "A bridge has two parts. The crowns that fit over the natural teeth on each side of the gap are the anchors, which dentists call abutments. The replacement tooth or teeth between them are the pontics. The whole piece is made as one unit, shaded to match your own teeth, and cemented in place. You cannot take it out, which is why it is called a fixed bridge. A removable partial denture is the other way to fill a gap, and it clips in and out.",
      "Bridges can be made from porcelain, zirconia, metal alloys or porcelain fused to a metal core. Which material I suggest depends on where the gap is, how hard you bite and how visible the bridge will be when you smile.",
      "## Why not just leave the gap?",
      "Because a gap does not stay the same size. The teeth on either side begin to tip and drift into the space, and your bite changes in ways that are hard to undo later. Chewing on that side becomes awkward, speech can change with a front tooth missing, and the drifted teeth are harder to keep clean. I tell patients to replace a missing tooth sooner rather than later, whichever replacement they choose.",
      "## When is a bridge the right fix?",
      "I lean toward a bridge in four situations. First, when the teeth next to the gap already have large fillings or old crowns, because they need to be rebuilt anyway and the bridge gives them a crown as part of the job. Second, when the bone under the gap has shrunk and you would rather not have a graft and a second surgery. Third, when your health makes surgery unwise, for example diabetes that is not well controlled, heavy smoking or certain medicines that slow bone healing. Fourth, when time matters: a bridge is usually finished in two to four weeks, while an implant needs several months for the bone to heal.",
      "There is a fifth case I see often: replacing an old bridge that has worn out. The supporting teeth already have crowns, so a new bridge is the natural repair, as long as those teeth are still sound underneath.",
      "## When is an implant the better choice?",
      "If the teeth either side of the gap are healthy and untouched, I would rather not grind them down for crowns, because that preparation is permanent. In that case a [dental implant](/services/dental-implants-dentistry/) replaces the one tooth without involving its neighbors. An implant also puts a root back into the bone, which helps hold the shape of the jaw, where the bone under a bridge keeps shrinking slowly over the years. Implants generally last longer than bridges too. And when three or more teeth in a row are missing, a bridge carried by implants is usually the stronger design, because natural teeth would be asked to support a long span.",
      "So the honest answer is that it depends on your mouth. I look at the neighboring teeth, measure the bone on our in-office 3D CT scan, go through your medical history, and then we talk through the trade-offs together.",
      "## What are the types of bridges?",
      "A traditional bridge has a crown on each side of the gap and is what most people picture. A cantilever bridge is anchored on one side only, which I use sparingly because it is not as strong. A Maryland bridge uses thin wings bonded to the back of the neighboring teeth instead of crowns, so very little tooth is removed, and it is mostly for front teeth where biting forces are lighter. An implant-supported bridge rests on implants rather than natural teeth and suits longer gaps.",
      "## What happens at the visits?",
      "At the first visit I examine the teeth either side of the gap and take X-rays, or a 3D scan where I need to see the roots and bone in detail, because a bridge is only as good as the teeth that carry it. If those teeth are healthy, I numb the area and shape them so the crowns can fit over them. Then, instead of a tray of impression material, our digital scanner records the prepared teeth and the gap as a 3D model in a few minutes. You leave with a temporary bridge, so there is no gap while the lab makes the final one.",
      "Two to four weeks later the finished bridge comes back. I check the fit, the color and how it meets the opposing teeth, make any small adjustments, and cement it in place. If a neighboring tooth is damaged but you are not missing a tooth, a [porcelain inlay or onlay](/services/restorative-dentistry/porcelain-inlays-onlays/) may be a more conservative repair than a full crown, and I will say so.",
      "## How long does a bridge last, and how do I care for it?",
      "Most bridges last somewhere between five and fifteen years, and some much longer. The difference is almost always the care of the two teeth underneath. Food and plaque collect under the pontic, so clean there every day with a floss threader, a water flosser or a small interdental brush, and brush the gum line around the crowns. Go easy on very hard or sticky foods, keep your regular checkups so we can check the edges of the crowns, and if you grind at night, wear a guard. A bridge does not decay, but the teeth holding it can, and that is what shortens its life.",
      "## Questions patients ask about bridges",
      "### Does getting a bridge hurt?",
      "The teeth are numbed before they are shaped, so you should feel vibration and pressure rather than pain. Some sensitivity to cold for a few days afterward is common and settles down. The temporary bridge protects the prepared teeth between visits.",
      "### Can a bridge be done in one visit?",
      "Usually not. The final bridge is made in a dental laboratory, so there are two visits a few weeks apart, with a temporary bridge in the meantime.",
      "### Will it look like my own teeth?",
      "The bridge is shaded to your natural teeth, and with porcelain or zirconia it usually blends in well. Front teeth take more care in planning than back teeth, and I will show you the shade and shape before it is cemented.",
      "### What if one of the supporting teeth has a problem later?",
      "That is the weak point of a bridge. If an anchor tooth decays or its root fails, the bridge usually has to be removed and remade, sometimes with a different design. It is also why I check those teeth so carefully before we begin.",
      "### Can I switch to an implant later?",
      "Often, yes. The bone under the gap shrinks slowly with time, so a graft may be needed first. A 3D scan at that point will show exactly what is possible.",
      "If you have a gap and are weighing a bridge against an implant, come in and let us look at the whole picture together: the neighboring teeth, the bone and your health. [Request an appointment](/appointment/) at our Beverly Hills office on Bedford Drive, and we will go through your options with no pressure.",
    ],
    seo: { title: "Dental Bridges in Beverly Hills: Right for You? | Dr. Shir", description: "Dr. Nushin Shir on when a fixed dental bridge is the better choice than an implant, the types of bridges, what the visits involve and how to care for one." },
  },
];
