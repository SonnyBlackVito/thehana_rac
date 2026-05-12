import type { Blog } from "@/lib/api/blogs"
import type { Post } from "@/lib/api/posts"
import type { PressItem } from "./news-data"

export function apiBlogToPressItem(blog: Blog): PressItem {
  const date = blog.published_at ?? blog.created_at

  return {
    image: blog.cover_image || blog.images?.[0] || "/placeholder.svg",
    title: {
      ko: blog.title,
      en: blog.title,
    },
    body: {
      ko: blog.summary || blog.content,
      en: blog.summary || blog.content,
    },
    source: blog.tags?.find((tag) => tag !== "press" && tag !== "thehana-rac") ?? "THE HANA R.A.C",
    date: date ? new Date(date).toLocaleDateString("ko-KR") : "",
    slug: blog.slug,
  }
}

export function apiPostToNewsItem(post: Post) {
  return {
    category: "event" as const,
    title: {
      ko: post.title,
      en: post.title,
    },
    date: post.created_at ? new Date(post.created_at).toLocaleDateString("ko-KR") : "",
    image: post.images?.[0] || "/placeholder.svg",
    href: "/press",
    body: post.content,
  }
}
