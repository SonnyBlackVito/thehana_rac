import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { MembershipSection } from "@/components/news/membership-section"

export default function MemberPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <MembershipSection />
      </main>
      <SiteFooter />
    </div>
  )
}
