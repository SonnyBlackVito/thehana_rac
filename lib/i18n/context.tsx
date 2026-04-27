"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { type Locale, translations } from "./translations"

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (section: string, key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

const STORAGE_KEY = "thehana-locale"

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko")
  const [mounted, setMounted] = useState(false)

  // Read saved locale on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
      if (saved === "ko" || saved === "en") {
        setLocaleState(saved)
      }
    } catch {
      // SSR or localStorage unavailable
    }
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem(STORAGE_KEY, newLocale)
    } catch {
      // ignore
    }
    // Update <html lang>
    document.documentElement.lang = newLocale === "ko" ? "ko" : "en"
  }, [])

  const t = useCallback(
    (section: string, key: string): string => {
      try {
        const sectionObj = (translations as Record<string, Record<string, Record<string, string>>>)[section]
        if (!sectionObj) return key
        const entry = sectionObj[key]
        if (!entry) return key
        return entry[locale] ?? key
      } catch {
        return key
      }
    },
    [locale],
  )

  // Prevent flash of wrong locale
  if (!mounted) {
    return <>{children}</>
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    // Return a fallback for server components or when provider is missing
    return {
      locale: "ko" as Locale,
      setLocale: () => {},
      t: (_section: string, key: string) => key,
    }
  }
  return ctx
}
