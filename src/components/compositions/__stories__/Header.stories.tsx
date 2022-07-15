import type { Story } from '@storybook/react';

import type { HeaderProps } from '../Header';
import { Header } from '../Header';

export default {
  title: 'Compositions/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
};

export const Default: Story<HeaderProps> = (args) => <Header {...args} />;
Default.args = { logoSlug: '/' };
