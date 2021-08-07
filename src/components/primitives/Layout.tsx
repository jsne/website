import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet, HelmetProps, HtmlProps } from 'react-helmet-async';

import '~/styles/global.css';
import { getCssString } from '~/styles/stitches.config';

/** `head` element with default global styles. */
const LayoutHead: React.FC<HelmetProps> = ({ htmlAttributes, children, ...props }) => (
  <Helmet htmlAttributes={{ lang: 'en', ...htmlAttributes } as HtmlProps} {...props}>
    {children}
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
      rel="stylesheet"
    />
    {process.env.GATSBY_IS_LIVE !== 'true' && (
      <meta name="robots" content="noindex, nofollow" />
    )}
    <style
      key="stitches"
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getCssString() }}
    />
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
