"use client"

import { Suspense } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RegisterForm } from "@/components/auth/register-form"
import { useI18n } from "@/lib/i18n/context"

export default function RegisterPage() {
  const { t } = useI18n()
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-md items-center px-4 py-12">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{t("auth", "registerTitle")}</CardTitle>
          <CardDescription>{t("auth", "registerDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={null}>
            <RegisterForm />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  )
}
