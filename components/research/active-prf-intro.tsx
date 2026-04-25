import Image from "next/image"

export function ActivePrfIntro() {
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/research-active-prf-bg.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-20">
        <div className="flex flex-col gap-8 md:gap-16">
          <h2 className="text-[24px] font-bold leading-tight text-white md:text-[30px]">What is Active PRF?</h2>
          <p className="text-[15px] font-normal leading-[1.6] text-white md:text-[20px] md:leading-[30px]">
            활성 피브린 분석법(Active Platelet-Rich Fibrin Analysis)은 인체 자가 혈액 내의 성장 인자와 섬유소 네트워크를
            정량적, 질적으로 극대화하여 손상된 조직을 복원하는 재생 의학 기술입니다. THEHANA R.A.C는 이 Active PRF
            메커니즘을 활용하여 기존 재생 치료의 패러다임을 바꿉니다. 1990년대 이후 등장한 기존 2세대 PRF는 채혈 후 즉시
            굳어버리는 물리적 특성 때문에 겔(Gel)이나 막(Membrane) 형태로만 국한되어 사용되었습니다. 이로 인해 정교한
            주사가 필요한 부위에는 적용이 어려웠고, 치료 범위가 한정적이라는 임계점에 부딪혔습니다. 하지만 이러한 &apos;즉시
            응고&apos;의 한계를 극복하고, 항응고제 없이도 액상 상태를 유지하여 주사가 가능하게 만드는 액상화 기술과 물리적
            활성화(Physical Activation) 기술을 개발하였습니다. 이를 통해 현재는 화학적 변수를 배제한 채 자가 혈액의
            에너지만으로 정밀하게 환부를 재생하는 혁신적 플랫폼을 완성했습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
