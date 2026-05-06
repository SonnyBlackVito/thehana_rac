import { notFound } from "next/navigation"

import { MembershipDetailClient } from "./membership-detail-client"

const tiers = ["gold", "platinum", "black"] as const

export function generateStaticParams() {
  return tiers.map((tier) => ({ tier }))
}

export default async function MembershipDetailPage({ params }: { params: Promise<{ tier: string }> }) {
  const { tier } = await params

  if (!tiers.includes(tier as (typeof tiers)[number])) {
    notFound()
  }

  return <MembershipDetailClient tier={tier as (typeof tiers)[number]} />
}
