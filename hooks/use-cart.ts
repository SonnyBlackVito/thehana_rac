"use client"

import { useEffect } from "react"

import { useCartStore } from "@/lib/cart/store"

/**
 * `useCart` exposes the cart store with SSR-safe hydration. Always returns the
 * store; `isHydrated` becomes true once localStorage has been read.
 */
export function useCart() {
  const items = useCartStore((s) => s.items)
  const isHydrated = useCartStore((s) => s.isHydrated)
  const add = useCartStore((s) => s.add)
  const setQuantity = useCartStore((s) => s.setQuantity)
  const remove = useCartStore((s) => s.remove)
  const clear = useCartStore((s) => s.clear)

  // Đảm bảo store đã rehydrate ở client
  useEffect(() => {
    if (!useCartStore.persist?.hasHydrated()) {
      void useCartStore.persist?.rehydrate()
    }
  }, [])

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0)

  return {
    items,
    isHydrated,
    add,
    setQuantity,
    remove,
    clear,
    subtotal,
    totalQuantity,
  }
}
