"use client"

import Image from "next/image"
import Link from "next/link"
import { use, useMemo, useState } from "react"
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Heart,
  Images,
  Layers,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Tag,
} from "lucide-react"
import { toast } from "sonner"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { CartButton } from "@/components/shop/cart-button"
import { QuantityStepper } from "@/components/shop/quantity-stepper"
import { useCart } from "@/hooks/use-cart"
import { useProduct, useProducts } from "@/hooks/use-products"
import type { Product } from "@/lib/api/products"
import { formatCurrency } from "@/lib/format"
import { useI18n } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/translations"

type DetailRow = {
  label: string
  value: string
}

function fieldLabels(locale: Locale) {
  return locale === "ko"
    ? {
        home: "홈",
        shop: "상품",
        details: "상품 상세",
        category: "카테고리",
        categoryId: "카테고리 ID",
        created: "등록일",
        createdBy: "등록자 ID",
        description: "상품 설명",
        gallery: "상품 이미지",
        imageCount: "이미지 수",
        minTier: "구매 등급",
        price: "가격",
        productId: "상품 ID",
        published: "판매중",
        related: "관련 상품",
        specs: "상품 정보",
        status: "상태",
        stock: "재고",
        updated: "수정일",
        wishlist: "찜하기",
      }
    : {
        home: "Home",
        shop: "Shop",
        details: "Product Details",
        category: "Category",
        categoryId: "Category ID",
        created: "Created",
        createdBy: "Created By",
        description: "Description",
        gallery: "Gallery",
        imageCount: "Images",
        minTier: "Required Tier",
        price: "Price",
        productId: "Product ID",
        published: "Active",
        related: "Related Products",
        specs: "Product Information",
        status: "Status",
        stock: "Stock",
        updated: "Updated",
        wishlist: "Add to wishlist",
      }
}

function formatDate(value: string, locale: Locale) {
  if (!value) return "-"
  return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(value))
}

function tierLabel(tier: Product["min_tier"], locale: Locale) {
  if (!tier) return locale === "ko" ? "제한 없음" : "No restriction"
  const labels = {
    silver: locale === "ko" ? "Silver 이상" : "Silver or higher",
    gold: locale === "ko" ? "Gold 이상" : "Gold or higher",
    platinum: locale === "ko" ? "Platinum 전용" : "Platinum only",
  }
  return labels[tier]
}

function buildDetailRows(product: Product, locale: Locale): DetailRow[] {
  const labels = fieldLabels(locale)
  return [
    { label: labels.productId, value: product.id },
    { label: labels.price, value: formatCurrency(product.price, locale) },
    { label: labels.stock, value: `${product.stock}` },
    { label: labels.minTier, value: tierLabel(product.min_tier, locale) },
    { label: labels.categoryId, value: product.category_id || "-" },
    { label: labels.status, value: product.is_active ? labels.published : locale === "ko" ? "비활성" : "Inactive" },
    { label: labels.createdBy, value: product.created_by || "-" },
    { label: labels.created, value: formatDate(product.created_at, locale) },
    { label: labels.updated, value: formatDate(product.updated_at, locale) },
  ]
}

