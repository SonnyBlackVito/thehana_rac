"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"

import { AuthApi } from "@/lib/api/auth"
import { useAuthStore } from "@/lib/auth/store"
import type { LoginPayload, RegisterPayload } from "@/lib/auth/types"

export function useAuth() {
  const router = useRouter()
  const user = useAuthStore((s) => s.user)
  const accessToken = useAuthStore((s) => s.accessToken)
  const isReady = useAuthStore((s) => s.isReady)
  const setSession = useAuthStore((s) => s.setSession)
  const signOutStore = useAuthStore((s) => s.signOut)

  const login = useCallback(
    async (payload: LoginPayload) => {
      const session = await AuthApi.login(payload)
      setSession(session)
      return session
    },
    [setSession],
  )

  const register = useCallback(
    async (payload: RegisterPayload) => {
      const session = await AuthApi.register(payload)
      setSession(session)
      return session
    },
    [setSession],
  )

  const startGoogleLogin = useCallback(async () => {
    const { url } = await AuthApi.googleAuthURL("rac-state")
    window.location.href = url
  }, [])

  const completeGoogleLogin = useCallback(
    async (code: string, state?: string) => {
      const session = await AuthApi.googleCallback(code, state)
      setSession(session)
      return session
    },
    [setSession],
  )

  const signOut = useCallback(() => {
    signOutStore()
    router.replace("/login")
  }, [router, signOutStore])

  return {
    user,
    isReady,
    isAuthenticated: Boolean(accessToken),
    login,
    register,
    startGoogleLogin,
    completeGoogleLogin,
    signOut,
  }
}
