import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, CheckCircle2 } from "lucide-react"

const features = [
  "해양 1km 청정 수심 취수",
  "70여 종의 이온 미네랄 함유",
  "고농도 마그네슘 (50~71mg/L)",
  "소프트 파우치로 가볍고 편리",
]

export default function PouchPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1280px] px-4 md:px-20 pt-8">
          <nav className="flex items-center gap-2 text-sm text-[#3E454B]/60">
            <Link href="/" className="hover:text-[#055239] transition-colors">홈</Link>
            <span>›</span>
            <Link href="/products" className="hover:text-[#055239] transition-colors">제품정보</Link>
            <span>›</span>
            <Link href="/products#deepsea" className="hover:text-[#055239] transition-colors">심해수</Link>
            <span>›</span>
            <span className="text-[#055239] font-medium">리워터 파우치</span>
          </nav>
        </div>

        {/* Hero section */}
        <div className="mx-auto max-w-[1280px] px-4 md:px-20 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[3/4] drop-shadow-2xl">
                <Image
                  src="/rewater-pouch.png"
                  alt="REWATER 파우치 350ml"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-block rounded-full bg-[#EBFFEC] px-4 py-1.5 text-xs font-semibold text-[#055239] mb-4">
                  심해수 · Deep Sea Water
                </span>
                <h1 className="text-4xl font-bold text-[#3E454B] leading-tight md:text-5xl">
                  리워터 파우치
                </h1>
                <p className="mt-2 text-lg font-medium text-[#055239]">Re:water Pouch · 350ml</p>
              </div>

              <p className="text-[#3E454B]/80 text-base leading-relaxed">
                부드러운 소프트 파우치 형태로 가볍고 휴대가 간편한 리워터. 미네랄이 풍부한 심해수를 어디서든 신선하게 즐길 수 있습니다.
              </p>

              <ul className="space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#3E454B]">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#055239]" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  className="flex-1 rounded-full bg-[#055239] py-4 text-base font-semibold text-white transition-all hover:bg-[#044030] hover:shadow-lg"
                >
                  구매 문의
                </button>
                <Link
                  href="/products#deepsea"
                  className="flex items-center gap-1 rounded-full border border-[#055239]/30 px-6 py-4 text-sm font-medium text-[#055239] transition-all hover:bg-[#EBFFEC]"
                >
                  <ChevronLeft className="h-4 w-4" />
                  목록
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Variant navigation */}
        <div className="border-t border-border py-12 md:py-16">
          <div className="mx-auto max-w-[1280px] px-4 md:px-20">
            <h2 className="text-center text-xl font-bold text-[#3E454B] mb-10">다른 리워터 제품 보기</h2>
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              {[
                { src: "/rewater-bottle.png", name: "리워터 보틀", sub: "500ml", href: "/products/deepsea/bottle" },
                { src: "/rewater-can.png", name: "리워터 캔", sub: "190ml", href: "/products/deepsea/can" },
              ].map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-[#055239]/40 hover:shadow-md"
                >
                  <div className="relative aspect-[3/4] w-full max-w-[120px]">
                    <Image src={v.src} alt={v.name} fill className="object-contain" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#3E454B] group-hover:text-[#055239] transition-colors">{v.name}</p>
                    <p className="text-xs text-[#055239]/60 mt-0.5">{v.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
