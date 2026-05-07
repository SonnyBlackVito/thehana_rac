"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ChevronRight, MessageCircle, Sparkles } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { useI18n } from "@/lib/i18n/context"

type Tier = "gold" | "platinum" | "black"
type Bilingual = { ko: string; en: string }
type BilingualList = { ko: string[]; en: string[] }

type MembershipTier = {
  label: string
  image: string
  imageAlt: Bilingual
  accent: string
  tint: string
  glow: string
  title: Bilingual
  tagline: Bilingual
  description: BilingualList
  points: BilingualList
}

const membershipData: Record<Tier, MembershipTier> = {
  gold: {
    label: "GOLD",
    image: "/vip-card-gold.png",
    imageAlt: {
      ko: "더하나 VIP 골드 멤버십 카드",
      en: "THEHANA VIP Gold membership card",
    },
    accent: "#A88468",
    tint: "linear-gradient(135deg, #FFF8ED 0%, #F6EFE5 50%, #FFFFFF 100%)",
    glow: "0 24px 70px rgba(168, 132, 104, 0.2)",
    title: {
      ko: "더하나 리버스에이징 멤버십 골드",
      en: "THE HANA Reverse Aging Membership Gold",
    },
    tagline: {
      ko: "흐트러진 생체 리듬을 깨우는 리버스 에이징의 시작",
      en: "The beginning of reverse aging that awakens disrupted biological rhythm",
    },
    description: {
      ko: [
        "특징: 줄기세포 전신 케어와 1주일간의 집중 미네랄 리커버리.",
        "추천: 리버스 에이징을 처음 경험하고 체내 밸런스를 빠르게 회복하고 싶은 분.",
        "THE HANA 멤버십은 고객님의 컨디션과 목표에 따라 커스터마이징됩니다. 상세 구성 및 특별 혜택은 1:1 컨설팅을 통해 확인하실 수 있습니다.",
      ],
      en: [
        "Features: Whole-body stem cell care with a one-week intensive mineral recovery program.",
        "Recommended for: Guests experiencing reverse aging for the first time who want to quickly restore internal balance.",
        "THE HANA membership is customized according to each guest's condition and goals. Detailed composition and special benefits are available through 1:1 consultation.",
      ],
    },
    points: {
      ko: ["1주일 집중 미네랄 리커버리", "입문 고객을 위한 기본 밸런스 케어"],
      en: ["One-week intensive mineral recovery", "Essential balance care for first-time members"],
    },
  },
  platinum: {
    label: "PLATINUM",
    image: "/vip-card-platinum.png",
    imageAlt: {
      ko: "더하나 VIP 플래티넘 멤버십 카드",
      en: "THEHANA VIP Platinum membership card",
    },
    accent: "#8E9497",
    tint: "linear-gradient(135deg, #F8FAFA 0%, #ECEFF0 48%, #FFFFFF 100%)",
    glow: "0 24px 70px rgba(142, 148, 151, 0.22)",
    title: {
      ko: "더하나 리버스에이징 멤버십 플래티넘",
      en: "THE HANA Reverse Aging Membership Platinum",
    },
    tagline: {
      ko: "집중적인 영양 공급과 재생, 완성도 높은 변화를 경험",
      en: "Experience focused nutrition, regeneration, and refined visible change",
    },
    description: {
      ko: [
        "특징: 줄기세포 풀패키지에 NMN과 전용 재생크림을 더해 내외면의 시너지를 극대화한 주력 프로그램.",
        "추천: 바쁜 비즈니스 일상 속에서도 완벽한 컨디션 유지와 가시적인 노화 관리를 원하는 분.",
        "THE HANA 멤버십은 고객님의 컨디션과 목표에 따라 커스터마이징됩니다. 상세 구성 및 특별 혜택은 1:1 컨설팅을 통해 확인하실 수 있습니다.",
      ],
      en: [
        "Features: A signature program that maximizes inner and outer synergy by adding NMN and a dedicated regeneration cream to the stem cell full package.",
        "Recommended for: Guests who want to maintain peak condition and manage visible aging even in a demanding business routine.",
        "THE HANA membership is customized according to each guest's condition and goals. Detailed composition and special benefits are available through 1:1 consultation.",
      ],
    },
    points: {
      ko: ["NMN 및 전용 재생크림 구성", "내외면 시너지를 위한 주력 프로그램"],
      en: ["Includes NMN and dedicated regeneration cream", "Signature program for inner and outer synergy"],
    },
  },
  black: {
    label: "BLACK",
    image: "/vip-card-black.png",
    imageAlt: {
      ko: "더하나 VIP 블랙 멤버십 카드",
      en: "THEHANA VIP Black membership card",
    },
    accent: "#211D2E",
    tint: "linear-gradient(135deg, #F5F4F7 0%, #EAE8EF 44%, #FFFFFF 100%)",
    glow: "0 24px 70px rgba(33, 29, 46, 0.24)",
    title: {
      ko: "더하나 리버스에이징 멤버십 블랙",
      en: "THE HANA Reverse Aging Membership Black",
    },
    tagline: {
      ko: "당신의 시간을 멈추는 최상위 웰니스 컨시어지",
      en: "The highest-level wellness concierge that helps pause your time",
    },
    description: {
      ko: [
        "특징: 전신과 피부를 아우르는 풀패키지 솔루션. 4주간의 리워터 집중 케어로 세포가 살아나는 최적의 환경을 조성합니다.",
        "추천: 프라이빗한 환경에서 최상의 메디컬 케어와 정교한 피부 솔루션을 동시에 원하는 VVIP.",
        "THE HANA 멤버십은 고객님의 컨디션과 목표에 따라 커스터마이징됩니다. 상세 구성 및 특별 혜택은 1:1 컨설팅을 통해 확인하실 수 있습니다.",
      ],
      en: [
        "Features: A full-package solution covering the whole body and skin. Four weeks of intensive Re:water care creates an optimal environment for cellular vitality.",
        "Recommended for: VVIP guests who want premium medical care and precise skin solutions in a private environment.",
        "THE HANA membership is customized according to each guest's condition and goals. Detailed composition and special benefits are available through 1:1 consultation.",
      ],
    },
    points: {
      ko: ["4주간 리워터 집중 케어", "VVIP 전용 웰니스 컨시어지"],
      en: ["Four-week intensive Re:water care", "Wellness concierge for VVIP members"],
    },
  },
}

