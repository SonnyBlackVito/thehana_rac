import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsListHeader } from "@/components/news/news-list-header"
import { PressCard } from "@/components/news/press-card"
import { NewsPagination } from "@/components/news/news-pagination"
import { pressItems } from "@/components/news/news-data"
import { SocialSection } from "@/components/news/social-section"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1440px] px-0 py-4">
          <NewsListHeader total={92} />

          {/* Cards Grid */}
          <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-5 sm:py-10 md:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
              {pressItems.map((item, idx) => (
                <PressCard key={idx} item={item} />
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
