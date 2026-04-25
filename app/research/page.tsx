import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ResearchPageHeader } from "@/components/research/research-page-header"
import { ActivePrfIntro } from "@/components/research/active-prf-intro"
import { ActivePrfPrinciples } from "@/components/research/active-prf-principles"
import { GrowthFactorSection } from "@/components/research/growth-factor-section"
import { ClinicalCasesSection } from "@/components/research/clinical-cases-section"
import { DeepSeaTechSection } from "@/components/research/deepsea-tech-section"
import { DeepSeaIntakeSection } from "@/components/research/deepsea-intake-section"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ResearchPageHeader />
        <ActivePrfIntro />
        <ActivePrfPrinciples />
        <GrowthFactorSection />
        <ClinicalCasesSection />
        <DeepSeaTechSection />
        <DeepSeaIntakeSection />
      </main>
      <SiteFooter />
    </div>
  )
}
