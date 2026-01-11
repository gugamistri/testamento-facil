# Integration Points

## Clerk Authentication

### Middleware Setup
```typescript
// middleware.ts (root)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

### Server Components
```typescript
// app/admin/page.tsx
import { auth } from '@clerk/nextjs/server';

export default async function AdminPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');
  
  // Fetch user-specific data
  const testamentos = await db.testamento.findMany({
    where: { userId },
  });
}
```

### Client Components
```typescript
// components/UserProfile.tsx
'use client';
import { useUser, useClerk } from '@clerk/nextjs';

export function UserProfile() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  
  if (!isLoaded) return <Skeleton />;
  
  return (
    <div>
      <p>{user?.fullName}</p>
      <Button onClick={() => signOut()}>Sair</Button>
    </div>
  );
}
```

### Protected API Routes
```typescript
// app/api/testamentos/route.ts
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  // ... rest of handler
}
```

---

## Prisma Database

### Client Setup
```typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
```

### Query Patterns
```typescript
// Server Component or API Route
import { db } from '@/lib/prisma';

// Basic query
const users = await db.user.findMany();

// With relations
const testamento = await db.testamento.findUnique({
  where: { id },
  include: {
    beneficiarios: true,
    ativos: true,
  },
});

// Transaction
await db.$transaction([
  db.testamento.update({ where: { id }, data: { status: 'assinado' } }),
  db.auditLog.create({ data: { action: 'SIGN', testamentoId: id } }),
]);
```

### Migration Workflow
1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name <description>`
3. Verify migration success before changing backend code
4. Run `npx prisma generate` to update client

---

## Zustand (Client State)

### Store Pattern
```typescript
// stores/ui-store.ts
import { create } from 'zustand';

interface UIState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));
```

### When to Use What
| State Type | Solution | Example |
|------------|----------|---------|
| Server data | TanStack Query | User list, testamentos |
| UI state | Zustand | Sidebar, modals |
| Form state | React Hook Form | Input values |
| URL state | nuqs / useSearchParams | Filters, pagination |

---

## TanStack Query Provider

```typescript
// providers/query-provider.tsx
'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

---

## Rules

1. **Clerk:** Always use `auth()` on server, `useUser()` on client
2. **Prisma:** Only use in Server Components or API Routes (never in client)
3. **Zustand:** Only for UI state, never for server data
4. **TanStack Query:** Wrap app in `QueryProvider`
