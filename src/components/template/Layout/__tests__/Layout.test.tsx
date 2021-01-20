import { screen, render } from '@testing-library/react';
import React from 'react';

import { Layout } from '../Layout';

describe('Layout', () => {
  it('Should render Layout.', () => {
    render(
      <Layout head={{ title: 'I eat stickers all the time, dude!' }}>
        What do now?
      </Layout>,
    );
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });
});
