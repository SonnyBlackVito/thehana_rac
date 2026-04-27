"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export function ProductsSection() {
  const { locale, t } = useI18n();

  const products = [
    {
      title: t("productsSection", "activatorTitle"),
      description:
        locale === "ko"
          ? ["화학 첨가물 없이, 오직", "내 혈액으로 완성하는", "자가 치유의 혁신"]
          : ["Without chemical additives,", "completed only with my blood,", "innovation in self-healing"],
      image: "/home-product-activator.png",
      imageAlt:
        locale === "ko"
          ? "혈액 활성화기 - ACT PRO PRP 활성화 장비"
          : "Blood Activator - ACT PRO PRP Activation Device",
      background: "bg-secondary",
      showMore: true,
      href: "/products/activator",
    },
    {
      title: t("productsSection", "revercellTitle"),
      description:
        locale === "ko"
          ? ["세포의 시간을 되돌리는", "필수 에너지 루틴"]
          : ["Turning back time on cells,", "essential energy routine"],
      image: "/home-product-bloodbag.png",
      imageAlt: locale === "ko" ? "리버셀 주사 - 혈액 백" : "Revercell Injection - Blood Bag",
      background: "bg-secondary",
      href: "/products/revercell",
    },
    {
      title: t("productsSection", "deepseaTitle"),
      description:
        locale === "ko"
          ? ["마시는 순간 시작되는", "리버스 에이징"]
          : ["Reverse aging begins", "the moment you drink"],
      image: "/home-product-rewater.png",
      imageAlt: locale === "ko" ? "심해수 REWATER 파우치" : "Deep Sea Water REWATER Pouch",
      background: "bg-secondary",
      href: "/products/deepsea",
    },
  ];

  return (
    <section
      aria-labelledby="products-heading"
      className="w-full bg-background pb-14 pt-6 sm:pb-20 sm:pt-8"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 pb-12 text-center">
          <div className="flex items-center gap-3">
            <h2
              id="products-heading"
              className="text-2xl font-bold text-foreground md:text-[28px]"
            >
              {t("productsSection", "heading")}
            </h2>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              {t("productsSection", "more")}
            </Link>
          </div>
          <p className="max-w-2xl text-pretty text-[15px] leading-relaxed text-brand-text md:text-base">
            {t("productsSection", "desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href || "#"}
              className={`group relative flex flex-col items-center overflow-hidden ${product.background} pt-10 md:pt-14 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              {/* Hover background color overlay */}
              <div
                className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                aria-hidden="true"
              />

              {/* top accent line */}
              <div
                className="absolute left-1/2 top-0 z-10 h-1 w-20 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />

              <header className="relative z-10 px-6 text-center">
                <h3 className="text-xl font-bold text-foreground md:text-2xl transition-colors group-hover:text-primary">
                  {product.title}
                </h3>
                <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-brand-text md:text-base">
                  {product.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </header>

              <div className="relative z-10 mt-6 aspect-square w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />

                {product.showMore ? (
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/10 px-5 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-foreground group-hover:scale-105">
                    {t("productsSection", "more")}
                  </span>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
