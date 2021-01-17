import { TokenTextDictionary } from './types';

/** Convert pixel to rem. */
export const remify = (px: number): string => `${px / 16}rem`;

const fontSizes: TokenTextDictionary = {
  $h1: remify(52),
  $h2: remify(44),
  $h3: remify(40),
  $p: remify(16),
  $preHeading: remify(16),
};

const lineHeights: TokenTextDictionary = {
  $h1: '1.2',
  $h2: '1.2',
  $h3: '1.2',
  $p: '1.55',
  $preHeading: '1.55',
};

const fontWeights = {
  $regular: '500',
  $medium: '600',
  $bold: '700',
  $heavy: '900',
};

const colors = {
  // Abstracted color definitions.

  $body1: '#3C3562',
  $body2: '#2C264E',
  $body3: '#150E3D',
  $bodyContrast: '#FFFFFF',

  $page: '#FFFFFF',
  $pageContrast1: '#A5A3B7',
  $pageContrast2: '#3C3562',
  $pageContrast3: '#150E3D',

  $primary1: '#FFE358',
  $primary2: '#F9CC2F',
  $primary3: '#FFC01E',
  $primaryContrast: '#2C264E',

  $secondary1: '#A26BFC',
  $secondary2: '#682EC6',
  $secondary3: '#4220A3',
  $secondaryContrast: '#F6F5FC',

  $tertiary1: '#56CCF2',
  $tertiary2: '#2D9CDB',
  $tertiary3: '#2F59ED',
  $tertiaryContrast: '#F6F5FC',

  $shadow1: 'rgba(0, 0, 0, .085)',
  $shadow2: 'rgba(0, 0, 0, .035)',

  // Direct color definitions.

  $green1: '#6FCF97',
  $green2: '#27AE60',
  $green3: '#219653',

  $pink1: '#FF867E',
  $pink2: '#F4545E',
  $pink3: '#FF426F',

  $orange1: '#FFB879',
  $orange2: '#FF9C44',
  $orange3: '#F47C11',

  $red1: '#FF6767',
  $red2: '#FF4D4D',
  $red3: '#F32E2E',
};

export const tokens = {
  borderStyles: { $base: 'solid' },
  borderWidths: { $1: '0.0625rem', $2: '0.125rem' },
  colors,
  fonts: {
    $base: 'inter, system-ui, sans-serif',
  },
  fontSizes,
  fontWeights,
  lineHeights,
  radii: { $1: '.25rem', $2: '.5rem' },
  shadows: {},
  space: {
    $1: '.25rem',
    $2: '.5rem',
    $3: '.75rem',
    $4: '1rem',
    $5: '1.25rem',
    $6: '1.5rem',
    $7: '1.75rem',
    $8: '2rem',
  },
  transitions: {
    $timingFunction: 'cubic-bezier(.56, -0.93, .47, 1.92)',
    $duration: '.4s',
  },
};

export type Tokens = typeof tokens;
