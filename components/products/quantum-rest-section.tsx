"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export function QuantumRestSection() {
  const { t } = useI18n()
  const bodyKeys = ["quantumRestDesc1", "quantumRestDesc2", "quantumRestDesc3"] as const

  const images = [
    {
      src: "/product-quantum-rest-lounge.png",
      alt: t("products", "quantumRestImageAlt1"),
    },
    {
      src: "/product-quantum-rest-suite.png",
      alt: t("products", "quantumRestImageAlt2"),
    },
  ]

  return (
    <section
      id="quantum-rest"
      aria-labelledby="quantum-rest-title"
      className="w-full scroll-mt-24 bg-background py-10 md:py-16"
    >
      <div className="px-4 md:px-20 animate-fade-in-up">
        <h2
          id="quantum-rest-title"
          className="text-3xl font-semibold leading-10 text-[#3E454B] md:text-4xl"
        >
          {t("products", "quantumRestSectionTitle")}
        </h2>
        <div className="mt-4 h-0.5 w-20 bg-[#055239]" aria-hidden="true" />
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 px-4 text-center md:mt-24 animate-fade-in-up delay-100">
        <h3 className="text-center text-2xl font-bold leading-10 text-[#3E454B] md:text-[28px]">
          {t("products", "quantumRestTitle")}
        </h3>
        <div className="h-0.5 w-24 bg-[#055239]" aria-hidden="true" />
      </div>

      <div className="mx-auto mt-10 flex max-w-[1280px] flex-col items-center px-4 md:px-20">
        <div className="w-full max-w-[960px] space-y-4 text-pretty text-left text-base leading-[1.75] text-[#3E454B] md:text-xl md:leading-[30px] animate-fade-in-up delay-200">
          {bodyKeys.map((key) => (
            <p key={key}>{t("products", key)}</p>
          ))}
        </div>

        <div className="mt-14 grid w-full max-w-[1080px] grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 md:gap-20">
          {images.map((image) => (
            <div key={image.src} className="relative aspect-[1/1.05] w-full overflow-hidden bg-secondary">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) calc(100vw - 32px), 500px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
