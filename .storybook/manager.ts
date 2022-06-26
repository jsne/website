import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

// @ts-expect-error
import brandImage from '../src/assets/images/logo-wordmark.svg';
import { theme } from './theme';

/**
 * @SEE <https://storybook.js.org/docs/configurations/options-parameter/>
 */
addons.setConfig({
  showAddonsPanel: false,
  panelPosition: 'bottom',
  theme: create({
    ...theme,
    brandTitle: 'JSNE',
    brandImage,
    brandUrl: 'https://github.com/jsne/jsne-website',
    gridCellSize: 12,
  }),
});
