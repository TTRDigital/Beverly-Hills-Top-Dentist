/*
 * "Areas We Serve": hub + six neighborhood pages. Copy from the developer
 * handoff "BHDAS — Areas We Serve: Developer Build Handoff" (Oct 19, 2026),
 * word for word. Edit in /cms; this file is the built-in fallback and seed source.
 *
 * approved: false keeps a page out of search (noindex) and out of the sitemap,
 * and hides the site-wide links to the hub, until Dr. Shir approves it.
 * Statements marked [confirm] in the handoff are kept as written and listed in
 * the README; they need Dr. Shir's sign-off before approval.
 */
import type { AreaPage, AreasHub } from "../types";
import { images } from "./images.ts";

/** Same four reasons on every page; pages without their own lines show the titles only. */
const WHY_TITLES = ["Ozone therapy", "In-office 3D CT", "Soft-tissue lasers", "Holistic, biological approach"];

/** Treatment pages the handoff marks OK (Beverly Hills content). Others get no link. */
const L = {
  veneers: "/services/cosmetic-dentistry/porcelain-veneers/",
  whitening: "/services/cosmetic-dentistry/teeth-whitening/",
  bonding: "/services/cosmetic-dentistry/dental-bonding/",
  restorative: "/services/restorative-dentistry/",
  bridges: "/services/restorative-dentistry/dental-bridges/",
  fillings: "/services/restorative-dentistry/dental-fillings/",
  implant: "/services/dental-implants-dentistry/single-tooth-implants/",
  checkups: "/services/preventive-dentistry/checkups-exams/",
  cleaning: "/services/preventive-dentistry/teeth-cleaning/",
};
const learn = (href: string) => [{ label: "Learn more", href }];

export const fallbackAreasHub: AreasHub = {
  approved: false,
  heading: "Areas We Serve From Our Beverly Hills Office",
  subhead: "One office at 416 N. Bedford Drive, a short drive from six West LA neighborhoods.",
  heroImage: images.hallwayWide2,
  intro: [
    "Our office sits at 416 N. Bedford Drive in Beverly Hills, and many of our patients travel in from the neighborhoods around us. They come for a different kind of dentistry: biological, biomimetic and holistic care from Dr. Nushin Shir, DDS, MPH, with ozone therapy, soft-tissue lasers and in-office 3D CT under one roof, so treatment rarely needs to be referred out.",
    "We have one office, and it is in Beverly Hills. If you live in one of the areas below, you are a short drive from care that looks at your whole health, not just the tooth in front of you. Each area page covers the route to Bedford Drive, how long it usually takes, where to park, and the treatments patients from that area ask us about most.",
  ],
  mapCaption: "Our only office: 416 N. Bedford Dr., Suite 105, Beverly Hills. Parking is available around Bedford Drive.",
  cardsHeading: "Neighborhoods we serve",
  whyHeading: "Why patients make the trip",
  whyItems: [
    { title: "Ozone therapy", text: "A health-first way to disinfect and support healing, used within our biological approach." },
    { title: "In-office 3D CT", text: "Detailed imaging in the office, so planning doesn't wait on an outside scan center." },
    { title: "Soft-tissue lasers", text: "Gentler gum treatment and contouring, with more comfortable healing." },
    { title: "Biological, biomimetic care", text: "Biocompatible materials and techniques that keep as much natural tooth as possible." },
  ],
  whyText: ["Patients often pass several closer practices to reach Bedford Drive. What they are traveling for is a dentist who explains the whole picture, recommends only what is needed, and plans treatment to last."],
  planHeading: "Planning your first visit",
  planText: [
    "Most first visits start with a thorough exam and, where it helps, 3D imaging taken right here in the office. Dr. Shir walks you through what she finds and what your options are before anything is decided. Bring your insurance details and a list of any medications, and allow a few extra minutes for traffic on your route. Early appointments from 8:00 a.m. make it easier to be seen before work or school.",
  ],
  faqs: [
    { question: "Do you have offices in these neighborhoods?", answer: ["No. We have one office, at 416 N. Bedford Dr., Suite 105, Beverly Hills. Patients from each of these areas make a short drive to see us."] },
    { question: "How far is the drive?", answer: ["Between about 8 and 20 minutes, depending on where you start. Each area page lists the usual route and drive time."] },
    { question: "Where do I park?", answer: ["Parking is available around Bedford Drive, a short walk from the office. We'll point you to the easiest option when you book."] },
    { question: "Do you take my insurance?", answer: ["Coverage varies by plan. Call 310-274-7005 and we'll check what your plan covers before your visit."] },
    { question: "What are your hours?", answer: ["Monday to Thursday 8:00 a.m. to 5:30 p.m., and Friday 8:00 a.m. to 1:00 p.m."] },
  ],
  zipsHeading: "Zip codes we serve",
  zips: "90048, 90067, 90069, 90046, 90230, 90231, 90232, 90233, 90064, 90034, 90038.",
  ctaHeading: "Ready to book?",
  ctaText: "Call 310-274-7005 or book an appointment online. We're open Monday to Thursday 8:00 to 5:30 and Friday 8:00 to 1:00.",
  seo: {
    title: "Dentist Serving West LA & Beverly Hills Neighborhoods | Dr. Nushin Shir",
    description: "Patients from Beverly Grove, Century City, West Hollywood, Culver City, West LA and Hollywood see Dr. Nushin Shir in Beverly Hills. Call 310-274-7005.",
  },
};

