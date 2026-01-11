import { auth } from '@clerk/nextjs/server'
import type { Role } from '@testamento/shared'
import { DEFAULT_ROLE, isAllowedRole } from '@testamento/shared'
import { redirect } from 'next/navigation'

interface RoleGateProps {
  children: React.ReactNode
  allowedRoles: Role[]
  fallback?: React.ReactNode
}

// Server component that conditionally renders based on role
export async function RoleGate({ children, allowedRoles, fallback = null }: RoleGateProps) {
  const { sessionClaims } = await auth()
  const userRole = (sessionClaims?.metadata?.role as Role) || DEFAULT_ROLE

  if (!isAllowedRole(userRole, allowedRoles)) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Redirect wrapper for protected pages
export async function requireRole(allowedRoles: Role[], redirectTo = '/dashboard') {
  const { sessionClaims } = await auth()
  const userRole = (sessionClaims?.metadata?.role as Role) || DEFAULT_ROLE

  if (!isAllowedRole(userRole, allowedRoles)) {
    redirect(redirectTo)
  }
}

// Client-side role check hook (use in client components)
export function useHasRole(userRole: Role, allowedRoles: Role[]): boolean {
  return isAllowedRole(userRole, allowedRoles)
}
