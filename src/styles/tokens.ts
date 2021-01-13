import { getLineHeight, remify } from './utilities';

export type TextVariantKey = '$h1' | '$h2' | '$h3' | '$preHeading' | '$p';

export type TextVariantMap = { [k in TextVariantKey]: string };

const fontSizes: TextVariantMap = {
  $h1: remify(30),
  $h2: remify(18),
  $h3: remify(16),
  $preHeading: remify(13),
  $p: remify(12),
};

const lineHeights: TextVariantMap = {
  $h1: getLineHeight(30, 35),
  $h2: getLineHeight(18, 20),
  $h3: getLineHeight(16, 18),
  $preHeading: getLineHeight(14, 16),
  $p: getLineHeight(12, 14),
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
  $secondaryContrast: '#FFFFFF',

  // Direct color definitions.

  $blue1: '#56CCF2',
  $blue2: '#2D9CDB',
  $blue3: '#2F59ED',

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
  borderStyles: { $1: 'solid' },
  borderWidths: { $1: '0.0625rem', $2: '0.125rem' },
  colors,
  fonts: {
    base: 'inter, system-ui, sans-serif',
  },
  fontSizes,
  fontWeights,
  lineHeights,
  radii: { $1: '.25rem' },
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
};
