/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'JavaScript North East',
    siteUrl: 'https://jsne.co.uk',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
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
        outputPath: `src/generated/gatsby-schema.d.ts`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    // Only want offline plugin in live deployments.
    process.env.IS_LIVE && 'gatsby-plugin-offline',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ].filter(Boolean),
};
