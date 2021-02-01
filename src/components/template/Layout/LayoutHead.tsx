import React from 'react';
import { Helmet, HelmetProps } from 'react-helmet-async';

export type LayoutHeadProps = HelmetProps;

/** `head` element with default global styles. */
export const LayoutHead: React.FC<LayoutHeadProps> = (props) => (
  <Helmet {...props}>
    {!__IS_LIVE__ && <meta name="robots" content="noindex, nofollow" />}
  </Helmet>
);
