import createStyled from '@stitches/react';

import { theme, Theme } from './theme';
import { TokenTextKey } from './types';

export const { styled, css } = createStyled({
  prefix: 'jsne',
  theme,
  conditions: {
    bpxxs: `@media (min-width: 480px)`,
    bpxs: `@media (min-width: 640px)`,
    bpsm: `@media (min-width: 768px)`,
    bpmd: `@media (min-width: 1024px)`,
    bplg: `@media (min-width: 1280px)`,
    bpxl: `@media (min-width: 1440px)`,
    bpxxl: `@media (min-width: 1920px)`,
  },
  utils: {
    /** Apply preset box-shadow with custom color. */
    withBoxShadow: () => (value: keyof Theme['colors'] = 'shadow1') => ({
      boxShadow: `0 .175rem .5rem ${value}, .16rem .25rem .175rem ${value}`,
    }),

    /** Get linear-gradient `background-image` with accessible `color`. */
    withLinearGradient: () => (
      variant: 'body' | 'primary' | 'secondary' | 'tertiary',
    ) => {
      // Lil' hack to dynamically map color variant values.
      const tokenColors = theme.colors as Record<string, string>;

      const colors = [
        tokenColors[`${variant}1`],
        tokenColors[`${variant}2`],
        tokenColors[`${variant}3`],
      ];

      return {
        backgroundImage: `linear-gradient(87.06deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
        color: tokenColors[`${variant}Contrast1`],
      };
    },

    /** Apply 'outline' styles (really uses `box-shadow`). */
    withOutline: () => (value: keyof Theme['colors'] = 'secondary1') => ({
      outline: 0,
      boxShadow: `0 0 0 0.2rem ${value}`,
    }),

    /** Apply preset font styles. */
    withTextSize: () => (value: TokenTextKey) => {
      let fontWeight: `$${keyof Theme['fontWeights']}` = '$heavy';

      if (value === '$p') {
        fontWeight = '$regular';
      } else if (value === '$preHeading') {
        fontWeight = '$medium';
      } else if (value === '$h3') {
        fontWeight = '$bold';
      }

      return {
        fontSize: value,
        lineHeight: value,
        fontWeight,
      };
    },

    /** Apply tokenised transition targeting specific CSS properties. */
    withTransition: () => (transitionProperty: string) => ({
      transitionDuration: theme.transitions.duration,
      transitionTimingFunction: theme.transitions.timingFunction,
      transitionProperty,
    }),
  },
});
