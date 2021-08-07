import React from 'react';

import { StitchesVariants, styled } from '~/styles/stitches.config';

import { Box, BoxProps } from './Box';
import { BUTTON_MAX_WIDTH } from './Button';
import { Text, TextProps } from './Text';

export const CardRoot = styled(Box, {
  position: 'relative',
  backgroundColor: '$page',
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

export type CardRootProps = BoxProps<StitchesVariants<typeof CardRoot>>;

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

export type CardTextProps = Omit<TextProps, 'textStyle'>;

export const CardPreheading: React.FC<CardTextProps> = ({ css, ...props }) => (
  <Text
    as="h1"
    css={{
      position: 'relative',
      color: '$pageContrast1',
      textTransform: 'uppercase',
      ...(css as any),
    }}
    textStyle="preHeading"
    {...props}
  />
);

export const CardHeading: React.FC<CardTextProps> = ({ css, ...props }) => (
  <Text
    as="h2"
    css={{
      position: 'relative',
      color: '$pageContrast3',
      wordBreak: 'break-word',
      ...(css as any),
    }}
    textStyle="h2"
    {...props}
  />
);

export const CardParagraph: React.FC<CardTextProps> = ({ css, ...props }) => (
  <Text
    css={{
      position: 'relative',
      marginBottom: '$2',
      color: '$pageContrast2',
      ...(css as any),
    }}
    textStyle="p"
    {...props}
  />
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
