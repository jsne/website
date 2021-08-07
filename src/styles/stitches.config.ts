import { createCss, StitchesCss } from '@stitches/react';

import { theme, ThemeColorsTokenKey, ThemeTextStylesTokenKey } from './theme';

interface WithBoxShadowProps {
  color?: ThemeColorsTokenKey;
  variant?: 'short' | 'long';
}

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
    withBoxShadow:
      () =>
      ({ color = '$shadow1', variant = 'short' }: WithBoxShadowProps) => {
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
    withLinearGradient:
      (config) =>
      ({
        angle = 87.06,
        variant,
      }: {
        angle?: number;
        variant: 'body' | 'primary' | 'secondary' | 'tertiary';
      }) => {
        // Lil' hack to dynamically map color variant values.
        const tokenColors = config.theme.colors as Record<string, string>;

        const colors = [
          tokenColors[`${variant}1`],
          tokenColors[`${variant}2`],
          tokenColors[`${variant}3`],
        ];

        return {
          backgroundImage: `linear-gradient(${angle}deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
          color: tokenColors[`${variant}Contrast1`],
        };
      },

    /** Apply 'outline' styles (really uses `box-shadow`). */
    withOutline:
      () =>
      (color: ThemeColorsTokenKey = '$secondary1') => ({
        outline: 0,
        boxShadow: `0 0 0 0.2rem $colors${color}`,
      }),

    /** Apply preset font styles. */
    withTextStyle: () => (fontSize: ThemeTextStylesTokenKey) => {
      const styles: Record<string, string> = {
        fontWeight: '$heavy',
        letterSpacing: '0',
      };

      if (fontSize === '$p') {
        styles.fontWeight = '$regular';
      } else if (fontSize === '$preHeading') {
        styles.letterSpacing = '$spaced';
        styles.textTransform = 'uppercase';
        styles.fontWeight = '$medium';
      } else if (fontSize === '$h3') {
        styles.fontWeight = '$bold';
      }

      return {
        fontSize,
        lineHeight: fontSize,
        ...styles,
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
