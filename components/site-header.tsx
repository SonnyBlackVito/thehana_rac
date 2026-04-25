"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Search, Menu, Globe, X } from "lucide-react"

const navItems = [
  { label: "센터소개", href: "/about" },
  { label: "제품정보", href: "/products" },
  { label: "연구개발", href: "/research" },
  { label: "고객지원", href: "/support" },
  { label: "홍보센터", href: "/press" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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

        <nav aria-label="주 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <li key={item.label}>
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
            aria-label="검색"
            className="hidden text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="언어 변경"
            className="hidden text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
          >
            <Globe className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="전체 메뉴 열기"
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
          aria-label="모바일 메뉴"
          className="fixed inset-0 z-[60] lg:hidden"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="메뉴 닫기"
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
                aria-label="메뉴 닫기"
                onClick={() => setOpen(false)}
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav aria-label="모바일 주 메뉴" className="flex-1 overflow-y-auto py-2">
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                  return (
                    <li key={item.label}>
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
                aria-label="검색"
                className="flex flex-col items-center gap-1 text-xs text-foreground/70 transition-colors hover:text-primary"
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
                <span>검색</span>
              </button>
              <button
                type="button"
                aria-label="언어 변경"
                className="flex flex-col items-center gap-1 text-xs text-foreground/70 transition-colors hover:text-primary"
              >
                <Globe className="h-5 w-5" strokeWidth={1.5} />
                <span>언어</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
