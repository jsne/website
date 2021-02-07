import React from 'react';
import { Link } from 'gatsby';

import { ReactComponent as Logo } from '~/assets/images/logo.svg';
import { styled } from '~/styles/stitches.config';
import { tokens } from '~/styles/tokens';
import { Wrapper } from '~/components/base/Wrapper';

const HeaderRoot = styled(Wrapper, {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$4',
});

const HeaderLink = styled(Link, {
  display: 'block',
  withTransition: 'filter transition',

  ':hover': {
    transform: `scale(1.05)`,
    filter: `saturate(1.5) drop-shadow(0 0 .25rem ${tokens.colors.$secondary2}) drop-shadow(0 0 .5rem ${tokens.colors.$secondary1})`,
  },

  ':focus': {
    outline: 0,
    filter: `saturate(1.5) drop-shadow(0 2px 0 ${tokens.colors.$secondary1}) drop-shadow(2px 0 0 ${tokens.colors.$secondary1}) drop-shadow(0 -2px 0 ${tokens.colors.$secondary1}) drop-shadow(-2px 0 0 ${tokens.colors.$secondary1}) drop-shadow(0 0 .25rem ${tokens.colors.$secondary2}) drop-shadow(0 0 .5rem ${tokens.colors.$secondary1})`,
  },
});

const HeaderLogo = styled(Logo, {
  width: '7rem',
});

interface HeaderProps {
  /** URL applied to logo. */
  logoSlug: string;
}

/** Main website header. */
export const Header: React.FC<HeaderProps> = ({ logoSlug = '/', ...props }) => (
  <HeaderRoot as="header" wrapperPadding="x4" {...props}>
    <HeaderLink to={logoSlug}>
      <HeaderLogo />
    </HeaderLink>
  </HeaderRoot>
);
