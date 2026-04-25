import Link from "next/link"
import { Youtube, Instagram, Store } from "lucide-react"

const branches = [
  { label: "인바디 본사", address: "06106 서울시 강남구 언주로 625 인바디빌딩" },
  { label: "인바디 공장", address: "31025 충청남도 천안시 서북구 입장면 흑암길 15" },
  { label: "인바디 벤처센터", address: "06313 서울시 강남구 논현로2길 54 인바디벤처센터" },
  { label: "인바디 양재센터", address: "06779 서울특별시 서초구 동산로 1 5층 인바디양재센터" },
  { label: "인바디 2공장", address: "31026 충청남도 천안시 서북구 입장면 연곡길 330" },
]

function FooterWordmark() {
  return (
    <div className="flex flex-col leading-none text-background">
      <span className="font-serif text-[22px] font-light tracking-[0.08em]">THE HANA</span>
      <span className="font-serif text-[22px] font-light tracking-[0.28em]">R.A.C</span>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="w-full bg-brand-footer text-background">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          {/* Left column: logo + company info */}
          <div>
            <FooterWordmark />

            <div className="mt-6 space-y-2 text-[13px] leading-relaxed text-background/80 sm:mt-10 sm:space-y-3 sm:text-sm">
              <p className="text-[14px] font-semibold text-background sm:text-[15px]">㈜세일즈코어</p>
              <p className="flex flex-wrap gap-x-4 gap-y-1">
                <span>대표이사 : 한재선</span>
                <span>사업자등록번호 : 361-81-00506</span>
              </p>
              <p>TEL : 010-8190-1627</p>
            </div>
          </div>

          {/* Right column: branch addresses */}
          <div>
            <dl className="space-y-3 text-[13px] leading-relaxed text-background/80 sm:space-y-2 sm:text-sm">
              {branches.map((branch) => (
                <div
                  key={branch.label}
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-6"
                >
                  <dt className="text-background sm:w-28 sm:shrink-0">{branch.label}</dt>
                  <dd className="flex-1">{branch.address}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-6 border-t border-background/10 pt-6 sm:mt-14 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-background/60 sm:gap-x-8">
            <Link
              href="#"
              className="text-[13px] text-background hover:text-primary-foreground sm:text-sm"
            >
              개인정보처리방침
            </Link>
            <Link
              href="#"
              className="text-[13px] text-background/80 hover:text-background sm:text-sm"
            >
              이메일무단수집거부
            </Link>
          </div>

          <nav
            aria-label="소셜 및 스토어 링크"
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="#"
              aria-label="인바디스토어"
              className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-opacity hover:opacity-90"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Store className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span>인바디스토어</span>
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000] text-background transition-opacity hover:opacity-90"
            >
              <Youtube className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-[#b90000] via-[#ff0000] to-[#6bafff] text-background transition-opacity hover:opacity-90"
            >
              <Instagram className="h-4 w-4" strokeWidth={2} />
            </Link>
          </nav>
        </div>

        <p className="mt-5 text-[11px] leading-relaxed text-background/50 sm:mt-6 sm:text-xs">
          Copyright© 2026 by Salescore Co., Ltd. All rights reserved
        </p>
      </div>
    </footer>
  )
}
