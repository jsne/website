import 'dotenv/config';
import type { GatsbyConfig, IPluginRefObject } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'jsne',
    siteUrl: 'https://jsne.co.uk',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: 'preview.contentful.com',
      },
    },
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'react',
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        emitPluginDocuments: {
          'src/generated/gatsby-schema-documents.graphql': true,
        },
        emitSchema: {
          'src/generated/gatsby-schema.json': true,
          'src/generated/gatsby-schema.graphql': true,
        },
        outputPath: 'src/generated/gatsby-schema.d.ts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets/',
      },
      __key: 'assets',
    } as IPluginRefObject,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    } as IPluginRefObject,
    (process.env.DEBUG_BUILD === 'true' &&
      'gatsby-plugin-webpack-bundle-analyser-v2') as string,
  ].filter(Boolean),
};

export default config;
