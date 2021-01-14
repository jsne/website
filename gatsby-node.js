/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { webpackConfigResolveAlias } = require('./config/webpack.config');

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    resolve: { alias: webpackConfigResolveAlias },
  });
};
