"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutIntro } from "@/components/about/about-intro"
import { VisionMission } from "@/components/about/vision-mission"
import { useI18n } from "@/lib/i18n/context"

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="px-6 pt-12 lg:px-10 lg:pt-16">
          <div className="mx-auto max-w-[1400px]">
            <h1 className="text-[26px] font-bold text-foreground md:text-[30px]">
              {t("about", "pageTitle")}
            </h1>
            <div aria-hidden="true" className="mt-4 h-[2px] w-12 bg-primary" />
          </div>
        </div>

        <AboutIntro />
        <VisionMission />
      </main>
      <SiteFooter />
    </div>
  )
}
