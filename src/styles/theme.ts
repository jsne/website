import { getLineHeight, remify, TextVariantKey, TextVariantMap } from './utilities';

const fontSizes: TextVariantMap = {
  h1: remify(30),
  h2: remify(18),
  h3: remify(16),
  preHeading: remify(13),
  p: remify(12),
};

const lineHeights: TextVariantMap = {
  h1: getLineHeight(30, 35),
  h2: getLineHeight(18, 20),
  h3: getLineHeight(16, 18),
  preHeading: getLineHeight(14, 16),
  p: getLineHeight(12, 14),
};

const fontWeights = {
  regular: 500,
  medium: 600,
  bold: 700,
  heavy: 900,
};

interface TextStyleProps {
  variant: TextVariantKey;
  fontWeight: keyof typeof fontWeights;
}

const textStyle = (props: TextStyleProps) => ({
  lineHeight: lineHeights[props.variant],
  fontSize: fontSizes[props.variant],
  fontWeight: props.fontWeight,
});

const colors = {
  // Abstracted color definitions.

  body1: '#3C3562',
  body2: '#2C264E',
  body3: '#150E3D',
  bodyContrast: '#FFFFFF',

  page: '#FFFFFF',
  pageContrast1: '#A5A3B7',
  pageContrast2: '#3C3562',
  pageContrast3: '#150E3D',

  primary1: '#FFE358',
  primary2: '#F9CC2F',
  primary3: '#FFC01E',
  primaryContrast: '#2C264E',

  secondary1: '#A26BFC',
  secondary2: '#682EC6',
  secondary3: '#4220A3',
  secondaryContrast: '#FFFFFF',

  // Direct color definitions.

  blue1: '#56CCF2',
  blue2: '#2D9CDB',
  blue3: '#2F59ED',

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
};

export const theme = {
  borders: [0, '0.0625rem', '0.125rem'],
  colors,
  fonts: {
    base: 'inter, system-ui, sans-serif',
  },
  fontSizes,
  fontWeights,
  gradients: {
    primary: `linear-gradient(-270deg, ${colors.primary1} 0%, ${colors.primary2} 50%, ${colors.primary3} 100%)`,
    secondary: `linear-gradient(-270deg, ${colors.secondary1} 0%, ${colors.secondary2} 50%, ${colors.secondary3} 100%)`,
  },
  lineHeights,
  shadows: {},
  text: {
    h1: textStyle({ variant: 'h1', fontWeight: 'heavy' }),
    h2: textStyle({ variant: 'h2', fontWeight: 'heavy' }),
    h3: textStyle({ variant: 'h2', fontWeight: 'bold' }),
    preHeading: textStyle({ variant: 'preHeading', fontWeight: 'medium' }),
    p: textStyle({ variant: 'p', fontWeight: 'regular' }),
  },
  space: [0, '.25rem', '.5rem', '.75rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem'],
};

export type Theme = typeof theme;