const legalNotice: Bilingual = {
  ko: "본 서비스는 MSO 법인 (주)더하나코퍼레이션이 제공하는 'THEHANA 리버스 에이징 멤버십' 프로그램입니다. 멤버십에 포함된 모든 의료 서비스(줄기세포 시술 및 피부 시술 등)는 보건복지부 허가를 받은 첨단재생의료실시기관의 전문 의료진에 의해 시행됩니다. (주)더하나코퍼레이션은 의료 행위를 직접 수행하지 않으며, 멤버십 가입 고객을 위한 리버스에이징 관리, 건강기능식품 및 웰니스 솔루션 공급을 담당합니다. 본 결제 금액에는 MSO 법인의 서비스 비용과 협력 병원의 의료 용역비가 포함되어 있습니다.",
  en: "This service is a 'THEHANA Reverse Aging Membership' program provided by the MSO corporation THEHANA Corporation. All medical services included in the membership, such as stem cell and skin procedures, are performed by medical professionals at authorized advanced regenerative medical institutions. THEHANA Corporation does not directly perform medical acts and is responsible for reverse-aging management, health functional foods, and wellness solution supply for membership clients. The payment amount includes the MSO service fee and medical service fees from partner hospitals.",
}

const ui = {
  home: { ko: "홈", en: "Home" },
  membership: { ko: "멤버십", en: "Membership" },
  cta: { ko: "1:1 컨설팅 받기", en: "Get 1:1 Consultation" },
  kakao: { ko: "카카오 1:1 상담으로 연결됩니다.", en: "Connects to Kakao 1:1 consultation." },
  back: { ko: "멤버십 목록으로", en: "Back to Membership" },
}

