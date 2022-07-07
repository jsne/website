const path = require('path');

module.exports.defineOptions = (stage = 'develop') => ({
  __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
  __IS_LIVE__: process.env.IS_LIVE === 'true',
});

module.exports.moduleRulesSvg = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
    {
      loader: 'file-loader',
    },
  ],
  type: 'javascript/auto',
  issuer: {
    and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
  },
};

module.exports.resolveAlias = {
  '~': path.resolve(__dirname, '..', 'src'),
};
