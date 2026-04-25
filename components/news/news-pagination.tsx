"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

export function NewsPagination({ totalPages = 5 }: { totalPages?: number }) {
  const [page, setPage] = useState(1)

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const baseBtn =
    "flex h-9 w-9 items-center justify-center rounded-md text-[14px] transition-colors"
  const navBtn = `${baseBtn} text-[#6B6666] hover:bg-[#F4F4F4] disabled:opacity-40 disabled:hover:bg-transparent`

  return (
    <nav
      aria-label="페이지 네비게이션"
      className="flex items-center justify-center gap-2 py-10"
    >
      <button
        type="button"
        onClick={() => setPage(1)}
        disabled={page === 1}
        className={navBtn}
        aria-label="첫 페이지"
      >
        <ChevronsLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className={navBtn}
        aria-label="이전 페이지"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((n) => {
        const isActive = page === n
        return (
          <button
            key={n}
            type="button"
            onClick={() => setPage(n)}
            aria-current={isActive ? "page" : undefined}
            className={`${baseBtn} ${
              isActive
                ? "bg-[#055239] text-white"
                : "text-[#6B6666] hover:bg-[#F4F4F4]"
            }`}
          >
            {n}
          </button>
        )
      })}

      <button
        type="button"
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className={navBtn}
        aria-label="다음 페이지"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
        className={navBtn}
        aria-label="마지막 페이지"
      >
        <ChevronsRight className="h-4 w-4" />
      </button>
    </nav>
  )
}
