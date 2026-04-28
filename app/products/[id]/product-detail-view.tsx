"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { notFound } from "next/navigation"
import {
  ChevronRight,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  FlaskConical,
  Beaker,
  Droplets,
  Activity,
  Zap,
  Award,
} from "lucide-react"

import { useI18n } from "@/lib/i18n/context"

type Bilingual = { ko: string; en: string }
type BilingualList = { ko: string[]; en: string[] }

type Feature = {
  icon: keyof typeof FEATURE_ICONS
  title: Bilingual
  desc: Bilingual
}

type Spec = {
  label: Bilingual
  value: Bilingual
}

type Product = {
  image: string
  gallery?: string[]
  category: Bilingual
  badge?: Bilingual
  title: Bilingual
  tagline: Bilingual
  description: Bilingual
  highlights: BilingualList
  features: Feature[]
  specs: Spec[]
  includes: BilingualList
  price: string
  originalPrice?: string
}

const FEATURE_ICONS = {
  sparkles: Sparkles,
  flask: FlaskConical,
  beaker: Beaker,
  droplets: Droplets,
  activity: Activity,
  zap: Zap,
  award: Award,
  shield: ShieldCheck,
}

const productsData: Record<string, Product> = {
  activator: {
    image: "/home-product-activator.png",
    category: { ko: "의료 장비", en: "Medical Equipment" },
    badge: { ko: "BEST SELLER", en: "BEST SELLER" },
    title: { ko: "혈액 활성화기", en: "Blood Activator" },
    tagline: {
      ko: "ACT PRO PRP 활성화 장비",
      en: "ACT PRO PRP Activation Device",
    },
    description: {
      ko: "화학 첨가물 없이, 오직 내 혈액으로 완성하는 자가 치유의 혁신. 최첨단 정밀도로 완벽한 활성 PRF를 추출합니다.",
      en: "Without chemical additives, completed only with my blood, innovation in self-healing. Extracts perfect Active PRF with cutting-edge precision.",
    },
    highlights: {
      ko: [
        "단 15분 만에 활성 PRF 추출 완료",
        "화학 첨가물 0%, 100% 자가 혈액",
        "기존 PRP 대비 6배 높은 성장인자 방출률",
        "10~14일 지속되는 재생 치료 효과",
      ],
      en: [
        "Extracts Active PRF in just 15 minutes",
        "0% chemical additives, 100% autologous blood",
        "6x higher growth factor release vs conventional PRP",
        "Regenerative treatment effect lasting 10–14 days",
      ],
    },
    features: [
      {
        icon: "sparkles",
        title: { ko: "독보적 정밀도", en: "Unparalleled Precision" },
        desc: {
          ko: "산업 표준을 새로 정의하는 정밀 활성화 기술",
          en: "Precision activation technology redefining the industry standard",
        },
      },
      {
        icon: "flask",
        title: { ko: "물리적 활성화", en: "Physical Activation" },
        desc: {
          ko: "Microtubule 방식으로 화학 첨가물 없이 추출",
          en: "Extracted via Microtubule method without chemical additives",
        },
      },
      {
        icon: "zap",
        title: { ko: "즉각적인 효과", en: "Immediate Effect" },
        desc: {
          ko: "성장인자가 즉시 방출되어 빠른 조직 재생",
          en: "Growth factors release immediately for rapid tissue regeneration",
        },
      },
      {
        icon: "shield",
        title: { ko: "안전성 보장", en: "Guaranteed Safety" },
        desc: {
          ko: "통증 없이 안전한 자가 혈액 기반 치료",
          en: "Painless, safe treatment based on autologous blood",
        },
      },
    ],
    specs: [
      { label: { ko: "모델명", en: "Model" }, value: { ko: "ACT PRO", en: "ACT PRO" } },
      { label: { ko: "처리 시간", en: "Process Time" }, value: { ko: "약 15분", en: "About 15 min" } },
      { label: { ko: "PRF 추출량", en: "PRF Extraction" }, value: { ko: "최대 15cc", en: "Up to 15cc" } },
      { label: { ko: "보증 기간", en: "Warranty" }, value: { ko: "2년", en: "2 Years" } },
      { label: { ko: "원산지", en: "Origin" }, value: { ko: "대한민국", en: "Republic of Korea" } },
    ],
    includes: {
      ko: ["ACT PRO 본체 1대", "전용 튜브 키트 (50개입)", "사용 설명서", "전원 케이블", "1년 정기 점검 서비스"],
      en: ["ACT PRO main unit (1 ea)", "Dedicated tube kit (50 pcs)", "User manual", "Power cable", "1-year regular maintenance"],
    },
    price: "₩ 1,500,000",
    originalPrice: "₩ 1,800,000",
  },
  mini: {
    image: "/grid-activator-mini.png",
    category: { ko: "의료 장비", en: "Medical Equipment" },
    badge: { ko: "NEW", en: "NEW" },
    title: { ko: "혈액 활성화기 MINI", en: "Blood Activator MINI" },
    tagline: {
      ko: "컴팩트 사이즈, 전문가용 성능",
      en: "Compact size, professional-grade performance",
    },
    description: {
      ko: "컴팩트한 사이즈로 공간 활용성을 높인 소형 혈액 활성화기. 개인 병원 및 소규모 클리닉에 최적화되었습니다.",
      en: "Compact sized small blood activator with high space efficiency. Optimized for personal hospitals and small clinics.",
    },
    highlights: {
      ko: [
        "기존 모델 대비 40% 작은 풋프린트",
        "동일한 정밀도와 성능 유지",
        "조용한 동작 (45dB 이하)",
        "터치스크린 직관적 인터페이스",
      ],
      en: [
        "40% smaller footprint than the standard model",
        "Maintains the same precision and performance",
        "Quiet operation (under 45dB)",
        "Intuitive touchscreen interface",
      ],
    },
    features: [
      {
        icon: "sparkles",
        title: { ko: "공간 효율", en: "Space Efficient" },
        desc: { ko: "좁은 공간에도 부담 없이 설치", en: "Easy installation in tight spaces" },
      },
      {
        icon: "zap",
        title: { ko: "빠른 처리", en: "Fast Processing" },
        desc: { ko: "15분 내 완벽한 활성 PRF 추출", en: "Perfect Active PRF extraction within 15 min" },
      },
      {
        icon: "shield",
        title: { ko: "안정성", en: "Reliability" },
        desc: { ko: "장시간 사용에도 일관된 결과", en: "Consistent results during long-term use" },
      },
      {
        icon: "award",
        title: { ko: "임상 검증", en: "Clinically Verified" },
        desc: { ko: "다수의 임상 사례로 효능 입증", en: "Efficacy proven by numerous clinical cases" },
      },
    ],
    specs: [
      { label: { ko: "모델명", en: "Model" }, value: { ko: "ACT MINI", en: "ACT MINI" } },
      { label: { ko: "크기", en: "Dimensions" }, value: { ko: "240 × 220 × 180 mm", en: "240 × 220 × 180 mm" } },
      { label: { ko: "무게", en: "Weight" }, value: { ko: "3.2 kg", en: "3.2 kg" } },
      { label: { ko: "보증 기간", en: "Warranty" }, value: { ko: "2년", en: "2 Years" } },
    ],
    includes: {
      ko: ["MINI 본체 1대", "전용 튜브 키트 (30개입)", "사용 설명서", "전원 어댑터"],
      en: ["MINI main unit (1 ea)", "Dedicated tube kit (30 pcs)", "User manual", "Power adapter"],
    },
    price: "₩ 950,000",
    originalPrice: "₩ 1,150,000",
  },
  separator: {
    image: "/grid-blood-separator.png",
    category: { ko: "의료 장비", en: "Medical Equipment" },
    title: { ko: "혈액 분리 장치", en: "Blood Separator" },
    tagline: {
      ko: "고품질 PRP/PRF 분리 전용 장비",
      en: "Dedicated equipment for high-quality PRP/PRF separation",
    },
    description: {
      ko: "신속하고 정확하게 혈액을 분리하여 양질의 PRP/PRF를 확보할 수 있게 해주는 전용 장비입니다.",
      en: "Dedicated equipment that separates blood quickly and accurately to secure high-quality PRP/PRF.",
    },
    highlights: {
      ko: [
        "정밀 원심분리 기술",
        "혈장과 적혈구의 깨끗한 분리",
        "프로그래머블 RPM 컨트롤",
        "안전 잠금 시스템 탑재",
      ],
      en: [
        "Precise centrifugation technology",
        "Clean separation of plasma and red blood cells",
        "Programmable RPM control",
        "Safety lock system included",
      ],
    },
    features: [
      {
        icon: "beaker",
        title: { ko: "정밀 분리", en: "Precise Separation" },
        desc: { ko: "혈액 성분별 깨끗한 분리 보장", en: "Guarantees clean separation by blood component" },
      },
      {
        icon: "activity",
        title: { ko: "고속 동작", en: "High-Speed Operation" },
        desc: { ko: "최대 5,000 RPM의 강력한 성능", en: "Powerful performance up to 5,000 RPM" },
      },
      {
        icon: "shield",
        title: { ko: "안전성", en: "Safety" },
        desc: { ko: "이중 잠금 및 자동 정지 시스템", en: "Double lock and auto-stop system" },
      },
      {
        icon: "award",
        title: { ko: "내구성", en: "Durability" },
        desc: { ko: "장기간 안정적으로 사용 가능", en: "Reliable long-term operation" },
      },
    ],
    specs: [
      { label: { ko: "최대 RPM", en: "Max RPM" }, value: { ko: "5,000 RPM", en: "5,000 RPM" } },
      { label: { ko: "튜브 수용량", en: "Tube Capacity" }, value: { ko: "8 × 15ml", en: "8 × 15ml" } },
      { label: { ko: "타이머", en: "Timer" }, value: { ko: "1~99 분", en: "1–99 min" } },
      { label: { ko: "보증 기간", en: "Warranty" }, value: { ko: "2년", en: "2 Years" } },
    ],
    includes: {
      ko: ["분리 장치 1대", "튜브 어댑터 세트", "사용 설명서", "전원 케이블"],
      en: ["Separator (1 ea)", "Tube adapter set", "User manual", "Power cable"],
    },
    price: "₩ 800,000",
    originalPrice: "₩ 950,000",
  },
  revercell: {
    image: "/home-product-bloodbag.png",
    category: { ko: "재생 의학", en: "Regenerative Medicine" },
    badge: { ko: "PREMIUM", en: "PREMIUM" },
    title: { ko: "리버셀 주사", en: "Revercell Injection" },
    tagline: {
      ko: "세포의 시간을 되돌리는 필수 에너지 루틴",
      en: "Essential energy routine that turns back time on cells",
    },
    description: {
      ko: "세포의 시간을 되돌리는 필수 에너지 루틴. 신체 전반의 활력을 되찾아주는 프리미엄 앰플 주사입니다. 줄기세포의 재생 및 분화 메커니즘을 활용하여 근본적인 치유를 이끌어냅니다.",
      en: "Turning back time on cells, essential energy routine. Premium ampoule injection that restores overall body vitality. Utilizes stem cell regeneration and differentiation mechanisms for fundamental healing.",
    },
    highlights: {
      ko: [
        "줄기세포 기반 재생 에너지",
        "혈관 신생을 통한 전신 순환 개선",
        "심혈관계 합병증 증세 완화",
        "신체 전반의 활력 회복",
      ],
      en: [
        "Stem cell-based regenerative energy",
        "Improved circulation via angiogenesis",
        "Alleviates cardiovascular complications",
        "Restores overall body vitality",
      ],
    },
    features: [
      {
        icon: "sparkles",
        title: { ko: "세포 재생", en: "Cell Regeneration" },
        desc: { ko: "손상된 세포와 조직의 근본적 회복", en: "Fundamental recovery of damaged cells and tissues" },
      },
      {
        icon: "droplets",
        title: { ko: "혈관 신생", en: "Angiogenesis" },
        desc: { ko: "새로운 혈관 형성으로 미세순환 개선", en: "New vessel formation improves microcirculation" },
      },
      {
        icon: "activity",
        title: { ko: "전신 활력", en: "Whole-Body Vitality" },
        desc: { ko: "신체 전반의 에너지와 활력 회복", en: "Restores energy and vitality throughout the body" },
      },
      {
        icon: "shield",
        title: { ko: "안전성", en: "Safety" },
        desc: { ko: "엄격한 품질 관리로 안전한 시술", en: "Safe procedure with strict quality control" },
      },
    ],
    specs: [
      { label: { ko: "용량", en: "Volume" }, value: { ko: "1회 / 50ml", en: "1 dose / 50ml" } },
      { label: { ko: "투여 방법", en: "Administration" }, value: { ko: "정맥 주사", en: "Intravenous" } },
      { label: { ko: "권장 주기", en: "Recommended Cycle" }, value: { ko: "월 1~2회", en: "1–2 times / month" } },
      { label: { ko: "보관", en: "Storage" }, value: { ko: "냉장 (2~8℃)", en: "Refrigerated (2–8℃)" } },
    ],
    includes: {
      ko: ["리버셀 앰플 1세트", "전문 시술 1회 포함", "건강 상담 서비스"],
      en: ["1 Revercell ampoule set", "Includes 1 professional treatment", "Health consultation service"],
    },
    price: "₩ 350,000",
    originalPrice: "₩ 420,000",
  },
  deepsea: {
    image: "/home-product-rewater.png",
    category: { ko: "건강 음료", en: "Health Beverage" },
    badge: { ko: "BEST", en: "BEST" },
    title: { ko: "심해수 REWATER", en: "Deep Sea Water REWATER" },
    tagline: {
      ko: "마시는 순간 시작되는 리버스 에이징",
      en: "Reverse aging begins the moment you drink",
    },
    description: {
      ko: "마시는 순간 시작되는 리버스 에이징. 해양 1km 청정 수심에서 취수한 순수 심해수에 70여 종의 이온 미네랄이 최적의 밸런스를 제공합니다.",
      en: "Reverse aging begins the moment you drink. Pure deep sea water drawn from 1km ocean depths with over 70 ionic minerals in optimal balance.",
    },
    highlights: {
      ko: [
        "해양 1km 청정 수심에서 취수",
        "70여 종의 이온 미네랄 함유",
        "고농도 마그네슘 (50~71mg/L)",
        "어머니 양수와 유사한 미네랄 밸런스",
      ],
      en: [
        "Drawn from 1km ocean depths",
        "Contains over 70 ionic minerals",
        "High-concentration magnesium (50–71mg/L)",
        "Mineral balance similar to mother's amniotic fluid",
      ],
    },
    features: [
      {
        icon: "droplets",
        title: { ko: "순수한 청정수", en: "Pure Clean Water" },
        desc: { ko: "불순물 0%, 자연 그대로의 순수함", en: "0% impurities, pure as nature intended" },
      },
      {
        icon: "sparkles",
        title: { ko: "70+ 미네랄", en: "70+ Minerals" },
        desc: { ko: "이온화된 미네랄로 빠른 흡수", en: "Ionized minerals for rapid absorption" },
      },
      {
        icon: "activity",
        title: { ko: "신진대사 향상", en: "Enhanced Metabolism" },
        desc: { ko: "원활한 혈행과 신진대사 케어", en: "Smooth circulation and metabolism care" },
      },
      {
        icon: "award",
        title: { ko: "품질 인증", en: "Quality Certified" },
        desc: { ko: "엄격한 품질 검사를 통과한 프리미엄 워터", en: "Premium water that passed strict QA" },
      },
    ],
    specs: [
      { label: { ko: "용량", en: "Volume" }, value: { ko: "350ml × 30개입", en: "350ml × 30 packs" } },
      { label: { ko: "취수 수심", en: "Source Depth" }, value: { ko: "1,000m 해양심층", en: "1,000m deep ocean" } },
      { label: { ko: "pH", en: "pH" }, value: { ko: "7.5~8.0", en: "7.5–8.0" } },
      { label: { ko: "유통기한", en: "Shelf Life" }, value: { ko: "제조일로부터 2년", en: "2 years from manufacture" } },
    ],
    includes: {
      ko: ["REWATER 350ml × 30개입", "전용 박스 패키징", "무료 배송"],
      en: ["REWATER 350ml × 30 packs", "Premium box packaging", "Free shipping"],
    },
    price: "₩ 50,000",
    originalPrice: "₩ 65,000",
  },
}

