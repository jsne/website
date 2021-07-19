/* eslint-disable react/display-name */
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';
import React from 'react';

import { Text, TextProps } from '~/components/atoms/Text';

export interface MdxProps extends MDXRendererProps {
  components: MDXProviderComponentsProp;
}

const mdxDefaultComponents = {
  p: (props: TextProps) => <Text as="p" {...props} />,
};

/** Simple wrapper for any MDX markup (does not define any custom components). */
export const Mdx: React.FC<MDXRendererProps> = ({
  children,
  components = mdxDefaultComponents,
}) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);
