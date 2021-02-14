import { themes } from '@storybook/theming';

import { theme as rootTheme } from '../src/styles/theme';

export const theme = {
  ...themes.light,
  appBorderRadius: 3,
  colorSecondary: rootTheme.colors.secondary1,
  barSelectedColor: rootTheme.colors.secondary2,
};
