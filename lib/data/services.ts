/* Generated from the live WordPress site (text copied exactly). Edit in /cms; this file is the built-in fallback and seed source. */
import type { HubContent, Service, ServiceCategory } from "../types";
import { images } from "./images.ts";

/**
 * Services added after the content was loaded into Sanity (TTR-910, Oct 26, 2026). They are listed here once and used by
 * the main menu, the Services hub and their category page. lib/content.ts also adds them to the copies of those pages saved
 * in /cms, until they are entered there.
 */
export const addedServiceLinks: { category: string; title: string; body: string[]; href: string }[] = [
  {
    category: "preventive-dentistry",
    title: "No-Drill Cavity Care",
    body: [
      "Early decay caught at the white-spot stage can often be stopped, and sometimes reversed, with fluoride varnish, sealants and other treatments that need no drilling. Lost enamel does not grow back, so finding decay early matters."
    ],
    href: "/services/preventive-dentistry/no-drill-cavity-care/"
  },
  {
    category: "preventive-dentistry",
    title: "Biofilm Therapy",
    body: [
      "A professional cleaning that colors plaque with a disclosing dye so none is missed, then removes it with air polishing and ultrasonic instruments."
    ],
    href: "/services/preventive-dentistry/biofilm-therapy/"
  }
];

/** The added services of one category, as accordion items. */
export const addedServiceItems = (category: string) => addedServiceLinks.filter((a) => a.category === category).map(({ title, body, href }) => ({ title, body, href }));

export const fallbackServicesHub: HubContent = {
  title: "Services",
  sections: [
    {
      _type: "hero",
      heading: "Dental Services in Beverly Hills",
      text: [
        "Dr. Shir has spent over thirty years refining an approach that protects your health while it rebuilds your smile."
      ],
      image: images.patientDentalExamCloseup,
      overlay: "none"
    },
    {
      _type: "accordionFeature",
      tone: "dark",
      heading: "Dental Implants",
      text: [
        "Replace missing teeth with implants planned using in-office 3D imaging and placed and restored by the same dentist. Dr. Shir rebuilds the whole tooth, root included, so your bite, your bone and your appearance are all protected."
      ],
      image: images.dentalTeamOk3,
      items: [
        {
          title: "Single Tooth Implants",
          body: [
            "Replace one missing tooth without touching the teeth either side. Planned on a 3D scan taken in this office, then placed and restored by Dr. Shir."
          ],
          href: "/services/dental-implants-dentistry/single-tooth-implants/"
        },
        {
          title: "Full Arch Implants",
          body: [
            "A fixed set of teeth carried by a small number of implants, for patients missing most or all of an arch or living with a denture that will not stay put. Planned on a 3D scan taken in this office."
          ],
          href: "/services/dental-implants-dentistry/full-arch-implants/"
        }
      ],
      link: {
        label: "More about dental implants dentistry",
        href: "/services/dental-implants-dentistry/"
      }
    },
    {
      _type: "accordionFeature",
      tone: "light",
      heading: "Cosmetic Dentistry",
      text: [
        "Veneers, whitening, bonding and full smile design, planned digitally and previewed before any tooth is prepared. Dr. Shir has spent more than thirty years refining an approach that conserves natural tooth structure while it changes how a smile looks."
      ],
      image: images.dentalTeamOk,
      items: [
        {
          title: "Porcelain Veneers",
          body: [
            "Designed digitally, previewed in your own mouth, and only then made. You see the result before any tooth is prepared."
          ],
          href: "/services/cosmetic-dentistry/porcelain-veneers/"
        },
        {
          title: "Smile Makeover",
          body: [
            "Several treatments planned as one result rather than booked one at a time. Designed digitally against your own face, previewed before anything is prepared, and sequenced so each stage supports the next."
          ],
          href: "/services/cosmetic-dentistry/smile-makeover/"
        },
        {
          title: "Teeth Whitening",
          body: [
            "Professional whitening supervised by a dentist, in-office for a faster result or with custom-fitted take-home trays. Your teeth are checked first, because whitening over untreated decay or exposed roots causes problems rather than solving them."
          ],
          href: "/services/cosmetic-dentistry/teeth-whitening/"
        },
        {
          title: "Dental Bonding",
          body: [
            "Chips, small gaps and worn edges repaired in a single visit, usually with little or no enamel removed. The most conservative cosmetic treatment we offer, and often the right one."
          ],
          href: "/services/cosmetic-dentistry/dental-bonding/"
        },
        {
          title: "Clear Aligners",
          body: [
            "Straighten your teeth with a series of removable clear aligners, planned digitally from a scan taken in this office. No brackets, no wires, and you can see the projected result before you start."
          ],
          href: "/services/cosmetic-dentistry/clear-aligners/"
        }
      ],
      link: {
        label: "More about cosmetic dentistry",
        href: "/services/cosmetic-dentistry/"
      }
    },
    {
      _type: "accordionFeature",
      tone: "dark",
      heading: "Restorative Dentistry",
      text: [
        "Repair and rebuild damaged or missing teeth, restoring both function and appearance. Planned with 3D imaging taken in this office and carried out by Dr. Shir."
      ],
      image: images.dentistExaminingPatient,
      items: [
        {
          title: "Dental Fillings",
          body: [
            "Tooth-coloured fillings that bond to your own tooth structure, placed conservatively so as little healthy enamel is removed as the situation allows."
          ],
          href: "/services/restorative-dentistry/dental-fillings/"
        },
        {
          title: "Dental Bridges",
          body: [
            "Replace one or more missing teeth with a fixed bridge, custom made and shaded to your own teeth. A non-surgical option, completed in a few weeks rather than a few months."
          ],
          href: "/services/restorative-dentistry/dental-bridges/"
        },
        {
          title: "Tooth Extractions",
          body: [
            "Removal planned in 3D, carried out gently, and finished with site preservation so your options for replacement stay open. Dr. Shir will also tell you when a tooth others have written off can still be saved."
          ],
          href: "/services/restorative-dentistry/tooth-extractions/"
        },
        {
          title: "Porcelain Inlays & Onlays",
          body: [
            "A conservative alternative to a full crown. Custom porcelain that covers only the damaged part of the tooth, so more of your own structure stays where it is."
          ],
          href: "/services/restorative-dentistry/porcelain-inlays-onlays/"
        },
        {
          title: "Root Canal Therapy",
          body: [
            "Treat the infection inside the tooth and keep the tooth itself. Canal anatomy mapped in 3D where the case calls for it, and the protective crown afterwards completed in the same office."
          ],
          href: "/services/restorative-dentistry/root-canal-therapy/"
        },
        {
          title: "Wisdom Teeth Extractions",
          body: [
            "Removal planned on a 3D scan taken in this office, so nerve position and root anatomy are known before we begin rather than discovered during."
          ],
          href: "/services/restorative-dentistry/wisdom-teeth-extractions/"
        },
        {
          title: "Partial Dentures",
          body: [
            "A removable replacement for several missing teeth, designed around the teeth you still have so those are protected rather than overloaded."
          ],
          href: "/services/restorative-dentistry/partial-dentures/"
        }
      ],
      link: {
        label: "More about restorative dentistry",
        href: "/services/restorative-dentistry/"
      }
    },
    {
      _type: "accordionFeature",
      tone: "light",
      heading: "Periodontic Dentistry",
      text: [
        "Treatment for gum disease, recession and the tissue that supports your teeth. Gum health is the foundation everything else in dentistry sits on, and it is assessed at every visit here."
      ],
      image: images.dentalTeamOk,
      items: [
        {
          title: "Gum Disease Treatment",
          body: [
            "Treatment for every stage of gum disease, starting with the least invasive option that works. Laser therapy and ozone used alongside deep cleaning, with surgery reserved for cases that need it."
          ],
          href: "/services/periodontic-dentistry/gum-disease-treatment/"
        },
        {
          title: "Crown Lengthening",
          body: [
            "Reshaping the gum line to expose more of the natural tooth, either to give a restoration something to hold onto or to correct a gummy smile."
          ],
          href: "/services/periodontic-dentistry/crown-lengthening/"
        },
        {
          title: "Gum Graft Surgery",
          body: [
            "Rebuilding gum tissue where recession has exposed the roots of your teeth, to reduce sensitivity, protect the root surface and stop the recession progressing."
          ],
          href: "/services/periodontic-dentistry/gum-graft-surgery/"
        },
        {
          title: "Deep Cleanings (Scaling & Root Planing)",
          body: [
            "Cleaning below the gum line to remove what a routine cleaning cannot reach. Carried out under local anaesthetic, supported by laser therapy and ozone."
          ],
          href: "/services/periodontic-dentistry/deep-cleanings/"
        },
        {
          title: "Laser Gum Treatments",
          body: [
            "A soft tissue laser used alongside deep cleaning to treat gum disease, and to reshape gum tissue. For many patients it is an alternative to surgery, with less bleeding and a more comfortable recovery."
          ],
          href: "/services/periodontic-dentistry/laser-gum-treatments/"
        },
        {
          title: "Gum Contouring",
          body: [
            "Reshaping the gum line so it frames your teeth evenly. Carried out with a soft tissue laser, and planned before any veneers or crowns are designed to it."
          ],
          href: "/services/periodontic-dentistry/gum-contouring/"
        }
      ],
      link: {
        label: "More about periodontic dentistry",
        href: "/services/periodontic-dentistry/"
      }
    },
    {
      _type: "accordionFeature",
      tone: "dark",
      heading: "Preventive Dentistry",
      text: [
        "Preventive dentistry focuses on maintaining your oral health by preventing dental problems before they start. Our proactive approach includes regular checkups, cleanings, and treatments designed to keep your smile healthy for life."
      ],
      image: images.dentalMicroscope,
      items: [
        {
          title: "Teeth Cleaning",
          body: [
            "Routine cleanings, deep cleanings and periodontal maintenance. Which one you need is decided by measurements, not by a standard schedule."
          ],
          href: "/services/preventive-dentistry/teeth-cleaning/"
        },
        {
          title: "Dental Sealants",
          body: [
            "A thin protective coating bonded into the deep grooves of back teeth, where a toothbrush bristle physically cannot reach. Quick to place, no drilling, no anaesthetic."
          ],
          href: "/services/preventive-dentistry/dental-sealants/"
        },
        {
          title: "Dental Checkups & Exams",
          body: [
            "A thorough examination rather than a quick look. Teeth, gums, bite, existing restorations and soft tissues all checked, with digital imaging that finds problems while they are still small."
          ],
          href: "/services/preventive-dentistry/checkups-exams/"
        },
        {
          title: "Night Guards",
          body: [
            "A precision-fitted guard that absorbs the force of nightly grinding, protects your teeth from wear, and relieves the morning jaw ache that comes with it."
          ],
          href: "/services/preventive-dentistry/night-guards/"
        },
        {
          title: "Sleep Apnea Treatment",
          body: [
            "A custom oral appliance for diagnosed obstructive sleep apnea, fitted and adjusted here and managed alongside your physician. Quiet, portable, and worn by patients who could not tolerate CPAP."
          ],
          href: "/services/preventive-dentistry/sleep-apnea-treatment/"
        },
        ...addedServiceItems("preventive-dentistry")
      ],
      link: {
        label: "More about preventive dentistry",
        href: "/services/preventive-dentistry/"
      }
    },
    {
      _type: "accordionFeature",
      tone: "light",
      heading: "Dental Technology",
      text: [
        "3D imaging, digital scanning, soft tissue lasers and ozone, all in this office. Equipment most general practices refer out for, so planning and treatment happen in the same place."
      ],
      image: images.dentalTeamOk2,
      items: [
        {
          title: "Ozone Therapy",
          body: [
            "An adjunct we use alongside conventional treatment, as part of a biological and minimally invasive approach to dentistry."
          ],
          href: "/services/dental-technology/ozone-therapy/"
        },
        {
          title: "Digital Scanner",
          body: [
            "A small wand captures your teeth as an accurate 3D model in a few minutes. No trays, no material setting in your mouth, and a better fit on everything we make from it."
          ],
          href: "/services/dental-technology/digital-scanner/"
        },
        {
          title: "Digital X-Rays",
          body: [
            "Imaging at a considerably lower radiation dose than film, appearing on screen instantly. This is how decay between teeth is found while it is still a filling."
          ],
          href: "/services/dental-technology/digital-x-rays/"
        },
        {
          title: "3D CT Scans",
          body: [
            "Cone beam imaging taken in this office. Bone measured in three dimensions, nerve position located, and root anatomy seen properly before treatment begins."
          ],
          href: "/services/dental-technology/ct-scans/"
        }
      ],
      link: {
        label: "More about dental technology hub",
        href: "/services/dental-technology/"
      }
    }
  ],
  seo: {
    title: "Services - Beverly Hills Dental",
    description: "Implant, cosmetic, restorative, periodontal and preventive dentistry, plus in-office dental technology, at Beverly Hills Dental Art Studio."
  }
};

