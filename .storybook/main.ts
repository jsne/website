/* eslint-env node */

const webpack = require('webpack');

const {
  moduleRulesSvg,
  defineOptions,
  resolveAlias,
} = require('../.config/webpack.config');

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-gatsby',
    '@storybook/addon-storysource',
  ],
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
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
  webpackFinal: async (config: any) => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    config.module.rules.push(moduleRulesSvg);

    return {
      ...config,
      plugins: [...config.plugins, new webpack.DefinePlugin(defineOptions())],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.alias,
          ...resolveAlias,
        },
      },
    };
  },
};
