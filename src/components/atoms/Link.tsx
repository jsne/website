import type { ComponentProps } from 'react';

import { styled } from '~/styles/stitches.config';

import type { AutoLinkProps } from '../primitives/AutoLink';
import { AutoLink } from '../primitives/AutoLink';

export const Link = styled(AutoLink, {
  position: 'relative',
  fontWeight: '$medium',
  borderRadius: '$1',
  withTransition: 'outline',
  textDecoration: 'none',

  /** @NOTE Using psuedo-element to avoid box size issues. */
  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-.125rem',
    left: 0,
    width: '100%',
    height: '0.125rem',
    backgroundColor: 'CurrentColor',
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
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        withLinearGradient: { variant: 'primary' },
        withOutlineFocus: '$primary1',
      },

      secondary: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        withLinearGradient: { variant: 'secondary' },
        withOutlineFocus: '$secondary1',
      },

      tertiary: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        withLinearGradient: { variant: 'tertiary' },
        withOutlineFocus: '$tertiary1',
      },
    },
  },
});

export type LinkProps = AutoLinkProps & ComponentProps<typeof Link>;
