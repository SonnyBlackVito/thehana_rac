"use client"

import { useI18n } from "@/lib/i18n/context"

export function ResearchPageHeader() {
  const { t } = useI18n()

  return (
    <section className="w-full px-6 pt-8 pb-4 md:px-20 md:pt-4">
      <div className="mx-auto max-w-[1280px]">
        <h1 className="text-[28px] font-semibold leading-tight text-[#3E454B] md:text-[36px]">{t("research", "pageTitle")}</h1>
        <div className="mt-4 h-[3px] w-[90px] bg-[#055239]" />
      </div>
    </section>
  )
}
