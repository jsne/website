/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';

export const defineOptions = (stage = 'develop') => ({
  __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
  __IS_LIVE__: process.env.IS_LIVE === 'true',
});

export const moduleRulesSvg = {
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

export const resolveAlias = {
  '~': path.resolve(__dirname, '..', 'src'),
};
