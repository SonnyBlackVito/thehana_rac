"use client"

import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthGuard } from "@/components/auth/auth-guard"
import { useAuth } from "@/hooks/use-auth"
import { useI18n } from "@/lib/i18n/context"

function DashboardInner() {
  const { user, signOut } = useAuth()
  const { t } = useI18n()
  if (!user) return null

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {t("dashboard", "eyebrow")}
          </p>
          <h1 className="text-2xl font-semibold">
            {t("dashboard", "greet")}, {user.name} 👋
          </h1>
        </div>
        <Button variant="ghost" size="sm" onClick={signOut}>
          <LogOut /> {t("dashboard", "signOut")}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("dashboard", "accountInfo")}</CardTitle>
          <CardDescription>{t("dashboard", "accountInfoDesc")}</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-muted-foreground">{t("dashboard", "fieldName")}</dt>
              <dd className="font-medium">{user.name}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{t("dashboard", "fieldEmail")}</dt>
              <dd className="font-mono">{user.email}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{t("dashboard", "fieldRole")}</dt>
              <dd>
                <Badge variant="secondary" className="uppercase">
                  {user.role}
                </Badge>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{t("dashboard", "fieldProvider")}</dt>
              <dd className="capitalize">{user.provider}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </main>
  )
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardInner />
    </AuthGuard>
  )
}
