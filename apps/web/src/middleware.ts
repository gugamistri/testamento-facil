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
    // RBAC is now handled in per-route Layouts to ensure fresh metadata access and avoid JWT caching issues.
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
