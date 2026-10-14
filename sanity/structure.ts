import type { StructureResolver } from "sanity/structure";
import { CalendarCheck, CircleCheck, CircleHelp, Cog, FileText, Home, Images, Info, Layers, MapPin, MessageSquareQuote, Newspaper, Shield, Smile, Stethoscope, Users } from "lucide-react";

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string, icon: React.ComponentType) =>
  S.listItem().title(title).id(type).icon(icon).child(S.document().schemaType(type).documentId(type).title(title));

/** Grouped sidebar: Settings, Pages, Services, Locations, Before & after, Team, Reviews, FAQs, Blog. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Beverly Hills Dental")
    .items([
      singleton(S, "siteSettings", "Site settings", Cog),
      S.listItem()
        .title("Pages")
        .icon(Layers)
        .child(
          S.list()
            .title("Pages")
            .items([
              singleton(S, "homePage", "Home", Home),
              singleton(S, "aboutPage", "About", Info),
              singleton(S, "beforeAfterPage", "Before & after", Smile),
              singleton(S, "appointmentPage", "Appointment", CalendarCheck),
              singleton(S, "thankYouPage", "Thank you", CircleCheck),
              singleton(S, "servicesPage", "Services hub", Stethoscope),
              singleton(S, "locationsPage", "Locations hub", MapPin),
              singleton(S, "mcleanPage", "McLean hub", MapPin),
              singleton(S, "privacyPage", "Privacy policy", Shield),
            ]),
        ),
      S.divider(),
      S.listItem().title("Service categories").icon(Stethoscope).child(S.documentTypeList("serviceCategory").title("Service categories").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.listItem().title("Services").icon(FileText).child(S.documentTypeList("service").title("Services").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.listItem().title("Location pages").icon(MapPin).child(S.documentTypeList("locationPage").title("Location pages").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.divider(),
      S.listItem().title("Before & after cases").icon(Images).child(S.documentTypeList("beforeAfterCase").title("Before & after cases").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.listItem().title("Team").icon(Users).child(S.documentTypeList("teamMember").title("Team").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.listItem().title("Reviews").icon(MessageSquareQuote).child(S.documentTypeList("testimonial").title("Reviews")),
      S.listItem().title("FAQs").icon(CircleHelp).child(S.documentTypeList("faq").title("FAQs").defaultOrdering([{ field: "order", direction: "asc" }])),
      S.listItem().title("Blog posts").icon(Newspaper).child(S.documentTypeList("post").title("Blog posts").defaultOrdering([{ field: "date", direction: "desc" }])),
    ]);
