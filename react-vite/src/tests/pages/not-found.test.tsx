import { beforeEach, describe, expect, jest, test } from 'bun:test'
import App from '@/App'
import NotFound from '@/pages/not-found'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../utils'

describe('NotFound', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders component correctly', () => {
    renderWithRouter(<NotFound />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('404 Page Not Found')
  })

  test('router can handle not found page', () => {
    renderWithRouter(<App />, '/not-found')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('404 Page Not Found')
  })

  test('has a link to home', async () => {
    const { user } = renderWithRouter(<App />, '/not-found')

    const link = screen.getByRole('link', { name: 'Go to Home' })
    expect(link).toHaveAttribute('href', '/')

    await user.click(link)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
