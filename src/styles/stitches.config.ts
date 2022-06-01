import { createStitches } from '@stitches/react';
import type { CSS as StitchesCSS } from '@stitches/react';

import { ThemeColorsTokenKey, ThemeTextStylesTokenKey, theme } from './theme';

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
    withBoxShadow: ({ color = '$shadow1', variant = 'short' }: WithBoxShadowProps) => {
      if (variant === 'short') {
        return {
          /** @NOTE Using scoped variable to avoid overly complex type unions. */
          $$thisColor: `$colors${color}`,
          boxShadow: `0 0.1rem 0.1rem $$thisColor,
                        0 0.15rem 0.15rem $$thisColor,
                        0 0.25rem 0.25rem $$thisColor,
                        0 0.375rem 0.5rem $$thisColor,
                        0 0.5rem 1rem $$thisColor`,
        };
      }

      return {
        $$thisColor: `$colors${color}`,
        boxShadow: `0 1px 2px $$thisColor,
                      0 2px 4px $$thisColor,
                      0 4px 8px $$thisColor,
                      0 8px 16px $$thisColor,
                      0 16px 32px $$thisColor,
                      0 32px 64px $$thisColor`,
      };
    },

    /** Get linear-gradient `background-image` with accessible `color`. */
    withLinearGradient: ({
      angle = 87.06,
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

/* eslint-disable @typescript-eslint/no-explicit-any */
type JSXElementConstructor<P> =
  | ((props: P) => React.ReactElement<any, any> | null)
  | (new (props: P) => React.Component<any, any>);

export type WithAsProp<
  TComponent extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = React.ComponentProps<TComponent> & { as?: string | React.ElementType };

export const withAsProp = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>(
  component: WithAsProp<T>,
) => component;
/* eslint-enable @typescript-eslint/no-explicit-any */

export type CSS = StitchesCSS<typeof config>;