export const fallbackCategories: ServiceCategory[] = [
  {
    slug: "dental-implants-dentistry",
    title: "Dental Implants Dentistry",
    order: 1,
    sections: [
      {
        _type: "hero",
        heading: "Dental Implants in Beverly Hills",
        subheading: "Dental Implant Dentistry",
        text: [
          "Replace missing teeth with implants planned using in-office 3D imaging and placed and restored by the same dentist. Dr. Shir rebuilds the whole tooth, root included, so your bite, your bone and your appearance are all protected."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "The Only Replacement That Includes the Root",
        text: [
          "Bone keeps its density partly by being loaded through a tooth root every time you chew. When the root goes, that stimulus goes with it, and resorption is usually fastest in the first year. It is why long-standing gaps sink and why extensive tooth loss changes the shape of the lower face over time.",
          "A bridge or a denture replaces what shows above the gum. An implant also replaces what sits beneath it. Every case here starts with a cone beam CT scan taken in this office, so bone volume, nerve position and sinus anatomy are measured rather than estimated."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Understanding Dental Implants",
        text: [
          "An implant is three separate components working as one tooth. Here is what each part does, and what the options are."
        ],
        image: images.dentalTeamOk3,
        items: [
          {
            title: "What Are Dental Implants?",
            body: [
              "An implant is an artificial tooth root, usually titanium, placed into the jawbone to support a replacement tooth. The bone grows into contact with its surface over several months, which anchors it firmly enough to handle normal chewing. Made and maintained well, most patients stop distinguishing it from their natural teeth."
            ]
          },
          {
            title: "Dental Implant Post",
            body: [
              "The post is the part placed in the bone and it does the job the root used to do. Size and position are decided from your 3D scan rather than by a standard formula, because the usable bone differs at every site."
            ]
          },
          {
            title: "Abutment",
            body: [
              "The abutment is the connector between the post and the visible tooth. It is fitted once the implant has integrated, and its shape influences how the gum sits around the finished crown, which matters a great deal on front teeth."
            ]
          },
          {
            title: "Endosteal Implants",
            body: [
              "The most common type, placed directly into the jawbone. Suitable for most patients with adequate bone height and width, and the option used in the majority of cases here."
            ]
          },
          {
            title: "Subperiosteal Implants",
            body: [
              "A framework that sits on top of the bone beneath the gum, used in selected cases where bone volume is insufficient and grafting is not viable. Uncommon, and only considered when the scan rules out other approaches."
            ]
          },
          {
            title: "Zygomatic Implants",
            body: [
              "Longer implants anchored into the cheekbone rather than the upper jaw, used in specific cases of severe upper jaw bone loss. These are a specialist referral, and we will tell you if your case points that way."
            ]
          },
          {
            title: "Durability and Longevity",
            body: [
              "Implants can last many years, and often decades, when they are well maintained. The crown on top is the part that wears and commonly needs replacing after roughly ten to fifteen years, usually without disturbing the implant itself."
            ]
          },
          {
            title: "Improved Oral Health",
            body: [
              "Because an implant stands on its own, the teeth either side stay untouched. A bridge requires preparing both neighbours for crowns, and enamel removed for that does not come back."
            ]
          },
          {
            title: "Enhanced Function and Appearance",
            body: [
              "Implants are fixed, so they do not move while you eat or speak. The crown is shaded against your own teeth and shaped to your bite, which is what makes the result read as a tooth rather than as dental work."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "Why Patients Choose Us for Dental Implants",
        text: [
          "Dr. Shir places the implant and makes the crown that goes on it, in the same office, using imaging taken here. That means the finished tooth follows the surgical plan rather than being adapted to it afterwards, and one person is accountable from the first scan to the final fit."
        ],
        cards: [
          {
            image: images.patientToothExam,
            title: "Expertise & Experience:",
            text: [
              "More than thirty years of restorative practice, including complex and aesthetic implant cases. Dr. Shir handles both the surgical placement and the restoration, so nothing is referred out and nothing is lost between two providers."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "State-of-the-Art Technology:",
            text: [
              "Cone beam CT and an intraoral scanner in this office. Bone height and width, nerve position and sinus floor are measured on our own scan before planning, and the crown is made from a digital scan rather than an impression tray."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Our Dental Implant Process",
        text: [
          "Four stages, most of which is healing rather than appointments. You receive a written plan with the sequence, the timeline and the cost before anything begins."
        ],
        link: {
          label: "Schedule Your Consultation",
          href: "/appointment/"
        },
        items: [
          {
            title: "Initial Consultation",
            text: "Examination, medical history, and a cone beam CT scan taken here. The scan determines whether an implant is appropriate, what size and position it calls for, and whether grafting is needed first.",
            icon: images.stepConsultation
          },
          {
            title: "Implant Placement",
            text: "The implant is placed under local anaesthetic, with sedation available. Most patients describe it as comparable to having a tooth removed, with soreness for a few days afterwards managed on over-the-counter pain relief.",
            icon: images.stepPreparation
          },
          {
            title: "Healing & Osseointegration",
            text: "The bone grows into contact with the implant surface, commonly over three to six months. This stage is not worth rushing, since inadequate integration is a recognised cause of implant failure. A temporary keeps the space filled wherever the gap shows.",
            icon: images.stepTreatment
          },
          {
            title: "Crown Installation",
            text: "A digital scan is taken and the crown made to it, shaded against your own teeth. It is fitted, the bite is adjusted, and the tooth goes into normal function.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Are You a Good Candidate for Dental Implants?",
        text: [
          "Four things decide it: enough bone height and width at the site, healthy gums or gum treatment completed first, general health and medications that support healing, and a bite where grinding is either absent or managed with a night guard. A meaningful number of patients who were told elsewhere they were not candidates turn out to be candidates once the site is measured properly. Bone assessments from a flat X-ray cannot measure width, only approximate height, and width is frequently the deciding dimension. If you have been turned down before, it is worth having reassessed on a 3D scan."
        ],
        image: images.hallwayWide2,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Dental Implants",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "How long do dental implants last?",
            answer: [
              "Implants can last many years, and often decades, when they are well maintained. The crown on top is the component that wears and commonly needs replacing after roughly ten to fifteen years, which can usually be done without disturbing the implant itself. Outcomes depend heavily on gum health, smoking status and general health, so maintenance matters as much as the surgery."
            ]
          },
          {
            question: "Is getting a dental implant painful?",
            answer: [
              "The procedure is carried out under local anaesthetic, with sedation available, and most patients report it as comparable to having a tooth removed. Afterwards, soreness and swelling for around three to five days is typical. If discomfort increases rather than settles after the first few days, we want to hear from you."
            ]
          },
          {
            question: "Am I a good candidate for dental implants?",
            answer: [
              "Most people with a missing tooth and reasonable general health are. The deciding factors are bone volume at the site, gum health, and any medications that affect healing, particularly certain osteoporosis drugs. Well-controlled diabetes is generally compatible with treatment. The 3D scan answers this properly in one appointment."
            ]
          },
          {
            question: "Are dental implants covered by insurance?",
            answer: [
              "Coverage varies considerably by plan, and many plans contribute toward part of the treatment rather than all of it. We will give you a written figure for the full sequence before you commit, and financing is available to spread larger plans across monthly payments."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dental Implants in Beverly Hills | Dr. Nushin Shir, DDS",
      description: "Replace missing teeth with secure, natural-looking dental implants that feel like your own. Call Beverly Hills Dental to schedule your consultation today."
    }
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    order: 2,
    sections: [
      {
        _type: "hero",
        heading: "Cosmetic Dentistry in Beverly Hills",
        subheading: "Cosmetic Dentistry",
        text: [
          "Veneers, whitening, bonding and full smile design, planned digitally and previewed before any tooth is prepared. Dr. Shir has spent more than thirty years refining an approach that conserves natural tooth structure while it changes how a smile looks."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What Is Cosmetic Dentistry?",
        text: [
          "Cosmetic dentistry changes the appearance of your teeth: colour, shape, proportion, alignment and the way the gum line frames them. In practice it covers whitening, porcelain veneers, bonding, clear aligners, tooth-coloured restorations, gum contouring and full smile makeovers. What matters more than the list is the sequence. Gum health and bite stability come first, whitening is done before any porcelain is made so the shade can be matched to it, and the design is agreed before anything irreversible happens. Treatments that skip those steps are where cosmetic dentistry goes wrong."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Our Cosmetic Dentistry Services",
        text: [
          "The treatments we provide, and what each one is genuinely suited to. Often the right answer is the most conservative one on this list."
        ],
        image: images.dentalTeamOk,
        items: [
          {
            title: "Teeth Whitening",
            body: [
              "Professional whitening lifts surface and age-related staining, in-office for a faster result or with custom take-home trays. It works on natural teeth only, so if veneers or crowns are part of your plan, whitening is done first and the porcelain matched to the new shade."
            ]
          },
          {
            title: "Porcelain Veneers",
            body: [
              "Thin ceramic shells bonded to the front of the teeth, changing colour, shape, proportion and minor alignment together. Preparation removes a thin layer of enamel that does not grow back, which is why the design is agreed and previewed in your own mouth before anything is prepared."
            ]
          },
          {
            title: "Dental Bonding",
            body: [
              "Tooth-coloured composite shaped directly onto the tooth in a single visit. It repairs chips, closes small gaps and reshapes edges with minimal or no enamel removal. Less durable than porcelain, and considerably more conservative, which makes it the right first option in many cases."
            ]
          },
          {
            title: "Invisalign and Clear Aligners",
            body: [
              "A series of removable clear aligners that move teeth gradually, with no fixed brackets. Suited to mild and moderate crowding, spacing and rotation. Where teeth are significantly out of position, aligning them first usually gives a better result than masking them with veneers, and preserves more tooth."
            ]
          },
          {
            title: "Dental Implants",
            body: [
              "Where a missing tooth is affecting the appearance of your smile, an implant replaces the root as well as the visible tooth. Planned on a cone beam CT scan taken in this office, then placed and restored by Dr. Shir."
            ]
          },
          {
            title: "Smile Makeovers",
            body: [
              "A combined plan rather than a single treatment. Whitening, veneers, bonding, alignment and gum contouring sequenced together so the whole smile is designed as one thing. Planned digitally against your facial proportions and reviewed with you before treatment starts."
            ]
          },
          {
            title: "Digital Imaging and X-rays",
            body: [
              "Digital X-rays and photography record what is there before any cosmetic plan is built, including decay, existing restorations and bone levels. Cosmetic work placed over untreated problems does not hold, so this stage is not optional."
            ]
          },
          {
            title: "CAD/CAM Technology",
            body: [
              "Digital scanning and design, so restorations are made from an accurate digital model of your teeth rather than an impression tray. Better fit at the margin, and no material in your mouth during the appointment."
            ]
          },
          {
            title: "Laser Dentistry",
            body: [
              "A soft tissue laser is used to reshape an uneven gum line, which frames the teeth and is often what makes a smile look uneven even when the teeth themselves are fine. Precise, and usually with less bleeding and a more comfortable recovery than a scalpel."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "Why Patients Choose Us for Cosmetic Dentistry",
        text: [
          "Dr. Shir designs the result before preparing anything, and will tell you when the change you want can be achieved with something less invasive than what you came in asking for."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Experienced Cosmetic Dentistry Team:",
            text: [
              "More than thirty years of restorative and aesthetic practice. Design decisions are made against your facial proportions, your lip line and your smile line, not against a stock template, and you see the proposed result before committing to it."
            ]
          },
          {
            image: images.dentistReviewingScan2,
            title: "Advanced Dental Technology:",
            text: [
              "Digital scanning, digital imaging and a soft tissue laser in this office. Restorations are made from an accurate digital record of your teeth, and gum work is sequenced ahead of porcelain so the frame is right before the teeth are made."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Your Cosmetic Dentistry Journey",
        text: [
          "Four stages, and the design is agreed before anything irreversible happens. You receive a written plan with the sequence, the timeline and the cost before treatment begins."
        ],
        link: {
          label: "Schedule Your Consultation",
          href: "/appointment/"
        },
        items: [
          {
            title: "Smile Consultation",
            text: "A conversation about what you want to change, a full examination of your teeth, gums and bite, photographs and a digital scan. Gum health and bite stability are assessed first, since cosmetic work placed over either problem will not hold.",
            icon: images.stepConsultation
          },
          {
            title: "Personalized Smile Planning",
            text: "The proposed result is designed against your facial proportions and shown to you. Where appropriate, a trial version is placed over your teeth so you can see the shape and length in your own mouth. Changes made at this stage cost nothing but time.",
            icon: images.stepPreparation
          },
          {
            title: "Comfortable Cosmetic Treatment",
            text: "Treatment is carried out under local anaesthetic where the procedure calls for it, with sedation available. Appointments are unhurried, and you are kept informed at each stage rather than told afterwards.",
            icon: images.stepTreatment
          },
          {
            title: "Aftercare and Follow-Up",
            text: "Written aftercare instructions, a review appointment once the tissue has settled, and a night guard where grinding is a factor. Grinding is the most common reason cosmetic work fails early, so it is addressed alongside rather than later.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Schedule a Cosmetic Consultation With Dr. Shir",
        text: [
          "At your consultation Dr. Shir will examine your teeth and gums thoroughly, talk through what you want to change and what is realistic, set out the options with the trade-offs of each, and answer whatever you want to ask. You leave with a written plan covering the sequence, the timeline and the cost, and no pressure to start."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Cosmetic Dentistry",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "What cosmetic dentistry treatments do you offer?",
            answer: [
              "Professional whitening, porcelain veneers, dental bonding, clear aligners, tooth-coloured restorations, gum contouring, dental implants and full smile makeovers. Which combination suits you depends on what you want to change and how much of your natural tooth structure we can conserve while achieving it."
            ]
          },
          {
            question: "How do I know which cosmetic treatment is right for me?",
            answer: [
              "That is what the consultation decides. Discolouration that sits on the surface responds to whitening, while staining within the tooth generally does not. Chips and small gaps often suit bonding. Shape, proportion and colour changed together usually point to veneers. Significant crowding is better aligned than masked. Dr. Shir will recommend the most conservative option that achieves what you want."
            ]
          },
          {
            question: "Are cosmetic dental procedures painful?",
            answer: [
              "Most are comfortable. Whitening and bonding usually need no anaesthetic. Veneer preparation and gum contouring are carried out under local anaesthetic, with sedation available. Some temperature sensitivity after whitening or while wearing temporaries is common and settles."
            ]
          },
          {
            question: "Does insurance cover cosmetic dentistry?",
            answer: [
              "Purely cosmetic treatment is generally not covered. Where a treatment also restores function or health, such as a crown on a damaged tooth, plans often contribute. You receive a written figure before anything begins, and financing is available to spread larger plans across monthly payments."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Top Cosmetic Dentist in Beverly Hills | Dr. Nushin Shir",
      description: "Veneers, whitening and complete smile makeovers from Dr. Nushin Shir. See why Beverly Hills patients trust us with their smiles. Book your visit today."
    }
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    order: 3,
    sections: [
      {
        _type: "hero",
        heading: "Restorative Dentistry in Beverly Hills",
        subheading: "Restorative Dentistry",
        text: [
          "Repair and rebuild damaged or missing teeth, restoring both function and appearance. Planned with 3D imaging taken in this office and carried out by Dr. Shir."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Rebuild What Is Damaged, Replace What Is Missing",
        text: [
          "Restorative dentistry covers everything from a single filling to rebuilding a full arch. The principle running through all of it here is conservation: remove as little healthy tooth structure as the situation allows, and choose the smallest restoration that will actually hold. That is why we use onlays instead of full crowns wherever the tooth permits, and why we will tell you when a tooth others have written off is still restorable."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "OUR RESTORATIVE DENTISTRY PROCEDURES",
        text: [
          "Nine treatments, from the smallest repair to full reconstruction. Which one your case calls for is decided at the examination, not before."
        ],
        image: images.dentistExaminingPatient,
        items: [
          {
            title: "Dental Fillings",
            body: [
              "Tooth-coloured composite and ceramic fillings that repair decay and minor damage while bonding to the remaining tooth structure. No metal, and no need to remove healthy tooth to create a mechanical lock the way amalgam required."
            ]
          },
          {
            title: "Dental Crowns",
            body: [
              "Full coverage for a tooth too damaged to hold a filling. Metal-free porcelain, made from a digital scan and shaded against your own teeth. Used where an onlay would not give enough protection."
            ]
          },
          {
            title: "Dental Bridges",
            body: [
              "A fixed replacement for one or more missing teeth, supported by crowns on the teeth either side. Suited to cases where those neighbouring teeth already need crowning."
            ]
          },
          {
            title: "Dentures and Partial Dentures",
            body: [
              "Removable replacements for several missing teeth or a full arch. Fitted to your own tissue rather than adapted from a stock base, and designed so the bite is stable rather than just filled."
            ]
          },
          {
            title: "Dental Implants",
            body: [
              "A replacement for the whole tooth, root included. Planned on a cone beam CT scan taken here, then placed and restored by the same dentist."
            ]
          },
          {
            title: "Root Canal Therapy",
            body: [
              "Treating infection inside the tooth so the tooth itself can be kept. Canal anatomy is mapped in 3D where the case calls for it, and the protective restoration afterwards is completed here in sequence."
            ]
          },
          {
            title: "Inlays and Onlays",
            body: [
              "A conservative alternative to a full crown for a tooth too damaged for a filling. They cover only the part that needs covering, which preserves more of your own tooth than a crown does."
            ]
          },
          {
            title: "TMJ Treatment",
            body: [
              "Assessment and treatment for jaw pain, clicking and the headaches that come with it. Diagnosis first, then the most conservative treatment that addresses the cause."
            ]
          },
          {
            title: "Full Mouth Reconstruction",
            body: [
              "Rebuilding an entire bite where wear, damage or missing teeth have affected the whole mouth. Sequenced as one plan rather than treated tooth by tooth."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "DENTAL IMPLANTS",
        text: [
          "Implants replace the root as well as the visible tooth, which is what separates them from a bridge or a denture. How many, and where, is decided from your 3D scan."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "SINGLE TOOTH IMPLANTS",
            text: [
              "One implant replacing one missing tooth, without involving the teeth either side. Those neighbours stay untouched, which a bridge cannot offer since it requires preparing both for crowns."
            ]
          },
          {
            image: images.dentistReviewingScan2,
            title: "FULL ARCH IMPLANTS",
            text: [
              "A fixed set of teeth carried by a small number of implants, for patients missing most or all of an arch. Fixed in place with no adhesive, so it does not move while you eat or speak."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR RESTORATIVE DENTISTRY",
        text: [
          "More than thirty years of restorative practice, with imaging, planning and treatment all handled in one office."
        ],
        items: [
          {
            title: "30+ Years of Experience",
            text: "Dr. Shir has spent more than three decades on restorative and reconstructive work, including complex cases. Every stage is handled here rather than split across providers.",
            icon: images.stepConsultation
          },
          {
            title: "State-of-the-Art Technology",
            text: "Cone beam CT, digital X-rays, an intraoral scanner and a soft tissue laser in this office. Planning is based on what the imaging shows rather than on estimation.",
            icon: images.stepPreparation
          },
          {
            title: "Patient-Centered Care",
            text: "A written plan covering the sequence, the timeline and the cost before anything begins. Unhurried appointments, and questions answered before you commit rather than after.",
            icon: images.stepTreatment
          },
          {
            title: "Natural-Looking Restorations",
            text: "Metal-free ceramics and composites shaded against your own teeth. Restorations are designed to disappear into the smile rather than to be noticed for their quality.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "READY TO RESTORE YOUR SMILE?",
        text: [
          "Whether you need a single filling or a full mouth reconstruction, treatment starts with a proper examination and, where the case calls for it, a 3D scan taken here. You leave with a written plan setting out what is recommended, why, and what it costs. Book a consultation with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Restorative Dentistry",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "What is restorative dentistry?",
            answer: [
              "Restorative dentistry repairs damaged teeth and replaces missing ones, restoring both how your mouth works and how it looks. It covers fillings, crowns, inlays and onlays, bridges, dentures, implants, root canal treatment and full mouth reconstruction. Which of those you need depends entirely on what the examination finds."
            ]
          },
          {
            question: "How do I know which restorative treatment is right for me?",
            answer: [
              "The examination decides it, and usually the answer is the most conservative option that will hold. A filling where a filling is enough. An onlay rather than a full crown where the tooth allows it. An implant rather than a bridge where the neighbouring teeth are healthy. Dr. Shir will explain the options with the trade-offs of each before anything starts."
            ]
          },
          {
            question: "Are restorative dental procedures painful?",
            answer: [
              "Most are carried out under local anaesthetic and are comfortable, with sedation available for anyone anxious about treatment. Some tenderness for a few days after larger work is normal and is generally managed with over-the-counter pain relief. If discomfort increases rather than settles, contact us."
            ]
          },
          {
            question: "Is restorative dentistry covered by insurance?",
            answer: [
              "Treatment that restores function or health is often covered at least in part, though coverage varies considerably by plan. You receive a written figure before anything begins, and financing is available to spread larger plans across monthly payments."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Restorative Dentistry - Beverly Hills Dental",
      description: "Repair and rebuild damaged or missing teeth, restoring both function and appearance. Planned with 3D imaging taken in this office and carried out by Dr. Shir."
    }
  },
  {
    slug: "periodontic-dentistry",
    title: "Periodontic Dentistry",
    order: 4,
    sections: [
      {
        _type: "hero",
        heading: "Periodontic Dentistry in Beverly Hills",
        subheading: "Gum Care and Periodontal Treatment",
        text: [
          "Treatment for gum disease, recession and the tissue that supports your teeth. Gum health is the foundation everything else in dentistry sits on, and it is assessed at every visit here."
        ],
        image: images.patientSmilingChair,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What Is Periodontic Dentistry?",
        text: [
          "Periodontics deals with the gums and the bone that hold your teeth in place. That includes preventing, diagnosing and treating gum disease, from early gingivitis through to advanced periodontitis where bone has already been lost. It also covers reshaping gum tissue where recession has exposed root surfaces or where the gum line makes a smile look uneven. Gum disease is the leading cause of tooth loss in adults, and it progresses for years without pain, which is why it is so often found late. Treated early it is manageable. Left alone it costs teeth."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Signs and Symptoms of Periodontal Disease",
        text: [
          "Gum disease rarely hurts until it is advanced. These are the signs that show up first, and the treatments that address them."
        ],
        image: images.dentalTeamOk,
        items: [
          {
            title: "Red, Swollen, or Tender Gums",
            body: [
              "Inflammation is usually the first visible sign. Healthy gums are firm and pale pink. Gums that look red or puffy, or feel tender when you brush, indicate the tissue is reacting to bacteria at the gum line. At this stage the condition is generally reversible."
            ]
          },
          {
            title: "Bleeding Gums",
            body: [
              "Bleeding when brushing or cleaning between the teeth is not normal, and it is not a sign you are brushing too hard. It is the most common early indicator of gum inflammation, and it is the one most often ignored because it does not hurt."
            ]
          },
          {
            title: "Persistent Bad Breath",
            body: [
              "Bacteria collecting in periodontal pockets below the gum line produce odour that brushing and mouthwash do not resolve. Breath that returns quickly after cleaning your teeth is worth having assessed rather than masking."
            ]
          },
          {
            title: "Changes in Bite",
            body: [
              "Teeth that suddenly meet differently, or a partial denture that no longer seats the way it did, can indicate the supporting bone has changed. This is a later sign and warrants prompt assessment."
            ]
          },
          {
            title: "Receding Gums",
            body: [
              "Gums pulling back from the teeth make them look longer and expose root surfaces, which are softer than enamel and more prone to decay and sensitivity. Recession can result from gum disease, from brushing too aggressively, or from grinding."
            ]
          },
          {
            title: "Loose or Shifting Teeth",
            body: [
              "When the bone supporting a tooth has been destroyed, the tooth begins to move. This is advanced disease, and at this point the aim shifts to stabilising what remains rather than reversing what has been lost."
            ]
          },
          {
            title: "Pain or Discomfort",
            body: [
              "Gum disease is usually painless until late, which is why discomfort is a sign to act on rather than monitor. Tenderness when chewing, or a specific area that aches, suggests infection has progressed below the gum line."
            ]
          },
          {
            title: "Gum Disease Treatment",
            body: [
              "Treatment begins with deep cleaning below the gum line to remove the deposits driving the inflammation, supported by laser therapy and ozone where appropriate. Surgical treatment is reserved for cases that do not respond to that."
            ]
          },
          {
            title: "Maintenance Therapy",
            body: [
              "Periodontal disease is managed rather than cured. Once treated, more frequent maintenance visits, usually every three to four months, keep the bacterial load down and catch any return early. This is the stage that determines whether treatment holds."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Our Expert Periodontal Services",
        text: [
          "Treatment ranges from non-surgical deep cleaning through to reshaping the gum line, and the approach starts with the least invasive option that addresses the problem."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "GUM DISEASE TREATMENT",
            text: [
              "Deep cleaning below the gum line, known as scaling and root planing, removes the hardened deposits that inflammation feeds on. A soft tissue laser is used to treat the pocket lining and ozone as an adjunct to reduce bacterial levels. Most cases respond to this without surgery, and success depends heavily on the maintenance visits that follow."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "COSMETIC GUM PROCEDURES",
            text: [
              "Crown lengthening, gum contouring and gum grafting reshape the gum line where recession has exposed roots or where an uneven gum makes teeth look mismatched. Carried out with a soft tissue laser where appropriate, which usually means less bleeding and a more comfortable recovery than a scalpel."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR PERIODONTAL CARE",
        text: [
          "Gum disease is managed over years rather than fixed in one appointment. What matters is catching it early and staying on top of it."
        ],
        items: [
          {
            title: "30+ Years of Experience",
            text: "More than three decades of restorative practice, with gum health assessed at every routine visit rather than only when something is wrong.",
            icon: images.stepConsultation
          },
          {
            title: "Advanced Technology",
            text: "A soft tissue laser, ozone therapy and digital imaging in this office. Laser treatment is used as an alternative to surgery for many patients, and it generally means a more comfortable recovery.",
            icon: images.stepPreparation
          },
          {
            title: "Patient Comfort & Care",
            text: "Thorough anaesthesia for deep cleaning, unhurried appointments, and sedation available. Deep cleaning has a reputation it does not deserve when it is done properly.",
            icon: images.stepTreatment
          },
          {
            title: "Personalized Treatment Plans",
            text: "A written plan covering what is recommended, why, and what it costs, including the maintenance interval afterwards. That interval is part of the treatment, not an upsell.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "WHY GUM TREATMENT MATTERS BEYOND YOUR MOUTH",
        text: [
          "Effective periodontal treatment stops the destruction of the bone holding your teeth in place, which is what preserves them. Research has also identified associations between periodontal disease and conditions including heart disease, diabetes and respiratory illness, though the nature of those links is still being studied. What is established is that gum disease is the leading cause of tooth loss in adults, and that treating it early is far simpler than treating it late."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Periodontic Dentistry",
        text: ["The questions patients ask most often about gum treatment."],
        items: [
          {
            question: "What are the warning signs of periodontal disease?",
            answer: [
              "Red, swollen or tender gums, bleeding when you brush or clean between your teeth, persistent bad breath, receding gums, and in later stages loose teeth or a bite that feels different. Bleeding is the sign most often dismissed and the one worth acting on earliest. Gum disease is usually painless until it is advanced, so waiting for discomfort means waiting too long."
            ]
          },
          {
            question: "Is periodontal treatment painful?",
            answer: [
              "Deep cleaning is carried out under local anaesthetic, so the appointment itself is comfortable, and sedation is available for anyone anxious. Gums are often tender for a few days afterwards and teeth can be temperature-sensitive for a week or two as the tissue tightens. Over-the-counter pain relief manages this for most patients."
            ]
          },
          {
            question: "Can gum disease be reversed?",
            answer: [
              "Gingivitis, the earliest stage, is generally reversible with thorough cleaning and good daily care. Once the disease has progressed to periodontitis and bone has been lost, that bone does not grow back on its own. Treatment at that stage stops the process and stabilises what remains, which is why the maintenance visits afterwards matter as much as the initial treatment."
            ]
          },
          {
            question: "Is periodontal treatment covered by insurance?",
            answer: [
              "It is usually treated as necessary rather than elective, so most plans contribute to deep cleaning and maintenance, though frequency limits often apply and cosmetic gum procedures are generally excluded. You receive a written figure before treatment begins, and financing is available."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Periodontic Dentistry - Beverly Hills Dental",
      description: "Treatment for gum disease, recession and the tissue that supports your teeth. Gum health is the foundation everything else in dentistry sits on, and it is"
    }
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    order: 5,
    sections: [
      {
        _type: "hero",
        heading: "Preventive Dentistry in Beverly Hills",
        subheading: "Preventive Dentistry",
        text: [
          "Preventive dentistry focuses on maintaining your oral health by preventing dental problems before they start. Our proactive approach includes regular checkups, cleanings, and treatments designed to keep your smile healthy for life."
        ],
        image: images.patientSmilingChair,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Prevent Oral Health Problems Before They Start",
        text: [
          "At Beverly Hills Dental Art Studio, our preventive care team is dedicated to providing exceptional dental care to the Beverly Hills community. Our experienced professionals are committed to helping you achieve and maintain optimal oral health through comprehensive preventive dentistry services."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Our Professional Preventive Dental Services",
        text: [
          "Our preventive dentistry services are designed to maintain your oral health and stop dental problems before they require more extensive treatment."
        ],
        image: images.dentalMicroscope,
        items: [
          {
            title: "Regular Oral Exams and Cleanings",
            body: [
              "Regular dental exams and professional cleanings help keep your teeth and gums healthy by removing plaque and tartar buildup. During your visit, our dental team carefully examines your oral health, identifies potential concerns early, and provides personalized recommendations to help prevent cavities, gum disease, and other dental issues."
            ]
          },
          {
            title: "Dental Sealants",
            body: [
              "Dental sealants are thin, protective coatings applied to the chewing surfaces of molars and premolars. They create a barrier that helps prevent food particles and bacteria from settling into deep grooves, significantly reducing the risk of tooth decay. Sealants are especially beneficial for children and teens but can also help adults maintain healthier teeth."
            ]
          },
          {
            title: "Fluoride Treatments",
            body: [
              "Fluoride treatments strengthen tooth enamel and make teeth more resistant to cavities. This quick, painless preventive treatment helps remineralize weakened areas of enamel and can reduce the risk of future decay. Fluoride treatments are beneficial for both children and adults who want extra protection for their smiles."
            ]
          },
          {
            title: "Oral Cancer Screenings",
            body: [
              "Oral cancer screenings are an important part of preventive dental care. During the screening, we examine your lips, tongue, cheeks, throat, and other oral tissues for any unusual changes or signs of concern. Early detection greatly improves treatment outcomes, making routine screenings an essential part of maintaining your overall health."
            ]
          },
          {
            title: "X-rays and Diagnostic Imaging",
            body: [
              "Digital X-rays and advanced diagnostic imaging allow us to detect dental issues that may not be visible during a standard exam. These images help identify cavities, bone loss, impacted teeth, infections, and other concerns at an early stage. Early diagnosis enables more effective and less invasive treatment when needed."
            ]
          },
          {
            title: "Night Guards",
            body: [
              "Night guards are custom-made oral appliances designed to protect your teeth from grinding and clenching while you sleep. They help reduce tooth wear, jaw discomfort, headaches, and damage caused by bruxism. A properly fitted night guard provides comfort and long-term protection for your smile and oral health."
            ]
          },
          ...addedServiceItems("preventive-dentistry")
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Benefits of Preventive Dental Care",
        text: [
          "Preventive dental care offers lasting advantages for your oral health and overall well-being, helping you avoid costly procedures by addressing issues early."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Early Detection of Issues",
            text: [
              "Routine checkups help detect problems like cavities, gum disease, and oral cancer in their early stages, allowing for simpler and less invasive treatments."
            ]
          },
          {
            image: images.dentistExaminingPatient683,
            title: "Cost Savings",
            text: [
              "Preventive care reduces the need for expensive restorative procedures by addressing issues before they become serious and costly."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Why Choose Beverly Hills Dental Art Studio for Preventive Dentistry",
        text: [
          "Our dedicated team brings decades of experience and advanced technology to every preventive care visit, ensuring the highest standard of dental health for you and your family."
        ],
        items: [
          {
            title: "50 Years of Combined Expertise",
            text: "Our skilled dentists and hygienists bring decades of knowledge, ensuring every patient receives the best preventive care possible.",
            icon: images.stepConsultation
          },
          {
            title: "Advanced Technology & Techniques",
            text: "We utilize state-of-the-art equipment like digital X-rays to provide accurate and efficient preventive treatments.",
            icon: images.stepPreparation
          },
          {
            title: "Personalized Care Plans",
            text: "We offer customized preventive care plans tailored to your specific needs, from children to seniors.",
            icon: images.stepTreatment
          },
          {
            title: "Convenient Beverly Hills Location",
            text: "With our easily accessible Beverly Hills location, scheduling your regular preventive visits is simple and hassle-free.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Take Control of Your Dental Health Today",
        text: [
          "Don’t wait until dental problems become serious. At Beverly Hills Dental Art Studio, we’re here to help you maintain your oral health with comprehensive preventive services. Schedule your appointment today at our Beverly Hills office."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Preventive Dentistry",
        text: [
          "Have questions about preventive dental care? You’re not alone. Here are answers to the most common questions we hear from patients in Beverly Hills — so you can feel confident and informed before your visit to Beverly Hills Dental Art Studio."
        ],
        items: [
          {
            question: "How often should I visit the dentist for preventive care?",
            answer: [
              "**Most patients benefit from a checkup and professional cleaning every six months. Regular visits let our team catch issues like cavities or gum disease early — before they become painful or costly to treat.**"
            ]
          },
          {
            question: "What does a preventive dental visit include?",
            answer: [
              "**A typical visit includes a thorough exam, a professional cleaning, and digital X-rays when needed. Depending on your needs, we may also provide fluoride treatments, dental sealants, or an oral cancer screening to keep your smile healthy.**"
            ]
          },
          {
            question: "Is preventive dental care really worth it?",
            answer: [
              "**Absolutely. Preventive care is the most effective way to avoid serious dental problems. By catching concerns early, you save time, money, and discomfort — and protect your long-term oral and overall health.**"
            ]
          },
          {
            question: "Is preventive dentistry covered by insurance?",
            answer: [
              "**In most cases, yes — preventive services like exams, cleanings, and X-rays are covered by most dental plans, often at little or no cost to you. We accept Aetna, Cigna, Delta Dental, MetLife, and UnitedHealthcare, and offer flexible payment plans through Cherry and CareCredit for patients without coverage.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Preventive Dentistry - Beverly Hills Dental",
      description: "Preventive dentistry focuses on maintaining your oral health by preventing dental problems before they start. Our proactive approach includes regular"
    }
  },
  {
    slug: "dental-technology",
    title: "Dental Technology hub",
    order: 6,
    sections: [
      {
        _type: "hero",
        heading: "Dental Technology in Beverly Hills",
        subheading: "Dental Technology",
        text: [
          "3D imaging, digital scanning, soft tissue lasers and ozone, all in this office. Equipment most general practices refer out for, so planning and treatment happen in the same place."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Why the Equipment in the Room Matters",
        text: [
          "Technology in dentistry is easy to advertise and harder to justify. What it should do is make treatment more accurate, more comfortable, or possible in one place rather than three. Everything here earns its place on one of those grounds. A cone beam scan measures bone in three dimensions, so an implant is planned rather than judged. A digital scanner replaces impression trays, so restorations fit better at the margin. A soft tissue laser reshapes gum tissue with less bleeding and fewer sutures. Ozone reduces bacterial levels at a treated site as an adjunct to conventional care. None of it replaces clinical judgement. It gives that judgement better information to work with."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "THE TECHNOLOGY WE USE AND WHY",
        text: ["Five pieces of equipment and what each one changes about the treatment you receive."],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "3D Cone Beam CT Scanning",
            body: [
              "A cone beam scan produces a three-dimensional image of your jaw, showing bone height and width, the position of the nerve canal, the sinus floor and the full root anatomy of a tooth. Used for implant planning, complex root canal cases and wisdom teeth. It replaces estimation with measurement."
            ]
          },
          {
            title: "Digital X-Rays",
            body: [
              "Digital sensors use a lower radiation dose than the film systems they replaced and produce an image on screen instantly. Decay between teeth and beneath old restorations is invisible to the eye, and this is how it is found while it is still small."
            ]
          },
          {
            title: "Intraoral Digital Scanner",
            body: [
              "A small wand captures your teeth as an accurate digital model, replacing impression trays and the material that sets in your mouth. Crowns, onlays, veneers, aligners and night guards are all made from that scan, and the fit at the margin is consistently better."
            ]
          },
          {
            title: "Soft Tissue Laser",
            body: [
              "Used to reshape gum tissue, treat the lining of periodontal pockets after cleaning, and contour the gum line before restorations. It seals small blood vessels as it works, so there is typically less bleeding, often no sutures, and a more comfortable recovery than a scalpel."
            ]
          },
          {
            title: "Ozone Therapy",
            body: [
              "Applied as an adjunct at a treated site, whether a prepared cavity, a cleaned periodontal pocket or an extraction socket, to reduce bacterial levels. It supports conventional treatment rather than replacing it, and we are clear about that distinction."
            ]
          },
          {
            title: "Planning Before Treatment, Not During",
            body: [
              "Imaging is taken and reviewed before a procedure begins, not to confirm what has already been decided. Surprises are what turn straightforward cases into difficult ones, and 3D planning removes most of them."
            ]
          },
          {
            title: "Fewer Appointments and Fewer Referrals",
            body: [
              "Because the imaging and the treatment happen in the same office, there is no separate scan appointment elsewhere and no waiting for images to arrive from another provider before your plan can be finalised."
            ]
          },
          {
            title: "Lower Radiation, Better Information",
            body: [
              "Digital imaging delivers a lower dose than film while producing images that can be enlarged, adjusted and compared against previous visits. Images are taken at intervals matched to your risk rather than automatically at every appointment."
            ]
          },
          {
            title: "You See What We See",
            body: [
              "Scans and X-rays appear on a screen in the room. Being shown the crack in your own tooth or the bone level around it makes treatment decisions considerably easier than being told about them."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "DIAGNOSIS AND TREATMENT IN ONE PLACE",
        text: [
          "The practical benefit of having this equipment on site is not novelty. It is that fewer things are estimated and fewer things are outsourced."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "MORE ACCURATE DIAGNOSIS:",
            text: [
              "Cone beam imaging measures bone in three dimensions where a flat X-ray only approximates height. Digital X-rays find decay between teeth years before it becomes visible or uncomfortable. An intraoral camera shows you what we are describing rather than asking you to take our word for it."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "MORE COMFORTABLE TREATMENT:",
            text: [
              "Digital scanning removes impression trays and the material that sets in your mouth. Laser treatment usually means less bleeding, fewer sutures and a quicker recovery than a scalpel. Planning from a 3D scan means procedures run to a plan rather than adapting to what is found partway through."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY IT MATTERS THAT IT IS ALL IN ONE OFFICE",
        text: [
          "Most general practices refer out for at least some of this. Having it here changes the sequence rather than just the equipment list."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "No Referrals for Imaging",
            text: "Cone beam scans are taken here, at the same appointment as your assessment, rather than at a separate imaging centre with a wait before your plan can be finalised.",
            icon: images.stepConsultation
          },
          {
            title: "Planned and Treated by One Dentist",
            text: "Dr. Shir reviews the imaging and carries out the treatment, so the finished result follows the plan rather than being adapted to it afterwards.",
            icon: images.stepPreparation
          },
          {
            title: "A Biological Approach",
            text: "Ozone, metal-free materials and conservative preparation run through how the practice works, with technology chosen to support that rather than to replace it.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of practice. Equipment is a tool, and what it produces still depends on the judgement of the person using it.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "SEE YOUR OWN SCAN AT YOUR CONSULTATION",
        text: [
          "Most patients have never seen their own teeth in three dimensions, and it makes decisions about treatment considerably clearer. Whether you are considering an implant, have been told a tooth needs removing, or simply want a proper assessment of where you stand, the imaging happens here and you see it on the screen with Dr. Shir. Book a consultation."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT OUR TECHNOLOGY",
        text: ["The questions patients ask most often about the equipment we use."],
        items: [
          {
            question: "Is dental imaging safe?",
            answer: [
              "**Digital X-rays use a considerably lower radiation dose than the film systems they replaced, and the dose from a routine set is very small. A cone beam scan uses more than a standard X-ray but far less than a medical CT, and it is taken only where the clinical situation genuinely calls for it. Protective shielding is used, and if you are pregnant, tell us and we will discuss whether imaging should wait.**"
            ]
          },
          {
            question: "Do I still need impressions for a crown or night guard?",
            answer: [
              "**In most cases no. An intraoral scanner captures your teeth digitally, which means nothing sets in your mouth and no tray needs to be tolerated. The scan is also more accurate at the margin, which is where restorations succeed or fail over time. Occasionally a conventional impression is still the better option, and we will tell you if yours is one of those cases.**"
            ]
          },
          {
            question: "Why do I need a 3D scan when my old dentist only took X-rays?",
            answer: [
              "**A flat X-ray shows height and shape but cannot measure width, and width is frequently the dimension that determines whether an implant is possible. It also cannot show exactly where the nerve canal runs or how close a root sits to the sinus. For implants, complex root canals and wisdom teeth, that information changes the plan rather than just confirming it.**"
            ]
          },
          {
            question: "Does better technology mean higher fees?",
            answer: [
              "**Not in the way people expect. Having the equipment here removes the separate imaging fee you would pay elsewhere and the extra appointment that comes with it. More importantly, finding problems while they are small is what keeps treatment at the cheaper end. You receive a written figure before anything begins either way.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dental Technology hub - Beverly Hills Dental",
      description: "3D imaging, digital scanning, soft tissue lasers and ozone, all in this office. Equipment most general practices refer out for, so planning and treatment"
    }
  }
];

export const fallbackServices: Service[] = [
  {
    slug: "single-tooth-implants",
    title: "Single Tooth Implants",
    category: "dental-implants-dentistry",
    order: 1,
    sections: [
      {
        _type: "hero",
        heading: "Single Tooth Implants in Beverly Hills",
        subheading: "Dental Implant Dentistry",
        text: [
          "Replace one missing tooth without touching the teeth either side. Planned on a 3D scan taken in this office, then placed and restored by Dr. Shir."
        ],
        image: images.patientDentalExamCloseup,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What is a Single Tooth Dental Implant?",
        text: [
          "A single tooth implant is an artificial tooth root, usually titanium, placed into the jawbone to replace one missing tooth. It has three parts: the post that does the work of the root, an abutment that connects it, and a custom porcelain crown on top. What separates it from a bridge is that the teeth on either side stay untouched. A bridge requires preparing both neighbours for crowns, and enamel removed for that does not come back."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Advanced Technology for Precision & Comfort",
        text: [
          "Dr. Shir invested in the equipment most general practices refer out for, so imaging, planning and treatment all happen here. This is what each piece contributes to a single tooth case."
        ],
        image: images.patientReviewingXRay,
        items: [
          {
            title: "3D Imaging and Digital X-Rays",
            body: [
              "A cone beam CT scan shows bone height and width, the position of the nerve canal and the floor of the sinus. Flat X-rays cannot measure width, only approximate height, and width is frequently the dimension that decides whether an implant is possible."
            ]
          },
          {
            title: "Computer-Guided Implant Placement",
            body: [
              "The implant position is planned on the scan before treatment begins, so the size, angle and depth are decided from your anatomy rather than judged in the moment. Surprises are what make straightforward cases difficult, and planning removes most of them."
            ]
          },
          {
            title: "Custom-Made Crowns with Digital Impressions",
            body: [
              "The crown is made from an intraoral scan rather than an impression tray, which means no material in your mouth and a more accurate fit at the margin. Shade is matched against your own teeth in natural light."
            ]
          },
          {
            title: "Laser Dentistry for Minimally Invasive Procedures",
            body: [
              "A soft tissue laser is used to shape the gum around the implant site where the tissue needs contouring. It is precise, and it usually means less bleeding and a more comfortable recovery than a scalpel would give."
            ]
          },
          {
            title: "Durability and Longevity",
            body: [
              "Implants can last many years, and often decades, when they are well maintained. The crown is the component that wears and commonly needs replacing after roughly ten to fifteen years, usually without disturbing the implant itself."
            ]
          },
          {
            title: "Preserve Natural Teeth",
            body: [
              "The single biggest advantage over a bridge. An implant stands on its own, so two healthy neighbouring teeth do not need preparing to hold up a replacement for a third."
            ]
          },
          {
            title: "Enhanced Comfort and Function",
            body: [
              "An implant is fixed, so it does not move while you eat or speak. The bite is adjusted at the fitting appointment so the new tooth takes its proper share of the chewing load rather than more or less than it should."
            ]
          },
          {
            title: "Prevent Bone Loss",
            body: [
              "Bone maintains density partly by being loaded through a tooth root. When the root goes, resorption follows, and it is usually fastest in the first year. An implant restores that loading at the site, which helps maintain the bone around it."
            ]
          },
          {
            title: "Natural Aesthetic",
            body: [
              "The shape of the abutment influences how the gum sits around the finished crown, which is what decides whether a front tooth reads as natural. That is planned rather than left to chance."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Ideal Candidates for Single Tooth Implants",
        text: [
          "Most people with one missing tooth and reasonable general health are candidates. Two things decide it, and both are assessed at the consultation."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Healthy Gums & Sufficient Bone:",
            text: [
              "Gum disease needs treating before an implant goes in, since the tissue around an implant behaves much like tissue around a tooth. Where bone volume is short, a graft can often rebuild the site first, though not in every case, and the scan tells us which applies."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "Good Overall Health:",
            text: [
              "Well-controlled diabetes is generally compatible with treatment, while poorly controlled diabetes is associated with slower healing. Smoking is associated with higher failure rates. Some medications, particularly certain osteoporosis drugs, need discussing before any surgery."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Our Single Tooth Implant Process",
        text: [
          "Four stages, and most of the elapsed time is healing rather than appointments. You receive a written plan with the sequence, the timeline and the cost before anything begins."
        ],
        link: {
          label: "Schedule Your Consultation",
          href: "/appointment/"
        },
        items: [
          {
            title: "Consultation and Planning",
            text: "Examination, medical history, and a cone beam CT scan taken here. From it Dr. Shir determines whether an implant is appropriate, what size and position it calls for, and whether grafting is needed first.",
            icon: images.stepConsultation
          },
          {
            title: "Implant Placement and Healing",
            text: "The post is placed under local anaesthetic, with sedation available. The bone then grows into contact with its surface over a period commonly running three to six months. A temporary keeps the space filled wherever the gap shows.",
            icon: images.stepPreparation
          },
          {
            title: "Crown Placement and Final Restoration",
            text: "Once integration is confirmed, a digital scan is taken and the crown made to it, shaded against your own teeth. It is fitted, the bite is adjusted, and the tooth goes into normal function.",
            icon: images.stepTreatment
          },
          {
            title: "Follow-Up Care",
            text: "Implant sites are checked at every review. The tissue around an implant can become inflamed in the same way gum tissue does, and that is the most common reason implants are lost years after successful placement. It is largely preventable with good daily cleaning and monitoring.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Single Tooth Implant Cost in Beverly Hills",
        text: [
          "The total covers the implant post, the abutment, the crown and any preliminary treatment such as grafting. You receive a written figure for the full sequence before anything begins, so there is nothing to work out afterwards. Coverage varies considerably by plan, and many plans contribute toward part of the treatment rather than all of it. Financing is available to spread larger plans across manageable monthly payments."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69,
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Single Tooth Implants",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "How long do single tooth implants last?",
            answer: [
              "**Implants can last many years, and often decades, when they are well maintained. The crown is the component that wears and commonly needs replacing after roughly ten to fifteen years, which can usually be done without disturbing the implant itself. Outcomes depend heavily on gum health, smoking status and general health, so maintenance matters as much as the surgery.**"
            ]
          },
          {
            question: "Is getting a dental implant painful?",
            answer: [
              "**The procedure is carried out under local anaesthetic, with sedation available, and most patients report it as comparable to having a tooth removed. Afterwards, soreness and swelling for around three to five days is typical, managed on over-the-counter pain relief for most people. If discomfort increases rather than settles after the first few days, we want to hear from you.**"
            ]
          },
          {
            question: "How long does the implant process take?",
            answer: [
              "**For most patients, three to six months from placement to final crown, with the majority of that spent healing rather than in appointments. Cases needing a bone graft first take longer. You are not left with a visible gap during that period, since a temporary covers the site wherever it shows.**"
            ]
          },
          {
            question: "Are dental implants covered by insurance?",
            answer: [
              "**Coverage varies considerably by plan, and many contribute toward part of the treatment rather than all of it. We will give you a written figure for the full sequence before you commit, and financing is available to spread the cost across monthly payments.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Single Tooth Implants - Beverly Hills Dental",
      description: "Replace one missing tooth without touching the teeth either side. Planned on a 3D scan taken in this office, then placed and restored by Dr. Shir."
    }
  },
  {
    slug: "full-arch-implants",
    title: "Full Arch Implants",
    category: "dental-implants-dentistry",
    order: 2,
    sections: [
      {
        _type: "hero",
        heading: "Full Arch Dental Implants in Beverly Hills",
        subheading: "Dental Implant Dentistry",
        text: [
          "A fixed set of teeth carried by a small number of implants, for patients missing most or all of an arch or living with a denture that will not stay put. Planned on a 3D scan taken in this office."
        ],
        image: images.seniorPatientMirror,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What Are Full Arch Dental Implants?",
        text: [
          "Full arch implants replace a complete upper or lower arch using a few strategically placed implants to carry a fixed set of teeth. Rather than one implant per tooth, the load is shared across a smaller number positioned where the bone can support them. Unlike a conventional denture, the result is fixed in place, so it does not move while you eat or speak and it is not removed at night. Where the bone permits, this is one of the larger changes dentistry can make to daily life, and it is planned entirely from your scan."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "The Technology Behind Full Arch Dental Implants",
        text: [
          "A full arch case depends more on planning than on any single step in the surgery. This is what each part of the process contributes."
        ],
        image: images.seniorWomanChair,
        items: [
          {
            title: "3D Imaging and Digital Scans",
            body: [
              "A cone beam CT scan maps bone height, width and density across the whole arch, along with the nerve canal in the lower jaw and the sinus floor in the upper. In a full arch case the implants go where the usable bone is, so the scan effectively determines the plan."
            ]
          },
          {
            title: "Computer-Guided Implant Placement",
            body: [
              "Positions, angles and depths are decided on the scan before treatment begins. Angled placement is often used to reach denser bone and avoid the sinus, which in many cases removes the need for grafting that would otherwise be required."
            ]
          },
          {
            title: "Custom-Designed Prosthetics",
            body: [
              "The arch that sits on the implants is designed to your face, not to a stock template. Tooth length, midline, the way the teeth show when you smile and how they support the lip are all decided at the design stage and reviewed with you."
            ]
          },
          {
            title: "Minimally Invasive Techniques",
            body: [
              "Careful planning keeps the surgery contained to what the case requires. A soft tissue laser is used where tissue needs contouring, which usually means less bleeding and a more comfortable recovery."
            ]
          },
          {
            title: "Long-lasting Solution",
            body: [
              "Implants can last many years, and often decades, when they are well maintained. The prosthetic arch on top is the component that wears, and it can generally be replaced or refurbished without disturbing the implants underneath."
            ]
          },
          {
            title: "Natural Look and Feel",
            body: [
              "Because the arch is fixed and supported by bone rather than resting on gum tissue, it does not shift while you chew. Most patients describe eating as closer to natural teeth than to a denture, particularly on the lower jaw."
            ]
          },
          {
            title: "Stable and Secure Fit",
            body: [
              "No adhesive and no movement. The instability of a lower denture is the most common complaint among denture wearers, and it is the problem full arch implants are best suited to solving."
            ]
          },
          {
            title: "Enhanced Comfort",
            body: [
              "A conventional upper denture covers the palate, which affects taste and can trigger a gag reflex. A fixed arch does not, so the palate stays uncovered."
            ]
          },
          {
            title: "Preservation of Jawbone",
            body: [
              "Bone maintains density partly by being loaded through tooth roots. Once teeth are gone, resorption follows, and denture wearers commonly notice their denture loosening over the years as a result. Implants restore loading at the sites where they are placed."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "A Beautiful Smile in 2 Easy Steps",
        text: [
          "The first two stages set up everything that follows. Both happen before any prosthetic work begins."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "CONSULTATION AND PLANNING:",
            text: [
              "Dr. Shir assesses your oral health and general health, takes a cone beam CT scan here in the office, and builds a plan from it. That plan covers how many implants your case calls for, where the bone supports them, and the sequence and timeline for the whole treatment. You receive it in writing with the cost before anything begins."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "IMPLANT PLACEMENT:",
            text: [
              "A small number of implants are placed into the jawbone in the positions the scan identified, under local anaesthetic with sedation available. Angled placement is often used to reach denser bone, which in many cases avoids grafting. A healing period follows before the final arch is fitted."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Are Full Arch Dental Implants Right for You?",
        text: [
          "Full arch treatment suits a defined group of patients. These are the situations where it tends to be the strongest option, and the assessment confirms whether it applies to you."
        ],
        link: {
          label: "Schedule Your Consultation",
          href: "/appointment/"
        },
        items: [
          {
            title: "Missing Most or All Teeth",
            text: "Where most or all of the teeth in an arch are missing or failing, a full arch restoration addresses the whole arch at once rather than treating teeth one at a time in a mouth that is still deteriorating.",
            icon: images.stepConsultation
          },
          {
            title: "Dissatisfied with Dentures",
            text: "The lower jaw gives a conventional denture very little to grip, and instability while eating is the most common complaint we hear. Implant support removes the movement, and for many patients that changes what they are able to eat.",
            icon: images.stepPreparation
          },
          {
            title: "Good General Health",
            text: "General health that supports healing matters here more than in a single implant case. Well-controlled diabetes is generally compatible with treatment. Smoking is associated with higher failure rates. Where bone volume is short, grafting can often build the site first.",
            icon: images.stepTreatment
          },
          {
            title: "Seeking a Long-Term Solution",
            text: "Full arch treatment is a larger commitment upfront than a denture, and it is chosen by patients who want a fixed result they maintain rather than an appliance they manage. Daily cleaning under the arch is part of that, and we will show you how.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "FULL ARCH DENTAL IMPLANTS: AN ALTERNATIVE TO DENTURES",
        text: [
          "If missing teeth or a loose denture are affecting how you eat, speak and smile, there is another option worth understanding. Full arch implants secure a complete arch of replacement teeth on a small number of implants, fixed in place with no adhesive and no movement. They restore chewing strength, help maintain the bone where they are placed, and can serve for many years with good care. Most patients return to normal activities within a few days. Book a consultation with Dr. Shir and find out whether full arch treatment fits your case."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Full Arch Implants",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "How long do full arch dental implants last?",
            answer: [
              "The implants themselves can last many years, and often decades, when they are well maintained. The prosthetic arch on top is the part that wears and is generally replaced or refurbished at intervals, usually without disturbing the implants underneath. Outcomes depend heavily on gum health, smoking status, general health and daily cleaning around the arch."
            ]
          },
          {
            question: "Is the full arch implant procedure painful?",
            answer: [
              "Treatment is carried out under local anaesthetic, with sedation available, and it is a longer appointment than a single implant. Soreness and swelling for several days afterwards is normal and is managed with the pain relief and aftercare instructions you are given. Most patients report the recovery as more manageable than they expected."
            ]
          },
          {
            question: "Are full arch implants better than dentures?",
            answer: [
              "For most patients troubled by denture movement, particularly on the lower jaw, implants solve the specific problem a denture cannot. They are fixed, they do not need adhesive, and an upper arch does not cover the palate. Dentures remain the right answer where bone volume, general health or budget rule implants out, and we will tell you honestly which applies to your case."
            ]
          },
          {
            question: "Are full arch dental implants covered by insurance?",
            answer: [
              "Coverage varies considerably by plan, and many contribute toward part of the treatment rather than all of it. You receive a written figure for the full sequence before you commit, and financing is available to spread the cost across manageable monthly payments."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Full Arch Implants - Beverly Hills Dental",
      description: "A fixed set of teeth carried by a small number of implants, for patients missing most or all of an arch or living with a denture that will not stay put."
    }
  },
  {
    slug: "porcelain-veneers",
    title: "Porcelain Veneers",
    category: "cosmetic-dentistry",
    order: 3,
    sections: [
      {
        _type: "hero",
        heading: "Porcelain Veneers in Beverly Hills",
        subheading: "Cosmetic Dentistry",
        text: [
          "Designed digitally, previewed in your own mouth, and only then made. You see the result before any tooth is prepared."
        ],
        image: images.patientSmilingChair,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What Are Porcelain Dental Veneers?",
        text: [
          "A porcelain veneer is a thin shell of ceramic bonded to the front surface of a tooth. It changes shape, colour, alignment and proportion together, in a way that whitening or bonding alone cannot, and because porcelain handles light much as enamel does, a well-made veneer reads as a tooth rather than as dental work. The part that decides the outcome is the design, and it happens before anything irreversible. Preparation removes a thin layer of enamel that does not grow back, so the sequence here runs design, preview, agree, then prepare."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Benefits & Care of Porcelain Veneers",
        text: ["What veneers can and cannot do, and what keeps them looking right over the years."],
        image: images.shadeGuideSmile,
        items: [
          {
            title: "What Are Porcelain Dental Veneers?",
            body: [
              "Thin custom-made ceramic shells bonded to the front of the teeth. They address discolouration, chips, gaps and minor misalignment in one treatment, and the ceramic handles light in a way that closely resembles natural enamel."
            ]
          },
          {
            title: "Natural-Looking Smile Enhancement",
            body: [
              "The reasons a veneer case looks artificial are predictable: teeth too uniform, too bright for the face, too long or too flat, and a gum line that does not match. All of those are design decisions, which is why you see the proposed result before anything is made."
            ]
          },
          {
            title: "Custom Shade and Shape Design",
            body: [
              "Shade, length, width and edge shape are chosen against your face, your lip line and your smile line, then checked with you in natural light before bonding. If it is not what you want, that is the moment to say so."
            ]
          },
          {
            title: "Durable and Long-Lasting Solution",
            body: [
              "Porcelain veneers commonly serve for ten to fifteen years and often longer with good care. What ends most veneers is not the ceramic but decay at the margin, gum recession exposing that margin, or a chip caused by grinding."
            ]
          },
          {
            title: "Stain-Resistant Protection",
            body: [
              "Porcelain resists staining well and does not discolour the way natural enamel does. It also does not respond to whitening agents, which is why whitening is done before the veneers are made rather than after."
            ]
          },
          {
            title: "Minimally Invasive Procedure",
            body: [
              "A conservative preparation removes very little enamel, and in selected cases where teeth are small or worn, minimal or no preparation may be possible. Where the change you want can be achieved with bonding, whitening or alignment, those preserve more tooth and we will say so."
            ]
          },
          {
            title: "Improved Confidence and Appearance",
            body: [
              "Most patients come in wanting to stop thinking about their teeth in photographs and conversation. That is a reasonable goal, and it is the one we design toward rather than toward a standard set of shapes."
            ]
          },
          {
            title: "Easy Maintenance and Oral Hygiene",
            body: [
              "Brush and clean between the teeth daily, keep your hygiene appointments, and use a non-abrasive toothpaste to protect the surface polish. Nothing beyond normal care is required."
            ]
          },
          {
            title: "Long-Lasting Smile Investment",
            body: [
              "Wear a night guard if you grind, since grinding is the most common cause of early failure, and avoid using your front teeth as tools. Individual veneers can be replaced without redoing the whole set if one is damaged."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "The Porcelain Veneer Treatment Process",
        text: [
          "Two stages, and the design is agreed in the first one. Nothing irreversible happens until you have seen and approved the plan."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Initial Consultation & Custom Planning",
            text: [
              "A conversation about what you want to change, a full assessment of your teeth, gums and bite, photographs and a digital scan. Gum health and bite stability come first, since veneers placed over either problem will not hold. The proposed result is then designed against your facial proportions and shown to you, and where appropriate a trial version is placed over your teeth so you can see the shape and length in your own mouth."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "Tooth Preparation & Final Placement",
            text: [
              "A conservative amount of enamel is prepared under local anaesthetic, guided by the agreed design rather than removed and then designed around. Well-made temporaries follow the approved shape and are worn during the lab period, which is a genuine test drive. The finished veneers are then tried in, checked with you for shade and shape in natural light, bonded, and the bite adjusted."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Why Patients Choose Us for Porcelain Veneers",
        text: [
          "Dr. Shir designs the result before preparing anything, and will recommend something less invasive where it achieves what you want."
        ],
        items: [
          {
            title: "Expertise You Can Trust",
            text: "More than thirty years of restorative and aesthetic practice, including complex cases. Design decisions are made against your face rather than against a stock template.",
            icon: images.stepConsultation
          },
          {
            title: "Cutting-Edge Technology",
            text: "Digital scanning rather than impression trays, so the veneers are made from an accurate digital record of your teeth. Better fit at the margin, which is where veneers succeed or fail over time.",
            icon: images.stepPreparation
          },
          {
            title: "Personalized Care",
            text: "Unhurried appointments, feedback expected at the design stage rather than after, and gum contouring sequenced ahead of the veneers where the frame needs correcting.",
            icon: images.stepTreatment
          },
          {
            title: "Conservative by Default",
            text: "We remove what the design requires and no more. Where whitening, bonding or alignment would achieve your goal with less enamel removed, that is what we recommend.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Porcelain Veneers in Beverly Hills",
        text: [
          "If discolouration, gaps, chips or worn edges are keeping you from smiling freely, veneers can change all of it in one plan. Thin custom porcelain shells, matched to a shade and shape agreed with you beforehand, bonded to teeth prepared as conservatively as the design allows. With good care they commonly serve for ten to fifteen years and often longer. Book a consultation with Dr. Shir and see the design before treatment begins."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69,
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Porcelain Veneers",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "How long do porcelain veneers last?",
            answer: [
              "**Commonly ten to fifteen years, and often longer with good care. Longevity depends on gum health, whether you grind, your bite, and how well the margins are maintained. Individual veneers can be replaced without redoing the whole set if one is damaged.**"
            ]
          },
          {
            question: "Are porcelain veneers painful to get?",
            answer: [
              "**Preparation is carried out under local anaesthetic and is comfortable for most patients. Some sensitivity to temperature while wearing the temporaries is common and settles once the final veneers are bonded. Fitting is usually quick.**"
            ]
          },
          {
            question: "Will porcelain veneers look natural?",
            answer: [
              "**They should. Teeth that look artificial are usually too uniform, too bright for the face, too long or too flat, or set against a gum line that does not match. Those are design decisions made before anything is manufactured, and you see and approve the design first.**"
            ]
          },
          {
            question: "Are porcelain veneers covered by insurance?",
            answer: [
              "**Purely cosmetic treatment is generally not covered. Where a veneer also restores a damaged tooth, some plans contribute. You receive a written figure before anything begins, and financing is available to spread the cost across monthly payments.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Porcelain Veneers in Beverly Hills | Dr. Nushin Shir, DDS",
      description: "Natural-looking porcelain veneers designed for your smile and placed with digital planning. Call our Beverly Hills office to book your consultation."
    }
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    category: "cosmetic-dentistry",
    order: 4,
    sections: [
      {
        _type: "hero",
        heading: "Smile Makeovers in Beverly Hills",
        subheading: "Cosmetic Dentistry Planned as One Result",
        text: [
          "Several treatments planned as one result rather than booked one at a time. Designed digitally against your own face, previewed before anything is prepared, and sequenced so each stage supports the next."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What Is a Smile Makeover?",
        text: [
          "A smile makeover is a plan rather than a procedure. It combines whatever treatments your case actually needs, which might be whitening, veneers, bonding, alignment, gum contouring or replacing a missing tooth, and sequences them so they work together. The difference from booking those treatments separately is the order and the design. Whitening has to come before any porcelain is made, so the shade can be matched to it. Gum contouring has to settle before veneers are designed to that gum line. Alignment often comes before restorations, because straightening a tooth preserves more of it than masking it does. Treatments done in the wrong order produce a result that has to be redone, and that is the most common reason cosmetic work disappoints."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHAT A SMILE MAKEOVER CAN INCLUDE",
        text: [
          "Your plan uses only what your case calls for. These are the components we draw from, and what each one is genuinely suited to."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Professional Whitening",
            body: [
              "Lifts surface and age-related staining on natural teeth. Where whitening alone achieves what you want, that is the plan, and it is the most conservative option on this list. Where porcelain is involved, whitening comes first so the restorations can be matched to your final shade."
            ]
          },
          {
            title: "Porcelain Veneers",
            body: [
              "Thin ceramic shells that change colour, shape, proportion and minor alignment together. Preparation removes a thin layer of enamel that does not grow back, which is why the design is agreed and previewed before anything is prepared."
            ]
          },
          {
            title: "Dental Bonding",
            body: [
              "Composite shaped directly onto the tooth in one visit, with minimal or no enamel removal. It repairs chips, closes small gaps and reshapes edges. Less durable than porcelain and considerably more conservative, which makes it the right choice in many cases."
            ]
          },
          {
            title: "Clear Aligners",
            body: [
              "Where teeth are crowded, spaced or rotated, moving them into position usually gives a better result than masking them, and it preserves more tooth. Alignment is often the first stage of a makeover rather than an alternative to it."
            ]
          },
          {
            title: "Gum Contouring",
            body: [
              "The gum line frames the teeth, and an uneven one makes a smile look uneven even when the teeth themselves are fine. Reshaped with a soft tissue laser and allowed to settle before any restorations are designed to it."
            ]
          },
          {
            title: "Tooth-Coloured Restorations",
            body: [
              "Old metal fillings and worn or discoloured restorations replaced with materials that match your teeth. Often the least discussed part of a makeover and frequently the most visible when you laugh."
            ]
          },
          {
            title: "Replacing a Missing Tooth",
            body: [
              "A gap changes the whole smile, and the teeth around it drift over time. Where a tooth is missing, replacing it is part of the plan rather than something to address afterwards."
            ]
          },
          {
            title: "Crowns and Onlays",
            body: [
              "Where a tooth is damaged rather than just discoloured, it needs restoring properly before it is made to look right. Onlays are used in preference to full crowns wherever the tooth allows, since they conserve more of your own structure."
            ]
          },
          {
            title: "Night Guard Protection",
            body: [
              "Grinding is the most common reason cosmetic work fails early. Where it is present, a night guard is built into the plan from the start rather than added after something chips."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "THE SMILE MAKEOVER PROCESS",
        text: [
          "Two stages. Everything irreversible happens after you have seen and approved the design, not before."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "CONSULTATION, RECORDS & DESIGN",
            text: [
              "A conversation about what you want to change, a full assessment of your teeth, gums and bite, photographs and a digital scan. Gum health and bite stability come first, since cosmetic work placed over either problem will not hold. The proposed result is then designed against your facial proportions, your lip line and your smile line, and shown to you. Where appropriate, a trial version is placed over your teeth so you can see the shape and length in your own mouth. Changes at this stage cost nothing but time."
            ]
          },
          {
            image: images.hygienistTreatingPatient,
            title: "SEQUENCED TREATMENT & FINAL RESULT",
            text: [
              "Treatment follows the agreed plan in the order the result requires: alignment or gum work first where needed, then whitening, then any restorative and porcelain work matched to the new shade. You are shown the result at each stage rather than at the end. A review appointment follows once the tissue has settled, and a night guard is made where grinding is a factor."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR SMILE MAKEOVERS",
        text: [
          "Dr. Shir designs the whole result before preparing anything, and will recommend the most conservative route that achieves what you want."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Designed Before Prepared",
            text: "You see the intended result in your own mouth before any enamel is touched. Feedback is expected at that stage, not after the porcelain has been made.",
            icon: images.stepConsultation
          },
          {
            title: "Sequenced Properly",
            text: "Whitening before porcelain, gum work before veneers, alignment before restorations. The order is what stops a makeover having to be redone.",
            icon: images.stepPreparation
          },
          {
            title: "Conservative by Default",
            text: "We remove what the design requires and no more. Where bonding, whitening or alignment achieves your goal with less enamel removed, that is the recommendation.",
            icon: images.stepTreatment
          },
          {
            title: "One Dentist, One Plan",
            text: "More than thirty years of restorative and aesthetic practice, with every stage handled here. Nothing is referred out and nothing is lost between two providers.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "SEE YOUR SMILE DESIGNED BEFORE TREATMENT BEGINS",
        text: [
          "At your consultation Dr. Shir will assess your teeth, gums and bite, talk through what you want to change and what is realistic, and design the proposed result against your own face. You will see it before agreeing to anything, and you leave with a written plan covering the sequence, the timeline and the cost. No pressure to start."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT SMILE MAKEOVERS",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "How long does a smile makeover take?",
            answer: [
              "**It depends entirely on what your plan includes. A makeover built around whitening and bonding can be finished in two or three weeks. One involving veneers usually runs four to six weeks. If alignment is part of the plan, that stage alone takes several months and everything else follows it. Your written plan gives the timeline for your specific case before you commit.**"
            ]
          },
          {
            question: "How much does a smile makeover cost?",
            answer: [
              "**There is no standard figure, because no two plans contain the same treatments. Rather than quote a range, we price your actual plan after the consultation and give it to you in writing, covering every stage so there is nothing to work out later. Financing is available to spread the cost across monthly payments, and plans can be staged over time where that suits you better.**"
            ]
          },
          {
            question: "Will my smile still look like mine?",
            answer: [
              "**That is the goal, and it is a design decision rather than a technical one. Results look artificial when teeth are too uniform, too bright for the face, too long or too flat, or set against a gum line that does not match. All of that is decided before anything is made, which is exactly why you see and approve the design first.**"
            ]
          },
          {
            question: "Do I need every treatment on the list?",
            answer: [
              "**No, and most patients do not. A makeover uses what your case requires. For some people that is whitening and two bonded teeth. For others it is a fuller plan across the whole smile. Dr. Shir will tell you where a smaller intervention gets you what you want, and that conversation happens at the consultation rather than after treatment has started.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Smile Makeover - Beverly Hills Dental",
      description: "Several treatments planned as one result rather than booked one at a time. Designed digitally against your own face, previewed before anything is prepared,"
    }
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "cosmetic-dentistry",
    order: 5,
    sections: [
      {
        _type: "hero",
        heading: "Teeth Whitening in Beverly Hills",
        subheading: "Cosmetic Dentistry",
        text: [
          "Professional whitening supervised by a dentist, in-office for a faster result or with custom-fitted take-home trays. Your teeth are checked first, because whitening over untreated decay or exposed roots causes problems rather than solving them."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Why Choose Professional Teeth Whitening?",
        text: [
          "Professional whitening uses stronger agents than anything sold over the counter, applied with your gums and exposed root surfaces protected. That protection is the main difference. The other is the examination beforehand, which checks for decay, leaking restorations and gum recession, all of which cause sensitivity or uneven results if whitened over. Whitening also works on natural tooth structure only, so existing crowns, veneers and fillings will not change shade, and where those are in your smile line the plan needs to account for it."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Our Whitening Expertise & Services",
        text: ["What professional whitening involves here, and what each option is suited to."],
        image: images.dentalTeamOk,
        items: [
          {
            title: "Expertise You Can Trust",
            body: [
              "More than thirty years of cosmetic and restorative practice. Whitening is supervised rather than dispensed, which means your teeth and gums are assessed first and the approach is chosen for your situation rather than sold as a package."
            ]
          },
          {
            title: "Advanced Whitening Technology",
            body: [
              "Professional-grade whitening agents, applied with your gums and any exposed root surfaces protected. Sensitivity is managed with desensitising agents where needed, and the strength is adjusted to what your teeth can comfortably handle."
            ]
          },
          {
            title: "Customized Whitening Options",
            body: [
              "In-office treatment, custom take-home trays, or a combination of the two. Which suits you depends on your timeframe, how sensitive your teeth are, and how much of the discolouration sits on the surface rather than within the tooth."
            ]
          },
          {
            title: "Assessed Before You Whiten",
            body: [
              "Decay, leaking fillings and gum recession all cause problems if whitened over, from sharp sensitivity to uneven colour. A short examination first is what prevents that, and it is included rather than an extra step."
            ]
          },
          {
            title: "Commitment to Your Satisfaction",
            body: [
              "You are shown your starting shade and reviewed against it afterwards, so the change is measured rather than guessed at. If the result is not what you expected, we would rather discuss it than have you leave uncertain."
            ]
          },
          {
            title: "In-Office Whitening Process",
            body: [
              "One appointment of roughly an hour. Your gums are isolated and protected, professional-grade gel is applied in stages, and the result is visible when you leave. Suited to patients who want the change before a specific date."
            ]
          },
          {
            title: "Take-Home Kit Process",
            body: [
              "Custom trays made from a digital scan of your teeth, so the gel stays where it should rather than leaking onto the gums. Worn for a set period each day over roughly two weeks, at a pace you control."
            ]
          },
          {
            title: "What In-Office Whitening Achieves",
            body: [
              "A visible change in a single visit, with the degree varying by how your teeth respond and what is causing the discolouration. Some sensitivity for a day or two afterwards is common and settles."
            ]
          },
          {
            title: "What Take-Home Whitening Achieves",
            body: [
              "A more gradual change over two to three weeks, which many patients find more comfortable because the exposure is spread out. Trays are also kept afterwards for occasional top-ups."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "Types of Teeth Whitening Services Offered",
        text: [
          "Two options, and they suit different situations rather than different budgets. Dr. Shir will recommend one after assessing your teeth, and sometimes the answer is both."
        ],
        link: {
          label: "Schedule your consultation",
          href: "/appointment/"
        },
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "In-Office Teeth Whitening:",
            text: [
              "One appointment of about an hour. Your gums and any exposed root surfaces are isolated and protected, then professional-grade gel is applied in stages under supervision. Suited to patients with a date to work toward, or anyone who would rather not manage trays at home. Some sensitivity for a day or two afterwards is common and settles."
            ]
          },
          {
            image: images.dentistWithPatient,
            title: "Take-Home Whitening Kits:",
            text: [
              "Custom trays made from a digital scan of your teeth, fitted closely so the gel stays on the teeth rather than leaking onto the gums. Worn for a set period each day across roughly two weeks. Many patients find the gradual approach more comfortable, and you keep the trays for occasional top-ups later."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "What to Expect During the Whitening Process",
        text: [
          "Four stages, whichever option you choose. The first one is the reason to have this done professionally rather than from a box."
        ],
        link: {
          label: "Schedule your consultation",
          href: "/appointment/"
        },
        items: [
          {
            title: "Consultation",
            text: "Dr. Shir examines your teeth and gums, records your starting shade, and checks for decay, leaking restorations and gum recession. Any of those need addressing before whitening, and existing crowns or veneers in your smile line are discussed at this point since they will not change colour.",
            icon: images.stepConsultation
          },
          {
            title: "Preparation",
            text: "Your teeth are cleaned so the gel contacts the enamel rather than surface deposits, and your gums are isolated and protected. For take-home treatment, a digital scan is taken so the trays fit closely.",
            icon: images.stepPreparation
          },
          {
            title: "Whitening Treatment",
            text: "Professional-grade gel is applied in stages over about an hour in the office, or worn in your trays at home across roughly two weeks. Either way the strength is matched to how your teeth respond rather than pushed to the maximum.",
            icon: images.stepTreatment
          },
          {
            title: "Aftercare Guidance",
            text: "Written aftercare covering what to avoid in the first forty-eight hours while the enamel is more porous, how to manage any sensitivity, and how to keep the result. Coffee, tea, red wine and tobacco are the usual culprits.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "What to Expect from Professional Whitening",
        text: [
          "Most patients see a clear improvement, and how much depends on what is causing the discolouration. Surface and age-related staining responds well. Staining from within the tooth, whether from tetracycline, trauma or ageing, responds far less, and where that is the cause we will tell you before you spend anything rather than after. Results are shaped to look bright and healthy rather than uniformly white, since teeth that are lighter than the whites of your eyes read as artificial."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Teeth Whitening",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "How much whiter will my teeth get?",
            answer: [
              "**It varies by patient and by what is causing the discolouration, which is why we record your starting shade and review against it rather than promising a number. Surface and age-related staining responds well. Staining from within the tooth responds far less. Dr. Shir will tell you which you have before treatment starts.**"
            ]
          },
          {
            question: "Does teeth whitening cause sensitivity?",
            answer: [
              "**Some sensitivity during or shortly after treatment is common, and it usually settles within a day or two. It is more likely where gums have receded and root surfaces are exposed, which is one of the things checked beforehand. Desensitising agents, a lower concentration, or spacing out the sessions all help, and we would rather adjust than have you push through it.**"
            ]
          },
          {
            question: "How long do whitening results last?",
            answer: [
              "**Commonly one to three years, and it depends heavily on what you drink and whether you smoke. Coffee, tea and red wine are the main causes of the colour returning. Take-home trays are kept afterwards so you can top up occasionally rather than repeat the whole treatment.**"
            ]
          },
          {
            question: "Is professional whitening better than over-the-counter products?",
            answer: [
              "**It uses stronger agents applied with your gums protected, and it follows an examination that rules out the problems that make whitening go wrong. Over-the-counter strips and gels are milder, and the generic trays sold with them let gel onto the gums, which is where most of the sensitivity complaints come from. For light surface staining, a shop product may be enough, and we will say so rather than sell you something you do not need.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Teeth Whitening in Beverly Hills | Dr. Nushin Shir, DDS",
      description: "Get a brighter smile in a single visit with professional teeth whitening that is safe for your enamel. Call our Beverly Hills office to book today."
    }
  },
  {
    slug: "dental-bonding",
    title: "Dental Bonding",
    category: "cosmetic-dentistry",
    order: 6,
    sections: [
      {
        _type: "hero",
        heading: "Dental Bonding in Beverly Hills",
        subheading: "Cosmetic Dentistry",
        text: [
          "Chips, small gaps and worn edges repaired in a single visit, usually with little or no enamel removed. The most conservative cosmetic treatment we offer, and often the right one."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What is Dental Bonding?",
        text: [
          "Dental bonding uses a tooth-coloured composite resin shaped directly onto the tooth to repair chips, cracks, uneven edges and localised discolouration, usually in one appointment. The resin is built up by hand, shaped to match the surrounding teeth, hardened with a curing light, then polished so it reflects light the way enamel does.",
          "What sets bonding apart from veneers is how little it takes away. Most bonding needs minimal or no enamel removal, which means it is reversible in a way veneers are not. It is less durable than porcelain and will need replacing sooner, and that trade-off is worth making in plenty of cases. Where bonding gets you what you want, Dr. Shir will recommend it over anything more invasive."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Benefits of Dental Bonding",
        text: ["What bonding does well, where its limits are, and how to make it last."],
        image: images.toothPolishing,
        items: [
          {
            title: "What is Dental Bonding?",
            body: [
              "A tooth-coloured composite resin applied directly to the tooth, shaped by hand, hardened with a curing light and polished. It repairs chips, cracks, uneven edges and small gaps, usually in a single visit and with little or no enamel removed."
            ]
          },
          {
            title: "Fast One-Visit Smile Enhancement",
            body: [
              "Most bonding is completed in one appointment, with no laboratory stage and no temporaries. A single chipped front tooth typically takes under an hour, and you leave with the finished result."
            ]
          },
          {
            title: "Natural-Looking Composite Resin",
            body: [
              "Modern composites come in a range of shades and translucencies, layered to match how light passes through the tooth rather than sitting on it as a flat block of colour. The result depends heavily on the layering, which is where the skill sits."
            ]
          },
          {
            title: "Minimally Invasive Treatment",
            body: [
              "The main advantage over veneers. Most bonding requires minimal or no enamel removal, and anaesthetic is often unnecessary. Because so little tooth is altered, the decision is far easier to revisit later."
            ]
          },
          {
            title: "Fix Chips, Cracks & Discoloration",
            body: [
              "Best suited to localised problems: a chipped incisal edge, a small crack, a single discoloured spot. Where discolouration covers the whole tooth or sits deep within it, whitening or veneers are usually the better route."
            ]
          },
          {
            title: "Close Small Gaps Between Teeth",
            body: [
              "Composite can be added to the sides of teeth to narrow a small space. There is a limit before the teeth start looking too wide for the face, and where the gap is larger, aligners are generally the better answer."
            ]
          },
          {
            title: "Shade Matching for Perfect Blending",
            body: [
              "The shade is selected against your own teeth in natural light before any resin is applied. If whitening is part of your plan, it is done first and the bonding matched to your new shade, since composite does not respond to whitening agents afterwards."
            ]
          },
          {
            title: "Polished, Durable & Smooth Finish",
            body: [
              "The final polish is what stops the surface picking up stain and what makes the repair blend rather than catch the eye. It is also why a non-abrasive toothpaste matters afterwards, since abrasive pastes dull the surface over time."
            ]
          },
          {
            title: "How Long Bonding Lasts",
            body: [
              "Commonly five to seven years, depending on where it is, how heavily you bite and whether you grind. Composite stains over time in a way porcelain does not, particularly with coffee, tea, red wine and tobacco. It can be polished, repaired or replaced without difficulty."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "What to Expect During the Dental Bonding Procedure",
        text: [
          "A single visit for most cases, with no laboratory stage and usually no anaesthetic. Two stages decide how the result looks."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "COMPOSITE RESIN SHADE MATCHING",
            text: [
              "The shade is selected against your own teeth in natural light before anything is applied, and the resin is layered rather than placed as a single block so light passes through it the way it does through enamel. If whitening is part of your plan, it happens first, because composite will not lighten afterwards."
            ]
          },
          {
            image: images.dentistsTreatingPatient,
            title: "CURING, POLISHING & FINAL ADJUSTMENTS",
            text: [
              "A curing light hardens the resin, then the surface is shaped and polished to match the texture and sheen of the teeth either side. Your bite is checked and adjusted, since bonded material sitting slightly proud of the bite is what causes it to chip later."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR DENTAL BONDING",
        text: [
          "Bonding is a hand-built restoration, so the result depends on the person doing it rather than on a laboratory. Dr. Shir will also tell you when bonding is the wrong tool for what you want."
        ],
        items: [
          {
            title: "Experience in Cosmetic Dentistry",
            text: "More than thirty years of restorative and aesthetic practice. Bonding is shaped and layered by hand at the chairside, which makes it one of the treatments where experience shows most clearly.",
            icon: images.stepConsultation
          },
          {
            title: "Personalized Care",
            text: "Time taken to understand what is bothering you before deciding how to fix it. Sometimes the answer is a single bonded edge, and sometimes the honest answer is that bonding will not hold up in your case.",
            icon: images.stepPreparation
          },
          {
            title: "Quality Materials",
            text: "Composite resins selected for how they handle light and hold their polish, layered in shades and translucencies matched to your own teeth rather than applied as one flat colour.",
            icon: images.stepTreatment
          },
          {
            title: "Conservative by Default",
            text: "We remove as little tooth structure as the situation allows. Where bonding achieves what you want, we will not recommend veneers, and where it will not last in your bite, we will say so.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "THE MOST CONSERVATIVE COSMETIC OPTION",
        text: [
          "If a chipped edge, a small gap or a worn front tooth is what bothers you, bonding often solves it in one appointment with almost no tooth removed. It is less durable than porcelain and will need attention sooner, and for many patients that is a fair trade for keeping their own enamel intact. Book a consultation with Dr. Shir and find out whether bonding is enough for what you want to change."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT DENTAL BONDING",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "How long does dental bonding last?",
            answer: [
              "Commonly five to seven years, depending on where it is, how heavily you bite and whether you grind. Composite also picks up stain over time in a way porcelain does not, particularly from coffee, tea, red wine and tobacco. It can be polished, repaired or replaced straightforwardly, which is part of what makes it a low-commitment option."
            ]
          },
          {
            question: "Is dental bonding better than veneers?",
            answer: [
              "Neither is better, they suit different situations. Bonding is faster, less expensive, and removes almost no tooth, which makes it the right answer for localised chips and small gaps. Veneers last longer, resist staining better, and change colour and shape across the whole tooth, at the cost of a thin layer of enamel that does not grow back. Dr. Shir will tell you which fits your case."
            ]
          },
          {
            question: "Does dental bonding hurt?",
            answer: [
              "Usually there is nothing to feel, and most bonding needs no anaesthetic at all because so little tooth is altered. Where a chip extends close to the nerve or decay is being removed at the same time, local anaesthetic is used. Some mild sensitivity for a day or two afterwards is possible and settles."
            ]
          },
          {
            question: "Will bonding stain over time?",
            answer: [
              "Composite is more porous than porcelain, so it picks up stain gradually from coffee, tea, red wine and tobacco. A good final polish slows it considerably, as does using non-abrasive toothpaste. When it does dull, it can often be re-polished rather than replaced."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dental Bonding - Beverly Hills Dental",
      description: "Chips, small gaps and worn edges repaired in a single visit, usually with little or no enamel removed. The most conservative cosmetic treatment we offer, and"
    }
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    category: "cosmetic-dentistry",
    order: 7,
    sections: [
      {
        _type: "hero",
        heading: "Clear Aligners in Beverly Hills",
        subheading: "Cosmetic Dentistry",
        text: [
          "Straighten your teeth with a series of removable clear aligners, planned digitally from a scan taken in this office. No brackets, no wires, and you can see the projected result before you start."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What Are Clear Aligners?",
        text: [
          "Clear aligners are a series of thin, removable trays worn over the teeth, each one shaped slightly differently from the last. Worn in sequence, they move teeth gradually into a planned position. You take them out to eat and to clean your teeth, which is the main practical difference from fixed braces, and it is why they suit adults who would rather not spend a year with brackets.",
          "The plan starts with a digital scan of your teeth taken here. From that, the full sequence of movements is mapped out before you receive a single tray, so you can see where your teeth are starting and where the plan expects them to finish. Aligners suit mild and moderate crowding, spacing and rotation well. Complex cases involving significant bite correction may need fixed braces or a specialist referral, and Dr. Shir will tell you at the consultation rather than after you have committed."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "CLEAR ALIGNERS: WHAT TO KNOW",
        text: ["What aligners do well, what they do not, and what treatment actually asks of you."],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Removable and Discreet",
            body: [
              "Aligners are taken out to eat, drink anything other than water, and clean your teeth. They are clear and sit close to the teeth, so most people do not notice them in conversation, though they are not entirely undetectable and we would rather say so."
            ]
          },
          {
            title: "Digitally Planned From Day One",
            body: [
              "A digital scan of your teeth is taken here, and the full sequence of movements is planned before any tray is made. You see the projected end position at the outset rather than finding out as you go."
            ]
          },
          {
            title: "Suited to Mild and Moderate Cases",
            body: [
              "Crowding, spacing, and mild rotation respond well. Significant bite discrepancies, severely rotated teeth and complex jaw relationships often need fixed braces or a specialist. That assessment happens before you commit to anything."
            ]
          },
          {
            title: "Wear Time Is the Whole Treatment",
            body: [
              "Aligners work for the hours they are in. Around twenty to twenty-two hours a day is what most plans require, which means wearing them overnight and through most of the day. Treatment that falls short of this stalls, and no amount of trays will compensate."
            ]
          },
          {
            title: "No Food Restrictions",
            body: [
              "Because you remove them to eat, nothing is off the menu. Fixed braces rule out a long list of foods for the duration. This is one of the more practical everyday advantages."
            ]
          },
          {
            title: "Easier Cleaning",
            body: [
              "You brush and clean between your teeth normally, with nothing in the way. With fixed braces, plaque collects around the brackets, and decalcification marks around them are a well-known outcome of poor cleaning during treatment."
            ]
          },
          {
            title: "Attachments and Refinements",
            body: [
              "Small tooth-coloured attachments are often bonded to some teeth to give the aligners something to grip, and they are removed at the end. Refinement trays at the finish are common rather than a sign anything went wrong, and they fine-tune the last small movements."
            ]
          },
          {
            title: "Comfort and Adjustment",
            body: [
              "Each new tray feels tight for a day or two, which is the sensation of the teeth being moved. Speech can be slightly affected for the first few days and settles. Most patients describe it as manageable rather than painful."
            ]
          },
          {
            title: "Retainers Hold the Result",
            body: [
              "Teeth drift back toward their old positions without retention, and this is the single most common reason results are lost. A retainer at the end is part of the treatment rather than an optional extra, and nightly wear long term is what keeps the result."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "HOW CLEAR ALIGNER TREATMENT WORKS",
        text: ["Two stages. Everything is planned and shown to you before the first tray is made."],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "CONSULTATION & DIGITAL PLANNING",
            text: [
              "Dr. Shir assesses your teeth, gums and bite, and takes a digital scan here in the office. Gum health comes first, since moving teeth through inflamed tissue causes problems. From the scan, the full sequence of movements is planned and the projected result is shown to you, along with the expected number of trays and the timeline, before you decide anything."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "WEARING YOUR ALIGNERS & REVIEWS",
            text: [
              "You move through the trays in sequence, each worn for the period your plan sets, around twenty to twenty-two hours a day. Review appointments check that the teeth are tracking as planned and that the aligners are seating fully. Where a tooth is lagging, the plan is adjusted. At the end, attachments are removed and a retainer is fitted."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR CLEAR ALIGNERS",
        text: [
          "Aligner treatment is only as good as the planning behind it and the reviews during it. Both happen here."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Scanned and Planned In-House",
            text: "A digital scan taken in this office rather than an impression tray, and a treatment plan you see before starting. No guesswork about where the teeth are expected to finish.",
            icon: images.stepConsultation
          },
          {
            title: "Honest About Suitability",
            text: "Aligners are not right for every case. Where crowding is significant or the bite needs correcting, Dr. Shir will tell you that at the consultation and explain what would work instead.",
            icon: images.stepPreparation
          },
          {
            title: "Monitored Throughout",
            text: "Review appointments confirm the teeth are actually tracking to the plan. Aligner cases go wrong quietly, and catching a tooth that is not moving early is far easier than correcting it at the end.",
            icon: images.stepTreatment
          },
          {
            title: "Planned With the Whole Smile in Mind",
            text: "Where whitening, bonding or veneers are also part of what you want, straightening usually comes first. Sequencing that properly is what stops work having to be redone.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "SEE YOUR PLAN BEFORE YOU START",
        text: [
          "A consultation and a digital scan will tell you whether clear aligners suit your case, roughly how long treatment would take, and what the projected result looks like. If aligners are not the right tool for your teeth, you will hear that too. You leave with a written plan covering the sequence, the timeline and the cost, and no pressure to begin."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT CLEAR ALIGNERS",
        text: ["The questions patients ask most often before starting treatment."],
        items: [
          {
            question: "How long does clear aligner treatment take?",
            answer: [
              "**Most cases run somewhere between six and eighteen months, and the range is wide because it depends entirely on how far the teeth need to move. Mild spacing or crowding can finish in six months. More involved cases take longer. Your plan gives an expected number of trays and a timeline before you start, and wearing the aligners for the hours the plan requires is what keeps you on it.**"
            ]
          },
          {
            question: "Are clear aligners as effective as braces?",
            answer: [
              "**For mild and moderate crowding, spacing and rotation, they are a well-established treatment and they work. For significant bite correction, severely rotated teeth or complex jaw relationships, fixed braces still do things aligners cannot. The honest answer depends on your case, and that is what the consultation determines.**"
            ]
          },
          {
            question: "Do clear aligners hurt?",
            answer: [
              "**Each new tray feels tight for a day or two, which is the sensation of teeth being moved, and most patients describe it as pressure rather than pain. Speech can be slightly affected for the first few days and settles. Over-the-counter pain relief covers it for anyone who needs it.**"
            ]
          },
          {
            question: "Will I need a retainer afterwards?",
            answer: [
              "**Yes, and this is not a detail. Teeth drift back toward their previous positions without retention, and losing a straightened result for want of wearing a retainer is the most common disappointment in orthodontics. A retainer is part of the treatment plan from the start, and long-term nightly wear is what holds the result.**"
            ]
          },
          {
            question: "Can I whiten my teeth while wearing aligners?",
            answer: [
              "**Most patients are better off waiting until the teeth have finished moving, since the final positions are what you will be whitening. Dr. Shir will advise on timing at your reviews. Where whitening, bonding or veneers are part of the plan, straightening usually comes first so the shade and shape are matched to the finished position.**"
            ]
          },
          {
            question: "What happens if I lose a tray?",
            answer: [
              "**Tell us as soon as you notice. Depending on how far through that tray you were, you may be asked to go back to the previous one or move forward to the next while a replacement is arranged. Do not simply leave a gap in wear, because the teeth begin drifting within days.**"
            ]
          },
          {
            question: "How much do clear aligners cost in Beverly Hills?",
            answer: [
              "**Cost depends on how far the teeth need to move and how many trays your plan calls for, so a figure only means something once your case has been assessed. You receive a written plan at the consultation setting out the sequence, the timeline and the total cost, with no obligation to start.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Clear Aligners - Beverly Hills Dental",
      description: "Straighten your teeth with a series of removable clear aligners, planned digitally from a scan taken in this office. No brackets, no wires, and you can see"
    }
  },
  {
    slug: "dental-fillings",
    title: "Dental Fillings",
    category: "restorative-dentistry",
    order: 8,
    sections: [
      {
        _type: "hero",
        heading: "Dental Fillings in Beverly Hills",
        subheading: "Dental Fillings",
        text: [
          "Tooth-coloured fillings that bond to your own tooth structure, placed conservatively so as little healthy enamel is removed as the situation allows."
        ],
        image: images.patientSmilingChair,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Metal-Free Fillings That Bond to the Tooth",
        text: [
          "Dental fillings repair teeth affected by decay, fracture or wear. We place composite resin and ceramic fillings only, both of which bond chemically to the remaining tooth. That matters more than appearance. Amalgam had to be mechanically locked into the tooth, which meant cutting away healthy structure to create the shape that would hold it. A bonded filling does not, so the preparation stays limited to the damage itself. Composite is also placed in layers and cured as it goes, which lets the shape and shade be built to match the tooth rather than approximated."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Signs You Need a Dental Filling",
        text: [
          "Decay is often well established before it becomes uncomfortable. These are the signs worth acting on, and what treating them early protects."
        ],
        image: images.patientSmilingMirror,
        items: [
          {
            title: "Tooth Sensitivity",
            body: [
              "Discomfort or a sharp sensation with something hot, cold or sweet can indicate decay that has reached the dentine beneath the enamel. Sensitivity that settles within seconds is usually manageable. Pain that lingers for minutes suggests the nerve is involved and needs assessing sooner."
            ]
          },
          {
            title: "Visible Holes or Dark Spots",
            body: [
              "A visible hole, a dark shadow or a spot that catches your tongue is decay that has already broken through the surface. At that stage a filling is the appropriate treatment, and waiting only means more tooth is lost before it is placed."
            ]
          },
          {
            title: "Pain When Biting or Chewing",
            body: [
              "Discomfort on one specific tooth under pressure can point to decay undermining a cusp, or to a crack. Either way it warrants an examination, because a cusp that fractures turns a filling into a crown."
            ]
          },
          {
            title: "Chipped or Worn Teeth",
            body: [
              "Chips and worn edges can be rebuilt with composite in most cases, restoring the shape without preparing the whole tooth. Where the wear is caused by grinding, that needs addressing alongside or the same forces will act on the new filling."
            ]
          },
          {
            title: "Rough or Uneven Edges",
            body: [
              "A rough edge you keep catching with your tongue often marks the boundary of a failing older restoration or a chip. Both are straightforward to repair, and both let bacteria in if left."
            ]
          },
          {
            title: "Restores Tooth Function",
            body: [
              "A filling returns the tooth to its proper shape so it meets the opposing tooth correctly. The bite is checked and adjusted afterwards, since a filling sitting slightly high is a common cause of soreness and later fracture."
            ]
          },
          {
            title: "Enhances Aesthetics",
            body: [
              "Composite is shaded against your own teeth and layered rather than placed as one flat colour, so a repair on a front tooth is not obvious. Old metal fillings can also be replaced with tooth-coloured material where you would rather they were not visible."
            ]
          },
          {
            title: "Prevents Further Decay",
            body: [
              "Decay does not stop on its own. Removing it and sealing the tooth stops the process at that site, and treating it while the cavity is small is what keeps the treatment a filling rather than a crown or a root canal."
            ]
          },
          {
            title: "Long-Lasting Results",
            body: [
              "Composite fillings commonly serve for five to ten years and often longer, depending on their size, where they sit and how heavily you bite. Ceramic lasts longer under heavy chewing load. Both are checked at every routine visit."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Our Dental Filling Materials",
        text: [
          "Two materials, chosen by the size of the cavity, where the tooth sits and how much chewing load it takes. We do not place amalgam."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Composite Resin:",
            text: [
              "A tooth-coloured material bonded directly to the tooth and built up in layers, cured as it goes. Suited to small and moderate cavities and to repairs on front teeth, where the shade and translucency can be matched closely. Placed in a single visit."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "Ceramic Fillings:",
            text: [
              "Durable and stain-resistant, and better suited to larger cavities and to back teeth under heavy chewing pressure. Where a cavity is too large for composite but the tooth does not warrant a full crown, a ceramic inlay or onlay covers only the part that needs covering."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Why Patients Choose Us for Dental Fillings",
        text: [
          "A filling is a small procedure where the details decide how long it lasts: how much tooth is removed, how well it bonds, and whether the bite is adjusted properly afterwards."
        ],
        items: [
          {
            title: "Expertise and Experience",
            text: "More than thirty years of restorative practice. Composite is layered and shaped by hand at the chairside, which makes it one of the treatments where experience shows most clearly.",
            icon: images.stepConsultation
          },
          {
            title: "Advanced Technology",
            text: "Digital X-rays to find decay early at a lower radiation dose, and a soft tissue laser where tissue needs managing around the margin. Ozone is used as an adjunct to reduce bacteria in the prepared cavity before it is sealed.",
            icon: images.stepPreparation
          },
          {
            title: "Patient-Centered Care",
            text: "Unhurried appointments, thorough anaesthesia, and sedation available for anyone anxious. Your bite is checked and refined before you leave rather than at a follow-up.",
            icon: images.stepTreatment
          },
          {
            title: "Metal-Free Materials",
            text: "Composite and ceramic only. Both bond to the tooth, which means less healthy structure is removed than amalgam required, and neither leaves a dark line at the margin as it ages.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Treat Decay While It Is Still a Filling",
        text: [
          "Decay caught early is a filling. Left alone it becomes a crown, and then a root canal. If you have sensitivity, a rough edge, or a spot you have been meaning to have looked at, an examination and a digital X-ray will tell you where you stand. Book an appointment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69,
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Dental Fillings",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "How long do dental fillings last?",
            answer: [
              "**It depends on the material, the size of the filling, where it sits and how heavily you bite. Composite fillings commonly serve five to ten years and often longer. Ceramic generally lasts longer under heavy chewing load. Daily brushing, cleaning between the teeth and regular checkups do more for longevity than the material choice does.**"
            ]
          },
          {
            question: "Are dental fillings painful?",
            answer: [
              "**The tooth is thoroughly anaesthetised, so the procedure itself is comfortable for most patients, and sedation is available for anyone anxious. Some sensitivity to temperature for a few days afterwards is normal and settles. If your bite feels high or discomfort persists beyond a week, come back and we will adjust it.**"
            ]
          },
          {
            question: "Are dental fillings covered by insurance?",
            answer: [
              "**Fillings are one of the treatments most plans do cover, though the level varies and some plans pay less for tooth-coloured material on back teeth than for amalgam. You receive a written figure before treatment begins regardless of what your plan contributes.**"
            ]
          },
          {
            question: "What happens if I delay getting a filling?",
            answer: [
              "**Decay continues, and the treatment escalates with it. A small cavity needs a filling. The same cavity left for a year may need an onlay or a crown. Once decay reaches the nerve, root canal treatment becomes necessary and the tooth needs full coverage afterwards. Treating it early is both less involved and considerably less expensive.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dental Fillings - Beverly Hills Dental",
      description: "Tooth-coloured fillings that bond to your own tooth structure, placed conservatively so as little healthy enamel is removed as the situation allows."
    }
  },
  {
    slug: "dental-bridges",
    title: "Dental Bridges",
    category: "restorative-dentistry",
    order: 9,
    sections: [
      {
        _type: "hero",
        heading: "Dental Bridges in Beverly Hills",
        subheading: "Dental Bridges",
        text: [
          "Replace one or more missing teeth with a fixed bridge, custom made and shaded to your own teeth. A non-surgical option, completed in a few weeks rather than a few months."
        ],
        image: images.patientSmilingChair,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Closing the Gap Without Surgery",
        text: [
          "A bridge replaces one or more missing teeth by anchoring the replacement to the teeth on either side, or to implants. Those anchor teeth are prepared for crowns, which is the trade-off worth understanding before you choose: enamel removed for a bridge does not grow back. Where the neighbouring teeth already need crowning, that cost has effectively been paid and a bridge often makes very good sense. Where they are sound and untouched, an implant leaves them alone entirely. Dr. Shir will set out both options against your specific situation rather than default to one."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Types of Dental Bridges & Their Benefits",
        text: [
          "Four types of bridge and what each one suits, followed by what a bridge does for you beyond filling the gap."
        ],
        image: images.dentalTeamOk,
        items: [
          {
            title: "Traditional Dental Bridges",
            body: [
              "The most common type, used where there are healthy teeth on both sides of the gap. Crowns are placed on both neighbours and the replacement tooth is fixed between them. Made from all-ceramic material here, so there is no metal margin to show as the gum recedes over the years."
            ]
          },
          {
            title: "Cantilever Dental Bridges",
            body: [
              "Anchored to a tooth on one side of the gap only, used where there is no suitable tooth on the other side. Because all the chewing force is carried by a single anchor, this design is used selectively and generally not in areas taking heavy load."
            ]
          },
          {
            title: "Maryland Bonded Bridges",
            body: [
              "A replacement tooth held by thin wings bonded to the backs of the neighbouring teeth. Far more conservative than a traditional bridge, since almost no enamel is removed. Best suited to front teeth, where the chewing forces are lighter."
            ]
          },
          {
            title: "Implant-Supported Bridges",
            body: [
              "Where several teeth in a row are missing, implants can carry the bridge instead of natural teeth. Nothing is prepared, no neighbouring teeth are involved, and the implants help maintain the bone at the site. It takes longer and involves surgery, and for many patients it is the more durable answer."
            ]
          },
          {
            title: "Restores Your Smile",
            body: [
              "A gap is filled with a replacement shaded and shaped to your own teeth. The bridge is made from a digital scan taken here, so the fit at the margin is accurate and the shape follows your existing teeth rather than a stock form."
            ]
          },
          {
            title: "Improves Chewing and Speaking",
            body: [
              "Missing teeth shift chewing onto the other side and can affect certain sounds in speech. A fixed bridge distributes the load properly again, and most patients stop thinking about it within a few weeks."
            ]
          },
          {
            title: "Prevents Teeth Shifting",
            body: [
              "Teeth either side of a gap gradually tip into it, and the opposing tooth drifts down out of its socket. That movement changes the bite and makes later treatment more complicated. Filling the space stops it."
            ]
          },
          {
            title: "Supports Facial Structure",
            body: [
              "Bridges maintain the position and support of the teeth around them. They do not maintain the bone where the root used to be, since nothing replaces the root itself, and that is one of the genuine differences between a bridge and an implant."
            ]
          },
          {
            title: "A Durable, Long-Lasting Solution",
            body: [
              "Bridges commonly serve ten to fifteen years and often longer. What ends most of them is decay at the margin where the crown meets the anchor tooth, which is why cleaning underneath the bridge daily matters more than anything else you do for it."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Ideal Candidates for Dental Bridges",
        text: [
          "Bridges suit patients with one or more missing teeth who want a fixed replacement without surgery. Which type depends on the teeth either side of the gap."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Traditional Bridge:",
            text: [
              "Suited to patients with healthy teeth on both sides of the gap, particularly where those teeth already need crowning. The anchors are prepared and the replacement fixed between them, with the whole thing completed in a few weeks and no surgery involved."
            ]
          },
          {
            image: images.hygienistTreatingPatient,
            title: "Implant-Supported Bridge:",
            text: [
              "Suited to larger gaps and to patients whose neighbouring teeth are sound and worth leaving alone. Implants carry the bridge instead of natural teeth, and they help maintain the bone at the site. Longer treatment time, and generally the more durable option where the bone allows it."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Why Patients Choose Us for Dental Bridges",
        text: [
          "A bridge succeeds or fails at the margins, where the crowns meet the anchor teeth. Fit and finish are what decide how long it lasts."
        ],
        items: [
          {
            title: "Expertise You Can Count On",
            text: "More than thirty years of restorative practice. Bridges are planned around the long-term health of the anchor teeth, not just around filling the gap.",
            icon: images.stepConsultation
          },
          {
            title: "State-of-the-Art Technology",
            text: "Digital scanning rather than impression trays, so the bridge is made from an accurate record of your teeth. Cone beam imaging where implant support is being considered.",
            icon: images.stepPreparation
          },
          {
            title: "Personalized Care",
            text: "Both options presented with their trade-offs, including the enamel a traditional bridge requires. If an implant is the better answer for your situation, we will tell you that.",
            icon: images.stepTreatment
          },
          {
            title: "Metal-Free Materials",
            text: "All-ceramic bridges, so there is no dark metal margin appearing at the gum line as the tissue recedes over the years.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Ready to Close the Gap?",
        text: [
          "A missing tooth is not just a cosmetic problem. The teeth either side tip into the space and the bite changes over time. An examination will tell you whether a bridge or an implant suits your situation better, and you will leave with a written plan covering both. Book a consultation with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "left",
        overlayOpacity: 0.69,
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Dental Bridges",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "How long do dental bridges last?",
            answer: [
              "**Commonly ten to fifteen years, and often longer with good care. What ends most bridges is decay at the margin where a crown meets the anchor tooth, so cleaning underneath the bridge every day with floss threaders or interdental brushes matters more than anything else. We check the margins at every routine visit.**"
            ]
          },
          {
            question: "Is getting a dental bridge painful?",
            answer: [
              "**The anchor teeth are thoroughly anaesthetised while they are prepared, so the appointment is comfortable for most patients, and sedation is available. Some sensitivity while wearing the temporary bridge is common and settles once the final one is fitted.**"
            ]
          },
          {
            question: "What types of dental bridges do you offer?",
            answer: [
              "**Traditional bridges anchored to crowns on both sides, cantilever bridges anchored on one side, Maryland bonded bridges held by thin wings on the backs of the neighbouring teeth, and implant-supported bridges. Which suits you depends on the size of the gap, the condition of the teeth either side, and how much of your own tooth structure you want to preserve.**"
            ]
          },
          {
            question: "Are dental bridges covered by insurance?",
            answer: [
              "**Bridges are usually treated as restorative rather than cosmetic, so most plans contribute, though the level varies and some apply waiting periods. You receive a written figure before treatment begins, and financing is available to spread the cost across monthly payments.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dental Bridges - Beverly Hills Dental",
      description: "Replace one or more missing teeth with a fixed bridge, custom made and shaded to your own teeth. A non-surgical option, completed in a few weeks rather than a"
    }
  },
  {
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    category: "restorative-dentistry",
    order: 10,
    sections: [
      {
        _type: "hero",
        heading: "Tooth Extractions in Beverly Hills",
        subheading: "Tooth Extractions",
        text: [
          "Removal planned in 3D, carried out gently, and finished with site preservation so your options for replacement stay open. Dr. Shir will also tell you when a tooth others have written off can still be saved."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "The Last Option, Done Properly",
        text: [
          "In a practice built on preserving natural tooth structure, extraction is genuinely the last resort. We will tell you plainly when a tooth is restorable and when it is not. Where removal is the right answer, two things separate a well-managed extraction from a routine one. The first is planning: a cone beam CT scan shows root shape, how close the roots sit to the sinus or the nerve canal, and how dense the surrounding bone is. Surprises are what turn straightforward extractions into difficult ones. The second is what happens to the socket afterwards, because bone begins resorbing as soon as the root leaves it."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Our Comprehensive Tooth Extraction Services",
        text: ["The types of extraction we carry out, and the situations that call for one."],
        image: images.extractionForceps,
        items: [
          {
            title: "Simple Tooth Extractions",
            body: [
              "For a tooth fully visible above the gum with accessible root anatomy. After thorough anaesthesia the tooth is gently loosened within its socket and removed. A short appointment, and most patients are comfortable afterwards on over-the-counter pain relief."
            ]
          },
          {
            title: "Surgical Tooth Extractions",
            body: [
              "For teeth broken at or below the gum line, roots that are curved or fused to bone, and any case where access requires a small incision. The tooth may be sectioned into pieces to remove it without stressing the surrounding bone, which sounds more involved and is actually gentler on the site."
            ]
          },
          {
            title: "Emergency Tooth Extractions",
            body: [
              "Where a tooth is causing severe pain or there is active infection with swelling, we will see you promptly. In some cases the right immediate step is draining and settling the infection first, then removing the tooth once the tissue is calmer, and that decision is made on the day."
            ]
          },
          {
            title: "Severe Tooth Pain",
            body: [
              "Persistent, throbbing pain usually indicates the nerve tissue inside the tooth is involved. That does not automatically mean extraction. Root canal treatment saves many of these teeth, and we will assess whether yours is restorable before recommending removal."
            ]
          },
          {
            title: "Decay or Infection",
            body: [
              "Decay that has consumed most of the crown and extends deep beneath the gum leaves nothing to build on. Where a root canal and crown could still save the tooth, that is what we recommend. Where it cannot, keeping the tooth simply maintains a source of infection."
            ]
          },
          {
            title: "Swelling or Abscess",
            body: [
              "A tender swelling beside a tooth, or a bump on the gum that discharges and returns, indicates infection draining through the bone. This needs prompt attention. Antibiotics may settle the surrounding tissue temporarily but do not address the source."
            ]
          },
          {
            title: "Loose Teeth",
            body: [
              "When periodontal disease has destroyed the bone supporting a tooth to the point that it moves noticeably, the foundation is gone. Removing it also protects the bone around its neighbours, which the ongoing infection continues to attack."
            ]
          },
          {
            title: "Overcrowding",
            body: [
              "Occasionally a tooth is removed to create the space an alignment plan requires. This is planned jointly with the orthodontic treatment and only where the result genuinely depends on it."
            ]
          },
          {
            title: "Broken or Cracked Teeth",
            body: [
              "A fracture extending beneath the gum into the root leaves no sound structure for a crown to hold and no way to seal the tooth against bacteria. These teeth are not restorable regardless of how they look above the gum, and the scan usually confirms the extent quickly."
            ]
          }
        ]
      },
      {
        _type: "textBand",
        heading: "WHAT HAPPENS TO THE SOCKET",
        text: [
          "Bone begins resorbing as soon as a root is removed, and the greatest loss happens in the first few months. Where an implant is planned or possible later, grafting the socket at the time of extraction maintains the bone volume and the gum contour that implant will depend on. This is the step most commonly skipped elsewhere, and it is the one that decides how straightforward, and how natural-looking, the eventual replacement will be. The socket is also treated with ozone to reduce bacteria, which supports clean healing."
        ],
        tone: "light"
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR TOOTH EXTRACTIONS",
        text: ["An extraction is the beginning of the next stage, and it is planned that way here."],
        items: [
          {
            title: "30+ Years of Experience",
            text: "More than three decades of restorative and surgical practice. Dr. Shir will tell you honestly whether a tooth can be saved before recommending removal, and a meaningful number of teeth condemned elsewhere turn out to be restorable.",
            icon: images.stepConsultation
          },
          {
            title: "Comfort-First Approach",
            text: "Thorough anaesthesia, unhurried appointment time reserved for you, and sedation available where anxiety is a factor. Most patients report the anticipation was harder than the appointment itself.",
            icon: images.stepPreparation
          },
          {
            title: "State-of-the-Art Technology",
            text: "Cone beam CT imaging shows root anatomy, nerve position and sinus proximity before we begin, so the procedure holds no surprises. Ozone is used in the socket afterwards to support clean healing.",
            icon: images.stepTreatment
          },
          {
            title: "Replacement Planned Here",
            text: "Implants, bridges and partials are all provided in this office, so the removal is sequenced into a complete plan rather than leaving you with a gap and a referral.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "GET A SECOND OPINION BEFORE YOU LOSE THE TOOTH",
        text: [
          "Not every tooth recommended for extraction actually needs to come out, and we say so when we see it. If you have been told a tooth must go, an assessment with a 3D scan will tell you where you really stand. If removal is the right answer, it will be planned properly with what comes afterwards in mind. Book an appointment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Tooth Extractions",
        text: ["The questions patients ask most often before and after removal."],
        items: [
          {
            question: "Is getting a tooth extraction painful?",
            answer: [
              "**The tooth and surrounding tissue are thoroughly anaesthetised, so during the procedure you feel firm pressure and movement rather than pain. Sedation is available where anxiety makes the appointment difficult. Afterwards, expect soreness for two to three days, which over-the-counter pain relief manages for most patients. Pain that increases sharply around day three rather than fading is worth calling us about.**"
            ]
          },
          {
            question: "How long does it take to recover from a tooth extraction?",
            answer: [
              "**The gum tissue closes over the socket within one to two weeks, and most patients feel essentially normal within a week. The bone underneath continues filling and remodelling for three to six months, which is why implant timing is planned around that process rather than around how you feel.**"
            ]
          },
          {
            question: "What should I do after a tooth is extracted?",
            answer: [
              "**Soft, cool foods for the first day or two, chewing on the opposite side, and nothing requiring suction. Avoid smoking, drinking through a straw, vigorous rinsing and spitting for the first few days, since these dislodge the clot protecting the healing bone and cause a painful dry socket. You will receive written aftercare instructions covering the full timeline.**"
            ]
          },
          {
            question: "Are tooth extractions covered by insurance?",
            answer: [
              "**Extractions are usually treated as necessary rather than elective, so most plans contribute, though coverage varies and grafting is sometimes treated separately. You receive a written figure before treatment, and where the extraction is part of a larger plan involving replacement, the whole sequence is quoted together.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Tooth Extractions - Beverly Hills Dental",
      description: "Removal planned in 3D, carried out gently, and finished with site preservation so your options for replacement stay open. Dr. Shir will also tell you when a"
    }
  },
  {
    slug: "porcelain-inlays-onlays",
    title: "Porcelain Inlays & Onlays",
    category: "restorative-dentistry",
    order: 11,
    sections: [
      {
        _type: "hero",
        heading: "Porcelain Inlays and Onlays in Beverly Hills",
        subheading: "Porcelain Inlays and Onlays",
        text: [
          "A conservative alternative to a full crown. Custom porcelain that covers only the damaged part of the tooth, so more of your own structure stays where it is."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Why Not Just Put a Crown On It?",
        text: [
          "When a tooth is too damaged for a filling, the default in most practices is a crown. A crown means reducing the tooth on all sides to a stump, removing a significant amount of healthy structure to make room for it. An inlay or onlay covers only the part that actually needs covering. An inlay sits within the cusps of the tooth. An onlay extends over one or more cusps where they need protecting. Both are made from solid porcelain in a laboratory, then bonded into place, which means the restoration and the tooth work as one unit. Where a tooth can take an onlay rather than a crown, that is what Dr. Shir will recommend, because the enamel you keep is not replaceable."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "INLAYS, ONLAYS AND WHEN THEY ARE USED",
        text: [
          "What they are, when they suit a tooth better than the alternatives, and what to expect from them."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "What Is a Dental Inlay?",
            body: [
              "A custom porcelain restoration that fits within the cusps of a back tooth, replacing the central chewing surface. Used where a cavity is too large for a composite filling but the cusps themselves are sound and do not need covering."
            ]
          },
          {
            title: "What Is a Dental Onlay?",
            body: [
              "Similar to an inlay but extending over one or more cusps to protect them. Used where a cusp is cracked, undermined by decay or weakened, and needs covering rather than just filling around. Sometimes called a partial crown."
            ]
          },
          {
            title: "When a Filling Is Not Enough",
            body: [
              "Large composite fillings flex under chewing load and can leak at the margins over time. Once a cavity passes a certain size, a bonded porcelain restoration distributes force across the tooth far better and holds its margin longer."
            ]
          },
          {
            title: "Preserves More of Your Tooth",
            body: [
              "The main reason we use them. A full crown requires reducing the tooth on every surface. An inlay or onlay removes only the damaged structure plus what is needed for the restoration to bond, which can be considerably less."
            ]
          },
          {
            title: "Strengthens the Remaining Tooth",
            body: [
              "Because porcelain is bonded to the tooth rather than cemented over it, the restoration and the remaining structure function together. An onlay covering a weakened cusp reduces the risk of that cusp fracturing under load."
            ]
          },
          {
            title: "Metal-Free and Natural in Appearance",
            body: [
              "Solid porcelain, shaded to your own teeth. No metal base, so there is no grey line appearing at the gum margin as the tissue recedes over the years, and nothing that shows when you laugh."
            ]
          },
          {
            title: "Resists Staining and Wear",
            body: [
              "Porcelain holds its colour and its polish in a way composite does not. It does not pick up stain from coffee, tea or red wine, and the surface stays smooth rather than dulling over time."
            ]
          },
          {
            title: "Made From a Digital Scan",
            body: [
              "Your tooth is scanned with our intraoral scanner rather than an impression tray, so the restoration is made from an accurate digital record. The fit at the margin is what decides how long it lasts, and that is where accuracy matters most."
            ]
          },
          {
            title: "How Long They Last",
            body: [
              "Porcelain inlays and onlays commonly serve ten to fifteen years and often longer. Longevity depends on the size of the restoration, how heavily you bite, and whether you grind. Where grinding is present, a night guard is part of the plan rather than an afterthought."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "INLAY OR ONLAY: WHICH YOUR TOOTH NEEDS",
        text: [
          "The difference is how much of the tooth needs covering, and that is decided by what the examination and X-ray show rather than by preference."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "PORCELAIN INLAY:",
            text: [
              "Fits within the cusps of the tooth, replacing the chewing surface between them. Suited to a large cavity where the surrounding cusps are still strong. Less tooth is prepared than for an onlay, and considerably less than for a crown."
            ]
          },
          {
            image: images.dentistWithPatient,
            title: "PORCELAIN ONLAY:",
            text: [
              "Extends over one or more cusps to protect them. Suited to a tooth with a cracked or weakened cusp, or one that has been root treated and needs the chewing load spread across the whole tooth. It does the protective job of a crown while keeping more of your tooth intact."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR INLAYS AND ONLAYS",
        text: [
          "Most practices reach for a crown. We reach for an onlay wherever the tooth allows it, because the structure you keep cannot be put back."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Conservative by Default",
            text: "We remove what the restoration requires and no more. Where an onlay will do the job of a crown, that is what we recommend, even though it is the more demanding restoration to prepare and fit.",
            icon: images.stepConsultation
          },
          {
            title: "Digital Scanning",
            text: "An intraoral scanner rather than impression trays, so nothing sets in your mouth and the laboratory works from an accurate digital record. Fit at the margin is what decides longevity.",
            icon: images.stepPreparation
          },
          {
            title: "Metal-Free Materials",
            text: "Solid porcelain throughout, shaded to your own teeth. No metal base and no dark margin appearing at the gum line as the years pass.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of restorative practice. Preparation for an inlay or onlay is more exacting than for a crown, and the margin design is where the experience shows.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "BEFORE YOU AGREE TO A CROWN, GET A SECOND OPINION",
        text: [
          "If you have been told a tooth needs a crown, it is worth finding out whether an onlay would do the same job. Not every tooth can take one, and we will tell you honestly which yours is. Where it can, you keep structure that cannot be replaced later. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT INLAYS AND ONLAYS",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "What is the difference between an inlay, an onlay and a crown?",
            answer: [
              "An inlay sits within the cusps of the tooth. An onlay extends over one or more cusps to protect them. A crown covers the entire tooth, which means reducing it on every surface. The three represent increasing amounts of coverage and increasing amounts of tooth removed, and the right one is whichever gives adequate protection with the least preparation."
            ]
          },
          {
            question: "How long do porcelain inlays and onlays last?",
            answer: [
              "Commonly ten to fifteen years and often longer, depending on the size of the restoration, how heavily you bite and whether you grind. Porcelain resists staining and wear well. What usually ends a restoration is decay at the margin, which is why daily cleaning and regular checkups matter more than the material itself."
            ]
          },
          {
            question: "How many visits does treatment take?",
            answer: [
              "Usually two. At the first, the tooth is prepared under local anaesthetic, a digital scan is taken and a temporary is fitted. The porcelain is then made in the laboratory. At the second, it is tried in, bonded, and your bite adjusted. Around two to three weeks between appointments."
            ]
          },
          {
            question: "Are inlays and onlays covered by insurance?",
            answer: [
              "They are usually treated as restorative rather than cosmetic, so most plans contribute, though some classify them differently from crowns and the level varies. You receive a written figure before treatment begins, and financing is available."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Porcelain Inlays & Onlays - Beverly Hills Dental",
      description: "A conservative alternative to a full crown. Custom porcelain that covers only the damaged part of the tooth, so more of your own structure stays where it is."
    }
  },
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    category: "restorative-dentistry",
    order: 12,
    sections: [
      {
        _type: "hero",
        heading: "Root Canal Therapy in Beverly Hills",
        subheading: "Root Canal Therapy",
        text: [
          "Treat the infection inside the tooth and keep the tooth itself. Canal anatomy mapped in 3D where the case calls for it, and the protective crown afterwards completed in the same office."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Why Save the Tooth?",
        text: [
          "A root canal removes inflamed or infected tissue from inside the tooth, disinfects the space, and seals it so bacteria are far less able to recolonise it. The tooth keeps its root, its position in your bite, and in most cases many further years of function. The alternative is removal, and no replacement dentistry offers reproduces a natural root exactly. The procedure’s reputation belongs largely to a different era. By the time a tooth needs treatment the nerve tissue is usually inflamed or dying and pressure is building inside a sealed chamber, which is what produces the severe ache people associate with the words. The treatment is what relieves that."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "SIGNS YOU MAY NEED ROOT CANAL TREATMENT",
        text: [
          "Several of these warrant a prompt appointment rather than a routine one. If more than one applies, call rather than wait."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Persistent, Throbbing Toothache",
            body: [
              "Pain that arrives without an obvious trigger, throbs in time with your pulse, or wakes you at night suggests the nerve tissue inside the tooth is involved. Ordinary sensitivity does not behave this way."
            ]
          },
          {
            title: "Sensitivity That Lingers",
            body: [
              "A healthy tooth reacts to hot or cold and settles within seconds. Pain from a hot drink that continues for minutes afterwards is one of the more reliable indicators of irreversible inflammation inside the tooth."
            ]
          },
          {
            title: "Pain When Biting on One Tooth",
            body: [
              "Localised pain under pressure often means inflammation has extended through the root tip into the ligament holding the tooth in its socket. The tooth may also feel slightly raised, as though it meets first when you close."
            ]
          },
          {
            title: "A Single Tooth Darkening",
            body: [
              "A tooth turning grey or brown compared with its neighbours, sometimes years after an injury, suggests the nerve tissue inside has died. This warrants assessment even without pain, because infection can follow silently."
            ]
          },
          {
            title: "Swelling or a Recurring Bump on the Gum",
            body: [
              "A tender swelling beside a tooth, or a small bump that discharges and returns, usually indicates an abscess draining through the bone. This needs prompt attention rather than watchful waiting."
            ]
          },
          {
            title: "Pain That Stopped on Its Own",
            body: [
              "Pain often subsides when the nerve tissue dies. The infection does not go with it, and can continue quietly into the surrounding bone. A tooth that hurt badly and then went quiet has not recovered."
            ]
          },
          {
            title: "3D Imaging Where It Is Needed",
            body: [
              "Root anatomy varies considerably between patients and between teeth, and canals missed during treatment are a well-documented cause of later failure. Our cone beam scan shows the canal system in three dimensions where the case is complex or previously treated."
            ]
          },
          {
            title: "Why the Crown Afterwards Matters",
            body: [
              "A root treated back tooth has lost its internal blood supply and becomes more brittle over time while still taking heavy chewing loads. Full coverage with a crown or onlay distributes that load. Skipping it is a common reason a successfully treated tooth is later lost to fracture."
            ]
          },
          {
            title: "Treated and Restored Here",
            body: [
              "The root canal and the restoration that protects it afterwards are both completed by Dr. Shir in this office, in sequence. Nothing is referred out and nothing is left waiting between two providers."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "ROOT CANAL OR EXTRACTION",
        text: [
          "Where a tooth is restorable, keeping it is usually the stronger option. Where it is not, we say so plainly and plan the replacement properly."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "ROOT CANAL AND CROWN:",
            text: [
              "Keeps your natural root, which maintains bone and bite position in a way replacements only approximate. No surgery, and treatment is usually completed within two to four weeks. Suited to a tooth with enough sound structure remaining to be restored."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "EXTRACTION AND REPLACEMENT:",
            text: [
              "The right answer where the tooth is fractured below the gum line or too little structure remains to build on. It involves surgery and takes several months if an implant follows, and it usually costs more than the root canal and crown together once replacement is accounted for."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR ROOT CANAL TREATMENT",
        text: [
          "Most patients arrive dreading this appointment. The equipment, the anaesthesia and the time set aside are all aimed at changing that."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Comfort Taken Seriously",
            text: "Thorough anaesthesia, unhurried appointment time reserved for you, and sedation available. Most patients report the appointment feels similar to having a large filling placed.",
            icon: images.stepConsultation
          },
          {
            title: "3D Canal Imaging On Site",
            text: "Cone beam imaging available in this office where a case calls for it, without a separate referral or a second trip before treatment can start.",
            icon: images.stepPreparation
          },
          {
            title: "Treated and Restored In-House",
            text: "The root canal and the crown that protects it afterwards are completed by the same dentist, in the right order, with no gap where the tooth sits unprotected.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "Dr. Shir's training covers endodontics alongside restorative and cosmetic work, applied across more than three decades of practice.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "TOOTHACHE THAT WILL NOT SETTLE?",
        text: [
          "Infection inside a tooth does not resolve on its own. It progresses into the bone at the root tip, and the tooth can eventually become unrestorable, at which point removal is the only option left. Treatment carried out earlier is shorter, more comfortable and more likely to succeed. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "ROOT CANAL FAQS: YOUR QUESTIONS, ANSWERED",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "Does a root canal hurt?",
            answer: [
              "**The tooth and surrounding tissue are thoroughly anaesthetised, and most patients report the appointment feels similar to having a large filling placed. The severe pain associated with root canals is generally the infection beforehand rather than the treatment itself. Tenderness on biting for a few days afterwards is common and usually settles with over-the-counter pain relief.**"
            ]
          },
          {
            question: "How many visits does it take?",
            answer: [
              "**Often one, sometimes two. Front teeth have a single canal and are usually quicker. Molars commonly have three or four and take longer. Where infection is more extensive, a medicated dressing may be placed and the tooth completed at a second visit. Your treatment plan will set out what to expect for your tooth.**"
            ]
          },
          {
            question: "Why do I need a crown afterwards?",
            answer: [
              "**The tooth has lost its internal blood supply and tends to become more brittle over time, while back teeth continue taking heavy chewing forces daily. A crown or onlay distributes that load across the whole tooth and substantially reduces the risk of fracture. Fracture after an unrestored root canal is one of the most common reasons a treated tooth is later lost.**"
            ]
          },
          {
            question: "Should I just have the tooth removed instead?",
            answer: [
              "**Where the tooth is restorable, usually not. Extraction can appear cheaper until replacement is accounted for, and an implant or bridge generally costs more than the root canal and crown together. The natural root also maintains bone and bite position in a way replacements only approximate. Where a tooth genuinely cannot be saved, we will tell you.**"
            ]
          },
          {
            question: "How long does a treated tooth last?",
            answer: [
              "**With a proper restoration on top and good daily care, many treated teeth serve for decades. Outcomes depend on the tooth, the extent of the original infection, how soon the tooth is restored afterwards, and ongoing gum health. It needs nothing special from you beyond normal hygiene and regular checkups.**"
            ]
          },
          {
            question: "Can antibiotics clear the infection instead?",
            answer: [
              "**No. Antibiotics may settle surrounding tissue temporarily, and are sometimes prescribed alongside treatment where infection is spreading, but they cannot reliably reach bacteria inside the canal system, which has no blood supply. The infection typically returns once the course ends.**"
            ]
          },
          {
            question: "Is root canal treatment covered by insurance?",
            answer: [
              "**It is usually treated as necessary rather than elective, so most plans contribute, though the level varies and the crown afterwards may be handled separately. You receive a written figure covering the whole sequence before treatment begins, and financing is available.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Root Canal Therapy - Beverly Hills Dental",
      description: "Treat the infection inside the tooth and keep the tooth itself. Canal anatomy mapped in 3D where the case calls for it, and the protective crown afterwards"
    }
  },
  {
    slug: "wisdom-teeth-extractions",
    title: "Wisdom Teeth Extractions",
    category: "restorative-dentistry",
    order: 13,
    sections: [
      {
        _type: "hero",
        heading: "Wisdom Teeth Extractions in Beverly Hills",
        subheading: "Wisdom Teeth Extractions",
        text: [
          "Removal planned on a 3D scan taken in this office, so nerve position and root anatomy are known before we begin rather than discovered during."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Not Every Wisdom Tooth Needs to Come Out",
        text: [
          "Wisdom teeth are the last molars to arrive, usually between seventeen and twenty-five, and for many people the jaw has no room left for them. When that happens they come in at an angle, stay partly buried, or press against the tooth in front. Some cause no trouble at all and need nothing more than monitoring. The distinction matters, because removing a healthy, fully erupted wisdom tooth that is causing no problem is unnecessary surgery. Dr. Shir will tell you which yours are, based on what the imaging shows rather than on age alone."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHEN WISDOM TEETH NEED REMOVING",
        text: ["The situations that call for removal, and what the planning involves."],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Impaction Against the Tooth in Front",
            body: [
              "Where a wisdom tooth is angled forward and pressing against the second molar, it traps food and bacteria at the contact point. Decay on the back surface of that second molar is common, difficult to restore, and entirely preventable by removing the wisdom tooth."
            ]
          },
          {
            title: "Partially Erupted and Repeatedly Infected",
            body: [
              "A wisdom tooth that has broken through only partly leaves a flap of gum over it that traps bacteria. The resulting infection, called pericoronitis, causes swelling and pain, tends to recur, and rarely resolves for good on its own."
            ]
          },
          {
            title: "No Room in the Jaw",
            body: [
              "Where there is not enough space behind the second molar, the tooth cannot come through in a functional position. It will either stay buried or emerge at an angle, and neither outcome is stable long term."
            ]
          },
          {
            title: "Decay You Cannot Reach to Clean",
            body: [
              "Wisdom teeth sit at the very back of the mouth where brushing is difficult even when they are upright. Where one has decayed and access makes a filling unreliable, removal is usually the more sensible answer than restoring a tooth you cannot keep clean."
            ]
          },
          {
            title: "Cysts or Damage to Surrounding Bone",
            body: [
              "A wisdom tooth that remains buried can occasionally develop a cyst around it, which expands slowly and damages the surrounding bone and nearby roots. This is uncommon but it is one reason buried teeth are imaged rather than ignored."
            ]
          },
          {
            title: "Pain, Swelling or a Bad Taste at the Back",
            body: [
              "Recurring soreness behind the last molar, swelling in the cheek or jaw, or a persistent bad taste from that area all warrant an examination. These are the everyday symptoms patients notice before anything more serious develops."
            ]
          },
          {
            title: "Why We Scan First",
            body: [
              "The lower wisdom tooth roots often sit close to the inferior alveolar nerve, and the upper ones close to the sinus. A cone beam CT scan shows exactly how close, in three dimensions, which a flat X-ray cannot. That measurement changes how the tooth is approached."
            ]
          },
          {
            title: "When Monitoring Is the Right Answer",
            body: [
              "A wisdom tooth that is fully erupted, in a functional position, clean and causing no symptoms can often be left alone and reviewed. We do not recommend removing teeth simply because they are wisdom teeth."
            ]
          },
          {
            title: "Ozone and Clean Healing",
            body: [
              "The socket is treated with ozone after removal as an adjunct to reduce bacteria at the site, supporting clean healing alongside standard aftercare."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "SIMPLE AND SURGICAL REMOVAL",
        text: [
          "Which applies depends on how the tooth has come through and where its roots sit, and that is decided from the scan rather than on the day."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "SIMPLE EXTRACTION:",
            text: [
              "For a wisdom tooth that has erupted fully and is accessible. After thorough anaesthesia the tooth is gently loosened within its socket and removed. A short appointment, and most patients manage afterwards on over-the-counter pain relief."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "SURGICAL EXTRACTION:",
            text: [
              "For teeth that are impacted, partly buried, or have curved or spread roots. A small incision is made and the tooth is often sectioned into pieces so it can be removed without stressing the surrounding bone. Sutures are usually placed, and healing follows a predictable course with the aftercare provided."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR WISDOM TEETH REMOVAL",
        text: [
          "The nerve runs close to the lower wisdom teeth. Knowing exactly where before starting is what separates a planned procedure from a hopeful one."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "3D Planning Before Removal",
            text: "Cone beam imaging taken in this office shows root anatomy, nerve position and sinus proximity in advance. No separate imaging appointment and no referral out.",
            icon: images.stepConsultation
          },
          {
            title: "Comfort-First Approach",
            text: "Thorough anaesthesia, unhurried appointment time, and sedation available for anyone anxious. Most patients say the anticipation was harder than the procedure.",
            icon: images.stepPreparation
          },
          {
            title: "Honest About Whether It Is Needed",
            text: "Not every wisdom tooth requires removal. Where yours are stable and causing no problems, we will recommend monitoring rather than surgery.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of surgical and restorative practice, including impacted and difficult cases.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "FIND OUT WHERE YOU ACTUALLY STAND",
        text: [
          "If you have been told your wisdom teeth need to come out, or you are getting recurring soreness at the back of your jaw, an examination and a 3D scan will tell you what is really happening. Where removal is the right answer it will be planned properly. Where it is not, we will say so. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "WISDOM TEETH FAQS: YOUR QUESTIONS, ANSWERED",
        text: ["The questions patients ask most often before and after removal."],
        items: [
          {
            question: "Do I have to have my wisdom teeth removed?",
            answer: [
              "**Not automatically. A wisdom tooth that is fully erupted, in a functional position, clean and symptom-free can often be monitored rather than removed. Removal is indicated where the tooth is impacted, repeatedly infected, decayed beyond reliable repair, or damaging the tooth in front. The imaging and examination decide it, not your age.**"
            ]
          },
          {
            question: "Is wisdom tooth removal painful?",
            answer: [
              "**The area is thoroughly anaesthetised, so during the procedure you feel firm pressure and movement rather than pain, and sedation is available. Afterwards, expect soreness and swelling for several days, usually peaking around day two or three. Most patients manage on over-the-counter pain relief with the aftercare instructions provided.**"
            ]
          },
          {
            question: "How long is the recovery?",
            answer: [
              "**Most patients feel substantially better within three to five days and essentially normal within a week to ten days. Swelling and jaw stiffness are at their worst around day two or three and then settle. Surgical removals of impacted teeth take longer to recover from than simple ones.**"
            ]
          },
          {
            question: "Can all four be removed at once?",
            answer: [
              "**Often yes, and many patients prefer a single recovery period to four separate ones. It depends on how difficult each tooth is and how you feel about a longer appointment. Where the cases are complex, staging them in two visits can be the more comfortable route, and that is discussed at the consultation.**"
            ]
          },
          {
            question: "What is a dry socket and how do I avoid it?",
            answer: [
              "**A dry socket occurs when the blood clot protecting the healing bone is dislodged too early, exposing the bone and causing significant pain, usually around day three. The main risks are smoking, drinking through a straw, vigorous rinsing and spitting in the first few days. Following the aftercare carefully through the first seventy-two hours is genuinely what prevents it.**"
            ]
          },
          {
            question: "What can I eat afterwards?",
            answer: [
              "**Soft, cool foods for the first day or two, chewing away from the sites, and nothing requiring suction. Avoid anything hot, hard, crunchy or seedy for several days, since particles lodging in the socket cause problems. Most patients return to a fairly normal diet within a week.**"
            ]
          },
          {
            question: "Are wisdom teeth extractions covered by insurance?",
            answer: [
              "**They are usually treated as necessary rather than elective, so most plans contribute, though coverage varies and surgical removals are often handled differently from simple ones. You receive a written figure before treatment begins, and financing is available.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Wisdom Teeth Extractions - Beverly Hills Dental",
      description: "Removal planned on a 3D scan taken in this office, so nerve position and root anatomy are known before we begin rather than discovered during."
    }
  },
  {
    slug: "partial-dentures",
    title: "Partial Dentures",
    category: "restorative-dentistry",
    order: 14,
    sections: [
      {
        _type: "hero",
        heading: "Partial Dentures in Beverly Hills",
        subheading: "Partial Dentures",
        text: [
          "A removable replacement for several missing teeth, designed around the teeth you still have so those are protected rather than overloaded."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Replacing Some Teeth, Protecting the Rest",
        text: [
          "A partial denture replaces several missing teeth while your remaining natural teeth stay in place. It is held by the teeth around it, either with clasps or with precision attachments, and it comes out for cleaning. What separates a well-made partial from a poor one is how the design distributes force. Done properly, the load is shared across several teeth and the underlying tissue. Done badly, it rests too heavily on one or two teeth and loosens them over time, which is how patients end up losing more teeth than they started with. Dr. Shir designs the framework around the long-term survival of what remains, not just around filling the gaps."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "PARTIAL DENTURES: WHAT TO KNOW",
        text: [
          "The types available, what a partial does for you, and what to expect from living with one."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Cast Metal Framework Partials",
            body: [
              "A thin, rigid framework carrying the replacement teeth, with clasps that grip your natural teeth. The strongest and thinnest option, which means less bulk in the mouth and better force distribution. The most commonly recommended design where several teeth are missing."
            ]
          },
          {
            title: "Flexible Partials",
            body: [
              "Made from a flexible thermoplastic that adapts to the tissue with no metal clasps visible. More comfortable for some patients and more discreet at the front, though less rigid, which limits how well it distributes chewing force across the arch."
            ]
          },
          {
            title: "Acrylic Partials",
            body: [
              "A simpler design in acrylic, often used as a temporary or transitional appliance while tissue heals after extractions, or while a longer treatment plan is being carried out. Less durable than a cast framework and not intended as a long-term solution."
            ]
          },
          {
            title: "Precision Attachment Partials",
            body: [
              "Instead of visible clasps, the partial connects to crowns on your natural teeth through concealed attachments. More discreet and generally more stable, though it requires crowning the supporting teeth, which is a larger commitment."
            ]
          },
          {
            title: "Protecting Your Remaining Teeth",
            body: [
              "Teeth either side of a gap tip into it over time and the opposing tooth drifts down. A partial holds everything in position, and a well-designed one spreads chewing force so no single tooth carries more than it should."
            ]
          },
          {
            title: "Restored Chewing and Speech",
            body: [
              "Missing back teeth shift chewing to one side and can affect certain sounds. Most patients adapt to eating with a new partial over two to three weeks, starting with softer foods cut small and building up."
            ]
          },
          {
            title: "Designed From a Digital Scan",
            body: [
              "Your mouth is scanned rather than impressed with trays where the case allows it, so the framework fits the tissue and the teeth accurately. Fit is what decides whether a partial is comfortable or a constant irritation."
            ]
          },
          {
            title: "The Adjustment Period Is Normal",
            body: [
              "New partials feel bulky, increase saliva, and can affect speech for the first week or two. Sore spots are expected and are adjusted at review appointments. This settles, and the adjustments are part of treatment rather than a sign anything is wrong."
            ]
          },
          {
            title: "Relines and Long-Term Care",
            body: [
              "The bone and gum underneath change shape gradually after teeth are lost, so a partial that fitted well will loosen over the years. Relining restores the fit without remaking the whole appliance, and it is usually needed every few years."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "PARTIAL DENTURE OR FIXED REPLACEMENT",
        text: [
          "A partial is not the only way to replace several missing teeth, and it is worth understanding the alternatives before deciding."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "REMOVABLE PARTIAL DENTURE:",
            text: [
              "No surgery, a shorter treatment time of roughly four to eight weeks, and the lowest cost of the options. It replaces several teeth across the arch at once, including gaps that are far apart, which a bridge cannot do. It comes out for cleaning and needs relining as the tissue changes."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "IMPLANTS OR A FIXED BRIDGE:",
            text: [
              "Fixed in place, so nothing moves while you eat and nothing comes out at night. Implants also help maintain the bone at the site, which a partial does not. Both take longer, and implants involve surgery. Where bone volume, health or budget rule those out, a partial is a sound choice rather than a compromise."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR PARTIAL DENTURES",
        text: [
          "A partial that is designed badly costs you teeth. The framework design is where the long-term outcome is decided."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Designed to Protect What Remains",
            text: "The framework spreads chewing force across several supporting teeth and the tissue, rather than loading one or two. That design decision is what keeps your remaining teeth where they are.",
            icon: images.stepConsultation
          },
          {
            title: "Digital Scanning",
            text: "Scanned rather than impressed where the case allows, so the fit against your tissue and teeth is accurate from the start and fewer adjustments are needed.",
            icon: images.stepPreparation
          },
          {
            title: "Adjustments Included and Expected",
            text: "Sore spots in the first weeks are normal. Review appointments to refine the fit are part of the treatment, not an added extra you have to chase.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of restorative and prosthetic practice, including complex cases where few natural teeth remain.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "A PARTIAL THAT PROTECTS YOUR REMAINING TEETH",
        text: [
          "If you are missing several teeth, the goal is not just filling the gaps. It is keeping the teeth you still have. A properly designed partial does both. Book an assessment with Dr. Shir and we will set out the options, including implants and bridges, so you can see what each one involves before deciding."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "PARTIAL DENTURE FAQS: YOUR QUESTIONS, ANSWERED",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "How long does it take to get used to a partial denture?",
            answer: [
              "Most patients adapt over two to three weeks. Early on it will feel bulky, you may produce more saliva, and certain sounds can be affected. Eating takes the longest to adjust to, so start with softer foods cut small and chew on both sides. Sore spots in the first weeks are normal and are adjusted at review appointments."
            ]
          },
          {
            question: "Will my partial denture be visible?",
            answer: [
              "It depends on the design and where the gaps are. Cast metal partials use clasps that grip the natural teeth, and these can sometimes be seen depending on their position. Flexible partials avoid visible metal, and precision attachment designs conceal the connection entirely by using crowns on the supporting teeth. We will discuss which teeth show when you smile before the design is finalised."
            ]
          },
          {
            question: "How long do partial dentures last?",
            answer: [
              "The appliance itself commonly serves five to ten years. What changes sooner is the fit, because the bone and gum underneath continue to remodel after teeth are lost. Relining restores the fit without remaking the whole partial and is usually needed every few years. Your remaining teeth also change, and if one is lost the partial can often be modified rather than replaced."
            ]
          },
          {
            question: "How do I clean a partial denture?",
            answer: [
              "Take it out and clean it over a folded towel or a basin of water, since dropping it on a hard surface is the most common way partials break. Use a denture brush and a non-abrasive cleaner rather than regular toothpaste. Clean your natural teeth thoroughly too, particularly where the clasps sit, because those contact points collect plaque and are where decay tends to start."
            ]
          },
          {
            question: "Should I wear it at night?",
            answer: [
              "Generally no. Leaving it out overnight lets the tissue underneath recover and reduces the risk of fungal infection. Store it in water or a cleaning solution so it does not dry out and distort. Where there is a specific reason to wear it overnight, we will tell you."
            ]
          },
          {
            question: "Can a partial denture be converted or upgraded later?",
            answer: [
              "Often yes. A partial can be modified to add a tooth if you lose another one, and it can serve as an interim solution while you decide about implants or plan treatment in stages. Discuss your longer-term intentions at the consultation, because they influence how the partial is designed now."
            ]
          },
          {
            question: "Are partial dentures covered by insurance?",
            answer: [
              "They are usually treated as restorative rather than cosmetic, so most plans contribute, though the level varies and some apply waiting periods or replacement intervals. You receive a written figure before treatment begins, and financing is available to spread the cost across monthly payments."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Partial Dentures - Beverly Hills Dental",
      description: "A removable replacement for several missing teeth, designed around the teeth you still have so those are protected rather than overloaded."
    }
  },
  {
    slug: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    category: "periodontic-dentistry",
    order: 15,
    sections: [
      {
        _type: "hero",
        heading: "Gum Disease Treatment in Beverly Hills",
        subheading: "Periodontal Dentistry",
        text: [
          "Treatment for every stage of gum disease, starting with the least invasive option that works. Laser therapy and ozone used alongside deep cleaning, with surgery reserved for cases that need it."
        ],
        image: images.bleedingGums,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Understanding Periodontal Disease",
        text: [
          "Gum disease ranges from early-stage gingivitis to advanced periodontitis. Gingivitis presents as red, swollen or bleeding gums and is generally reversible with thorough professional cleaning and better daily care. Left untreated it can progress to periodontitis, where the bone supporting the teeth begins to be destroyed, producing deep pockets, recession and eventually loose teeth. That bone loss is not reversible, which is why the stage you are at determines what treatment can achieve. Early detection is the difference between reversing the problem and managing it."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Periodontal Disease Treatment Options",
        text: [
          "Six treatments, ordered from least to most invasive. Most patients are treated without surgery, and that is where we always start."
        ],
        image: images.dentistPatientChat,
        items: [
          {
            title: "Scaling and Root Planing",
            body: [
              "Deep cleaning below the gum line to remove the hardened deposits driving the inflammation, and smoothing the root surfaces so the tissue can reattach. Carried out under local anaesthetic, usually across one or two appointments. This is the first-line treatment and the majority of cases respond to it."
            ]
          },
          {
            title: "Antibiotic Treatment",
            body: [
              "Where infection is more extensive, a localised antibiotic can be placed directly into a periodontal pocket after cleaning, or a course prescribed. This supports the mechanical cleaning rather than replacing it, since no antibiotic removes the deposits that cause the problem."
            ]
          },
          {
            title: "Laser Therapy",
            body: [
              "A soft tissue laser is used to treat the lining of the pocket after scaling, reducing bacteria and inflamed tissue. For many patients it is an alternative to surgical treatment, and it generally involves less bleeding and a more comfortable recovery than a scalpel approach."
            ]
          },
          {
            title: "Flap Surgery",
            body: [
              "Where pockets remain deep after non-surgical treatment, the gum is lifted back so the root surfaces can be cleaned directly, then repositioned to fit closely against the tooth. Reserved for cases that have not responded to the conservative approach."
            ]
          },
          {
            title: "Bone Grafting",
            body: [
              "Where periodontal disease has destroyed bone around a tooth, grafting material can be placed to rebuild the site and support what remains. Not every defect is suitable for grafting, and the assessment determines whether yours is."
            ]
          },
          {
            title: "Soft Tissue Grafts",
            body: [
              "Where recession has exposed root surfaces, tissue can be grafted to cover them, reducing sensitivity and protecting the softer root from decay. Also used to rebuild gum tissue that has thinned to the point where it no longer protects the tooth."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "The Treatment Process",
        text: [
          "Two phases. The first establishes exactly what stage you are at, because that determines what the treatment can realistically achieve."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "COMPREHENSIVE ASSESSMENT",
            text: [
              "A full periodontal examination measuring the pocket depth around every tooth, checking for bleeding and recession, and X-rays to assess the bone level. That gives an objective record of where you are, which is what the treatment plan is built on and what later visits are measured against."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "TREATMENT AND ONGOING MAINTENANCE",
            text: [
              "Treatment appropriate to the stage, followed by maintenance visits usually every three to four months rather than every six. Periodontal disease returns when the bacterial load builds back up, and the maintenance interval is what keeps it in check. This phase determines whether the treatment holds."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Our Approach to Periodontal Treatment",
        text: [
          "Least invasive first, measured against an objective baseline, and reviewed at intervals set by your risk rather than by a standard six-month schedule."
        ],
        items: [
          {
            title: "Comprehensive Assessment",
            text: "Pocket depths recorded around every tooth, with X-rays to assess bone level. You get a measured baseline rather than a general impression, and progress is checked against it.",
            icon: images.stepConsultation
          },
          {
            title: "Tailored Treatment Plans",
            text: "A written plan matched to your stage, whether that is scaling and root planing, laser therapy, or surgical treatment where the conservative approach has not worked.",
            icon: images.stepPreparation
          },
          {
            title: "Advanced Technology",
            text: "A soft tissue laser and ozone therapy in this office, used alongside deep cleaning. Digital imaging to assess bone levels accurately at a lower radiation dose.",
            icon: images.stepTreatment
          },
          {
            title: "Focus on Patient Comfort",
            text: "Local anaesthetic for deep cleaning as standard, with sedation available. Deep cleaning has a reputation it does not deserve when it is done with proper anaesthesia and enough time.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "WHY PATIENTS CHOOSE US FOR GUM DISEASE TREATMENT",
        text: [
          "More than thirty years of restorative practice, with gum health assessed at every routine visit rather than only when something has gone wrong. Treatment starts with the least invasive option that addresses your stage, supported by laser therapy and ozone. You receive a written plan covering the treatment and the maintenance interval afterwards, because the follow-up is what decides whether the result holds. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Gum Disease Treatment",
        text: ["The questions patients ask most often about gum disease and its treatment."],
        items: [
          {
            question: "What are the signs of gum disease?",
            answer: [
              "Red, swollen or tender gums, bleeding when you brush or clean between your teeth, persistent bad breath, receding gums, and in later stages loose teeth or a bite that feels different. Bleeding is the sign most often dismissed and the one worth acting on earliest. Gum disease is usually painless until it is advanced, so waiting for discomfort means waiting too long."
            ]
          },
          {
            question: "Is gum disease treatment painful?",
            answer: [
              "Deep cleaning is carried out under local anaesthetic, so the appointment itself is comfortable, and sedation is available for anyone anxious about it. Gums are often tender for a few days afterwards and teeth can be temperature-sensitive for a week or two as the tissue tightens against them. Over-the-counter pain relief manages this for most patients."
            ]
          },
          {
            question: "Can gum disease be cured?",
            answer: [
              "Gingivitis, the earliest stage, is generally reversible with thorough cleaning and improved daily care. Once it has progressed to periodontitis and bone has been lost, that bone does not return on its own. Treatment at that stage stops the destruction and stabilises what remains, which is why periodontal disease is described as managed rather than cured, and why the maintenance visits matter as much as the initial treatment."
            ]
          },
          {
            question: "Is gum disease treatment covered by insurance?",
            answer: [
              "Scaling and root planing and periodontal maintenance are usually covered at least in part, though most plans apply frequency limits that may not match the interval your case actually needs. Surgical treatment and grafting vary more widely. You receive a written figure before treatment begins, and financing is available."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Gum Disease Treatment - Beverly Hills Dental",
      description: "Treatment for every stage of gum disease, starting with the least invasive option that works. Laser therapy and ozone used alongside deep cleaning, with"
    }
  },
  {
    slug: "crown-lengthening",
    title: "Crown Lengthening",
    category: "periodontic-dentistry",
    order: 16,
    sections: [
      {
        _type: "hero",
        heading: "Crown Lengthening in Beverly Hills",
        subheading: "Periodontal Dentistry",
        text: [
          "Reshaping the gum line to expose more of the natural tooth, either to give a restoration something to hold onto or to correct a gummy smile."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Two Reasons a Tooth Needs Lengthening",
        text: [
          "Crown lengthening removes a small amount of gum tissue, and sometimes a small amount of bone, to expose more of the natural tooth beneath. It is done for two quite different reasons. The functional reason is that a tooth broken or decayed close to the gum line has nothing left above the tissue for a crown to grip, and lengthening exposes enough sound structure for the restoration to seal and hold. The cosmetic reason is that some people have teeth of a normal size covered by excess gum, which makes them look short and produces what is often called a gummy smile. Reshaping the gum line changes the proportions without touching the teeth themselves."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Benefits of Crown Lengthening",
        text: ["What the procedure achieves, and what treatment involves from assessment to healing."],
        image: images.gumLineCloseup,
        items: [
          {
            title: "Improved Oral Health",
            body: [
              "Exposing tooth structure that sits below the gum line makes decay and damage in that area accessible to treat properly. Margins that finish below the tissue are difficult to seal and difficult for you to clean, which is how problems recur at the same spot."
            ]
          },
          {
            title: "Enhanced Smile Aesthetics",
            body: [
              "Where excess gum tissue covers teeth of a normal size, reshaping the gum line reveals the proportions that were already there. The teeth are not altered, only the frame around them, which makes this one of the more conservative cosmetic procedures available."
            ]
          },
          {
            title: "Better Fit for Restorations",
            body: [
              "A crown or onlay needs a defined margin on sound tooth structure to seal against. Where there is not enough tooth above the gum, the restoration has nothing reliable to finish on, and it will leak and fail. Lengthening creates that margin."
            ]
          },
          {
            title: "Reduced Risk of Gum Disease",
            body: [
              "Restoration margins that sit deep below the gum line irritate the tissue and trap plaque where neither you nor a hygienist can reach easily. Positioning the margin where it can be cleaned reduces that ongoing inflammation."
            ]
          },
          {
            title: "Support for Damaged Teeth",
            body: [
              "A tooth fractured at or just below the gum line is often assumed to be beyond saving. Where enough root remains, crown lengthening can expose sufficient structure to restore it, which means keeping the tooth rather than replacing it."
            ]
          },
          {
            title: "Thorough Initial Assessment",
            body: [
              "The gum, the bone level and the tooth structure below the tissue are all assessed, with imaging where needed. Whether bone needs removing as well as gum, and how much, is determined here rather than during the procedure."
            ]
          },
          {
            title: "Precision Gum Reshaping",
            body: [
              "Carried out under local anaesthetic, with a soft tissue laser used where the case allows it. Laser reshaping typically means less bleeding and a more comfortable recovery than a scalpel approach."
            ]
          },
          {
            title: "Comprehensive Aftercare Support",
            body: [
              "Written aftercare covering the first days, a soft diet initially, and how to clean the area while it heals. A review appointment checks the tissue is settling as expected before any restorative work begins."
            ]
          },
          {
            title: "Preparation for Restorations",
            body: [
              "Where lengthening is done to allow a crown, the tissue needs time to stabilise before the final restoration is made. Rushing that means the margin ends up in the wrong place once the gum settles, so the sequence is deliberate."
            ]
          }
        ],
        link: {
          label: "Schedule Consultation",
          href: "/appointment/"
        }
      },
      {
        _type: "cardPair",
        heading: "Who Can Benefit from Crown Lengthening?",
        text: ["Two groups of patients, with quite different reasons for having the same procedure."],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "RESTORING THE GUM LINE:",
            text: [
              "Where excess gum tissue makes teeth of a normal size look short, or where the gum line is uneven from one tooth to the next. Reshaping creates balanced proportions without altering the teeth themselves. Often planned alongside veneers or bonding, and always allowed to settle before those are designed."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "IMPROVING GUM HEALTH:",
            text: [
              "Where a tooth has decayed or fractured close to the gum line and there is not enough sound structure above the tissue for a crown to seal against. Lengthening exposes that structure, which frequently means a tooth can be restored rather than removed."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR CROWN LENGTHENING",
        text: [
          "Crown lengthening sits between periodontics and restorative dentistry. Having both handled by the same dentist is what keeps the sequence right."
        ],
        link: {
          label: "Schedule your consultation",
          href: "/appointment/"
        },
        items: [
          {
            title: "Expertise You Can Trust",
            text: "More than thirty years of restorative practice. Where lengthening is being done to support a crown, the same dentist plans both, so the margin ends up where the restoration actually needs it.",
            icon: images.stepConsultation
          },
          {
            title: "Personalized Care",
            text: "Whether your case is functional, cosmetic or both changes how much tissue is removed and where. That is assessed properly rather than applied as a standard amount.",
            icon: images.stepPreparation
          },
          {
            title: "Advanced Technology",
            text: "A soft tissue laser used where the case allows it, which generally means less bleeding, fewer sutures and a more comfortable recovery than a scalpel approach.",
            icon: images.stepTreatment
          },
          {
            title: "Sequenced Properly",
            text: "Tissue is allowed to settle before restorations are designed to the new gum line. Skipping that wait is why some cases end up with margins in the wrong position.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "A HEALTHIER, MORE BALANCED GUM LINE",
        text: [
          "Whether excess gum tissue is making your teeth look short, or a tooth needs more structure exposed before it can take a crown, the procedure is the same and the recovery is straightforward. Initial healing generally takes around one to two weeks, with written aftercare and a review appointment included. Book a consultation with Dr. Shir to find out what your case involves."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Crown Lengthening",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "What is crown lengthening?",
            answer: [
              "**A periodontal procedure that reshapes excess gum tissue, and sometimes a small amount of bone, to expose more of the natural tooth. It is used to create a balanced gum line where teeth look short, to treat decay that extends below the gum, and to provide enough sound tooth structure for a crown or bridge to seal against.**"
            ]
          },
          {
            question: "Is crown lengthening painful?",
            answer: [
              "**The area is thoroughly anaesthetised, so the procedure itself is comfortable, and sedation is available for anyone anxious. Afterwards, expect tenderness and some swelling for a few days, generally managed with over-the-counter pain relief. Where a laser is used rather than a scalpel, recovery tends to be more comfortable.**"
            ]
          },
          {
            question: "How long is recovery after crown lengthening?",
            answer: [
              "**Initial healing usually takes around one to two weeks, with a soft diet and careful cleaning of the area during that period. Where the procedure is preparing a tooth for a crown, the tissue needs longer to fully stabilise before the final restoration is made, and the timeline for that is set out in your plan.**"
            ]
          },
          {
            question: "Is crown lengthening covered by insurance?",
            answer: [
              "**Where it is done to allow a tooth to be restored, it is usually treated as necessary and most plans contribute. Where it is done purely to improve the appearance of the gum line, it is generally classed as cosmetic and not covered. You receive a written figure before treatment begins, and financing is available.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Crown Lengthening - Beverly Hills Dental",
      description: "Reshaping the gum line to expose more of the natural tooth, either to give a restoration something to hold onto or to correct a gummy smile."
    }
  },
  {
    slug: "gum-graft-surgery",
    title: "Gum Graft Surgery",
    category: "periodontic-dentistry",
    order: 17,
    sections: [
      {
        _type: "hero",
        heading: "Gum Graft Surgery in Beverly Hills",
        subheading: "Periodontal Dentistry",
        text: [
          "Rebuilding gum tissue where recession has exposed the roots of your teeth, to reduce sensitivity, protect the root surface and stop the recession progressing."
        ],
        image: images.gumProcedure,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What is a Gum Grafting Procedure?",
        text: [
          "Gum grafting, also called gingival grafting, restores tissue where the gum has pulled back and exposed part of the tooth root. Recession happens for several reasons: periodontal disease, brushing too aggressively, grinding, and in some people simply having naturally thin tissue. The consequences are more than cosmetic. Root surfaces are not covered by enamel, so they are softer, decay more readily, and are considerably more sensitive to hot and cold. Recession also tends to continue once it starts, and the tissue does not grow back on its own. A graft covers the exposed root with healthy tissue and rebuilds a stable band of gum around the tooth."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Types of Gum Grafting Techniques",
        text: [
          "Three techniques, chosen by how much recession there is, where it sits and how much tissue you have to work with. Dr. Shir will explain which applies to your case at the assessment."
        ],
        image: images.laserGumTreatment,
        items: [
          {
            title: "Connective Tissue Graft",
            body: [
              "The most commonly used technique. Tissue is taken from beneath the surface layer of the palate, leaving the outer layer intact, then positioned over the exposed root and secured. Because the donor site heals under its own covering, this approach tends to be more comfortable than taking surface tissue, and it gives good root coverage."
            ]
          },
          {
            title: "Free Gingival Graft",
            body: [
              "Surface tissue is taken directly from the palate and placed at the recession site. Used where the aim is to thicken a thin band of gum rather than to cover the root completely, which matters where the remaining tissue is too fragile to hold up over time. Recovery at the donor site takes longer than with a connective tissue graft."
            ]
          },
          {
            title: "Pedicle Graft",
            body: [
              "Tissue is taken from the gum immediately adjacent to the recession and rotated over the exposed root while staying partly attached, which keeps its own blood supply intact. Only suitable where there is enough healthy tissue right next to the site, and where that condition is met it heals well."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "The Gum Graft Surgery Process",
        text: [
          "Two stages. The assessment decides which technique suits your case, and that decision matters more than the procedure itself."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Initial Consultation:",
            text: [
              "Dr. Shir measures the extent of recession at each affected tooth, checks the thickness of the remaining tissue, and looks for the cause. Aggressive brushing, grinding and untreated gum disease all cause recession, and grafting over an unaddressed cause means the problem returns. The technique is chosen from that assessment."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "Grafting Procedure:",
            text: [
              "Carried out under local anaesthetic, with sedation available. Healthy tissue is positioned over the exposed root and secured with fine sutures so it stays in close contact while it integrates. You are given written aftercare, and a review appointment follows to check the graft is taking as expected."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Health Benefits of Gum Grafting",
        text: ["Grafting is often assumed to be cosmetic. Most of what it achieves is protective."],
        items: [
          {
            title: "Protects Tooth Roots",
            text: "Root surfaces have no enamel covering them, so they decay more readily and wear faster than the crown of the tooth. Covering them with healthy tissue restores that protection.",
            icon: images.stepConsultation
          },
          {
            title: "Prevents Further Recession",
            text: "Recession tends to continue once it starts, and a thin band of remaining tissue is more vulnerable than a thick one. Grafting rebuilds a stable band that holds its position.",
            icon: images.stepPreparation
          },
          {
            title: "Reduces Sensitivity",
            text: "Exposed dentine on the root connects directly to the nerve, which is why recession so often causes sharp sensitivity to cold. Most patients notice a clear improvement once the graft has healed.",
            icon: images.stepTreatment
          },
          {
            title: "Improves Appearance",
            text: "Teeth that look progressively longer, or one tooth noticeably longer than its neighbours, is the change most patients first notice. Grafting restores a more even gum line as a consequence of the protective work.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Why Patients Choose Us for Gum Grafting",
        text: [
          "More than thirty years of restorative and periodontal practice, with the cause of your recession assessed rather than just the recession itself. Where aggressive brushing, grinding or untreated gum disease is driving it, that is addressed alongside the graft, because a graft placed over an unresolved cause will recede again. You receive a written plan covering the technique, the recovery and the cost before treatment begins. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Gum Graft Surgery",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "What is gum graft surgery?",
            answer: [
              "A periodontal procedure that restores receded gum tissue by placing healthy tissue over exposed tooth roots. It protects the root surface, which has no enamel and is therefore more prone to decay and sensitivity, stops the recession progressing, and restores a more even gum line."
            ]
          },
          {
            question: "Is gum graft surgery painful?",
            answer: [
              "The area is thoroughly anaesthetised, so the procedure itself is comfortable, and sedation is available. Afterwards, expect soreness for several days, and where tissue was taken from the palate that site is often the more tender of the two. Over-the-counter pain relief manages this for most patients, and you receive written aftercare covering the whole period."
            ]
          },
          {
            question: "How long does it take to recover from a gum graft?",
            answer: [
              "Most patients are comfortable within one to two weeks, with a soft diet and careful cleaning around the site during that period. The graft continues to integrate and mature over several weeks after that. Avoid brushing directly over the graft until we tell you it is safe, since disturbing it early is the main thing that compromises the result."
            ]
          },
          {
            question: "Is gum graft surgery covered by insurance?",
            answer: [
              "Where it is done to treat recession and protect the tooth, it is usually treated as necessary and most plans contribute, though the level varies. Where it is done purely to improve appearance, it is generally classed as cosmetic. You receive a written figure before treatment begins, and financing is available."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Gum Graft Surgery - Beverly Hills Dental",
      description: "Rebuilding gum tissue where recession has exposed the roots of your teeth, to reduce sensitivity, protect the root surface and stop the recession progressing."
    }
  },
  {
    slug: "deep-cleanings",
    title: "Deep Cleanings (Scaling & Root Planing)",
    category: "periodontic-dentistry",
    order: 18,
    sections: [
      {
        _type: "hero",
        heading: "Deep Cleanings in Beverly Hills",
        subheading: "Scaling and Root Planing",
        text: [
          "Cleaning below the gum line to remove what a routine cleaning cannot reach. Carried out under local anaesthetic, supported by laser therapy and ozone."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What Makes a Cleaning \"Deep\"",
        text: [
          "A routine hygiene visit cleans the tooth surfaces you can see and just below the gum margin. A deep cleaning, properly called scaling and root planing, goes further, reaching down inside the periodontal pockets that form when gum disease has taken hold. Scaling removes the hardened deposits from the root surface. Root planing smooths that surface so the gum tissue can reattach against it rather than staying inflamed. It is done under local anaesthetic, usually across one or two appointments, and for most patients with gum disease it is the treatment that resolves the problem without surgery."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHAT A DEEP CLEANING INVOLVES",
        text: [
          "Why it is recommended, what happens during the appointment, and what to expect afterwards."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Why a Routine Cleaning Is Not Enough",
            body: [
              "Once pockets form between the gum and the tooth, deposits collect below the gum line where no toothbrush and no routine cleaning can reach. Those deposits keep the tissue inflamed, and the inflammation keeps destroying the bone underneath. Cleaning only what is visible leaves the cause untouched."
            ]
          },
          {
            title: "Measuring the Pockets First",
            body: [
              "Before anything is recommended, the depth of the pocket around every tooth is measured and recorded, along with bleeding points and recession. Healthy pockets measure around one to three millimetres. Deeper readings, particularly with bleeding, are what indicate a deep cleaning is needed rather than a routine one."
            ]
          },
          {
            title: "Scaling Below the Gum Line",
            body: [
              "Hardened deposits are removed from the root surfaces inside the pocket using ultrasonic and hand instruments. This is the part that removes the source of the inflammation, and it is the reason the procedure needs anaesthetic and time."
            ]
          },
          {
            title: "Root Planing",
            body: [
              "The root surface is smoothed so there is nothing for bacteria to hold onto and so the gum tissue can reattach against the tooth. A rough root surface left behind is where the problem re-establishes fastest."
            ]
          },
          {
            title: "Laser Therapy Alongside",
            body: [
              "A soft tissue laser is used to treat the lining of the pocket after scaling, reducing bacteria and inflamed tissue. For many patients this is an alternative to surgical treatment and generally means a more comfortable recovery."
            ]
          },
          {
            title: "Ozone as an Adjunct",
            body: [
              "Ozone can be delivered into the cleaned pockets as an additional antimicrobial step. It supplements the mechanical cleaning, which is the part that actually removes the deposits, rather than replacing it."
            ]
          },
          {
            title: "Comfort During Treatment",
            body: [
              "The area is thoroughly anaesthetised, so the appointment itself is comfortable, and sedation is available for anyone anxious. Treatment is usually split across one or two visits, often by half the mouth at a time, so no single appointment runs too long."
            ]
          },
          {
            title: "What to Expect Afterwards",
            body: [
              "Gums are often tender for a few days and teeth can be temperature-sensitive for a week or two as the tissue tightens against them. Over-the-counter pain relief manages this for most patients. Some patients notice teeth looking slightly longer as swollen tissue settles back to its true position."
            ]
          },
          {
            title: "Maintenance Is Part of the Treatment",
            body: [
              "After a deep cleaning, most patients move to maintenance visits every three to four months rather than every six. Bacteria repopulate the pockets on roughly that timescale, and this interval is what determines whether the result holds. It is part of the treatment, not an upsell."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "ROUTINE CLEANING OR DEEP CLEANING",
        text: [
          "They are different procedures for different situations, and the measurements decide which you need."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "ROUTINE CLEANING:",
            text: [
              "A preventive procedure for patients with healthy gums and shallow pockets. It removes plaque and hardened deposits from the tooth surfaces and just below the gum margin, and it is generally done every six months without anaesthetic. It maintains health rather than treating disease."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "DEEP CLEANING:",
            text: [
              "A treatment for patients with periodontal disease and pockets deeper than normal. It reaches below the gum line to the root surface, needs local anaesthetic, and is usually done across one or two appointments. It is followed by more frequent maintenance visits rather than a return to six-monthly cleanings."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR DEEP CLEANINGS",
        text: [
          "Deep cleaning has a poor reputation, and almost all of that comes from it being done too quickly, without enough anaesthetic, or without the follow-up that makes it work."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Anaesthetic and Time as Standard",
            text: "Thorough local anaesthetic and appointments long enough to do the work properly. Sedation available for anyone anxious about it.",
            icon: images.stepConsultation
          },
          {
            title: "Measured, Not Estimated",
            text: "Pocket depths recorded around every tooth before and after, so you can see what changed rather than being told it went well.",
            icon: images.stepPreparation
          },
          {
            title: "Laser and Ozone Support",
            text: "A soft tissue laser and ozone used alongside the cleaning, which for many patients means avoiding surgical treatment altogether.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of practice, with gum health assessed at every routine visit rather than only once a problem is obvious.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "IF YOUR GUMS BLEED WHEN YOU BRUSH",
        text: [
          "Bleeding gums are not normal and they are not a sign of brushing too hard. They are the most common early indicator of gum disease, and the one most often ignored because it does not hurt. A periodontal examination measures exactly where you stand and takes one appointment. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT DEEP CLEANINGS",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "Do I really need a deep cleaning, or is this an upsell?",
            answer: [
              "A fair question, and the answer should always be in the measurements. A deep cleaning is indicated when pocket depths around your teeth exceed the normal range, usually with bleeding and often with bone loss visible on X-rays. Ask to see your pocket chart. If the readings are within normal limits, you do not need one, and we will tell you that."
            ]
          },
          {
            question: "Is a deep cleaning painful?",
            answer: [
              "The area is thoroughly anaesthetised, so the appointment itself is comfortable, and sedation is available. Afterwards, gums are often tender for a few days and teeth can be temperature-sensitive for a week or two as the tissue tightens. Over-the-counter pain relief manages this for most patients."
            ]
          },
          {
            question: "How many appointments does it take?",
            answer: [
              "Usually one or two. Many cases are treated half the mouth at a time, which keeps each appointment to a manageable length and means only one side is numb at once. A follow-up appointment a few weeks later re-measures the pockets to confirm the tissue has responded."
            ]
          },
          {
            question: "Will I need deep cleanings every time from now on?",
            answer: [
              "No. After the initial treatment, most patients move to periodontal maintenance visits every three to four months, which are shorter and generally do not need anaesthetic. That interval is what keeps the bacterial load down. If the disease stays stable over time, the interval can sometimes be extended."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Deep Cleanings (Scaling & Root Planing) - Beverly Hills Dental",
      description: "Cleaning below the gum line to remove what a routine cleaning cannot reach. Carried out under local anaesthetic, supported by laser therapy and ozone."
    }
  },
  {
    slug: "laser-gum-treatments",
    title: "Laser Gum Treatments",
    category: "periodontic-dentistry",
    order: 19,
    sections: [
      {
        _type: "hero",
        heading: "Laser Gum Treatments in Beverly Hills",
        subheading: "Periodontal Dentistry",
        text: [
          "A soft tissue laser used alongside deep cleaning to treat gum disease, and to reshape gum tissue. For many patients it is an alternative to surgery, with less bleeding and a more comfortable recovery."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What a Dental Laser Actually Does",
        text: [
          "A soft tissue laser delivers concentrated light energy that works on gum tissue rather than on teeth or bone. In periodontal treatment it is used inside the pocket after scaling, to remove diseased tissue lining the pocket wall and reduce the bacteria living there. Because it seals small blood vessels as it works, there is typically less bleeding, often fewer sutures, and a more comfortable recovery than a scalpel approach. It is important to be clear about its role: the laser supports the mechanical cleaning that removes the hardened deposits driving the disease. It does not replace it, and any practice presenting laser treatment as a shortcut around proper cleaning is overselling it."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHERE WE USE THE LASER",
        text: ["The applications we use it for, and what the laser contributes in each."],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Treating Periodontal Pockets",
            body: [
              "After scaling and root planing has removed the deposits, the laser is used inside the pocket to remove diseased tissue from the pocket lining and reduce the bacteria present. This is its main periodontal application and the one with the most established use."
            ]
          },
          {
            title: "An Alternative to Gum Surgery for Many Patients",
            body: [
              "Where pockets remain deep after non-surgical treatment, the traditional next step is flap surgery, which involves lifting the gum with a scalpel and suturing it back. Laser treatment allows many of those cases to be managed without that, though not all, and we will tell you which yours is."
            ]
          },
          {
            title: "Gum Contouring and Reshaping",
            body: [
              "The laser reshapes an uneven gum line with a good deal of precision, whether for a gummy smile or to even out the tissue before veneers or crowns are designed. Tissue treated this way generally settles predictably."
            ]
          },
          {
            title: "Crown Lengthening",
            body: [
              "Where a tooth needs more structure exposed before a crown can seal against it, the laser removes the excess tissue cleanly and with minimal bleeding, which makes the working field considerably easier to judge."
            ]
          },
          {
            title: "Less Bleeding During Treatment",
            body: [
              "The laser seals small blood vessels as it works. Beyond the comfort benefit, it means the area stays clear during the procedure, which improves how accurately the work can be done."
            ]
          },
          {
            title: "Fewer Sutures, Often None",
            body: [
              "Because the tissue is sealed rather than cut, many laser procedures need no stitches at all. That removes a follow-up appointment and one of the more irritating parts of recovery."
            ]
          },
          {
            title: "More Comfortable Recovery",
            body: [
              "Most patients report less discomfort and less swelling after laser treatment than after a scalpel equivalent, and generally return to normal activity sooner. Over-the-counter pain relief is usually sufficient."
            ]
          },
          {
            title: "Used Alongside Ozone",
            body: [
              "In periodontal cases the laser is combined with ozone as an additional antimicrobial step within the cleaned pockets. Both support the mechanical cleaning rather than substituting for it."
            ]
          },
          {
            title: "What the Laser Does Not Do",
            body: [
              "It does not remove the hardened deposits below the gum line. That is done with scaling instruments, and it remains the part of treatment that addresses the cause. The laser also does not regrow bone that periodontal disease has already destroyed."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "LASER TREATMENT OR CONVENTIONAL SURGERY",
        text: [
          "Both have a place. Which suits you depends on how deep the pockets are, how much bone has been lost, and how the tissue has responded to non-surgical treatment already."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "LASER PERIODONTAL THERAPY:",
            text: [
              "Used alongside scaling and root planing to treat the pocket lining and reduce bacteria. Typically less bleeding, often no sutures, and a more comfortable recovery. Suited to most patients with moderate periodontal disease, and generally the first thing we try where non-surgical treatment alone has not been enough."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "CONVENTIONAL FLAP SURGERY:",
            text: [
              "The gum is lifted back so the root surfaces and bone can be accessed directly, then repositioned and sutured. It remains the appropriate option for advanced disease with deep pockets or where bone needs reshaping or grafting. Longer recovery, and reserved for cases that genuinely need it."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR LASER GUM TREATMENT",
        text: [
          "The laser is a tool within a treatment plan, not the treatment itself. How it is used matters more than the fact that we have one."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Used as an Adjunct, Honestly",
            text: "We will always tell you what the conventional treatment is and what the laser adds to it. It supports scaling and root planing rather than replacing it.",
            icon: images.stepConsultation
          },
          {
            title: "Conservative Before Surgical",
            text: "Laser therapy is tried before flap surgery wherever the case allows. Where surgery is genuinely the right answer, we will say so rather than persist with the gentler option.",
            icon: images.stepPreparation
          },
          {
            title: "Combined With Ozone",
            text: "In periodontal cases the laser is used alongside ozone as part of a wider approach to reducing bacterial load in the cleaned pockets.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of restorative and periodontal practice, with gum health assessed at every routine visit.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "TOLD YOU NEED GUM SURGERY?",
        text: [
          "If you have been recommended for periodontal surgery, it is worth finding out whether laser treatment alongside deep cleaning would manage your case instead. It does not suit every situation, particularly advanced disease with significant bone loss, and we will tell you honestly which category yours falls into. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT LASER GUM TREATMENT",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "Is laser gum treatment better than traditional gum surgery?",
            answer: [
              "**For many patients with moderate periodontal disease it achieves a comparable result with less bleeding, fewer sutures and a more comfortable recovery, which is why we try it first. For advanced disease with deep pockets and significant bone loss, conventional surgery still does things the laser cannot. The right answer depends on your measurements, and we will explain which applies to you.**"
            ]
          },
          {
            question: "Does laser gum treatment hurt?",
            answer: [
              "**The area is anaesthetised, so the procedure itself is comfortable, and sedation is available. Most patients report less discomfort afterwards than with a scalpel approach, with tenderness for a few days that over-the-counter pain relief manages. Where laser treatment follows deep cleaning, teeth can be temperature-sensitive for a week or two as the tissue tightens.**"
            ]
          },
          {
            question: "Does the laser replace the deep cleaning?",
            answer: [
              "**No, and this is worth being clear about. Scaling and root planing removes the hardened deposits below the gum line that are driving the inflammation, and nothing substitutes for that. The laser treats the pocket lining and reduces bacteria after the deposits are gone. Used together they do more than either does alone.**"
            ]
          },
          {
            question: "Is laser gum treatment covered by insurance?",
            answer: [
              "**Coverage varies and some plans treat laser periodontal therapy differently from conventional treatment, occasionally paying at the rate for the traditional procedure rather than the laser one. You receive a written figure before treatment begins regardless of what your plan contributes, and financing is available.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Laser Gum Treatments - Beverly Hills Dental",
      description: "A soft tissue laser used alongside deep cleaning to treat gum disease, and to reshape gum tissue. For many patients it is an alternative to surgery, with less"
    }
  },
  {
    slug: "gum-contouring",
    title: "Gum Contouring",
    category: "periodontic-dentistry",
    order: 20,
    sections: [
      {
        _type: "hero",
        heading: "Gum Contouring in Beverly Hills",
        subheading: "Cosmetic Gum Treatment",
        text: [
          "Reshaping the gum line so it frames your teeth evenly. Carried out with a soft tissue laser, and planned before any veneers or crowns are designed to it."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "The Frame Matters as Much as the Teeth",
        text: [
          "Gum contouring reshapes the gum line to correct an uneven or excessive contour. It is one of the more overlooked cosmetic treatments, because most people looking at their smile focus on the teeth themselves. In practice, a gum line that sits lower on one tooth than its neighbour, or covers too much of the teeth generally, will make a smile look wrong even when every tooth is a perfectly good shape and colour. The teeth are not touched at all. Only the tissue framing them is adjusted, which makes this one of the most conservative changes available in cosmetic dentistry."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHAT GUM CONTOURING CAN CORRECT",
        text: [
          "The situations it addresses, how it is carried out, and where it sits in a wider treatment plan."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "A Gummy Smile",
            body: [
              "Where teeth of a normal size are partly covered by excess tissue, they look short and the smile looks gum-heavy. Reshaping the gum line reveals the proportions that were already there without altering a single tooth."
            ]
          },
          {
            title: "An Uneven Gum Line",
            body: [
              "One tooth sitting noticeably lower or higher than its neighbours draws the eye, and most people notice the asymmetry without being able to say what is causing it. Evening out the contour usually makes more visible difference than anything done to the teeth."
            ]
          },
          {
            title: "Teeth That Look Different Lengths",
            body: [
              "Where teeth appear mismatched in length but are actually a normal size, the difference is in the gum rather than the tooth. Contouring corrects it conservatively, where veneers would mean preparing enamel to achieve the same visual result."
            ]
          },
          {
            title: "Preparing for Veneers or Crowns",
            body: [
              "Where restorations are planned, the gum line is corrected first and allowed to settle. Veneers designed to a gum line that is about to change will inherit the problem, which is one of the more common reasons cosmetic cases have to be redone."
            ]
          },
          {
            title: "Carried Out With a Soft Tissue Laser",
            body: [
              "The laser reshapes the tissue precisely and seals small blood vessels as it works, so there is typically minimal bleeding, often no sutures, and a more comfortable recovery than a scalpel approach."
            ]
          },
          {
            title: "Designed Against Your Face",
            body: [
              "How much tissue to remove is decided against your lip line, your smile line and your facial proportions, not against a standard measurement. Removing too much is not reversible, so the plan is agreed before anything starts."
            ]
          },
          {
            title: "When Bone Is Involved",
            body: [
              "In some cases the bone level, not just the gum, determines where the tissue sits. Where that applies, the procedure becomes crown lengthening rather than simple contouring, and it is a different plan. The assessment establishes which yours is."
            ]
          },
          {
            title: "A Short Procedure",
            body: [
              "Most cases are completed in one appointment under local anaesthetic. Treatment usually takes under an hour depending on how many teeth are involved, and most patients return to normal activity the same day."
            ]
          },
          {
            title: "Healing and Settling",
            body: [
              "The tissue is tender for a few days and looks its final shape after it has settled over the following weeks. Where restorations are planned afterwards, that settling period is built into the sequence rather than rushed."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "CONTOURING OR CROWN LENGTHENING",
        text: [
          "They look similar from the outside and they are different procedures. The assessment decides which your case actually needs."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "GUM CONTOURING:",
            text: [
              "Reshapes gum tissue only, where the tissue itself is the reason the gum line sits where it does. A short single appointment, usually with a laser, minimal recovery, and generally classed as cosmetic. Suited to correcting a gummy smile or evening out an uneven contour."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "CROWN LENGTHENING:",
            text: [
              "Involves removing a small amount of bone as well as gum, where the bone level is what determines the tissue position. Also used functionally, to expose enough sound tooth for a crown to seal against. A longer recovery, and often covered by insurance when done for restorative reasons."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR GUM CONTOURING",
        text: ["Tissue removed does not come back, so the planning matters more than the procedure."],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Planned Before It Is Done",
            text: "How much tissue to remove is designed against your face and agreed with you beforehand. This is not a decision made with the handpiece already in your mouth.",
            icon: images.stepConsultation
          },
          {
            title: "Soft Tissue Laser",
            text: "Precise reshaping with minimal bleeding, usually no sutures, and a more comfortable recovery than a scalpel approach.",
            icon: images.stepPreparation
          },
          {
            title: "Sequenced With Your Restorations",
            text: "Where veneers or crowns are planned, contouring comes first and the tissue is allowed to settle before anything is designed to the new gum line.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of restorative and cosmetic practice, including cases combining gum work with veneers and crowns.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "SOMETIMES IT IS THE GUMS, NOT THE TEETH",
        text: [
          "If your teeth look short, uneven, or your smile shows more gum than you would like, the answer may be a straightforward reshaping of the tissue rather than anything done to the teeth themselves. A consultation will tell you whether contouring alone would achieve what you want, or whether crown lengthening is the more appropriate procedure. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT GUM CONTOURING",
        text: ["The questions patients ask most often before treatment."],
        items: [
          {
            question: "Is gum contouring painful?",
            answer: [
              "The area is thoroughly anaesthetised, so the procedure itself is comfortable, and sedation is available for anyone anxious. Afterwards, expect tenderness for a few days, generally managed with over-the-counter pain relief. Where a laser is used rather than a scalpel, recovery tends to be quicker and more comfortable."
            ]
          },
          {
            question: "Will the gum grow back?",
            answer: [
              "Properly contoured tissue generally holds its new position. The tissue settles over the weeks after treatment and what you see at the end of that period is the result. Where the bone level rather than the tissue was the underlying cause and only gum was removed, some rebound is possible, which is exactly why the assessment establishes whether you need contouring or crown lengthening."
            ]
          },
          {
            question: "How long does it take to heal?",
            answer: [
              "Most patients are comfortable within a few days, with a soft diet and gentle cleaning of the area early on. The tissue continues settling to its final shape over the following weeks. Where veneers or crowns are planned afterwards, that settling period is built into the treatment sequence deliberately."
            ]
          },
          {
            question: "Is gum contouring covered by insurance?",
            answer: [
              "Where it is done purely to improve appearance, it is generally classed as cosmetic and not covered. Where reshaping is necessary for restorative reasons or to treat a periodontal problem, most plans contribute. You receive a written figure before treatment begins, and financing is available."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Gum Contouring - Beverly Hills Dental",
      description: "Reshaping the gum line so it frames your teeth evenly. Carried out with a soft tissue laser, and planned before any veneers or crowns are designed to it."
    }
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    category: "preventive-dentistry",
    order: 21,
    sections: [
      {
        _type: "hero",
        heading: "Professional Teeth Cleaning in Beverly Hills",
        subheading: "Preventive Dentistry",
        text: [
          "Routine cleanings, deep cleanings and periodontal maintenance. Which one you need is decided by measurements, not by a standard schedule."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Not Every Cleaning Is the Same Appointment",
        text: [
          "There are three distinct types of cleaning, and they are not interchangeable. A routine cleaning maintains healthy gums. A deep cleaning treats gum disease that has already established itself below the gum line. Periodontal maintenance keeps treated disease from returning. Being recommended the wrong one wastes money in one direction and leaves disease untreated in the other. Which you need is determined by measuring the pocket depth around every tooth, and you are entitled to see those numbers."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "TYPES OF CLEANING AND WHAT IS INCLUDED",
        text: ["The three types of cleaning, and everything included in a preventive visit here."],
        image: images.smileMirrorExam,
        items: [
          {
            title: "Standard Dental Cleaning (Prophylaxis)",
            body: [
              "For patients with healthy gums and shallow pockets. Plaque and hardened deposits are removed from the tooth surfaces and just below the gum margin, followed by polishing. No anaesthetic needed, and generally done every six months. This is a preventive procedure, not a treatment."
            ]
          },
          {
            title: "Deep Cleaning (Scaling and Root Planing)",
            body: [
              "A treatment for patients with periodontal disease and pockets deeper than normal. It reaches below the gum line to clean the root surfaces and smooth them so the tissue can reattach. Carried out under local anaesthetic, usually across one or two appointments."
            ]
          },
          {
            title: "Periodontal Maintenance",
            body: [
              "What follows a deep cleaning. Visits every three to four months rather than every six, because bacteria repopulate the pockets on roughly that timescale. This interval is what determines whether the earlier treatment holds, and returning to six-monthly cleanings is how treated disease comes back."
            ]
          },
          {
            title: "Comprehensive Oral Examination",
            body: [
              "Every tooth and existing restoration checked, your bite and any wear patterns reviewed, and X-rays taken at appropriate intervals. Decay between teeth and beneath old fillings is not visible to the eye, which is why imaging is part of a proper preventive visit."
            ]
          },
          {
            title: "Periodontal Charting",
            body: [
              "Pocket depths measured and recorded around every tooth, along with bleeding points and recession. This is what distinguishes a routine cleaning from a deep cleaning, and it gives you an objective record to compare against at future visits."
            ]
          },
          {
            title: "Plaque and Tartar Removal",
            body: [
              "Plaque hardens into tartar within days and cannot then be removed by brushing at home. Ultrasonic and hand instruments remove it from the tooth surfaces and just below the gum margin, which is the part that matters most."
            ]
          },
          {
            title: "Air Polishing and Stain Removal",
            body: [
              "Surface staining from coffee, tea, red wine and tobacco is removed at the end of the cleaning. This is a cosmetic step rather than a health one, and it will not lighten the natural colour of your teeth, which is what whitening does."
            ]
          },
          {
            title: "Oral Cancer Screening",
            body: [
              "The soft tissues of the mouth, tongue, throat and neck are checked for anything that has changed. It takes a couple of minutes, forms part of every visit, and matters because oral cancer is often painless in its early stages."
            ]
          },
          {
            title: "Fluoride Treatment",
            body: [
              "A concentrated professional application that strengthens enamel and can help remineralise the earliest signs of decay. Particularly worthwhile where roots are exposed, where you have dry mouth, or where decay keeps recurring."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "OUR ADVANCED TEETH CLEANING PROCESS",
        text: ["Two things a cleaning is actually protecting you from, both of which develop silently."],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "PREVENT CAVITIES",
            text: [
              "Plaque left undisturbed produces acid that dissolves enamel. Removing it, along with the hardened tartar that brushing cannot shift, reduces the rate at which new decay starts. Digital X-rays at the same visit find early decay between teeth, where a toothbrush never reaches and where you would not notice it for years."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "STOP GUM DISEASE EARLY",
            text: [
              "Gingivitis is reversible. Periodontitis is not, because it destroys bone that does not grow back. The difference between the two is caught at a routine visit through pocket measurements and bleeding points, usually well before you would notice anything beyond occasional bleeding when brushing."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR TEETH CLEANING",
        text: [
          "A cleaning appointment is where problems are found or missed. What gets checked matters as much as what gets cleaned."
        ],
        items: [
          {
            title: "Measured, Not Assumed",
            text: "Pocket depths charted around every tooth, so the type of cleaning you are recommended is backed by numbers you can see rather than an opinion.",
            icon: images.stepConsultation
          },
          {
            title: "State-of-the-Art Technology",
            text: "Ultrasonic scalers, air polishing and digital X-rays at a lower radiation dose. Images appear on screen where you can see what we are describing.",
            icon: images.stepPreparation
          },
          {
            title: "Personalized Preventive Care Plans",
            text: "The right interval depends on your risk, not on a fixed schedule. Some patients need three or four months, others genuinely do well on six.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of practice, with the examination covering existing restorations, bite and soft tissues rather than just the teeth.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "PREVENTIVE CARE PROTECTS MORE THAN YOUR SMILE",
        text: [
          "A cleaning is more than a fresh start. It is the appointment where decay, gum disease and soft tissue changes are found while they are still simple to deal with. If it has been a while since your last visit, most of what we find now will be smaller than what would be found in another year. Book an appointment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT TEETH CLEANING",
        text: ["The questions patients ask most often about professional cleanings."],
        items: [
          {
            question: "How often should I get a professional teeth cleaning?",
            answer: [
              "Six months suits most people with healthy gums. Patients with a history of gum disease generally need periodontal maintenance every three to four months, because that is roughly how quickly bacteria repopulate the pockets. Patients with a high decay rate, dry mouth or extensive restorative work also benefit from shorter intervals. Your interval should reflect your risk rather than a default schedule."
            ]
          },
          {
            question: "Is a professional teeth cleaning painful?",
            answer: [
              "A routine cleaning is not usually uncomfortable, though sensitive teeth or inflamed gums can make it less pleasant, and tell us if that applies to you because we can work around it. A deep cleaning is different and is done under local anaesthetic. If a cleaning has hurt in the past, that is often a sign the gums were inflamed rather than that cleanings hurt."
            ]
          },
          {
            question: "What is the difference between a regular and a deep cleaning?",
            answer: [
              "A regular cleaning works on the tooth surfaces and just below the gum margin, and it maintains health in patients who already have it. A deep cleaning goes inside periodontal pockets to clean the root surfaces, treats disease that has already established, and needs anaesthetic. The distinction is made by measuring pocket depths, and you should ask to see your chart if a deep cleaning is recommended."
            ]
          },
          {
            question: "Are teeth cleanings covered by insurance?",
            answer: [
              "Preventive cleanings are the treatment most plans cover best, often at or near full coverage twice a year. Deep cleanings and periodontal maintenance are usually covered too, though frequency limits often apply and may not match what your case clinically needs. Where that gap exists we will tell you what the difference costs."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Teeth Cleaning - Beverly Hills Dental",
      description: "Routine cleanings, deep cleanings and periodontal maintenance. Which one you need is decided by measurements, not by a standard schedule."
    }
  },
  {
    slug: "dental-sealants",
    title: "Dental Sealants",
    category: "preventive-dentistry",
    order: 22,
    sections: [
      {
        _type: "hero",
        heading: "Dental Sealants in Beverly Hills",
        subheading: "Preventive Dentistry",
        text: [
          "A thin protective coating bonded into the deep grooves of back teeth, where a toothbrush bristle physically cannot reach. Quick to place, no drilling, no anaesthetic."
        ],
        image: images.patientSmilingChair,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What Are Dental Sealants & How Do They Help?",
        text: [
          "The chewing surfaces of back teeth are not flat. They carry deep, narrow grooves that a toothbrush bristle is simply too wide to enter, which is why the majority of cavities in children and teenagers form there rather than anywhere else. A sealant is a thin resin coating painted into those grooves and hardened with a curing light, creating a smooth surface that food and bacteria cannot settle into. Applying one takes a few minutes per tooth, involves no drilling and no anaesthetic, and it is among the most cost-effective preventive treatments in dentistry."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "SEALANTS: WHAT THEY DO AND WHO NEEDS THEM",
        text: ["What sealants protect against, who benefits most, and what to expect from them over time."],
        image: images.brightSmile,
        items: [
          {
            title: "Protect Against Cavities",
            body: [
              "Sealants create a physical barrier over the grooves where decay most often starts. The research consistently shows a meaningful reduction in cavities on sealed molars compared with unsealed ones, and the protection is greatest in the first few years after placement."
            ]
          },
          {
            title: "Save Time and Money",
            body: [
              "Placing a sealant costs a fraction of what filling the same tooth costs later, and it takes a few minutes rather than a full appointment with anaesthetic. For a child with deep grooves, the arithmetic is straightforward."
            ]
          },
          {
            title: "Preserve Natural Teeth",
            body: [
              "A sealed tooth that never develops decay keeps all of its original structure. A tooth that gets a filling never returns to being untouched, and once a filling is placed it will eventually need replacing, usually larger each time."
            ]
          },
          {
            title: "Quick, Comfortable Application",
            body: [
              "The tooth is cleaned, prepared with a conditioning gel, and the sealant is painted on and hardened with a light. No drilling and no injection, which makes it a good first experience for an anxious child."
            ]
          },
          {
            title: "Long-Lasting Results",
            body: [
              "Sealants commonly last several years, though they wear and can chip under chewing forces. We check them at every routine visit and repair or replace them where needed, which is what keeps the protection continuous."
            ]
          },
          {
            title: "Best Placed Soon After Molars Arrive",
            body: [
              "Permanent molars come through around ages six and twelve. Sealing them shortly after they arrive, before decay has a chance to start in the grooves, is when they do the most good."
            ]
          },
          {
            title: "Useful for Adults Too",
            body: [
              "Sealants are usually associated with children, but adults with deep unrestored grooves and a history of decay benefit as well. If your molars have never been filled and the grooves are deep, they are worth considering."
            ]
          },
          {
            title: "Sealants Do Not Replace Brushing",
            body: [
              "They protect the chewing surfaces only. Decay between teeth and at the gum line is unaffected, so daily brushing, cleaning between the teeth and regular checkups all still matter exactly as much."
            ]
          },
          {
            title: "BPA-Free Materials",
            body: [
              "We use sealant materials selected to avoid BPA, in keeping with the metal-free and biologically conservative approach we take throughout the practice."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Our Sealant Process: What to Expect",
        text: [
          "A short, straightforward appointment with no drilling, no anaesthetic and nothing uncomfortable."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "CLEANING & PREPARING",
            text: [
              "The tooth is thoroughly cleaned so the sealant bonds to clean enamel rather than sealing anything in, then dried and treated with a conditioning gel that gives the surface texture for the resin to grip. The gel is rinsed away and the tooth dried again. Keeping the surface dry through this stage is what determines how well the sealant holds."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "APPLYING & HARDENING",
            text: [
              "The sealant is painted into the grooves and hardened with a curing light in a few seconds. Your bite is checked so the sealant is not sitting high, and it is adjusted if needed. You can eat straight away, and there is nothing to avoid afterwards."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR DENTAL SEALANTS",
        text: [
          "Sealants are a simple treatment where the technique and the timing matter more than anything else."
        ],
        items: [
          {
            title: "30+ Years of Experience",
            text: "More than three decades of practice. Grooves are assessed properly before sealing, because a sealant placed over undetected early decay traps the problem underneath.",
            icon: images.stepConsultation
          },
          {
            title: "BPA-Free Materials",
            text: "Sealant materials selected to avoid BPA, consistent with the metal-free and conservative approach we take across the practice.",
            icon: images.stepPreparation
          },
          {
            title: "Checked at Every Visit",
            text: "Sealants wear and chip over time. We inspect them at every routine appointment and repair or replace them, which is what keeps the protection continuous.",
            icon: images.stepTreatment
          },
          {
            title: "Comprehensive Preventive Care",
            text: "Sealants are one part of a broader preventive approach that includes examinations, cleanings, fluoride where useful, and digital imaging that finds decay early.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Who's a Good Candidate for Dental Sealants?",
        text: [
          "Children and teenagers with newly erupted permanent molars benefit most, ideally sealed soon after those teeth come through. Adults with deep unrestored grooves and a history of decay are also good candidates. The one situation where a sealant is not appropriate is a tooth that already has decay in the grooves, which needs treating rather than covering. An examination will tell you which applies. Book with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Dental Sealants",
        text: ["The questions patients and parents ask most often."],
        items: [
          {
            question: "What are dental sealants?",
            answer: [
              "**Thin protective coatings painted onto the chewing surfaces of back teeth, where the majority of cavities form. They fill the deep narrow grooves that a toothbrush bristle is too wide to enter, creating a smooth surface that food and bacteria cannot settle into. Applying one takes a few minutes and needs no drilling or anaesthetic.**"
            ]
          },
          {
            question: "Are dental sealants only for kids?",
            answer: [
              "**Children and teenagers benefit most, because sealing molars soon after they come through prevents decay from ever starting in those grooves. But adults with deep unrestored grooves and a history of cavities benefit too. If your back teeth have never been filled and the grooves are deep, sealants are worth discussing.**"
            ]
          },
          {
            question: "How long do dental sealants last?",
            answer: [
              "**Commonly several years, though they wear and can chip under normal chewing forces. We check them at every routine visit and repair or replace them as needed, which is what keeps the protection continuous. Sealants that are allowed to wear away unnoticed leave the tooth as exposed as it was originally.**"
            ]
          },
          {
            question: "Are dental sealants covered by insurance?",
            answer: [
              "**Most plans cover sealants for children on permanent molars, often fully, though age limits and tooth restrictions usually apply. Coverage for adults is less consistent. You receive a written figure before treatment, and the cost of a sealant is a small fraction of what filling the same tooth would cost later.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dental Sealants - Beverly Hills Dental",
      description: "A thin protective coating bonded into the deep grooves of back teeth, where a toothbrush bristle physically cannot reach. Quick to place, no drilling, no"
    }
  },
  {
    slug: "checkups-exams",
    title: "Dental Checkups & Exams",
    category: "preventive-dentistry",
    order: 23,
    sections: [
      {
        _type: "hero",
        heading: "Dental Exams and Checkups in Beverly Hills",
        subheading: "Preventive Dentistry",
        text: [
          "A thorough examination rather than a quick look. Teeth, gums, bite, existing restorations and soft tissues all checked, with digital imaging that finds problems while they are still small."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Thorough Dental Exams: What’s Included",
        text: [
          "A proper examination takes time, and it covers considerably more than looking for cavities. Every tooth and every existing restoration is checked, your gums are assessed with measurements where indicated, your bite and any wear patterns are reviewed, the soft tissues of your mouth and throat are screened, and digital X-rays show what is happening between the teeth and beneath old fillings. You will also get an honest account of anything we are watching but not yet treating, because not everything we find needs acting on immediately."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHAT A DENTAL EXAM COVERS",
        text: ["Nine things checked at a full examination, and what each one is looking for."],
        image: images.smilingWomanPortrait,
        items: [
          {
            title: "Thorough Check of Teeth and Gums",
            body: [
              "Every tooth is examined for decay, cracks and wear, and every existing filling, crown and bridge is checked for leakage at the margins. Old restorations fail quietly at the edges, and that is where new decay most often starts."
            ]
          },
          {
            title: "Digital X-Rays",
            body: [
              "Decay between teeth and beneath existing restorations is not visible to the eye. Digital X-rays show it at a lower radiation dose than film and appear instantly on screen, where you can see what we are describing rather than take our word for it."
            ]
          },
          {
            title: "Intraoral Camera Photos",
            body: [
              "A small camera shows you the inside of your own mouth on a monitor. It is the difference between being told a filling is cracked and seeing the crack yourself, which makes decisions about treatment considerably easier."
            ]
          },
          {
            title: "Oral Cancer Screening",
            body: [
              "The soft tissues of the mouth, tongue, throat and neck are checked for anything that has changed. It takes a couple of minutes and forms part of every examination, because oral cancer is often painless in its early stages and the outcome depends heavily on when it is found."
            ]
          },
          {
            title: "Gum Health Check",
            body: [
              "Gums are assessed for inflammation, bleeding and recession, with pocket depths measured and recorded where indicated. Gum disease is the leading cause of tooth loss in adults and it progresses for years without pain, which is why it is checked rather than waited for."
            ]
          },
          {
            title: "Bite and Jaw Evaluation",
            body: [
              "How your teeth meet, whether there is wear from grinding, and whether your jaw joints move comfortably. Bite problems cause fractured teeth and failed restorations, and they are easy to miss if nobody looks for them."
            ]
          },
          {
            title: "Catch Problems Early",
            body: [
              "A cavity caught early is a filling. The same cavity in two years may need an onlay, a crown, or a root canal. Almost everything expensive in dentistry began as something inexpensive that was left too long."
            ]
          },
          {
            title: "Personalised Recall Intervals",
            body: [
              "Six months suits most people, but not everyone. Patients with a history of gum disease, a high decay rate or extensive restorative work generally do better at three or four month intervals. We will tell you what yours should be and why."
            ]
          },
          {
            title: "A Written Plan, Not a Verbal One",
            body: [
              "Anything we recommend comes to you in writing, with what it is, why it is needed and what it costs. Nothing gets added at the appointment, and there is no pressure to decide on the spot."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "WHAT TO EXPECT AT YOUR EXAM",
        text: ["Two things that shape how this appointment goes, particularly if it has been a while."],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "PERSONALIZED FOR EVERY PATIENT",
            text: [
              "Your history, your risk factors and your existing dental work all shape what gets checked most carefully and how often you should be seen. A patient with several large restorations needs a different level of monitoring from one with an untouched mouth, and the plan reflects that."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "NO LECTURES, NO PRESSURE",
            text: [
              "If it has been years since your last visit, that is a common situation and it is not something you will be told off about. We tell you what we find, explain what needs doing now and what can wait, and give it to you in writing. What happens next is your decision."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR CHECKUPS",
        text: [
          "An examination is where problems are found or missed. What gets checked matters more than how quickly it is done."
        ],
        items: [
          {
            title: "30+ Years of Experience",
            text: "More than three decades of practice. Dr. Shir examines restorations, bite and soft tissues at every visit, not just the teeth themselves.",
            icon: images.stepConsultation
          },
          {
            title: "Advanced Diagnostic Technology",
            text: "Digital X-rays at a lower radiation dose, an intraoral camera, and cone beam imaging where a case calls for it. You see what we see on screen.",
            icon: images.stepPreparation
          },
          {
            title: "Personalized Exam Schedules",
            text: "Recall intervals set by your actual risk rather than by a fixed schedule applied to everyone. Some patients need three months, others genuinely do well on six.",
            icon: images.stepTreatment
          },
          {
            title: "A Conservative Approach",
            text: "We recommend treatment when it is needed and monitoring when it is not. Early lesions are recorded and watched rather than automatically drilled.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "BOOK YOUR DENTAL EXAM",
        text: [
          "If it has been a while, the useful thing to know is that whatever we find today will be smaller and simpler than what would be found in another year. You get a thorough examination, an honest account of what we see, and a written plan covering anything that needs doing. Book with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Dental Checkups",
        text: ["The questions patients ask most often about examinations."],
        items: [
          {
            question: "How often should I get a dental checkup?",
            answer: [
              "Six months suits most people with healthy mouths, but it is not a universal rule. Patients with a history of gum disease, a high rate of decay, dry mouth or extensive restorative work generally do better at three or four month intervals. Patients with consistently healthy mouths can sometimes go longer. The right interval is set by your risk, and we will tell you what yours is."
            ]
          },
          {
            question: "What happens during a dental exam?",
            answer: [
              "Every tooth and existing restoration is checked, your gums are assessed with pocket measurements where indicated, your bite and any wear patterns are reviewed, and the soft tissues of your mouth and throat are screened. Digital X-rays are taken at appropriate intervals to show what is happening between teeth and under old fillings. You then get an account of what was found and a written plan for anything that needs doing."
            ]
          },
          {
            question: "Are dental X-rays safe?",
            answer: [
              "Digital X-rays use a considerably lower radiation dose than the film systems they replaced, and the dose from a routine set is very small. They are taken at intervals matched to your risk rather than automatically at every visit, and a lead apron and thyroid collar are used. If you are pregnant, tell us, and we will discuss whether imaging should wait."
            ]
          },
          {
            question: "Are dental checkups covered by insurance?",
            answer: [
              "Preventive care is the category most plans cover best, often at or near full coverage for examinations, cleanings and X-rays at set intervals. Where your clinical need is more frequent than your plan allows, we will tell you what the difference costs so you can decide. You receive a written figure before any treatment beyond the examination itself."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dental Checkups & Exams - Beverly Hills Dental",
      description: "A thorough examination rather than a quick look. Teeth, gums, bite, existing restorations and soft tissues all checked, with digital imaging that finds"
    }
  },
  {
    slug: "night-guards",
    title: "Night Guards",
    category: "preventive-dentistry",
    order: 24,
    sections: [
      {
        _type: "hero",
        heading: "Night Guards in Beverly Hills",
        subheading: "Preventive Dentistry",
        text: [
          "A precision-fitted guard that absorbs the force of nightly grinding, protects your teeth from wear, and relieves the morning jaw ache that comes with it."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Protecting Your Teeth From Something You Sleep Through",
        text: [
          "A night guard is a thin custom appliance worn over your upper or lower teeth while you sleep. It separates the arches so the teeth cannot grind against one another and absorbs the clenching force your jaw muscles generate overnight. What makes grinding so damaging is that it happens while you are unconscious of it. Awake, protective reflexes stop you biting down too hard. Asleep, those reflexes are suppressed and the forces generated can be several times what you could produce voluntarily. Across hours, night after night, that force flattens enamel, cracks fillings and splits cusps off molars."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "SIGNS OF GRINDING AND WHAT A GUARD PROTECTS",
        text: [
          "Grinding is diagnosed from evidence rather than memory, since you are asleep for all of it. These are the signals we look for."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Waking With a Sore, Tight Jaw",
            body: [
              "Jaw muscles that ache in the morning and loosen through the day are muscles that have been working all night. The same pattern shows up as headaches at the temples on waking, because the muscle that clenches your jaw sits exactly there."
            ]
          },
          {
            title: "Flattened, Shortened or Chipped Teeth",
            body: [
              "Healthy back teeth have distinct peaks and valleys for chewing. Surfaces worn flat and shiny, or front teeth with a straight level edge, are mechanical wear from tooth against tooth. This is visible to us long before it is visible to you."
            ]
          },
          {
            title: "Fillings and Crowns That Keep Breaking",
            body: [
              "Restorations failing repeatedly in the same mouth are rarely a materials problem. They are a force problem. If you have replaced the same filling twice, grinding is the likely cause and needs addressing before more work is placed."
            ]
          },
          {
            title: "Unexplained Tooth Sensitivity",
            body: [
              "Grinding wears through enamel and exposes the dentine underneath, which connects to the nerve. Generalised sensitivity across several teeth with no decay to explain it frequently traces back to nightly wear."
            ]
          },
          {
            title: "Clicking or a Tired Jaw Joint",
            body: [
              "Sustained clenching loads the jaw joint for hours at a time. Clicking on opening, difficulty opening wide first thing, or a jaw that feels fatigued by mid-morning all point the same way, and a guard is usually the first step."
            ]
          },
          {
            title: "Prevents Further Enamel Loss",
            body: [
              "Enamel does not grow back. Every year of unprotected grinding removes structure permanently, and the endpoint is teeth needing crowns simply to restore their original height. A guard stops that progressing."
            ]
          },
          {
            title: "Protects Existing Dental Work",
            body: [
              "Crowns, veneers, bridges and implants all cost considerably more than a guard. Grinding force is the most common reason quality work fails early, which is why we recommend a guard alongside any significant restorative or cosmetic treatment."
            ]
          },
          {
            title: "Relieves Morning Tension and Headaches",
            body: [
              "By separating the teeth and letting the muscles settle into a less contracted position, a guard reduces overnight muscle activity. Most patients notice a difference in morning tension within the first two weeks."
            ]
          },
          {
            title: "Digitally Scanned and Bite Adjusted",
            body: [
              "Your teeth are scanned with our intraoral scanner and the guard made to that exact model, then adjusted in the mouth so your bite meets it evenly across every contact. That adjustment is what makes it comfortable enough to actually wear."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "CUSTOM GUARDS AND WHAT YOU BUY AT THE PHARMACY",
        text: [
          "The difference is not comfort alone. A poorly fitting guard can make grinding worse by encouraging the jaw to hunt for a stable position all night."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "CUSTOM NIGHT GUARD:",
            text: [
              "Made from a digital scan of your teeth, with the material and thickness chosen for how heavily you grind, from thin for light clenching to rigid for heavy bruxism. The bite is adjusted at delivery so it meets evenly. It stays in place without being bitten onto and typically serves for several years."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "BOIL-AND-BITE GUARDS:",
            text: [
              "Over-the-counter guards are soft and generic. Soft material tends to invite chewing rather than discourage it, which increases muscle activity in some patients. The fit is approximate, so it moves during the night, and an appliance that shifts puts uneven force on individual teeth. Better than nothing in an emergency, and worse than a proper guard in every other respect."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS CHOOSE US FOR NIGHT GUARDS",
        text: [
          "A guard is a small appliance where fit and bite adjustment decide whether it helps or irritates."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Digital Scanning, No Impression Trays",
            text: "Your guard is made from an exact digital record of your teeth, which means a better fit at delivery and less time in the chair.",
            icon: images.stepConsultation
          },
          {
            title: "Bite Adjusted at Delivery",
            text: "We refine the contacts so your bite meets the guard evenly across every tooth. This is the step that decides whether you wear it or leave it in a drawer.",
            icon: images.stepPreparation
          },
          {
            title: "The Cause Assessed, Not Just the Symptom",
            text: "Grinding often connects to jaw joint problems or airway issues, and we evaluate for both rather than simply handing you an appliance.",
            icon: images.stepTreatment
          },
          {
            title: "Designed Around Your Dental Work",
            text: "For patients with veneers, crowns or implants, the guard is designed specifically to protect that work rather than made to a standard pattern.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "STOP THE WEAR BEFORE IT NEEDS CROWNS",
        text: [
          "Grinding damage builds quietly for years, and the point at which it becomes obvious is usually the point at which it becomes expensive to fix. If you wake with a tight jaw, or a dentist has mentioned wear on your teeth, a guard is a straightforward way to protect what you still have. Book an assessment with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT NIGHT GUARDS",
        text: ["The questions patients ask most often before committing to wearing one."],
        items: [
          {
            question: "How do I know if I grind my teeth at night?",
            answer: [
              "Most people do not, until a partner mentions it or a dentist sees the wear. The signs we look for are flattened chewing surfaces, worn front edges, small stress fractures in the enamel, and restorations that fail repeatedly. Symptoms you might notice yourself include morning jaw tightness, temple headaches on waking and unexplained sensitivity. Dr. Shir will show you the wear on your own teeth so you can see the evidence directly."
            ]
          },
          {
            question: "Is a custom night guard worth the cost over a store-bought one?",
            answer: [
              "For anything beyond occasional light clenching, yes. Store-bought guards are soft and approximate, so they move during the night and can encourage chewing rather than discourage it. A custom guard fits precisely, stays put, uses material matched to how hard you grind, and has your bite adjusted onto it. It also lasts several years rather than several months, which narrows the cost difference considerably."
            ]
          },
          {
            question: "Will a night guard stop me grinding?",
            answer: [
              "It does not stop the underlying habit, which is driven by factors including stress, sleep quality, bite alignment and sometimes airway problems. What it does is prevent the damage, by absorbing force and keeping the teeth apart. In many patients, reducing muscle strain also lessens the intensity of the grinding over time. Where an airway issue is driving it, treating that can address the cause, and we assess for it."
            ]
          },
          {
            question: "How long does a night guard last?",
            answer: [
              "Typically three to five years, though heavy grinders wear through them faster, which is useful information in itself. A guard showing significant wear has absorbed force your teeth would otherwise have taken. We check it at your regular visits and replace it when the protection starts thinning."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Night Guards - Beverly Hills Dental",
      description: "A precision-fitted guard that absorbs the force of nightly grinding, protects your teeth from wear, and relieves the morning jaw ache that comes with it."
    }
  },
  {
    slug: "sleep-apnea-treatment",
    title: "Sleep Apnea Treatment",
    category: "preventive-dentistry",
    order: 25,
    sections: [
      {
        _type: "hero",
        heading: "Sleep Apnea Treatment in Beverly Hills",
        subheading: "Oral Appliance Therapy",
        text: [
          "A custom oral appliance for diagnosed obstructive sleep apnea, fitted and adjusted here and managed alongside your physician. Quiet, portable, and worn by patients who could not tolerate CPAP."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Where Dentistry Fits Into Sleep Apnea Care",
        text: [
          "Obstructive sleep apnea occurs when the soft tissues at the back of the throat narrow or collapse during sleep, interrupting breathing repeatedly through the night. Oral appliance therapy treats it with a custom device that holds the lower jaw slightly forward while you sleep, increasing the space in the airway behind the tongue. The boundary matters here. Sleep apnea is diagnosed by a physician on the basis of a sleep study, and a dentist does not diagnose it. What we can do is recognise the signs, several of which appear in the mouth where we look routinely, refer you for testing, and then fit and manage the appliance once a diagnosis exists."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "SIGNS, TREATMENT AND WHAT TO EXPECT",
        text: [
          "The signs worth getting tested for, and what appliance therapy involves once a diagnosis is in place."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Loud, Habitual Snoring",
            body: [
              "Snoring is airflow forcing past soft tissue partly obstructing the airway. Not everyone who snores has apnea, but most people with obstructive apnea snore, which makes it the most common route to diagnosis."
            ]
          },
          {
            title: "Witnessed Pauses in Breathing",
            body: [
              "A partner describing episodes where you appear to stop breathing and then gasp or snort is describing the condition directly. That observation alone is generally reason enough to be referred for a sleep study."
            ]
          },
          {
            title: "Waking Unrefreshed After a Full Night",
            body: [
              "Repeated interruptions in breathing fragment sleep, often without the person remembering waking at all. Time in bed and restorative sleep are not the same thing, which is why daytime tiredness persists no matter how early you turn in."
            ]
          },
          {
            title: "Morning Headaches and Dry Mouth",
            body: [
              "Headaches on waking are commonly reported in obstructive sleep apnea. Waking with a very dry mouth or throat suggests mouth breathing overnight, which also raises the risk of decay and gum inflammation."
            ]
          },
          {
            title: "Grinding, Worn Teeth and a Scalloped Tongue",
            body: [
              "There is a documented association between airway obstruction and nighttime grinding, though the relationship is not fully understood and one does not prove the other. A tongue with indentations along its edges suggests it is being pressed against the teeth. These are signs we notice during ordinary examinations."
            ]
          },
          {
            title: "Screening Here, Diagnosis by a Physician",
            body: [
              "We look at wear patterns, tongue posture, tonsil size and, where a cone beam scan has been taken, the visible airway space. That identifies risk. It does not diagnose. Where the picture suggests apnea, you are referred for a sleep study, either in a laboratory or at home."
            ]
          },
          {
            title: "How the Appliance Works",
            body: [
              "It holds the lower jaw slightly forward during sleep. Because the tongue and throat tissues are attached to the lower jaw, moving it forward increases the space behind them and makes collapse less likely. The device is roughly the size of a night guard and needs no power."
            ]
          },
          {
            title: "Fitting and Titration",
            body: [
              "Digital scans are taken and a custom mandibular advancement device made. It is then advanced gradually across several appointments to find a position that improves symptoms with the least strain on the jaw. Advancing in small increments is what makes it tolerable, and it is why this is not a one-visit treatment."
            ]
          },
          {
            title: "Side Effects and Monitoring",
            body: [
              "Jaw tightness and extra salivation in the first weeks are common and settle. Over years of wear, small bite changes can develop, which is why your bite is recorded at the outset and reviewed at every appointment. You should know that before starting rather than discover it later."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "ORAL APPLIANCE OR CPAP",
        text: [
          "Both are legitimate treatments and the decision sits with your physician. This is the comparison patients most often ask us to explain."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "ORAL APPLIANCE THERAPY:",
            text: [
              "Recognised for mild to moderate obstructive sleep apnea, and for more severe cases where CPAP cannot be tolerated. No power required, fits in a pocket, and silent. The practical advantage is consistency, since an appliance worn every night is treating the condition every night."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "CPAP:",
            text: [
              "Generally more effective, particularly for severe apnea, and it remains the first-line treatment where a patient can use it consistently. The difficulty is tolerance. A machine that sits unused in a cupboard treats nothing, which is where appliance therapy becomes the better practical option."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY PATIENTS COME TO US FOR APPLIANCE THERAPY",
        text: [
          "Airway signs are part of how we examine every patient, not a separate service you have to ask for."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Airway Assessed Routinely",
            text: "Wear patterns, tongue posture and airway space are checked at examinations, so risk is often picked up in patients who came in for something else entirely.",
            icon: images.stepConsultation
          },
          {
            title: "Coordinated With Your Physician",
            text: "We work alongside sleep physicians rather than around them. Diagnosis and medical management stay where they belong.",
            icon: images.stepPreparation
          },
          {
            title: "Titrated Over Several Visits",
            text: "The appliance is advanced gradually rather than set to a final position on day one, which is what makes it tolerable enough to wear every night.",
            icon: images.stepTreatment
          },
          {
            title: "Grinding and TMJ Assessed Together",
            text: "Bruxism, jaw joint problems and airway obstruction overlap constantly. Treating one while ignoring the others rarely holds.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "IF YOU SNORE AND WAKE UP TIRED",
        text: [
          "Untreated obstructive sleep apnea is associated in the research literature with high blood pressure, cardiovascular disease, stroke and daytime impairment. It is also commonly undiagnosed, because the person experiencing it is asleep for all of it. An airway assessment takes one appointment and will tell you whether a sleep study is worth arranging. Book with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT SLEEP APNEA TREATMENT",
        text: ["The questions patients ask most often before starting appliance therapy."],
        items: [
          {
            question: "Can a dentist diagnose sleep apnea?",
            answer: [
              "No. Diagnosis requires a sleep study interpreted by a physician. A dentist can screen for the signs, many of which appear in the mouth and airway, and refer you for testing. Once a diagnosis exists, we can make, fit, adjust and monitor an oral appliance. Any dental practice presenting itself as able to diagnose the condition is overstating its role."
            ]
          },
          {
            question: "Is an oral appliance as effective as CPAP?",
            answer: [
              "For severe apnea, CPAP is generally more effective and remains the first-line treatment where it is tolerated. For mild to moderate apnea, oral appliance therapy is recognised as an appropriate option by the American Academy of Sleep Medicine. The practical qualifier is consistency of use, and your physician’s assessment of severity guides the decision."
            ]
          },
          {
            question: "Is it comfortable to sleep with?",
            answer: [
              "There is an adjustment period of one to two weeks. Jaw tightness in the mornings and extra salivation overnight are both commonly reported early on and generally settle. Because the appliance is advanced gradually rather than set to its final position immediately, that adaptation is considerably easier than it would otherwise be."
            ]
          },
          {
            question: "Will insurance cover an oral appliance?",
            answer: [
              "Oral appliance therapy for diagnosed obstructive sleep apnea is often processed through medical rather than dental insurance, since it treats a medical condition. Coverage varies by plan and generally requires the sleep study and physician documentation. We will tell you what is typically needed and provide our documentation, and you receive a written fee regardless."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Sleep Apnea Treatment - Beverly Hills Dental",
      description: "A custom oral appliance for diagnosed obstructive sleep apnea, fitted and adjusted here and managed alongside your physician. Quiet, portable, and worn by"
    }
  },
  // TTR-910 (Oct 26, 2026): two services Dr. Shir now offers. Written so they hold for any of the methods she may use;
  // each "TODO(TTR-910)" marks a line to update once she answers which products she uses, who they are for and the cost.
  {
    slug: "no-drill-cavity-care",
    title: "No-Drill Cavity Care",
    category: "preventive-dentistry",
    order: 25.1,
    sections: [
      {
        _type: "hero",
        heading: "No-Drill Cavity Care in Beverly Hills",
        subheading: "Preventive Dentistry",
        text: [
          "Early tooth decay can often be stopped, and sometimes reversed, before it becomes a cavity, with no drilling. These treatments put minerals back into weakened enamel and keep small lesions from growing. Enamel that is already lost does not grow back, so the aim is to find decay early and stop it there."
        ],
        image: images.dentistShowingXRay,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What No-Drill Cavity Care Can and Cannot Do",
        text: [
          "Tooth decay is a tug of war. Acid made by the bacteria in plaque pulls minerals out of enamel, and saliva and fluoride put them back. When minerals are lost faster than they return, a chalky white spot can appear. At that stage, decay can be stopped or reversed. Once it breaks through the surface and forms a cavity, the damage stays, and a dentist has to repair it with a filling ([NIDCR](https://www.nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process)).",
          "That is why we never promise to regrow enamel: once it is lost, it cannot grow back ([Cleveland Clinic](https://my.clevelandclinic.org/health/diseases/tooth-erosion)). What these treatments can do is harden weakened enamel by putting minerals back into it, seal early lesions so acid cannot reach them, and stop many lesions from getting bigger. An American Dental Association expert panel reviewed the research on no-drill treatments and recommends several of them for stopping or reversing decay in children and adults ([ADA guideline, 2018](https://pubmed.ncbi.nlm.nih.gov/30261951/))."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "No-Drill Options We May Use",
        // TODO(TTR-910): keep only the options Dr. Shir uses, and name the product where she wants it named.
        text: [
          "Which option fits depends on where the lesion is, how deep it goes and how likely you are to get new decay. Often two are combined."
        ],
        image: images.smileMirrorExam,
        items: [
          {
            title: "Fluoride Varnish",
            body: [
              "A thin coat of concentrated fluoride painted on the teeth in a few minutes. It helps put minerals back into early white spots and makes enamel more resistant to acid. The ADA panel lists 5% sodium fluoride varnish among the most effective no-drill treatments ([ADA guideline](https://pubmed.ncbi.nlm.nih.gov/30261951/))."
            ]
          },
          {
            title: "Prescription Fluoride Toothpaste",
            body: [
              "For people more likely to get decay, a toothpaste or gel with 5,000 ppm fluoride, used at home, can help stop early lesions, especially on exposed roots. It is one of the treatments the ADA panel recommends ([ADA guideline](https://pubmed.ncbi.nlm.nih.gov/30261951/))."
            ]
          },
          {
            title: "Sealants Over Early Lesions",
            body: [
              "A thin coating bonded into the grooves of back teeth. Placed over an early lesion in a groove, a sealant can help stop it from getting worse ([ADA guideline](https://pubmed.ncbi.nlm.nih.gov/30261951/)). More on our [dental sealants](/services/preventive-dentistry/dental-sealants/) page."
            ]
          },
          {
            title: "Silver Diamine Fluoride (SDF)",
            body: [
              "A liquid brushed onto decay that can stop it from getting worse, with no drilling. The trade-off is that it turns the decayed area black, and the stain stays. In the US, SDF is cleared by the FDA for tooth sensitivity, and using it to stop decay is an off-label use. The ADA notes that it is usually reapplied twice a year to keep the benefit ([ADA](https://www.ada.org/resources/ada-library/oral-health-topics/silver-diamine-fluoride))."
            ]
          },
          {
            title: "Resin Infiltration",
            body: [
              "For early lesions between teeth that have not broken through the surface. The surface is prepared with a gel, with no drilling, and a very thin liquid resin soaks into the weakened enamel and is hardened with a light, blocking the paths acid travels through. A review of randomized trials found that treated lesions were less likely to get worse ([Cebula and colleagues, 2023](https://pubmed.ncbi.nlm.nih.gov/36675656/)). Some of that review's authors work with the company that makes the material."
            ]
          },
          {
            title: "Self-Assembling Peptide (P11-4)",
            body: [
              "A liquid applied to an early white spot. It forms a framework inside the weakened enamel that minerals from saliva can build on. A 2023 review of six clinical trials found it likely helps stop early lesions and makes them smaller, though the trials had weaknesses and the authors call for longer studies ([Keeper and colleagues, 2023](https://pubmed.ncbi.nlm.nih.gov/37245138/))."
            ]
          },
          {
            title: "Checking Progress",
            body: [
              "No-drill care is not a one-time fix. We record each lesion and recheck it at your visits with an exam and, when needed, [digital X-rays](/services/dental-technology/digital-x-rays/). If a lesion keeps growing or breaks through the surface, a small [filling](/services/restorative-dentistry/dental-fillings/) is the right treatment."
            ]
          },
          {
            title: "Where Ozone Fits",
            body: [
              "Our [ozone therapy](/services/dental-technology/ozone-therapy/) page explains how we use ozone. For early lesions it is only ever an extra step alongside fluoride and monitoring, because the evidence for ozone on its own is weak."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Who It Is For",
        text: [
          "No-drill care works when decay is found early, which is one more reason regular [checkups](/services/preventive-dentistry/checkups-exams/) matter."
        ],
        cards: [
          {
            image: images.digitalXRayRoom,
            title: "A GOOD FIT:",
            // TODO(TTR-910): confirm who Dr. Shir offers this to (children, adults, seniors, braces or aligner wearers).
            text: [
              "White spots or early lesions that have not broken through the enamel, decay starting on exposed roots, and children and adults who are more likely to get decay. With silver diamine fluoride, some cavities can also be stopped when avoiding a filling matters more than how the tooth looks."
            ]
          },
          {
            image: images.dentistExaminingPatient683,
            title: "WHEN A FILLING IS STILL NEEDED:",
            text: [
              "When decay has made a hole in the tooth, reaches deep inside it, or keeps growing despite no-drill care. Then a filling protects the tooth, and we keep it as small as the tooth allows."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "How No-Drill Cavity Care Works",
        text: ["Many of these treatments take only a few minutes and can be done at a regular checkup."],
        items: [
          {
            title: "Find Lesions Early",
            text: "An exam, and X-rays when needed, show where enamel has lost minerals and how deep the lesion goes.",
            icon: images.stepConsultation
          },
          {
            title: "Look at the Cause",
            text: "We go through what drives your decay: sugary snacks and drinks, dry mouth, brushing and flossing, and how much fluoride you get.",
            icon: images.stepPreparation
          },
          {
            title: "Treat Without Drilling",
            text: "We use the option that fits each lesion, often more than one, and tell you why.",
            icon: images.stepTreatment
          },
          {
            title: "Recheck and Repeat",
            text: "We check the lesions at your next visits and repeat treatments such as fluoride varnish when needed.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Catch Decay While It Can Still Be Stopped",
        text: [
          "If you have white spots on your teeth, or were told a tooth is one to watch, book a visit with Dr. Shir. We will show you what we see and go through your no-drill and filling options with you."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About No-Drill Cavity Care",
        text: ["The questions patients ask most often, answered plainly."],
        items: [
          {
            question: "Can tooth enamel grow back?",
            answer: [
              "No. Once enamel is lost, it cannot grow back ([Cleveland Clinic](https://my.clevelandclinic.org/health/diseases/tooth-erosion)). Weakened enamel in an early lesion can take minerals back in from saliva and fluoride, which can stop or reverse early decay ([NIDCR](https://www.nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process)). That is what no-drill care aims for."
            ]
          },
          {
            question: "Does this mean I will not need a filling?",
            answer: [
              "Not always. No-drill care can stop many early lesions, but a cavity that has broken through the surface is lasting damage, and a filling is how a dentist repairs it ([NIDCR](https://www.nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process)). We tell you which one you need and why."
            ]
          },
          {
            question: "Does silver diamine fluoride stain teeth?",
            answer: [
              "Yes. It turns the decayed part of the tooth black, and the stain stays ([ADA](https://www.ada.org/resources/ada-library/oral-health-topics/silver-diamine-fluoride)). We talk it through with you before using it, especially on a tooth that shows when you smile."
            ]
          },
          {
            question: "Is no-drill cavity care covered by insurance?",
            // TODO(TTR-910): replace with Dr. Shir's cost or insurance note, or keep this neutral answer.
            answer: [
              "Coverage depends on your plan and on the treatment, so we check your plan and give you the cost before we start. We accept Aetna, Cigna, Delta Dental, MetLife and UnitedHealthcare, and offer payment plans through Cherry and CareCredit."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "No-Drill Cavity Care - Beverly Hills Dental",
      description: "Early tooth decay can often be stopped without drilling. How no-drill cavity care works at our Beverly Hills office, and when a filling is still needed."
    }
  },
  {
    slug: "biofilm-therapy",
    title: "Biofilm Therapy",
    category: "preventive-dentistry",
    order: 25.2,
    sections: [
      {
        _type: "hero",
        heading: "Biofilm Therapy in Beverly Hills",
        subheading: "Preventive Dentistry",
        // TODO(TTR-910): name the system (for example Guided Biofilm Therapy) once Dr. Shir confirms it.
        text: [
          "Plaque is a biofilm: a sticky film of bacteria on your teeth and gums. Biofilm therapy is a professional cleaning that first colors the biofilm so it can be seen, then removes it with air polishing and ultrasonic instruments, to help keep your teeth and gums healthy."
        ],
        image: images.gumProcedure2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "What Biofilm Therapy Is",
        text: [
          "Plaque is a sticky film of bacteria, and the bacteria in plaque and tartar can trigger the inflammation that damages the gums ([NIDCR](https://www.nidcr.nih.gov/health-info/gum-disease)). Biofilm therapy is a way of doing the professional cleaning that removes them. One well-known version is called Guided Biofilm Therapy.",
          "First, a disclosing solution colors the biofilm so it shows up. Most of it is then removed with air polishing, a fine spray of water, air and a very fine powder. Ultrasonic instruments remove any hard tartar that remains. In a randomized trial, a cleaning guided by the disclosing dye left about half as much plaque behind as the same cleaning without it ([Mensi and colleagues, 2020](https://pubmed.ncbi.nlm.nih.gov/32348624/))."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "What Happens During Biofilm Therapy",
        text: ["Each step has a purpose, and you can see the difference in the mirror."],
        image: images.toothPolishing,
        items: [
          {
            title: "Your Gums and Health History",
            body: [
              "We start with your medical history, an exam and gum measurements, so we know whether a regular cleaning is enough or you need treatment for gum disease."
            ]
          },
          {
            title: "Coloring the Biofilm",
            body: [
              "A disclosing solution stains plaque so it can be seen. We show you where it builds up, which also shows where to focus when you brush and floss at home."
            ]
          },
          {
            title: "Air Polishing",
            body: [
              "A fine spray of water, air and a very fine powder lifts the colored biofilm off the teeth and along the gumline, including around fillings, crowns and implants."
            ]
          },
          {
            title: "Removing Tartar",
            body: [
              "Air polishing removes soft biofilm, not hardened tartar. Where tartar remains, it is removed with ultrasonic or hand instruments."
            ]
          },
          {
            title: "A Final Check",
            body: [
              "We look again for any colored areas left behind, then go through your home care and agree when you should come back."
            ]
          },
          {
            title: "Around Dental Implants",
            body: [
              "Implants need regular professional cleaning too, because the gum and bone around them can become inflamed. Air-polishing powders are one of the tools studied for cleaning below the gumline, including around implants ([Gheorghe and colleagues, 2023](https://pubmed.ncbi.nlm.nih.gov/37959401/))."
            ]
          },
          {
            title: "What the Research Shows",
            body: [
              "A 2026 review of five studies comparing Guided Biofilm Therapy with standard scaling found that patients reported less pain and the treatment took less time, but the effect on gum measurements such as bleeding and pocket depth was mixed. The authors concluded that the evidence does not show it is clinically better than standard cleaning ([Yein and colleagues, 2026](https://pubmed.ncbi.nlm.nih.gov/42032569/))."
            ]
          },
          {
            title: "What It Does Not Replace",
            body: [
              "Biofilm therapy does not replace brushing and flossing every day, and on its own it is not a treatment for advanced gum disease. If you have deep gum pockets or bone loss, you may need [deep cleanings](/services/periodontic-dentistry/deep-cleanings/) or other [gum disease treatment](/services/periodontic-dentistry/gum-disease-treatment/)."
            ]
          }
        ],
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "Your Gums and the Rest of Your Body",
        text: [
          "Gum health and general health are linked. Here is what the research does and does not show."
        ],
        cards: [
          {
            image: images.hygienistTreatingPatient,
            title: "WHAT THE RESEARCH SHOWS:",
            text: [
              "Diabetes is a risk factor for gum disease, and heart and blood vessel disease is among the illnesses associated with it ([NIDCR](https://www.nidcr.nih.gov/health-info/gum-disease)). The American Heart Association found that studies support a link between gum disease and heart and blood vessel disease, but do not show that gum disease causes it, or that treating gum disease prevents it ([AHA, 2012](https://pubmed.ncbi.nlm.nih.gov/22514251/))."
            ]
          },
          {
            image: images.dentistPatientChat,
            title: "WHAT IT MEANS FOR YOU:",
            text: [
              "In people with both diabetes and gum disease, a Cochrane review found that treating the gum disease with deep cleaning improved blood sugar control over the following months ([Simpson and colleagues, 2022](https://pubmed.ncbi.nlm.nih.gov/35420698/)). Healthy gums are worth having for their own sake, but biofilm therapy is not a treatment for heart disease or diabetes, and your doctor's care stays just as important."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Our Approach to Biofilm Therapy",
        text: ["A cleaning you can see, explained as we go."],
        items: [
          {
            title: "You See What We See",
            text: "The disclosing dye shows exactly where plaque collects, so our home care advice fits your mouth.",
            icon: images.stepConsultation
          },
          {
            title: "Comfort Matters",
            text: "In studies, patients reported less pain with this method than with standard scaling. Tell us if anything feels sensitive and we will adjust.",
            icon: images.stepPreparation
          },
          {
            title: "Part of Your Gum Care",
            text: "It works alongside exams, gum measurements and, when needed, deep cleanings or laser gum treatment.",
            icon: images.stepTreatment
          },
          {
            title: "Visits That Fit Your Gums",
            text: "How often you come back depends on the health of your gums, and we set it with you.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Start With a Clean, Healthy Mouth",
        // TODO(TTR-910): confirm whether biofilm therapy is part of every cleaning or a separate visit.
        text: [
          "If your gums bleed when you brush, you have implants to keep clean, or you are due for a cleaning, ask about biofilm therapy when you book with Dr. Shir's team. Bleeding gums can be an early sign of gum disease, and it is easier to treat when caught early."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Biofilm Therapy",
        text: ["The questions patients ask most often, answered plainly."],
        items: [
          {
            question: "Is biofilm therapy the same as a regular cleaning?",
            answer: [
              "It does the same job, removing plaque and tartar, in a different order and with different tools: a disclosing dye first, then air polishing, then ultrasonic instruments for tartar. Studies comparing it with standard cleaning found less pain and shorter visits, but not clearly better gum results ([Yein and colleagues, 2026](https://pubmed.ncbi.nlm.nih.gov/42032569/))."
            ]
          },
          {
            question: "Can biofilm therapy improve my heart health or diabetes?",
            answer: [
              "We cannot promise that. Gum disease is linked with heart disease, but the research shows a link, not proof that gum disease causes heart disease or that treating it prevents heart disease ([AHA, 2012](https://pubmed.ncbi.nlm.nih.gov/22514251/)). In people with diabetes and gum disease, treating the gum disease with deep cleaning improved blood sugar control in clinical trials ([Simpson and colleagues, 2022](https://pubmed.ncbi.nlm.nih.gov/35420698/)). Your doctor stays in charge of your heart and diabetes care."
            ]
          },
          {
            question: "Does biofilm therapy hurt?",
            answer: [
              "In studies, patients reported less pain with this method than with standard scaling ([Yein and colleagues, 2026](https://pubmed.ncbi.nlm.nih.gov/42032569/)). Sensitive teeth or inflamed gums can still feel tender, so tell us and we will adjust or numb the area."
            ]
          },
          {
            question: "Is biofilm therapy covered by insurance?",
            // TODO(TTR-910): replace with Dr. Shir's cost or insurance note, or keep this neutral answer.
            answer: [
              "Coverage depends on your plan and on whether the visit is a routine cleaning or gum treatment, so we check your plan and give you the cost before we start. We accept Aetna, Cigna, Delta Dental, MetLife and UnitedHealthcare, and offer payment plans through Cherry and CareCredit."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Biofilm Therapy - Beverly Hills Dental",
      description: "Biofilm therapy in Beverly Hills: a disclosing dye shows the plaque, then air polishing and ultrasonic cleaning remove it. What it does and does not do."
    }
  },
  {
    slug: "ozone-therapy",
    title: "Ozone Therapy",
    category: "dental-technology",
    order: 26,
    sections: [
      {
        _type: "hero",
        heading: "Ozone Therapy in Beverly Hills",
        subheading: "Dental Technology",
        text: [
          "An adjunct we use alongside conventional treatment, as part of a biological and minimally invasive approach to dentistry."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What Ozone Is, and How We Use It",
        text: [
          "Ozone is a form of oxygen with three atoms rather than two. It has been used in medicine and dentistry for many years for its antimicrobial properties, and in a dental setting it is applied either as a gas directed at a specific site or as ozonated water used to irrigate one. Application takes a few minutes and most patients feel nothing at all. We use it as an adjunct, which is the accurate description of its role. It sits alongside conventional treatment rather than in place of it: a cavity is still cleaned and filled, a periodontal pocket is still cleaned mechanically, a socket is still managed properly. What ozone contributes is an additional step aimed at reducing bacterial levels at the site being treated."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHERE OZONE FITS INTO TREATMENT",
        text: [
          "In every case below, ozone is an additional step within a conventional procedure rather than a treatment on its own."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Preparing a Cavity Before Filling",
            body: [
              "After decay is removed and before the composite filling is placed, ozone is applied to the prepared surface with the aim of reducing residual bacteria in the cavity before it is sealed."
            ]
          },
          {
            title: "Early Enamel Lesions",
            body: [
              "For very early lesions that have not yet broken through the surface, ozone may be used alongside fluoride, dietary advice and close monitoring as part of a conservative approach. Whether such a lesion remineralises depends on many factors, and where it progresses a filling remains the appropriate treatment. We monitor these sites at every visit rather than assuming an outcome."
            ]
          },
          {
            title: "Periodontal Pockets",
            body: [
              "Following scaling and root planing during a deep cleaning, ozone can be delivered into the cleaned pockets as an additional antimicrobial step. It supplements the mechanical cleaning, which is the part that removes the deposits, and is used alongside our laser therapy protocol."
            ]
          },
          {
            title: "Extraction Sockets",
            body: [
              "After a tooth is removed, the socket may be treated with ozone as part of managing the site for clean healing, alongside standard extraction aftercare."
            ]
          },
          {
            title: "Sensitive Root Surfaces",
            body: [
              "Ozone is sometimes applied to exposed root surfaces as one option among several for managing sensitivity. Response varies between patients, and we would usually combine it with desensitising agents and a review of brushing technique."
            ]
          },
          {
            title: "What the Evidence Supports",
            body: [
              "Ozone has well-documented antimicrobial properties in laboratory conditions, and there is published work supporting its use as an adjunct in periodontal treatment and in disinfecting a prepared cavity. The evidence for using ozone to arrest or reverse established tooth decay is considerably weaker, and a Cochrane systematic review concluded there was insufficient reliable evidence to support it for that purpose. We do not present it that way."
            ]
          },
          {
            title: "What Ozone Does Not Do",
            body: [
              "It does not replace the drill. Where decay has broken through the enamel surface, a filling is the appropriate treatment. It does not reliably replace antibiotics, and whether one is needed remains a clinical judgement made case by case."
            ]
          },
          {
            title: "Part of a Wider Approach",
            body: [
              "Ozone is one component of how we work, alongside conservative preparation, onlays instead of crowns where the tooth allows it, metal-free materials and soft tissue laser treatment. It is not a reason on its own to choose a practice."
            ]
          },
          {
            title: "Comfort and Application",
            body: [
              "Most patients feel little or nothing. Application takes a few minutes, requires no anaesthetic in most cases when used on its own, and there is no recovery time."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "ADJUNCT, NOT SUBSTITUTE",
        text: [
          "Being straight about what ozone contributes is part of why patients trust the rest of what we tell them."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "WHAT WE WILL TELL YOU:",
            text: [
              "What the conventional treatment for your situation is, and what ozone adds to it. Where decay needs a filling, you get a filling. Where an infection needs systemic treatment, that judgement is made on your case and an antibiotic may still be appropriate. Ozone is discussed as part of the plan rather than sold as a headline."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "WHY WE OFFER IT:",
            text: [
              "Decay and gum disease are both driven by bacterial activity, and any step that reduces bacterial load at the site being treated is worth considering within a wider protocol. It also fits an approach that favours removing as little healthy tooth structure as the situation allows and treating early lesions conservatively where that is clinically appropriate."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "OUR APPROACH TO OZONE",
        text: ["How ozone is used matters considerably more than the fact that we have the equipment."],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Adjunct, Not Substitute",
            text: "Ozone supplements established treatment here. We will always tell you what the conventional treatment is and what ozone adds to it.",
            icon: images.stepConsultation
          },
          {
            title: "Part of a Wider Philosophy",
            text: "Biological and minimally invasive treatment across the practice, including conservative preparation, onlays over crowns where the tooth allows, and metal-free materials.",
            icon: images.stepPreparation
          },
          {
            title: "Combined With Laser Therapy",
            text: "For periodontal cases, ozone is used alongside our soft tissue laser protocol rather than as a standalone measure.",
            icon: images.stepTreatment
          },
          {
            title: "No Extra Pressure, No Upsell",
            text: "Ozone forms part of the treatment where it is appropriate. It is discussed, not sold.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "BIOLOGICAL DENTISTRY, HONESTLY DESCRIBED",
        text: [
          "Patients who want a biological, minimally invasive approach get one here, and they also get an honest account of where the evidence is strong and where it is not. If that is the kind of dentistry you are looking for, book a consultation with Dr. Shir and we will talk through what it actually involves."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT OZONE THERAPY",
        text: ["The questions patients ask most often about ozone."],
        items: [
          {
            question: "Does ozone therapy mean I will not need a filling?",
            answer: [
              "No. Where decay has broken through the enamel surface, a filling is the appropriate treatment and ozone does not change that. For very early lesions that have not yet cavitated, ozone may be used alongside fluoride, dietary changes and monitoring as part of a conservative approach, with the understanding that the lesion may still progress and need restoring. We monitor and we tell you honestly what we see."
            ]
          },
          {
            question: "Does it replace antibiotics?",
            answer: [
              "It is used locally at the site being treated, and in some situations that may reduce the need for a systemic antibiotic. Whether an antibiotic is needed remains a clinical decision based on your case, your medical history and the nature of the infection. There will be situations where one is still appropriate, and we will say so."
            ]
          },
          {
            question: "Is ozone therapy safe?",
            answer: [
              "Applied at dental concentrations, to a localised site, by a trained clinician, ozone has a long history of use in dentistry and is well tolerated. Ozone gas should not be inhaled, which is why application is site-specific and controlled, with suction in place. Tell us if you have a respiratory condition such as asthma so it can be taken into account."
            ]
          },
          {
            question: "What does ozone treatment feel like?",
            answer: [
              "Most patients feel little or nothing. Application takes a few minutes, requires no anaesthetic in most cases when used on its own, and there is no recovery time afterwards."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Ozone Therapy - Beverly Hills Dental",
      description: "An adjunct we use alongside conventional treatment, as part of a biological and minimally invasive approach to dentistry."
    }
  },
  {
    slug: "digital-scanner",
    title: "Digital Scanner",
    category: "dental-technology",
    order: 27,
    sections: [
      {
        _type: "hero",
        heading: "Digital Dental Scanning in Beverly Hills",
        subheading: "Dental Technology",
        text: [
          "A small wand captures your teeth as an accurate 3D model in a few minutes. No trays, no material setting in your mouth, and a better fit on everything we make from it."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "No More Impression Trays",
        text: [
          "An intraoral scanner is a handheld wand that photographs your teeth from every angle and builds an accurate three-dimensional model on screen as it goes. It replaces the conventional impression: the tray, the putty that sets in your mouth, the gagging, and the wait to find out whether it came out well enough to use. Beyond comfort, the accuracy is better, particularly at the margin where a crown or veneer meets the tooth. That margin is where restorations succeed or fail over the following decade, so the improvement is not cosmetic. If a scan has a flaw, we see it immediately on screen and rescan that area in seconds rather than discovering the problem when the laboratory calls."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHAT WE USE THE SCANNER FOR",
        text: [
          "Where digital scanning replaces conventional impressions, and what it changes about each treatment."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Crowns, Onlays and Inlays",
            body: [
              "The restoration is made from an accurate digital model rather than a physical impression that can distort in transit. Fit at the margin is what determines how long it lasts and whether decay starts underneath it."
            ]
          },
          {
            title: "Porcelain Veneers",
            body: [
              "Your teeth are captured digitally, and the proposed result is designed against that model before any enamel is prepared. This is what allows you to see the design and approve it in advance rather than after the fact."
            ]
          },
          {
            title: "Clear Aligners",
            body: [
              "The full sequence of tooth movements is planned from the scan, which is how the projected end position can be shown to you before treatment starts. Aligner trays are then manufactured directly from that digital model."
            ]
          },
          {
            title: "Night Guards and Splints",
            body: [
              "A guard made from an accurate scan seats properly without needing to be bitten onto to stay in place. Fit is the difference between wearing it every night and leaving it in a drawer after a fortnight."
            ]
          },
          {
            title: "Bridges and Implant Restorations",
            body: [
              "Multi-unit restorations demand accuracy across a span rather than at a single tooth, and small errors compound. Digital capture holds that accuracy in a way physical impression material does not always manage."
            ]
          },
          {
            title: "Dentures and Partials",
            body: [
              "Scanning captures the tissue and remaining teeth without the tray, which is a considerable improvement for anyone with a strong gag reflex. Fewer adjustment appointments usually follow."
            ]
          },
          {
            title: "A Digital Record That Keeps",
            body: [
              "Your scans are stored, so we can compare your teeth today against a scan from three years ago. Wear from grinding and gum recession both happen too gradually to notice, and this makes them measurable rather than a matter of opinion."
            ]
          },
          {
            title: "Showing You What We See",
            body: [
              "The model appears on screen and can be rotated and enlarged. Being shown wear on your own molars, or the gap where a crown margin is failing, makes treatment decisions considerably easier than being told about them."
            ]
          },
          {
            title: "Faster, Fewer Appointments",
            body: [
              "The scan is sent to the laboratory the same day rather than posted, and nothing needs remaking because an impression distorted. That generally shortens the wait between preparation and fitting."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "DIGITAL SCANNING AND CONVENTIONAL IMPRESSIONS",
        text: [
          "Both produce a model of your teeth. The difference is in how it feels, how accurate it is, and what happens when something goes wrong."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "DIGITAL SCANNING:",
            text: [
              "A few minutes with a small wand, nothing setting in your mouth, and no tray to tolerate. Errors are visible immediately and corrected by rescanning a small area. The file goes to the laboratory the same day, and it is stored so your teeth can be compared over the years."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "CONVENTIONAL IMPRESSIONS:",
            text: [
              "A tray of material held in place for several minutes while it sets, which many patients find unpleasant and some cannot tolerate at all. Material can distort in transit, and a flaw is often only discovered at the laboratory, which means repeating the appointment. Still occasionally the better option in specific situations, and we will tell you if yours is one."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY DIGITAL SCANNING MATTERS",
        text: ["The comfort is what patients notice. The accuracy is what shows up ten years later."],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Better Fit at the Margin",
            text: "Where a restoration meets the tooth is where decay starts if the fit is poor. Digital accuracy at that margin is the single biggest factor in how long a crown or veneer lasts.",
            icon: images.stepConsultation
          },
          {
            title: "Comfortable for Everyone",
            text: "No trays and no setting material, which makes treatment possible for patients with a strong gag reflex who have previously avoided this kind of work entirely.",
            icon: images.stepPreparation
          },
          {
            title: "Errors Caught Immediately",
            text: "A flawed scan is visible on screen and corrected in seconds. A flawed impression is usually discovered days later, and it costs you another appointment.",
            icon: images.stepTreatment
          },
          {
            title: "A Record That Builds Over Time",
            text: "Scans are kept, so gradual changes like grinding wear and gum recession can be measured against your own past rather than estimated.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "IF IMPRESSIONS HAVE PUT YOU OFF TREATMENT",
        text: [
          "A strong gag reflex has kept plenty of people from having work they needed done. Digital scanning removes the tray and the material entirely, and takes a few minutes. If that has been the obstacle, it is worth another look. Book a consultation with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT DIGITAL SCANNING",
        text: ["The questions patients ask most often about scanning."],
        items: [
          {
            question: "Does the digital scan hurt or make me gag?",
            answer: [
              "**Neither, for almost everyone. The wand is small, nothing is placed in your mouth to set, and you can pause at any point. Patients who have struggled with conventional impressions generally manage a scan without difficulty, and it is the main reason we use one.**"
            ]
          },
          {
            question: "How long does a scan take?",
            answer: [
              "**A few minutes for a single tooth and around five to ten for a full arch, depending on what it is for. You can see the model building on screen as it goes, which most people find more interesting than they expect.**"
            ]
          },
          {
            question: "Is a digital scan more accurate than an impression?",
            answer: [
              "**For most restorative work, yes, particularly at the margin where the restoration meets the tooth. It also avoids the distortion that can happen when impression material travels to a laboratory. There are a few specific situations where a conventional impression remains preferable, and we will say so if yours is one of them.**"
            ]
          },
          {
            question: "Do you keep my scan?",
            answer: [
              "**Yes, and it is genuinely useful. Comparing a scan taken today against one from a few years ago shows grinding wear and gum recession that are far too gradual to notice visit to visit. It turns a subjective impression into a measurement.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Digital Scanner - Beverly Hills Dental",
      description: "A small wand captures your teeth as an accurate 3D model in a few minutes. No trays, no material setting in your mouth, and a better fit on everything we make"
    }
  },
  {
    slug: "digital-x-rays",
    title: "Digital X-Rays",
    category: "dental-technology",
    order: 28,
    sections: [
      {
        _type: "hero",
        heading: "Digital X-Rays in Beverly Hills",
        subheading: "Dental Technology",
        text: [
          "Imaging at a considerably lower radiation dose than film, appearing on screen instantly. This is how decay between teeth is found while it is still a filling."
        ],
        image: images.patientSmilingChair2,
        overlay: "none",
        textMaxWidth: 630
      },
      {
        _type: "textBand",
        heading: "Seeing What an Examination Cannot",
        text: [
          "A visual examination shows the surfaces of your teeth. It cannot show what is happening between them, beneath existing fillings, at the root tips or in the bone supporting them, and that is where a great deal of dental disease begins. Digital X-rays use an electronic sensor instead of film, producing an image on screen within seconds at a considerably lower radiation dose. The image can be enlarged, adjusted for contrast and compared directly against your previous ones, which is how small changes get spotted before they become symptoms. Nothing is developed in chemicals and nothing is stored in an envelope."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHAT DIGITAL X-RAYS SHOW US",
        text: ["What imaging reveals that an examination cannot, and how we use it."],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Decay Between Teeth",
            body: [
              "The contact point where two teeth touch is invisible to the eye and unreachable by a probe. It is one of the most common places for decay to start, and by the time it is visible without imaging it is usually well established."
            ]
          },
          {
            title: "Decay Beneath Existing Fillings",
            body: [
              "Old restorations fail quietly at the margins, and new decay develops underneath while the filling still looks intact from above. Imaging is the only way to find that before the tooth starts hurting."
            ]
          },
          {
            title: "Bone Levels and Gum Disease",
            body: [
              "Periodontal disease destroys the bone supporting your teeth, and X-rays show that bone level directly. Comparing today's image against one from three years ago turns a subjective impression into a measurement."
            ]
          },
          {
            title: "Infection at the Root Tip",
            body: [
              "An abscess forming at the end of a root shows as a dark area on the image, often before there is any pain at all. Finding it early is frequently the difference between a root canal and losing the tooth."
            ]
          },
          {
            title: "Cracks, Fractures and Trauma",
            body: [
              "Where a tooth has been knocked or is cracking under a heavy bite, imaging shows the extent below the gum line, which determines whether the tooth is restorable."
            ]
          },
          {
            title: "Impacted and Unerupted Teeth",
            body: [
              "Wisdom teeth and, in children, permanent teeth developing beneath the gum are tracked on imaging so problems can be anticipated rather than discovered once they cause pain."
            ]
          },
          {
            title: "Lower Dose Than Film",
            body: [
              "Digital sensors need considerably less radiation than the film systems they replaced, and the dose from a routine set of images is very small. Protective shielding is used as standard."
            ]
          },
          {
            title: "Taken at Intervals Matched to Your Risk",
            body: [
              "Imaging is not taken automatically at every visit. How often depends on your decay rate, gum health and existing restorations. Some patients need images annually, others less frequently, and we will explain which applies to you."
            ]
          },
          {
            title: "You See Them on Screen",
            body: [
              "Images appear instantly on a monitor in the room and can be enlarged. Being shown the shadow of decay between your own teeth is considerably more useful than being told it is there."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        textMaxWidth: 814
      },
      {
        _type: "cardPair",
        heading: "DIGITAL X-RAYS AND CONVENTIONAL FILM",
        text: ["Both produce a dental image. Almost everything else about them differs."],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "DIGITAL X-RAYS:",
            text: [
              "A considerably lower radiation dose, an image on screen within seconds, and the ability to enlarge, adjust contrast and compare against your previous images side by side. Files are stored digitally, shared instantly with a specialist if needed, and never lost in an envelope. No chemicals and no developing."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "CONVENTIONAL FILM:",
            text: [
              "A higher radiation dose, several minutes of chemical developing before anyone can look at the result, and a fixed image that cannot be adjusted. Comparing against past images means finding the physical films. Retakes mean repeating the exposure. There is no clinical advantage that would justify continuing with it."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "HOW WE USE IMAGING HERE",
        text: [
          "The value of imaging is not in taking it. It is in what gets noticed and what gets acted on."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Lower Dose as Standard",
            text: "Digital sensors throughout, protective shielding used every time, and the dose from a routine set kept very small.",
            icon: images.stepConsultation
          },
          {
            title: "Taken Only When Indicated",
            text: "Imaging intervals are set by your actual risk rather than taken automatically at every appointment. We will tell you why an image is being taken.",
            icon: images.stepPreparation
          },
          {
            title: "Compared Against Your History",
            text: "Your previous images are on file and reviewed alongside new ones. Change over time is what matters, and it is invisible if you only ever look at today.",
            icon: images.stepTreatment
          },
          {
            title: "Shown to You, Not Just Described",
            text: "Images go up on the screen in the room. You see the decay, the bone level or the crack yourself before deciding anything.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "MOST DENTAL PROBLEMS START WHERE YOU CANNOT SEE THEM",
        text: [
          "Decay between teeth, failing margins under old fillings and bone loss from gum disease all develop silently, and all of them are visible on imaging long before they produce symptoms. If it has been a while since you had X-rays taken, an examination with current imaging will tell you exactly where you stand. Book with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none",
        textMaxWidth: 728
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT DIGITAL X-RAYS",
        text: ["The questions patients ask most often about dental imaging."],
        items: [
          {
            question: "Are dental X-rays safe?",
            answer: [
              "**Digital X-rays use a considerably lower radiation dose than the film systems they replaced, and the dose from a routine set is very small. Protective shielding is used as standard, and images are taken at intervals matched to your risk rather than automatically. As with any imaging, the reason for taking it should always be a clinical one, and we will explain what we are looking for.**"
            ]
          },
          {
            question: "How often do I need dental X-rays?",
            answer: [
              "**It depends on your risk rather than on a fixed schedule. Patients with a history of frequent decay, active gum disease or extensive restorative work generally need imaging more often. Patients with consistently healthy mouths and no restorations need it less. We will tell you what your interval should be and why, rather than taking images by default.**"
            ]
          },
          {
            question: "Can I have X-rays if I am pregnant?",
            answer: [
              "**Tell us if you are pregnant or think you might be. Routine imaging is usually deferred until after the pregnancy, though where there is an urgent clinical need such as suspected infection, imaging with proper shielding may still be appropriate. That is a conversation we will have with you rather than a decision made without you.**"
            ]
          },
          {
            question: "Why do I need X-rays if nothing hurts?",
            answer: [
              "**Because most dental disease is painless until it is advanced. Decay between teeth, failing margins under old fillings and bone loss from gum disease all develop silently, and pain generally arrives once the nerve is involved or the tooth is well beyond a simple repair. Imaging finds those things while the treatment is still small.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Digital X-Rays - Beverly Hills Dental",
      description: "Imaging at a considerably lower radiation dose than film, appearing on screen instantly. This is how decay between teeth is found while it is still a filling."
    }
  },
  {
    slug: "ct-scans",
    title: "3D CT Scans",
    category: "dental-technology",
    order: 29,
    sections: [
      {
        _type: "hero",
        heading: "3D CT Scans in Beverly Hills",
        subheading: "Dental Technology",
        text: [
          "Cone beam imaging taken in this office. Bone measured in three dimensions, nerve position located, and root anatomy seen properly before treatment begins."
        ],
        image: images.patientSmilingChair2,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What a Flat X-Ray Cannot Show You",
        text: [
          "A standard dental X-ray is a two-dimensional image of a three-dimensional structure. It shows height and shape reasonably well, but it cannot measure width, and it flattens everything onto one plane, so a root sitting in front of the nerve canal looks identical to one sitting on top of it. Cone beam CT builds a three-dimensional model of your jaw instead. Bone height and width are measured directly, the inferior alveolar nerve is located, the sinus floor is visible, and the full root anatomy of a tooth can be seen from every angle. For implants, complex root canals and wisdom teeth, that is the difference between planning a procedure and judging it as you go."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "WHERE WE USE 3D IMAGING",
        text: [
          "A cone beam scan is not taken routinely. These are the situations that genuinely call for it."
        ],
        image: images.dentalTeamOk2,
        items: [
          {
            title: "Dental Implant Planning",
            body: [
              "Bone height and width at the site are measured directly, along with the position of the nerve canal and the floor of the sinus. Width is frequently the dimension that decides whether an implant is possible, and a flat X-ray cannot measure it at all."
            ]
          },
          {
            title: "Second Opinions on Bone Volume",
            body: [
              "Patients told elsewhere that they lack the bone for an implant are sometimes candidates once the site is measured in three dimensions rather than estimated from a flat image. It is worth having reassessed before accepting that answer."
            ]
          },
          {
            title: "Wisdom Teeth Removal",
            body: [
              "Lower wisdom tooth roots often sit close to the inferior alveolar nerve. The scan shows exactly how close, which changes how the tooth is approached and is the single most useful piece of information before that procedure."
            ]
          },
          {
            title: "Complex Root Canal Cases",
            body: [
              "Root anatomy varies considerably between patients, and canals missed during treatment are a well-documented cause of later failure. Where a tooth has unusual anatomy or has been treated before, the scan shows the canal system in three dimensions."
            ]
          },
          {
            title: "Extractions Near the Sinus",
            body: [
              "Upper molar roots can sit against or through the sinus floor. Knowing that in advance changes the technique and avoids a complication that is far easier to prevent than to manage."
            ]
          },
          {
            title: "Airway Assessment",
            body: [
              "Where a scan has been taken for another purpose, the airway space is visible on it. That can support a conversation about sleep apnea risk, though it does not diagnose the condition, which requires a sleep study interpreted by a physician."
            ]
          },
          {
            title: "Jaw Joint Imaging",
            body: [
              "For TMJ cases where the picture is unclear, the joint structures can be viewed in three dimensions rather than inferred from symptoms alone."
            ]
          },
          {
            title: "Radiation and When We Take One",
            body: [
              "A cone beam scan uses more radiation than a standard dental X-ray and considerably less than a medical CT. It is taken only where the clinical situation genuinely calls for it, never routinely, and protective shielding is used."
            ]
          },
          {
            title: "Reviewed With You on Screen",
            body: [
              "The scan is rotated and sectioned on a monitor in the room. Most patients have never seen their own jaw in three dimensions, and it makes decisions about implants or extractions considerably clearer."
            ]
          }
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        }
      },
      {
        _type: "cardPair",
        heading: "CONE BEAM CT AND STANDARD X-RAYS",
        text: [
          "They are not competing options. They answer different questions, and most patients only ever need the standard one."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "STANDARD DIGITAL X-RAYS:",
            text: [
              "The routine imaging used at examinations. They show decay between teeth, failing margins under existing fillings, bone levels and infection at root tips, at a very low radiation dose. This is what the overwhelming majority of patients need, and nothing more."
            ]
          },
          {
            image: images.dentistExaminingPatient,
            title: "CONE BEAM CT:",
            text: [
              "Used where a two-dimensional image is genuinely not enough: implant planning, wisdom teeth close to the nerve, complex or previously treated root canals, and upper molars sitting against the sinus. Higher dose than a standard X-ray and far lower than a medical CT, and taken only when the clinical situation requires it."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "WHY IT MATTERS THAT THE SCANNER IS HERE",
        text: [
          "Most general practices refer out for cone beam imaging. Having it on site changes the sequence, not just the equipment list."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "No Separate Imaging Appointment",
            text: "The scan is taken at your consultation rather than at an imaging centre, with no wait for files to arrive before your plan can be finalised.",
            icon: images.stepConsultation
          },
          {
            title: "Planned and Treated by One Dentist",
            text: "Dr. Shir reviews the scan and carries out the treatment, so the procedure follows the plan the imaging produced rather than being adapted afterwards.",
            icon: images.stepPreparation
          },
          {
            title: "Taken Only When Indicated",
            text: "A cone beam scan is never routine here. It is taken where the clinical situation genuinely calls for it, and we will explain what we are looking for.",
            icon: images.stepTreatment
          },
          {
            title: "30+ Years of Experience",
            text: "More than three decades of practice. The scan provides information, and what it is worth still depends on the judgement of the person reading it.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "TOLD YOU DO NOT HAVE ENOUGH BONE?",
        text: [
          "Bone assessments made from a flat X-ray can only approximate height, not width, and width is frequently the deciding dimension. A meaningful number of patients turned down for implants elsewhere turn out to be candidates once the site is measured properly in three dimensions. A scan and an assessment take one appointment. Book with Dr. Shir."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "FREQUENTLY ASKED QUESTIONS ABOUT 3D CT SCANS",
        text: ["The questions patients ask most often about cone beam imaging."],
        items: [
          {
            question: "How much radiation does a cone beam scan use?",
            answer: [
              "More than a standard dental X-ray and considerably less than a medical CT scan of the head. It is not a zero-risk procedure and we would not describe it as one. It is taken only where the clinical situation genuinely requires three-dimensional information, protective shielding is used, and we will explain what we are looking for before taking it."
            ]
          },
          {
            question: "What does the scan feel like?",
            answer: [
              "Nothing. You sit or stand still while the machine rotates around your head, which takes under a minute. There is no enclosed tube, nothing touches you, and there is no noise beyond a quiet hum. Patients who find medical CT or MRI difficult generally have no problem with this."
            ]
          },
          {
            question: "Why do I need a 3D scan when my old dentist only took X-rays?",
            answer: [
              "Because a flat image cannot measure bone width, cannot show exactly where the nerve canal runs relative to a root, and cannot reveal a canal hidden behind another one. For implants, wisdom teeth and complex root canals, that information changes the plan rather than just confirming it. For routine checkups, standard X-rays remain entirely appropriate."
            ]
          },
          {
            question: "Is the scan covered by insurance?",
            answer: [
              "Coverage varies considerably and some plans treat cone beam imaging differently from standard X-rays or exclude it. Where the scan is part of a larger treatment plan, it is quoted within that plan so you can see the whole figure rather than a series of separate charges. You receive that in writing before anything begins."
            ]
          }
        ]
      }
    ],
    seo: {
      title: "3D CT Scans - Beverly Hills Dental",
      description: "Cone beam imaging taken in this office. Bone measured in three dimensions, nerve position located, and root anatomy seen properly before treatment begins."
    }
  }
];
