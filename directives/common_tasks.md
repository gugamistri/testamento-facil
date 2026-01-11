# Common Development Tasks

## Adding a New Page

### 1. Create the Route (Frontend)
```
apps/web/app/admin/[feature-name]/page.tsx
```

### 2. Page Template
```typescript
// app/admin/beneficiarios/page.tsx
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { BeneficiariosClient } from './client';

export const metadata = { title: 'Beneficiários | Testamento Digital' };

export default async function BeneficiariosPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  return <BeneficiariosClient />;
}
```

### 3. Client Component (if interactive)
```typescript
// app/admin/beneficiarios/client.tsx
'use client';
import { useBeneficiarios } from '@/hooks/data/useBeneficiarios';

export function BeneficiariosClient() {
  const { data, isLoading } = useBeneficiarios();
  // ...
}
```

### 4. Add to Navigation (if needed)
Edit `components/admin/sidebar.tsx` to add the new route.

---

## Adding a New API Endpoint

### 1. Create Route Handler
```typescript
// app/api/v1/beneficiarios/route.ts
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/prisma';
import { z } from 'zod';

const createSchema = z.object({
  nome: z.string().min(1),
  cpf: z.string().length(11),
  percentual: z.number().min(0).max(100),
});

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const beneficiarios = await db.beneficiario.findMany({
    where: { testamento: { userId } },
  });

  return NextResponse.json(beneficiarios);
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const beneficiario = await db.beneficiario.create({
    data: { ...parsed.data, testamentoId: 'xxx' },
  });

  return NextResponse.json(beneficiario, { status: 201 });
}
```

### 2. Create Query Hook
```typescript
// hooks/data/useBeneficiarios.ts
// Follow pattern in data_fetching.md
```

### 3. Add .http Test File
```http
// tests/api/beneficiarios.http
### List all
GET {{baseUrl}}/api/v1/beneficiarios
Authorization: Bearer {{token}}

### Create new
POST {{baseUrl}}/api/v1/beneficiarios
Authorization: Bearer {{token}}
Content-Type: application/json

{
  "nome": "João Silva",
  "cpf": "12345678901",
  "percentual": 50
}
```

---

## Creating a Shared Component

### 1. Determine Location
- **UI primitives** → `components/ui/` (shadcn)
- **Custom shared** → `components/ui-custom/`
- **Feature-specific** → `components/features/[feature]/`

### 2. Component Template
```typescript
// components/ui-custom/status-badge.tsx
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        success: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        error: 'bg-destructive/10 text-destructive',
      },
    },
    defaultVariants: { variant: 'success' },
  }
);

interface StatusBadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      {children}
    </span>
  );
}
```

### 3. Export Pattern
```typescript
// Always named exports, never default
export { StatusBadge };
```

---

## Adding a New Database Table

### 1. Update Schema
```prisma
// prisma/schema.prisma
model Beneficiario {
  id           String     @id @default(cuid())
  nome         String
  cpf          String
  percentual   Float
  testamentoId String
  testamento   Testamento @relation(fields: [testamentoId], references: [id])
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
}
```

### 2. Run Migration
```bash
npx prisma migrate dev --name add_beneficiario_table
```

### 3. Generate Client
```bash
npx prisma generate
```

### 4. Verify in DB
```bash
npx prisma studio
```

---

## Checklist for Any New Feature

- [ ] Database schema updated (if needed)
- [ ] API endpoint created with validation
- [ ] Query hook created in `hooks/data/`
- [ ] Page/component created
- [ ] Navigation updated (if applicable)
- [ ] `.http` test file created
- [ ] Types defined or generated
