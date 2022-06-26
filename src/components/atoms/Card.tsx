import type { ComponentProps } from 'react';

import { styled } from '~/styles/stitches.config';

import { Box } from './Box';
import { BUTTON_MAX_WIDTH } from './Button';
import { Text } from './Text';

export const CardRoot = styled(Box, {
  position: 'relative',
  backgroundColor: '$page1',
  color: '$pageContrast2',
  borderRadius: '$2',
  overflow: 'hidden',
  withBoxShadow: { variant: 'long', color: '$shadow2' },

  variants: {
    cardLayout: {
      vertical: {},
      horizontal: {
        display: 'flex',
      },
    },
  },
});

export type CardRootProps = ComponentProps<typeof CardRoot>;

/** Overlaying component to make entire card act as single link. */
export const CardLinkOverlay = styled('a', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  textIndent: '2000%',
  opacity: 0,
});

export const CardMedia = styled('div', {
  position: 'relative',
  background: '$pageContrast1',

  variants: {
    cardLayout: {
      vertical: { paddingTop: '56.25%' },
      horizontal: { width: '32%', paddingTop: 0 },
    },
  },
});

export const CardImg = styled('img', {
  display: 'block',
  width: '100%',
  objectFit: 'cover',

  variants: {
    cardLayout: {
      vertical: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
      },
      horizontal: {
        position: 'static',
      },
    },
  },
});

export const CardBody = styled('div', {
  display: 'grid',
  justifyItems: 'start',
  alignContent: 'start',
  textAlign: 'left',

  variants: {
    cardLayout: {
      vertical: { gap: '$4', padding: '$5' },
      horizontal: {
        width: '100%',
        gap: '$4',
        padding: '$8',
      },
    },
  },
});

export const CardPreHeading = styled(Text, {
  position: 'relative',
  color: '$pageContrast1',
});

CardPreHeading.defaultProps = { as: 'h1', textPreset: 'preHeading' };

export const CardHeading = styled(Text, {
  position: 'relative',
  color: '$pageContrast3',
  wordBreak: 'break-word',
});

CardHeading.defaultProps = { as: 'h2', textPreset: 'h2' };

export const CardDescription = styled(Text, {
  position: 'relative',
  display: 'grid',
  gap: '$3',
  width: '100%',
  marginBottom: '$2',
  color: '$pageContrast2',
});

CardDescription.defaultProps = { as: 'div', textPreset: 'p' };

export const CardCtas = styled('div', {
  position: 'relative',
  display: 'grid',
  alignContent: 'start',
  justifyContent: 'start',
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${BUTTON_MAX_WIDTH}, 100%), auto))`,
  width: '100%',

  variants: {
    cardLayout: {
      vertical: { gap: '$5' },
      horizontal: { gap: '$7' },
    },
  },
});
