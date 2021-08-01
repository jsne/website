import { graphql } from 'gatsby';

/** Fields for lists of events. */
export const EventListingFragment = graphql`
  fragment EventListingFragment on ContentfulEvent {
    title
    description {
      childMdx {
        body
      }
    }
    eventDate
    focalImage {
      file {
        fileName
      }
      title
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
