import { styled } from '~/styles/stitches.config';

/** Generic variant-controlled button. */
export const Button = styled('button', {
  position: 'relative',
  fontWeight: '$medium',
  display: 'inline-flex',
  justifyContent: 'center',
  minWidth: '9.5rem',
  padding: '$4 $5',
  border: 0,
  borderRadius: '$1',
  textDecoration: 'none',
  appearance: 'none',
  cursor: 'pointer',
  transitionCall: 'filter, transform',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'inherit',
    borderRadius: 'inherit',
    transitionCall: 'filter, opacity',
    opacity: 0,
    zIndex: -1,
  },

  ':hover:not([disabled])': {
    filter: 'saturate(1.5)',
    transform: 'scale(1.05)',

    '&::before': {
      filter: 'blur(.5rem)',
      opacity: 1,
    },
  },

  '&[disabled]': {
    cursor: 'not-allowed',
    filter: 'grayscale(.75)',
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
