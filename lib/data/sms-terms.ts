import type { LegalContent } from "@/lib/types";

/*
 * SMS terms for the practice's text messages (TTR-1164; the carriers' campaign registration needs a public Terms page with the
 * program name and description, message frequency, rates, HELP and STOP in bold, support contact and the opt-in method).
 * Draft awaiting the practice's review with counsel; kept out of search. Paragraphs starting "## " are headings.
 */
export const smsTerms: LegalContent = {
  title: "SMS Terms and Conditions",
  body: [
    "Last updated: November 3, 2026",
    "These terms apply to text messages (SMS) from Beverly Hills Dental Arts Studio, 416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210 (“we”, “us”). Our text messages are sent for us through our marketing agency, TTR Digital Marketing, and our messaging provider, Twilio.",
    "## Program name and description",
    "Beverly Hills Dental Arts Studio Appointment Request Texts. We text you only about a request you sent us on this website: to confirm that we received it, and to follow up about availability and scheduling. We do not send promotional or marketing texts under this program.",
    "## How you join",
    "You join by submitting an appointment or consultation request on beverlyhillstopdentist.com and checking the box that says you agree to be contacted by us by phone, text message or email about your request. The box is not checked for you, and you can submit a request without our texting you only by calling us at (310) 274-7005.",
    "## Message frequency and costs",
    "Message frequency varies with your request; you will usually receive one to three texts about each request. Message and data rates may apply, depending on your mobile plan.",
    "## How to stop and how to get help",
    "Reply **STOP** to any text to stop receiving texts. We will confirm, and you will receive no more texts from this program. Reply **HELP** for help, or call us at (310) 274-7005. You can also ask us to stop calling or emailing you at any time.",
    "## Consent is not a condition of care",
    "Agreeing to receive texts is not required to receive dental care or to buy anything from us.",
    "## Carriers",
    "Wireless carriers are not liable for delayed or undelivered messages.",
    "## Your information",
    "We do not sell, rent or share your mobile phone number or your text message opt-in consent with third parties or affiliates for their marketing purposes. How we handle your information is described in our [Privacy Policy](/privacy-policy/).",
    "## Contact us",
    "Beverly Hills Dental Arts Studio, 416 N. Bedford Dr., Suite 105, Beverly Hills, CA 90210. Phone: (310) 274-7005.",
  ],
  seo: {
    title: "SMS Terms and Conditions - Beverly Hills Dental",
    description: "Terms for text messages from Beverly Hills Dental Arts Studio about your appointment request: how to join, message frequency, rates, and how to stop.",
    noIndex: true,
  },
};