export function ProductDetailView({ id }: { id: string }) {
  const { locale } = useI18n()
  const product = productsData[id]
  const [quantity, setQuantity] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)

  if (!product) {
    return notFound()
  }

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1))
  const increaseQty = () => setQuantity((q) => q + 1)

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-2 text-sm text-muted-foreground animate-fade-in-up"
      >
        <Link href="/" className="transition-colors hover:text-primary">
          {locale === "ko" ? "홈" : "Home"}
        </Link>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <Link href="/products" className="transition-colors hover:text-primary">
          {locale === "ko" ? "제품정보" : "Products"}
        </Link>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span className="text-foreground">{product.title[locale]}</span>
      </nav>

      {/* Top section: image + buy panel */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="animate-zoom-in">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#F8F9FA] via-white to-[#EBFFEC]/40 shadow-sm">
            {product.badge && (
              <span className="absolute left-5 top-5 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                {product.badge[locale]}
              </span>
            )}
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title[locale]}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-10 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Details + Actions */}
        <div className="flex flex-col gap-5 pt-2 md:pt-6">
          <div className="animate-fade-in-up delay-100">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {product.category[locale]}
            </span>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {product.title[locale]}
            </h1>
            <p className="mt-3 text-base text-brand-text md:text-lg">{product.tagline[locale]}</p>
          </div>

          <p className="text-pretty text-[15px] leading-relaxed text-foreground/75 md:text-base animate-fade-in-up delay-300">
            {product.description[locale]}
          </p>

          {/* Highlights */}
          <ul className="mt-2 space-y-2 animate-fade-in-up delay-400">
            {product.highlights[locale].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-3 animate-fade-in-up delay-500">
            <span className="text-3xl font-bold text-primary md:text-4xl">{product.price}</span>
            {product.originalPrice && (
              <span className="text-base text-muted-foreground line-through">{product.originalPrice}</span>
            )}
          </div>

          {/* Quantity selector */}
          <div className="mt-2 flex items-center gap-4 animate-fade-in-up delay-500">
            <span className="text-sm font-medium text-foreground/70">
              {locale === "ko" ? "수량" : "Quantity"}
            </span>
            <div className="flex items-center rounded-full border border-border">
              <button
                type="button"
                onClick={decreaseQty}
                aria-label={locale === "ko" ? "수량 감소" : "Decrease quantity"}
                className="flex h-10 w-10 items-center justify-center rounded-l-full text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[40px] text-center text-base font-semibold text-foreground" aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                onClick={increaseQty}
                aria-label={locale === "ko" ? "수량 증가" : "Increase quantity"}
                className="flex h-10 w-10 items-center justify-center rounded-r-full text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row animate-fade-in-up delay-500">
            <button
              type="button"
              className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
            >
              <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              {locale === "ko" ? "구매하기" : "Buy Now"}
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/20 bg-accent px-6 py-4 text-base font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/70"
            >
              {locale === "ko" ? "장바구니 담기" : "Add to Cart"}
            </button>
            <button
              type="button"
              onClick={() => setWishlisted((w) => !w)}
              aria-label={locale === "ko" ? "찜하기" : "Add to wishlist"}
              aria-pressed={wishlisted}
              className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${
                wishlisted
                  ? "border-destructive bg-destructive/10 text-destructive"
                  : "border-border bg-background text-foreground/60 hover:border-destructive hover:text-destructive"
              }`}
            >
              <Heart className={`h-5 w-5 transition-all ${wishlisted ? "fill-destructive" : ""}`} />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6 animate-fade-in-up delay-500">
            {[
              { icon: Truck, label: locale === "ko" ? "무료 배송" : "Free Shipping" },
              { icon: ShieldCheck, label: locale === "ko" ? "정품 보증" : "Authenticity" },
              { icon: RotateCcw, label: locale === "ko" ? "7일 교환" : "7-Day Returns" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-xs text-foreground/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="mt-20 md:mt-28">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl animate-fade-in-up">
          {locale === "ko" ? "주요 특징" : "Key Features"}
        </h2>
        <div className="mx-auto h-0.5 w-16 bg-primary animate-fade-in-up delay-100" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.features.map((feature, idx) => {
            const Icon = FEATURE_ICONS[feature.icon] ?? Sparkles
            return (
              <div
                key={feature.title[locale]}
                className={`group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg animate-fade-in-up delay-${(idx + 1) * 100}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{feature.title[locale]}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{feature.desc[locale]}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Specs + Includes */}
      <section className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-2 md:gap-12">
        <div className="animate-fade-in-up">
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            {locale === "ko" ? "제품 사양" : "Specifications"}
          </h2>
          <div className="mb-8 h-0.5 w-16 bg-primary" />
          <dl className="overflow-hidden rounded-2xl border border-border bg-card">
            {product.specs.map((spec, idx) => (
              <div
                key={spec.label[locale]}
                className={`grid grid-cols-[140px_1fr] gap-4 px-5 py-4 text-sm md:text-base ${
                  idx !== product.specs.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="font-medium text-foreground/70">{spec.label[locale]}</dt>
                <dd className="text-foreground">{spec.value[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-in-up delay-200">
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            {locale === "ko" ? "구성품" : "What's Included"}
          </h2>
          <div className="mb-8 h-0.5 w-16 bg-primary" />
          <ul className="space-y-3 rounded-2xl border border-border bg-card p-6">
            {product.includes[locale].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/85 md:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related products */}
      <RelatedProducts currentId={id} />
    </div>
  )
}

function RelatedProducts({ currentId }: { currentId: string }) {
  const { locale } = useI18n()
  const related = Object.entries(productsData)
    .filter(([id]) => id !== currentId)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="mt-20 md:mt-28">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl animate-fade-in-up">
        {locale === "ko" ? "관련 제품" : "Related Products"}
      </h2>
      <div className="mx-auto h-0.5 w-16 bg-primary animate-fade-in-up delay-100" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map(([id, p], idx) => (
          <Link
            key={id}
            href={`/products/${id}`}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg animate-fade-in-up delay-${(idx + 1) * 100}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-secondary to-accent/30">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={p.title[locale]}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <span className="text-xs font-medium text-primary/80">{p.category[locale]}</span>
              <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary md:text-lg">
                {p.title[locale]}
              </h3>
              <p className="text-sm text-foreground/60 line-clamp-2">{p.tagline[locale]}</p>
              <span className="mt-2 text-base font-bold text-primary">{p.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
