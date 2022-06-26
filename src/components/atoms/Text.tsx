import type { ComponentProps } from 'react';
import { Box } from 'react-polymorphic-box';

import { styled } from '~/styles/stitches.config';

/**
 * Generic text component with preset styles for each text preset available as a prop.
 */
export const Text = styled(Box, {
  marginBlockStart: 0,
  marginBlockEnd: 0,

  variants: {
    textPreset: {
      hero: {
        fontSize: '$hero',
        lineHeight: '$hero',
        fontWeight: '$heavy',
      },
      h1: {
        fontSize: '$h1',
        lineHeight: '$h1',
        fontWeight: '$heavy',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '$h2',
        fontWeight: '$heavy',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '$h3',
        fontWeight: '$heavy',
      },
      preHeading: {
        fontSize: '$preHeading',
        lineHeight: '$preHeading',
        letterSpacing: '$spaced',
        textTransform: 'uppercase',
        fontWeight: '$medium',
      },
      p: {
        fontSize: '$p',
        lineHeight: '$p',
        fontWeight: '$regular',
      },
      caption: {
        fontSize: '$caption',
        lineHeight: '$caption',
        fontWeight: '$regular',
      },
    },
  },

  defaultVariants: {
    textPreset: 'p',
  },
});

export type TextProps = ComponentProps<typeof Text>;
