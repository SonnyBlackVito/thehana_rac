"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n/context"

export function SupportPageHeader() {
  const { locale, t } = useI18n()

  const tabItems = locale === "ko"
    ? ["제품구입/AS문의", "문의하기", "자주 묻는 질문", "공지사항"]
    : ["Purchase/A/S Inquiry", "Contact Us", "FAQ", "Notices"]

  const [active, setActive] = useState(tabItems[0])

  // Re-sync active tab when locale changes
  useEffect(() => {
    setActive(tabItems[0])
  }, [locale])

  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground md:text-[28px]">{t("support", "pageTitle")}</h1>
        <div className="mt-3 h-[3px] w-10 bg-primary" aria-hidden="true" />
      </div>

      <div role="tablist" aria-label="Support categories" className="flex flex-wrap items-center gap-3">
        {tabItems.map((tab) => {
          const isActive = tab === active
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>
    </section>
  )
}
