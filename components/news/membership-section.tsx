"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

const membershipCards = [
  {
    tier: "GOLD",
    image: "/vip-card-gold.png",
    altKey: "membershipGoldAlt",
    href: "/press/membership/gold",
  },
  {
    tier: "PLATINUM",
    image: "/vip-card-platinum.png",
    altKey: "membershipPlatinumAlt",
    href: "/press/membership/platinum",
  },
  {
    tier: "BLACK",
    image: "/vip-card-black.png",
    altKey: "membershipBlackAlt",
    href: "/press/membership/black",
  },
]

export function MembershipSection() {
  const { t } = useI18n()

  return (
    <section
      aria-labelledby="membership-title"
      className="flex w-full flex-col items-center justify-center gap-8 bg-white pt-4 pb-12 text-[#3E454B] md:min-h-[1132px] md:pb-0"
      style={{ fontFamily: "var(--font-inter), var(--font-noto-kr), sans-serif" }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 sm:px-5 md:px-20">
        <div className="flex flex-col items-start">
          <h2
            id="membership-title"
            className="text-[26px] font-bold leading-[32px] tracking-normal text-[#3E454B] md:text-[32px] md:leading-[38px]"
          >
            {t("press", "membershipTitle")}
          </h2>
          <span className="mt-7 block h-[2px] w-[90px] bg-primary" aria-hidden="true" />
        </div>

        <div className="mx-auto flex max-w-[880px] flex-col items-center text-center">
          <p className="text-center text-[20px] font-bold leading-[30px] tracking-normal text-[#3E454B] md:text-[28px] md:leading-[40px]">
            {t("press", "membershipSubtitle")}
          </p>
          <span className="mt-9 block h-[2px] w-[98px] bg-primary" aria-hidden="true" />
          <h3 className="mt-14 text-pretty text-center text-[20px] font-bold leading-[30px] tracking-normal text-primary md:text-[28px] md:leading-[40px]">
            {t("press", "membershipHeadline")}
          </h3>
          <p className="mt-11 max-w-[680px] whitespace-pre-line text-pretty text-center text-[18px] font-normal leading-[27px] tracking-normal text-[#3E454B] md:text-[20px] md:leading-[30px]">
            {t("press", "membershipDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {membershipCards.map((card) => (
            <article key={card.tier} className="flex min-h-[420px] flex-col items-center bg-[#F9F9F9] px-6 py-7 md:min-h-[596px]">
              <Link href={card.href} className="group flex h-full w-full flex-col items-center">
                <div className="flex h-[320px] w-full items-center justify-center md:h-[466px]">
                  <div className="relative h-[280px] w-[190px] transition-transform duration-300 group-hover:-translate-y-1 md:h-[424px] md:w-[281px]">
                    <Image
                      src={card.image}
                      alt={t("press", card.altKey)}
                      fill
                      sizes="(max-width: 768px) 190px, 281px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="mt-6 text-center text-[20px] font-bold leading-[26px] tracking-normal text-black md:mt-8 md:text-[22px] md:leading-[30px]">
                  {card.tier}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
