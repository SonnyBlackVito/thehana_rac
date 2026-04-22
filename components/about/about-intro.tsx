import Image from "next/image"

export function AboutIntro() {
  return (
    <section aria-labelledby="about-intro-heading" className="px-6 pt-16 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[900px]">
            <Image
              src="/thehana-mosaic.jpg"
              alt="수백 명의 인물 사진으로 구성된 THEHANA REVERSE AGING CENTER 로고"
              width={1200}
              height={700}
              priority
              className="h-auto w-full"
            />
          </div>

          <h2
            id="about-intro-heading"
            className="mt-10 text-balance text-center text-[26px] font-bold leading-tight text-foreground md:text-[32px] lg:text-[36px]"
          >
            Worldwide Leader in Reverse Aging Technology
          </h2>

          <p className="mt-10 text-pretty text-center text-[15px] leading-relaxed text-foreground md:text-base">
            더하나 리버스 에이징 센터(THE HANA R.A.C)는
            <br />
            {"'과학을 통한 시간의 재설계'를 실현하며"}
            <br />
            역노화 솔루션의 표준으로 신뢰받는 글로벌 재생 과학 전문 기업입니다.
          </p>

          <div aria-hidden="true" className="mt-10 h-px w-24 bg-primary" />

          <div className="mt-10 max-w-[1000px] text-pretty text-center text-[13px] leading-relaxed text-muted-foreground md:text-sm">
            <p>
              {
                '전 세계 웰니스 시장에서 혁신적인 솔루션으로 주목받는 "THE HANA R.A.C(더하나 리버스 에이징 센터)"는 독자적인 첨단 재생 과학을 기반으로 한 프리미엄 역노화 전문 브랜드입니다.'
              }
            </p>
            <p className="mt-6">
              베트남, 중국, 싱가포르를 비롯한 주요 글로벌 네트워크를 기반으로 전 세계에 차별화된 제품과 서비스를 제공하고 있습니다.
              <br />
              의료인을 위한 전문 의료기기부터 고기능성 소모품까지 아우르는 통합 솔루션을 통해, 매년 가파른 성장세를 기록하며 역노화 산업의 글로벌 리더로 도약하고 있습니다..
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
