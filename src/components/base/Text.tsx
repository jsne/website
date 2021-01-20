import { StitchesProps } from '@stitches/react';

import { styled } from '~/styles/stitches.config';
import { tokenTextBaseKeys } from '~/styles/types';

export const Text = styled('p', {
  marginTop: 0,
  marginBottom: 0,

  variants: {
    textSize: Object.fromEntries(
      tokenTextBaseKeys.map((baseKey) => [baseKey, { withTextSize: baseKey }]),
    ),
  },
});

export type TextProps = StitchesProps<typeof Text>;
