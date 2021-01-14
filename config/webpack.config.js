/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports.webpackConfigResolveAlias = {
  '~': path.resolve(__dirname, '..', 'src'),
};
