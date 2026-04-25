import Image from "next/image"
import type { PressItem } from "./news-data"

export function PressCard({ item }: { item: PressItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-[#CCCCCC] transition-colors hover:border-[#055239]">
      {/* Image */}
      <div className="relative aspect-[390/219] w-full overflow-hidden bg-muted">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 390px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="line-clamp-2 min-h-[52px] text-[16px] font-semibold leading-[26px] tracking-[-0.01em] text-[#3E454B] dark:text-[#A1A8AE]">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-[13px] font-normal leading-[20px] text-[#8D8D8D]">
            {item.body}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2 text-[12px] leading-[20px] text-[#8D8D8D]">
          <span className="font-medium text-[#3E454B] dark:text-[#A1A8AE]">{item.source}</span>
          <span aria-hidden="true">·</span>
          <time>{item.date}</time>
        </div>
      </div>
    </article>
  )
}
