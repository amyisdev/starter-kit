import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type React from 'react'
import { MemoryRouter } from 'react-router'

export function renderWithRouter(ui: React.ReactElement, path = '/') {
  return {
    user: userEvent.setup(),
    ...render(<MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>),
  }
}
