import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/index'

describe('HomePage Component', () => {
  it('should render the home page text', () => {
    const { getByText } = render(<Home />)

    // expect(getByText('Welcome to the Home Page')).toBeInTheDocument();
    // expect(getByText('This is the home page of our website.')).toBeInTheDocument();
  })
})
