"use client"

import { Button } from "@/components/ui/button"

interface Props {
  total: number
  limit: number
  offset: number
  onChange: (offset: number) => void
}

export function PaginationBar({ total, limit, offset, onChange }: Props) {
  if (total <= limit) return null
  const page = Math.floor(offset / limit) + 1
  const totalPages = Math.max(1, Math.ceil(total / limit))

  return (
    <div className="flex items-center justify-center gap-2 pt-2">
      <Button
        variant="outline"
        size="sm"
        disabled={offset === 0}
        onClick={() => onChange(Math.max(0, offset - limit))}
      >
        ‹
      </Button>
      <span className="text-sm text-muted-foreground">
        {page} / {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={offset + limit >= total}
        onClick={() => onChange(offset + limit)}
      >
        ›
      </Button>
    </div>
  )
}
