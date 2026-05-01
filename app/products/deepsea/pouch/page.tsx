import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

export default function PouchPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">REWATER Pouch 350ml</h1>
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto mb-8">
            <Image
              src="/rewater-pouch.png"
              alt="REWATER pouch 350ml"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-lg text-brand-text text-center">
            Premium deep sea water in convenient pouch packaging. 350ml of pure, mineral-rich hydration.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
