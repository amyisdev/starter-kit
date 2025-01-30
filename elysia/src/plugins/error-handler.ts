import Elysia, { ValidationError } from 'elysia'
import { logger } from '../lib/logger'

export const errorHandler = new Elysia({ name: 'error-handler' })
  .onError(({ error, set }) => {
    if (error instanceof Error && error.message === 'Unauthorized') {
      set.status = 401
      return { error: 'Unauthorized' }
    }

    if (error instanceof ValidationError) {
      return
    }

    logger.error(error)

    set.status = 500
    return { error: 'Internal Server Error' }
  })
  .as('plugin')
