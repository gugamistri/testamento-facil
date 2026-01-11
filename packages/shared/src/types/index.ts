// User types - to be expanded in Phase 1 (Auth)
export interface User {
  id: string
  email: string
  name: string | null
  createdAt: Date
  updatedAt: Date
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}

// Health check response
export interface HealthCheckResponse {
  status: 'ok' | 'error'
  timestamp: string
  service: string
  version: string
}
