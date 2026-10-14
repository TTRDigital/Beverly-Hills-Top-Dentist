import type { Metadata } from "next";
import Image from "next/image";
import { getAppointmentPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAppointmentPage();
  return pageMetadata(page.seo, "/appointment/", page.image);
}

export default async function AppointmentPage() {
  const [page, s] = await Promise.all([getAppointmentPage(), getSiteSettings()]);
  return (
    <div className="bg-paper">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Appointment", path: "/appointment/" }])} />
      <section className="relative flex min-h-[260px] flex-col justify-end overflow-hidden py-10 md:min-h-[450px] md:py-[60px]">
        {page.image ? <Image src={page.image.src} alt={page.image.alt} fill preload sizes="100vw" className="object-cover object-left-top md:object-[50%_18%]" /> : null}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="container-box relative">
          <h1 className="text-center text-[24px] font-semibold uppercase leading-[1.2] text-white md:text-left md:text-[40px]">{page.heading}</h1>
        </div>
      </section>
      <section className="bg-night py-10 text-white md:py-[30px]">
        <div className="container-box flex flex-col gap-10 py-2.5 md:flex-row md:gap-5">
          <div className="space-y-5 md:w-[40%]">
            <p>
              <span aria-hidden="true">☎ </span>
              <span className="sr-only">Phone: </span>
              <a href={s.phoneHref} data-track="click_to_call" className="hover:text-brand-2">
                {s.phone}
              </a>
            </p>
            <p>
              <span aria-hidden="true">📍 </span>
              <span className="sr-only">Address: </span>
              {s.street}, {s.city}, {s.region} {s.postalCode}
            </p>
            <ul className="space-y-[10px] leading-[1.2]">
              <li>{page.hoursLabel}</li>
              {s.hours.map((h) => (
                <li key={h.day}>
                  {h.day} - {h.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-[60%]">
            <AppointmentForm buttonLabel={page.formButton} businessName={s.name} phone={s.phone} phoneHref={s.phoneHref} privacyUrl={s.privacyPolicyUrl} />
          </div>
        </div>
      </section>
    </div>
  );
}
