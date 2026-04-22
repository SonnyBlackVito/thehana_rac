import Image from "next/image"

type Product = {
  name: string
  image: string
  alt: string
}

const products: Product[] = [
  { name: "혈액활성화기", image: "/product-blood-activator.jpg", alt: "혈액활성화기" },
  { name: "혈액활성화기 MINI", image: "/product-activator-mini.jpg", alt: "혈액활성화기 MINI" },
  { name: "혈액 분리 장치", image: "/product-injection.jpg", alt: "혈액 분리 장치" },
  { name: "ACT PRF", image: "/product-blood-activator.jpg", alt: "ACT PRF" },
  { name: "ACT PRF D", image: "/product-activator-mini.jpg", alt: "ACT PRF D" },
  { name: "ACT BMS 30", image: "/product-injection.jpg", alt: "ACT BMS 30" },
]

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product) => (
          <li key={product.name} className="flex flex-col">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f4f4f4] rounded-sm">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.alt}
                fill
                className="object-contain p-10"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="mt-6 text-center text-base md:text-lg font-medium text-foreground">{product.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
