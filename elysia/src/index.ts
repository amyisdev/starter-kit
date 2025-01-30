import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { logger } from './lib/logger'
import { needAuth } from './plugins/need-auth'

const app = new Elysia()
  .onAfterResponse(({ headers, request, path, set }) => {
    if (headers['user-agent']?.includes('k6')) {
      return
    }

    logger.info({
      auth: headers.authorization?.replace('Bearer ', ''),
      method: request.method,
      path: path,
      status: set.status,
      userAgent: headers['user-agent'],
    })
  })

  .use(
    swagger({
      documentation: {
        servers: [{ url: process.env.BASE_URL ?? 'http://localhost:3000' }],
        info: {
          title: 'Elysia App',
          description: 'Elysia App Documentation',
          version: '1.0.0',
        },
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
            },
          },
        },
        tags: [{ name: 'General', description: 'Health check' }],
      },
    }),
  )

  .get('/', () => ({ status: 'ok' }), {
    detail: {
      tags: ['General'],
      security: [{ none: [] }],
    },
  })

  .use(needAuth)

  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
