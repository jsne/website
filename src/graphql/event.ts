import { graphql } from 'gatsby';

export const event = graphql`
  query EventQuery {
    contentfulEvent {
      title
    }
  }
`;
