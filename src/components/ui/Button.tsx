import { styled } from '~/styles/stitches.config';

/** Generic variant-controlled button. */
export const Button = styled('button', {
  position: 'relative',
  fontWeight: '$medium',
  fontSize: '$p',
  display: 'inline-flex',
  justifyContent: 'center',
  minWidth: '9.5rem',
  padding: '$4 $5',
  border: 0,
  borderRadius: '$1',
  textDecoration: 'none',
  appearance: 'none',
  cursor: 'pointer',
  getBoxShadow: '$shadow1',
  getTransition: 'box-shadow, filter, transform',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'inherit',
    borderRadius: 'inherit',
    opacity: 0,
    zIndex: -1,
    getTransition: 'box-shadow, filter, opacity',
  },

  ':hover:not([disabled])': {
    filter: 'saturate(1.5)',
    transform: 'scale(1.05)',
    getBoxShadow: '$shadow2',

    '::before': {
      filter: 'blur(.5rem)',
      opacity: 1,
    },
  },

  ':active:not([disabled])': {
    transform: 'scale(1.05) translateY(.15rem)',
  },

  '&[disabled]': {
    cursor: 'not-allowed',
    filter: 'grayscale(.75)',
  },

  variants: {
    button: {
      primary: {
        getLinearGradient: 'primary',
        ':focus': {
          getOutline: '$secondary1',
        },
      },

      secondary: {
        getLinearGradient: 'secondary',
        ':focus': {
          getOutline: '$primary1',
        },
      },
    },
  },
});
