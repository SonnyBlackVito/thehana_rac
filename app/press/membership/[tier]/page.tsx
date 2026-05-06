import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2, ChevronRight, MessageCircle, Sparkles } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type Tier = "gold" | "platinum" | "black"

type MembershipTier = {
  label: string
  image: string
  imageAlt: string
  accent: string
  tint: string
  glow: string
  title: string
  tagline: string
  description: string[]
  points: string[]
}

const membershipData: Record<Tier, MembershipTier> = {
  gold: {
    label: "GOLD",
    image: "/vip-card-gold.png",
    imageAlt: "THEHANA VIP GOLD membership card",
    accent: "#A88468",
    tint: "linear-gradient(135deg, #FFF8ED 0%, #F6EFE5 50%, #FFFFFF 100%)",
    glow: "0 24px 70px rgba(168, 132, 104, 0.2)",
    title: "더하나 리버스에이징 멤버십 골드",
    tagline: "흐트러진 생체 리듬을 깨우는 리버스 에이징의 시작",
    description: [
      "특징: 줄기세포 전신 케어와 1주일간의 집중 미네랄 리커버리.",
      "추천: 리버스 에이징을 처음 경험하고 체내 밸런스를 빠르게 회복하고 싶은 분.",
      "THE HANA 멤버십은 고객님의 컨디션과 목표에 따라 커스터마이징됩니다. 상세 구성 및 특별 혜택은 1:1 컨설팅을 통해 확인하실 수 있습니다.",
    ],
    points: ["1주일 집중 미네랄 리커버리", "입문 고객을 위한 기본 밸런스 케어"],
  },
  platinum: {
    label: "PLATINUM",
    image: "/vip-card-platinum.png",
    imageAlt: "THEHANA VIP PLATINUM membership card",
    accent: "#8E9497",
    tint: "linear-gradient(135deg, #F8FAFA 0%, #ECEFF0 48%, #FFFFFF 100%)",
    glow: "0 24px 70px rgba(142, 148, 151, 0.22)",
    title: "더하나 리버스에이징 멤버십 플래티넘",
    tagline: "집중적인 영양 공급과 재생, 완성도 높은 변화를 경험",
    description: [
      "특징: 줄기세포 풀패키지에 NMN과 전용 재생크림을 더해 내외면의 시너지를 극대화한 주력 프로그램.",
      "추천: 바쁜 비즈니스 일상 속에서도 완벽한 컨디션 유지와 가시적인 노화 관리를 원하는 분.",
      "THE HANA 멤버십은 고객님의 컨디션과 목표에 따라 커스터마이징됩니다. 상세 구성 및 특별 혜택은 1:1 컨설팅을 통해 확인하실 수 있습니다.",
    ],
    points: ["NMN 및 전용 재생크림 구성", "내외면 시너지를 위한 주력 프로그램"],
  },
  black: {
    label: "BLACK",
    image: "/vip-card-black.png",
    imageAlt: "THEHANA VIP BLACK membership card",
    accent: "#211D2E",
    tint: "linear-gradient(135deg, #F5F4F7 0%, #EAE8EF 44%, #FFFFFF 100%)",
    glow: "0 24px 70px rgba(33, 29, 46, 0.24)",
    title: "더하나 리버스에이징 멤버십 블랙",
    tagline: "당신의 시간을 멈추는 최상위 웰니스 컨시어지",
    description: [
      "특징: 전신과 피부를 아우르는 풀패키지 솔루션. 4주간의 리워터 집중 케어로 세포가 살아나는 최적의 환경을 조성합니다.",
      "추천: 프라이빗한 환경에서 최상의 메디컬 케어와 정교한 피부 솔루션을 동시에 원하는 VVIP.",
      "THE HANA 멤버십은 고객님의 컨디션과 목표에 따라 커스터마이징됩니다. 상세 구성 및 특별 혜택은 1:1 컨설팅을 통해 확인하실 수 있습니다.",
    ],
    points: ["4주간 리워터 집중 케어", "VVIP 전용 웰니스 컨시어지"],
  },
}

