"use client"

import { useI18n } from "@/lib/i18n/context"

export function VisionMission() {
  const { t } = useI18n()

  const blocks = [
    {
      eyebrow: t("about", "visionEyebrow"),
      title: t("about", "visionTitle"),
      subtitle: t("about", "visionSubtitle"),
      description: t("about", "visionDesc"),
    },
    {
      eyebrow: t("about", "missionEyebrow"),
      title: t("about", "missionTitle"),
      subtitle: "",
      description: t("about", "missionDesc"),
    },
  ]

  return (
    <section
      aria-label="Vision & Mission"
      className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 sm:gap-20 lg:gap-24">
        {blocks.map((block) => (
          <article key={block.eyebrow} className="flex flex-col items-center text-center">
            <p className="text-[13px] font-bold tracking-[0.1em] text-foreground sm:text-[15px]">
              {block.eyebrow}
            </p>
            <div aria-hidden="true" className="mt-3 h-px w-12 bg-primary sm:mt-4 sm:w-16" />

            <h3 className="mt-8 text-[32px] font-bold leading-tight text-primary sm:mt-12 sm:text-[44px] md:text-[56px] lg:mt-14 lg:text-[64px]">
              {block.title}
            </h3>

            {block.subtitle && (
              <p className="mt-6 text-balance text-[14px] font-semibold leading-relaxed text-foreground sm:mt-10 sm:text-[16px] md:text-[18px]">
                {block.subtitle}
              </p>
            )}

            <p className="mt-6 text-pretty text-[13px] leading-relaxed text-muted-foreground sm:mt-10 sm:text-sm whitespace-pre-line">
              {block.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
