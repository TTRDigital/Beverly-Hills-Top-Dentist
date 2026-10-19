import type { Metadata } from "next";
import { getAreasHub, getCaseGroup, getHome } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { HomeHero, HomeIntro, HomeStory, HomeTechnology, HomeValues, OurWork } from "@/components/sections/HomeSections";

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHome();
  return pageMetadata(home.seo, "/", home.hero.poster);
}

export default async function HomePage() {
  const [home, results, areas] = await Promise.all([getHome(), getCaseGroup("results"), getAreasHub()]);
  return (
    <>
      <HomeHero hero={home.hero} />
      <HomeIntro intro={home.intro} />
      <HomeStory story={home.story} />
      <HomeTechnology technology={home.technology} />
      <OurWork work={home.work} cases={results} />
      <HomeValues values={home.values} areasLink={areas.approved} />
    </>
  );
}
