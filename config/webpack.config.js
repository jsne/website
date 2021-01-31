/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

/** Custom regex to capture inline SVGs. */
const customSvgRegex = /assets\/images\/inline\/.+\.svg$/;
module.exports.customSvgRegex = customSvgRegex;

module.exports.webpackConfigPluginDefineOptions = (stage = 'develop') => ({
  __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
  __IS_LIVE__: process.env.IS_LIVE === 'true',
});

module.exports.webpackConfigModuleRulesSvg = {
  test: customSvgRegex,
  include: [path.resolve(__dirname, '../src/assets/images/inline')],
  use: ['@svgr/webpack', 'url-loader'],
};

module.exports.webpackConfigResolveAlias = {
  '~': path.resolve(__dirname, '..', 'src'),
};
