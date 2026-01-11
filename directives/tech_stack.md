# Tech Stack & Architecture

## Project Structure (Monorepo/Workspace)
- `apps/web/`: Frontend Next.js (ShadcnUI + Tailwind).
- `apps/api/`: Backend FastAPI ou Node.js (Business Logic).
- `packages/shared/`: Tipos TypeScript e Schemas Zod compartilhados.
- `execution/`: Scripts determinísticos de automação e infra.
- `directives/`: Este manual de instruções.
- `infrastructure/`: Arquivos Docker, Coolify e Caddy.

# **Design System**
Read directives/file design_system.md

## Frontend
- **Framework:** Next.js 16.1 (App Router, standalone build)
- **Language:** TypeScript  (strict mode)
- **UI** React 19.2 + Tailwind CSS + shadcn/ui
- **State Management:** TanStack Query (Server State) + Zustand (Client State)

## Backend
- **Framework:** Hono (Node.js 20)

## Database Layer
- **ORM:** Prisma
- **Workflow:** 1. Alterar `prisma/schema.prisma`.
  2. Rodar `npx prisma migrate dev` (via Execution Layer).
  3. A Camada 2 deve validar o sucesso da migração antes de alterar o código do Backend.

## Database
- **Provider:** Neon Postgres
- **ORM:** Prisma
- **Workflow:** 
  1. Alterar `prisma/schema.prisma`.
  2. Rodar `npx prisma migrate dev` (via Execution Layer).
  3. A Camada 2 deve validar o sucesso da migração antes de alterar o código do Backend.


## Authentication
- **Provider:** Clerk
- **Pattern:** Use middleware for route protection. Use pre-built components for Auth UI.

---

## Future Development Considerations

### Server Components vs Client Components

| Use Server Component (default) | Use Client Component (`'use client'`) |
|--------------------------------|---------------------------------------|
| Data fetching | Interactive UI (useState, useEffect) |
| Access backend resources | Browser APIs (localStorage, etc.) |
| Sensitive data (API keys) | Event listeners (onClick, onChange) |
| Heavy dependencies | React hooks |

### App Router Patterns

```typescript
// Server Component (default) - can fetch data directly
async function TestamentosPage() {
  const testamentos = await db.testamento.findMany();
  return <TestamentoList items={testamentos} />;
}

// Client Component - for interactivity
'use client';
function TestamentoList({ items }) {
  const [selected, setSelected] = useState(null);
  // ...
}
```

### API Routes Best Practices

1. **Use Route Handlers** (`app/api/*/route.ts`) not Pages API (`pages/api/*`)
2. **Validate with Zod** at the start of every handler
3. **Return proper status codes** (201 for create, 204 for delete)
4. **Handle errors consistently** with try/catch

### SSR Considerations

- **Hydration mismatch:** Use `suppressHydrationWarning` only for intentional differences
- **Client-only code:** Wrap with `dynamic(() => import(...), { ssr: false })`
- **Date/time:** Use consistent timezone handling (see debugging.md)
