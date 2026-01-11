import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

// Middleware
app.use('*', logger())
app.use('*', cors())

// Health check
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'testamento-api',
    version: '0.1.0',
  })
})

// API v1 routes
const v1 = new Hono()

v1.get('/', (c) => {
  return c.json({
    message: 'Testamento Digital API v1',
    endpoints: ['/health', '/api/v1'],
  })
})

app.route('/api/v1', v1)

// Start server
const port = Number(process.env.PORT) || 3001

console.log(`🚀 Testamento API running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})

export default app
