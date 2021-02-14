import React from 'react';
import { Link } from 'gatsby';

import { ReactComponent as Logo } from '~/assets/images/logo.svg';
import { styled } from '~/styles/stitches.config';
import { Wrapper } from '~/components/base/Wrapper';

export const HeaderRoot = styled(Wrapper, {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$4',
});

export const HeaderLink = styled(Link, {
  display: 'block',
  withTransition: 'filter transition',

  '&:hover': {
    transform: `scale(1.05)`,
    filter: `saturate(1.5) drop-shadow(0 0 .25rem $$colors.$secondary1) drop-shadow(0 0 .5rem $$colors.$secondary1)`,
  },

  '&:focus': {
    outline: 0,
    filter: `saturate(1.5) drop-shadow(0 2px 0 $$colors.$secondary1) drop-shadow(2px 0 0 $$colors.$secondary1) drop-shadow(0 -2px 0 $$colors.$secondary1) drop-shadow(-2px 0 0 $$colors.$secondary1) drop-shadow(0 0 .25rem $$colors.$secondary2) drop-shadow(0 0 .5rem $$colors.$secondary1)`,
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
    <HeaderLink to={logoSlug}>
      <HeaderLogo />
    </HeaderLink>
  </HeaderRoot>
);