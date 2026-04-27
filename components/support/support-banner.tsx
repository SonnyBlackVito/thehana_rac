"use client"

import { ChevronDown, Mail, Phone } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function SupportBanner() {
  const { t } = useI18n()

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/support-bubbles-banner.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      {/* 30% black overlay per Figma spec */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 py-12 sm:px-6 md:py-20">
        {/* Title */}
        <h2 className="text-center text-[22px] font-bold leading-[32px] text-white sm:text-[24px] sm:leading-[40px] md:text-[30px]">
          {t("support", "bannerTitle")}
        </h2>

        {/* Three selects */}
        <div className="mt-8 flex w-full max-w-[782px] flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center sm:gap-4 md:mt-16">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative w-full sm:w-[230px] md:w-[250px]">
              <select
                aria-label={`${t("common", "select")} ${i + 1}`}
                defaultValue=""
                className="h-10 w-full appearance-none rounded-[10px] border border-[#CCCCCC] bg-white px-4 pr-10 text-[14px] font-medium leading-6 text-[#3E454B] outline-none focus:ring-2 focus:ring-primary/30 sm:px-6 sm:text-[16px]"
              >
                <option value="" disabled>
                  {t("common", "select")}
                </option>
                <option value="1">{t("support", "option1")}</option>
                <option value="2">{t("support", "option2")}</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1D1B20] sm:right-4 sm:h-6 sm:w-6"
                strokeWidth={2}
              />
            </div>
          ))}
        </div>

        {/* Info card */}
        <div className="mt-10 flex w-full max-w-[800px] flex-col items-center justify-center gap-4 rounded-[20px] border border-[#055239] bg-[#F9F9F9] px-4 py-6 sm:flex-row sm:gap-8 sm:px-6 sm:py-10 md:mt-16 md:gap-[88px]">
          <p className="text-center text-[18px] font-medium leading-[28px] text-black sm:text-[20px] sm:leading-[34px] md:text-[24px]">
            {t("support", "thehana")}
            <br />
            {t("support", "reverseAgingCenter")}
          </p>

          <div
            className="hidden h-12 w-px bg-[#3E454B] sm:block"
            aria-hidden="true"
          />
          <div
            className="block h-px w-12 bg-[#3E454B] sm:hidden"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-[13px] leading-6 text-black sm:text-[14px] md:text-[16px]">
              <Mail className="h-5 w-5 shrink-0 text-black sm:h-6 sm:w-6" strokeWidth={2} />
              <span className="break-all">globatlthehana@gmail.com</span>
            </p>
            <p className="flex items-center gap-2 text-[13px] leading-6 text-black sm:text-[14px] md:text-[16px]">
              <Phone className="h-5 w-5 shrink-0 text-black sm:h-6 sm:w-6" strokeWidth={2} />
              <span>010-8190-1627</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
