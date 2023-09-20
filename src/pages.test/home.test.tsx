import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('should render the Home Page text', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Home Page')).toBeInTheDocument()
  })
})
