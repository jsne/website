const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    resolve: {
      alias: { '~': path.resolve(__dirname, 'src') },
    },
  });
};
