"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

/**
 * Floating cart button — for trang shop / detail. Hiển thị badge số lượng.
 */
export function CartButton() {
  const { items, isHydrated } = useCart()
  const count = isHydrated ? items.reduce((s, i) => s + i.quantity, 0) : 0

  return (
    <Link href="/cart" aria-label="Cart">
      <Button variant="outline" size="sm" className="relative">
        <ShoppingCart />
        {count > 0 ? (
          <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
            {count}
          </span>
        ) : null}
      </Button>
    </Link>
  )
}
