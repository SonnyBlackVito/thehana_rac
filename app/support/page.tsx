import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SupportPageHeader } from "@/components/support/support-page-header"
import { SupportBanner } from "@/components/support/support-banner"
import { InquiryForm } from "@/components/support/inquiry-form"
import { FaqList } from "@/components/support/faq-list"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <SupportPageHeader />
        <SupportBanner />
        <InquiryForm />
        <FaqList />
      </main>
      <SiteFooter />
    </div>
  )
}
