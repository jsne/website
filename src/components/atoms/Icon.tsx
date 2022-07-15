import type { ComponentProps } from 'react';

import { styled } from '~/styles/stitches.config';

export const Icon = styled('svg', {
  variants: {
    iconAppearance: {
      body: {
        '.__primary': {
          fill: '$pageContrast1',
        },
        '.__secondary': {
          fill: '$page1',
        },
      },
      page: {
        '.__primary': {
          fill: '$pageContrast1',
        },
        '.__secondary': {
          fill: '$pageContrast3',
        },
      },
      ghost: {
        '.__primary': {
          fill: '$pageContrast1',
          opacity: 0.25,
        },
        '.__secondary': {
          fill: '$page1',
          opacity: 0.425,
        },
      },
    },
  },
});

export type IconProps = ComponentProps<typeof Icon>;
