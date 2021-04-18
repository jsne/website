import { screen, render } from '@testing-library/react';
import React from 'react';

import { Button } from '../Button';

describe('Button', () => {
  it('Should render Button.', () => {
    render(<Button>What do now?</Button>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });
});
