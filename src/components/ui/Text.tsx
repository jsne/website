import { styled } from '~/styles/stitches.config';
import { textVariantKeys } from '~/styles/tokens';

export const Text = styled('p', {
  marginTop: 0,
  marginBottom: 0,

  variants: {
    textSize: Object.fromEntries(
      textVariantKeys.map((variant) => [variant, { withTextSize: variant }]),
    ),
    textAppearance: {
      preHeading: {
        color: '$pageContrast1',
      },
    },
  },
});
