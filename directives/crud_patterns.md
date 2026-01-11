# CRUD & Data Table Patterns

## Tabelas (Tables)
- **Biblioteca:** Use o componente `<DataTable />` do ShadcnUI (baseado no TanStack Table).
- **Elementos Obrigatórios:**
    - Barra de busca no topo esquerdo.
    - Botão "Novo [Recurso]" no topo direito (cor primária).
    - Paginação no rodapé (setas e "Página X de Y").
    - Empty State: Ilustração simples quando não houver dados.

## Formulários (Forms)
- **Biblioteca:** React Hook Form + Zod.
- **Feedback:** Botão de submit deve entrar em estado `loading` e ficar desabilitado após o clique.
- **Icons:** Use APENAS a biblioteca `lucide-react`.
    - Edit: `Pencil`
    - Delete: `Trash2`
    - View: `Eye`