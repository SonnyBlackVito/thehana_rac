"use client"

import { request } from "@/lib/api/client"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  images: string[]
  category_id?: string
  min_tier?: "silver" | "gold" | "platinum"
  created_by: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface PageResult<T> {
  items: T[]
  total: number
  limit: number
  offset: number
}

export interface ProductListParams {
  limit?: number
  offset?: number
}

export const ProductsApi = {
  list(params: ProductListParams = {}) {
    return request<PageResult<Product>>({
      method: "GET",
      url: "/products",
      params,
    })
  },
  get(id: string) {
    return request<Product>({ method: "GET", url: `/products/${id}` })
  },
}
