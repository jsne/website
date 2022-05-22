import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';
import React from 'react';

import { Text, TextProps } from '~/components/atoms/Text';

export interface MdxProps
  extends Omit<MDXRendererProps, 'children'>,
    Partial<Pick<MDXRendererProps, 'children'>> {
  components?: MDXProviderComponentsProp;
}

export const mdxDefaultComponents = {
  p: (props: TextProps) => <Text as="p" {...props} />,
};

/** Simple wrapper for any MDX markup (does not define any custom components). */
export const Mdx: React.FC<MdxProps> = ({
  children,
  components = mdxDefaultComponents,
}) => {
  if (!children) return null;
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
