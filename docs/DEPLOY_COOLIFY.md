# 🚀 Deploy no Coolify - Testamento Fácil

Este guia documenta como fazer deploy da aplicação Testamento Fácil no Coolify.

## 📋 Pré-requisitos

- Coolify instalado e configurado
- Domínio apontando para o servidor Coolify
- Acesso ao repositório Git

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                        Coolify                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                   Traefik (Proxy)                       │ │
│  │                   SSL/TLS Automático                    │ │
│  └─────────────────────────────────────────────────────────┘ │
│                            │                                  │
│           ┌────────────────┼────────────────┐                │
│           ▼                ▼                ▼                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │     Web     │  │     API     │  │  Migrations │          │
│  │  (Next.js)  │  │   (Hono)    │  │   (Prisma)  │          │
│  │   :3000     │  │   :3001     │  │   one-shot  │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
│           │                │                                  │
│           └────────────────┼────────────────┘                │
│                            │                                  │
│           ┌────────────────┴────────────────┐                │
│           ▼                                 ▼                │
│  ┌─────────────────────┐     ┌─────────────────────┐        │
│  │      PostgreSQL     │     │        Redis        │        │
│  │         :5432       │     │        :6379        │        │
│  └─────────────────────┘     └─────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `docker-compose.prod.yml` | Compose para produção (Coolify) |
| `docker-compose.yml` | Compose para desenvolvimento local |
| `apps/web/Dockerfile` | Dockerfile do frontend Next.js |
| `apps/api/Dockerfile` | Dockerfile do backend Hono API |
| `.env.production.example` | Template de variáveis de ambiente |
| `.dockerignore` | Arquivos ignorados no build |

## 🔧 Opção 1: Deploy via Docker Compose no Coolify

### 1. Criar novo projeto no Coolify

1. Acesse o painel do Coolify
2. Crie um novo projeto: "Testamento Fácil"
3. Adicione uma nova **Resource** → **Docker Compose**

### 2. Configurar repositório

- **Repository URL**: URL do seu repositório Git
- **Branch**: `main` (ou sua branch de produção)
- **Docker Compose File**: `docker-compose.prod.yml`

### 3. Configurar variáveis de ambiente

No Coolify, adicione as seguintes variáveis:

```env
# Database
POSTGRES_USER=testamento
POSTGRES_PASSWORD=SUA_SENHA_FORTE_AQUI
POSTGRES_DB=testamento_prod

# Redis
REDIS_PASSWORD=SUA_SENHA_REDIS_AQUI

# Clerk Auth (obrigatório)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_XXXXX
CLERK_SECRET_KEY=sk_live_XXXXX
CLERK_WEBHOOK_SECRET=whsec_XXXXX

# API URL pública
NEXT_PUBLIC_API_URL=https://api.seudominio.com.br
```

### 4. Configurar domínios

No Coolify, configure os domínios para cada serviço:

| Serviço | Domínio | Porta |
|---------|---------|-------|
| web | `testamentofacil.com.br` | 3000 |
| api | `api.testamentofacil.com.br` | 3001 |

### 5. Deploy

Clique em **Deploy** e aguarde o build completar.

---

## 🔧 Opção 2: Deploy de Serviços Separados

Se preferir mais controle, deploy cada serviço individualmente:

### 2.1. PostgreSQL

1. **Resource** → **Database** → **PostgreSQL**
2. Use a imagem: `postgres:16-alpine`
3. Configure as variáveis de ambiente

### 2.2. Redis

1. **Resource** → **Database** → **Redis**
2. Use a imagem: `redis:7-alpine`
3. Configure senha via `--requirepass`

### 2.3. API Backend

1. **Resource** → **Application** → **Dockerfile**
2. Dockerfile path: `apps/api/Dockerfile`
3. Porta: `3001`
4. Configure as variáveis de ambiente

### 2.4. Web Frontend

1. **Resource** → **Application** → **Dockerfile**
2. Dockerfile path: `apps/web/Dockerfile`
3. Porta: `3000`
4. Configure as variáveis de ambiente (incluindo build args)

---

## 🔒 Segurança

### Variáveis Sensíveis

Nunca commite valores reais no repositório. Use o Coolify para gerenciar secrets:

- `POSTGRES_PASSWORD`
- `REDIS_PASSWORD`
- `CLERK_SECRET_KEY`
- `CLERK_WEBHOOK_SECRET`

### Headers de Segurança

O Next.js já está configurado com:
- `poweredByHeader: false`
- Strict Mode habilitado

### SSL/TLS

O Coolify/Traefik gerencia certificados SSL automaticamente via Let's Encrypt.

---

## 🔄 Migrations

As migrations rodam automaticamente no deploy via o serviço `migrations`:

```yaml
migrations:
  command: ["npx", "prisma", "migrate", "deploy"]
  restart: "no"
```

Para rodar migrations manualmente:

```bash
# No Coolify, acesse o terminal do container api
npx prisma migrate deploy
```

---

## 📊 Monitoramento

### Health Checks

Todos os serviços possuem health checks configurados:

| Serviço | Endpoint | Intervalo |
|---------|----------|-----------|
| API | `GET /health` | 30s |
| Web | `GET /` | 30s |
| PostgreSQL | `pg_isready` | 10s |
| Redis | `redis-cli ping` | 10s |

### Logs

No Coolify, acesse os logs de cada serviço em tempo real.

---

## 🐛 Troubleshooting

### Build falha

```bash
# Verifique se o .dockerignore está correto
# Verifique se todas as dependências estão no package.json
```

### Conexão com banco falha

```bash
# Verifique se o postgres está healthy
# Verifique a DATABASE_URL
docker logs testamento-postgres
```

### API não responde

```bash
# Verifique os logs
docker logs testamento-api

# Teste o health endpoint
curl http://localhost:3001/health
```

### Web não carrega

```bash
# Verifique se as variáveis NEXT_PUBLIC_* foram passadas no build
# Verifique se a API está acessível
docker logs testamento-web
```

---

## 📝 Atualizações

Para atualizar a aplicação:

1. Push para a branch configurada
2. No Coolify, clique em **Redeploy** ou configure auto-deploy

---

## 🧪 Desenvolvimento Local com Docker

```bash
# Subir apenas banco e redis
docker-compose up -d postgres redis

# Rodar migrations
pnpm db:migrate

# Desenvolvimento local
pnpm dev
```

Para testar o build de produção localmente:

```bash
# Build e run completo
docker-compose -f docker-compose.prod.yml up --build
```
