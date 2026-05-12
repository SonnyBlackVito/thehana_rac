"use client"

import { request } from "@/lib/api/client"

export interface Post {
  id: string
  title: string
  content: string
  images: string[]
  product_ids: string[]
  author_id: string
  visibility: "public" | "restricted"
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface PageResult<T> {
  items: T[]
  total: number
  limit: number
  offset: number
}

export interface PostListParams {
  limit?: number
  offset?: number
}

export const PostsApi = {
  list(params: PostListParams = {}) {
    return request<PageResult<Post>>({
      method: "GET",
      url: "/posts",
      params,
    })
  },

  get(id: string) {
    return request<Post>({ method: "GET", url: `/posts/${id}` })
  },
}
