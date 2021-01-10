import React from 'react';

import { LayoutHead, LayoutHeadProps } from './LayoutHead';
import { LayoutProviders } from './LayoutProviders';
import { LayoutStyles } from './LayoutStyles';

export interface LayoutProps {
  /** Props to apply within `head`. */
  head: LayoutHeadProps;
}

/** Root component for all page layouts. */
export const Layout: React.FC<LayoutProps> = ({ children, head }) => (
  <>
    <LayoutHead {...head} />
    <LayoutStyles />
    <LayoutProviders>{children}</LayoutProviders>
  </>
);
