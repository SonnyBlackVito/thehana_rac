import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { NewsSocialSection } from "@/components/news-social-section"
import { ProductsSection } from "@/components/products-section"
import { FaqContactSection } from "@/components/faq-contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <NewsSocialSection />
        <ProductsSection />
        <FaqContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
