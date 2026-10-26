/*
 * Every local photo with its alt text and size. Files live in public/images
 * (copied from the old site, metadata stripped). Components and lib/data
 * reference these entries; /cms photos replace them once uploaded.
 */
import type { Img } from "../types";

export const images = {
  logo300: { src: "/images/brand/logo-300.png", alt: "Beverly Hills Dental Art Studio", width: 300, height: 71 },
  logo: { src: "/images/brand/logo.png", alt: "Beverly Hills Dental Art Studio", width: 1607, height: 378 },
  siteIcon180: { src: "/images/brand/site-icon-180.png", alt: "", width: 180, height: 180 },
  siteIcon192: { src: "/images/brand/site-icon-192.png", alt: "", width: 192, height: 192 },
  siteIcon32: { src: "/images/brand/site-icon-32.png", alt: "", width: 32, height: 32 },
  heroPoster: { src: "/images/home/hero-poster.jpg", alt: "Palm trees against a blue sky with the Beverly Hills Dental Arts Studio logo", width: 960, height: 404 },
  carecredit: { src: "/images/icons/carecredit.svg", alt: "CareCredit", width: 96, height: 96 },
  financing: { src: "/images/icons/financing.svg", alt: "", width: 96, height: 96 },
  paymentCard: { src: "/images/icons/payment-card.svg", alt: "", width: 96, height: 96 },
  stepAftercare: { src: "/images/icons/step-aftercare.svg", alt: "", width: 96, height: 96 },
  stepConsultation: { src: "/images/icons/step-consultation.svg", alt: "", width: 96, height: 96 },
  stepPreparation: { src: "/images/icons/step-preparation.svg", alt: "", width: 96, height: 96 },
  stepTreatment: { src: "/images/icons/step-treatment.svg", alt: "", width: 96, height: 96 },
  aetna: { src: "/images/insurance/aetna.png", alt: "Aetna insurance", width: 220, height: 80 },
  cigna: { src: "/images/insurance/cigna.png", alt: "Cigna insurance", width: 156, height: 82 },
  deltaDental: { src: "/images/insurance/delta-dental.png", alt: "Delta Dental insurance", width: 406, height: 44 },
  metlife: { src: "/images/insurance/metlife.png", alt: "MetLife insurance", width: 224, height: 48 },
  unitedhealthcare: { src: "/images/insurance/unitedhealthcare.png", alt: "UnitedHealthcare insurance", width: 296, height: 60 },
  cosmeticDentistrySign: { src: "/images/office/cosmetic-dentistry-sign.jpg", alt: "Cosmetic Dentistry sign with flowers and a mosaic mirror", width: 2400, height: 1800 },
  dentistsTreatingPatient: { src: "/images/office/dentists-treating-patient.jpg", alt: "Two clinicians treating a patient in the treatment room", width: 1920, height: 2560 },
  frontOffice: { src: "/images/office/front-office.jpg", alt: "Front office workstation and hallway", width: 1920, height: 2560 },
  hallwayFlowers: { src: "/images/office/hallway-flowers.jpg", alt: "Office hallway with blossom flowers and a glass partition", width: 1920, height: 2560 },
  hallwayRoundTable: { src: "/images/office/hallway-round-table.jpg", alt: "Office hallway with a round table and flowers leading to the treatment rooms", width: 1920, height: 2560 },
  hallwayTableDetail: { src: "/images/office/hallway-table-detail.jpg", alt: "Round marble table in the office hallway", width: 1920, height: 2560 },
  hallwayWide1024: { src: "/images/office/hallway-wide-1024.jpg", alt: "Wide view of the office hallway with framed photographs", width: 1024, height: 684 },
  hallwayWide2: { src: "/images/office/hallway-wide-2.jpg", alt: "Wide view of the office hallway with framed photographs", width: 2048, height: 1367 },
  hallwayWide: { src: "/images/office/hallway-wide.jpg", alt: "Wide view of the office hallway with framed photographs", width: 2048, height: 1367 },
  hygienistTreatingPatient: { src: "/images/office/hygienist-treating-patient.jpg", alt: "Clinician treating a patient in the dental chair", width: 1920, height: 2560 },
  imagingArea: { src: "/images/office/imaging-area.jpg", alt: "Imaging area with the CT scanner and flowers", width: 1920, height: 2560 },
  receptionDeskPortrait: { src: "/images/office/reception-desk-portrait.jpg", alt: "Reception desk and waiting area with the Cosmetic Dentistry sign", width: 768, height: 1024 },
  receptionDesk: { src: "/images/office/reception-desk.jpg", alt: "Reception desk and waiting area with the Cosmetic Dentistry sign", width: 1920, height: 2560 },
  treatmentChair: { src: "/images/office/treatment-chair.jpg", alt: "Treatment room with a dental chair and sculpture on the wall", width: 768, height: 1024 },
  smileResult1: { src: "/images/results/smile-result-1.jpg", alt: "Before and after smile result", width: 670, height: 670 },
  smileResult2: { src: "/images/results/smile-result-2.jpg", alt: "Before and after smile result", width: 1005, height: 1005 },
  smileResult3: { src: "/images/results/smile-result-3.jpg", alt: "Before and after smile result with a replaced front tooth", width: 1005, height: 1005 },
  carlosTorres: { src: "/images/team/carlos-torres.jpg", alt: "Carlos Torres, operations leader", width: 819, height: 1024 },
  drDanielCharlton: { src: "/images/team/dr-daniel-charlton.webp", alt: "Dr. Daniel Charlton, general and cosmetic dentist", width: 510, height: 537 },
  // Her original headshot from the client's Drive (Visuals > "Shir Headshot.PNG"), unedited. TTR-921, Oct 26, 2026.
  drNushinShir: { src: "/images/team/dr-nushin-shir-headshot.png", alt: "Dr. Nushin Shir, DDS, MPH", width: 216, height: 320 },
  nicoleVazquez: { src: "/images/team/nicole-vazquez.jpg", alt: "Nicole Vazquez, dental hygienist", width: 768, height: 1024 },
  teamPhoto: { src: "/images/team/team-photo.jpg", alt: "The Beverly Hills Dental Art Studio team", width: 1536, height: 1024 },
  thanysM: { src: "/images/team/thanys-m.jpg", alt: "Thanys M., practice professional", width: 1015, height: 1024 },
  cbctScanner: { src: "/images/technology/cbct-scanner.jpg", alt: "Cone beam CT scanner in the imaging room", width: 1920, height: 2560 },
  digitalXRayRoom: { src: "/images/technology/digital-x-ray-room.jpg", alt: "Treatment room with a dental chair and digital X-ray monitor", width: 1920, height: 2560 },
  iteroScanner: { src: "/images/technology/itero-scanner.jpg", alt: "iTero digital intraoral scanner", width: 1920, height: 2560 },
  ozoneUnit: { src: "/images/technology/ozone-unit.jpg", alt: "Ozone tooth and gum irrigator on the treatment tray", width: 1920, height: 2560 },
  softTissueLaser: { src: "/images/technology/soft-tissue-laser.jpg", alt: "Soft tissue dental laser", width: 1920, height: 2560 },
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;
