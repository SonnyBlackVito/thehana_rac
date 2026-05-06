import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductsHeader } from "@/components/products/products-header"
import { ProductsIntro } from "@/components/products/products-intro"
import { ProductGrid } from "@/components/products/product-grid"
import { RevercellSection } from "@/components/products/revercell-section"
import { DeepSeaSection } from "@/components/products/deepsea-section"
import { QuantumRestSection } from "@/components/products/quantum-rest-section"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ProductsHeader />
        <ProductsIntro />
        <ProductGrid />
        <RevercellSection />
        <DeepSeaSection />
        <QuantumRestSection />
      </main>
      <SiteFooter />
    </div>
  )
}
