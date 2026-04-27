import { Locale } from "./translations"

export type ProductDetail = {
  id: string
  name: { ko: string; en: string; vi?: string }
  subtitle: { ko: string; en: string; vi?: string }
  description: { ko: string; en: string; vi?: string }
  price: { ko: string; en: string; vi?: string }
  image: string
  features: {
    title: { ko: string; en: string; vi?: string }
    items: { ko: string; en: string; vi?: string }[]
  }[]
}

export const productsData: ProductDetail[] = [
  {
    id: "activator",
    name: {
      ko: "ACT PRO 혈액 활성화기",
      en: "ACT PRO Blood Activator",
    },
    subtitle: {
      ko: "첨단 물리적 스트레스 활성화 기술",
      en: "Advanced Physical Stress Activation Technology",
    },
    description: {
      ko: "화학 첨가물 없이 물리적인 자극만을 사용하여 혈액 내 세포를 활성화하는 혁신적인 장비입니다. 정밀한 회전력과 온도를 제어하여 최적의 재생 에너지를 추출합니다.",
      en: "An innovative device that activates cells in the blood using only physical stimulation without chemical additives. It extracts optimal regenerative energy by controlling precise torque and temperature.",
    },
    price: {
      ko: "가격 문의",
      en: "Price on Inquiry",
    },
    image: "/home-product-activator.png",
    features: [
      {
        title: { ko: "주요 특징", en: "Key Features" },
        items: [
          { ko: "100% 자가 혈액 사용", en: "100% Autologous Blood Use" },
          { ko: "화학 활성화제 미사용", en: "No Chemical Activators" },
          { ko: "단 15분의 빠른 활성화", en: "Fast 15-minute Activation" },
          { ko: "고농도 성장인자 방출", en: "High Concentration Growth Factor Release" },
        ],
      },
    ],
  },
  {
    id: "revercell",
    name: {
      ko: "리버셀 주사 (Revercell)",
      en: "Revercell Injection",
    },
    subtitle: {
      ko: "세포 재생의 새로운 패러다임",
      en: "A New Paradigm in Cell Regeneration",
    },
    description: {
      ko: "활성화된 혈소판과 줄기세포를 활용하여 손상된 조직의 복구를 돕고 전신 활력을 증진시키는 프리미엄 재생 치료 솔루션입니다.",
      en: "A premium regenerative treatment solution that helps repair damaged tissues and promotes overall vitality using activated platelets and stem cells.",
    },
    price: {
      ko: "상담 후 결정",
      en: "Determined after Consultation",
    },
    image: "/home-product-bloodbag.png",
    features: [
      {
        title: { ko: "치료 효과", en: "Treatment Effects" },
        items: [
          { ko: "빠른 조직 재생", en: "Rapid Tissue Regeneration" },
          { ko: "항염증 및 통증 완화", en: "Anti-inflammatory & Pain Relief" },
          { ko: "피부 탄력 개선", en: "Skin Elasticity Improvement" },
          { ko: "면역력 강화", en: "Immune System Strengthening" },
        ],
      },
    ],
  },
  {
    id: "deepsea",
    name: {
      ko: "REWATER 심해수",
      en: "REWATER Deep Sea Water",
    },
    subtitle: {
      ko: "수심 1,000m의 순수 미네랄",
      en: "Pure Minerals from 1,000m Depth",
    },
    description: {
      ko: "해양심층 1km에서 채취한 청정수로, 인체의 체액과 유사한 미네랄 밸런스를 갖추고 있어 흡수가 빠르고 세포 활성화에 도움을 줍니다.",
      en: "Clean water collected from 1km deep in the ocean. It has a mineral balance similar to human body fluids, so it is quickly absorbed and helps with cell activation.",
    },
    price: {
      ko: "₩12,000 (350ml x 10ea)",
      en: "$10.00 (350ml x 10ea)",
    },
    image: "/home-product-rewater.png",
    features: [
      {
        title: { ko: "영양 정보", en: "Nutritional Info" },
        items: [
          { ko: "70여 종의 천연 이온 미네랄", en: "70+ Natural Ionic Minerals" },
          { ko: "고농도 마그네슘 함유", en: "High Magnesium Content" },
          { ko: "무색, 무취, 무미의 순수함", en: "Colorless, Odorless, Tasteless Purity" },
          { ko: "세포 수분 공급 최적화", en: "Optimized Cell Hydration" },
        ],
      },
    ],
  },
  {
    id: "activator-mini",
    name: {
      ko: "ACT PRO MINI 혈액 활성화기",
      en: "ACT PRO MINI Blood Activator",
    },
    subtitle: {
      ko: "휴대성을 극대화한 콤팩트 모델",
      en: "Compact Model with Minimized Size",
    },
    description: {
      ko: "ACT PRO의 핵심 기술을 그대로 담으면서도 크기를 줄여 공간 효율성을 높인 모델입니다. 소규모 클리닉이나 이동식 진료 환경에 최적화되어 있습니다.",
      en: "A model that incorporates the core technology of ACT PRO while reducing the size to increase space efficiency. It is optimized for small clinics or mobile medical environments.",
    },
    price: {
      ko: "가격 문의",
      en: "Price on Inquiry",
    },
    image: "/grid-activator-mini.png",
    features: [
      {
        title: { ko: "장점", en: "Advantages" },
        items: [
          { ko: "콤팩트한 디자인", en: "Compact Design" },
          { ko: "직관적인 인터페이스", en: "Intuitive Interface" },
          { ko: "저소음 및 저진동", en: "Low Noise & Vibration" },
          { ko: "동일한 활성화 성능", en: "Same Activation Performance" },
        ],
      },
    ],
  },
  {
    id: "separator",
    name: {
      ko: "혈액 분리 장치 (Separator)",
      en: "Blood Separator",
    },
    subtitle: {
      ko: "정밀한 원심 분리 솔루션",
      en: "Precise Centrifugal Separation Solution",
    },
    description: {
      ko: "혈액 성분을 정밀하게 분리하여 고순도의 PRP 및 피브린을 추출하기 위한 전용 장치입니다. ACT PRO 활성화기와 함께 사용 시 최상의 효과를 보장합니다.",
      en: "A dedicated device for precisely separating blood components to extract high-purity PRP and fibrin. Guarantees the best results when used with the ACT PRO activator.",
    },
    price: {
      ko: "가격 문의",
      en: "Price on Inquiry",
    },
    image: "/grid-blood-separator.png",
    features: [
      {
        title: { ko: "기술 사양", en: "Technical Specs" },
        items: [
          { ko: "고속 정밀 원심 분리", en: "High-speed Precise Centrifugation" },
          { ko: "안전 잠금 장치 탑재", en: "Safety Lock Included" },
          { ko: "다양한 튜브 호환성", en: "Compatibility with Various Tubes" },
          { ko: "디지털 제어 시스템", en: "Digital Control System" },
        ],
      },
    ],
  },
]
