import { StitchesProps } from '@stitches/react';
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
      ghost: {
        '.__primary': {
          fill: '$pageContrast1',
          opacity: 0.25,
        },
        '.__secondary': {
          fill: '$page',
          opacity: 0.5,
        },
      },
    },
  },
});

export type IconProps = StitchesProps<typeof Icon>;
