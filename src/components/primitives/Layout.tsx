import { FC, PropsWithChildren } from 'react';
import { Helmet, HelmetProps, HelmetProvider } from 'react-helmet-async';

import '~/styles/global.css';
import { getCssText } from '~/styles/stitches.config';

/**
 * `head` element with default global styles.
 * @NOTE This also wraps all Storybook stories.
 */
const LayoutHead: FC<PropsWithChildren<HelmetProps>> = ({
  htmlAttributes,
  children,
  ...props
}) => (
  <Helmet
    htmlAttributes={{ lang: 'en', ...htmlAttributes } as HelmetProps['htmlAttributes']}
    {...props}
  >
    {children}
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
      rel="stylesheet"
    />

    <style
      key="stitches"
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />
  </Helmet>
);

export interface LayoutProps {
  /** Props to apply within `head` element via Helmet. */
  head: HelmetProps;
}

/** Root component for all page layouts. */
export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children, head }) => (
  <HelmetProvider>
    <LayoutHead {...head} />
    {children}
    <noscript>I can&apos;t believe you&apos;ve done this.</noscript>
  </HelmetProvider>
);
