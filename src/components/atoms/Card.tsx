import type { ComponentProps } from 'react';

import { styled } from '~/styles/stitches.config';

import { AutoLink } from '../primitives/AutoLink';
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
export const CardLinkOverlay = styled(AutoLink, {
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

  variants: {
    cardLayout: {
      vertical: {
        aspectRatio: '16/9',
      },
      horizontal: {
        maxWidth: '32%',
      },
    },
    mediaAppearance: {
      gradient: {
        filter: 'saturate(0.65)',
        backgroundImage: `linear-gradient(
          80deg,
          hsl(43deg 45% 67%) 0%,
          hsl(32deg 55% 67%) 15%,
          hsl(23deg 63% 67%) 25%,
          hsl(13deg 67% 69%) 32%,
          hsl(1deg 68% 70%) 39%,
          hsl(348deg 66% 67%) 47%,
          hsl(334deg 59% 64%) 56%,
          hsl(316deg 46% 59%) 68%,
          hsl(288deg 40% 57%) 82%,
          hsl(256deg 49% 61%) 100%
        )`,
      },
    },
  },
});

export const CardImg = styled('img', {
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  objectFit: 'cover',

  variants: {
    mediaAppearance: {
      gradient: {
        mixBlendMode: 'hard-light',
        height: '100%',
      },
    },
  },
});

export type CardImgProps = ComponentProps<typeof CardImg>;

export const CardBody = styled('div', {
  display: 'grid',
  justifyItems: 'start',
  alignContent: 'start',
  textAlign: 'left',

  variants: {
    cardLayout: {
      vertical: {
        gap: '$4',
        padding: '$5',
      },
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
