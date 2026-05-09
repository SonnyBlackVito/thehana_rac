"use client";

import Link from "next/link";
import { Instagram, Store, Youtube } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function SiteFooter() {
  const { locale, t } = useI18n();

  const branches = [
    {
      label: locale === "ko" ? "인바디 본사" : "HQ",
      address: "06106 서울시 강남구 언주로 625 인바디빌딩",
    },
    {
      label: locale === "ko" ? "인바디 공장" : "Factory",
      address: "31025 충청남도 천안시 서북구 입장면 흑암길 15",
    },
    {
      label: locale === "ko" ? "인바디 벤처센터" : "Venture Center",
      address: "06313 서울시 강남구 논현로2길 54 인바디벤처센터",
    },
    {
      label: locale === "ko" ? "인바디 양재센터" : "Yangjae Center",
      address: "06779 서울특별시 서초구 동산로 1 5층 인바디양재센터",
    },
    {
      label: locale === "ko" ? "인바디 2공장" : "Factory 2",
      address: "31026 충청남도 천안시 서북구 입장면 연곡길 330",
    },
  ];

  return (
    <footer className="w-full bg-brand-footer text-background">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          {/* Left column: logo + company info */}
          <div>
            <div className="flex flex-col leading-none text-background">
              <span className="font-serif text-[22px] font-light tracking-[0.08em]">
                THE HANA
              </span>
              <span className="font-serif text-[22px] font-light tracking-[0.28em]">
                R.A.C
              </span>
            </div>

            <div className="mt-6 space-y-2 text-[13px] leading-relaxed text-background/80 sm:mt-10 sm:space-y-3 sm:text-sm">
              <p className="text-[14px] font-semibold text-background sm:text-[15px]">
                {t("footer", "company")}
              </p>
              <p className="flex flex-wrap gap-x-4 gap-y-1">
                <span>{t("footer", "ceo")}</span>
                <span>{t("footer", "businessNo")}</span>
              </p>
              <p>TEL : 010-8190-1627</p>
            </div>
          </div>

          {/* Right column: branch addresses */}
          <div>
            <dl className="space-y-3 text-[13px] leading-relaxed text-background/80 sm:space-y-2 sm:text-sm">
              {branches.map((branch) => (
                <div
                  key={branch.label}
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-6"
                >
                  <dt className="text-background sm:w-28 sm:shrink-0">{branch.label}</dt>
                  <dd className="flex-1">{branch.address}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-6 border-t border-background/10 pt-6 sm:mt-14 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-background/60 sm:gap-x-8">
            <Link
              href="#"
              className="text-[13px] text-background hover:text-primary-foreground sm:text-sm"
            >
              {t("footer", "privacy")}
            </Link>
            <Link
              href="#"
              className="text-[13px] text-background/80 hover:text-background sm:text-sm"
            >
              {t("footer", "emailReject")}
            </Link>
          </div>

          <nav
            aria-label="Social & Store links"
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="#"
              aria-label={t("footer", "store")}
              className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-opacity hover:opacity-90"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Store className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span>{t("footer", "store")}</span>
            </Link>
            <Link
              href="http://pf.kakao.com/_uFxbzb/chat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 상담"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEE500] text-[#3A1D1D] transition-opacity hover:opacity-90"
            >
              {/* KakaoTalk icon */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 3C6.477 3 2 6.805 2 11.5c0 2.94 1.714 5.53 4.32 7.124L5.25 21.5l3.653-2.022C9.57 19.817 10.769 20 12 20c5.523 0 10-3.805 10-8.5S17.523 3 12 3z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#FF0000] text-background transition-opacity hover:opacity-90"
            >
              <Youtube className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-[#b90000] via-[#ff0000] to-[#6bafff] text-background transition-opacity hover:opacity-90"
            >
              <Instagram className="h-4 w-4" strokeWidth={2} />
            </Link>
          </nav>
        </div>

        <p className="mt-5 text-[11px] leading-relaxed text-background/50 sm:mt-6 sm:text-xs">
          Copyright© 2026 by Thehana Corporation CO., Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
}
