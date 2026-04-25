import Image from "next/image"

const stages = [
  "비활성 단계 (Resting)",
  "초기 활성화 (Early Activation)",
  "완전 활성화 (Fully Activated)",
  "확산 단계 (Spreading)",
]

export function GrowthFactorSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-20 md:py-24">
        {/* Title + description */}
        <div className="flex flex-col gap-6">
          <h2 className="text-pretty text-[22px] font-bold leading-tight text-foreground md:text-[30px]">
            기존 PRP 대비 6배 높은 성장인자 방출률
          </h2>
          <p className="text-pretty text-[15px] leading-relaxed text-foreground md:text-[20px] md:leading-[30px]">
            &quot;모세관 스트레스는 혈액에게 주는 &apos;기분 좋은 자극&apos;입니다. 마치 운동을 통해 근육을 깨우듯,
            혈액에 물리적 자극을 주어 스스로 재생 인자를 방출하게 만드는 세계 유일의 기술입니다.
          </p>
        </div>

        {/* SEM micrographs row */}
        <div className="mt-12 md:mt-16">
          <div className="relative w-full">
            <Image
              src="/research-platelet-stages.png"
              alt="혈소판 활성화 단계 전자현미경 이미지"
              width={1252}
              height={304}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stages.map((label) => (
              <p key={label} className="text-center text-[13px] font-medium text-foreground md:text-[20px]">
                {label}
              </p>
            ))}
          </div>
        </div>

        {/* Green pill banner */}
        <div className="mt-10 flex w-full items-center justify-center rounded-full bg-[#A0DDC9] px-6 py-3 md:mt-12">
          <p className="text-center text-[15px] font-medium leading-6 text-[#055239] md:text-[20px]">
            조혈모 미토셀 섬유소 주사를 이용한 재생치료
          </p>
        </div>

        {/* Specialties grid (rendered as a single image asset) */}
        <div className="mt-10 md:mt-14">
          <Image
            src="/research-specialties.png"
            alt="활성 PRF가 적용되는 11개 진료과 목록 - 치과 및 치주과, 정형외과, 정형외과 및 재활, 소아과, 성형외과, 통증관리, 피부과, 신경과, 산부인과, 안과, 내분비과"
            width={1280}
            height={620}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
