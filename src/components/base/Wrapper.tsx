import { StitchesProps } from '@stitches/react';

import { styled } from '~/styles/stitches.config';

/** Generic wrapper for any content. */
export const Wrapper = styled('div', {
  width: '100%',
  maxWidth: '$wrapper2',
  marginRight: 'auto',
  marginLeft: 'auto',

  variants: {
    wrapperWidth: {
      small: {
        maxWidth: '$wrapper1',
      },
    },
  },
});

export type WrapperProps = StitchesProps<typeof Wrapper>;
