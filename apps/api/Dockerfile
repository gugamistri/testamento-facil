# ============================================
# Dockerfile para Backend API Hono (Produção)
# Otimizado para Coolify deployment com pnpm deploy
# ============================================

FROM node:20-alpine AS base

# Install pnpm and system dependencies
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate && \
    apk add --no-cache openssl libc6-compat

# ============================================
# Build stage
# ============================================
FROM base AS builder

WORKDIR /app

# Copy workspace configuration and locks
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./

# Copy all package manifests
COPY apps/api/package.json ./apps/api/
COPY packages/shared/package.json ./packages/shared/

# Install all dependencies (including devDeps for building)
RUN pnpm install --frozen-lockfile

# Copy source code and prisma
COPY . .

# Generate Prisma client (schema is at root level, not in apps/api)
RUN DATABASE_URL="postgresql://localhost:5432/dummy" pnpm exec prisma generate --schema=prisma/schema.prisma

# Build the API
WORKDIR /app/apps/api
RUN pnpm build

# Use pnpm deploy to create a standalone production bundle
# This isolates the 'api' package and its production dependencies
WORKDIR /app
RUN pnpm --filter api --prod deploy /app-deploy

# ============================================
# Production runner stage
# ============================================
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Install openssl for Prisma runtime and wget for healthcheck
RUN apk add --no-cache openssl wget

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 honojs

# Copy standalone production bundle from builder
COPY --from=builder /app-deploy ./

# Copy compiled files from builder (pnpm deploy copies source/manifests only usually)
# We need to ensure the 'dist' folder is present in the final image
COPY --from=builder /app/apps/api/dist ./dist

# Copy prisma schema for migrations
COPY --from=builder /app/prisma ./prisma

# Set correct ownership
RUN chown -R honojs:nodejs /app

# Switch to non-root user
USER honojs

EXPOSE 3001

ENV PORT=3001

# Start the API server
CMD ["node", "dist/index.js"]
