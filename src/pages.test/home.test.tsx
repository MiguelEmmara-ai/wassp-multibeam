import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('should render the MUI button', () => {
    const { getByRole } = render(<Home />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
