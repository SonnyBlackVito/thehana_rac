"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, Globe } from "lucide-react"

const navItems = [
  { label: "센터소개", href: "/about" },
  { label: "제품정보", href: "/products" },
  { label: "연구개발", href: "/research" },
  { label: "고객지원", href: "/support" },
  { label: "홍보센터", href: "/press" },
]

function WordmarkPrimary({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="font-serif text-[22px] font-light tracking-[0.08em] text-foreground">THE HANA</span>
      <span className="font-serif text-[22px] font-light tracking-[0.28em] text-foreground">R.A.C</span>
    </div>
  )
}

function WordmarkSmall({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 leading-none ${className}`}>
      <span className="font-serif text-[10px] tracking-[0.2em] text-foreground">THE</span>
      <span className="font-serif text-[18px] font-light tracking-[0.1em] text-foreground">HANA</span>
    </div>
  )
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="THE HANA R.A.C 홈" className="shrink-0">
          <WordmarkPrimary />
        </Link>

        <nav aria-label="주 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative inline-flex h-20 items-center text-[15px] font-medium transition-colors hover:text-primary ${
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

        <div className="flex items-center gap-5">
          <WordmarkSmall className="hidden md:flex" />
          <button
            type="button"
            aria-label="검색"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="전체 메뉴 열기"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="언어 변경"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            <Globe className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
