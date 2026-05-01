"use client"

import { request } from "@/lib/api/client"
import type {
  AuthSession,
  LoginPayload,
  RegisterPayload,
  User,
} from "@/lib/auth/types"

export const AuthApi = {
  register(payload: RegisterPayload) {
    return request<AuthSession>({
      method: "POST",
      url: "/auth/register",
      data: payload,
    })
  },

  login(payload: LoginPayload) {
    return request<AuthSession>({
      method: "POST",
      url: "/auth/login",
      data: payload,
    })
  },

  refresh(refreshToken: string) {
    return request<AuthSession>({
      method: "POST",
      url: "/auth/refresh",
      data: { refresh_token: refreshToken },
    })
  },

  googleAuthURL(state?: string) {
    return request<{ url: string }>({
      method: "GET",
      url: "/auth/google/login",
      params: state ? { state } : undefined,
    })
  },

  googleCallback(code: string, state?: string) {
    return request<AuthSession>({
      method: "POST",
      url: "/auth/google/callback",
      data: { code, state },
    })
  },

  me() {
    return request<User>({ method: "GET", url: "/me" })
  },
}
