"use client"

import { use } from "react"

import { PressDetailView } from "@/components/news/press-detail-view"

export default function PressDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  return <PressDetailView slug={slug} />
}
