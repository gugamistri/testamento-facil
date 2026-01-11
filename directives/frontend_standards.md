# Frontend Standards

## Directory Map
- `app/`: Next.js App Router (Pages & Layouts)
- `components/ui/`: Componentes base do ShadcnUI (não editar manualmente)
- `components/ui-custom/`: Componentes customizados reutilizáveis
- `components/features/`: Componentes de negócio (ex: `TestamentoCard.tsx`)
- `hooks/`: Custom hooks organizados por categoria (`data/`, `ui/`, `auth/`)
- `lib/`: Utilitários e configurações de clientes (Prisma, Clerk)
- `stores/`: Zustand stores para estado de UI

---

## Component Structure Template

```typescript
// components/features/beneficiario-card.tsx
import { cn } from '@/lib/utils';

interface BeneficiarioCardProps {
  nome: string;
  percentual: number;
  className?: string;
  onEdit?: (id: string) => void;    // "on" prefix for handlers
  onDelete?: (id: string) => void;
}

export function BeneficiarioCard({
  nome,
  percentual,
  className,
  onEdit,
  onDelete,
}: BeneficiarioCardProps) {
  // 1. Hooks at the top
  const [isExpanded, setIsExpanded] = useState(false);

  // 2. Event handlers with "handle" prefix internally
  const handleEditClick = () => {
    onEdit?.(id);
  };

  // 3. Early returns for edge cases
  if (!nome) return null;

  // 4. Main render
  return (
    <div className={cn('rounded-lg border p-4', className)}>
      <h3 className="text-foreground font-medium">{nome}</h3>
      <p className="text-muted-foreground">{percentual}%</p>
      <Button onClick={handleEditClick}>Editar</Button>
    </div>
  );
}
```

---

## Naming Conventions

### Component Props
- Use `on` prefix for callback props: `onSubmit`, `onClick`, `onToggle`
- Use `is` or `has` prefix for booleans: `isLoading`, `hasError`, `isOpen`
- Avoid abbreviations: `beneficiario` not `benef`

### Event Handlers
- Internal handlers: `handleXxx` (e.g., `handleSubmit`, `handleClick`)
- Props: `onXxx` (e.g., `onSubmit`, `onClick`)

```typescript
// ✅ Good
interface Props {
  onToggle: () => void;
  isOpen: boolean;
}

// ❌ Bad
interface Props {
  toggle: () => void;
  open: boolean;
}
```

---

## Router Patterns (Next.js App Router)

### Import from `next/navigation`
```typescript
// ✅ App Router
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

// ❌ Pages Router (deprecated)
import { useRouter } from 'next/router';
```

### Navigation
```typescript
'use client';
import { useRouter } from 'next/navigation';

function Component() {
  const router = useRouter();

  // Navigate
  router.push('/admin/testamentos');

  // Replace (no back history)
  router.replace('/admin/testamentos');

  // Refresh server components
  router.refresh();
}
```

### Reading URL State
```typescript
import { useSearchParams, usePathname } from 'next/navigation';

function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const status = searchParams.get('status'); // ?status=active

  // Update URL params
  const params = new URLSearchParams(searchParams);
  params.set('page', '2');
  router.push(`${pathname}?${params.toString()}`);
}
```

---

## Export Pattern

```typescript
// ✅ Always named exports
export function MyComponent() {}
export { MyComponent };

// ❌ Avoid default exports
export default function MyComponent() {}
```

---

## Rules

1. **Never use React.FC** - Use explicit props type
2. **Always use arrow functions** for components
3. **Named exports only** - No default exports
4. **Hooks at top** - Before any conditionals or early returns
5. **Use `cn()` utility** for conditional classes
