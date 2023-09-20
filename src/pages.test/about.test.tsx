import React from 'react'
import { render } from '@testing-library/react'
import About from '../pages/about/index'

describe('About', () => {
  it('should render the About Page text', () => {
    const { getByText } = render(<About />)

    expect(getByText('About Page')).toBeInTheDocument()
  })
})
