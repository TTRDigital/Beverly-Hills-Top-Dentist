/** The optional "service" choice on the short landing page form (TTR-2344). The server accepts only these values. */
export const LP_SERVICES = ["General or family dentistry", "Cleaning and exam", "Invisalign or clear aligners", "Dental implants", "Veneers or whitening", "Crowns, bridges or fillings", "Toothache or emergency", "Something else"] as const;
export const isLpService = (v: unknown): v is (typeof LP_SERVICES)[number] => typeof v === "string" && (LP_SERVICES as readonly string[]).includes(v);
