import { screen, render } from '@testing-library/react';
import React from 'react';

import { Link } from '../Link';

describe('Link', () => {
  it('Should render Link.', () => {
    render(<Link href="/test">What do now?</Link>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });
});
