import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import '~/styles/global.css';

import { LayoutHead, LayoutHeadProps } from './LayoutHead';

export interface LayoutProps {
  /** Props to apply within `head`. */
  head: LayoutHeadProps;
}

/** Root component for all page layouts. */
export const Layout: React.FC<LayoutProps> = ({ children, head }) => (
  <HelmetProvider>
    <LayoutHead {...head} />
    {children}
  </HelmetProvider>
);
