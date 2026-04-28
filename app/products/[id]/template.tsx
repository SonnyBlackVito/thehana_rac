"use client"

import type { ReactNode } from "react"

export default function ProductDetailTemplate({ children }: { children: ReactNode }) {
  return <div className="animate-fade-in">{children}</div>
}
