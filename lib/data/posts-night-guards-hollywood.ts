/*
 * TTR-976: "Night Guards Hollywood | Beverly Hills Dental Arts Studio". SCAFFOLD: the final text is Leo's (task TTR-976) and is
 * pasted in here. It is a post like the Culver City one (byline, related page card, article structured data), at
 * /blog/night-guards-hollywood/. Hidden from search until approved: seo.noIndex is true and it is not in the sitemap.
 */
import type { Post } from "../types";
import { images } from "./images.ts";

export const nightGuardsHollywood: Post = {
  slug: "night-guards-hollywood",
  title: "Night Guards Hollywood",
  date: "2026-11-13",
  author: "Dr. Nushin Shir",
  category: "preventive",
  service: "/services/preventive-dentistry/night-guards/",
  excerpt: "TTR-976 scaffold: text to come.",
  image: {
    ...images.hallwayWide,
    alt: "The hallway at Beverly Hills Dental Arts Studio with a round table, flowers and framed black and white portraits",
  },
  cta: "TTR-976 scaffold: text to come.",
  body: ["TTR-976 scaffold: the final text from Leo goes here.", "## TTR-976 scaffold heading", "TTR-976 scaffold: text to come."],
  seo: {
    title: "Night Guards Hollywood | Beverly Hills Dental Arts Studio",
    description: "TTR-976 scaffold: description to come.",
    noIndex: true,
  },
};
