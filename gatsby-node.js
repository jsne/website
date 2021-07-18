/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const {
  webpackConfigPluginDefineOptions,
  webpackConfigResolveAlias,
} = require('./.config/webpack.config');

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define(webpackConfigPluginDefineOptions(stage)),
      new ForkTsCheckerWebpackPlugin(),
    ],
    resolve: { alias: webpackConfigResolveAlias },
  });
};
