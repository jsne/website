import React from 'react';
import { addDecorator } from '@storybook/react';

import { Layout } from '~/components/base/Layout';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const AppDecorator = (storyFn) => {
  return <Layout>{storyFn()}</Layout>;
};

addDecorator(AppDecorator);
