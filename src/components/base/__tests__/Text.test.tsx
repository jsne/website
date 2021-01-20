import { screen, render } from '@testing-library/react';
import React from 'react';

import { Text } from '../Text';

describe('Text', () => {
  it('Should render Text.', () => {
    render(<Text>What do now?</Text>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });
});
