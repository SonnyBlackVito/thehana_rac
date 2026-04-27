"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export function RevercellSection() {
  const { t } = useI18n()

  return (
    <section
      aria-labelledby="revercell-title"
      className="relative w-full overflow-hidden"
    >
      {/* Background image with 50% white overlay to match Figma */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/revercell-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/50" aria-hidden="true" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 pt-4 pb-10 md:px-10 md:pb-16">
        {/* Section header: left-aligned title + short green accent bar */}
        <div className="mb-12 md:mb-16 animate-fade-in-up">
          <h2
            id="revercell-title"
            className="text-[28px] font-semibold leading-[1.1] text-[#3E454B] md:text-[36px] md:leading-[40px]"
          >
            {t("products", "revercellSectionTitle")}
          </h2>
          <div className="mt-4 h-[3px] w-16 bg-primary" aria-hidden="true" />
        </div>

        {/* Centered intro block */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
          <p className="text-[20px] font-bold leading-[1.4] text-[#3E454B] md:text-[28px] md:leading-[40px] animate-fade-in-up delay-100">
            {t("products", "revercellSubtitle")}
          </p>
          <div className="h-px w-16 bg-primary animate-fade-in-up delay-200" aria-hidden="true" />
          <h3 className="text-balance text-[22px] font-medium leading-[1.4] text-primary md:text-[30px] md:leading-[48px] animate-fade-in-up delay-300">
            {t("products", "revercellMechanism")}
          </h3>
          <p className="text-pretty text-[14px] leading-[1.9] text-foreground/80 md:text-[15px] md:leading-[2] animate-fade-in-up delay-400">
            {t("products", "revercellDesc")}
          </p>
        </div>

        {/* Two treatment photos side by side */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-8">
          <div className="relative aspect-[3/4] w-full overflow-hidden animate-fade-in-up delay-500">
            <Image
              src="/revercell-iv-drip.png"
              alt="Revercell IV drip treatment"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden animate-fade-in-up delay-500">
            <Image
              src="/revercell-face-injection.png"
              alt="Revercell face injection treatment"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
