"use client"

import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsListHeader } from "@/components/news/news-list-header"
import { PressCard } from "@/components/news/press-card"
import { NewsPagination } from "@/components/news/news-pagination"
import { pressItems } from "@/components/news/news-data"
import { SocialSection } from "@/components/news/social-section"
import { apiBlogToPressItem } from "@/components/news/api-mappers"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { useBlogs } from "@/hooks/use-blogs"

function FeaturedPressSection({ item = pressItems[0] }: { item?: (typeof pressItems)[number] }) {
  return (
    <section className="bg-[#EEEEEE]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-12 md:px-20 md:py-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div className="max-w-[860px]">
          <p className="w-fit border-b-2 border-[#055239] pb-2 text-[15px] font-medium leading-none text-[#6D6D6D]">
            {item.source}
          </p>
          <h1 className="mt-6 text-[30px] font-bold leading-[1.16] tracking-[-0.02em] text-[#3E454B] md:text-[44px]">
            {item.title.en}
          </h1>
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-[#6D6D6D] md:text-[17px]">
            {item.body.en}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <time className="text-[15px] text-[#6D6D6D]">{item.date}</time>
            <Link
              href={`/press/${item.slug ?? "mindful-technology-design"}`}
              className="inline-flex h-10 items-center justify-center rounded-full border border-[#CCCCCC] bg-white px-6 text-[15px] font-semibold text-[#3E454B] transition-colors hover:border-[#055239] hover:text-[#055239]"
            >
              자세히 보기
            </Link>
          </div>
        </div>

        <Link
          href={`/press/${item.slug ?? "mindful-technology-design"}`}
          className="group relative aspect-[16/10] overflow-hidden rounded-[8px] bg-white shadow-sm"
          aria-label={`${item.title.en} detail`}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title.en}
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
  const { items, total, loading, error } = useBlogs({
    limit: 9,
    offset: 0,
    status: "published",
    tag: "press",
  })
  const apiItems = items.map(apiBlogToPressItem)
  const visibleItems = apiItems.length > 0 ? apiItems : pressItems
  const featured = visibleItems[0]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <FeaturedPressSection item={featured} />

        <section className="mx-auto w-full max-w-[1440px] px-0 py-4">
          <NewsListHeader total={total || visibleItems.length} />

          {error ? (
            <div className="mx-auto w-full max-w-[1280px] px-4 pt-6 sm:px-5 md:px-10">
              <Alert variant="destructive">
                <AlertTitle>API error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          ) : null}

          <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-5 sm:py-10 md:px-10">
            {loading && apiItems.length === 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Skeleton key={idx} className="aspect-[390/300] rounded-[12px]" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
                {visibleItems.map((item, idx) => (
                  <PressCard key={item.slug ?? idx} item={item} index={idx} />
                ))}
              </div>
            )}
          </div>

          <NewsPagination totalPages={Math.max(1, Math.ceil((total || visibleItems.length) / 9))} />
        </section>

        <SocialSection />
      </main>
      <SiteFooter />
    </div>
  )
}
