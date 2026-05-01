import type { Locale } from "@/lib/i18n/translations"

export function formatCurrency(amount: number, locale: Locale = "ko"): string {
  if (locale === "ko") {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
      maximumFractionDigits: 0,
    }).format(amount)
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount)
}
