import type { Metadata } from "next";
import Image from "next/image";
import { getBeforeAfterPage, getCaseGroup } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Carousel } from "@/components/ui/Carousel";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getBeforeAfterPage();
  return pageMetadata(page.seo, "/before-after/", page.hero.image);
}

export default async function BeforeAfterPage() {
  const [page, grid, mobile] = await Promise.all([getBeforeAfterPage(), getCaseGroup("gallery"), getCaseGroup("galleryMobile")]);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Before & After", path: "/before-after/" }])} />
      <section className="relative flex min-h-[400px] flex-col justify-center overflow-hidden py-10 md:aspect-video md:min-h-0">
        {/* Mirrored, as on the old site. */}
        {page.hero.image ? <Image src={page.hero.image.src} alt="" fill preload sizes="100vw" className="-scale-x-100 object-cover" /> : null}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="container-box relative text-center text-white md:text-left">
          <h1 className="text-[30px] font-semibold leading-[1.2] md:text-h1">{page.hero.heading}</h1>
          <p className="mt-5 text-base leading-[1.6] md:max-w-[340px]">{page.hero.text}</p>
        </div>
      </section>

      <section className="bg-paper py-[60px]">
        <div className="container-box">
          <h2 className="h2 text-center">{page.gallery.heading}</h2>
          <p className="mb-10 mt-5 text-center text-base md:mb-[30px] md:text-[20px]">{page.gallery.text}</p>
          {/* Desktop: the full grid. Phones: the old site's carousel of six cases. */}
          <ul className="hidden grid-cols-3 gap-[10px] lg:grid">
            {grid.map((c) => (
              <li key={c.id} className="relative aspect-square overflow-hidden">
                <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 1024px) 380px, 33vw" className="object-cover" />
              </li>
            ))}
          </ul>
          <div className="lg:hidden">
            <Carousel label={page.gallery.heading} perView="w-full md:w-[calc(50%-5px)]">
              {mobile.map((c) => (
                <div key={c.id} className="relative min-h-[400px] overflow-hidden">
                  <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 768px) 50vw, 90vw" className="object-cover" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
