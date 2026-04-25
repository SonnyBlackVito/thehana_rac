import Image from "next/image"

const products = [
  {
    src: "/rewater-pouch.png",
    alt: "리워터 심해 1km 청정수 파우치 350ml",
  },
  {
    src: "/rewater-bottle.png",
    alt: "리워터 심해 1km 청정수 페트병",
  },
  {
    src: "/rewater-can.png",
    alt: "리워터 심해 1km 청정수 캔 190ml",
  },
]

export function DeepSeaSection() {
  return (
    <section className="w-full py-10 md:py-16">
      {/* Title with green accent */}
      <div className="px-4 md:px-20">
        <h2 className="text-3xl font-semibold leading-10 text-[#3E454B] md:text-4xl">심해수</h2>
        <div className="mt-4 h-0.5 w-20 bg-[#055239]" />
      </div>

      {/* Centered subtitle */}
      <div className="mt-16 flex flex-col items-center gap-8 px-4 md:mt-24">
        <h3 className="text-center text-2xl font-bold leading-10 text-[#3E454B] md:text-[28px]">
          심해수 {"–"} 리워터(Re:water)
        </h3>
        <div className="h-0.5 w-24 bg-[#055239]" />
      </div>

      {/* Green headline + description */}
      <div className="mx-auto mt-10 flex max-w-[1280px] flex-col items-center gap-10 px-4 md:px-20">
        <p className="text-pretty text-center text-xl font-medium leading-[1.6] text-[#055239] md:text-[30px]">
          해양심층 1km 청정수로 깨우는 신체 재생의 근본
        </p>

        <p className="text-pretty text-center text-base leading-[1.6] text-[#3E454B] md:text-xl md:leading-[30px]">
          세계 최고 수준의 해양 1km 청정 수심에서 취수하여 불순물이 전혀 없는 순수함을 자랑합니다. 어머니의 양수와
          유사한 미네랄 밸런스를 갖춘 70여 종의 이온 미네랄이 체내에 빠르게 흡수됩니다. 신체 복구의 토대, 미네랄
          밸런스줄기세포가 손상된 세포와 조직을 회복시키기 위해서는 체액의 미네랄 밸런스가 필수적입니다. 리워터에 함유된
          고농도의 마그네슘(50~71mg/L)과 칼슘(16~25mg/L) 은 줄기세포가 신체 각 조직으로 분화하고 자가 증식하는 과정에서
          핵심적인 촉매제 역할을 하며 근본적인 재생을 지원합니다. 리버셀의 활성화 기술로 투여된 줄기세포가 혈관을 타고
          전신에 도달하기 위해서는 혈액의 점도와 순환 능력이 중요합니다. 리워터는 원활한 신진대사와 혈행 밸런스 케어를
          통해 새로운 혈관이 신생되는 과정을 돕습니다. 특히 미세혈관까지 도달하는 수분 공급 능력을 통해 심혈관계 합병증
          완화와 전신 활력 증진에 기여합니다.
        </p>
      </div>

      {/* Three product images */}
      <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-1 gap-10 px-4 sm:grid-cols-3 md:mt-20 md:px-20">
        {products.map((product) => (
          <div key={product.src} className="flex items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[320px]">
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 320px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
