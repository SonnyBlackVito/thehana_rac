"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ProductCard } from "@/components/shop/product-card"
import { CartButton } from "@/components/shop/cart-button"
import { PaginationBar } from "@/components/shop/pagination-bar"
import { useProducts } from "@/hooks/use-products"
import { useI18n } from "@/lib/i18n/context"

export default function ShopPage() {
  const { t } = useI18n()
  const { items, total, limit, offset, loading, error, setOffset } = useProducts({
    limit: 12,
    offset: 0,
  })

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {t("shop", "pageTitle")}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("shop", "subtitle")}
          </p>
        </div>
        <CartButton />
      </div>

      {error ? (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>{t("common", "error")}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}

      {loading && items.length === 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square w-full rounded-xl" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          {t("shop", "empty")}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <PaginationBar
        total={total}
        limit={limit}
        offset={offset}
        onChange={setOffset}
      />
    </main>
  )
}
