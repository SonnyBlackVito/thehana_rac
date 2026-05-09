import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsListHeader } from "@/components/news/news-list-header"
import { PressCard } from "@/components/news/press-card"
import { NewsPagination } from "@/components/news/news-pagination"
import { pressItems } from "@/components/news/news-data"
import { SocialSection } from "@/components/news/social-section"

function FeaturedPressSection() {
  return (
    <section className="bg-[#EEEEEE]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-12 md:px-20 md:py-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div className="max-w-[860px]">
          <p className="w-fit border-b-2 border-[#055239] pb-2 text-[15px] font-medium leading-none text-[#6D6D6D]">
            전자신문
          </p>
          <h1 className="mt-6 text-[30px] font-bold leading-[1.16] tracking-[-0.02em] text-[#3E454B] md:text-[44px]">
            Mindful Technology Design: Thinking About Social Scalability In The Digital Era
          </h1>
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-[#6D6D6D] md:text-[17px]">
            보다 깊게, 보다 근본적으로 생명의 시간을 재설계하는 솔루션을 만듭니다. 더하나 리버스 에이징 센터는 재생 과학 기술을 통해 새로운 가능성을 증명합니다.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <time className="text-[15px] text-[#6D6D6D]" dateTime="2025-12-15">
              2025-12-15
            </time>
            <Link
              href="/press/mindful-technology-design"
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#CCCCCC] bg-white px-6 text-[15px] font-semibold text-[#3E454B] transition-colors hover:border-[#055239] hover:text-[#055239]"
            >
              자세히 보기
            </Link>
          </div>
        </div>

        <Link
          href="/press/mindful-technology-design"
          className="group relative aspect-[16/10] overflow-hidden rounded-[8px] bg-white shadow-sm"
          aria-label="Mindful Technology Design detail"
        >
          <Image
            src="/press-detail/pr-detail-treatment.png"
            alt="목과 피부 라인을 따라 빛나는 케어 효과가 표현된 여성 이미지"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority
          />
        </Link>
      </div>
    </section>
  )
}

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <FeaturedPressSection />

        <section className="mx-auto w-full max-w-[1440px] px-0 py-4">
          <NewsListHeader total={92} />

          <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-5 sm:py-10 md:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
              {pressItems.map((item, idx) => (
                <PressCard key={idx} item={item} index={idx} />
              ))}
            </div>
          </div>

          <NewsPagination totalPages={5} />
        </section>

        <SocialSection />
      </main>
      <SiteFooter />
    </div>
  )
}
