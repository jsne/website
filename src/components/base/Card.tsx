import { StitchesProps } from '@stitches/react';
import React from 'react';

import { styled } from '~/styles/stitches.config';
import { CssPropHack } from '~/styles/types';

import { Text, TextProps } from './Text';

export const CardRoot = styled('section', {
  backgroundColor: '$page',
  color: '$pageContrast2',
  borderRadius: '$2',
  overflow: 'hidden',
  withBoxShadow: '$shadow1',

  variants: {
    cardLayout: {
      horizontal: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
  },
});

export type CardRootProps = StitchesProps<typeof CardRoot>;

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
    css={{ color: '$pageContrast3', wordBreak: 'break-word', ...(css as CssPropHack) }}
    textSize="h2"
    {...props}
  />
);

export const CardParagraph: React.FC<CardTextProps> = ({ css, ...props }) => (
  <Text
    css={{ color: '$pageContrast2', ...(css as CssPropHack) }}
    textSize="p"
    {...props}
  />
);

export const CardCtas = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'flex-start',
  gap: '$5',
  marginTop: '$1',

  variants: {
    cardLayout: {
      horizontal: {
        gap: '$7',
      },
    },
  },
});
