type Block = {
  eyebrow: string
  title: string
  subtitle: string
  description: React.ReactNode
}

const blocks: Block[] = [
  {
    eyebrow: "VISION",
    title: "Everywhere",
    subtitle: "전 세계, 전 분야에 건강한 젊음의 영향력을 발휘하는 글로벌 재생 과학 기업",
    description: (
      <>
        더하나 리버스 에이징 센터는 첨단 재생 과학 전문 기업입니다. 단순한 수명 연장보다는 {"'건강한 젊음의 회복'"}에 집중하고,
        <br />
        보여지는 화려함보다는 {"'세포 수준의 본질적인 변화'"}를 중시하며 인류가 나이에 제한받지 않고 열정적인 삶을 영위하는 세상을 꿈꾸고 있습니다.
      </>
    ),
  },
  {
    eyebrow: "MISSION",
    title: "Deep & Fundamental",
    subtitle: "",
    description: (
      <>
        보다 깊게, 보다 근본적으로 생명의 시간을 재설계하는 솔루션을 만듭니다.
        <br />
        더하나 리버스 에이징 센터는 겉으로 드러나는 노화 현상 그 너머, 남들의 눈에는 쉽게 보이지 않는 세포와 생체 메커니즘의 이면을 탐구합니다.
        <br />
        우리는 재생 과학 기술을 통해 인간의 잠재력을 깨우고, 글로벌 시장에 역노화라는 새로운 가능성을 증명하기 위해 끊임없이 노력하고 있습니다.
      </>
    ),
  },
]

export function VisionMission() {
  return (
    <section
      aria-label="비전과 미션"
      className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 sm:gap-20 lg:gap-24">
        {blocks.map((block) => (
          <article key={block.eyebrow} className="flex flex-col items-center text-center">
            <p className="text-[13px] font-bold tracking-[0.1em] text-foreground sm:text-[15px]">
              {block.eyebrow}
            </p>
            <div aria-hidden="true" className="mt-3 h-px w-12 bg-primary sm:mt-4 sm:w-16" />

            <h3 className="mt-8 text-[32px] font-bold leading-tight text-primary sm:mt-12 sm:text-[44px] md:text-[56px] lg:mt-14 lg:text-[64px]">
              {block.title}
            </h3>

            {block.subtitle && (
              <p className="mt-6 text-balance text-[14px] font-semibold leading-relaxed text-foreground sm:mt-10 sm:text-[16px] md:text-[18px]">
                {block.subtitle}
              </p>
            )}

            <p className="mt-6 text-pretty text-[13px] leading-relaxed text-muted-foreground sm:mt-10 sm:text-sm">
              {block.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
