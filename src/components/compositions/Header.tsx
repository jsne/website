import type { FC } from 'react';

import { ReactComponent as Logo } from '~/assets/images/logo.svg';
import { Wrapper } from '~/components/atoms/Wrapper';
import { keyframes, styled } from '~/styles/stitches.config';

import { AutoLink } from '../primitives/AutoLink';

export const HeaderRoot = styled(Wrapper, {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$4',
});

export const HeaderLink = styled(AutoLink, {
  display: 'block',
  withTransition: 'filter transform',

  '&:hover': {
    transform: `scale(1.05)`,
    filter: `saturate(1.5) drop-shadow(0 0 .25rem $colors$secondary1) drop-shadow(0 0 .5rem $colors$secondary1)`,
  },

  '&:focus': {
    outline: 0,
    filter: `saturate(1.5) drop-shadow(0 2px 0 $colors$seondary1 drop-shadow(2px 0 0 $colors$secondary1) drop-shadow(0 -2px 0 $colors$secondary1)) drop-shadow(-2px 0 0 $colors$secondary1) drop-shadow(0 0 .25rem $colors$secondary2) drop-shadow(0 0 .5rem $colors$secondary1)`,
  },

  '&:focus-visible': {
    transform: `scale(1.05)`,
    filter: `saturate(1.5) drop-shadow(0 0 .25rem $colors$secondary1) drop-shadow(0 0 .5rem $colors$secondary1)`,
  },
});

const lilJiggle = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(-7deg)' },
  '50%': { transform: 'rotate(0deg)' },
  '75%': { transform: 'rotate(3.5deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

export const HeaderLogo = styled(Logo, {
  width: '7rem',
  animationDelay: '150ms',
  animationDuration: '450ms',
  animationFillMode: 'both',
  animationTimingFunction: 'ease-in-out',

  '&:hover': {
    animationName: `${lilJiggle}`,
  },
});

export interface HeaderProps {
  /** URL applied to logo. */
  logoSlug?: string;
}

/** Main website header. */
export const Header: FC<HeaderProps> = ({ logoSlug = '/', ...props }) => (
  <HeaderRoot as="header" role="banner" wrapperPadding="x4" {...props}>
    <HeaderLink href={logoSlug} title="Go to Homepage">
      <HeaderLogo aria-hidden />
    </HeaderLink>
  </HeaderRoot>
);
