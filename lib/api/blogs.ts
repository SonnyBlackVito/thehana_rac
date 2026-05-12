"use client"

import { request } from "@/lib/api/client"

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
  updated_at: string
}

export interface Blog {
  id: string
  title: string
  slug: string
  summary?: string
  content: string
  cover_image?: string
  images: string[]
  author_id: string
  category_id?: string
  tags: string[]
  status: "draft" | "published" | "archived"
  views_count: number
  published_at?: string
  created_at: string
  updated_at: string
}

export interface BlogComment {
  id: string
  blog_id: string
  user_id: string
  user?: {
    id: string
    email: string
    name: string
    full_name?: string
    avatar_url: string
  }
  content: string
  is_hidden: boolean
  created_at: string
}

export interface PageResult<T> {
  items: T[]
  total: number
  limit: number
  offset: number
}

export interface BlogListParams {
  q?: string
  category_id?: string
  tag?: string
  status?: "draft" | "published" | "archived"
  limit?: number
  offset?: number
}

export const BlogsApi = {
  categories(params: { limit?: number; offset?: number } = {}) {
    return request<PageResult<BlogCategory>>({
      method: "GET",
      url: "/blog-categories",
      params,
    })
  },

  list(params: BlogListParams = {}) {
    return request<PageResult<Blog>>({
      method: "GET",
      url: "/blogs",
      params,
    })
  },

  get(id: string) {
    return request<Blog>({ method: "GET", url: `/blogs/${id}` })
  },

  getBySlug(slug: string) {
    return request<Blog>({ method: "GET", url: `/blogs/slug/${slug}` })
  },

  comments(blogId: string, params: { limit?: number; offset?: number } = {}) {
    return request<PageResult<BlogComment>>({
      method: "GET",
      url: `/blogs/${blogId}/comments`,
      params,
    })
  },

  addComment(blogId: string, content: string) {
    return request<BlogComment>({
      method: "POST",
      url: `/blogs/${blogId}/comments`,
      data: { content },
    })
  },
}
