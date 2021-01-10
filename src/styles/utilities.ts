export type TextVariantKey = 'h1' | 'h2' | 'h3' | 'preHeading' | 'p';

export type TextVariantMap = { [k in TextVariantKey]: string };

/** Calculate unitless line-height from pixel font-size and line-height. */
export const getLineHeight = (fontSize: number, lineHeight: number): string =>
  (lineHeight / fontSize).toFixed(3);

/** Convert pixel to rem. */
export const remify = (px: number): string => `${px / 16}rem`;
