import { styled } from '~/styles/stitches.config';

export const BUTTON_MAX_WIDTH = '13rem';

/** Generic variant-controlled button. */
export const Button = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  fontWeight: '$bold',
  fontSize: '$p',
  minWidth: BUTTON_MAX_WIDTH,
  padding: '$5 $7',
  border: 0,
  borderRadius: '$1',
  textDecoration: 'none',
  appearance: 'none',
  cursor: 'pointer',
  outline: 0,
  textTransform: 'uppercase',
  withBoxShadow: { variant: 'short' },
  withTransition: 'box-shadow, filter, transform',

  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundImage: 'inherit',
    borderRadius: 'inherit',
    opacity: 0,
    pointerEvents: 'none',
    withTransition: 'box-shadow, filter, opacity',
  },

  '&:hover:not([disabled])': {
    filter: 'saturate(1.5)',
    transform: 'scale(1.05)',

    '&::before': {
      filter: 'blur(.55rem)',
      opacity: 1,
    },
  },

  '&:active:not([disabled])': {
    transform: 'scale(1.05) translateY(.15rem)',
  },

  '&[disabled]': {
    cursor: 'not-allowed',
    filter: 'grayscale(.75)',
  },

  variants: {
    buttonAppearance: {
      primary: {
        withLinearGradient: { variant: 'primary' },
        '&:focus-visible': {
          withOutline: '$secondary1',
        },
      },

      secondary: {
        withLinearGradient: { variant: 'secondary' },
        '&:focus-visible': {
          withOutline: '$tertiary1',
        },
      },
    },
  },
});
