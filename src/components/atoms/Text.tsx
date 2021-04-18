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

export const Text = styled(Box, {
  marginTop: 0,
  marginBottom: 0,

  variants: {
    textStyle: Object.fromEntries(
      themeTextStylesKeys.map((baseKey) => [baseKey, { withTextStyle: `$${baseKey}` }]),
    ) as TextStyle,
  },
});

export type TextProps = BoxProps<StitchesVariants<typeof Text>>;
