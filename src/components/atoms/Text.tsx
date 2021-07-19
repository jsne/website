import { StitchesVariants, styled } from '~/styles/stitches.config';
import {
  themeTextStylesKeys,
  ThemeTextStylesKey,
  ThemeTextStylesTokenKey,
} from '~/styles/theme';

import { Box, BoxProps } from './Box';

type TextStyle = {
  [K in ThemeTextStylesKey]: {
    withTextStyle: ThemeTextStylesTokenKey;
  };
};

/** Generic text component with preset styles for each `text` preset available. */
export const Text = styled(Box, {
  marginBlockStart: 0,
  marginBlockEnd: 0,

  variants: {
    textStyle: Object.fromEntries(
      themeTextStylesKeys.map((baseKey) => [baseKey, { withTextStyle: `$${baseKey}` }]),
    ) as TextStyle,
  },

  defaultVariants: {
    textStyle: 'p',
  },
});

export type TextProps = BoxProps<StitchesVariants<typeof Text>>;
