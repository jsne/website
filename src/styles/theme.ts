/** Convert pixel to rem. */
export const remify = (px: number): string => `${px / 16}rem`;

/** Base key for font styles. */
export const themeTextStylesKeys = [
  'hero',
  'h1',
  'h2',
  'h3',
  'h4',
  'p',
  'preHeading',
  'caption',
] as const;
export type ThemeTextStylesKey = typeof themeTextStylesKeys[number];
type ThemeTextStyle = Record<ThemeTextStylesKey, string>;

const fontSizes: ThemeTextStyle = {
  hero: remify(62),
  h1: remify(50),
  h2: remify(42),
  h3: remify(34),
  h4: remify(28),
  p: remify(16),
  preHeading: remify(16),
  caption: remify(14),
};

const lineHeights: ThemeTextStyle = {
  hero: '1.165',
  h1: '1.2',
  h2: '1.2',
  h3: '1.2',
  h4: '1.2',
  p: '1.55',
  preHeading: '1.55',
  caption: '1.55',
};

/** Main theme definition. */
export const theme = {
  borderStyles: { base: 'solid' },
  borderWidths: { '1': '0.0625rem', '2': '0.125rem', '3': '0.1875rem' },
  colors: {
    // Direct colour definitions.

    black1: '#3c3562',
    black2: '#2c264e',
    black3: '#150e3d',
    black3Alpha: '#150e3ea6',

    green1: '#6fcf97',
    green2: '#27ae60',
    green3: '#219653',

    pink1: '#ff867e',
    pink2: '#f4545e',
    pink3: '#ff426f',
    orange1: '#ffb879',
    orange2: '#ff9c44',
    orange3: '#f47c11',
    red1: '#ff6767',
    red2: '#ff4d4d',
    red3: '#f32e2e',
    white1: '#ffffff',
    white2: '#e5e5e5',
    white2Alpha: '#e5e5e5bf',
    white3: '#a5a3b7',
    white4: '#7f7d91',
    white3Alpha: '#a5a3b762',

    // Abstracted colour definitions.

    body1: '$black1',
    body2: '$black2',
    body3: '$black3',
    bodyContrast1: '$white1',
    bodyContrast2: '$white2',
    bodyContrast3: '$white3',
    bodyContrast4: '$white3Alpha',
    page1: '$white1',
    pageContrast1: '$white4',
    pageContrast2: '$black2',
    pageContrast3: '$black3',

    primary1: '#ffe358',
    primary2: '#f9cc2f',
    primary3: '#ffc01e',
    primaryContrast1: '$black2',
    primaryContrast2: '$black3',
    primaryContrast3: '$black3Alpha',

    secondary1: '#a26bfc',
    secondary2: '#682ec6',
    secondary3: '#4220a3',
    secondaryContrast1: '$white1',
    secondaryContrast2: '$white2',
    secondaryContrast2Alpha: '$white2Alpha',
    secondaryContrast3: '$whiteAlpha3',
    secondaryContrast3Alpha: '$white3Alpha',

    tertiary1: '#56ccf2',
    tertiary2: '#2d9cdb',
    tertiary3: '#2f59ed',
    tertiaryContrast1: '$white1',

    error1: '$red1',
    error2: '$red2',
    error3: '$red3',

    shadow1: '#00000016',
    shadow2: '#00000009',
  },
  fonts: {
    base: '"inter", system-ui, sans-serif',
  },
  fontSizes,
  fontWeights: {
    regular: '500',
    medium: '600',
    bold: '700',
    heavy: '800',
  },
  letterSpacings: {
    spaced: '.2ex',
  },
  lineHeights: {
    ...lineHeights,
    spaced: '1.675',
  },
  radii: { '1': '.25rem', '2': '.5rem' },
  shadows: {},
  sizes: {
    wrapperWidth1: remify(520),
    wrapperWidth2: remify(800),
    wrapperWidth3: remify(1024),
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
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '13': '3.25rem',
    '14': '3.5rem',
    '15': '3.75rem',
    '16': '4rem',
  },
  transitions: {
    timingFunction: 'cubic-bezier(.56, -0.93, .47, 1.92)',
    duration: '.4s',
  },
};

export type Theme = typeof theme;
/** Tokenised `colors` keys (prefixed with `$`). */
export type ThemeColorsTokenKey = `$${keyof Theme['colors']}`;
/** Tokenised text style keys (prefixed with `$`). */
export type ThemeTextStylesTokenKey = `$${ThemeTextStylesKey}`;
