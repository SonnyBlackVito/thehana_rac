export type Role = "admin" | "manager" | "user"
export type Provider = "local" | "google"

export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  role: Role
  provider: Provider
  is_active: boolean
  is_approved: boolean
  created_at: string
  updated_at: string
}

export interface AuthSession {
  user: User
  access_token: string
  refresh_token: string
}

export interface ApiEnvelope<T> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

export interface RegisterPayload {
  email: string
  password: string
  name: string
}

export interface LoginPayload {
  email: string
  password: string
}
