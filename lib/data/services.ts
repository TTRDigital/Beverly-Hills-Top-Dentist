/* Generated from the live WordPress site (text copied exactly). Edit in /cms; this file is the built-in fallback and seed source. */
import type { HubContent, Service, ServiceCategory } from "../types";
import { images } from "./images.ts";

export const fallbackServicesHub: HubContent = {
  title: "Services",
  sections: [
    {
      _type: "hero",
      heading: "Comprehensive Dental Care for All Your Needs",
      subheading: "Preventive Dentistry",
      text: [
        "Preventive dentistry helps keep your teeth and gums healthy through regular care and early detection of dental problems."
      ],
      image: images.patientDentalExamCloseup,
      overlay: "none"
    },
    {
      _type: "textBand",
      heading: "Your Trusted Partner in Oral Health in Northern VA",
      text: [
        "At Ideal Dental Solutions, our dentists are dedicated to providing exceptional dental care to the Northern Virginia community. Our team of experienced dental professionals is committed to helping you achieve and maintain optimal oral health through comprehensive dental services."
      ],
      tone: "light"
    },
    {
      _type: "accordionFeature",
      heading: "Restorative Dentistry",
      text: [
        "Our restorative dentistry services focus on restoring the function and aesthetics of your teeth, allowing you to enjoy a healthy and beautiful smile."
      ],
      image: images.patientReviewingXRay,
      items: [
        {
          title: "TMJ Treatments",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Metal-free Fillings",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Extractions",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Full Mouth Reconstruction",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Laser-assisted Procedures",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Bridges",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Root Canal Therapy",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Dentures",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        },
        {
          title: "Connective Tissue Graft",
          body: [
            "Relief and treatment for temporomandibular joint disorders, alleviating pain and improving jaw function."
          ]
        }
      ]
    },
    {
      _type: "cardPair",
      heading: "Dental Implants",
      text: [
        "Dental implants provide a permanent solution for missing teeth, offering the look and function of natural teeth."
      ],
      cards: [
        {
          image: images.patientToothExam,
          title: "Single Tooth Implants:",
          text: ["Individual implants to replace single missing teeth."]
        },
        {
          image: images.dentistReviewingScan,
          title: "Full Arch Implants",
          text: [
            "Implants to replace a full arch of missing teeth, providing stability and a natural appearance."
          ]
        }
      ]
    },
    {
      _type: "steps",
      heading: "Cosmetic Dentistry",
      text: [
        "Our cosmetic dentistry services focus on restoring the function and aesthetics of your teeth, allowing you to enjoy a healthy and beautiful smile."
      ],
      items: [
        {
          title: "Porcelain Veneers",
          text: "Thin, custom-made shells that cover the front surface of your teeth to improve their appearance.",
          icon: images.stepConsultation
        },
        {
          title: "Teeth Whitening",
          text: "Professional teeth whitening treatments to brighten your smile and remove stains.",
          icon: images.stepPreparation
        },
        {
          title: "Invisalign",
          text: "Clear aligners that straighten teeth discreetly and comfortably.",
          icon: images.stepTreatment
        },
        {
          title: "Bonding",
          text: "A cost-effective solution for repairing chipped or cracked teeth using tooth-colored resin.",
          icon: images.stepAftercare
        }
      ]
    },
    {
      _type: "imageBand",
      heading: "Emergency Dental Services",
      text: [
        "A dental emergency can happen anytime, and prompt care is crucial. At Ideal Dental Solutions, we offer immediate and effective dental emergency care to address urgent issues and alleviate pain."
      ],
      image: images.dentistShowingXRay,
      overlay: "none"
    },
    {
      _type: "faq",
      heading: "Frequently Asked Questions About Our Dental Services",
      text: [
        "Have questions about our dental services? You’re not alone. Here are answers to the most common questions we hear from patients in Northern Virginia — so you can feel confident and informed before your visit to Ideal Dental Solutions."
      ],
      items: [
        {
          question: "What dental services do you offer?",
          answer: [
            "**We provide comprehensive dental care under one roof — including preventive dentistry, restorative treatments, dental implants, cosmetic dentistry, and emergency dental services. Whatever your smile needs, our experienced team in Northern Virginia is here to help.**"
          ]
        },
        {
          question: "How often should I see the dentist?",
          answer: [
            "**We recommend a checkup and professional cleaning every six months. Regular visits allow us to catch issues like cavities and gum disease early, keeping your smile healthy and helping you avoid more extensive treatment down the road.**"
          ]
        },
        {
          question: "Do you treat dental emergencies?",
          answer: [
            "**Yes — we offer prompt emergency dental services for issues like severe toothaches, knocked-out or broken teeth, and abscesses. If you’re experiencing a dental emergency, contact Ideal Dental Solutions right away and we’ll get you seen as soon as possible.**"
          ]
        },
        {
          question: "What insurance plans do you accept?",
          answer: [
            "**We work with a wide range of providers including Aetna, Cigna, Delta Dental, MetLife, and UnitedHealthcare, and our team will help you maximize your benefits. For patients without insurance, we also offer flexible payment plans through Cherry and CareCredit.**"
          ]
        }
      ]
    },
    {
      _type: "topics",
      blocks: [
        {
          heading: "Dental Insurance & Payment Options",
          text: [
            "Understanding that financial concerns should never be a barrier to achieving optimal health, we offer a variety of flexible payment options for our dental patients and accept numerous dental insurance plans to accommodate your needs."
          ]
        },
        {
          heading: "Accepted Insurance Plans",
          text: [
            "We work with a wide range of Northern Virginia dental insurance providers to help you maximize your benefits and minimize out-of-pocket expenses. Our knowledgeable staff will assist you in understanding your coverage and filing insurance claims on your behalf."
          ]
        }
      ],
      columns: [
        ["Aetna", "Ameritas", "Anthem", "CareFirst"],
        ["Cigna", "Delta Dental", "GEHA", "Guardian"],
        ["Humana", "Lincoln", "MetLife", "Principal"],
        ["United Concordia", "United Healthcare"]
      ],
      logos: [
        images.metlife,
        images.deltaDental,
        images.cigna,
        images.aetna,
        images.unitedhealthcare
      ]
    },
    {
      _type: "iconFeatures",
      heading: "Flexible Payment Options",
      text: [
        "For patients without dental insurance or those requiring additional payment flexibility, we offer several convenient payment options:"
      ],
      items: [
        {
          title: "Credit Cards",
          text: "We accept major credit cards, including Visa, MasterCard, American Express, and Discover.",
          icon: images.paymentCard
        },
        {
          title: "Payment Plans",
          text: "Flexible payment plans through Cherry make dental care more affordable with budget-friendly monthly payments.",
          icon: images.financing
        },
        {
          title: "CareCredit",
          text: "CareCredit offers convenient financing for dental expenses with low monthly payment options.",
          icon: images.carecredit
        }
      ]
    }
  ],
  seo: {
    title: "Services - Beverly Hills Dental",
    description: "Preventive dentistry helps keep your teeth and gums healthy through regular care and early detection of dental problems."
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
        overlay: "none"
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
        overlay: "none"
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
        ]
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
        overlay: "none"
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
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Prevent Oral Health Problems Before They Start",
        text: [
          "At Beverly Hills Dental Art Studio, our preventive care team is dedicated to providing exceptional dental care to the Northern Virginia community. Our experienced professionals are committed to helping you achieve and maintain optimal oral health through comprehensive preventive dentistry services."
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
          }
        ]
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
            title: "Convenient McLean Location",
            text: "With our easily accessible McLean location, scheduling your regular preventive visits is simple and hassle-free.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Take Control of Your Dental Health Today",
        text: [
          "Don’t wait until dental problems become serious. At Beverly Hills Dental Art Studio, we’re here to help you maintain your oral health with comprehensive preventive services. Schedule your appointment today at our McLean office."
        ],
        image: images.dentistsTreatingPatient,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Preventive Dentistry",
        text: [
          "Have questions about preventive dental care? You’re not alone. Here are answers to the most common questions we hear from patients in Northern Virginia — so you can feel confident and informed before your visit to Beverly Hills Dental Art Studio."
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
  }
];

