"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

export function DeepSeaSection() {
  const { t } = useI18n()

  const products = [
    { src: "/rewater-pouch.png", alt: "REWATER pouch 350ml", href: "/products/deepsea" },
    { src: "/rewater-bottle.png", alt: "REWATER bottle", href: "/products/deepsea" },
    { src: "/rewater-can.png", alt: "REWATER can 190ml", href: "/products/deepsea" },
  ]

  return (
    <section id="deepsea" className="w-full scroll-mt-24 py-10 md:py-16">
      {/* Title with green accent */}
      <div className="px-4 md:px-20 animate-fade-in-up">
        <h2 className="text-3xl font-semibold leading-10 text-[#3E454B] md:text-4xl">{t("products", "deepseaSectionTitle")}</h2>
        <div className="mt-4 h-0.5 w-20 bg-[#055239]" />
      </div>

      {/* Centered subtitle */}
      <div className="mt-16 flex flex-col items-center gap-8 px-4 md:mt-24 animate-fade-in-up delay-100">
        <h3 className="text-center text-2xl font-bold leading-10 text-[#3E454B] md:text-[28px]">
          {t("products", "deepseaSubtitle")}
        </h3>
        <div className="h-0.5 w-24 bg-[#055239]" />
      </div>

      {/* Green headline + description */}
      <div className="mx-auto mt-10 flex max-w-[1280px] flex-col items-center gap-10 px-4 md:px-20">
        <p className="text-pretty text-center text-xl font-medium leading-[1.6] text-[#055239] md:text-[30px] animate-fade-in-up delay-200">
          {t("products", "deepseaGreenHeadline")}
        </p>

        <p className="text-pretty text-center text-base leading-[1.6] text-[#3E454B] md:text-xl md:leading-[30px] animate-fade-in-up delay-300">
          {t("products", "deepseaDesc")}
        </p>
      </div>

      {/* Three product images */}
      <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-1 gap-10 px-4 sm:grid-cols-3 md:mt-20 md:px-20">
        {products.map((product, idx) => (
          <Link
            key={product.src}
            href={product.href}
            aria-label={`${product.alt} details`}
            className={`group flex items-center justify-center animate-fade-in-up delay-${(idx + 1) * 100}`}
          >
            <div className="relative aspect-[3/4] w-full max-w-[320px] transition-transform duration-300 group-hover:-translate-y-1">
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 320px"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
