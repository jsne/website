import { styled } from '~/styles/stitches.config';

export const Icon = styled('svg', {
  variants: {
    iconAppearance: {
      body: {
        '.__primary': {
          fill: '$pageContrast1',
        },
        '.__secondary': {
          fill: '$page',
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
    },
  },
});
