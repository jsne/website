import { createStitches } from '@stitches/react';
import type { CSS as StitchesCSS } from '@stitches/react';

import { ThemeColorsTokenKey, theme } from './theme';

interface WithBoxShadowProps {
  color?: ThemeColorsTokenKey;
  variant?: 'short' | 'long';
}

export const {
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  config,
  prefix,
  reset,
} = createStitches({
  prefix: 'jsne',
  theme,
  media: {
    bpxxs: `(min-width: 30rem)`,
    bpxs: `(min-width: 40rem)`,
    bpsm: `(min-width: 48rem)`,
    bpmd: `(min-width: 64rem)`,
    bplg: `(min-width: 80rem)`,
    bpxl: `(min-width: 90rem)`,
    bpxxl: `(min-width: 120rem)`,
  },

  utils: {
    /** Apply preset box-shadow with custom color. */
    withBoxShadow: ({ color = '$shadow1', variant = 'short' }: WithBoxShadowProps) => {
      if (variant === 'short') {
        return {
          /** @NOTE Using scoped variable to avoid overly complex type unions. */
          $$thisShadowColor: `$colors${color}`,
          boxShadow: `0 0.1rem 0.1rem $$thisShadowColor,
                        0 0.15rem 0.15rem $$thisShadowColor,
                        0 0.25rem 0.25rem $$thisShadowColor,
                        0 0.375rem 0.5rem $$thisShadowColor,
                        0 0.5rem 1rem $$thisShadowColor`,
        };
      }

      return {
        $$thisShadowColor: `$colors${color}`,
        boxShadow: `0 1px 2px $$thisShadowColor,
                      0 2px 4px $$thisShadowColor,
                      0 4px 8px $$thisShadowColor,
                      0 8px 16px $$thisShadowColor,
                      0 16px 32px $$thisShadowColor,
                      0 32px 64px $$thisShadowColor`,
      };
    },

    /** Get linear-gradient `background-image` with accessible `color`. */
    withLinearGradient: ({
      angle = 85.31,
      property = 'background-image',
      variant,
    }: {
      angle?: number;
      property?: string;
      variant: 'body' | 'primary' | 'secondary' | 'tertiary' | 'error';
    }) => {
      // Lil' hack to dynamically map color variant values.
      const tokenColors = theme.colors as Record<string, string>;

      const colors = [
        tokenColors[`${variant}1`],
        tokenColors[`${variant}2`],
        tokenColors[`${variant}3`],
      ];

      return {
        [property]: `linear-gradient(${angle}deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
        color: tokenColors[`${variant}Contrast1`],
      };
    },

    /** Apply 'outline' styles (really uses `box-shadow`). */
    withOutline: (color: ThemeColorsTokenKey = '$secondary1') => ({
      outline: 0,
      boxShadow: `0 0 0 0.2rem $colors${color}`,
    }),

    /** Apply tokenised transition targeting specific CSS properties. */
    withTransition: (transitionProperty: string) => ({
      transitionDuration: theme.transitions.duration,
      transitionTimingFunction: theme.transitions.timingFunction,
      transitionProperty,
    }),
  },
});

export type CSS = StitchesCSS<typeof config>;
