"use client"

import { Suspense, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useAuth } from "@/hooks/use-auth"
import { useI18n } from "@/lib/i18n/context"

function redirectFromState(state?: string | null) {
  if (!state) return "/dashboard"
  const parsed = new URLSearchParams(state)
  const redirect = parsed.get("redirect")
  if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
    return redirect
  }
  return "/dashboard"
}

function GoogleCallbackInner() {
  const router = useRouter()
  const params = useSearchParams()
  const { t } = useI18n()
  const { completeGoogleLogin } = useAuth()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const code = params.get("code")
    const state = params.get("state") || undefined
    if (!code) {
      setError(t("auth", "googleMissingCode"))
      return
    }
    completeGoogleLogin(code, state)
      .then(() => router.replace(redirectFromState(state)))
      .catch((e) =>
        setError(e?.message || t("auth", "googleGenericError")),
      )
  }, [completeGoogleLogin, params, router, t])

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>{t("auth", "googleFailedTitle")}</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }
  return (
    <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
      <Loader2 className="size-4 animate-spin" /> {t("auth", "googleVerifying")}
    </p>
  )
}

function GoogleCallbackCard() {
  const { t } = useI18n()
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{t("auth", "googleCallbackTitle")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<p className="text-sm text-muted-foreground">{t("common", "loading")}</p>}>
          <GoogleCallbackInner />
        </Suspense>
      </CardContent>
    </Card>
  )
}

export default function GoogleCallbackPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md items-center px-4 py-12">
      <GoogleCallbackCard />
    </main>
  )
}
