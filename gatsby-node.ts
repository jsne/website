import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import type { CreateBabelConfigArgs, CreateWebpackConfigArgs } from 'gatsby';

import { defineOptions, resolveAlias } from './.config/webpack.config';

exports.onCreateBabelConfig = ({ actions }: CreateBabelConfigArgs) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

exports.onCreateWebpackConfig = ({
  stage,
  plugins,
  getConfig,
  actions,
}: CreateWebpackConfigArgs) => {
  const config = getConfig();

  actions.setWebpackConfig({
    plugins: [
      plugins.define(defineOptions(stage)),
      new ForkTsCheckerWebpackPlugin({
        async: true,
        issue: {
          include: {
            severity: process.env.NODE_ENV === 'development' ? 'error' : 'warning',
          },
        },
      }),
    ],
    resolve: {
      ...config.resolve,
      alias: { ...config.resolve.alias, ...resolveAlias },
    },
  });
};
