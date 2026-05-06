"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export function QuantumRestSection() {
  const { t } = useI18n()

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
    <section aria-labelledby="quantum-rest-title" className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 md:px-20">
        <h2
          id="quantum-rest-title"
          className="text-center text-2xl font-medium leading-[1.45] text-primary md:text-[34px] md:leading-[1.4]"
        >
          {t("products", "quantumRestTitle")}
        </h2>

        <p className="mt-7 max-w-[900px] text-pretty text-center text-[15px] font-medium leading-[1.75] text-foreground md:text-[18px] md:leading-[1.65]">
          {t("products", "quantumRestDesc")}
        </p>

        <div className="mt-10 grid w-full max-w-[1080px] grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:gap-20">
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
