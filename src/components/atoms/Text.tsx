import type { ComponentProps } from 'react';

import { styled } from '~/styles/stitches.config';
import {
  ThemeTextStylesKey,
  ThemeTextStylesTokenKey,
  themeTextStylesKeys,
} from '~/styles/theme';

type TextStyleProps = {
  [K in ThemeTextStylesKey]: {
    withTextStyle: ThemeTextStylesTokenKey;
  };
};

/** Generic text component with preset styles for each `text` preset available. */
export const Text = styled('div', {
  marginBlockStart: 0,
  marginBlockEnd: 0,

  variants: {
    textStyle: Object.fromEntries(
      themeTextStylesKeys.map((baseKey) => [baseKey, { withTextStyle: `$${baseKey}` }]),
    ) as TextStyleProps,
  },

  defaultVariants: {
    textStyle: 'p',
  },
});

export type TextProps = ComponentProps<typeof Text>;
