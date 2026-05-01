"use client"

import { create } from "zustand"

import type { AuthSession, User } from "./types"
import { clearSession, readSession, writeSession } from "./storage"

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isReady: boolean
  hydrate: () => void
  setSession: (s: AuthSession | null) => void
  setUser: (u: User) => void
  signOut: () => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isReady: false,

  hydrate: () => {
    if (get().isReady) return
    const s = readSession()
    set({
      user: s?.user ?? null,
      accessToken: s?.access_token ?? null,
      refreshToken: s?.refresh_token ?? null,
      isReady: true,
    })
  },

  setSession: (s) => {
    writeSession(s)
    set({
      user: s?.user ?? null,
      accessToken: s?.access_token ?? null,
      refreshToken: s?.refresh_token ?? null,
      isReady: true,
    })
  },

  setUser: (u) => {
    const cur = readSession()
    if (cur) {
      writeSession({ ...cur, user: u })
    }
    set({ user: u })
  },

  signOut: () => {
    clearSession()
    set({ user: null, accessToken: null, refreshToken: null })
  },
}))
