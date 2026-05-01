import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n/context"
import { AuthProvider } from "@/components/auth-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-kr",
  display: "swap",
})

export const metadata: Metadata = {
  title: "THE HANA R.A.C | 더하나 리버스 에이징 센터",
  description:
    "첨단 재생 과학 솔루션을 기반으로 역노화를 실현하는 프리미엄 리버스 에이징 센터. 단 15분의 활성화로 당신의 혈액 속에 잠든 재생 에너지를 깨웁니다.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased text-foreground" suppressHydrationWarning>
        <I18nProvider>
          <AuthProvider>{children}</AuthProvider>
        </I18nProvider>
        <Toaster richColors position="top-right" />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
