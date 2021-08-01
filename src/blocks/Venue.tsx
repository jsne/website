import React from 'react';

import { VenueSection, VenueSectionProps } from '~/components/compositions/VenueSection';
import { Mdx } from '~/components/template/Mdx';

interface VenueProps {
  venue: Required<GatsbyTypes.VenueFragmentFragment>;
}

/** Venue section with map, accepts and converts the venue fragment type. */
export const Venue: React.FC<VenueProps> = ({ venue, ...props }) => {
  if (
    !venue.body?.childMdx?.body ||
    !venue.name ||
    !venue.address ||
    !venue.mapsLink ||
    !venue.location
  ) {
    console.error('[Venue] Some properties were missing', venue);
    throw new Error('[Venue] Invalid venue provided');
  }

  const parsedVenue: VenueSectionProps['venue'] = {
    preHeading: 'Venue',
    heading: venue.name,
    postHeading: venue.address,
    body: <Mdx>{venue.body.childMdx.body}</Mdx>,
    cta: venue.mapsLink,
  };

  return (
    <VenueSection
      id="event-venue"
      venue={parsedVenue}
      mapOptions={{
        center: venue.location,
        pitch: 30,
        bearing: -10,
        zoom: typeof window !== 'undefined' && window.innerWidth > 1280 ? 15.4 : 17,
      }}
      markerOptions={{
        center: venue.location,
      }}
      {...props}
    />
  );
};
