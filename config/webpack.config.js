/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

/** Custom regex to capture inline SVGs. */
module.exports.customSvgRegex = /assets\/images\/inline\/.+\.svg$/;

module.exports.webpackConfigPluginDefineOptions = (stage = 'develop') => ({
  __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
  __IS_LIVE__: process.env.IS_LIVE === 'true',
});

module.exports.webpackConfigResolveAlias = {
  '~': path.resolve(__dirname, '..', 'src'),
};
