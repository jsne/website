import { FC, PropsWithChildren } from 'react';
import { Helmet, HelmetProps } from 'react-helmet';

import '~/styles/global.css';
import { getCssText } from '~/styles/stitches.config';

import { Box } from '../atoms/Box';

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
  <>
    <LayoutHead {...head} />
    {children}
    <noscript>
      <Box css={{ padding: '$4', textAlign: 'center' }}>
        <div role="img" aria-label="Heartbroken">
          💔
        </div>
        &nbsp; No JS? I can&apos;t believe you&apos;ve done this.
      </Box>
    </noscript>
  </>
);
