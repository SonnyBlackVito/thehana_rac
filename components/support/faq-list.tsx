"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

type FaqItem = {
  id: number
  category: { ko: string; en: string }
  title: { ko: string; en: string }
  answer: { ko: string; en: string }
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    category: { ko: "혈액 활성화기", en: "Blood Activator" },
    title: { ko: "혈액 활성화기는 어떤 원리로 작동하나요?", en: "How does the Blood Activator work?" },
    answer: {
      ko: "혈액 활성화기는 원심분리 및 미세 진동 파장을 이용하여 혈액 내 비활성 혈소판과 백혈구를 활성 상태로 변환합니다. 화학적 첨가물(항응고제 등) 없이 물리적 스트레스만으로 활성화하며, 이 과정을 통해 고농도의 성장인자가 최장 14일까지 지속적으로 방출되도록 돕습니다.",
      en: "The Blood Activator uses centrifugation and micro-vibration wavelengths to convert inactive platelets and white blood cells in the blood to an active state. It activates through physical stress alone without chemical additives (anticoagulants, etc.), and through this process, helps high-concentration growth factors to be continuously released for up to 14 days.",
    },
  },
  {
    id: 2,
    category: { ko: "리버셀 주사", en: "Revercell" },
    title: { ko: "리버셀 주사 시술 시간과 주기는 어떻게 되나요?", en: "What is the treatment time and cycle for Revercell injection?" },
    answer: {
      ko: "일반적으로 1회 시술에 약 30~40분 정도 소요됩니다. 개인의 상태에 따라 다르지만 보통 2~4주 간격으로 3~5회 시술을 권장하며, 이후에는 유지 목적의 주기적인 관리를 추천합니다.",
      en: "Generally, one treatment takes about 30-40 minutes. While it varies depending on individual conditions, we usually recommend 3-5 treatments at 2-4 week intervals, followed by periodic maintenance treatments.",
    },
  },
  {
    id: 3,
    category: { ko: "심해수", en: "Deep Sea Water" },
    title: { ko: "리워터 심해수는 일반 생수와 어떻게 다른가요?", en: "How is Re:water deep sea water different from regular water?" },
    answer: {
      ko: "리워터는 수심 1km의 해양심층수에서 추출한 프리미엄 청정수입니다. 인체의 체액(양수)과 가장 유사한 미네랄 밸런스를 갖추고 있어 일반 생수보다 체내 흡수가 빠르며, 줄기세포의 증식과 신진대사 촉진에 필요한 70여 종의 천연 이온 미네랄을 다량 함유하고 있습니다.",
      en: "Re:water is a premium clean water extracted from deep sea water at a depth of 1km. It has a mineral balance most similar to the human body's fluids (amniotic fluid), so it is absorbed into the body faster than regular water, and contains a large amount of over 70 types of natural ionic minerals needed for stem cell proliferation and metabolism promotion.",
    },
  },
  {
    id: 4,
    category: { ko: "AS", en: "A/S" },
    title: { ko: "기기 고장 시 A/S 접수는 어떻게 하나요?", en: "How do I submit an A/S request when a device breaks down?" },
    answer: {
      ko: "기기 오류 발생 시, 고객지원 센터(1588-XXXX)로 전화하시거나 홈페이지의 [고객지원] 메뉴를 통해 온라인으로 접수하실 수 있습니다. 접수 시 기기 일련번호와 증상을 상세히 기재해 주시면 보다 빠른 처리가 가능합니다.",
      en: "In case of device errors, you can call the Customer Support Center (1588-XXXX) or submit online through the [Customer Support] menu on the website. Please provide the device serial number and detailed symptoms for faster processing.",
    },
  },
  {
    id: 5,
    category: { ko: "제품구매", en: "Purchase" },
    title: { ko: "의료기관이 아닌 개인도 장비를 구매할 수 있나요?", en: "Can individuals (non-medical institutions) purchase equipment?" },
    answer: {
      ko: "혈액 활성화기 중 전문가용(Pro) 대형 장비는 의료기관 및 관련 라이선스 소지자만 구매 가능합니다. 하지만 가정용 또는 개인 헬스케어용으로 특별 출시된 MINI 모델 등은 상담을 통해 개인도 구매하실 수 있습니다. 자세한 사항은 영업팀에 문의 바랍니다.",
      en: "Among Blood Activators, professional (Pro) large equipment can only be purchased by medical institutions and related license holders. However, MINI models specially released for home or personal healthcare use can be purchased by individuals through consultation. Please contact the sales team for details.",
    },
  },
  {
    id: 6,
    category: { ko: "혈액 활성화기", en: "Blood Activator" },
    title: { ko: "활성화된 혈액(Active PRF)과 일반 PRP의 차이점은 무엇인가요?", en: "What is the difference between Active PRF and regular PRP?" },
    answer: {
      ko: "가장 큰 차이는 '항응고제 사용 여부'와 '성장인자 방출 기간'입니다. 일반 PRP는 항응고제를 사용하고 성장인자가 1시간 내에 빠르게 소실되지만, 당사의 Active PRF는 항응고제 없이 물리적 활성화만으로 피브린 네트워크를 형성하여 최장 10~14일 동안 성장인자를 서서히 지속적으로 방출합니다.",
      en: "The biggest difference is 'whether anticoagulants are used' and 'the period of growth factor release'. Regular PRP uses anticoagulants and growth factors dissipate rapidly within 1 hour, but our Active PRF forms a fibrin network through physical activation alone without anticoagulants, slowly and continuously releasing growth factors for up to 10-14 days.",
    },
  },
  {
    id: 7,
    category: { ko: "리버셀 주사", en: "Revercell" },
    title: { ko: "리버셀 주사 시술 후 부작용이나 주의사항이 있나요?", en: "Are there any side effects or precautions after Revercell injection?" },
    answer: {
      ko: "자신의 혈액을 이용한 자가 세포 치료이므로 면역 거부반응이나 알레르기 부작용이 거의 없습니다. 다만 주사 시술 특성상 일시적인 붓기, 멍, 미약한 통증이 발생할 수 있으나 수일 내 자연스럽게 호전됩니다. 시술 당일 무리한 운동이나 사우나는 피하는 것이 좋습니다.",
      en: "Since it is an autologous cell therapy using your own blood, there are almost no immune rejection reactions or allergic side effects. However, due to the nature of injection procedures, temporary swelling, bruising, and mild pain may occur but will naturally improve within a few days. It is recommended to avoid strenuous exercise or sauna on the day of treatment.",
    },
  },
  {
    id: 8,
    category: { ko: "심해수", en: "Deep Sea Water" },
    title: { ko: "심해수 파우치는 하루에 얼마나 마시는 것이 좋나요?", en: "How much deep sea water pouch should I drink per day?" },
    answer: {
      ko: "성인 기준 하루 1~2포(350ml~700ml) 음용을 권장합니다. 특히 기상 직후나 운동 후, 혹은 리버셀 주사 등 시술 전후에 섭취하시면 세포 활성화 및 미네랄 밸런스 유지에 더욱 탁월한 효과를 기대할 수 있습니다.",
      en: "We recommend drinking 1-2 pouches (350ml-700ml) per day for adults. Especially when consumed right after waking up, after exercise, or before and after treatments such as Revercell injection, you can expect even greater effects on cell activation and mineral balance maintenance.",
    },
  },
  {
    id: 9,
    category: { ko: "제품구매", en: "Purchase" },
    title: { ko: "대량 구매나 병원 개원 패키지 상담이 가능한가요?", en: "Is bulk purchase or hospital opening package consultation available?" },
    answer: {
      ko: "네, 가능합니다. 병의원 개원이나 확장을 위한 '리버스 에이징 센터' 전용 도입 패키지를 별도로 운영하고 있습니다. 홈페이지의 하단 제휴 문의를 통해 연락처를 남겨주시면 담당 컨설턴트가 맞춤형 셋업 제안서를 가지고 방문 상담을 진행해 드립니다.",
      en: "Yes, it is possible. We operate a dedicated 'Reverse Aging Center' introduction package for hospital opening or expansion. Please leave your contact information through the partnership inquiry at the bottom of the website, and a dedicated consultant will visit you with a customized setup proposal.",
    },
  },
]

