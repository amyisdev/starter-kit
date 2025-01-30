import { afterEach, beforeEach, describe, expect, it } from 'bun:test'
import { needAuth } from './need-auth'

describe('Need Auth', () => {
  describe('GET /protected', () => {
    it('should list all tokens', async () => {
      const response = await needAuth.handle(
        new Request('http://localhost/protected', {
          headers: {
            Authorization: 'Bearer secret',
          },
        }),
      )

      expect(response.status).toBe(200)
      expect(await response.text()).toBe('You are authorized')
    })

    it('should return a 401 with an invalid API key', async () => {
      const response = await needAuth.handle(
        new Request('http://localhost/protected', {
          headers: {
            Authorization: 'Bearer invalid-api-key',
          },
        }),
      )

      expect(response.status).toBe(401)
    })
  })
})
