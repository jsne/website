import { Story } from '@storybook/react';

import { Header, HeaderProps } from '../Header';

export default {
  title: 'Compositions/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
};

export const Default: Story<HeaderProps> = (args) => <Header {...args} />;
Default.args = { logoSlug: '/' };
