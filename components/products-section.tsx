import Image from "next/image"
import Link from "next/link"

type Product = {
  title: string
  description: string[]
  image: string
  imageAlt: string
  background: string
  showMore?: boolean
}

const products: Product[] = [
  {
    title: "혈액 활성화기",
    description: ["화학 첨가물 없이, 오직", "내 혈액으로 완성하는", "자가 치유의 혁신"],
    image: "/product-blood-activator.jpg",
    imageAlt: "혈액 활성화기 - ACT PRO PRP 활성화 장비",
    background: "bg-[#d9d9d9]",
    showMore: true,
  },
  {
    title: "리버셀 주사",
    description: ["세포의 시간을 되돌리는", "필수 에너지 루틴"],
    image: "/product-injection.jpg",
    imageAlt: "리버셀 주사 장비",
    background: "bg-secondary",
  },
  {
    title: "심해수",
    description: ["마시는 순간 시작되는", "리버스 에이징"],
    image: "/product-deepsea.jpg",
    imageAlt: "심해수 제품",
    background: "bg-secondary",
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className={`relative flex flex-col items-center overflow-hidden ${product.background} pt-10 md:pt-14`}
    >
      {/* top accent line */}
      <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 bg-primary" aria-hidden="true" />

      <header className="px-6 text-center">
        <h3 className="text-xl font-bold text-foreground md:text-2xl">{product.title}</h3>
        <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-brand-text md:text-base">
          {product.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </header>

      <div className="relative mt-6 aspect-square w-full">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-contain p-6"
        />

        {product.showMore ? (
          <Link
            href="#"
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/10 px-5 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
          >
            더 보기
          </Link>
        ) : null}
      </div>
    </article>
  )
}

export function ProductsSection() {
  return (
    <section aria-labelledby="products-heading" className="w-full bg-background pb-20 pt-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 pb-12 text-center">
          <div className="flex items-center gap-3">
            <h2 id="products-heading" className="text-2xl font-bold text-foreground md:text-[28px]">
              THEHANA R.A.C 제품 구매
            </h2>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              더 보기
            </Link>
          </div>
          <p className="max-w-2xl text-pretty text-[15px] leading-relaxed text-brand-text md:text-base">
            더하나 리버스 센터에서는 의료인을 위한 전문 의료기기부터 고기능성 키트까지,
            <br className="hidden md:block" />
            역노화의 전 과정을 아우르는 차별화된 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
