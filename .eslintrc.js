/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: 0 */

const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'graphql'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 0,
    'no-confusing-arrow': 0,
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-constant-binary-expression': 'error',
    'no-debugger': 0,
    'no-shadow': 'warn',
    'object-shorthand': 'warn',
    'newline-before-return': 'warn',

    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        tagName: 'graphql',
        schemaJsonFilepath: path.resolve(__dirname, 'src/generated/gatsby-schema.json'),
      },
    ],

    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/prop-types': 0,
    'react/self-closing-comp': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
