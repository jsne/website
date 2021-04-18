import { graphql } from 'gatsby';

/** Base fields for Speakers. */
export const SpeakerFragment = graphql`
  fragment SpeakerFragment on ContentfulSpeaker {
    avatar {
      file {
        url
        contentType
      }
      title
    }
    id
    name
  }
`;
