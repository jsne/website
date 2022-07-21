import type { FC, PropsWithChildren } from 'react';
import type { HelmetProps } from 'react-helmet';
import { Helmet } from 'react-helmet';

import '~/styles/global.css';
import { getCssText } from '~/styles/stitches.config';

import { Box } from '../atoms/Box';

interface LayoutHeadProps extends Omit<HelmetProps, 'title'> {
  title: HelmetProps['title'] | null;
  description: string | null;
}

/**
 * `head` element with default global styles.
 * @NOTE This also wraps all Storybook stories.
 */
const LayoutHead: FC<PropsWithChildren<LayoutHeadProps>> = ({
  description,
  htmlAttributes,
  children,
  meta = [],
  title,
  ...props
}) => (
  <Helmet
    title={`${title || 'JavaScript North East'} - JSNE`}
    htmlAttributes={{ lang: 'en', ...htmlAttributes } as HelmetProps['htmlAttributes']}
    meta={[
      {
        name: 'description',
        content:
          description || 'The all things JavaScript meetup in Newcastle upon Tyne.',
      },
      // Allow other sources of metadata to override the provided description.
      ...meta,
    ]}
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
  head: LayoutHeadProps;
}

/** Root component for all page layouts. */
export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, head }) => (
  <>
    <LayoutHead {...head} />

    <Box as="main" css={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      {children}
    </Box>

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
