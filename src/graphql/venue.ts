import { graphql } from 'gatsby';

/** Base fields for all Venues. */
export const VenueFragment = graphql`
  fragment VenueFragment on ContentfulVenue {
    id
    name
    body {
      childMdx {
        body
      }
    }
    address
    location {
      lat
      lon
    }
    mapsLink
    slug
  }
`;
