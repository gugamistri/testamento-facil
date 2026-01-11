// Role definitions for Testamento Digital
// Synced with Prisma schema enum

export const ROLES = ['CLIENT', 'LAWYER', 'ADMIN', 'PARTNER'] as const
export type Role = (typeof ROLES)[number]

// Role hierarchy (higher index = more permissions)
export const ROLE_HIERARCHY: Record<Role, number> = {
  CLIENT: 0,
  PARTNER: 1,
  LAWYER: 2,
  ADMIN: 3,
}

// Permission definitions per role
export const ROLE_PERMISSIONS: Record<Role, string[]> = {
  CLIENT: ['read:own:testament', 'write:own:testament', 'read:own:profile'],
  PARTNER: ['read:own:leads', 'read:own:metrics'],
  LAWYER: [
    'read:own:testament',
    'write:own:testament',
    'validate:testament',
    'read:assigned:clients',
    'conduct:video:validation',
  ],
  ADMIN: [
    'read:all',
    'write:all',
    'manage:users',
    'manage:roles',
    'view:analytics',
    'approve:opening',
  ],
}

// Check if a role has a specific permission
export function hasPermission(role: Role, permission: string): boolean {
  if (role === 'ADMIN') return true // Admin has all permissions
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false
}

// Check if role A has higher or equal hierarchy than role B
export function hasRoleLevel(userRole: Role, requiredRole: Role): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole]
}

// Check if user has one of the allowed roles
export function isAllowedRole(userRole: Role, allowedRoles: Role[]): boolean {
  return allowedRoles.includes(userRole)
}

// Default role for new users
export const DEFAULT_ROLE: Role = 'CLIENT'

// Role display names (PT-BR)
export const ROLE_LABELS: Record<Role, string> = {
  CLIENT: 'Cliente',
  LAWYER: 'Advogado',
  ADMIN: 'Administrador',
  PARTNER: 'Parceiro',
}
