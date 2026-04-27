"use client"

import { useI18n } from "@/lib/i18n/context"

export function ProductsIntro() {
  const { t } = useI18n()

  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 md:pt-28 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-foreground animate-fade-in-up">
        {t("products", "introTitle")} <span className="font-bold">(Blood Activator)</span>
      </h2>

      <div className="mx-auto mt-6 h-0.5 w-20 bg-[#055239] animate-fade-in-up delay-100" />

      <h3 className="mt-12 text-xl md:text-2xl font-bold text-[#055239] leading-relaxed animate-fade-in-up delay-200">
        {t("products", "introSubtitle")}
      </h3>

      <p className="mt-8 text-sm md:text-[15px] leading-relaxed text-muted-foreground text-pretty animate-fade-in-up delay-300">
        {t("products", "introDesc")}
      </p>
    </section>
  )
}
