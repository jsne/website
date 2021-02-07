import React from 'react';

import { Header } from '../Header';

export default {
  title: 'Preset/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => <Header {...args} />;
Default.args = { logoSlug: '/' };
