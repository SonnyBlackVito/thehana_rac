"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function NewsPagination({ totalPages = 5 }: { totalPages?: number }) {
  const [page, setPage] = useState(1)
  const { t } = useI18n()

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const baseBtn =
    "flex h-9 w-9 items-center justify-center rounded-md text-[14px] transition-colors"
  const navBtn = `${baseBtn} text-[#6B6666] hover:bg-[#F4F4F4] disabled:opacity-40 disabled:hover:bg-transparent`

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 py-10"
    >
      <button
        type="button"
        onClick={() => setPage(1)}
        disabled={page === 1}
        className={navBtn}
        aria-label={t("press", "firstPage")}
      >
        <ChevronsLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className={navBtn}
        aria-label={t("press", "prevPage")}
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
        aria-label={t("press", "nextPage")}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
        className={navBtn}
        aria-label={t("press", "lastPage")}
      >
        <ChevronsRight className="h-4 w-4" />
      </button>
    </nav>
  )
}
