import { styled } from '~/styles/stitches.config';

export const Link = styled('a', {
  fontWeight: '$medium',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',

  variants: {
    linkAppearance: {
      primary: {
        withLinearGradient: 'primary',
      },
      secondary: {
        withLinearGradient: 'secondary',
      },
      tertiary: {
        withLinearGradient: 'tertiary',
      },
    },
  },
});
