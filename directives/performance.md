# Performance Guidelines

## React Optimization

### React.memo for Expensive Components
```typescript
// Use when component re-renders often with same props
const ExpensiveList = memo(function ExpensiveList({ items }: Props) {
  return items.map(item => <ExpensiveItem key={item.id} {...item} />);
});

// With custom comparison
const OptimizedCard = memo(
  function OptimizedCard({ data }: Props) { /* ... */ },
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id
);
```

### useCallback for Event Handlers
```typescript
// ✅ Stable reference - won't cause child re-renders
const handleClick = useCallback((id: string) => {
  setSelected(id);
}, []);

// ❌ New function every render
const handleClick = (id: string) => setSelected(id);
```

### useMemo for Expensive Calculations
```typescript
// ✅ Only recalculate when dependencies change
const sortedItems = useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);

// ❌ Sorts on every render
const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
```

---

## List Rendering

### Always Use Stable Keys
```typescript
// ✅ Unique, stable identifier
{items.map(item => <Card key={item.id} {...item} />)}

// ❌ Index as key (causes issues on reorder)
{items.map((item, index) => <Card key={index} {...item} />)}

// ❌ Random key (destroys component on every render)
{items.map(item => <Card key={Math.random()} {...item} />)}
```

### Virtualization for Long Lists
```typescript
// Use @tanstack/react-virtual for lists > 100 items
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} className="h-[400px] overflow-auto">
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div key={virtualRow.key} style={{ transform: `translateY(${virtualRow.start}px)` }}>
            {items[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Lazy Loading

### Components
```typescript
// Lazy load heavy components
const PdfViewer = lazy(() => import('@/components/PdfViewer'));

function DocumentPage() {
  return (
    <Suspense fallback={<Skeleton className="h-96" />}>
      <PdfViewer url={docUrl} />
    </Suspense>
  );
}
```

### Routes (Next.js handles automatically)
Next.js App Router automatically code-splits by route. No action needed.

---

## Image Optimization

### Use next/image
```typescript
import Image from 'next/image';

// ✅ Optimized, lazy-loaded, responsive
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL={blurUrl}
/>

// ❌ Unoptimized
<img src="/hero.jpg" alt="Hero" />
```

### Image Sizes
```typescript
// Specify sizes for responsive images
<Image
  src={src}
  alt={alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## Bundle Size

### Analyze Bundle
```bash
# Install analyzer
pnpm add -D @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true pnpm build
```

### Import Optimization
```typescript
// ✅ Tree-shakeable named import
import { Button } from '@/components/ui/button';

// ❌ Imports entire library
import * as UI from '@/components/ui';

// ✅ Dynamic import for heavy libraries
const Chart = dynamic(() => import('recharts').then(mod => mod.LineChart), {
  ssr: false,
  loading: () => <Skeleton />,
});
```

---

## TanStack Query Optimization

### Appropriate Stale Times
```typescript
// Static data (rarely changes)
staleTime: 24 * 60 * 60 * 1000, // 24 hours

// Semi-static (changes occasionally)
staleTime: 5 * 60 * 1000, // 5 minutes

// Dynamic (changes frequently)
staleTime: 30 * 1000, // 30 seconds

// Real-time (always fresh)
staleTime: 0, // default
```

### Prefetching
```typescript
// Prefetch on hover
<Link
  href={`/testamento/${id}`}
  onMouseEnter={() => {
    queryClient.prefetchQuery({
      queryKey: ['testamento', id],
      queryFn: () => fetchTestamento(id),
    });
  }}
>
  View
</Link>
```

---

## Performance Checklist

- [ ] Heavy components wrapped in `memo()`
- [ ] Event handlers use `useCallback` when passed to children
- [ ] Expensive calculations use `useMemo`
- [ ] Lists use stable `key` props
- [ ] Long lists (>100 items) use virtualization
- [ ] Images use `next/image`
- [ ] Heavy components lazy-loaded
- [ ] Query `staleTime` set appropriately
- [ ] No unnecessary re-renders (check React DevTools)
