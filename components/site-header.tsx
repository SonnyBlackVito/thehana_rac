"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { Search, Menu, Globe, X, ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/translations"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { locale, setLocale, t } = useI18n()

  const navItems = [
    { label: t("nav", "about"), href: "/about" },
    { label: t("nav", "products"), href: "/products" },
    { label: t("nav", "research"), href: "/research" },
    { label: t("nav", "support"), href: "/support" },
    { label: t("nav", "press"), href: "/press" },
  ]

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  function handleLangChange(newLocale: Locale) {
    setLocale(newLocale)
    setLangOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">
        <Link href="/" aria-label="THE HANA R.A.C 홈" className="shrink-0">
          <Image
            src="/thehana-logo.png"
            alt="THE HANA R.A.C"
            width={160}
            height={56}
            priority
            className="h-8 w-auto sm:h-10 md:h-12"
          />
        </Link>

        <nav aria-label={t("nav", "mainMenu")} className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative inline-flex h-20 items-center text-[14px] font-medium transition-colors hover:text-primary xl:text-[15px] ${
                      isActive ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label={t("nav", "search")}
            className="hidden text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>

          {/* Language Switcher */}
          <div ref={langRef} className="relative hidden sm:block">
            <button
              type="button"
              id="lang-switcher"
              aria-label={t("nav", "language")}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[13px] font-medium text-foreground/80 transition-all hover:border-primary hover:text-primary"
            >
              <Globe className="h-4 w-4" strokeWidth={1.5} />
              <span>{locale === "ko" ? "KR" : "EN"}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>

            {/* Dropdown */}
            {langOpen && (
              <div
                role="listbox"
                aria-labelledby="lang-switcher"
                className="absolute right-0 top-full z-50 mt-2 w-[120px] overflow-hidden rounded-lg border border-border bg-background shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === "ko"}
                  onClick={() => handleLangChange("ko")}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                    locale === "ko"
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-foreground/80 hover:bg-muted/60"
                  }`}
                >
                  <span className="text-base">🇰🇷</span>
                  <span>KR</span>
                </button>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === "en"}
                  onClick={() => handleLangChange("en")}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                    locale === "en"
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-foreground/80 hover:bg-muted/60"
                  }`}
                >
                  <span className="text-base">🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={t("nav", "openMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="text-foreground/80 transition-colors hover:text-primary lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile / Tablet drawer */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t("nav", "mobileMenu")}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label={t("nav", "closeMenu")}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-background shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-4 sm:h-20 sm:px-6">
              <Image
                src="/thehana-logo.png"
                alt="THE HANA R.A.C"
                width={120}
                height={42}
                className="h-8 w-auto sm:h-10"
              />
              <button
                type="button"
                aria-label={t("nav", "closeMenu")}
                onClick={() => setOpen(false)}
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav aria-label={t("nav", "mobileMainMenu")} className="flex-1 overflow-y-auto py-2">
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center justify-between border-b border-border px-6 py-4 text-[16px] font-medium transition-colors ${
                          isActive
                            ? "bg-muted/50 text-primary"
                            : "text-foreground hover:bg-muted/40 hover:text-primary"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                          />
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex items-center justify-around border-t border-border px-6 py-4 sm:hidden">
              <button
                type="button"
                aria-label={t("nav", "search")}
                className="flex flex-col items-center gap-1 text-xs text-foreground/70 transition-colors hover:text-primary"
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
                <span>{t("nav", "search")}</span>
              </button>

              {/* Mobile language switcher */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleLangChange("ko")}
                  className={`flex flex-col items-center gap-1 rounded-md px-3 py-1.5 text-xs transition-colors ${
                    locale === "ko"
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  <span className="text-lg">🇰🇷</span>
                  <span>KR</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleLangChange("en")}
                  className={`flex flex-col items-center gap-1 rounded-md px-3 py-1.5 text-xs transition-colors ${
                    locale === "en"
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
