"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export function ActivePrfIntro() {
  const { t } = useI18n()

  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/research-active-prf-bg.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-20">
        <div className="flex flex-col gap-8 md:gap-16">
          <h2 className="text-[24px] font-bold leading-tight text-white md:text-[30px]">{t("research", "whatIsActivePrf")}</h2>
          <p className="text-[15px] font-normal leading-[1.6] text-white md:text-[20px] md:leading-[30px]">
            {t("research", "activePrfDesc")}
          </p>
        </div>
      </div>
    </section>
  )
}
