import Image from "next/image"

type ClinicalCase = {
  title: string
  highlight: string
  description: string
  image: string
  imageAlt: string
  imageAspect: string
}

const CASES: ClinicalCase[] = [
  {
    title: "피부 재생",
    highlight: "난치성 아토피, 건선, 가려움증 등 평생 안고 가야 했던 질환의 획기적 개선 사례",
    description:
      "병력이 오래되지 않은 난치성 아토피, 건선, 가려움증 같은 피부 질환은 2주 간격으로 2~3회 활성 섬유소를 피하에 주사하면 완치와 같은 빠른 치료 효과를 볼 수 있습니다.",
    image: "/clinical-skin.png",
    imageAlt: "피부 재생 치료 전후 비교 사진",
    imageAspect: "aspect-[16/9]",
  },
  {
    title: "탈모 재생",
    highlight: "휴지기 모낭을 성장기로 전환시켜 모발 밀도와 성장률을 향상시킨 사례",
    description:
      "탈모 치료의 경우 30cc 채혈하여 약 5cc의 조혈모 미토셀 섬유소 주사를 만들어 Deep dermis에 가까운 피하지방층에 부위당 0.5~1cc 주사와 3주 간격으로 치료 PRF(microneedling + Actcellregen)합니다.",
    image: "/clinical-hair.png",
    imageAlt: "탈모 재생 치료 전후 비교 사진",
    imageAspect: "aspect-[16/9]",
  },
  {
    title: "당뇨성 족부 궤양",
    highlight: "절단 위기의 궤양 부위에 활성 PRF를 적용하여 새살이 돋아나고 상처가 폐쇄된 극적인 사례",
    description:
      "병력이 오래되지 않은 난치성 아토피, 건선, 가려움증 같은 피부 질환은 2주 간격으로 2~3회 활성 섬유소를 피하에 주사하면 완치와 같은 빠른 치료 효과를 볼 수 있습니다.",
    image: "/clinical-ulcer.png",
    imageAlt: "당뇨성 족부 궤양 치료 진행 사진",
    imageAspect: "aspect-[16/7]",
  },
  {
    title: "대상포진 및 화상 흉터",
    highlight: "기존 치료보다 확연히 빠른 개선 속도를 보이며 피부 병변이 회복된 사례",
    description:
      "활성 PRF 시행하였는데, dexa 치료의 피부 병변 호전보다 활성 PRF 치료가 확연한 개선 속도가 있는 효과가 있습니다.",
    image: "/clinical-shingles.png",
    imageAlt: "대상포진 및 화상 흉터 치료 진행 사진",
    imageAspect: "aspect-[16/7]",
  },
]

export function ClinicalCasesSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/research-clinical-bg.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <h2 className="text-3xl font-bold text-[#3E454B] md:text-[32px]">임상사례</h2>

        <div className="mt-10 flex flex-col gap-8">
          {CASES.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white/95 p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)] backdrop-blur-sm md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
                <div className="flex flex-col gap-6">
                  <h3 className="text-lg font-bold leading-snug text-[#3E454B] md:text-[20px] md:leading-[1.5]">
                    <span className="text-[#3E454B]">{item.title}</span>
                    <span className="text-[#3E454B]"> : </span>
                    <span className="font-bold text-[#3E454B]">{item.highlight}</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280] md:text-[15px] md:leading-[1.7]">
                    {item.description}
                  </p>
                </div>

                <div className={`relative w-full overflow-hidden rounded-lg ${item.imageAspect}`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
