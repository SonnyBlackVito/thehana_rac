"use client"

import Image from "next/image"
import { useState } from "react"
import { NewsPagination } from "./news-pagination"
import { useI18n } from "@/lib/i18n/context"

const instagramItems = [
  { image: "/social-1.png", title: { ko: "더하나 R.A.C 공식 인터뷰 현장", en: "THE HANA R.A.C Official Interview" }, caption: { ko: "리버스 에이징 기술의 미래를 말하다 #THEHANA #RAC", en: "Talking about the future of reverse aging technology #THEHANA #RAC" }, date: "2025.12.15" },
  { image: "/social-2.png", title: { ko: "글로벌 리버스 에이징 컨퍼런스", en: "Global Reverse Aging Conference" }, caption: { ko: "세계가 주목한 활성 PRF 기술 발표 현장 #ActivePRF", en: "Active PRF technology presentation that caught the world's attention #ActivePRF" }, date: "2025.12.12" },
  { image: "/social-3.png", title: { ko: "심해 1km 청정수 취수 현장", en: "1km Deep Sea Water Intake Site" }, caption: { ko: "세계 최장 17.5km 해양심층수 파이프라인 #Rewater", en: "World's longest 17.5km deep sea water pipeline #Rewater" }, date: "2025.12.10" },
  { image: "/social-4.png", title: { ko: "리버셀 주사 R&D 인사이트", en: "Revercell R&D Insight" }, caption: { ko: "줄기세포 분화 메커니즘 연구 노트 #Revercell", en: "Stem cell differentiation mechanism research notes #Revercell" }, date: "2025.12.08" },
  { image: "/social-5.png", title: { ko: "브랜드 캠페인 비하인드", en: "Brand Campaign Behind the Scenes" }, caption: { ko: "더하나 R.A.C 새로운 브랜드 무드 공개 #BrandFilm", en: "THE HANA R.A.C new brand mood reveal #BrandFilm" }, date: "2025.12.05" },
  { image: "/social-6.png", title: { ko: "임상 케이스 스토리", en: "Clinical Case Story" }, caption: { ko: "회복의 순간을 함께한 골든아워 #ClinicalCase", en: "Golden hour of recovery moments #ClinicalCase" }, date: "2025.12.03" },
  { image: "/social-7.png", title: { ko: "활성 PRF 미세구조 연구", en: "Active PRF Microstructure Research" }, caption: { ko: "전자현미경으로 본 활성화 4단계 #ResearchLab", en: "4 stages of activation under electron microscope #ResearchLab" }, date: "2025.12.01" },
  { image: "/social-8.png", title: { ko: "혈액 활성화 시술 이야기", en: "Blood Activation Treatment Story" }, caption: { ko: "내 혈액으로 완성하는 자가 치유 #BloodActivator", en: "Self-healing completed with my blood #BloodActivator" }, date: "2025.11.28" },
  { image: "/social-9.png", title: { ko: "더하나 연구개발팀의 하루", en: "A Day with THE HANA R&D Team" }, caption: { ko: "근본부터 다시 쓰는 재생의학의 시작 #R&D", en: "Rewriting regenerative medicine from the ground up #R&D" }, date: "2025.11.25" },
]

