const features = [
  {
    title: "심해 1km 청정성",
    description: "세계 최고 수준의 청정 수심에서 취수하여 불순물이 전혀 없는 순수함을 자랑합니다.",
  },
  {
    title: "풍부한 이온 미네랄",
    description: "어머니의 양수와 유사한 미네랄 밸런스를 갖춘 70여 종의 이온 미네랄이 체내에 빠르게 흡수됩니다.",
  },
  {
    title: "무균 제조 시스템",
    description: "프랑스 Sidel사의 전자동 라인을 통해 미세플라스틱 걱정 없는 안전한 공정으로 생산됩니다.",
  },
  {
    title: "정부 인증 면허",
    description: "해양심해수 개발 관리법 준수 및 IBWA 103개 항목 적합 판정을 받은 검증된 프리미엄 워터입니다.",
  },
]

export function DeepSeaTechSection() {
  return (
    <section className="bg-[#F9F9F9] pt-8">
      {/* Title */}
      <div className="px-6 md:px-20">
        <div className="mx-auto w-full max-w-[1280px] pb-7 pt-4">
          <h2 className="text-[28px] font-semibold leading-[40px] text-[#3E454B] md:text-[36px]">심해수 기술</h2>
          <div className="mt-2 h-[2px] w-[90px] bg-[#055239]" aria-hidden="true" />
        </div>
      </div>

      {/* Features list */}
      <div className="px-6 md:px-20">
        <div className="mx-auto w-full max-w-[1280px] pb-14 pt-6">
          <ul className="flex flex-col gap-7">
            {features.map((item) => (
              <li
                key={item.title}
                className="text-[16px] font-semibold leading-[30px] text-[#3E454B] md:text-[20px]"
              >
                <span className="font-bold text-foreground">{item.title}:</span>{" "}
                <span className="font-medium">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
