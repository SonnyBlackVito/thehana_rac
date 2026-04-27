"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, ShoppingCart, MessageSquare } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { productsData, ProductDetail as ProductType } from "@/lib/i18n/products-data"

export function ProductDetail({ id }: { id: string }) {
  const { locale, t } = useI18n()
  const product = productsData.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-foreground">Product not found</h2>
        <p className="text-muted-foreground">The product you are looking for does not exist or has been moved.</p>
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Products
        </Link>
      </div>
    )
  }

  const name = product.name[locale] || product.name.en
  const subtitle = product.subtitle[locale] || product.subtitle.en
  const description = product.description[locale] || product.description.en
  const price = product.price[locale] || product.price.en

  return (
    <section className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Breadcrumbs & Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/products" 
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {locale === "ko" ? "제품 목록으로 돌아가기" : "Back to Products"}
          </Link>
          <nav className="hidden text-xs font-medium uppercase tracking-wider text-muted-foreground sm:block">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Column */}
          <div className="relative animate-fade-in-up">
            <div className="group relative aspect-square overflow-hidden rounded-3xl bg-secondary shadow-2xl">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={name}
                fill
                priority
                className="object-contain p-8 transition-transform duration-700 group-hover:scale-105 sm:p-12"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
          </div>

          {/* Content Column */}
          <div className="flex flex-col justify-center animate-fade-in-up delay-200">
            <div className="mb-6 space-y-2">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                {subtitle}
              </span>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                {name}
              </h1>
            </div>

            <div className="mb-8 border-l-4 border-primary/20 pl-6">
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {description}
              </p>
            </div>

            {/* Features list */}
            <div className="mb-10 space-y-8">
              {product.features.map((feature, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                    {feature.title[locale] || feature.title.en}
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{item[locale] || item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="mt-auto space-y-6 rounded-3xl bg-secondary/50 p-8 shadow-inner ring-1 ring-border">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {locale === "ko" ? "판매 가격" : "Investment"}
                </span>
                <span className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
                  {price}
                </span>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex flex-[2] items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-primary/90 hover:shadow-primary/20 active:scale-[0.98]">
                  <ShoppingCart className="h-5 w-5" />
                  {locale === "ko" ? "지금 구매하기" : "Purchase Now"}
                </button>
                <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-primary/20 bg-transparent px-8 py-4 font-bold text-primary transition-all hover:bg-primary/5 active:scale-[0.98]">
                  <MessageSquare className="h-5 w-5" />
                  {locale === "ko" ? "상담하기" : "Inquiry"}
                </button>
              </div>
              
              <p className="text-center text-xs text-muted-foreground">
                {locale === "ko" 
                  ? "* 본 제품은 의료진의 상담이 필요할 수 있습니다." 
                  : "* Professional consultation may be required for this product."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
