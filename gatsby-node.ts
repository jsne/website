import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import type { CreateWebpackConfigArgs } from 'gatsby';

import { defineOptions, resolveAlias } from './.config/webpack.config';

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
      new ForkTsCheckerWebpackPlugin({ async: true }),
    ],
    resolve: {
      ...config.resolve,
      alias: { ...config.resolve.alias, ...resolveAlias },
    },
  });
};
