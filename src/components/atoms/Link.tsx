import { ComponentProps } from 'react';

import { styled } from '~/styles/stitches.config';

export const Link = styled('a', {
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

export type LinkProps = ComponentProps<typeof Link>;

/** Link that automatically opens new tab for external hrefs. */
export const LinkAuto = (props: LinkProps) => {
  const isExternalLink =
    !props.href?.startsWith(window.location.origin) &&
    !props.href?.startsWith('/') &&
    !props.href?.startsWith('#');

  return (
    <Link
      {...props}
      target={isExternalLink ? '_blank' : props.target}
      rel={isExternalLink ? 'noopener noreferrer' : props.rel}
    />
  );
};
