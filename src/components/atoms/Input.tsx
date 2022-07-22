import { styled } from '~/styles/stitches.config';

export const Input = styled('input', {
  fontWeight: '$regular',
  padding: '$5',
  backgroundColor: '$page1',
  color: '$pageContrast3',
  border: 0,
  borderRadius: '$1',
  appearance: 'none',
  withTransition: 'opacity, outline',

  '&:disabled': {
    opacity: 0.5,
    color: '$pageContrast2',
    cursor: 'not-allowed',
  },

  '&:invalid:not(:placeholder-shown)': {
    withOutline: '$error3',

    '&:focus:not(:disabled)': {
      withOutline: '$error3',
    },
  },

  variants: {
    inputBaseAppearance: {
      normal: {
        withOutline: '$pageContrast1',
      },
    },
    inputFocusAppearance: {
      primary: {
        withOutline: '$primary2',
        outlineWidth: 0,
        '&:focus:not(:disabled)': {
          withOutline: '$primary2',
        },
      },
      secondary: {
        withOutline: '$secondary2',
        outlineWidth: 0,
        '&:focus:not(:disabled)': {
          withOutline: '$secondary2',
        },
      },
      tertiary: {
        withOutline: '$tertiary1',
        outlineWidth: 0,
        '&:focus:not(:disabled)': {
          withOutline: '$tertiary1',
        },
      },
    },
  },
});
