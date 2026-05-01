"use client"

import { useEffect } from "react"

import { AuthApi } from "@/lib/api/auth"
import { useAuthStore } from "@/lib/auth/store"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const hydrate = useAuthStore((s) => s.hydrate)
  const accessToken = useAuthStore((s) => s.accessToken)
  const setUser = useAuthStore((s) => s.setUser)

  useEffect(() => {
    hydrate()
  }, [hydrate])

  useEffect(() => {
    if (!accessToken) return
    let alive = true
    AuthApi.me()
      .then((u) => {
        if (alive) setUser(u)
      })
      .catch(() => {
        // 401 đã xử lý ở axios interceptor (refresh hoặc clear) — bỏ qua ở đây.
      })
    return () => {
      alive = false
    }
  }, [accessToken, setUser])

  return <>{children}</>
}
