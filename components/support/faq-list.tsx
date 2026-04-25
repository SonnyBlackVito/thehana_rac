"use client"

import { useState } from "react"
import { ChevronDown, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

const categoryTabs = ["전체", "혈액 활성화기", "리버셀 주사", "심해수", "AS", "제품구매"]

const faqItems = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  title: "Title",
  body: "Body text",
}))

export function FaqList() {
  const [activeCategory, setActiveCategory] = useState(categoryTabs[0])
  const [openId, setOpenId] = useState<number | null>(2)
  const [activePage, setActivePage] = useState(1)

  return (
    <section className="mx-auto max-w-[1100px] px-6 pb-20 lg:px-10">
      <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground md:text-2xl">자주 찾는 질문</h2>
          <p className="mt-1 text-sm text-foreground/60">문의 하시기 전 궁금하신 사항을 확인하세요.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <select
              aria-label="검색 기준"
              defaultValue="title"
              className="w-full appearance-none rounded-md border border-border bg-background px-4 py-2.5 pr-10 text-sm text-foreground/80 outline-none focus:ring-2 focus:ring-primary/30 sm:w-32"
            >
              <option value="title">제목</option>
              <option value="content">내용</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/60"
              strokeWidth={1.8}
            />
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="검색어를 입력하세요."
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 pr-10 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-72"
            />
            <button
              type="button"
              aria-label="검색"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-primary"
            >
              <Search className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="FAQ 카테고리"
        className="mb-6 -mx-4 flex gap-5 overflow-x-auto border-b border-border px-4 [scrollbar-width:none] sm:-mx-0 sm:flex-wrap sm:gap-6 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {categoryTabs.map((tab) => {
          const isActive = tab === activeCategory
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className={`relative -mb-px shrink-0 px-1 pb-3 text-sm transition-colors ${
                isActive ? "font-semibold text-primary" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {tab}
              {isActive && <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />}
            </button>
          )
        })}
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {faqItems.map((item) => {
          const isOpen = openId === item.id
          return (
            <li key={item.id} className={isOpen ? "bg-muted/40" : ""}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 px-3 py-4 text-left sm:gap-4 sm:px-4 sm:py-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground/70"
                >
                  Q
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-4">
                  <span className="truncate text-sm font-semibold text-primary">{item.title}</span>
                  <span className="line-clamp-1 text-sm text-foreground/80">{item.body}</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-foreground/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.8}
                />
              </button>
              {isOpen && (
                <div className="flex gap-4 px-4 pb-6">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
                  >
                    A
                  </span>
                  <div className="space-y-1 text-sm text-foreground/70">
                    <p>Body text</p>
                    <p className="text-foreground/50">Body text</p>
                    <p className="text-foreground/50">Body text</p>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      <nav aria-label="페이지네이션" className="mt-8 flex flex-wrap items-center justify-center gap-1">
        <button
          type="button"
          aria-label="첫 페이지"
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronsLeft className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label="이전 페이지"
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
        </button>
        {[1, 2, 3, 4, 5].map((n) => {
          const isActive = n === activePage
          return (
            <button
              key={n}
              type="button"
              onClick={() => setActivePage(n)}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-9 w-9 items-center justify-center rounded text-sm transition-colors ${
                isActive
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {n}
            </button>
          )
        })}
        <button
          type="button"
          aria-label="다음 페이지"
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label="마지막 페이지"
          className="flex h-9 w-9 items-center justify-center rounded text-foreground/60 hover:text-primary"
        >
          <ChevronsRight className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </nav>
    </section>
  )
}
