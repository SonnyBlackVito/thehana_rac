"use client"

import Link from "next/link"
import { useState } from "react"
import { Plus, MessageSquareMore, Phone } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function FaqContactSection() {
  const { locale, t } = useI18n()

  const faqTabs = locale === "ko"
    ? ["혈액 활성화기", "리버셀 주사", "심해수", "AS", "제품구매"]
    : ["Blood Activator", "Revercell", "Deep Sea Water", "A/S", "Purchase"]

  const [activeTab, setActiveTab] = useState(faqTabs[0])

  return (
    <section aria-labelledby="faq-contact-heading" className="w-full bg-background pb-16 sm:pb-24">
      <h2 id="faq-contact-heading" className="sr-only">
        {t("faqContact", "srHeading")}
      </h2>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT: FAQ */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-foreground md:text-[28px]">{t("faqContact", "faqTitle")}</h3>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              {t("faqContact", "more")}
            </Link>
          </div>
          <p className="mt-3 text-sm text-brand-text md:text-[15px]">
            {t("faqContact", "faqSubtitle")}
          </p>

          <div
            role="tablist"
            aria-label="FAQ"
            className="mt-8 -mx-4 flex items-center gap-x-6 overflow-x-auto border-b border-border px-4 pb-3 [scrollbar-width:none] sm:mt-10 sm:mx-0 sm:flex-wrap sm:gap-x-10 sm:gap-y-4 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {faqTabs.map((tab) => {
              const isActive = tab === activeTab
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`relative -mb-[13px] shrink-0 pb-3 text-[14px] transition-colors sm:text-[15px] ${
                    isActive
                      ? "font-semibold text-primary"
                      : "font-medium text-brand-text hover:text-foreground"
                  }`}
                >
                  {tab}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
                    />
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>

        {/* RIGHT: two cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* FAQ online inquiry card */}
          <article className="relative flex flex-col rounded-sm border border-border bg-background p-6">
            <header className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground md:text-xl">{t("faqContact", "onlineInquiry")}</h3>
              <button
                type="button"
                aria-label={t("faqContact", "inquiryButton")}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <Plus className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </header>
            <p className="mt-6 text-sm text-brand-text">{t("faqContact", "onlineDesc")}</p>

            <div className="mt-10 flex justify-end" aria-hidden="true">
              <MessageSquareMore
                className="h-14 w-14 text-brand-line"
                strokeWidth={1.25}
              />
            </div>
          </article>

          {/* CS / AS card */}
          <article className="flex flex-col rounded-sm border border-border bg-background p-6">
            <h3 className="text-lg font-bold text-foreground md:text-xl">{t("faqContact", "csAs")}</h3>
            <a
              href="tel:010-8190-1627"
              className="mt-4 inline-block text-[22px] font-bold text-destructive md:text-2xl"
            >
              010-8190-1627
            </a>
            <dl className="mt-4 space-y-0.5 text-sm text-brand-text">
              <div className="flex gap-2">
                <dt className="shrink-0">{t("faqContact", "weekday")}</dt>
                <dd>{t("faqContact", "weekdayHours")}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0">{t("faqContact", "lunch")}</dt>
                <dd>{t("faqContact", "lunchHours")}</dd>
              </div>
              <p className="pt-1">{t("faqContact", "holiday")}</p>
            </dl>

            <div className="mt-6 flex justify-end" aria-hidden="true">
              <Phone className="h-14 w-14 text-brand-line" strokeWidth={1.25} />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
