"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export function AboutIntro() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="about-intro-heading" className="px-4 pt-10 sm:px-6 sm:pt-16 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[900px]">
            <Image
              src="/thehana-mosaic.png"
              alt="THEHANA logo composed of hundreds of portrait photos"
              width={1840}
              height={600}
              priority
              className="h-auto w-full"
            />
            <p className="mt-4 text-center text-[15px] font-light tracking-[0.35em] text-foreground md:text-[18px] md:tracking-[0.45em]">
              REVERSE AGING CENTER
            </p>
          </div>

          <h2
            id="about-intro-heading"
            className="mt-10 text-balance text-center text-[26px] font-bold leading-tight text-foreground md:text-[32px] lg:text-[36px]"
          >
            {t("about", "introHeading")}
          </h2>

          <p className="mt-10 text-pretty text-center text-[15px] leading-relaxed text-foreground md:text-base whitespace-pre-line">
            {t("about", "introP1")}
          </p>

          <div aria-hidden="true" className="mt-10 h-px w-24 bg-primary" />

          <div className="mt-10 max-w-[1000px] text-pretty text-center text-[13px] leading-relaxed text-muted-foreground md:text-sm">
            <p>
              {t("about", "introP2")}
            </p>
            <p className="mt-6 whitespace-pre-line">
              {t("about", "introP3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
