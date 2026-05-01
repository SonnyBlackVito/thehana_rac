"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useI18n } from "@/lib/i18n/context"
import { formatCurrency } from "@/lib/format"
import type { Product } from "@/lib/api/products"

export function ProductCard({ product }: { product: Product }) {
  const { t, locale } = useI18n()
  const cover = product.images?.[0]
  const inStock = product.stock > 0

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block focus:outline-none"
    >
      <Card className="h-full overflow-hidden transition-all group-hover:shadow-md">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full overflow-hidden bg-muted">
            {cover ? (
              <Image
                src={cover}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                no image
              </div>
            )}
            <div className="absolute right-2 top-2">
              <Badge variant={inStock ? "secondary" : "destructive"}>
                {inStock ? t("shop", "inStock") : t("shop", "outOfStock")}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-1 p-4">
          <CardTitle className="line-clamp-2 text-base">{product.name}</CardTitle>
          {product.description ? (
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {product.description}
            </p>
          ) : null}
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <span className="text-lg font-semibold">
            {formatCurrency(product.price, locale)}
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
