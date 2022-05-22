import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';

import { Layout } from '../src/components/primitives/Layout';
import { theme } from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const AppDecorator = (storyFn) => {
  return <Layout head={{}}>{storyFn()}</Layout>;
};

addDecorator(AppDecorator);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  controls: {
    color: /(background|color|fill)$/i,
    date: /Date$/,
    hideNoControlsWarning: true,
  },
  docs: {
    inlineStories: true,
    theme,
  },
  options: {
    showRoots: true,
    theme,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