export function FaqList() {
  const { locale, t } = useI18n()

  const categoryTabs = locale === "ko"
    ? ["전체", "혈액 활성화기", "리버셀 주사", "심해수", "AS", "제품구매"]
    : ["All", "Blood Activator", "Revercell", "Deep Sea Water", "A/S", "Purchase"]

  const [activeCategory, setActiveCategory] = useState(categoryTabs[0])
  const [openId, setOpenId] = useState<number | null>(2)
  const [activePage, setActivePage] = useState(1)

  // Re-sync active category when locale changes
  useEffect(() => {
    setActiveCategory(categoryTabs[0])
  }, [locale])

  const allLabel = categoryTabs[0]

  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-20 lg:px-10">
      <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground md:text-2xl">{t("support", "faqTitle")}</h2>
          <p className="mt-1 text-sm text-foreground/60">{t("support", "faqSubtitle")}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <select
              aria-label={t("common", "search")}
              defaultValue="title"
              className="w-full appearance-none rounded-md border border-border bg-background px-4 py-2.5 pr-10 text-sm text-foreground/80 outline-none focus:ring-2 focus:ring-primary/30 sm:w-32"
            >
              <option value="title">{t("support", "titleOption")}</option>
              <option value="content">{t("support", "contentOption")}</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/60"
              strokeWidth={1.8}
            />
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder={t("support", "searchPlaceholder")}
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 pr-10 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-72"
            />
            <button
              type="button"
              aria-label={t("common", "search")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-primary"
            >
              <Search className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="FAQ"
        className="mb-6 -mx-4 flex gap-5 overflow-x-auto border-b border-border px-4 [scrollbar-width:none] sm:-mx-0 sm:flex-wrap sm:gap-6 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {categoryTabs.map((tab) => {
          const isActive = tab === activeCategory
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className={`relative -mb-px shrink-0 px-1 pb-3 text-sm transition-colors ${
                isActive ? "font-semibold text-primary" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {tab}
              {isActive && <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />}
            </button>
          )
        })}
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {faqItems
          .filter((item) => activeCategory === allLabel || item.category[locale] === activeCategory)
          .map((item) => {
          const isOpen = openId === item.id
          return (
            <li key={item.id} className={isOpen ? "bg-muted/40 transition-colors" : "transition-colors"}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-3 px-3 py-4 text-left sm:gap-4 sm:px-4 sm:py-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground/70 transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                >
                  Q
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <span className="shrink-0 text-[13px] font-medium text-foreground/50 sm:w-28">[{item.category[locale]}]</span>
                  <span className="truncate text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">{item.title[locale]}</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-foreground/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.8}
                />
              </button>
              {isOpen && (
                <div className="flex gap-4 px-4 pb-6 sm:px-4 animate-fade-in-up">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
                  >
                    A
                  </span>
                  <div className="text-[14.5px] leading-[1.8] text-foreground/80 md:text-[15px]">
                    <p>{item.answer[locale]}</p>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      <nav aria-label="Pagination" className="mt-8 flex flex-wrap items-center justify-center gap-1">
        <button
          type="button"
          aria-label={t("press", "firstPage")}
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronsLeft className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label={t("press", "prevPage")}
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
        </button>
        {[1, 2, 3, 4, 5].map((n) => {
          const isActive = n === activePage
          return (
            <button
              key={n}
              type="button"
              onClick={() => setActivePage(n)}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-9 w-9 items-center justify-center rounded text-sm transition-colors ${
                isActive
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {n}
            </button>
          )
        })}
        <button
          type="button"
          aria-label={t("press", "nextPage")}
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label={t("press", "lastPage")}
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronsRight className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </nav>
    </section>
  )
}
