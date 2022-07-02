import { ComponentProps } from 'react';

import { styled } from '~/styles/stitches.config';

import { AutoLink, AutoLinkProps } from '../primitives/AutoLink';

export const Link = styled(AutoLink, {
  position: 'relative',
  fontWeight: '$medium',
  borderRadius: '$1',
  outline: 0,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  withTransition: 'box-shadow',

  /** @NOTE Using psuedo-element to avoid box size issues. */
  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-.125rem',
    left: 0,
    width: '100%',
    height: '0.125rem',
    backgroundImage: 'inherit',
    opacity: 0,
    withTransition: 'opacity',
  },

  '&:hover': {
    '&::after': {
      opacity: 1,
    },
  },

  variants: {
    linkAppearance: {
      primary: {
        withLinearGradient: { variant: 'primary' },
        '&:focus-visible': {
          withOutline: '$primary1',
        },
      },
      secondary: {
        withLinearGradient: { variant: 'secondary' },
        '&:focus-visible': {
          withOutline: '$secondary1',
        },
      },
      tertiary: {
        withLinearGradient: {
          variant: 'tertiary',
        },
        '&:focus-visible': {
          withOutline: '$tertiary1',
        },
      },
    },
  },
});

export type LinkProps = AutoLinkProps & ComponentProps<typeof Link>;
