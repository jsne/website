import React from 'react';

import fontBase from '~/assets/fonts/inter.woff2';
import { tokens } from '~/styles/tokens';

/**
 * @NOTE Stitches doesn't currently support `@font-face` with `css.global` yet
 * so this is just a style tag for now.
 * @SEE <https://github.com/modulz/stitches/issues/241>
 */
export const LayoutStyles: React.FC = () => (
  <style>{`
  @font-face {
    font-display: swap;
    font-family: '${tokens.fonts.base.split(',')[0]}';
    font-style: normal;
    src: url(${fontBase}) format('woff2-variations');
  }

  :root {
    font-family: ${tokens.fonts.base};
    font-size: 12px;
  }

  @media (min-width: 600px) {
    :root {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    :root {
      font-size: 18px;
    }
  }
  `}</style>
);
