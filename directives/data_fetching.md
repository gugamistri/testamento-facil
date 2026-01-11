# Data Fetching Patterns

## Technology
- **Server State:** TanStack Query (React Query v5)
- **Client State:** Zustand (for UI-only state)
- **API Layer:** Next.js API Routes + Hono (apps/api)

## Directory Structure
```
hooks/
├── data/           # Query/mutation hooks (server state)
│   ├── useUsers.ts
│   ├── useTestamento.ts
│   └── useBeneficiarios.ts
├── ui/             # UI state hooks
└── auth/           # Auth-specific hooks
```

## Query Hook Pattern

```typescript
// hooks/data/useTestamentos.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

// Query Keys - always arrays, hierarchical
export const testamentoKeys = {
  all: ['testamentos'] as const,
  lists: () => [...testamentoKeys.all, 'list'] as const,
  list: (filters: TestamentoFilters) => [...testamentoKeys.lists(), filters] as const,
  details: () => [...testamentoKeys.all, 'detail'] as const,
  detail: (id: string) => [...testamentoKeys.details(), id] as const,
};

// Query Hook
export function useTestamentos(filters: TestamentoFilters) {
  return useQuery({
    queryKey: testamentoKeys.list(filters),
    queryFn: () => api.testamentos.list(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Single item
export function useTestamento(id: string) {
  return useQuery({
    queryKey: testamentoKeys.detail(id),
    queryFn: () => api.testamentos.get(id),
    enabled: !!id,
  });
}
```

## Mutation Pattern

```typescript
// hooks/data/useTestamentos.ts (continued)
export function useCreateTestamento() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTestamentoInput) => api.testamentos.create(data),
    onSuccess: () => {
      // Invalidate list queries
      queryClient.invalidateQueries({ queryKey: testamentoKeys.lists() });
    },
    onError: (error) => {
      // Toast notification handled globally
      console.error('Failed to create testamento:', error);
    },
  });
}

export function useUpdateTestamento() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTestamentoInput }) =>
      api.testamentos.update(id, data),
    onSuccess: (_, { id }) => {
      // Invalidate specific item and lists
      queryClient.invalidateQueries({ queryKey: testamentoKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: testamentoKeys.lists() });
    },
  });
}
```

## Loading & Error States

```typescript
// Component usage pattern
function TestamentoList() {
  const { data, isLoading, isError, error } = useTestamentos({ status: 'active' });

  if (isLoading) {
    return <Skeleton className="h-40 w-full" />;
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Erro ao carregar</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  if (!data?.length) {
    return <EmptyState message="Nenhum testamento encontrado" />;
  }

  return <TestamentoGrid items={data} />;
}
```

## API Client Setup

```typescript
// lib/api.ts
import { hc } from 'hono/client';
import type { AppType } from '@/apps/api/src/index';

const client = hc<AppType>(process.env.NEXT_PUBLIC_API_URL!);

export const api = {
  testamentos: {
    list: (filters) => client.api.v1.testamentos.$get({ query: filters }).then(r => r.json()),
    get: (id) => client.api.v1.testamentos[':id'].$get({ param: { id } }).then(r => r.json()),
    create: (data) => client.api.v1.testamentos.$post({ json: data }).then(r => r.json()),
    update: (id, data) => client.api.v1.testamentos[':id'].$put({ param: { id }, json: data }).then(r => r.json()),
  },
};
```

## Rules

1. **Never use `useEffect` for data fetching** - Always use TanStack Query
2. **Keep query keys consistent** - Use the factory pattern shown above
3. **Set appropriate `staleTime`** - Default is 0, consider 5min for slow-changing data
4. **Handle all states** - Loading, error, empty, and success
5. **Invalidate on mutations** - Use `queryClient.invalidateQueries()`
6. **Use `enabled` for conditional queries** - Prevent fetching until dependencies are ready
