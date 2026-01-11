import { z } from 'zod'

// User validation schema - to be expanded in Phase 1 (Auth)
export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(2).max(100).nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type UserInput = z.infer<typeof userSchema>

// Email validation
export const emailSchema = z.string().email('Email inválido')

// Common validation schemas
export const paginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
})
