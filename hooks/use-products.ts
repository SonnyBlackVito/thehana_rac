"use client"

import { useCallback, useEffect, useState } from "react"

import { ProductsApi, type Product, type ProductListParams } from "@/lib/api/products"

export interface UseProductsResult {
  items: Product[]
  total: number
  limit: number
  offset: number
  loading: boolean
  error: string | null
  reload: () => Promise<void>
  setOffset: (n: number) => void
}

export function useProducts(initial: ProductListParams = { limit: 12, offset: 0 }): UseProductsResult {
  const [limit] = useState(initial.limit ?? 12)
  const [offset, setOffset] = useState(initial.offset ?? 0)
  const [items, setItems] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await ProductsApi.list({ limit, offset })
      setItems(res.items ?? [])
      setTotal(res.total ?? 0)
    } catch (e) {
      setError((e as Error).message ?? "Error")
    } finally {
      setLoading(false)
    }
  }, [limit, offset])

  useEffect(() => {
    void load()
  }, [load])

  return { items, total, limit, offset, loading, error, reload: load, setOffset }
}

export function useProduct(id: string | undefined) {
  const [data, setData] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!id) return
    setLoading(true)
    setError(null)
    try {
      const p = await ProductsApi.get(id)
      setData(p)
    } catch (e) {
      setError((e as Error).message ?? "Error")
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    void load()
  }, [load])

  return { data, loading, error, reload: load }
}
