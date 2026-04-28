"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

type Category = "press" | "event" | "research"

type NewsItem = {
  category: Category
  title: { ko: string; en: string }
  date: string
  image: string
  href?: string
}

const CATEGORY_LABELS: Record<Category, "categoryPress" | "categoryEvent" | "categoryResearch"> = {
  press: "categoryPress",
  event: "categoryEvent",
  research: "categoryResearch",
}

const CATEGORY_STYLES: Record<Category, string> = {
  press: "bg-primary/10 text-primary",
  event: "bg-[#6BAFFF]/15 text-[#1d6fcf]",
  research: "bg-[#189E72]/15 text-[#0e7a55]",
}

const latestNews: NewsItem[] = [
  {
    category: "research",
    title: {
      ko: "더하나 R.A.C, 활성 PRF 기술로 글로벌 재생의학 학회 우수 연구상 수상",
      en: "THEHANA R.A.C wins Outstanding Research Award for Active PRF technology",
    },
    date: "2026.04.18",
    image: "/news-1.png",
  },
  {
    category: "press",
    title: {
      ko: "더하나 리버스 에이징 센터, 강남에 플래그십 센터 오픈",
      en: "THE HANA Reverse Aging Center opens flagship in Gangnam",
    },
    date: "2026.03.27",
    image: "/news-2.png",
  },
]

const socialPosts: NewsItem[] = [
  {
    category: "event",
    title: {
      ko: "단 15분의 활성화로 깨어나는 재생 에너지 #리버스에이징",
      en: "Regenerative energy awakened in just 15 minutes #ReverseAging",
    },
    date: "2026.04.10",
    image: "/social-1.png",
  },
  {
    category: "event",
    title: {
      ko: "리버셀 무료 체험 이벤트 — 4월 한정 특별 프로모션",
      en: "Free Revercell trial — special promotion for April only",
    },
    date: "2026.04.02",
    image: "/social-2.png",
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

function NewsCard({
  item,
  locale,
  t,
}: {
  item: NewsItem
  locale: "ko" | "en"
  t: (s: string, k: string) => string
}) {
  return (
    <article className="group flex flex-col gap-4 border-t border-border pt-6">
      <Link href={item.href || "#"} className="flex items-start gap-4">
        <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-md bg-muted">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="80px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <span
            className={`inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${CATEGORY_STYLES[item.category]}`}
          >
            {t("newsSocial", CATEGORY_LABELS[item.category])}
          </span>
          <h3 className="line-clamp-2 text-[15px] font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
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
              <NewsCard key={`news-${i}`} item={item} locale={locale} t={t} />
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
              <NewsCard key={`social-${i}`} item={item} locale={locale} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
