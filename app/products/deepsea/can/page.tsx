import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"

export default function CanPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">REWATER Can 190ml</h1>
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto mb-8">
            <Image
              src="/rewater-can.png"
              alt="REWATER can 190ml"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg text-brand-text text-center">
            Premium deep sea water in convenient can packaging. 190ml portable size for on-the-go hydration.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
