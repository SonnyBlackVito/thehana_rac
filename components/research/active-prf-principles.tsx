import Image from "next/image"
import { ArrowUp } from "lucide-react"

type ImageCard = {
  src: string
  alt: string
  label: string
}

const imageCards: ImageCard[] = [
  {
    src: "/research-platelet-illustration.jpg",
    alt: "비활성 혈소판과 활성 혈소판의 가상 일러스트",
    label: "비활성 혈소판 & 활성 혈소판(가상도)",
  },
  {
    src: "/research-platelet-sem.jpg",
    alt: "전자현미경으로 촬영한 비활성 및 활성 혈소판",
    label: "비활성 혈소판 & 활성 혈소판(전자현미경)",
  },
  {
    src: "/research-leukocyte-sem.jpg",
    alt: "전자현미경으로 촬영한 비활성 및 활성 백혈구",
    label: "비활성 백혈구 & 활성 백혈구(전자현미경)",
  },
]

type TableRow = {
  label: string
  prp: string
  activePrp: string
  activePrf: string
  highlight?: "activePrp" | "activePrf" | "both"
}

const tableRows: TableRow[] = [
  { label: "채혈량", prp: "10~30cc", activePrp: "10~30cc", activePrf: "10~30cc" },
  { label: "PRP 추출량", prp: "1~3cc", activePrp: "15cc", activePrf: "15cc" },
  { label: "항응고제", prp: "필요", activePrp: "필요", activePrf: "필요 없음", highlight: "activePrf" },
  {
    label: "활성화 방법",
    prp: "자연 응고(비방상), 화학적 활성화 방식\n-> CaCl₂, 트롬빈",
    activePrp: "물리직인 스트레스 활성화 방식\n-> Microtubule",
    activePrf: "물리직인 스트레스 활성화 방식\n-> Microtubule",
    highlight: "both",
  },
  { label: "성장인자 유지", prp: "1시간", activePrp: "7일 이상 활성화 세포 치료", activePrf: "10~14일 지속적으로 재생 치료" },
  { label: "성장인자 방출", prp: "자연 방출(느림)", activePrp: "즉각 방출(빠르고 강력)", activePrf: "즉각작이고 강함(고농도)", highlight: "both" },
  { label: "통증", prp: "아주 심함(ph4.5 강한 산성)", activePrp: "없음", activePrf: "없음" },
  { label: "치료 효과", prp: "서서히 효과 발현", activePrp: "빠른 조직 재생, 형혈 효과 우수", activePrf: "빠른 조직 재생, 형혈 효과 우수", highlight: "both" },
  { label: "섬유소", prp: "파괴", activePrp: "파괴", activePrf: "보존", highlight: "activePrf" },
  { label: "미토콘드리아 산화질소", prp: "미미", activePrp: "6배 정도 방출", activePrf: "6배 정도 방출", highlight: "both" },
  { label: "성장인자 활상화", prp: "미미", activePrp: "강력한 세포 활상화", activePrf: "강력안 세포 활상화", highlight: "both" },
  { label: "섬유소 네트워크", prp: "없음", activePrp: "없음", activePrf: "네트워킨 활성 혈소관, 백일구", highlight: "activePrf" },
  { label: "엑소좀 분비", prp: "없음", activePrp: "있음", activePrf: "있음", highlight: "both" },
]

