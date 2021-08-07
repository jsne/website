import { screen, render, waitFor } from '@testing-library/react';
import React from 'react';

import { Layout } from '../Layout';

describe('Layout', () => {
  it('Should render Layout.', async () => {
    render(
      <Layout head={{ title: 'I eat stickers all the time, dude!' }}>
        What do now?
      </Layout>,
    );

    await waitFor(() => {
      expect(document.title).toBe('I eat stickers all the time, dude!');
      expect(screen.getByText('What do now?')).toBeInTheDocument();
    });
  });
});
