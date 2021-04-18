import { graphql } from 'gatsby';

/** Fields for lists of events. */
export const EventListingFragment = graphql`
  fragment EventListingFragment on ContentfulEvent {
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
    title
  }
`;
