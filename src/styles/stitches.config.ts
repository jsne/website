import { createStyled } from '@stitches/react';

import { TextVariantKey, tokens, Tokens } from './tokens';

export const { styled, css } = createStyled({
  prefix: 'jsne',
  tokens,
  breakpoints: {
    bpxxs: (rule) => `@media (min-width: 480px) { ${rule} }`,
    bpxs: (rule) => `@media (min-width: 640px) { ${rule} }`,
    bpsm: (rule) => `@media (min-width: 768px) { ${rule} }`,
    bpmd: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    bplg: (rule) => `@media (min-width: 1280px) { ${rule} }`,
    bpxl: (rule) => `@media (min-width: 1440px) { ${rule} }`,
    bpxxl: (rule) => `@media (min-width: 1920px) { ${rule} }`,
  },
  utils: {
    /** Apply preset box-shadow with custom color. */
    withBoxShadow: (value: keyof Tokens['colors'] = '$shadow1') => ({
      boxShadow: `0 .175rem .5rem ${value}, .16rem .25rem .175rem ${value}`,
    }),

    /** Get linear-gradient `background-image` with accessible `color`. */
    withLinearGradient: (variant: 'primary' | 'secondary' | 'tertiary') => {
      // Lil' hack to dynamically map color variant values.
      const tokenColors = tokens.colors as Record<string, string>;

      const colors = [
        tokenColors[`$${variant}1`],
        tokenColors[`$${variant}2`],
        tokenColors[`$${variant}3`],
      ];

      return {
        backgroundImage: `linear-gradient(-270deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
        color: tokenColors[`$${variant}Contrast`],
      };
    },

    /** Apply 'outline' styles (really uses `box-shadow`). */
    withOutline: (value: keyof Tokens['colors'] = '$secondary1') => ({
      outline: 0,
      boxShadow: `0 0 0 0.2rem ${value}`,
    }),

    /** Apply preset font styles. */
    withTextSize: (value: TextVariantKey) => {
      let fontWeight: keyof Tokens['fontWeights'] = '$heavy';

      if (value === 'p') {
        fontWeight = '$regular';
      } else if (value === 'preHeading') {
        fontWeight = '$medium';
      } else if (value === 'h3') {
        fontWeight = '$bold';
      }

      return {
        fontSize: `$${value}`,
        lineHeight: `$${value}`,
        fontWeight,
      };
    },

    /** Apply tokenised transition targeting specific CSS properties. */
    withTransition: (property: string) => ({
      transitionDuration: tokens.transitions.$duration,
      transitionTimingFunction: tokens.transitions.$timingFunction,
      transitionProperty: property,
    }),

    /** Apply specific styles for users who prefer reduced motion. */
    withPrefersReducedMotion: (value) => ({ '@media(prefers-reduced-motion)': value }),
  },
});
