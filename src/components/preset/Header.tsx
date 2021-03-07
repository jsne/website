import React from 'react';

import { ReactComponent as Logo } from '~/assets/images/logo.svg';
import { Wrapper } from '~/components/base/Wrapper';
import { styled } from '~/styles/stitches.config';

export const HeaderRoot = styled(Wrapper, {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$4',
});

export const HeaderLink = styled('a', {
  display: 'block',
  withTransition: 'filter transform',

  '&:hover': {
    transform: `scale(1.05)`,
    filter: `saturate(1.5) drop-shadow(0 0 .25rem var(--colors-secondary1)) drop-shadow(0 0 .5rem var(--colors-secondary1))`,
  },

  '&:focus': {
    outline: 0,
    filter: `saturate(1.5) drop-shadow(0 2px 0 var(--colors-secondary1)) drop-shadow(2px 0 0 var(--colors-secondary1)) drop-shadow(0 -2px 0 var(--colors-secondary1)) drop-shadow(-2px 0 0 var(--colors-secondary1)) drop-shadow(0 0 .25rem var(--colors-secondary2)) drop-shadow(0 0 .5rem var(--colors-secondary1))`,
  },
});

export const HeaderLogo = styled(Logo, {
  width: '6rem',
});

interface HeaderProps {
  /** URL applied to logo. */
  logoSlug?: string;
}

/** Main website header. */
export const Header: React.FC<HeaderProps> = ({ logoSlug = '/', ...props }) => (
  <HeaderRoot as="header" wrapperPadding="x4" {...props}>
    <HeaderLink href={logoSlug}>
      <HeaderLogo />
    </HeaderLink>
  </HeaderRoot>
);
