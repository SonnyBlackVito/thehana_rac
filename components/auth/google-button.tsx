"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { useI18n } from "@/lib/i18n/context"

export function GoogleButton({ label }: { label?: string }) {
  const { t } = useI18n()
  const { startGoogleLogin } = useAuth()
  const [loading, setLoading] = useState(false)

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      disabled={loading}
      onClick={async () => {
        try {
          setLoading(true)
          await startGoogleLogin()
        } catch (e) {
          setLoading(false)
          toast.error(
            e instanceof Error ? e.message : t("auth", "googleGenericError"),
          )
        }
      }}
    >
      <GoogleIcon />
      {loading ? t("auth", "googleConnecting") : label ?? t("auth", "continueGoogle")}
    </Button>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.8 6.4 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.8 6.9 29.1 5 24 5 16 5 9 9.6 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 43c5.1 0 9.7-1.9 13.2-5.1l-6.1-5.1c-2 1.4-4.5 2.2-7.1 2.2-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9 38.4 16 43 24 43z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.1 5.1C40.7 35.7 43.5 30.3 43.5 24c0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  )
}
