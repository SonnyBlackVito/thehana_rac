"use client"

import { useCallback, useEffect, useState } from "react"

import {
  BlogsApi,
  type Blog,
  type BlogComment,
  type BlogListParams,
} from "@/lib/api/blogs"

export function useBlogs(initial: BlogListParams = { limit: 9, offset: 0 }) {
  const [limit] = useState(initial.limit ?? 9)
  const [offset, setOffset] = useState(initial.offset ?? 0)
  const [filters] = useState(() => {
    const { limit: _limit, offset: _offset, ...rest } = initial
    return rest
  })
  const [items, setItems] = useState<Blog[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await BlogsApi.list({ ...filters, limit, offset })
      setItems(Array.isArray(res.items) ? res.items : [])
      setTotal(res.total ?? 0)
    } catch (e) {
      setError((e as Error).message ?? "Error")
    } finally {
      setLoading(false)
    }
  }, [filters, limit, offset])

  useEffect(() => {
    void load()
  }, [load])

  return { items, total, limit, offset, loading, error, reload: load, setOffset }
}

export function useBlogBySlug(slug: string | undefined) {
  const [data, setData] = useState<Blog | null>(null)
  const [comments, setComments] = useState<BlogComment[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!slug) return
    setLoading(true)
    setError(null)
    try {
      const blog = await BlogsApi.getBySlug(slug)
      setData(blog)
      const commentRes = await BlogsApi.comments(blog.id, { limit: 50, offset: 0 })
      setComments(Array.isArray(commentRes.items) ? commentRes.items : [])
    } catch (e) {
      setError((e as Error).message ?? "Error")
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    void load()
  }, [load])

  return { data, comments, loading, error, reload: load }
}
