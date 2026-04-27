"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

function RequiredLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-center gap-1 text-sm font-medium text-foreground">
      <span className="text-primary" aria-hidden="true">
        *
      </span>
      {children}
    </label>
  )
}

function SelectField({ id, label, selectText }: { id: string; label: string; selectText: string }) {
  return (
    <div>
      <RequiredLabel htmlFor={id}>{label}</RequiredLabel>
      <div className="relative">
        <select
          id={id}
          defaultValue=""
          className="w-full appearance-none rounded-md border border-border bg-background px-4 py-3 pr-10 text-sm text-foreground/80 outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="" disabled>
            {selectText}
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/60"
          strokeWidth={1.8}
        />
      </div>
    </div>
  )
}

function InputField({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div>
      <RequiredLabel htmlFor={id}>{label}</RequiredLabel>
      <input
        id={id}
        type={type}
        className="w-full rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}

export function InquiryForm() {
  const { t } = useI18n()
  const [message, setMessage] = useState("")
  const [agreed, setAgreed] = useState(false)

  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16 lg:px-10">
      <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-[28px]">{t("support", "inquiryFormTitle")}</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SelectField id="category" label={t("support", "category")} selectText={t("common", "select")} />
          <SelectField id="product" label={t("support", "productGroup")} selectText={t("common", "select")} />
          <InputField id="company" label={t("support", "affiliation")} />
          <InputField id="name" label={t("support", "name")} />
          <InputField id="phone" label={t("support", "phone")} type="tel" />
          <InputField id="email" label={t("support", "email")} type="email" />
        </div>

        <div>
          <RequiredLabel>{t("support", "address")}</RequiredLabel>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                aria-label="Zip code"
                className="w-full rounded-md border border-border bg-muted/40 px-4 py-3 text-sm outline-none focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 sm:max-w-[280px]"
              />
              <button
                type="button"
                className="rounded-md bg-muted-foreground/70 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-muted-foreground"
              >
                {t("support", "zipSearch")}
              </button>
            </div>
            <input
              aria-label="Address"
              placeholder={t("support", "addressPlaceholder")}
              className="w-full rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-foreground/70 outline-none focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
            />
            <input
              aria-label="Detail address"
              placeholder={t("support", "addressDetailPlaceholder")}
              className="w-full rounded-md border border-border bg-muted/40 px-4 py-3 text-sm text-foreground/70 outline-none focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div>
          <RequiredLabel htmlFor="message">{t("support", "address")}</RequiredLabel>
          <textarea
            id="message"
            maxLength={500}
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <p className="mt-1 text-right text-xs text-foreground/60">({message.length}/500)</p>
        </div>

        <label className="flex items-start gap-2 text-sm text-foreground/70">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
          <span>
            {t("support", "privacyConsent")}
          </span>
        </label>

        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            type="submit"
            className="rounded-full border border-primary bg-background px-10 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t("support", "confirm")}
          </button>
          <button
            type="button"
            className="rounded-full border border-border bg-background px-10 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:border-foreground/40"
          >
            {t("support", "cancel")}
          </button>
        </div>
      </form>
    </section>
  )
}
