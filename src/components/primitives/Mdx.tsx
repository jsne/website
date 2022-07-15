import type { MDXProviderComponentsProp } from '@mdx-js/react';
import { MDXProvider } from '@mdx-js/react';
import type { MDXRendererProps } from 'gatsby-plugin-mdx';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import type { FC } from 'react';

import type { LinkProps } from '~/components/atoms/Link';
import { Link } from '~/components/atoms/Link';
import type { TextProps } from '~/components/atoms/Text';
import { Text } from '~/components/atoms/Text';

export interface MdxProps
  extends Omit<MDXRendererProps, 'children'>,
    Partial<Pick<MDXRendererProps, 'children'>> {
  components?: MDXProviderComponentsProp;
}

export const mdxDefaultComponents = {
  p: (props: TextProps) => <Text as="p" {...props} />,
  a: (props: LinkProps) => <Link linkAppearance="secondary" {...props} />,
};

/** Simple wrapper for any MDX markup (does not define any custom components). */
export const Mdx: FC<MdxProps> = ({ children, components = mdxDefaultComponents }) => {
  if (!children) return null;

  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
