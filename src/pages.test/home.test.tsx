import React from 'react'
import { render } from '@testing-library/react'
import ButtonUsage from '@/components/Button'

describe('ButtonUsage Component', () => {
  it('renders without errors', () => {
    const { getByText } = render(<ButtonUsage />)

    expect(getByText('Click me!')).toBeInTheDocument()
  })
})
