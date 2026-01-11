# Debugging Guide & Common Issues

## Authentication Issues (Clerk)

### Problem: "Unauthorized" on API routes
**Symptoms:** 401 errors on protected endpoints
**Check:**
1. Verify `CLERK_SECRET_KEY` in `.env`
2. Confirm middleware is protecting the route
3. Check if cookie is being sent (browser DevTools → Network → Headers)

**Fix:**
```typescript
// Ensure auth() is awaited
const { userId } = await auth(); // ✅
const { userId } = auth(); // ❌ Missing await
```

### Problem: Infinite redirect loop on sign-in
**Check:** `middleware.ts` public routes matcher
```typescript
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',  // Must include (.*)
  '/sign-up(.*)',
]);
```

---

## Database Issues (Prisma)

### Problem: "PrismaClientInitializationError"
**Symptoms:** Cannot connect to database
**Check:**
1. `DATABASE_URL` in `.env` is correct
2. Neon dashboard shows database is running
3. IP allowlist includes your IP (or `0.0.0.0/0` for dev)

**Fix:**
```bash
# Test connection
npx prisma db pull

# Reset if corrupted
npx prisma migrate reset
```

### Problem: "Unknown field" or "Column does not exist"
**Symptoms:** Query fails with field error
**Fix:**
```bash
# Regenerate client after schema changes
npx prisma generate

# If migration is missing
npx prisma migrate dev --name fix_schema
```

### Problem: Migration fails
**Check:** Look for conflicting migrations in `prisma/migrations/`
**Fix:**
```bash
# Mark migration as applied manually (if already in DB)
npx prisma migrate resolve --applied <migration_name>
```

---

## Build Failures

### Problem: Type errors on build
**Symptoms:** `pnpm build` fails with TypeScript errors
**Check:**
```bash
# Run type check separately
pnpm type-check

# Check for missing types
pnpm add -D @types/[package]
```

### Problem: "Module not found"
**Fix:**
1. Check import path (case-sensitive on Linux)
2. Verify `tsconfig.json` paths are correct
3. Run `pnpm install` to ensure dependencies are installed

### Problem: Next.js app won't build
**Common causes:**
- Server component importing client-only library
- Missing `'use client'` directive
- Async component not properly awaited

**Fix:**
```typescript
// Mark as client component if using hooks/browser APIs
'use client';
```

---

## Development Server Issues

### Problem: Port 3000 already in use
**Fix:**
```bash
# Kill process on port
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### Problem: Hot reload not working
**Check:**
1. File is saved
2. Not in `.next` cache issue

**Fix:**
```bash
rm -rf apps/web/.next
pnpm dev
```

### Problem: Changes not reflecting
**Fix:**
```bash
# Clear all caches
rm -rf node_modules/.cache
rm -rf apps/web/.next
pnpm dev
```

---

## API Response Issues

### Problem: CORS errors
**Symptoms:** Browser blocks request with CORS error
**Fix:** Add headers in `next.config.js` or API route:
```typescript
return NextResponse.json(data, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  },
});
```

### Problem: 500 Internal Server Error
**Check:**
1. Server logs in terminal
2. Try/catch wrapping API handler

**Pattern:**
```typescript
export async function GET() {
  try {
    // ... handler logic
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

---

## TanStack Query Issues

### Problem: Data not updating after mutation
**Fix:** Invalidate queries after mutation
```typescript
onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ['testamentos'] });
}
```

### Problem: Infinite refetching
**Check:** Query key is stable (not recreated on each render)
```typescript
// ❌ Bad - object created every render
queryKey: [{ filters }]

// ✅ Good - stable reference
queryKey: ['items', 'list', JSON.stringify(filters)]
```

---

## Quick Diagnosis Commands

```bash
# Check all types
pnpm type-check

# Check linting
pnpm lint

# Test database connection
npx prisma db pull

# View database
npx prisma studio

# Clear all caches
rm -rf node_modules/.cache apps/web/.next

# Check environment variables are loaded
node -e "console.log(process.env.DATABASE_URL)"
```
