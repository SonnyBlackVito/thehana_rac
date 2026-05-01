"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  productId: string
  name: string
  price: number
  image?: string
  quantity: number
  stock: number
}

interface CartState {
  items: CartItem[]
  isHydrated: boolean
  add: (item: Omit<CartItem, "quantity">, qty?: number) => void
  setQuantity: (productId: string, qty: number) => void
  remove: (productId: string) => void
  clear: () => void
  totalQuantity: () => number
  subtotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isHydrated: false,

      add: (item, qty = 1) => {
        if (qty <= 0) return
        const existing = get().items.find((i) => i.productId === item.productId)
        if (existing) {
          const next = Math.min(existing.quantity + qty, item.stock || Infinity)
          set({
            items: get().items.map((i) =>
              i.productId === item.productId ? { ...i, quantity: next } : i,
            ),
          })
        } else {
          const start = Math.min(qty, item.stock || Infinity)
          set({ items: [...get().items, { ...item, quantity: start }] })
        }
      },

      setQuantity: (productId, qty) => {
        set({
          items: get()
            .items.map((i) => {
              if (i.productId !== productId) return i
              const next = Math.max(1, Math.min(qty, i.stock || Infinity))
              return { ...i, quantity: next }
            }),
        })
      },

      remove: (productId) => {
        set({ items: get().items.filter((i) => i.productId !== productId) })
      },

      clear: () => set({ items: [] }),

      totalQuantity: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),

      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: "thehana_rac_cart",
      partialize: (s) => ({ items: s.items }),
      onRehydrateStorage: () => (state) => {
        if (state) state.isHydrated = true
      },
    },
  ),
)
