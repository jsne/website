import type { Story } from '@storybook/react';

import { Box } from '../../atoms/Box';
import type { HeaderProps } from '../Header';
import { Header } from '../Header';

export default {
  title: 'Compositions/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
};

export const Default: Story<HeaderProps> = (args) => (
  <Box css={{ backgroundColor: '$primary2' }}>
    <Header {...args} />
  </Box>
);

Default.args = {
  logoSlug: '/',
  items: [
    { navigationLabel: 'Test 1', slug: '/' },
    { navigationLabel: 'Test 2', slug: '/' },
    { navigationLabel: 'Test 3', slug: '/' },
  ],
};
