import { graphql } from 'gatsby';

/** Fields for lists of events. */
export const EventListingFragment = graphql`
  fragment EventListing on ContentfulEvent {
    description {
      childMdx {
        body
      }
    }
    heading
    eventDate
    focalImage {
      title
      description
      gatsbyImage(width: 512, height: 512, fit: FILL, formats: [WEBP])
      resize(width: 512, height: 512, fit: FILL, format: WEBP) {
        src
      }
    }
    id
    slug
    speaker {
      ...SpeakerFragment
    }
    venue {
      ...VenueFragment
    }
  }
`;
