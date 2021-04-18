import { graphql } from 'gatsby';

/** Base fields for all Venues. */
export const VenueFragment = graphql`
  fragment VenueFragment on ContentfulVenue {
    id
    location {
      lat
      lon
    }
    name
    mapsLink
    postcode
    slug
    street
  }
`;
