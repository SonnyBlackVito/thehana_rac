"use client"

import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios"

import type { ApiEnvelope, AuthSession } from "@/lib/auth/types"
import { clearSession, readSession, writeSession } from "@/lib/auth/storage"

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.thehanarac.com/api/v1"

export class ApiError extends Error {
  status: number
  payload?: unknown
  constructor(message: string, status: number, payload?: unknown) {
    super(message)
    this.status = status
    this.payload = payload
  }
}

type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean }

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15_000,
})

api.interceptors.request.use((config) => {
  const session = readSession()
  if (session?.access_token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${session.access_token}`
  }
  return config
})

let refreshPromise: Promise<AuthSession | null> | null = null

async function refreshTokens(): Promise<AuthSession | null> {
  const current = readSession()
  if (!current?.refresh_token) return null
  try {
    const resp = await axios.post<ApiEnvelope<AuthSession>>(
      `${API_URL}/auth/refresh`,
      { refresh_token: current.refresh_token },
      { headers: { "Content-Type": "application/json" } },
    )
    const next = resp.data.data
    if (!next) return null
    writeSession(next)
    return next
  } catch {
    clearSession()
    return null
  }
}

api.interceptors.response.use(
  (resp) => resp,
  async (err: AxiosError) => {
    const original = err.config as RetriableConfig | undefined
    const status = err.response?.status

    if (status === 401 && original && !original._retry) {
      original._retry = true
      refreshPromise = refreshPromise ?? refreshTokens()
      const next = await refreshPromise
      refreshPromise = null
      if (next?.access_token) {
        original.headers = original.headers ?? {}
        original.headers.Authorization = `Bearer ${next.access_token}`
        return api.request(original)
      }
    }

    const data = err.response?.data as ApiEnvelope<unknown> | undefined
    const msg =
      (data && (data.error || data.message)) ||
      err.message ||
      "Request failed"
    throw new ApiError(msg, status ?? 0, err.response?.data)
  },
)

export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const resp = await api.request<ApiEnvelope<T>>(config)
  if (resp.data && resp.data.success === false) {
    throw new ApiError(
      resp.data.error || "Request failed",
      resp.status,
      resp.data,
    )
  }
  return (resp.data?.data ?? (resp.data as unknown as T)) as T
}

export const apiClient = api
