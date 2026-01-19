import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isClientRoute = createRouteMatcher(['/dashboard(.*)', '/wizard(.*)'])
const isLawyerRoute = createRouteMatcher(['/lawyer(.*)'])
const isPartnerRoute = createRouteMatcher(['/partner(.*)'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Protect all dashboard-like routes
  if (isClientRoute(req) || isLawyerRoute(req) || isPartnerRoute(req) || isAdminRoute(req)) {
    await auth.protect()

    const { sessionClaims } = await auth()
    const role = (sessionClaims?.metadata as any)?.role || 'CLIENT'

    // Admin super-access
    if (role === 'ADMIN') return

    // Role-based Gates
    if (isLawyerRoute(req) && role !== 'LAWYER') {
      return NextResponse.redirect(new URL('/dashboard', req.url)) // Default backlog to Client Dash
    }

    if (isPartnerRoute(req) && role !== 'PARTNER') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    if (isAdminRoute(req) && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
