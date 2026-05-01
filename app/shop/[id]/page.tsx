"use client"

import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"
import { Loader2, ShoppingCart } from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CartButton } from "@/components/shop/cart-button"
import { QuantityStepper } from "@/components/shop/quantity-stepper"
import { useProduct } from "@/hooks/use-products"
import { useCart } from "@/hooks/use-cart"
import { useI18n } from "@/lib/i18n/context"
import { formatCurrency } from "@/lib/format"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const { t, locale } = useI18n()
  const { data, loading, error } = useProduct(id)
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (loading) {
    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Skeleton className="aspect-square w-full rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </main>
    )
  }

  if (error || !data) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-12">
        <Alert variant="destructive">
          <AlertTitle>{t("common", "error")}</AlertTitle>
          <AlertDescription>{error ?? t("shop", "productNotFound")}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <Link
            href="/shop"
            className="text-sm text-muted-foreground hover:underline"
          >
            {t("shop", "backToShop")}
          </Link>
        </div>
      </main>
    )
  }

  const inStock = data.stock > 0
  const cover = data.images?.[activeImg] ?? data.images?.[0]

  function handleAdd() {
    if (!data) return
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
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/shop"
          className="text-sm text-muted-foreground hover:underline"
        >
          {t("shop", "backToShop")}
        </Link>
        <CartButton />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
            {cover ? (
              <Image
                src={cover}
                alt={data.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                no image
              </div>
            )}
          </div>
          {data.images && data.images.length > 1 ? (
            <div className="flex flex-wrap gap-2">
              {data.images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`relative size-16 overflow-hidden rounded-md border ${
                    i === activeImg ? "ring-2 ring-foreground" : "ring-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-5">
          <div>
            <Badge variant={inStock ? "secondary" : "destructive"} className="mb-3">
              {inStock ? t("shop", "inStock") : t("shop", "outOfStock")}
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight">{data.name}</h1>
            <p className="mt-2 text-3xl font-semibold">
              {formatCurrency(data.price, locale)}
            </p>
          </div>

          {data.description ? (
            <div>
              <h2 className="mb-2 text-sm font-medium text-muted-foreground">
                {t("shop", "description")}
              </h2>
              <p className="whitespace-pre-line leading-relaxed">{data.description}</p>
            </div>
          ) : null}

          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{t("shop", "quantity")}</span>
            <QuantityStepper
              value={qty}
              onChange={setQty}
              min={1}
              max={Math.max(1, data.stock)}
              disabled={!inStock}
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button onClick={handleAdd} disabled={!inStock}>
              <ShoppingCart /> {t("shop", "addToCart")}
            </Button>
            <Button
              variant="default"
              onClick={() => {
                handleAdd()
                window.location.href = "/cart"
              }}
              disabled={!inStock}
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              {t("shop", "buyNow")}
            </Button>
            {!inStock ? (
              <span className="inline-flex items-center text-sm text-muted-foreground">
                <Loader2 className="mr-2 size-4 animate-spin" />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  )
}
