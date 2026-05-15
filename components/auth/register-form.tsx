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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useAuth } from "@/hooks/use-auth"
import { useI18n } from "@/lib/i18n/context"
import { ApiError } from "@/lib/api/client"

export function RegisterForm() {
  const router = useRouter()
  const params = useSearchParams()
  const { t } = useI18n()
  const { register } = useAuth()
  const [submitting, setSubmitting] = useState(false)

  const schema = useMemo(
    () =>
      z
        .object({
          name: z.string().min(2, t("auth", "errNameMin")).max(120),
          email: z
            .string()
            .min(1, t("auth", "errEmailRequired"))
            .email(t("auth", "errEmailInvalid")),
          password: z.string().min(6, t("auth", "errPasswordMin")),
          confirm: z.string().min(1, t("auth", "errConfirmRequired")),
        })
        .refine((d) => d.password === d.confirm, {
          path: ["confirm"],
          message: t("auth", "errConfirmMismatch"),
        }),
    [t],
  )

  type Values = z.infer<typeof schema>

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirm: "" },
  })

  async function onSubmit(values: Values) {
    setSubmitting(true)
    try {
      await register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
      toast.success(t("auth", "successRegister"))
      router.replace(params.get("redirect") || "/dashboard")
    } catch (e) {
      const msg =
        e instanceof ApiError
          ? e.message
          : (e as Error)?.message || t("auth", "failedRegister")
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("auth", "name")}</FormLabel>
              <FormControl>
                <Input
                  autoComplete="name"
                  placeholder={t("auth", "namePlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  autoComplete="new-password"
                  placeholder={t("auth", "passwordPlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormDescription>{t("auth", "passwordHint")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("auth", "confirmPassword")}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="new-password"
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
              <Loader2 className="animate-spin" /> {t("auth", "loadingRegister")}
            </>
          ) : (
            t("auth", "submitRegister")
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          {t("auth", "haveAccount")}{" "}
          <Link
            href={
              params.get("redirect")
                ? `/login?redirect=${encodeURIComponent(params.get("redirect") || "")}`
                : "/login"
            }
            className="font-medium text-foreground hover:underline"
          >
            {t("auth", "goLogin")}
          </Link>
        </p>
      </form>
    </Form>
  )
}
