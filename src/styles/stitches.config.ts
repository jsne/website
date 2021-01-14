import { createStyled } from '@stitches/react';

import { tokens } from './tokens';

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
    /** Get tokenised transition targetting specific CSS properties. */
    transitionCall: (property: string) => ({
      transitionDuration: tokens.transition.$duration,
      transitionTimingFunction: tokens.transition.$timingFunction,
      transitionProperty: property,
    }),

    /** Get linear-gradient `background-image` with accessible `color`. */
    linearGradient: (variant: 'primary' | 'secondary') => {
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
  },
});
