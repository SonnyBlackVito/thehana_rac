"use client"

import { Search, ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function NewsListHeader({ total }: { total: number }) {
  const { t } = useI18n()

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-5 md:px-10">
      {/* Title */}
      <div className="flex flex-col items-start pb-6 pt-4">
        <h1 className="text-[26px] font-bold leading-[36px] tracking-[-0.01em] text-[#3E454B] dark:text-[#A1A8AE] md:text-[32px] md:leading-[42px]">
          {t("press", "pageTitle")}
        </h1>
        <span className="mt-3 block h-[2px] w-[72px] bg-[#055239]" aria-hidden="true" />
        <p className="mt-3 text-[13px] leading-[20px] text-[#8D8D8D] md:text-[14px]">
          {t("press", "subtitle")}
        </p>
      </div>

      {/* Count + Controls */}
      <div className="flex flex-col gap-3 py-2 md:flex-row md:items-center md:justify-between">
        <p className="text-[14px] font-medium leading-[22px] text-[#6B6666] md:text-[15px]">
          {t("press", "totalPrefix")}<span className="text-[#055239] font-semibold">{total}</span>{t("press", "totalSuffix")}
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          {/* Select */}
          <button
            type="button"
            className="flex h-10 w-full items-center justify-between gap-2 rounded-[10px] border border-[#CCCCCC] bg-white px-4 text-[14px] font-medium text-[#3E454B] transition-colors hover:border-[#3E454B] sm:w-[140px]"
          >
            <span>{t("press", "titleFilter")}</span>
            <ChevronDown className="h-4 w-4 text-[#1D1B20]" aria-hidden="true" />
          </button>

          {/* Search input */}
          <div className="flex h-10 w-full items-center gap-2 rounded-[10px] border border-[#CCCCCC] bg-white px-4 transition-colors focus-within:border-[#055239] sm:w-[280px]">
            <input
              type="text"
              placeholder={t("press", "searchPlaceholder")}
              aria-label={t("common", "search")}
              className="flex-1 bg-transparent text-[14px] font-medium text-[#3E454B] placeholder:text-[#8D8D8D] focus:outline-none"
            />
            <Search className="h-4 w-4 shrink-0 text-[#3E454B]" aria-hidden="true" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-2 h-px w-full bg-[#CCCCCC]" aria-hidden="true" />
    </div>
  )
}
