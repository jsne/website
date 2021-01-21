import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withConsole } from '@storybook/addon-console';

import { Layout } from '~/components/template/Layout';

import { theme } from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const AppDecorator = (storyFn) => {
  return <Layout>{storyFn()}</Layout>;
};

addDecorator(AppDecorator);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  controls: {
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
