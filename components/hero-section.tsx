"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="hero-heading" className="relative w-full overflow-hidden">
      <div className="relative h-[420px] w-full sm:h-[520px] md:h-[640px]">
        <Image
          src="/hero-cells.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* soft overlay for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/40"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-4 text-center sm:px-6">
          <p className="mb-3 text-[13px] font-medium tracking-wide text-foreground sm:mb-5 sm:text-[15px] md:text-base">
            {t("hero", "eyebrow")}
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-5xl"
          >
            <span className="block">{t("hero", "headingLine1")}</span>
            <span className="mt-2 block">
              {t("hero", "headingLine2")}
            </span>
          </h1>
          <div className="mt-6 space-y-1 text-[13px] leading-relaxed text-foreground/80 sm:mt-8 sm:text-[15px] md:text-base">
            <p>{t("hero", "descLine1")}</p>
            <p>{t("hero", "descLine2")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
