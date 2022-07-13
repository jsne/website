import { graphql } from 'gatsby';

/** Base fields for Speakers. */
export const SpeakerListingFragment = graphql`
  fragment SpeakerListing on ContentfulSpeaker {
    avatar {
      file {
        url
      }
      title
    }
    id
    name
    handle
    event {
      id
      heading
    }
  }
`;
