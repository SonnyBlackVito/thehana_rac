"use client"

import Link from "next/link"
import { useState } from "react"
import { Plus, MessageSquareMore, Phone } from "lucide-react"

const tabs = ["혈액 활성화기", "리버셀 주사", "심해수", "AS", "제품구매"] as const

export function FaqContactSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("혈액 활성화기")

  return (
    <section aria-labelledby="faq-contact-heading" className="w-full bg-background pb-24">
      <h2 id="faq-contact-heading" className="sr-only">
        자주 찾는 질문 및 고객 지원
      </h2>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT: FAQ */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-foreground md:text-[28px]">자주 찾는 질문</h3>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              더 보기
            </Link>
          </div>
          <p className="mt-3 text-sm text-brand-text md:text-[15px]">
            문의 하시기 전 궁금하신 사항을 확인하세요.
          </p>

          <div
            role="tablist"
            aria-label="FAQ 카테고리"
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-b border-border pb-3"
          >
            {tabs.map((tab) => {
              const isActive = tab === activeTab
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`relative -mb-[13px] pb-3 text-[15px] transition-colors ${
                    isActive
                      ? "font-semibold text-primary"
                      : "font-medium text-brand-text hover:text-foreground"
                  }`}
                >
                  {tab}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
                    />
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>

        {/* RIGHT: two cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* FAQ online inquiry card */}
          <article className="relative flex flex-col rounded-sm border border-border bg-background p-6">
            <header className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground md:text-xl">자주 찾는 질문</h3>
              <button
                type="button"
                aria-label="문의하기"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <Plus className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </header>
            <p className="mt-6 text-sm text-brand-text">1:1 온라인 문의입니다.</p>

            <div className="mt-10 flex justify-end" aria-hidden="true">
              <MessageSquareMore
                className="h-14 w-14 text-brand-line"
                strokeWidth={1.25}
              />
            </div>
          </article>

          {/* CS / AS card */}
          <article className="flex flex-col rounded-sm border border-border bg-background p-6">
            <h3 className="text-lg font-bold text-foreground md:text-xl">CS 및 AS 접수</h3>
            <a
              href="tel:010-8190-1627"
              className="mt-4 inline-block text-[22px] font-bold text-destructive md:text-2xl"
            >
              010-8190-1627
            </a>
            <dl className="mt-4 space-y-0.5 text-sm text-brand-text">
              <div className="flex gap-2">
                <dt className="shrink-0">평일 :</dt>
                <dd>09:30 - 17:30</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0">점심 :</dt>
                <dd>12:00 ~ 13:00 (전화 상담 불가)</dd>
              </div>
              <p className="pt-1">* 주말 및 공휴일 휴무</p>
            </dl>

            <div className="mt-6 flex justify-end" aria-hidden="true">
              <Phone className="h-14 w-14 text-brand-line" strokeWidth={1.25} />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
