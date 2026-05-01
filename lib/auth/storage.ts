"use client"

import type { AuthSession } from "./types"

const STORAGE_KEY = "thehana_rac_auth"

export function readSession(): AuthSession | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AuthSession) : null
  } catch {
    return null
  }
}

export function writeSession(s: AuthSession | null): void {
  if (typeof window === "undefined") return
  if (!s) {
    window.localStorage.removeItem(STORAGE_KEY)
    return
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
}

export function clearSession(): void {
  writeSession(null)
}
