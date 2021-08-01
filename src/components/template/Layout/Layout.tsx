import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet, HelmetProps, HtmlProps } from 'react-helmet-async';

import '~/styles/global.css';

/** `head` element with default global styles. */
const LayoutHead: React.FC<HelmetProps> = ({ htmlAttributes, ...props }) => (
  <Helmet htmlAttributes={{ lang: 'en', ...htmlAttributes } as HtmlProps} {...props}>
    <link
      crossOrigin="anonymous"
      href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
      rel="stylesheet"
    />
    {process.env.GATSBY_IS_LIVE !== 'true' && (
      <meta name="robots" content="noindex, nofollow" />
    )}
  </Helmet>
);

export interface LayoutProps {
  /** Props to apply within `head` element via Helmet. */
  head: HelmetProps;
}

/** Root component for all page layouts. */
export const Layout: React.FC<LayoutProps> = ({ children, head }) => (
  <HelmetProvider>
    <LayoutHead {...head} />
    {children}
  </HelmetProvider>
);
