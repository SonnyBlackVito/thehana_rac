"use client"

import { useI18n } from "@/lib/i18n/context"

export function ProductsHeader() {
  const { t } = useI18n()

  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">{t("products", "pageTitle")}</h1>
      <div className="mt-4 h-0.5 w-16 bg-[#055239]" />
    </section>
  )
}
