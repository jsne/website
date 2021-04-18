import { createCss, StitchesCss } from '@stitches/react';

import {
  theme,
  ThemeColorsTokenKey,
  ThemeTextStylesTokenKey,
  ThemeFontWeightsTokenKey,
} from './theme';

export const stitchesConfig = createCss({
  prefix: 'jsne',
  theme,
  media: {
    bpxxs: `(min-width: 480px)`,
    bpxs: `(min-width: 640px)`,
    bpsm: `(min-width: 768px)`,
    bpmd: `(min-width: 1024px)`,
    bplg: `(min-width: 1280px)`,
    bpxl: `(min-width: 1440px)`,
    bpxxl: `(min-width: 1920px)`,
  },
  utils: {
    /** Apply preset box-shadow with custom color. */
    withBoxShadow: () => (color: ThemeColorsTokenKey = '$shadow1') => ({
      $$shadowColor: `$colors${color}`,
      boxShadow: `0 .175rem .5rem $$shadowColor, .16rem .25rem .175rem $$shadowColor`,
    }),

    /** Get linear-gradient `background-image` with accessible `color`. */
    withLinearGradient: (config) => (
      variant: 'body' | 'primary' | 'secondary' | 'tertiary',
    ) => {
      // Lil' hack to dynamically map color variant values.
      const tokenColors = config.theme.colors as Record<string, string>;

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
    withOutline: () => (color: ThemeColorsTokenKey = '$secondary1') => ({
      $$shadowColor: `$colors${color}`,
      outline: 0,
      boxShadow: `0 0 0 0.2rem $$shadowColor`,
    }),

    /** Apply preset font styles. */
    withTextStyle: () => (fontSize: ThemeTextStylesTokenKey) => {
      let fontWeight: ThemeFontWeightsTokenKey = '$heavy';

      if (fontSize === '$p') {
        fontWeight = '$regular';
      } else if (fontSize === '$preHeading') {
        fontWeight = '$medium';
      } else if (fontSize === '$h3') {
        fontWeight = '$bold';
      }

      return {
        fontSize,
        lineHeight: fontSize,
        fontWeight,
      };
    },

    /** Apply tokenised transition targeting specific CSS properties. */
    withTransition: (config) => (transitionProperty: string) => ({
      transitionDuration: config.theme.transitions.duration,
      transitionTimingFunction: config.theme.transitions.timingFunction,
      transitionProperty,
    }),
  },
});

export const { css, getCssString, global, keyframes, styled } = stitchesConfig;
export type { StitchesVariants } from '@stitches/react';
export type CSS = StitchesCss<typeof stitchesConfig>;
