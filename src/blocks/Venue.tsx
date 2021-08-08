import React from 'react';

import { VenueSection, VenueSectionProps } from '~/components/compositions/VenueSection';
import { Mdx } from '~/components/primitives/Mdx';

interface VenueProps {
  venue: Required<GatsbyTypes.VenueFragmentFragment>;
}

/** Venue section with map, accepts and converts the venue fragment type. */
export const Venue: React.FC<VenueProps> = ({ venue, ...props }) => {
  if (!venue.name || !venue.address || !venue.mapsLink || !venue.location) {
    console.error('[Venue] Some properties were missing', venue);
    throw new Error('[Venue] Invalid venue provided');
  }

  const parsedVenue: VenueSectionProps['venue'] = {
    preHeading: 'Venue',
    heading: venue.name,
    postHeading: venue.address,
    body: <Mdx>{venue.body?.childMdx?.body}</Mdx>,
    cta: venue.mapsLink,
  };

  return (
    <VenueSection
      id="event-venue"
      venue={parsedVenue}
      mapOptions={{
        center: venue.location,
        pitch: 35,
        bearing: -10,
        minZoom: 11,
        maxZoom: 16.25,
        zoom: 15.75,
      }}
      markerOptions={{
        center: venue.location,
      }}
      {...props}
    />
  );
};
