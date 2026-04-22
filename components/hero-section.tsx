import Image from "next/image"

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative w-full overflow-hidden">
      <div className="relative h-[520px] w-full md:h-[640px]">
        <Image
          src="/hero-cells.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* soft overlay for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/40"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 text-center">
          <p className="mb-5 text-[15px] font-medium tracking-wide text-foreground md:text-base">
            더하나 리버스 에이징 센터
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-bold leading-tight text-primary md:text-5xl"
          >
            <span className="block">단 15분의 활성화</span>
            <span className="mt-2 block">
              당신의 혈액 속에 잠든 재생 에너지를 깨웁니다
            </span>
          </h1>
          <div className="mt-8 space-y-1 text-[15px] leading-relaxed text-foreground/80 md:text-base">
            <p>첨단 재생 과학 솔루션을 기반으로</p>
            <p>역노화를 실현하는 프리미엄 리버스 에이징 센터</p>
          </div>
        </div>
      </div>
    </section>
  )
}
