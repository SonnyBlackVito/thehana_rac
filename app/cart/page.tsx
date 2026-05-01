"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { QuantityStepper } from "@/components/shop/quantity-stepper"
import { useCart } from "@/hooks/use-cart"
import { useI18n } from "@/lib/i18n/context"
import { formatCurrency } from "@/lib/format"

export default function CartPage() {
  const { t, locale } = useI18n()
  const { items, isHydrated, setQuantity, remove, clear, subtotal } = useCart()

  if (!isHydrated) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-12 text-sm text-muted-foreground">
        {t("common", "loading")}
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold">{t("cart", "pageTitle")}</h1>
        <p className="mt-3 text-muted-foreground">{t("cart", "empty")}</p>
        <Button asChild className="mt-6">
          <Link href="/shop">{t("cart", "emptyCta")}</Link>
        </Button>
      </main>
    )
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">
        {t("cart", "pageTitle")}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader className="grid grid-cols-[64px_1fr_120px_140px_40px] items-center gap-3 px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:px-6">
            <span />
            <span>{t("cart", "item")}</span>
            <span className="text-right">{t("cart", "price")}</span>
            <span className="text-center">{t("cart", "quantity")}</span>
            <span />
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            {items.map((it, idx) => (
              <div
                key={it.productId}
                className={`grid grid-cols-[64px_1fr_120px_140px_40px] items-center gap-3 px-4 py-3 sm:px-6 ${
                  idx > 0 ? "border-t" : ""
                }`}
              >
                <Link href={`/shop/${it.productId}`} className="relative block size-16 overflow-hidden rounded-md bg-muted">
                  {it.image ? (
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  ) : null}
                </Link>
                <div className="min-w-0">
                  <Link
                    href={`/shop/${it.productId}`}
                    className="line-clamp-2 text-sm font-medium hover:underline"
                  >
                    {it.name}
                  </Link>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("cart", "subtotal")}: {formatCurrency(it.price * it.quantity, locale)}
                  </p>
                </div>
                <div className="text-right text-sm">
                  {formatCurrency(it.price, locale)}
                </div>
                <div className="flex justify-center">
                  <QuantityStepper
                    value={it.quantity}
                    onChange={(n) => setQuantity(it.productId, n)}
                    min={1}
                    max={Math.max(1, it.stock)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => remove(it.productId)}
                  className="text-muted-foreground hover:text-destructive"
                  aria-label={t("cart", "remove")}
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t px-4 py-3 sm:px-6">
            <Button variant="ghost" size="sm" onClick={clear}>
              {t("cart", "clear")}
            </Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/shop">{t("cart", "emptyCta")}</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>{t("cart", "summary")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{t("cart", "summarySubtotal")}</span>
              <span className="font-medium">{formatCurrency(subtotal, locale)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{t("cart", "summaryShipping")}</span>
              <span>{t("cart", "summaryShippingCalculated")}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-base">
              <span className="font-medium">{t("cart", "summaryTotal")}</span>
              <span className="font-semibold">{formatCurrency(subtotal, locale)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/checkout">{t("cart", "proceedCheckout")}</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
