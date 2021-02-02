import { StitchesProps } from '@stitches/react';
import React from 'react';

import { styled } from '~/styles/stitches.config';
import { CssPropHack } from '~/styles/types';

import { Text, TextProps } from './Text';

export const CardRoot = styled('article', {
  position: 'relative',
  backgroundColor: '$page',
  color: '$pageContrast2',
  borderRadius: '$2',
  overflow: 'hidden',
  withBoxShadow: '$shadow1',

  variants: {
    cardLayout: {
      horizontal: {
        display: 'grid',
        gridTemplateColumns: '32% auto',
      },
    },
  },
});

export type CardRootProps = StitchesProps<typeof CardRoot>;

/** Overlaying component to make entire card act as single link. */
export const CardLinkOverlay = styled('a', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  textIndex: '2000%',
  opacity: 0,
});

export const CardMedia = styled('div', {
  position: 'relative',
  background: '$pageContrast1',
  paddingTop: '56.25%',

  variants: {
    cardLayout: {
      horizontal: {
        paddingTop: 0,
      },
    },
  },
});

export const CardImg = styled('img', {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  variants: {
    cardLayout: {
      horizontal: {
        position: 'static',
      },
    },
  },
});

export const CardBody = styled('div', {
  display: 'grid',
  alignContent: 'center',
  justifyItems: 'start',
  gap: '$4',
  padding: '$5',

  variants: {
    cardLayout: {
      horizontal: {
        gap: '$5',
        padding: '$7',
      },
    },
  },
});

export type CardTextProps = Omit<TextProps, 'textSize'>;

export const CardPreheading: React.FC<CardTextProps> = ({ css, ...props }) => (
  <Text
    as="h1"
    css={{
      position: 'relative',
      letterSpacing: '$spaced',
      color: '$pageContrast1',
      textTransform: 'uppercase',
      ...(css as CssPropHack),
    }}
    textSize="preHeading"
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
      ...(css as CssPropHack),
    }}
    textSize="h2"
    {...props}
  />
);

export const CardParagraph: React.FC<CardTextProps> = ({ css, ...props }) => (
  <Text
    css={{ position: 'relative', color: '$pageContrast2', ...(css as CssPropHack) }}
    textSize="p"
    {...props}
  />
);

export const CardCtas = styled('div', {
  position: 'relative',
  display: 'grid',
  alignContent: 'start',
  justifyContent: 'start',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(12rem, 100%), auto))',
  gap: '$5',
  width: '100%',

  variants: {
    cardLayout: {
      horizontal: {
        gap: '$7',
      },
    },
  },
});
