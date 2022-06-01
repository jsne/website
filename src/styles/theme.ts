/** Convert pixel to rem. */
export const remify = (px: number): string => `${px / 16}rem`;

/** Base key for font styles. */
export const themeTextStylesKeys = ['hero', 'h1', 'h2', 'h3', 'p', 'preHeading'] as const;
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
  hero: '1.165',
  h1: '1.2',
  h2: '1.2',
  h3: '1.2',
  p: '1.55',
  preHeading: '1.55',
};

/** Main theme definition. */
export const theme = {
  borderStyles: { base: 'solid' },
  borderWidths: { '1': '0.0625rem', '2': '0.125rem', '3': '0.1875rem' },
  colors: {
    // Direct colour definitions.

    black1: 'rgb(60, 53, 98)',
    black2: 'rgb(44, 38, 78)',
    black3: 'rgb(21, 14, 61)',
    black3Alpha: 'rgba(21, 14, 61, .65)',

    green1: 'rgb(111, 207, 151)',
    green2: 'rgb(39, 174, 96)',
    green3: 'rgb(33, 150, 83)',

    pink1: 'rgb(255, 134, 126)',
    pink2: 'rgb(244, 84, 94)',
    pink3: 'rgb(255, 66, 111)',
    orange1: 'rgb(255, 184, 121)',
    orange2: 'rgb(255, 156, 68)',
    orange3: 'rgb(244, 124, 17)',
    red1: 'rgb(255, 103, 103)',
    red2: 'rgb(255, 77, 77)',
    red3: 'rgb(243, 46, 46)',
    white1: 'rgb(255, 255, 255)',
    white2: 'rgb(229, 229, 229)',
    white2Alpha: 'rgba(229, 229, 229, 0.75)',
    white3: 'rgb(165, 163, 183)',
    white4: 'rgb(138, 136, 155)',
    white3Alpha: 'rgba(165, 163, 183, 0.35)',

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

    primary1: 'rgb(255, 227, 88)',
    primary2: 'rgb(249, 204, 47)',
    primary3: 'rgb(255, 192, 30)',
    primaryContrast1: '$black2',
    primaryContrast2: '$black3',
    primaryContrast3: '$black3Alpha',

    secondary1: 'rgb(162, 107, 252)',
    secondary2: 'rgb(104, 46, 198)',
    secondary3: 'rgb(66, 32, 163)',
    secondaryContrast1: '$white1',
    secondaryContrast2: '$white2',
    secondaryContrast2Alpha: '$white2Alpha',
    secondaryContrast3: '$whiteAlpha3',
    secondaryContrast3Alpha: '$white3Alpha',

    tertiary1: 'rgb(86, 204, 242)',
    tertiary2: 'rgb(45, 156, 219)',
    tertiary3: 'rgb(47, 89, 237)',
    tertiaryContrast1: '$white1',

    error1: '$red1',
    error2: '$red2',
    error3: '$red3',

    shadow1: 'rgba(0, 0, 0, .085)',
    shadow2: 'rgba(0, 0, 0, .035)',
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
/** Tokenised text style keys (prefixed with `$`). */
export type ThemeTextStylesTokenKey = `$${ThemeTextStylesKey}`;
