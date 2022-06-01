import React from 'react';

import { styled } from '~/styles/stitches.config';

import { Box } from '../atoms/Box';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

export const VenueCardRoot = styled(Box, {
  display: 'grid',
  gridAutoFlow: 'row',
  justifyItems: 'start',
  gap: '$4',
  width: '100%',
  maxWidth: '27rem',
  padding: '$6',
  borderRadius: '$1',
  withBoxShadow: { variant: 'long' },
  withLinearGradient: { variant: 'body' },
});

interface VenueCardVenue {
  preHeading: string;
  heading: string;
  postHeading: string;
  body: React.ReactElement | string;
  cta: string;
}

export interface VenueCardProps {
  venue: VenueCardVenue;
}

const VenueCardUnstyled: React.FC<VenueCardProps> = ({ venue, ...props }) => (
  <VenueCardRoot {...props} as="section">
    <Text as="h1" css={{ display: 'grid', gap: '$2' }}>
      <Text textPreset="preHeading" css={{ color: '$bodyContrast3' }}>
        {venue.preHeading}
      </Text>

      <Text textPreset="h2">{venue.heading}</Text>
    </Text>

    <Text
      as="address"
      textPreset="p"
      css={{
        fontStyle: 'normal',
        width: '100%',
        borderBottom: '$borderWidths$2 solid $bodyContrast4',
        paddingBottom: '$4',
        color: '$bodyContrast2',
      }}
    >
      {venue.postHeading}
    </Text>

    <Text textPreset="p">{venue.body}</Text>

    <Button
      as="a"
      rel="noopener"
      target="_blank"
      buttonAppearance="primary"
      href={venue.cta}
      css={{ marginTop: '$4' }}
    >
      View On Map
    </Button>
  </VenueCardRoot>
);

export const VenueCard = styled(VenueCardUnstyled, {});
