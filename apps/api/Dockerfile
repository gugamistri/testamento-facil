# ============================================
# Dockerfile para Backend API Hono (Produção)
# Otimizado para Coolify deployment
# ============================================

FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# ============================================
# Dependencies stage
# ============================================
FROM base AS deps

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./
COPY apps/api/package.json ./apps/api/
COPY packages/shared/package.json ./packages/shared/
COPY prisma ./prisma/
COPY pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Generate Prisma client
RUN npx prisma generate

# ============================================
# Builder stage
# ============================================
FROM base AS builder

WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=deps /app/packages/shared/node_modules ./packages/shared/node_modules

# Copy Prisma generated client
COPY --from=deps /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=deps /app/node_modules/@prisma ./node_modules/@prisma

# Copy source code
COPY . .

# Build the API
WORKDIR /app/apps/api
RUN pnpm build

# ============================================
# Production runner stage
# ============================================
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Install only production dependencies for smaller image
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 honojs

# Copy built application
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy prisma schema for migrations
COPY --from=builder /app/prisma ./prisma

# Install production dependencies only
COPY package.json pnpm-lock.yaml* ./tmp/
COPY apps/api/package.json ./tmp/apps/api/
COPY packages/shared/package.json ./tmp/packages/shared/
COPY pnpm-workspace.yaml ./tmp/

WORKDIR /tmp
RUN pnpm install --frozen-lockfile --prod
WORKDIR /app

# Copy production node_modules
COPY --from=deps /app/node_modules/@hono ./node_modules/@hono
COPY --from=deps /app/node_modules/hono ./node_modules/hono

# Set correct ownership
RUN chown -R honojs:nodejs /app

# Switch to non-root user
USER honojs

EXPOSE 3001

ENV PORT=3001

# Start the API server
CMD ["node", "dist/index.js"]
