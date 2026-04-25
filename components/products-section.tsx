import Image from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  background: string;
  showMore?: boolean;
  href?: string;
};

const products: Product[] = [
  {
    title: "혈액 활성화기",
    description: [
      "화학 첨가물 없이, 오직",
      "내 혈액으로 완성하는",
      "자가 치유의 혁신",
    ],
    image: "/home-product-activator.png",
    imageAlt: "혈액 활성화기 - ACT PRO PRP 활성화 장비",
    background: "bg-secondary",
    showMore: true,
    href: "#",
  },
  {
    title: "리버셀 주사",
    description: ["세포의 시간을 되돌리는", "필수 에너지 루틴"],
    image: "/home-product-bloodbag.png",
    imageAlt: "리버셀 주사 - 혈액 백",
    background: "bg-secondary",
    href: "#",
  },
  {
    title: "심해수",
    description: ["마시는 순간 시작되는", "리버스 에이징"],
    image: "/home-product-rewater.png",
    imageAlt: "심해수 REWATER 파우치",
    background: "bg-secondary",
    href: "#",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href || "#"}
      className={`group relative flex flex-col items-center overflow-hidden ${product.background} pt-10 md:pt-14 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      {/* Hover background color overlay */}
      <div
        className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        aria-hidden="true"
      />

      {/* top accent line */}
      <div
        className="absolute left-1/2 top-0 z-10 h-1 w-20 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full"
        aria-hidden="true"
      />

      <header className="relative z-10 px-6 text-center">
        <h3 className="text-xl font-bold text-foreground md:text-2xl transition-colors group-hover:text-primary">
          {product.title}
        </h3>
        <div className="mt-4 space-y-1 text-[15px] leading-relaxed text-brand-text md:text-base">
          {product.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </header>

      <div className="relative z-10 mt-6 aspect-square w-full">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        {product.showMore ? (
          <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/10 px-5 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-foreground group-hover:scale-105">
            더 보기
          </span>
        ) : null}
      </div>
    </Link>
  );
}

export function ProductsSection() {
  return (
    <section
      aria-labelledby="products-heading"
      className="w-full bg-background pb-14 pt-6 sm:pb-20 sm:pt-8"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 pb-12 text-center">
          <div className="flex items-center gap-3">
            <h2
              id="products-heading"
              className="text-2xl font-bold text-foreground md:text-[28px]"
            >
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
            더하나 리버스 센터에서는 의료인을 위한 전문 의료기기부터 고기능성
            키트까지,
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
  );
}
