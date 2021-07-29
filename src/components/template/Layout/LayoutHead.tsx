import React from 'react';
import { Helmet, HelmetProps, HtmlProps } from 'react-helmet-async';

export type LayoutHeadProps = HelmetProps;

/** `head` element with default global styles. */
export const LayoutHead: React.FC<LayoutHeadProps> = ({ htmlAttributes, ...props }) => (
  <Helmet htmlAttributes={{ lang: 'en', ...htmlAttributes } as HtmlProps} {...props}>
    {!__IS_LIVE__ && <meta name="robots" content="noindex, nofollow" />}
  </Helmet>
);
