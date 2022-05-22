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
  top: 0,
  left: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  variants: {
    cardLayout: {
      vertical: { position: 'absolute' },
      horizontal: { position: 'static' },
    },
  },
});

export const CardBody = styled('div', {
  display: 'grid',
  alignContent: 'center',
  justifyItems: 'start',

  variants: {
    cardLayout: {
      vertical: { gap: '$4', padding: '$5' },
      horizontal: {
        width: '100%',
        maxWidth: '38rem',
        gap: '$5',
        padding: '$7',
      },
    },
  },
});

export const CardPreheading = styled(
  Text,
  {
    position: 'relative',
    color: '$pageContrast1',
    textTransform: 'uppercase',
  },
  { as: 'h1', textStyle: 'preHeading' },
);

export const CardHeading = styled(
  Text,
  {
    position: 'relative',
    color: '$pageContrast3',
    wordBreak: 'break-word',
  },
  { as: 'h2', textStyle: 'h2' },
);

export const CardParagraph = styled(
  Text,
  {
    position: 'relative',
    marginBottom: '$2',
    color: '$pageContrast2',
  },
  { textStyle: 'p' },
);

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
