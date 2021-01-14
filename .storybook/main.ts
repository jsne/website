const { webpackConfigResolveAlias } = require('../config/webpack.config');

module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (prop: any) => {
        const exclude = ['as', 'css', 'forwardedAs', 'ref', 'theme'];

        if (exclude.includes(prop.name)) {
          return false;
        }

        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
      },
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      include: ['**/**.tsx', '**/**.ts'],
      exclude: [],
    },
  },
  webpackFinal: async (config: any) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.alias,
        ...webpackConfigResolveAlias,
      },
    },
  }),
};
