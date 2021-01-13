import { styled } from '~/styles/stitches.config';

/** Generic variant-controlled button. */
export const Button = styled('button', {
  borderRadius: '$1',
  fontWeight: '$medium',
  justifyContent: 'center',
  padding: '$1 $2',
  minWidth: '8rem',
  textDecoration: 'none',
  ':hover': {
    filter: 'brightness(1.1)',
    transform: 'scale(1.1)',
  },
  variants: {
    appearance: {
      primary: {
        linearGradient: 'primary',
      },
      secondary: {
        linearGradient: 'secondary',
      },
    },
  },
});
