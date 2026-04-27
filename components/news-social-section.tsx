"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

type NewsItem = {
  title: { ko: string; en: string }
  date: string
}

const latestNews: NewsItem[] = [
  {
    title: {
      ko: "글로벌 브랜드 아니었어? '체성분 분석 대명사' 한국 회사의 고민 […",
      en: "Wasn't it a global brand? The dilemma of a Korean company known as the 'body composition analysis icon' […",
    },
    date: "2025.12.15",
  },
  {
    title: {
      ko: "글로벌 브랜드 아니었어? '체성분 분석 대명사' 한국 회사의 고민 […",
      en: "Wasn't it a global brand? The dilemma of a Korean company known as the 'body composition analysis icon' […",
    },
    date: "2025.12.15",
  },
]

const socialPosts: NewsItem[] = [
  {
    title: {
      ko: "[인바디 채용] GBD 지원하기 전에 꼭 봐야 할 영상",
      en: "[InBody Recruitment] Must-watch video before applying for GBD",
    },
    date: "2025.10.23",
  },
  {
    title: {
      ko: "[인바디 채용] GBD 지원하기 전에 꼭 봐야 할 영상",
      en: "[InBody Recruitment] Must-watch video before applying for GBD",
    },
    date: "2025.10.23",
  },
]

function MoreButton({ label, href = "/press" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
    >
      {label}
    </Link>
  )
}

function NewsCard({ item, locale }: { item: NewsItem; locale: "ko" | "en" }) {
  return (
    <article className="group flex flex-col gap-4 border-t border-border pt-6">
      <Link href="#" className="flex items-start gap-4">
        <div className="aspect-square w-20 shrink-0 bg-muted" aria-hidden="true" />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <h3 className="line-clamp-2 text-[15px] font-medium leading-snug text-foreground group-hover:text-primary">
            {item.title[locale]}
          </h3>
          <time className="text-xs text-muted-foreground">{item.date}</time>
        </div>
      </Link>
    </article>
  )
}

export function NewsSocialSection() {
  const { locale, t } = useI18n()

  return (
    <section aria-labelledby="news-social-heading" className="w-full bg-background">
      <h2 id="news-social-heading" className="sr-only">
        {t("newsSocial", "srHeading")}
      </h2>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        {/* 최신뉴스 */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-xl font-bold text-foreground md:text-2xl">{t("newsSocial", "latestNews")}</h3>
            <MoreButton label={t("newsSocial", "more")} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {latestNews.map((item, i) => (
              <NewsCard key={`news-${i}`} item={item} locale={locale} />
            ))}
          </div>
        </div>

        {/* 소셜미디어 */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-xl font-bold text-foreground md:text-2xl">{t("newsSocial", "socialMedia")}</h3>
            <MoreButton label={t("newsSocial", "more")} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {socialPosts.map((item, i) => (
              <NewsCard key={`social-${i}`} item={item} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