export function MembershipDetailClient({ tier }: { tier: Tier }) {
  const { locale } = useI18n()
  const product = membershipData[tier]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 bg-[#FBFCFB]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-14 xl:px-20 xl:py-16">
          <nav className="flex flex-wrap items-center gap-1.5 text-[12px] font-medium text-[#8D8D8D] sm:gap-2 sm:text-sm">
            <Link href="/" className="transition-colors hover:text-primary">
              {ui.home[locale]}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            <Link href="/member" className="transition-colors hover:text-primary">
              {ui.membership[locale]}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            <span className="text-[#3E454B]">{product.label}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 xl:gap-16">
            <div className="flex justify-center">
              <div
                className="relative flex aspect-square w-full max-w-[360px] items-center justify-center overflow-hidden rounded-[20px] border border-[#E4E7E5] bg-white sm:max-w-[480px] sm:rounded-[24px] lg:max-w-[560px] lg:rounded-[28px]"
                style={{ background: product.tint, boxShadow: product.glow }}
              >
                <div className="relative h-[260px] w-[173px] sm:h-[340px] sm:w-[225px] lg:h-[424px] lg:w-[281px]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt[locale]}
                    fill
                    priority
                    sizes="(max-width: 640px) 173px, (max-width: 1024px) 225px, 281px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-2">
              <span
                className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-white shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-[12px] lg:text-[13px] lg:tracking-[0.14em]"
                style={{ backgroundColor: product.accent }}
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                {product.label} MEMBERSHIP
              </span>

              <h1 className="mt-4 text-pretty text-[26px] font-bold leading-[1.25] text-[#3E454B] sm:mt-5 sm:text-[34px] lg:text-[40px] xl:text-[44px]">
                {product.title[locale]}
              </h1>

              <p className="mt-3 text-pretty text-[17px] font-semibold leading-[1.45] text-primary sm:mt-4 sm:text-[21px] lg:text-[24px] xl:text-[26px]">
                {product.tagline[locale]}
              </p>

              <div className="mt-5 space-y-3 rounded-[14px] border border-[#E4E7E5] bg-white p-4 text-[14px] font-medium leading-[1.7] text-[#3E454B] shadow-sm sm:mt-6 sm:rounded-[16px] sm:p-5 sm:text-[15px] lg:mt-7 lg:rounded-[18px] lg:p-6 lg:text-[16px] xl:text-[17px]">
                {product.description[locale].map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <ul className="mt-4 grid gap-3 text-[13px] font-medium leading-[20px] text-[#3E454B] sm:mt-5 sm:text-[14px] sm:leading-[22px] md:grid-cols-2 lg:text-[15px]">
                {product.points[locale].map((point) => (
                  <li key={point} className="flex min-h-12 items-start gap-2 rounded-[12px] bg-white px-3.5 py-3 shadow-sm ring-1 ring-[#E4E7E5] sm:px-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-7">
                <Link
                  href="http://pf.kakao.com/_uFxbzb/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-[15px] font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg sm:min-h-14 sm:w-auto sm:px-7 sm:text-[17px] lg:text-[18px]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {ui.cta[locale]}
                </Link>
                <p className="text-center text-[12px] leading-[18px] text-[#6B6666] sm:text-left sm:text-[14px] sm:leading-[22px] lg:text-[15px]">
                  {ui.kakao[locale]}
                </p>
              </div>

              <p className="mt-6 border-t border-[#D9D9D9] pt-4 text-[11px] font-medium leading-[17px] text-[#7A7F83] sm:mt-8 sm:pt-5 sm:text-[12px] sm:leading-[18px] lg:text-[13px] lg:leading-[20px]">
                {legalNotice[locale]}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[#E4E7E5] pt-6 sm:mt-14 sm:pt-8 lg:mt-20">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <Link
                href="/member"
                className="inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-[#3E454B] transition-colors hover:text-primary sm:text-[14px]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {ui.back[locale]}
              </Link>

              <div className="flex flex-wrap gap-2">
                {(Object.keys(membershipData) as Tier[]).map((item) => {
                  const target = membershipData[item]
                  const isCurrent = item === tier

                  return (
                    <Link
                      key={item}
                      href={`/member/${item}`}
                      className={`rounded-full border px-3.5 py-2 text-[12px] font-bold transition-colors sm:px-4 sm:text-[13px] ${
                        isCurrent
                          ? "border-primary bg-primary text-white"
                          : "border-[#D9D9D9] bg-white text-[#3E454B] hover:border-primary hover:text-primary"
                      }`}
                    >
                      {target.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
