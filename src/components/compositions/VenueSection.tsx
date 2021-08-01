import React from 'react';

import { ReactComponent as Top } from '~/assets/images/map-section-top.svg';
import { styled } from '~/styles/stitches.config';

import { Box } from '../atoms/Box';
import { Wrapper } from '../atoms/Wrapper';
import { VenueCard, VenueCardProps } from '../compositions/VenueCard';
import { InteractiveMap, InteractiveMapProps } from '../primitives/InteractiveMap';

const VenueSectionRoot = styled('section', {
  position: 'relative',
});

const VenueSectionTop = styled(Top, {
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  color: '$body3',
  zIndex: 1,
  pointerEvents: 'none',
  objectFit: 'cover',
});

const VENUE_SECTION_TOP_OFFSET = '8.511979823455233vw';

export type VenueSectionProps = InteractiveMapProps & Pick<VenueCardProps, 'venue'>;

/** Venue info and interactive map with some waaaAAAaaaAAAvy styles. */
export const VenueSection: React.FC<VenueSectionProps> = ({
  id,
  mapOptions,
  markerOptions,
  venue,
  ...props
}) => {
  const offsetMapOptions = {
    ...mapOptions,
    // Bump the center a lil' bit to make space for the card.
    center: { lat: mapOptions.center.lat, lon: mapOptions.center.lon! + 0.005 },
  };

  return (
    <VenueSectionRoot>
      <VenueSectionTop aria-hidden />

      <Wrapper
        wrapperPadding="x4"
        css={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '$section',
          paddingBottom: '$section',
          zIndex: 1,
          pointerEvents: 'none',
          '@bpsm': {
            justifyContent: 'flex-end',
          },
        }}
      >
        <VenueCard
          css={{ marginTop: VENUE_SECTION_TOP_OFFSET, pointerEvents: 'auto' }}
          venue={venue}
        />
      </Wrapper>

      <Box
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          '.mapboxgl-map': {
            width: '100%',
            height: '100%',
          },
        }}
      >
        <InteractiveMap
          id={id}
          mapOptions={offsetMapOptions}
          markerOptions={markerOptions}
          {...props}
        />
      </Box>
    </VenueSectionRoot>
  );
};
