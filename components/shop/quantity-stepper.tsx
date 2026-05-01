"use client"

import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Props {
  value: number
  onChange: (n: number) => void
  min?: number
  max?: number
  disabled?: boolean
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 9999,
  disabled,
}: Props) {
  const set = (n: number) => onChange(Math.max(min, Math.min(max, n)))

  return (
    <div className="inline-flex items-center gap-1">
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        onClick={() => set(value - 1)}
        disabled={disabled || value <= min}
      >
        <Minus />
      </Button>
      <Input
        className="h-8 w-14 text-center"
        type="number"
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        onChange={(e) => set(parseInt(e.target.value || "0", 10) || min)}
      />
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        onClick={() => set(value + 1)}
        disabled={disabled || value >= max}
      >
        <Plus />
      </Button>
    </div>
  )
}
