import { themes } from '@storybook/theming';

import { tokens } from '../src/styles/tokens';

export const theme = {
  ...themes.light,
  appBorderRadius: 3,
  colorSecondary: tokens.colors.$secondary1,
  barSelectedColor: tokens.colors.$secondary2,
};
