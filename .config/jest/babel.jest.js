/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: 0 */

module.exports = require('babel-jest').default.createTransformer({
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
});
