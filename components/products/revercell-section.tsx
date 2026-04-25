import Image from "next/image"

export function RevercellSection() {
  return (
    <section
      aria-labelledby="revercell-title"
      className="relative w-full overflow-hidden"
    >
      {/* Background image with 50% white overlay to match Figma */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/revercell-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/50" aria-hidden="true" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 pt-4 pb-10 md:px-10 md:pb-16">
        {/* Section header: left-aligned title + short green accent bar */}
        <div className="mb-12 md:mb-16 animate-fade-in-up">
          <h2
            id="revercell-title"
            className="text-[28px] font-semibold leading-[1.1] text-[#3E454B] md:text-[36px] md:leading-[40px]"
          >
            리버셀 주사
          </h2>
          <div className="mt-4 h-[3px] w-16 bg-primary" aria-hidden="true" />
        </div>

        {/* Centered intro block */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
          <p className="text-[20px] font-bold leading-[1.4] text-[#3E454B] md:text-[28px] md:leading-[40px] animate-fade-in-up delay-100">
            리버셀 주사 (Revercell)
          </p>
          <div className="h-px w-16 bg-primary animate-fade-in-up delay-200" aria-hidden="true" />
          <h3 className="text-balance text-[22px] font-medium leading-[1.4] text-primary md:text-[30px] md:leading-[48px] animate-fade-in-up delay-300">
            줄기세포의 재생 및 분화 메커니즘
          </h3>
          <p className="text-pretty text-[14px] leading-[1.9] text-foreground/80 md:text-[15px] md:leading-[2] animate-fade-in-up delay-400">
            신체 복구의 핵심, 재생 에너지 줄기세포는 인체 내 손상된 세포와 조직을 원래의 기능으로 회복시키는 강력한 재생
            세포입니다. 신체를 구성하는 다양한 조직으로 분화하는 특성과 무한히 복제되는 자가 증식 능력을 통해 근본적인
            치유를 이끌어냅니다. 혈관 신생과 전신 순환 리버셀의 활성화 기술과 결합된 줄기세포를 정맥으로 투여하면, 혈관을
            타고 전신을 순환하며 재생이 시급한 곳에 집중적으로 타겟팅됩니다. 특히 혈액 공급이 원활하지 않은 부위에 새로운
            혈관을 신생하여 심혈관계 및 미세혈관 합병증 증세를 획기적으로 완화하고 신체 전반의 활력을 되찾아줍니다.
          </p>
        </div>

        {/* Two treatment photos side by side */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-8">
          <div className="relative aspect-[3/4] w-full overflow-hidden animate-fade-in-up delay-500">
            <Image
              src="/revercell-iv-drip.png"
              alt="리버셀 주사 정맥 투여 치료 장면"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden animate-fade-in-up delay-500">
            <Image
              src="/revercell-face-injection.png"
              alt="리버셀 주사 미용 시술 장면"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
