"use client"

import { Clock3, LogOut, MailCheck, ShieldCheck } from "lucide-react"

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function DashboardInner() {
  const { user, signOut } = useAuth()
  const { t } = useI18n()
  if (!user) return null
  const pendingApproval = user.role === "user" && !user.is_approved

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <Dialog open={pendingApproval}>
        <DialogContent showCloseButton={false} className="overflow-hidden p-0 sm:max-w-md">
          <div className="bg-primary/10 px-6 pb-5 pt-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-sm">
              <Clock3 className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
          </div>
          <div className="px-6 pb-6 text-center">
            <DialogHeader className="items-center text-center">
              <DialogTitle className="text-xl">
                {t("dashboard", "pendingTitle")}
              </DialogTitle>
              <DialogDescription className="max-w-sm">
                {t("dashboard", "pendingDesc")}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 grid gap-3 text-left">
              <div className="flex items-start gap-3 rounded-md border bg-card p-3">
                <MailCheck className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">{user.email}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("dashboard", "pendingEmailNote")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-md border bg-card p-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">
                    {t("dashboard", "pendingReview")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("dashboard", "pendingReviewNote")}
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-6 w-full" variant="outline" onClick={signOut}>
              <LogOut /> {t("dashboard", "signOut")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
            <div>
              <dt className="text-muted-foreground">{t("dashboard", "fieldApproval")}</dt>
              <dd>
                <Badge variant={user.is_approved ? "secondary" : "outline"}>
                  {user.is_approved
                    ? t("dashboard", "approved")
                    : t("dashboard", "pending")}
                </Badge>
              </dd>
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