function ProductDetailSkeleton() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-12 md:px-8 md:py-20">
      <Skeleton className="mb-8 h-5 w-64" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Skeleton className="aspect-square w-full rounded-[24px]" />
        <div className="space-y-5 pt-2 md:pt-6">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-12 w-4/5" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-24 w-full" />
          <div className="space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const { t, locale } = useI18n()
  const labels = fieldLabels(locale)
  const { data, loading, error } = useProduct(id)
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)

  const detailRows = useMemo(() => (data ? buildDetailRows(data, locale) : []), [data, locale])

  if (loading) {
    return <ProductDetailSkeleton />
  }

  if (error || !data) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-12">
        <Alert variant="destructive">
          <AlertTitle>{t("common", "error")}</AlertTitle>
          <AlertDescription>{error ?? t("shop", "productNotFound")}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <Link href="/shop" className="text-sm text-muted-foreground hover:underline">
            {t("shop", "backToShop")}
          </Link>
        </div>
      </main>
    )
  }

  const gallery = data.images?.filter(Boolean) ?? []
  const cover = gallery[activeImg] ?? gallery[0]
  const inStock = data.stock > 0
  const canBuy = data.is_active && inStock
  const description = data.description?.trim()

  const highlights = [
    `${labels.price}: ${formatCurrency(data.price, locale)}`,
    `${labels.stock}: ${data.stock}`,
    `${labels.minTier}: ${tierLabel(data.min_tier, locale)}`,
    `${labels.imageCount}: ${gallery.length}`,
  ]

  function handleAdd() {
    if (!data || !canBuy) return
    add(
      {
        productId: data.id,
        name: data.name,
        price: data.price,
        image: data.images?.[0],
        stock: data.stock,
      },
      qty,
    )
    toast.success(t("shop", "addedToast"), {
      action: {
        label: t("shop", "cartLink"),
        onClick: () => {
          window.location.href = "/cart"
        },
      },
    })
  }

  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 py-12 md:px-8 md:py-20">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            {labels.home}
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link href="/shop" className="transition-colors hover:text-primary">
            {labels.shop}
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="max-w-[220px] truncate text-foreground">{data.name}</span>
        </nav>
        <CartButton />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] border border-border bg-gradient-to-br from-[#F8F9FA] via-white to-[#EBFFEC]/40 shadow-sm">
            <Badge
              variant={canBuy ? "secondary" : "destructive"}
              className="absolute left-5 top-5 z-10 rounded-full px-3 py-1 shadow-sm"
            >
              {canBuy ? t("shop", "inStock") : t("shop", "outOfStock")}
            </Badge>
            {cover ? (
              <Image
                src={cover}
                alt={data.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8 transition-transform duration-700 hover:scale-105 md:p-10"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                no image
              </div>
            )}
          </div>

          {gallery.length > 1 ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  aria-label={`${labels.gallery} ${i + 1}`}
                  className={`relative h-20 w-20 overflow-hidden rounded-[8px] border bg-white transition ${
                    i === activeImg ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"
                  }`}
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-contain p-2" />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-5 pt-2 md:pt-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <Tag className="h-3.5 w-3.5" aria-hidden="true" />
              {tierLabel(data.min_tier, locale)}
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">{data.name}</h1>
            <p className="mt-3 text-2xl font-bold text-primary md:text-3xl">{formatCurrency(data.price, locale)}</p>
          </div>

          {description ? (
            <p className="whitespace-pre-line text-[15px] leading-relaxed text-foreground/75 md:text-base">
              {description}
            </p>
          ) : (
            <p className="text-[15px] leading-relaxed text-foreground/60 md:text-base">
              {locale === "ko" ? "등록된 상품 설명이 없습니다." : "No product description has been added yet."}
            </p>
          )}

          <ul className="mt-2 space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{t("shop", "quantity")}</span>
            <QuantityStepper value={qty} onChange={setQty} min={1} max={Math.max(1, data.stock)} disabled={!canBuy} />
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <Button onClick={handleAdd} disabled={!canBuy} className="h-14 flex-1 rounded-full text-base font-semibold">
              <ShoppingCart className="h-5 w-5" /> {t("shop", "addToCart")}
            </Button>
            <Button
              type="button"
              onClick={() => {
                handleAdd()
                if (canBuy) window.location.href = "/cart"
              }}
              disabled={!canBuy}
              className="h-14 flex-1 rounded-full bg-foreground text-base font-semibold text-background hover:bg-foreground/90"
            >
              {t("shop", "buyNow")}
            </Button>
            <button
              type="button"
              onClick={() => setWishlisted((w) => !w)}
              aria-label={labels.wishlist}
              aria-pressed={wishlisted}
              className={`flex h-14 w-full items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 sm:w-14 ${
                wishlisted
                  ? "border-destructive bg-destructive/10 text-destructive"
                  : "border-border bg-background text-foreground/60 hover:border-destructive hover:text-destructive"
              }`}
            >
              <Heart className={`h-5 w-5 transition-all ${wishlisted ? "fill-destructive" : ""}`} />
            </button>
          </div>

          <Link
            href="http://pf.kakao.com/_uFxbzb/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            {locale === "ko" ? "가격/구매 문의" : "Price / Purchase Inquiry"}
          </Link>
        </div>
      </div>

      <section className="mt-20 md:mt-28">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">{labels.details}</h2>
        <div className="mx-auto h-0.5 w-16 bg-primary" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DetailFeature icon={Sparkles} title={labels.price} value={formatCurrency(data.price, locale)} />
          <DetailFeature icon={PackageCheck} title={labels.stock} value={`${data.stock}`} />
          <DetailFeature icon={ShieldCheck} title={labels.minTier} value={tierLabel(data.min_tier, locale)} />
          <DetailFeature icon={Images} title={labels.imageCount} value={`${gallery.length}`} />
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">{labels.specs}</h2>
          <div className="mb-8 h-0.5 w-16 bg-primary" />
          <dl className="overflow-hidden rounded-[16px] border border-border bg-card">
            {detailRows.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-[120px_1fr] gap-4 px-5 py-4 text-sm md:grid-cols-[150px_1fr] md:text-base ${
                  idx !== detailRows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="font-medium text-foreground/70">{row.label}</dt>
                <dd className="break-all text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">{labels.gallery}</h2>
          <div className="mb-8 h-0.5 w-16 bg-primary" />
          {gallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((src, idx) => (
                <div key={src + idx} className="relative aspect-square overflow-hidden rounded-[12px] border border-border bg-white">
                  <Image src={src} alt={`${data.name} ${idx + 1}`} fill sizes="(max-width: 768px) 50vw, 280px" className="object-contain p-4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-h-48 items-center justify-center rounded-[16px] border border-border bg-card text-sm text-muted-foreground">
              no image
            </div>
          )}
        </div>
      </section>

      <RelatedProducts currentId={data.id} />
    </main>
  )
}

function DetailFeature({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Award
  title: string
  value: string
}) {
  return (
    <div className="group flex flex-col gap-3 rounded-[16px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="break-words text-sm leading-relaxed text-foreground/70">{value}</p>
    </div>
  )
}

function RelatedProducts({ currentId }: { currentId: string }) {
  const { locale } = useI18n()
  const labels = fieldLabels(locale)
  const { items } = useProducts({ limit: 4, offset: 0 })
  const related = items.filter((product) => product.id !== currentId).slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="mt-20 md:mt-28">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">{labels.related}</h2>
      <div className="mx-auto h-0.5 w-16 bg-primary" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="group flex flex-col overflow-hidden rounded-[16px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-secondary to-accent/30">
              {product.images?.[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                  no image
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 p-5">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary/80">
                <Layers className="h-3.5 w-3.5" />
                {tierLabel(product.min_tier, locale)}
              </span>
              <h3 className="line-clamp-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary md:text-lg">
                {product.name}
              </h3>
              {product.description ? (
                <p className="line-clamp-2 text-sm text-foreground/60">{product.description}</p>
              ) : null}
              <span className="mt-2 text-base font-bold text-primary">{formatCurrency(product.price, locale)}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
