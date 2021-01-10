import React from 'react';
import { css, Global } from '@emotion/react';

import fontBase from '~/assets/fonts/inter.woff2';
import { theme } from '~/styles/theme';

export const LayoutStyles: React.FC = (props) => (
  <Global
    {...props}
    styles={css`
      @font-face {
        font-display: swap;
        font-family: '${theme.fonts.base.split(',')[0]}';
        font-style: normal;
        src: url(${fontBase}) format('woff2-variations');
      }

      :root {
        font-family: ${theme.fonts.base};
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
    `}
  />
);
