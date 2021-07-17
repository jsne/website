/* eslint-disable react/display-name */
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';
import React from 'react';

export interface MdxProps extends MDXRendererProps {
  components: MDXProviderComponentsProp;
}

/** Simple wrapper for any MDX markup (does not define any custom components). */
export const Mdx: React.FC<MDXRendererProps> = ({ children, components }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{children}</MDXRenderer>
  </MDXProvider>
);
