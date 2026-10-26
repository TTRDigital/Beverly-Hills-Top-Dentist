/*
 * Dr. Shir's profile page (/about-us/dr-nushin-shir/), TTR-921. Every fact is from her own bio (ClickUp, "Dr-Nushin-Shir-Bio")
 * and the client brain, and matches the About page. Her earlier practices are left out on purpose: Google's AI answers mixed
 * them up with this one.
 */
import { images } from "./images.ts";
import type { Img } from "../types";

export const PROFILE_PATH = "/about-us/dr-nushin-shir/";

export type ProfileFact = { label: string; value: string };
export type ProfileSection = { heading: string; items: { title: string; text: string }[] };

export const drShirProfile: {
  name: string;
  credentials: string;
  role: string;
  photo: Img;
  intro: string[];
  facts: ProfileFact[];
  sections: ProfileSection[];
  /** Her own current profiles only (verified from the site footer); nothing from her earlier practices. */
  sameAs: string[];
  seo: { title: string; description: string };
} = {
  name: "Dr. Nushin Shir",
  credentials: "DDS, MPH",
  role: "Principal Dentist, Beverly Hills Dental Arts Studio",
  // Her original, unedited headshot (Drive > Visuals > "Shir Headshot.PNG"; Ben, Oct 26).
  photo: { ...images.drNushinShir, alt: "Dr. Nushin Shir, DDS, MPH" },
  intro: [
    "Dr. Nushin Shir, DDS, MPH, is the principal dentist at Beverly Hills Dental Arts Studio, 416 N. Bedford Dr., Suite 105, in Beverly Hills. She graduated from the UCLA School of Dentistry in 1993, holds two master's degrees in public health from UCLA, and has practiced general, restorative and cosmetic dentistry for over 30 years.",
    "Her public health training shapes how she works: she looks at your overall health as well as your teeth, explains what she sees, and plans treatment around your needs and goals.",
  ],
  facts: [
    { label: "Practice", value: "Beverly Hills Dental Arts Studio, 416 N. Bedford Dr., Suite 105, Beverly Hills" },
    { label: "Dental degree", value: "DDS, UCLA School of Dentistry, 1993" },
    { label: "Public health", value: "Two master's degrees in public health, UCLA" },
    { label: "In practice", value: "Over 30 years" },
  ],
  sections: [
    {
      heading: "Education",
      items: [
        { title: "Doctor of Dental Surgery (DDS)", text: "UCLA School of Dentistry, 1993." },
        { title: "Two master's degrees in public health", text: "UCLA, in epidemiology and in health care policy." },
        { title: "Bachelor's degree in biological sciences", text: "University of California, Irvine." },
        { title: "Licensed by the Dental Board of California", text: "License 41042, first issued in 1993 and active, with her practice location on Bedford Drive." },
      ],
    },
    {
      heading: "Teaching and training",
      items: [
        { title: "Clinical instructor, UCLA School of Dentistry", text: "In the Restorative Dentistry department, teaching in the general dentistry residency (AEGD) and the predoctoral program." },
        { title: "Course director, West Coast University", text: "Course director and instructor for dental materials." },
        { title: "Mentor to UCLA dental students", text: "Worked with the UCLA School of Dentistry to mentor graduating dental students in dental practice and practice management." },
      ],
    },
    {
      heading: "Recognition",
      items: [
        { title: "America's Top Dentist", text: "Named in 2010, 2011, 2012, 2013 and 2015." },
        { title: "Top Southern California Dentists", text: "Voted among the Top Southern California Dentists in 2014." },
      ],
    },
    {
      heading: "How she practices",
      items: [
        { title: "Health first", text: "Your mouth is connected to the rest of you, so the first visit covers your health, not just your teeth." },
        { title: "Keep what is healthy", text: "She favors conservative treatment that keeps as much natural tooth as the situation allows." },
        { title: "Everything explained", text: "You see your X-rays and scans and hear your options, with time to decide." },
      ],
    },
  ],
  sameAs: ["https://www.instagram.com/beverlyhillsdentalartsstudio/", "https://www.facebook.com/beverlyhillstopdentist/"],
  seo: {
    title: "Dr. Nushin Shir, DDS, MPH | Beverly Hills Dentist",
    description: "Dr. Nushin Shir, DDS, MPH, principal dentist at Beverly Hills Dental Arts Studio on Bedford Drive: UCLA-trained, over 30 years in practice.",
  },
};
