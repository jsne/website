import { screen, render } from '@testing-library/react';
import React from 'react';

import { Wrapper } from '../Wrapper';

describe('Wrapper', () => {
  it('Should render Wrapper.', () => {
    render(<Wrapper>What do now?</Wrapper>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });
});
