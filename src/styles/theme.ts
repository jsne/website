/** Convert pixel to rem. */
export const remify = (px: number): string => `${px / 16}rem`;

/** Base key for font styles. */
export const themeTextStylesKeys = ['h1', 'h2', 'h3', 'hero', 'p', 'preHeading'] as const;
export type ThemeTextStylesKey = typeof themeTextStylesKeys[number];
type ThemeTextStyle = Record<ThemeTextStylesKey, string>;

const fontSizes: ThemeTextStyle = {
  hero: remify(64),
  h1: remify(52),
  h2: remify(44),
  h3: remify(40),
  p: remify(16),
  preHeading: remify(16),
};

const lineHeights: ThemeTextStyle = {
  hero: '1.2',
  h1: '1.2',
  h2: '1.2',
  h3: '1.2',
  p: '1.55',
  preHeading: '1.55',
};

/** Main theme definition. */
export const theme = {
  borderStyles: { base: 'solid' },
  borderWidths: { '1': '0.0625rem', '2': '0.125rem' },
  colors: {
    // Direct colour definitions.

    black1: '#3C3562',
    black2: '#2C264E',
    black3: '#150E3D',
    black3Alpha: 'rgba(21, 14, 61, .65)',

    green1: '#6FCF97',
    green2: '#27AE60',
    green3: '#219653',

    pink1: '#FF867E',
    pink2: '#F4545E',
    pink3: '#FF426F',
    orange1: '#FFB879',
    orange2: '#FF9C44',
    orange3: '#F47C11',
    red1: '#FF6767',
    red2: '#FF4D4D',
    red3: '#F32E2E',
    white1: '#FFFFFF',
    white2: '#F6F5FC',
    white3: '#A5A3B7',

    // Abstracted colour definitions.

    body1: '$black1',
    body2: '$black2',
    body3: '$black3',
    bodyContrast1: '$white1',
    page: '$white1',
    pageContrast1: '$white3',
    pageContrast2: '$black2',
    pageContrast3: '$black3',
    primary1: '#FFE358',
    primary2: '#F9CC2F',
    primary3: '#FFC01E',
    primaryContrast1: '$black2',
    primaryContrast2: '$black3',
    primaryContrast3: '$black3Alpha',
    secondary1: '#A26BFC',
    secondary2: '#682EC6',
    secondary3: '#4220A3',
    secondaryContrast1: '$white2',
    tertiary1: '#56CCF2',
    tertiary2: '#2D9CDB',
    tertiary3: '#2F59ED',
    tertiaryContrast1: '$white2',
    shadow1: 'rgba(0, 0, 0, .085)',
    shadow2: 'rgba(0, 0, 0, .035)',
  },
  fonts: {
    base: '"inter", serif',
  },
  fontSizes,
  fontWeights: {
    regular: '500',
    medium: '600',
    bold: '700',
    heavy: '800',
  },
  letterSpacings: {
    spaced: '0.05ex',
  },
  lineHeights: {
    ...lineHeights,
    spaced: '1.675',
  },
  radii: { '1': '.25rem', '2': '.5rem' },
  shadows: {},
  sizes: {
    wrapperWidth1: remify(520),
    wrapperWidth2: remify(1040),
  },
  space: {
    '1': '.25rem',
    '2': '.5rem',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    section: '4rem',
  },
  transitions: {
    timingFunction: 'cubic-bezier(.56, -0.93, .47, 1.92)',
    duration: '.4s',
  },
};

export type Theme = typeof theme;
/** Tokenised `colors` keys (prefixed with `$`). */
export type ThemeColorsTokenKey = `$${keyof Theme['colors']}`;
/** Tokenised `fontWeights` keys (prefixed with `$`). */
export type ThemeFontWeightsTokenKey = `$${keyof Theme['fontWeights']}`;
/** Tokenised text style keys (prefixed with `$`). */
export type ThemeTextStylesTokenKey = `$${ThemeTextStylesKey}`;
