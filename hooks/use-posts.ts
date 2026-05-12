"use client"

import { useCallback, useEffect, useState } from "react"

import { PostsApi, type Post, type PostListParams } from "@/lib/api/posts"

export function usePosts(initial: PostListParams = { limit: 6, offset: 0 }) {
  const [limit] = useState(initial.limit ?? 6)
  const [offset, setOffset] = useState(initial.offset ?? 0)
  const [items, setItems] = useState<Post[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await PostsApi.list({ limit, offset })
      setItems(Array.isArray(res.items) ? res.items : [])
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
