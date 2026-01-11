import { auth, currentUser } from '@clerk/nextjs/server'
import type { Role } from '@testamento/shared'
import { DEFAULT_ROLE, hasRoleLevel, isAllowedRole } from '@testamento/shared'

// Get current authenticated user with role
export async function getCurrentUserWithRole() {
  const user = await currentUser()
  if (!user) return null

  const role = (user.publicMetadata?.role as Role) || DEFAULT_ROLE

  return {
    id: user.id,
    email: user.emailAddresses[0]?.emailAddress,
    firstName: user.firstName,
    lastName: user.lastName,
    role,
    imageUrl: user.imageUrl,
  }
}

// Get user role from Clerk session
export async function getUserRole(): Promise<Role> {
  const { sessionClaims } = await auth()
  return (sessionClaims?.metadata?.role as Role) || DEFAULT_ROLE
}

// Check if current user has required role
export async function checkRole(requiredRole: Role): Promise<boolean> {
  const userRole = await getUserRole()
  return hasRoleLevel(userRole, requiredRole)
}

// Check if current user has one of allowed roles
export async function checkAllowedRoles(allowedRoles: Role[]): Promise<boolean> {
  const userRole = await getUserRole()
  return isAllowedRole(userRole, allowedRoles)
}

// Server action to check admin access
export async function requireAdmin(): Promise<void> {
  const userRole = await getUserRole()
  if (userRole !== 'ADMIN') {
    throw new Error('Unauthorized: Admin access required')
  }
}

// Server action to check lawyer access
export async function requireLawyer(): Promise<void> {
  const userRole = await getUserRole()
  if (!['LAWYER', 'ADMIN'].includes(userRole)) {
    throw new Error('Unauthorized: Lawyer access required')
  }
}
