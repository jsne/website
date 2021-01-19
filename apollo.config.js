/* eslint-env node */
module.exports = {
  client: {
    name: 'jsne-website',
    tagName: 'graphql',
    includes: ['./src/**/*.{ts,tsx}', './src/generated/gatsby-schema-documents.graphql'],
    service: {
      name: 'GatsbyJS',
      localSchemaFile: './src/generated/gatsby-schema.graphql',
    },
  },
};
