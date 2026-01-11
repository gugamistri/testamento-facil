import type { Role } from '@testamento/shared'

declare global {
  interface CustomJwtSessionClaims {
    metadata?: {
      role?: Role
    }
  }
}