const youtubeItems = [
  { image: "/social-2.png", title: { ko: "[다큐] 리버스 에이징, 시간을 되돌리다", en: "[Documentary] Reverse Aging, Turning Back Time" }, caption: { ko: "더하나 R.A.C가 그리는 항노화의 미래 · 12:34", en: "The future of anti-aging by THE HANA R.A.C · 12:34" }, date: "2025.12.14" },
  { image: "/social-1.png", title: { ko: "활성 PRF, 무엇이 다른가?", en: "Active PRF, What's Different?" }, caption: { ko: "기존 PRP 대비 6배 높은 성장인자 방출률 · 08:12", en: "6x higher growth factor release rate vs conventional PRP · 08:12" }, date: "2025.12.11" },
  { image: "/social-7.png", title: { ko: "리버셀 주사 시술 가이드", en: "Revercell Injection Guide" }, caption: { ko: "줄기세포 정맥 투여의 모든 것 · 06:45", en: "Everything about intravenous stem cell administration · 06:45" }, date: "2025.12.09" },
  { image: "/social-3.png", title: { ko: "심해수 1km 취수 다큐멘터리", en: "1km Deep Sea Water Documentary" }, caption: { ko: "청정 해양심층수가 만들어지는 과정 · 15:20", en: "The process of making clean deep sea water · 15:20" }, date: "2025.12.06" },
  { image: "/social-9.png", title: { ko: "더하나 연구소 라운드 투어", en: "THE HANA Lab Round Tour" }, caption: { ko: "R&D 센터 내부 최초 공개 · 09:58", en: "First public reveal of R&D center interior · 09:58" }, date: "2025.12.02" },
  { image: "/social-6.png", title: { ko: "임상 사례 인터뷰", en: "Clinical Case Interview" }, caption: { ko: "활성 PRF로 일상을 되찾은 사람들 · 11:03", en: "People who regained their daily lives with Active PRF · 11:03" }, date: "2025.11.30" },
  { image: "/social-4.png", title: { ko: "혈액 활성화기의 원리", en: "Blood Activator Principles" }, caption: { ko: "엔지니어가 직접 설명하는 ACT PRO · 07:21", en: "Engineer explains ACT PRO · 07:21" }, date: "2025.11.27" },
  { image: "/social-8.png", title: { ko: "리워터(Re:water) 제품 리뷰", en: "Re:water Product Review" }, caption: { ko: "심해수가 일상에 녹아드는 방법 · 05:48", en: "How deep sea water blends into daily life · 05:48" }, date: "2025.11.24" },
  { image: "/social-5.png", title: { ko: "더하나 R.A.C 브랜드 필름", en: "THE HANA R.A.C Brand Film" }, caption: { ko: "Reverse Aging, A New Standard · 02:14", en: "Reverse Aging, A New Standard · 02:14" }, date: "2025.11.20" },
]

type Tab = "instagram" | "youtube"

export function SocialSection() {
  const [activeTab, setActiveTab] = useState<Tab>("instagram")
  const { locale, t } = useI18n()
  const items = activeTab === "instagram" ? instagramItems : youtubeItems
  const heading = t("press", activeTab)

  return (
    <section className="mx-auto w-full max-w-[1440px] px-0 py-4">
      {/* Header */}
      <div className="px-4 sm:px-5 md:px-20">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[22px] font-semibold leading-[30px] tracking-tight text-[#3E454B] sm:text-[26px] sm:leading-[34px] md:text-[32px] md:leading-[40px]">
            {heading}
          </h2>
          <div className="h-[2px] w-[60px] bg-[#055239] sm:w-[72px]" aria-hidden="true" />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-5 sm:px-5 sm:pt-6 md:px-20">
        <div className="flex flex-wrap items-center gap-2 py-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("instagram")}
            className={
              activeTab === "instagram"
                ? "inline-flex h-[40px] items-center justify-center rounded-full bg-[#055239] px-5 text-[14px] font-medium leading-none text-white"
                : "inline-flex h-[38px] items-center justify-center rounded-full border border-[#CCCCCC] px-5 text-[14px] font-medium leading-none text-[#3E454B] transition-colors hover:border-[#055239] hover:text-[#055239]"
            }
          >
            {t("press", "instagram")}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("youtube")}
            className={
              activeTab === "youtube"
                ? "inline-flex h-[40px] items-center justify-center rounded-full bg-[#055239] px-5 text-[14px] font-medium leading-none text-white"
                : "inline-flex h-[38px] items-center justify-center rounded-full border border-[#CCCCCC] px-5 text-[14px] font-medium leading-none text-[#3E454B] transition-colors hover:border-[#055239] hover:text-[#055239]"
            }
          >
            {t("press", "youtube")}
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-5 sm:py-8 md:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {items.map((item, idx) => (
            <article
              key={`${activeTab}-${idx}`}
              className="group flex flex-col overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-card transition-colors hover:border-[#055239]/40"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title[locale]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-4">
                <h3 className="line-clamp-1 text-[15px] font-semibold leading-[22px] text-[#3E454B]">{item.title[locale]}</h3>
                <p className="line-clamp-2 min-h-[36px] text-[13px] leading-[18px] text-[#8D8D8D]">{item.caption[locale]}</p>
                <span className="mt-1 text-[12px] leading-none text-[#9C9C9C]">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <NewsPagination totalPages={5} />
    </section>
  )
}
