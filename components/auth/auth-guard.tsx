"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

import { useAuthStore } from "@/lib/auth/store"
import { useI18n } from "@/lib/i18n/context"

interface Props {
  children: React.ReactNode
  redirectTo?: string
}

/**
 * Bọc các page yêu cầu đăng nhập. Chưa đăng nhập sẽ redirect về
 * `/login?redirect=<đường-dẫn-hiện-tại>` để post-login quay lại đúng chỗ.
 */
export function AuthGuard({ children, redirectTo = "/login" }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useI18n()
  const isReady = useAuthStore((s) => s.isReady)
  const accessToken = useAuthStore((s) => s.accessToken)

  useEffect(() => {
    if (!isReady) return
    if (!accessToken) {
      const redirect = encodeURIComponent(pathname || "/")
      router.replace(`${redirectTo}?redirect=${redirect}`)
    }
  }, [accessToken, isReady, pathname, redirectTo, router])

  if (!isReady) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted-foreground">
        {t("auth", "loading")}
      </div>
    )
  }
  if (!accessToken) return null
  return <>{children}</>
}
