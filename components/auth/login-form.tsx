"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useAuth } from "@/hooks/use-auth"
import { useI18n } from "@/lib/i18n/context"
import { ApiError } from "@/lib/api/client"

export function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const { t } = useI18n()
  const { login } = useAuth()
  const [submitting, setSubmitting] = useState(false)

  const schema = useMemo(
    () =>
      z.object({
        email: z
          .string()
          .min(1, t("auth", "errEmailRequired"))
          .email(t("auth", "errEmailInvalid")),
        password: z.string().min(6, t("auth", "errPasswordMin")),
      }),
    [t],
  )

  type Values = z.infer<typeof schema>

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  })

  async function onSubmit(values: Values) {
    setSubmitting(true)
    try {
      await login(values)
      toast.success(t("auth", "successLogin"))
      router.replace(params.get("redirect") || "/dashboard")
    } catch (e) {
      const msg =
        e instanceof ApiError
          ? e.message
          : (e as Error)?.message || t("auth", "failedLogin")
      toast.error(msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("auth", "email")}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder={t("auth", "emailPlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("auth", "password")}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder={t("auth", "passwordPlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="animate-spin" /> {t("auth", "loadingLogin")}
            </>
          ) : (
            t("auth", "submitLogin")
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          {t("auth", "noAccount")}{" "}
          <Link
            href={
              params.get("redirect")
                ? `/register?redirect=${encodeURIComponent(params.get("redirect") || "")}`
                : "/register"
            }
            className="font-medium text-foreground hover:underline"
          >
            {t("auth", "goRegister")}
          </Link>
        </p>
      </form>
    </Form>
  )
}
