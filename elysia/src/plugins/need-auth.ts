import { Elysia, t } from 'elysia'
import { errorHandler } from './error-handler'

export const needAuth = new Elysia({ prefix: '/protected', tags: ['Protected'] })
  .use(errorHandler)
  .guard({
    beforeHandle: ({ headers }) => {
      const token = headers.authorization?.replace('Bearer ', '') ?? ''
      if (token !== 'secret') {
        throw new Error('Unauthorized')
      }
    },
  })

  .get('/', () => 'You are authorized')