export const fallbackAreaPages: AreaPage[] = [
  {
    slug: "beverly-grove",
    order: 1,
    approved: false,
    name: "Beverly Grove",
    zips: ["90048"],
    cardLine: "About 10 minutes via Beverly Blvd. Popular: veneers, crowns, TMJ care.",
    heading: "A Trusted Dentist for Beverly Grove Patients",
    subhead: "About 10 minutes from Beverly Grove, at 416 N. Bedford Drive, Beverly Hills.",
    heroImage: images.receptionDesk,
    intro: [
      "Beverly Grove is practically on our doorstep. Our office on Bedford Drive is roughly two and a half miles from the 90048 neighborhood, and patients make the short trip because they want dentistry that treats them, not just their teeth. Dr. Nushin Shir practices biological, biomimetic and holistic dentistry, using biocompatible materials and technology most practices refer out for. Whether you are near the Beverly Center, the Grove, or the streets around Cedars-Sinai, your appointment starts with your whole health in view, and a plan built around keeping as much of your natural tooth as possible.",
    ],
    gettingHere: [
      "From Beverly Grove, head west on Beverly Boulevard or Burton Way toward Beverly Hills and turn onto N. Bedford Drive. The drive is about 10 minutes in normal traffic, and we will confirm the current timing when you book. You will find parking options around Bedford Drive, a short walk from the office at 416 N. Bedford Dr., Suite 105. If you are coming straight from work or an appointment in the neighborhood, give yourself a few extra minutes at busier times of day, and call us at 310-274-7005 if you are running late. We would rather know than keep you waiting.",
    ],
    mapFrom: "Beverly Center, 8500 Beverly Blvd, Los Angeles, CA 90048",
    mapTitle: "Map: route from the Beverly Center to 416 N. Bedford Dr.",
    treatmentsHeading: "Popular treatments for Beverly Grove patients",
    treatments: [
      { title: "Porcelain veneers", text: "If you want to change the shape, color or spacing of your smile, veneers are thin porcelain shells designed around your face, not a template. Patients from Beverly Grove ask about them for everything from worn edges to stubborn discoloration.", links: learn(L.veneers) },
      { title: "Crowns and restorative care", text: "A cracked, heavily filled or root-treated tooth often needs protection that still looks and feels like your own. Our biomimetic approach rebuilds the tooth in layers that flex like natural structure.", links: learn(L.restorative) },
      // [link warning] in the handoff: no link until Ali decides.
      { title: "TMJ treatment", text: "Jaw pain, clicking, headaches on waking and worn teeth can all point to a bite or jaw joint problem. Dr. Shir screens for TMJ and TMD as part of your whole-health picture and plans treatment from the cause, not just the symptom.", links: [] },
      { title: "Clear aligners", text: "Straightening your teeth does not have to mean brackets. Clear aligners are removable, discreet and fit around work and social life in Beverly Grove.", links: [] },
    ],
    whyHeading: "Why patients make the short trip",
    whyItems: [
      { title: "Ozone therapy", text: "A health-first way to disinfect and support healing without harsh chemicals." },
      { title: "In-office 3D CT", text: "Detailed imaging here in the office, so planning does not wait on an outside scan center." },
      { title: "Soft-tissue lasers", text: "Gentler gum treatment with less drilling and faster healing." },
      // [confirm] "two Master's degrees in Public Health"
      { title: "Holistic, biological approach", text: "Biocompatible materials and screening that connects your mouth to the rest of you. Dr. Shir holds two Master's degrees in Public Health, and it shows in every decision." },
    ],
    whyText: [],
    faqs: [
      { question: "How far is your office from Beverly Grove?", answer: ["About two and a half miles, roughly a 10-minute drive via Beverly Blvd to 416 N. Bedford Dr., Suite 105, Beverly Hills."] },
      { question: "Where do I park?", answer: ["There are parking options around Bedford Drive, a short walk from the office. We will point you to the easiest option when you book."] },
      { question: "Do you take my insurance?", answer: ["Coverage varies by plan. Call 310-274-7005 and we will check what your plan covers before your visit."] },
      // [confirm] same-week appointments
      { question: "Can I get a same-week appointment?", answer: ["We hold time each week for new patients and urgent problems. Call and we will offer you the earliest slot that fits."] },
      { question: "Why travel to Beverly Hills instead of seeing a dentist in 90048?", answer: ["Our patients come for care that is hard to find nearby: ozone therapy, in-office 3D CT, soft-tissue lasers and a holistic, biomimetic approach under one roof."] },
    ],
    reviews: [],
    seo: {
      title: "Dentist Near Beverly Grove, 90048 | Dr. Nushin Shir",
      description: "Beverly Grove patients see Dr. Shir at our Bedford Drive office, about 10 minutes away. Veneers, crowns, TMJ care and more. Book today.",
    },
  },
  {
    slug: "century-city",
    order: 2,
    approved: false,
    name: "Century City",
    zips: ["90067"],
    cardLine: "About 8 minutes via Santa Monica Blvd. Popular: sleep care, night guards, TMJ.",
    heading: "A Trusted Dentist for Century City Patients",
    subhead: "About 8 minutes from Century City, at 416 N. Bedford Drive, Beverly Hills.",
    heroImage: images.cosmeticDentistrySign,
    intro: [
      "Century City is one of the closest neighborhoods to our front door. From the towers around Westfield Century City and the lots at Fox Studios, it is roughly a mile and a half to Bedford Drive, yet the care waiting there is a step apart from a standard checkup and clean. Dr. Nushin Shir looks at sleep, breathing, jaw function and oral health as one connected picture. If you work in 90067 and your days run on meetings, this is dentistry that fits around them: early appointments from 8 a.m., honest advice, and technology in the room that settles most questions on the spot.",
    ],
    gettingHere: [
      "Head west on Santa Monica Boulevard toward Beverly Hills, then turn onto N. Bedford Drive. In normal traffic the trip takes about 8 minutes, short enough for a morning appointment before work or a visit in a lunch break. Parking is available around Bedford Drive, a short walk from Suite 105 at 416 N. Bedford Dr. Coming from Avenue of the Stars or Century Park East, allow a little longer at peak times, and call 310-274-7005 if traffic holds you up. We open at 8:00 Monday to Thursday, which makes a pre-work visit from Century City realistic.",
    ],
    mapFrom: "Westfield Century City, 10250 Santa Monica Blvd, Los Angeles, CA 90067",
    mapTitle: "Map: route from Westfield Century City to 416 N. Bedford Dr.",
    treatmentsHeading: "Popular treatments for Century City patients",
    treatments: [
      { title: "Sleep apnea and sleep dentistry", text: "Snoring, broken sleep and waking unrefreshed are not things to just live with. Dr. Shir screens for sleep apnea as part of your health picture and talks through oral appliance options that can help you breathe and sleep better, without jumping straight to surgery. Ask us about sleep care at your first visit.", links: [] },
      { title: "Night guards", text: "If you clench or grind, your teeth pay for it in wear, cracks and sore jaws. A custom night guard, fitted from a precise digital scan rather than a boil-and-bite kit, protects your teeth while you sleep and is far more comfortable to actually wear.", links: [] },
      // [link warning] in the handoff: no link until Ali decides.
      { title: "TMJ treatment", text: "Headaches, jaw clicking and pain when you chew often trace back to the jaw joint and bite. We assess TMJ and TMD properly, with 3D imaging in the office, and build a plan from the cause.", links: [] },
      { title: "Teeth whitening", text: "For a fast, visible lift before a big presentation or event, professional whitening brightens safely under supervision, which store-bought strips cannot promise.", links: learn(L.whitening) },
    ],
    whyHeading: "Why patients make the short trip",
    whyItems: WHY_TITLES.map((title) => ({ title, text: "" })),
    // [confirm] "three decades of experience and two Master's degrees in Public Health"
    whyText: [
      "In-office 3D CT means scans happen here, not at a separate imaging center across town. Soft-tissue lasers make gum care gentler, ozone therapy supports a cleaner, health-first approach to treatment, and a holistic, biological philosophy means materials and methods are chosen with your whole body in mind. Dr. Shir brings three decades of experience and two Master's degrees in Public Health to that judgment.",
    ],
    faqs: [
      { question: "How long does it take to get to you from Century City?", answer: ["About 8 minutes, roughly a mile and a half via Santa Monica Blvd."] },
      { question: "Can I come before work?", answer: ["Yes. We open at 8:00 a.m. Monday to Friday; Friday hours end at 1:00 p.m."] },
      { question: "I snore and wake up tired. Can a dentist help?", answer: ["Often, yes. We screen for sleep apnea and can discuss a custom oral appliance."] },
      { question: "Do you check insurance?", answer: ["Call 310-274-7005 and we will confirm what your plan covers before treatment starts."] },
      { question: "Where do I park?", answer: ["Parking is available around Bedford Drive, a short walk from the office."] },
    ],
    reviews: [],
    seo: {
      title: "Dentist Near Century City, 90067 | Dr. Nushin Shir",
      description: "Century City patients reach Dr. Shir in about 8 minutes. Sleep apnea care, night guards, TMJ treatment and whitening. Call 310-274-7005.",
    },
  },
  {
    slug: "west-hollywood",
    order: 3,
    approved: false,
    name: "West Hollywood",
    zips: ["90069", "90046"],
    cardLine: "About 10 minutes via Santa Monica Blvd. Popular: gum contouring, veneers, whitening.",
    heading: "A Trusted Dentist for West Hollywood Patients",
    subhead: "About 10 minutes from West Hollywood, at 416 N. Bedford Drive, Beverly Hills.",
    heroImage: images.hallwayFlowers,
    intro: [
      "From the Sunset Strip to the Pacific Design Center, West Hollywood cares about how things look, and about doing them properly. That is exactly how Dr. Nushin Shir practices. Her Beverly Hills office, a short drive from 90069 and 90046, pairs cosmetic skill with a biological, health-first philosophy: no shortcuts, no heavy-handed results, and no treatment you do not need. Patients come to us for smiles that look like theirs, only better, and for the kind of gentle, technology-led care that respects the rest of their health too.",
    ],
    gettingHere: [
      "Drive west on Santa Monica Boulevard from West Hollywood into Beverly Hills and turn onto N. Bedford Drive. The trip is about two and a half miles and usually takes around 10 minutes. If you are coming from the Sunset Strip side, Melrose Avenue is another straightforward route in. Parking is available around Bedford Drive, close to our office at 416 N. Bedford Dr., Suite 105. Call 310-274-7005 if you are held up; we would rather adjust than rush your appointment.",
    ],
    mapFrom: "Pacific Design Center, 8687 Melrose Ave, West Hollywood, CA 90069",
    mapTitle: "Map: route from the Pacific Design Center to 416 N. Bedford Dr.",
    treatmentsHeading: "Popular treatments for West Hollywood patients",
    treatments: [
      { title: "Gum lift and gum contouring", text: "A smile can be held back by gums that sit low, unevenly, or cover too much tooth. With soft-tissue laser contouring, Dr. Shir reshapes the gum line precisely and gently, so the teeth you already have are properly on show. Ask about gum contouring at your consultation.", links: [] },
      { title: "Porcelain veneers", text: "Veneers remain the most complete way to change color, shape and spacing in one treatment. Ours are planned around your face and your style, from a subtle refresh to a full smile redesign.", links: learn(L.veneers) },
      { title: "Teeth whitening", text: "Professional whitening lifts years of coffee, wine and everyday staining in a controlled way, with your enamel looked after.", links: learn(L.whitening) },
      { title: "Night guards", text: "The WeHo social calendar runs late, and stress often shows up at night as grinding. A slim, custom-fitted guard protects veneers, crowns and natural teeth while you sleep, and helps you wake without jaw ache.", links: [] },
      // [link warning] in the handoff: no link until Ali decides.
      { title: "Clear aligners", text: "Straighten discreetly with removable aligners that fit around work, shoots and nights out.", links: [] },
    ],
    whyHeading: "Why patients make the short trip",
    whyItems: WHY_TITLES.map((title) => ({ title, text: "" })),
    whyText: [
      "Soft-tissue lasers are central here: they make gum work and contouring cleaner and more comfortable. Add ozone therapy for a health-first approach, in-office 3D CT for planning you can see, and biocompatible materials chosen carefully, and you get cosmetic results built on healthy foundations. That combination is why patients pass several closer practices to reach Bedford Drive.",
    ],
    faqs: [
      { question: "How far is the office from West Hollywood?", answer: ["About two and a half miles, roughly a 10-minute drive via Santa Monica Blvd."] },
      { question: "Can you fix a gummy smile?", answer: ["In many cases, yes. Laser gum contouring can reveal more of your natural teeth. The first step is an assessment."] },
      { question: "Will veneers look natural?", answer: ["That is the point of planning them around your face. We aim for a smile that looks like yours, at its best."] },
      { question: "Do you offer evening appointments?", answer: ["Our hours are Monday to Thursday 8:00 to 5:30 and Friday 8:00 to 1:00. Call and we will find the closest fit."] },
      { question: "Do you take my insurance?", answer: ["Call 310-274-7005 and we will check your coverage for you."] },
    ],
    reviews: [],
    seo: {
      title: "Dentist Near West Hollywood, 90069 & 90046 | Dr. Nushin Shir",
      description: "West Hollywood patients see Dr. Shir about 10 minutes away in Beverly Hills. Gum lifts, veneers, whitening and night guards. Book today.",
    },
  },
  {
    slug: "culver-city",
    order: 4,
    approved: false,
    name: "Culver City",
    zips: ["90230", "90232", "90231", "90233"],
    cardLine: "About 20 minutes via Robertson Blvd. Popular: bridges, restorative care.",
    heading: "A Trusted Dentist for Culver City Patients",
    subhead: "About 20 minutes from Culver City, at 416 N. Bedford Drive, Beverly Hills.",
    heroImage: images.imagingArea,
    intro: [
      "Culver City patients, from the studio lots around Sony Pictures to the restaurants of downtown Culver City, have plenty of dentists closer to home. The ones who drive up Robertson Boulevard to see us are usually looking for something specific: restorative work done the biomimetic way, which rebuilds teeth to behave like natural teeth, and a practice that thinks about whole health, not just repair bills. If you are in 90230, 90232, 90231 or 90233 and facing a bridge, a failing crown or a tooth you are worried about losing, that difference is worth 20 minutes.",
    ],
    gettingHere: [
      "Take Robertson Boulevard north from Culver City into Beverly Hills and continue to N. Bedford Drive. The drive is about five miles and typically takes around 20 minutes, depending on traffic through the Beverlywood stretch. Parking is available around Bedford Drive, a short walk from our office at 416 N. Bedford Dr., Suite 105. For longer restorative appointments we will help you plan timing so the trip home is easy, and you can always call 310-274-7005 on the day if traffic is against you.",
    ],
    mapFrom: "Downtown Culver City, Culver Blvd & Main St, Culver City, CA 90232",
    mapTitle: "Map: route from downtown Culver City to 416 N. Bedford Dr.",
    treatmentsHeading: "Popular treatments for Culver City patients",
    treatments: [
      { title: "Dental bridges", text: "A missing tooth changes how you bite, speak and smile, and leaves its neighbors to drift. A well-made bridge closes the gap with a result that looks and works like part of your mouth. Dr. Shir plans bridges as part of your overall bite, not as a standalone patch.", links: learn(L.bridges) },
      { title: "Restorative dentistry", text: "Cracked, worn or heavily filled teeth can often be rebuilt rather than removed. Our biomimetic methods copy the structure of a natural tooth, layer by layer, preserving what is healthy.", links: learn(L.restorative) },
      // [link warning] in the handoff: no link until Ali decides.
      { title: "Dentures", text: "When several teeth are missing, modern dentures, carefully fitted and planned with 3D imaging, restore comfortable eating and a confident smile.", links: [] },
      { title: "Root canal therapy", text: "A deep infection does not have to mean losing the tooth. Gentle root canal treatment, planned from an in-office 3D scan, relieves pain and saves your natural tooth wherever possible.", links: [] },
    ],
    whyHeading: "Why patients make the trip",
    whyItems: WHY_TITLES.map((title) => ({ title, text: "" })),
    // [confirm] "thirty years"
    whyText: [
      "In-office 3D CT takes the guesswork out of restorative planning, ozone therapy supports a cleaner, health-first treatment environment, soft-tissue lasers make gum care more comfortable, and a biological approach means the materials in your mouth are chosen with care. Dr. Shir has spent thirty years building a practice around doing the thorough thing, not the fast thing, which is exactly what complex restorative work needs.",
    ],
    faqs: [
      { question: "How long is the drive from Culver City?", answer: ["About five miles, roughly 20 minutes via Robertson Blvd."] },
      { question: "I have been told I need a bridge. Can you give a second opinion?", answer: ["Yes. We will examine, scan in the office and talk you through every option, including implants, before you decide."] },
      { question: "Do you see patients from 90231 and 90233 too?", answer: ["Yes. Culver City patients from all four zip codes are welcome."] },
      { question: "What are your hours?", answer: ["Monday to Thursday 8:00 to 5:30, Friday 8:00 to 1:00."] },
      { question: "Will you check my insurance first?", answer: ["Yes. Call 310-274-7005 and we will confirm your coverage before treatment."] },
    ],
    reviews: [],
    seo: {
      title: "Dentist Near Culver City, 90230 & 90232 | Dr. Nushin Shir",
      description: "Culver City patients travel about 20 minutes to Dr. Shir in Beverly Hills for bridges, restorative care and holistic dentistry. Book today.",
    },
  },
  {
    slug: "west-la-palms",
    order: 5,
    approved: false,
    name: "West LA & Palms",
    zips: ["90064", "90034"],
    cardLine: "About 18 minutes via Robertson Blvd. Popular: family checkups, fillings, aligners.",
    heading: "A Trusted Dentist for West LA and Palms Patients",
    subhead: "About 18 minutes from West LA and Palms, at 416 N. Bedford Drive, Beverly Hills.",
    heroImage: images.frontOffice,
    intro: [
      "West LA and Palms are family neighborhoods, from weekend games at Rancho Park to the streets around the old Westside Pavilion area, and families there tend to choose a dentist once and stay for years. That is the relationship Dr. Nushin Shir has built her practice on. Patients from 90064 and 90034 make the trip up Robertson Boulevard because her care starts with prevention and honesty: keep what is healthy, treat only what needs treating, and use materials and methods that support the whole body. If your family is looking for a long-term dental home rather than a different practice every year, start here.",
    ],
    gettingHere: [
      "Drive north on Robertson Boulevard from West LA or Palms toward Beverly Hills, then turn onto N. Bedford Drive. The journey is about four and a half miles and takes roughly 18 minutes outside peak traffic. Parking is available around Bedford Drive, close to 416 N. Bedford Dr., Suite 105. Morning appointments from 8:00 make it easy to be seen before school runs and work, and we are open until 5:30 Monday to Thursday. Call 310-274-7005 if you need help finding a time that fits the family calendar.",
    ],
    mapFrom: "Rancho Park, 2551 Motor Ave, Los Angeles, CA 90064",
    mapTitle: "Map: route from Rancho Park to 416 N. Bedford Dr.",
    treatmentsHeading: "Popular treatments for West LA and Palms patients",
    treatments: [
      {
        title: "Checkups, exams and cleaning",
        text: "Regular preventive visits catch small problems while they are still small, inexpensive and painless. Our exams are thorough and unhurried, with screening that looks beyond the teeth to your gums, bite and overall oral health.",
        links: [
          { label: "Learn more about checkups and exams", href: L.checkups },
          { label: "Learn more about teeth cleaning", href: L.cleaning },
        ],
      },
      { title: "Dental fillings", text: "When a tooth does need repair, we use biocompatible, tooth-colored materials and biomimetic techniques that preserve as much of your natural tooth as possible.", links: learn(L.fillings) },
      // [link warning] in the handoff: no link until Ali decides.
      { title: "Clear aligners for teens and adults", text: "Straightening that fits school, work and family life, with removable trays and no brackets to manage.", links: [] },
      { title: "Dental implants", text: "For a missing tooth, an implant is the closest thing to getting the original back, protecting the teeth on either side and the bone underneath.", links: learn(L.implant) },
    ],
    whyHeading: "Why patients make the trip",
    whyItems: WHY_TITLES.map((title) => ({ title, text: "" })),
    // [confirm] "three decades of experience"
    whyText: [
      "Prevention works best with the right tools behind it: in-office 3D CT when detail matters, soft-tissue lasers for gentler gum care, ozone therapy as part of a health-first approach, and a biological philosophy that asks what is best for the whole person, child or adult. Add three decades of experience, and parents know the advice they get is measured, not sold.",
    ],
    faqs: [
      { question: "How long does it take from Palms or West LA?", answer: ["About 18 minutes, roughly four and a half miles via Robertson Blvd."] },
      // [confirm the practice sees children]
      { question: "Do you see children and parents at the same practice?", answer: ["Our care is built around long-term family relationships. Call and tell us what your family needs and we will plan visits sensibly."] },
      { question: "How often should we come for checkups?", answer: ["For most patients, every six months. Dr. Shir will set a schedule based on your own risk and health."] },
      { question: "Do you use metal fillings?", answer: ["We work with biocompatible, tooth-colored materials. Ask us about any existing fillings you are concerned about."] },
      { question: "Can you check our insurance?", answer: ["Yes. Call 310-274-7005 and we will confirm coverage for the family before appointments."] },
    ],
    reviews: [],
    seo: {
      title: "Dentist Near West LA & Palms, 90064 & 90034 | Dr. Nushin Shir",
      description: "West LA and Palms patients reach Dr. Shir in about 18 minutes. Gentle preventive care, fillings, aligners and implants. Call 310-274-7005.",
    },
  },
  {
    slug: "hollywood",
    order: 6,
    approved: false,
    name: "Hollywood",
    zips: ["90038"],
    cardLine: "About 20 minutes via Melrose Ave. Popular: veneers, whitening, bonding.",
    heading: "A Trusted Dentist for Hollywood Patients",
    subhead: "About 20 minutes from Hollywood, at 416 N. Bedford Drive, Beverly Hills.",
    heroImage: images.hallwayRoundTable,
    intro: [
      "Hollywood runs on first impressions, from auditions to premieres, and a smile that reads well on camera starts with healthy teeth underneath. Patients from 90038, around Melrose Avenue and La Brea, come west to Dr. Nushin Shir because she builds cosmetic work on strong, healthy foundations, with a biological approach and an eye for results that look natural in person as well as in photographs. Nobody here will sell you a smile that looks done. The aim is the opposite: teeth that look like yours on your best day.",
    ],
    gettingHere: [
      "Take Melrose Avenue west from Hollywood through West Hollywood and into Beverly Hills, then turn onto N. Bedford Drive. The drive is about five miles and usually takes around 20 minutes, longer when Melrose is busy, so build in a buffer before a big day. Parking is available around Bedford Drive, a short walk from our office at 416 N. Bedford Dr., Suite 105. We open at 8:00 Monday to Friday, which suits early calls, and you can reach us at 310-274-7005.",
    ],
    mapFrom: "Melrose Ave & N La Brea Ave, Los Angeles, CA 90038",
    mapTitle: "Map: route from Melrose Ave & La Brea to 416 N. Bedford Dr.",
    treatmentsHeading: "Popular treatments for Hollywood patients",
    treatments: [
      { title: "Porcelain veneers", text: "For chips, gaps, uneven edges or color that whitening cannot lift, veneers offer a complete, carefully planned transformation. Each set is designed for your face and your brief, whether that is camera-ready polish or something barely noticeable.", links: learn(L.veneers) },
      { title: "Teeth whitening", text: "Professional whitening is the quickest honest lift for most smiles, brightening evenly under supervision before a shoot, event or new role.", links: learn(L.whitening) },
      { title: "Dental bonding", text: "Small chips, minor gaps and edge repairs can often be fixed in a single visit with bonding, sculpted and polished to blend with the tooth around it.", links: learn(L.bonding) },
      { title: "Crowns and restorative care", text: "A tooth that has carried heavy fillings or cracked under pressure needs strength as well as looks. Our restorative work rebuilds teeth to function like natural ones, so the smile holds up off camera too.", links: learn(L.restorative) },
    ],
    whyHeading: "Why patients make the trip",
    whyItems: WHY_TITLES.map((title) => ({ title, text: "" })),
    // [confirm] "two Master's degrees in Public Health and thirty years in practice"
    whyText: [
      "Cosmetic dentistry lasts longest when the health underneath is right. That is why this office works the way it does: in-office 3D CT for precise planning, soft-tissue lasers for refined gum work, ozone therapy within a health-first protocol, and biocompatible materials throughout. Dr. Shir's two Master's degrees in Public Health and thirty years in practice show up as restraint: conservative treatment, honest timelines, and results built to last past the first photo.",
    ],
    faqs: [
      { question: "How far is Beverly Hills from Hollywood 90038?", answer: ["About five miles, roughly a 20-minute drive via Melrose Ave."] },
      { question: "I have an event or shoot coming up. How fast can whitening work?", answer: ["Whitening can brighten in a single visit. Book as early as you can so we can plan around your date properly."] },
      { question: "Can you fix a chipped front tooth quickly?", answer: ["Often, yes. Bonding can repair many chips in one appointment. Call 310-274-7005 and describe the damage."] },
      { question: "Will my cosmetic work look natural?", answer: ["That is the standard here. Treatment is planned around your face, and we show you the plan before anything is final."] },
      { question: "What are your hours?", answer: ["Monday to Thursday 8:00 to 5:30, Friday 8:00 to 1:00."] },
    ],
    reviews: [],
    seo: {
      title: "Dentist Near Hollywood, 90038 | Dr. Nushin Shir",
      description: "Hollywood patients travel about 20 minutes to Dr. Shir in Beverly Hills for veneers, whitening, bonding and natural cosmetic dentistry.",
    },
  },
];
