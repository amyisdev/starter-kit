import { beforeEach, describe, expect, jest, test } from 'bun:test'
import Home from '@/pages/home'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders component correctly', () => {
    render(<Home />)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
