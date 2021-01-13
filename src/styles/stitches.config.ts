import { createStyled } from '@stitches/react';

import { tokens } from './tokens';

export const { styled, css } = createStyled({
  prefix: 'jsne',
  tokens,
  breakpoints: {
    xxs: (rule) => `@media (min-width: 480px) { ${rule} }`,
    xs: (rule) => `@media (min-width: 640px) { ${rule} }`,
    sm: (rule) => `@media (min-width: 768px) { ${rule} }`,
    md: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1280px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1440px) { ${rule} }`,
    xxl: (rule) => `@media (min-width: 1920px) { ${rule} }`,
  },
  utils: {
    /** Get linear-gradient `background-image` with accessible `color`. */
    linearGradient: (/*config*/) => (variant: 'primary' | 'secondary') => {
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
