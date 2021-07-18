/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @SEE <https://github.com/duncanleung/gatsby-typescript-emotion-storybook/blob/master/jest.config.js>
 */
module.exports = {
  rootDir: './',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.{mock,spec,stories,test}.{js,jsx,ts,tsx}',
    '!**/{__fixtures__,__stories__}/*',
    '!<rootDir>/{.config,.storybook,node_modules}/',
    '!<rootDir>/src/components/**/index.ts',
  ],
  globals: {
    __IS_LIVE__: false,
    __PATH_PREFIX__: '',
  },
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.config/jest/file-mock.js',
    '\\.svg': '<rootDir>/.config/jest/svgr-mock.js',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/.config/jest/setup-test-env.ts'],
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  testRegex: '(/__tests__/.*(test|spec))\\.([tj]sx?)$',
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/.config/jest/babel.jest.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  verbose: true,
};
