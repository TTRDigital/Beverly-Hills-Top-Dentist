import type { Metadata } from "next";
import Image from "next/image";
import { getAboutPage, getTeam } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { RichText } from "@/components/ui/RichText";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();
  return pageMetadata(about.seo, "/about-us/", about.hero.image);
}

export default async function AboutPage() {
  const [about, team] = await Promise.all([getAboutPage(), getTeam()]);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us/" }])} />
      <section className="relative flex h-[350px] flex-col justify-end overflow-hidden py-6 md:aspect-video md:h-auto md:py-[100px]">
        {about.hero.image ? <Image src={about.hero.image.src} alt={about.hero.image.alt || about.hero.heading} fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover object-top md:brightness-[1.2]" /> : null}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="container-x relative text-white">
          <h1 className="text-h1 font-semibold md:max-w-[518px]">{about.hero.heading}</h1>
          <p className="mt-5 text-base leading-[1.65] text-white/90 md:max-w-[596px]">{about.hero.text}</p>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-x text-center md:text-left">
          <h2 className="h2 text-black">{about.intro.heading}</h2>
          <p className="mt-5 text-black md:max-w-[531px]">{about.intro.text}</p>
        </div>
      </section>

      {team.map((m, i) => (
        <section key={m.id} aria-labelledby={`team-${m.id}`} className={`flex flex-col md:items-stretch ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
          <div className="flex flex-col justify-center bg-black p-[30px] text-center text-white md:w-1/2 md:px-20 md:text-left">
            <h2 id={`team-${m.id}`} className="h2">
              {m.heading}
            </h2>
            <RichText paras={m.bio} className="mt-5" />
          </div>
          {m.photo ? (
            <div className="md:w-1/2">
              <Image src={m.photo.src} alt={m.photo.alt || m.name} width={m.photo.width} height={m.photo.height} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
            </div>
          ) : null}
        </section>
      ))}

      <section className="bg-paper py-20">
        <div className="container-x text-center md:text-left">
          <h2 className="h2 text-black">{about.mission.heading}</h2>
          <p className="mt-5 text-black md:max-w-[531px]">{about.mission.text}</p>
        </div>
      </section>
    </>
  );
}
