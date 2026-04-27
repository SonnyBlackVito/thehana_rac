"use client"

import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export function ProductGrid() {
  const { t } = useI18n();

  const products = [
    { name: t("products", "gridActivator"), image: "/grid-activator.png", alt: "Blood Activator" },
    { name: t("products", "gridMini"), image: "/grid-activator-mini.png", alt: "Blood Activator MINI" },
    { name: t("products", "gridSeparator"), image: "/grid-blood-separator.png", alt: "Blood Separator" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product, idx) => (
          <li key={product.name} className={`group flex cursor-pointer flex-col animate-fade-in-up delay-${(idx + 1) * 100}`}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#f4f4f4] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.alt}
                fill
                className="object-contain p-10 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Subtle hover tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
            <p className="mt-6 text-center text-base font-medium text-foreground transition-colors duration-300 group-hover:text-primary md:text-lg">
              {product.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
