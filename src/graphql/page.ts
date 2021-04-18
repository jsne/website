import { graphql } from 'gatsby';

export const PageFragment = graphql`
  fragment PageFragment on ContentfulPage {
    body {
      childrenMdx {
        rawBody
      }
    }
    id
    navigationLabel
    navigationLabel
    slug
    title
    titleBody {
      childrenMdx {
        rawBody
      }
    }
  }
`;