export const fallbackServices: Service[] = [
  {
    slug: "dental-bonding",
    title: "Dental Bonding",
    category: "cosmetic-dentistry",
    order: 1,
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
    slug: "invisalign",
    title: "Invisalign",
    category: "cosmetic-dentistry",
    order: 2,
    sections: [
      {
        _type: "hero",
        heading: "Invisalign® in Northern VA",
        subheading: "Cosmetic Dentistry",
        text: [
          "Achieve your ideal smile with Invisalign clear aligners. Ideal Dental Solutions offers expert Invisalign treatment in Northern Virginia — a discreet, comfortable way to straighten your teeth without traditional braces."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "What is Invisalign?",
        text: [
          "Invisalign uses custom-made clear aligners crafted from smooth, transparent plastic to gradually shift your teeth into the desired position. Using advanced 3D imaging technology, each aligner is tailored to your unique dental structure. Aligners are removable, making it easy to maintain oral hygiene and enjoy your favorite foods without restrictions — and as you switch to each new set, your teeth gradually move into perfect alignment."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "The Benefits of Invisalign",
        text: [
          "Invisalign offers a superior orthodontic experience compared to traditional braces. Here are the key advantages that make it the preferred choice for patients throughout Northern Virginia:"
        ],
        image: images.shadeGuideSmile,
        items: [
          {
            title: "Aesthetic Appeal",
            body: [
              "Invisalign aligners are clear and virtually invisible, providing a discreet way to straighten teeth without the appearance of metal braces."
            ]
          },
          {
            title: "Flexibility",
            body: [
              "Being removable, aligners allow for easier eating, drinking, and oral hygiene — simply take them out whenever necessary."
            ]
          },
          {
            title: "Efficiency",
            body: [
              "Many patients complete Invisalign treatment faster than traditional braces, achieving a beautiful smile in less time."
            ]
          },
          {
            title: "Enhanced Comfort",
            body: [
              "The smooth plastic material reduces irritation compared to metal braces, making for a consistently comfortable treatment experience."
            ]
          },
          {
            title: "Predictable Outcomes",
            body: [
              "Advanced technology creates a detailed treatment plan, giving you clear insight into the expected tooth movement progression and final result."
            ]
          },
          {
            title: "Cleaning Your Aligners",
            body: [
              "Clean aligners daily with a soft toothbrush and mild clear soap or the provided cleaning kit to prevent plaque and bacteria buildup."
            ]
          },
          {
            title: "Wearing Your Aligners",
            body: [
              "Wear your aligners for 20 to 22 hours each day. Remove only for eating, drinking (except water), brushing, and flossing."
            ]
          },
          {
            title: "Avoiding Certain Foods and Drinks",
            body: [
              "Avoid hard or sticky foods and beverages other than water while wearing aligners to prevent staining or damage to your trays."
            ]
          },
          {
            title: "Storing Your Aligners Properly",
            body: [
              "Store aligners in their protective case when not in use. Never wrap in a napkin or leave them out to avoid accidental loss or damage."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "The Invisalign Process: Easy & Straightforward",
        text: [
          "Your Invisalign journey at Ideal Dental Solutions is expertly guided and straightforward at every stage. Here’s what to expect:"
        ],
        link: {
          label: "Schedule your consultation",
          href: "/appointment/"
        },
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Initial Consultation:",
            text: [
              "Our dental team evaluates your teeth, takes detailed 3D imaging, and discusses your alignment goals to determine if Invisalign is the right solution for you."
            ]
          },
          {
            image: images.dentistReviewingScan2,
            title: "Custom Treatment Planning:",
            text: [
              "Using advanced 3D imaging, we design a precise treatment plan showing your predicted tooth movements at every stage and your expected final smile result."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Choose Your Local Invisalign Dentist in Northern Virginia",
        text: [
          "Our experienced team is dedicated to guiding you through every step of your Invisalign process, ensuring you get the results you desire. Here’s why patients choose us:"
        ],
        link: {
          label: "Schedule your consultation",
          href: "/appointment/"
        },
        items: [
          {
            title: "Experienced Team",
            text: "Our dental professionals specialize in orthodontics and are well-versed in the latest Invisalign techniques for personalized treatment planning.",
            icon: images.stepConsultation
          },
          {
            title: "State-of-the-Art Technology",
            text: "We utilize advanced 3D imaging to design your aligners with precision, ensuring optimal fit and effectiveness throughout treatment.",
            icon: images.stepPreparation
          },
          {
            title: "Personalized Care",
            text: "We take the time to understand your goals and concerns, ensuring your Invisalign experience is comfortable and tailored to you.",
            icon: images.stepTreatment
          },
          {
            title: "Comprehensive Support",
            text: "From initial consultation to treatment completion, our team provides ongoing guidance and answers every question along the way.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Invisalign® in Northern VA — Straighten Your Teeth Without Braces",
        text: [
          "You want a straighter smile — not two years of metal brackets and wires. At Ideal Dental Solutions in McLean, we use Invisalign clear aligners and advanced 3D imaging to gradually guide your teeth into perfect alignment, discreetly and comfortably. The aligners are virtually invisible and fully removable, so you can eat what you love, brush and floss normally, and go about your day without anyone noticing you’re in treatment. Most patients finish in just 12 to 18 months, and you’ll see your predicted final smile before you even begin. Schedule your Invisalign consultation today and take the first step toward the smile you’ve always wanted."
        ],
        image: images.dentistShowingXRay,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Invisalign",
        text: [
          "Have questions about Invisalign? You’re not alone. Here are answers to the most common questions we hear from patients in Northern Virginia — so you can feel confident and informed before starting your clear aligner journey with Ideal Dental Solutions."
        ],
        items: [
          {
            question: "How long does Invisalign treatment take?",
            answer: [
              "**Treatment time varies by individual, but most patients complete their Invisalign journey in 12 to 18 months. During your consultation at Ideal Dental Solutions, your dentist will create a personalized timeline based on your specific alignment needs.**"
            ]
          },
          {
            question: "Is Invisalign painful to wear?",
            answer: [
              "**Not at all — Invisalign is designed for comfort. You may feel mild pressure for a day or two when switching to a new set of aligners, which is a normal sign your teeth are shifting into place. The smooth plastic causes far less irritation than traditional metal braces.**"
            ]
          },
          {
            question: "Can I eat and drink with Invisalign in?",
            answer: [
              "**You should remove your aligners while eating or drinking anything other than water. This keeps them clear and stain-free and lets you enjoy all your favorite foods with no restrictions — simply rinse your aligners and pop them back in afterward.**"
            ]
          },
          {
            question: "Is Invisalign covered by insurance?",
            answer: [
              "**In many cases, yes — numerous dental plans include orthodontic coverage that applies to Invisalign. We accept a wide range of providers including Aetna, Cigna, Delta Dental, MetLife, and UnitedHealthcare, and for patients without coverage we offer flexible payment plans through Cherry and CareCredit.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Invisalign - Beverly Hills Dental",
      description: "Achieve your ideal smile with Invisalign clear aligners. Ideal Dental Solutions offers expert Invisalign treatment in Northern Virginia — a discreet,"
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
        overlay: "none"
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
        ]
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
        overlayOpacity: 0.69
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
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "cosmetic-dentistry",
    order: 4,
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
    slug: "full-arch-implants",
    title: "Full Arch Implants",
    category: "dental-implants-dentistry",
    order: 5,
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
    slug: "single-tooth-implants",
    title: "Single Tooth Implants",
    category: "dental-implants-dentistry",
    order: 6,
    sections: [
      {
        _type: "hero",
        heading: "Single Tooth Implants in Beverly Hills",
        subheading: "Dental Implant Dentistry",
        text: [
          "Replace one missing tooth without touching the teeth either side. Planned on a 3D scan taken in this office, then placed and restored by Dr. Shir."
        ],
        image: images.patientDentalExamCloseup,
        overlay: "none"
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
        ]
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
        overlayOpacity: 0.69
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
    slug: "crown-lengthening",
    title: "Crown Lengthening",
    category: "periodontic-dentistry",
    order: 7,
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
    slug: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    category: "periodontic-dentistry",
    order: 8,
    sections: [
      {
        _type: "hero",
        heading: "Gum Disease Treatment in Beverly Hills",
        subheading: "Periodontal Dentistry",
        text: [
          "Treatment for every stage of gum disease, starting with the least invasive option that works. Laser therapy and ozone used alongside deep cleaning, with surgery reserved for cases that need it."
        ],
        image: images.bleedingGums,
        overlay: "none"
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
        ]
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
        overlay: "none"
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
    slug: "gum-graft-surgery",
    title: "Gum Graft Surgery",
    category: "periodontic-dentistry",
    order: 9,
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
    slug: "checkups-exams",
    title: "Dental Checkups & Exams",
    category: "preventive-dentistry",
    order: 10,
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
    slug: "dental-sealants",
    title: "Dental Sealants",
    category: "preventive-dentistry",
    order: 11,
    sections: [
      {
        _type: "hero",
        heading: "Dental Sealants in Beverly Hills",
        subheading: "Preventive Dentistry",
        text: [
          "A thin protective coating bonded into the deep grooves of back teeth, where a toothbrush bristle physically cannot reach. Quick to place, no drilling, no anaesthetic."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
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
        ]
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
        overlay: "none"
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
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    category: "preventive-dentistry",
    order: 12,
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
    slug: "dental-bridges",
    title: "Dental Bridges",
    category: "restorative-dentistry",
    order: 13,
    sections: [
      {
        _type: "hero",
        heading: "Dental Bridges in Beverly Hills",
        subheading: "Dental Bridges",
        text: [
          "Replace one or more missing teeth with a fixed bridge, custom made and shaded to your own teeth. A non-surgical option, completed in a few weeks rather than a few months."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
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
        ]
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
        overlayOpacity: 0.69
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
    slug: "dental-fillings",
    title: "Dental Fillings",
    category: "restorative-dentistry",
    order: 14,
    sections: [
      {
        _type: "hero",
        heading: "Dental Fillings in Beverly Hills",
        subheading: "Dental Fillings",
        text: [
          "Tooth-coloured fillings that bond to your own tooth structure, placed conservatively so as little healthy enamel is removed as the situation allows."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
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
        ]
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
        overlayOpacity: 0.69
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
    slug: "dentures",
    title: "Dentures in Northern Virginia",
    category: "restorative-dentistry",
    order: 15,
    sections: [
      {
        _type: "hero",
        heading: "Comfortable, Natural-Looking Dentures in Northern Virginia",
        subheading: "Full & Partial Dentures",
        text: [
          "At Ideal Dental Solutions, we offer premium-quality full and partial dentures designed to look natural, feel comfortable, and help you enjoy life with confidence again."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Your Trusted Experts for Northern Virginia Dentures",
        text: [
          "Whether you need a full set of dentures, partials, implant-supported options, or denture repair, Ideal Dental Solutions delivers personalized care that fits your lifestyle. We work with the best dental labs and use advanced techniques to create dentures that look, feel, and function naturally."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Your Denture Options at Ideal Dental Solutions",
        text: [
          "We offer a comprehensive range of denture services and use premium materials and advanced fabrication techniques to ensure every patient receives a perfect-fitting, natural-looking smile."
        ],
        image: images.seniorPatientMirror,
        items: [
          {
            title: "Full Dentures",
            body: [
              "For patients missing all teeth in the upper, lower, or both arches, we create beautiful, natural-looking full dentures customized to your smile."
            ]
          },
          {
            title: "Partial Dentures",
            body: [
              "If you still have some healthy natural teeth, partial dentures offer a reliable way to restore your bite and smile comfortably."
            ]
          },
          {
            title: "Implant-Supported Dentures",
            body: [
              "For enhanced stability and comfort, implant-supported dentures blend the benefits of dental implants with the convenience of traditional dentures."
            ]
          },
          {
            title: "Immediate Dentures",
            body: [
              "Need a solution right after extractions? Immediate dentures are placed the same day to maintain your smile and functionality without delay."
            ]
          },
          {
            title: "Denture Repair",
            body: [
              "From minor adjustments to full repairs, our team provides fast, effective denture repair services in Northern VA to keep your smile in top shape."
            ]
          },
          {
            title: "Premium Acrylic and Porcelain Options",
            body: [
              "We offer high-grade acrylic and porcelain denture options — acrylic is lightweight and affordable, while porcelain provides a highly natural appearance with added strength."
            ]
          },
          {
            title: "Custom-Fit Precision",
            body: [
              "Every denture is designed using detailed digital impressions, ensuring a precise, comfortable fit that minimizes slipping and maximizes function."
            ]
          },
          {
            title: "Modern Fabrication Techniques",
            body: [
              "Our dental labs use the latest CAD/CAM technology for enhanced accuracy, creating dentures highly customized to your smile, bite, and facial structure."
            ]
          },
          {
            title: "Lightweight, Natural Feel",
            body: [
              "With today's innovations, our carefully selected materials provide strength without unnecessary weight, making dentures feel natural and comfortable all day."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "Full & Partial Dentures",
        text: [
          "Our two most popular denture solutions — full and partial — are custom-crafted to restore your smile, bite, and confidence with a comfortable, natural-looking fit."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Full Dentures:",
            text: ["Beautiful, custom full dentures for patients missing all teeth in one or both arches."]
          },
          {
            image: images.dentistReviewingScan2,
            title: "Partial Dentures:",
            text: [
              "Reliable partial dentures to restore your bite and smile when you still have healthy natural teeth."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Why Trust Ideal Dental Solutions for Your Dentures",
        text: [
          "Ideal Dental Solutions has been a trusted dental provider in Northern Virginia for decades, combining compassionate care with advanced technology to deliver exceptional denture results."
        ],
        items: [
          {
            title: "Decades of Experience",
            text: "Over 50 years of combined dental expertise crafting comfortable, beautiful dentures Northern Virginia patients love.",
            icon: images.stepConsultation
          },
          {
            title: "Advanced Technology",
            text: "Digital impressions and precision fittings ensure dentures that look, feel, and function completely naturally.",
            icon: images.stepPreparation
          },
          {
            title: "Personalized Patient Care",
            text: "We take time to understand your needs, answer your questions, and customize your care for the best experience.",
            icon: images.stepTreatment
          },
          {
            title: "Trusted by the Community",
            text: "A leading provider of dentures and dental implants for patients throughout Northern Virginia.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Ready to Restore Your Smile with Dentures?",
        text: [
          "From full and partial dentures to implant-supported options, our experienced team at Ideal Dental Solutions is ready to create a personalized solution just for you. Schedule your denture consultation in Northern Virginia today."
        ],
        image: images.dentistShowingXRay,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Dentures",
        text: [
          "Have questions about dentures? You’re not alone. Here are answers to the most common questions we hear from patients in Northern Virginia — so you can feel confident and informed before your visit to Ideal Dental Solutions."
        ],
        items: [
          {
            question: "How long do dentures last?",
            answer: [
              "**With proper care, dentures typically last 5 to 10 years before needing to be relined, rebased, or replaced as your mouth naturally changes over time. Regular checkups at Ideal Dental Solutions help ensure your dentures keep fitting comfortably.**"
            ]
          },
          {
            question: "Are dentures uncomfortable to wear?",
            answer: [
              "**There may be a short adjustment period as you get used to your new dentures, but our custom, digitally designed dentures are made for a precise, comfortable fit. We’ll fine-tune them as needed so you can eat, speak, and smile with confidence.**"
            ]
          },
          {
            question: "What types of dentures do you offer?",
            answer: [
              "**We offer full dentures, partial dentures, implant-supported dentures, immediate dentures, and denture repairs. During your consultation, your dentist will recommend the best option based on your needs, remaining teeth, and lifestyle.**"
            ]
          },
          {
            question: "Are dentures covered by insurance?",
            answer: [
              "**In most cases, yes — dentures are a common restorative solution covered by many dental plans. We accept a wide range of providers including Aetna, Cigna, Delta Dental, MetLife, and UnitedHealthcare, and offer flexible payment plans through Cherry and CareCredit for patients without coverage.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "Dentures in Northern Virginia - Beverly Hills Dental",
      description: "At Ideal Dental Solutions, we offer premium-quality full and partial dentures designed to look natural, feel comfortable, and help you enjoy life with"
    }
  },
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    category: "restorative-dentistry",
    order: 16,
    sections: [
      {
        _type: "hero",
        heading: "Pain-Free Root Canal Treatment in Northern Virginia",
        subheading: "Root Canal Therapy",
        text: [
          "Achieve dental pain relief with expert root canal therapy. Our gentle, precision-focused approach saves your natural tooth while eliminating infection and discomfort."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Achieve Dental Pain Relief With Root Canal Therapy",
        text: [
          "Root canal treatment removes infected pulp from inside your tooth, alleviating pain and preventing further complications. At Ideal Dental Solutions, we use advanced techniques and modern anesthesia to ensure a comfortable, virtually pain-free experience from start to finish."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "Signs You May Need Root Canal Therapy",
        text: [
          "Knowing the warning signs of an infected tooth can help you seek treatment early and avoid more serious complications. Here are common indicators that you may need a root canal."
        ],
        image: images.dentalModels,
        items: [
          {
            title: "Persistent Tooth Pain",
            body: [
              "Ongoing discomfort that worsens when chewing or applying pressure is a key warning sign of pulp infection requiring root canal treatment."
            ]
          },
          {
            title: "Swollen or Tender Gums",
            body: [
              "Inflammation or tenderness in the gums near an affected tooth is a common sign of underlying infection that may require a root canal."
            ]
          },
          {
            title: "Pimples on the Gums",
            body: [
              "Small bumps or abscesses on the gums near an infected tooth indicate the presence of bacterial infection requiring prompt treatment."
            ]
          },
          {
            title: "Sensitivity to Hot or Cold",
            body: [
              "Lingering sensitivity to hot or cold temperatures, even after removing the trigger, can indicate nerve damage or pulp infection."
            ]
          },
          {
            title: "Tooth Discoloration",
            body: [
              "Darkening of the tooth due to internal damage or pulp death is a visible sign that root canal therapy may be necessary."
            ]
          },
          {
            title: "Relieve Pain and Discomfort",
            body: [
              "Eliminate persistent toothaches and sensitivity caused by infection, restoring comfort to your daily life."
            ]
          },
          {
            title: "Preserve Your Natural Tooth",
            body: [
              "Root canal therapy allows you to avoid extraction and maintain your natural smile and bite alignment for years to come."
            ]
          },
          {
            title: "Prevent Further Complications",
            body: [
              "Root canal treatment stops the spread of infection to surrounding teeth and gums, preventing more serious oral health complications."
            ]
          },
          {
            title: "Improve Oral Function",
            body: [
              "Restore your ability to chew and speak without discomfort. With proper care, a root canal-treated tooth can last a lifetime."
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
        heading: "Our Root Canal Treatment Process",
        text: [
          "From diagnosis to full restoration, our team handles every step of your root canal therapy in-house — ensuring seamless, comprehensive care all under one roof."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        cards: [
          {
            image: images.patientToothExam,
            title: "Pain-Free Procedure:",
            text: [
              "Modern anesthesia and gentle techniques ensure a comfortable, virtually painless experience."
            ]
          },
          {
            image: images.dentistReviewingScan,
            title: "Tooth Restoration:",
            text: [
              "After treatment, we restore your tooth with a crown or filling for full function and lasting protection."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Why Choose Ideal Dental for Root Canal Therapy",
        text: [
          "At Ideal Dental Solutions, we combine experienced professionals, advanced technology, and a comfort-first philosophy to deliver root canal therapy that is precise, effective, and virtually pain-free."
        ],
        link: {
          label: "Learn more",
          href: "/about-us/"
        },
        items: [
          {
            title: "Experienced Dental Professionals",
            text: "Our skilled dental team has extensive expertise performing root canals with precision and care.",
            icon: images.stepConsultation
          },
          {
            title: "State-of-the-Art Technology",
            text: "Advanced equipment and techniques ensure precise diagnoses and effective, comfortable treatment.",
            icon: images.stepPreparation
          },
          {
            title: "Comfort-Focused Care",
            text: "Your comfort is our priority. We offer a pain-free experience with gentle techniques and local anesthesia.",
            icon: images.stepTreatment
          },
          {
            title: "Comprehensive Dental Services",
            text: "From diagnosis to post-treatment restoration, we handle every step of the process all under one roof.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Schedule Your Root Canal Consultation Today",
        text: [
          "Say goodbye to tooth pain and protect your smile with expert care from Ideal Dental Solutions. Contact us today to schedule your pain-free root canal consultation in Northern Virginia and take the first step toward lasting oral health."
        ],
        image: images.dentistShowingXRay,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About Root Canal Therapy",
        text: [
          "Have questions about root canal therapy? You’re not alone. Here are answers to the most common questions we hear from patients in Northern Virginia — so you can feel confident and informed before your visit to Ideal Dental Solutions."
        ],
        items: [
          {
            question: "Is a root canal painful?",
            answer: [
              "**Not at all — modern root canal therapy is virtually pain-free. We use local anesthesia to keep you comfortable throughout, and the procedure actually relieves the pain caused by infection. Most patients feel immediate relief afterward.**"
            ]
          },
          {
            question: "How do I know if I need a root canal?",
            answer: [
              "**Common warning signs include a persistent toothache, lingering sensitivity to hot or cold, swelling or a pimple-like bump on the gums, and darkening of the tooth. If you notice any of these, schedule an evaluation at Ideal Dental Solutions right away.**"
            ]
          },
          {
            question: "How long does it take to recover from a root canal?",
            answer: [
              "**Recovery is quick — most patients return to their normal activities the same day, with only mild, temporary tenderness that fades within a few days. With proper care and regular check-ups, a tooth treated with a root canal can last a lifetime.**"
            ]
          },
          {
            question: "Is root canal treatment covered by insurance?",
            answer: [
              "**In most cases, yes — root canals are a common restorative procedure covered by most dental plans. We accept a wide range of providers including Aetna, Cigna, Delta Dental, MetLife, and UnitedHealthcare, and offer flexible payment plans through Cherry and CareCredit for patients without coverage.**"
            ]
          }
        ]
      },
      {
        _type: "topics",
        blocks: [
          {
            heading: "Dental Insurance & Payment Options",
            text: [
              "Understanding that financial concerns should never be a barrier to achieving optimal health, we offer a variety of flexible payment options for our dental patients and accept numerous dental insurance plans to accommodate your needs."
            ]
          },
          {
            heading: "Accepted Insurance Plans",
            text: [
              "We work with a wide range of Northern Virginia dental insurance providers to help you maximize your benefits and minimize out-of-pocket expenses. Our knowledgeable staff will assist you in understanding your coverage and filing insurance claims on your behalf."
            ]
          }
        ],
        columns: [
          ["Aetna", "Ameritas", "Anthem", "CareFirst"],
          ["Cigna", "Delta Dental", "GEHA", "Guardian"],
          ["Humana", "Lincoln", "MetLife", "Principal"],
          ["United Concordia", "United Healthcare"]
        ],
        logos: [
          images.metlife,
          images.deltaDental,
          images.cigna,
          images.aetna,
          images.unitedhealthcare
        ]
      },
      {
        _type: "iconFeatures",
        heading: "Flexible Payment Options",
        text: [
          "For patients without dental insurance or those requiring additional payment flexibility, we offer several convenient payment options:"
        ],
        items: [
          {
            title: "Credit Cards",
            text: "We accept major credit cards, including Visa, MasterCard, American Express, and Discover.",
            icon: images.paymentCard
          },
          {
            title: "Payment Plans",
            text: "Flexible payment plans through Cherry make dental care more affordable with budget-friendly monthly payments.",
            icon: images.financing
          },
          {
            title: "CareCredit",
            text: "CareCredit offers convenient financing for dental expenses with low monthly payment options.",
            icon: images.carecredit
          }
        ]
      }
    ],
    seo: {
      title: "Root Canal Therapy - Beverly Hills Dental",
      description: "Achieve dental pain relief with expert root canal therapy. Our gentle, precision-focused approach saves your natural tooth while eliminating infection and"
    }
  },
  {
    slug: "tmj-tmd-treatments",
    title: "TMJ/TMD Treatments",
    category: "restorative-dentistry",
    order: 17,
    sections: [
      {
        _type: "hero",
        heading: "Effective TMJ Treatment in Northern Virginia",
        subheading: "TMJ/TMD Treatments",
        text: [
          "Your path to lasting relief from TMJ pain starts here. At Ideal Dental Solutions, we provide comprehensive, personalized TMJ treatment to help you regain comfort and function."
        ],
        image: images.patientSmilingChair,
        overlay: "none"
      },
      {
        _type: "textBand",
        heading: "Your Path to Lasting Relief from TMJ Pain Starts Here",
        text: [
          "TMJ (temporomandibular joint) disorders affect the joint connecting your jaw to your skull, causing pain, limited movement, and discomfort. Our expert team at Ideal Dental Solutions provides thorough diagnosis and customized treatment options to alleviate pain and restore your quality of life."
        ],
        tone: "light"
      },
      {
        _type: "accordionFeature",
        heading: "TMJ Treatment Options at Ideal Dental Solutions",
        text: [
          "We offer a range of proven TMJ treatments — from custom mouthguards to laser therapy — designed to address the root cause of your symptoms and provide lasting relief."
        ],
        image: images.toothache,
        items: [
          {
            title: "Custom Mouthguards and Splints",
            body: [
              "Specially designed mouthguards or splints reduce teeth grinding and jaw clenching, protecting your jaw and promoting proper alignment during sleep or daily activities."
            ]
          },
          {
            title: "Bite Alignment Therapy",
            body: [
              "If jaw misalignment is contributing to your TMJ disorder, bite correction therapies can balance your bite, improve jaw function, and alleviate strain on the TMJ."
            ]
          },
          {
            title: "Stress Management and Counseling",
            body: [
              "Stress often leads to muscle tension and teeth grinding. Our team provides guidance on managing stress, which can significantly reduce TMJ symptoms."
            ]
          },
          {
            title: "Laser Therapy",
            body: [
              "Non-invasive laser therapy reduces inflammation, alleviates pain, and promotes healing in the TMJ area without discomfort or recovery time."
            ]
          },
          {
            title: "Physical Therapy Referrals",
            body: [
              "When physical therapy can enhance recovery, we recommend exercises or collaborate with specialists to improve jaw strength and mobility."
            ]
          },
          {
            title: "Persistent Jaw Pain or Tenderness",
            body: [
              "Persistent jaw pain or tenderness is one of the most common signs of TMJ disorder — our targeted treatments address the root cause for long-lasting relief."
            ]
          },
          {
            title: "Clicking or Popping Sounds",
            body: [
              "Clicking or popping sounds when moving your jaw are common TMJ symptoms that can be effectively treated with our customized care plans."
            ]
          },
          {
            title: "Headaches or Ear Pain",
            body: [
              "TMJ disorders frequently cause referred headaches and ear pain — symptoms that respond well to our non-invasive treatment approaches."
            ]
          },
          {
            title: "Difficulty Chewing or Opening Mouth",
            body: [
              "TMJ disorders can make chewing, speaking, and yawning uncomfortable — our treatments restore natural jaw movement and function."
            ]
          }
        ]
      },
      {
        _type: "cardPair",
        heading: "Expert TMJ Diagnosis & Care",
        text: [
          "We diagnose TMJ disorders through thorough examination and advanced imaging, then create a customized treatment plan tailored to your unique needs and symptoms."
        ],
        cards: [
          {
            image: images.veneerShadeMatch,
            title: "Custom Mouthguards:",
            text: [
              "Specially designed splints to reduce grinding, protect your jaw, and promote proper alignment."
            ]
          },
          {
            image: images.dentistReviewingScan2,
            title: "Bite Alignment Therapy:",
            text: [
              "Targeted bite correction to balance your jaw, improve function, and relieve strain on the TMJ."
            ]
          }
        ]
      },
      {
        _type: "steps",
        heading: "Benefits of TMJ Treatment at Ideal Dental",
        text: [
          "Our comprehensive, patient-centered approach is designed to improve both your oral health and overall quality of life — going beyond just relieving pain."
        ],
        items: [
          {
            title: "Relief from Chronic Pain",
            text: "Say goodbye to persistent jaw pain, headaches, and facial discomfort with our targeted TMJ treatments.",
            icon: images.stepConsultation
          },
          {
            title: "Improved Jaw Function",
            text: "Regain the ability to chew, speak, and yawn comfortably after effective TMJ treatment.",
            icon: images.stepPreparation
          },
          {
            title: "Reduced Risk of Complications",
            text: "Early intervention prevents long-term damage and stops TMJ symptoms from worsening over time.",
            icon: images.stepTreatment
          },
          {
            title: "Personalized Expert Care",
            text: "Every treatment plan is tailored to your unique needs, backed by advanced diagnostic tools and expert knowledge.",
            icon: images.stepAftercare
          }
        ]
      },
      {
        _type: "imageBand",
        heading: "Ready to Find TMJ Relief?",
        text: [
          "If you’re experiencing jaw pain, headaches, clicking sounds, or difficulty chewing, our expert team at Ideal Dental Solutions is ready to help. Schedule your TMJ consultation in Northern Virginia today."
        ],
        image: images.dentistShowingXRay,
        overlay: "none"
      },
      {
        _type: "faq",
        heading: "Frequently Asked Questions About TMJ/TMD Treatment",
        text: [
          "Have questions about TMJ and TMD treatment? You’re not alone. Here are answers to the most common questions we hear from patients in Northern Virginia — so you can feel confident and informed before your visit to Ideal Dental Solutions."
        ],
        items: [
          {
            question: "What are the common signs of a TMJ disorder?",
            answer: [
              "**Common symptoms include jaw pain or tenderness, clicking or popping sounds when opening your mouth, frequent headaches, earaches, and difficulty chewing. If you experience any of these, an evaluation at Ideal Dental Solutions can pinpoint the cause and start you on the path to relief.**"
            ]
          },
          {
            question: "Is TMJ treatment painful?",
            answer: [
              "**Not at all — most TMJ treatments are non-invasive and comfortable. Options like custom splints, low-level laser therapy, and guided jaw exercises are designed to relieve pain, not cause it. Our goal is to ease your symptoms as gently as possible.**"
            ]
          },
          {
            question: "How long does it take to see results from TMJ treatment?",
            answer: [
              "**Many patients notice relief within a few weeks of starting treatment, though timelines vary based on the severity and cause of your TMJ disorder. We create a personalized plan and monitor your progress to ensure lasting improvement.**"
            ]
          },
          {
            question: "Is TMJ treatment covered by insurance?",
            answer: [
              "**Coverage varies by plan — some TMJ treatments are covered by dental or medical insurance. We accept a wide range of providers including Aetna, Cigna, Delta Dental, MetLife, and UnitedHealthcare, and our team will help you review your benefits and explore flexible payment options through Cherry and CareCredit.**"
            ]
          }
        ]
      }
    ],
    seo: {
      title: "TMJ Treatment in Beverly Hills | Dr. Nushin Shir",
      description: "Jaw pain, clicking or morning headaches? Get lasting relief with custom TMJ treatment from Dr. Shir. Call our Beverly Hills office to book your evaluation."
    }
  },
  {
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    category: "restorative-dentistry",
    order: 18,
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
  }
];
