# UI Layout Architecture

## 1. Global Layout (`/app/layout.tsx`)
- Contains: Root HTML, Font providers, Clerk/Auth providers, Toaster (notifications).
- **Consistência:** O Footer e o Header globais residem APENAS aqui.

## 2. Admin Shell (`/app/admin/layout.tsx`)
- Todos os arquivos dentro de `/admin/*` herdam este layout.
- **Componentes Obrigatórios:**
    - Sidebar lateral fixa com navegação.
    - Breadcrumbs dinâmicos no topo.
    - Avatar do usuário (Clerk).
- **Regra:** Nunca recrie o menu lateral em páginas individuais.

## 3. Web Shell (`/app/(marketing)/layout.tsx`)
- Para Landing Pages e páginas institucionais.
- Header transparente que fica sólido ao rolar.