export function ActivePrfPrinciples() {
  return (
    <section className="w-full py-10 sm:py-14 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 sm:px-6 sm:gap-10 md:gap-16 md:px-20">
        {/* Heading + description */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">
          <h2 className="text-[20px] font-bold leading-tight text-black sm:text-[24px] md:text-[30px]">
            Fundamental Principles of Active PRF
          </h2>
          <p className="text-[14px] font-normal leading-[1.6] text-[#3E454B] sm:text-[15px] md:text-[20px] md:leading-[30px]">
            현재 활성 PRF(Active PRF)에 의한 재생 치료 결과는 뛰어난 생체 적합성과 재생 효율로 인해 임상 현장에서 폭넓게
            활용되고 있습니다. 하지만 임상적 치료 수단으로서 이 기술을 온전히 활용하기 위해서는, 기존 재생 방식(PRP 등)과의
            근본적인 메커니즘 차이를 알고 이를 정밀하게 따져보는 전문적 식견이 필요합니다.
            <br />
            Active PRF를 다루는 임상 전문가는 혈액의 응고 기전과 피브린 네트워크(Fibrin Network) 형성 원리를 충분히
            이해하여, 성장인자의 방출 주기와 세포 증식에 영향을 미치는 생물학적 요인을 최적화해야 합니다. 특히 저항과
            리액턴스를 이해하듯, 섬유소의 밀도와 성장인자의 서방형 방출(Sustained Release) 개념을 이해하는 것이 치료의
            성패를 좌우합니다.
          </p>
        </div>

        {/* Comparison pills */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6">
            <div className="flex h-[40px] flex-1 items-center justify-center rounded-full bg-[#EBFFEC] px-3 sm:h-[46px] sm:px-6">
              <span className="text-center text-[13px] font-medium text-[#055239] sm:text-[16px] md:text-[20px]">
                일반 PRP
              </span>
            </div>
            <div className="flex h-[40px] shrink-0 items-center justify-center rounded-full bg-[#EBFFEC] px-3 sm:h-[46px] sm:px-6 md:w-[75px]">
              <span className="text-center text-[13px] font-medium text-[#055239] sm:text-[16px] md:text-[20px]">
                VS
              </span>
            </div>
            <div className="flex h-[40px] flex-[2] items-center justify-center rounded-full bg-[#EBFFEC] px-3 sm:h-[46px] sm:px-6">
              <span className="line-clamp-1 text-center text-[12px] font-medium text-[#055239] sm:text-[16px] md:text-[20px]">
                활성 PRP / PRF 비교
              </span>
            </div>
          </div>

          {/* Image cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-16">
            {imageCards.map((card) => (
              <div key={card.label} className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="relative aspect-[370/235] w-full overflow-hidden rounded-tl-[40px] rounded-br-[40px] border border-[#055239] bg-[#D9D9D9] sm:rounded-tl-[60px] sm:rounded-br-[60px]">
                  <Image src={card.src || "/placeholder.svg"} alt={card.alt} fill className="object-cover" />
                </div>
                <div className="flex items-center gap-1.5 self-start">
                  <ArrowUp className="h-4 w-4 text-[#055239] sm:h-5 sm:w-5" aria-hidden="true" />
                  <span className="text-[13px] font-normal text-[#055239] sm:text-[14px] md:text-[18px]">
                    {card.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#055239] text-white">
                <th className="px-4 py-3 text-[14px] font-semibold md:text-[16px]">항목</th>
                <th className="px-4 py-3 text-center text-[14px] font-semibold md:text-[16px]">PRP</th>
                <th className="px-4 py-3 text-center text-[14px] font-semibold md:text-[16px]">활성 PRP 정맥 주사</th>
                <th className="px-4 py-3 text-center text-[14px] font-semibold md:text-[16px]">활성 PRF 섬유소 치료</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => {
                const highlightActivePrp = row.highlight === "activePrp" || row.highlight === "both"
                const highlightActivePrf = row.highlight === "activePrf" || row.highlight === "both"
                return (
                  <tr key={row.label} className="border-b border-border">
                    <td className="px-4 py-3 text-[13px] font-medium text-[#3E454B] md:text-[15px]">{row.label}</td>
                    <td className="whitespace-pre-line px-4 py-3 text-center text-[13px] text-[#3E454B] md:text-[15px]">
                      {row.prp}
                    </td>
                    <td
                      className={`whitespace-pre-line px-4 py-3 text-center text-[13px] text-[#3E454B] md:text-[15px] ${
                        highlightActivePrp ? "bg-[#EBFFEC]" : ""
                      }`}
                    >
                      {row.activePrp}
                    </td>
                    <td
                      className={`whitespace-pre-line px-4 py-3 text-center text-[13px] text-[#3E454B] md:text-[15px] ${
                        highlightActivePrf ? "bg-[#EBFFEC]" : ""
                      }`}
                    >
                      {row.activePrf}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