const legalNotice =
  "본 서비스는 MSO 법인 (주)더하나코퍼레이션이 제공하는 'THEHANA 리버스 에이징 멤버십' 프로그램입니다. 멤버십에 포함된 모든 의료 서비스(줄기세포 시술 및 피부 시술 등)는 보건복지부 허가를 받은 첨단재생의료실시기관의 전문 의료진에 의해 시행됩니다. (주)더하나코퍼레이션은 의료 행위를 직접 수행하지 않으며, 멤버십 가입 고객을 위한 리버스에이징 관리, 건강기능식품 및 웰니스 솔루션 공급을 담당합니다. 본 결제 금액에는 MSO 법인의 서비스 비용과 협력 병원의 의료 용역비가 포함되어 있습니다."

export function generateStaticParams() {
  return Object.keys(membershipData).map((tier) => ({ tier }))
}

export default async function MembershipDetailPage({ params }: { params: Promise<{ tier: string }> }) {
  const { tier } = await params
  const product = membershipData[tier as Tier]

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 bg-[#FBFCFB]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-8 md:px-20 md:py-16">
          <nav className="flex items-center gap-2 text-sm font-medium text-[#8D8D8D]">
            <Link href="/" className="transition-colors hover:text-primary">
              홈
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href="/press" className="transition-colors hover:text-primary">
              멤버십
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-[#3E454B]">{product.label}</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-16">
            <div className="flex justify-center">
              <div
                className="relative flex aspect-square w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[28px] border border-[#E4E7E5] bg-white"
                style={{ background: product.tint, boxShadow: product.glow }}
              >
                <div className="absolute left-8 top-8 rounded-full bg-white/80 px-4 py-2 text-[12px] font-bold tracking-[0.18em] text-[#3E454B] shadow-sm">
                  THEHANA VIP
                </div>
                <div className="relative h-[300px] w-[200px] md:h-[424px] md:w-[281px]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 200px, 281px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-2">
              <span
                className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold tracking-[0.14em] text-white shadow-sm"
                style={{ backgroundColor: product.accent }}
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {product.label} MEMBERSHIP
              </span>

              <h1 className="mt-5 text-pretty text-[30px] font-bold leading-[1.25] text-[#3E454B] md:text-[44px]">
                {product.title}
              </h1>

              <p className="mt-4 text-pretty text-[20px] font-semibold leading-[1.45] text-primary md:text-[26px]">
                {product.tagline}
              </p>

              <div className="mt-7 space-y-3 rounded-[18px] border border-[#E4E7E5] bg-white p-5 text-[15px] font-medium leading-[1.75] text-[#3E454B] shadow-sm md:p-6 md:text-[17px]">
                {product.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <ul className="mt-5 grid gap-3 text-[14px] font-medium leading-[22px] text-[#3E454B] md:grid-cols-2 md:text-[15px]">
                {product.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 rounded-[12px] bg-white px-4 py-3 shadow-sm ring-1 ring-[#E4E7E5]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center">
                <Link
                  href="http://pf.kakao.com/_uFxbzb/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-[18px] font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  1:1 컨설팅 받기
                </Link>
                <p className="text-[14px] leading-[22px] text-[#6B6666] md:text-[15px]">
                  카카오 1:1 상담으로 연결됩니다.
                </p>
              </div>

              <p className="mt-8 border-t border-[#D9D9D9] pt-5 text-[12px] font-medium leading-[18px] text-[#7A7F83] md:text-[13px] md:leading-[20px]">
                {legalNotice}
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-[#E4E7E5] pt-8 md:mt-20">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <Link
                href="/press"
                className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-[#3E454B] transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                멤버십 목록으로
              </Link>

              <div className="flex flex-wrap gap-2">
                {(Object.keys(membershipData) as Tier[]).map((item) => {
                  const target = membershipData[item]
                  const isCurrent = item === tier

                  return (
                    <Link
                      key={item}
                      href={`/press/membership/${item}`}
                      className={`rounded-full border px-4 py-2 text-[13px] font-bold transition-colors ${
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
