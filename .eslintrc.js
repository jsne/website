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
  plugins: [
    'testing-library',
    '@typescript-eslint',
    'react',
    'jest',
    'jest-dom',
    'graphql',
  ],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/recommended',
    'plugin:jest-dom/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 0,
    'no-confusing-arrow': 0,
    'no-console': ['warn', { allow: ['warn'] }],
    'no-debugger': 0,
    'no-shadow': 'warn',
    'object-shorthand': 'warn',

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

    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
