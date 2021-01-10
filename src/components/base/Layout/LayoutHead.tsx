import React from 'react';
import { Helmet, HelmetProps } from 'react-helmet';

export type LayoutHeadProps = HelmetProps;

/** `head` element with default global styles. */
export const LayoutHead: React.FC<LayoutHeadProps> = (props) => (
  <Helmet {...props}>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
      crossOrigin="anonymous"
    />
  </Helmet>
);
