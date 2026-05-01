import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export default function BottlePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">REWATER Bottle</h1>
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto mb-8">
            <Image
              src="/rewater-bottle.png"
              alt="REWATER bottle"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg text-brand-text text-center">
            Premium deep sea water in elegant bottle packaging. Perfect for home or office consumption.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
