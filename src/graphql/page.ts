import { graphql } from 'gatsby';

export const PageFragment = graphql`
  fragment Page on ContentfulPage {
    body {
      childrenMdx {
        body
      }
    }
    id
    navigationLabel
    slug
    title
    description
    titleBody {
      childrenMdx {
        body
      }
    }
    upsells {
      ...Upsell
    }
  }
`;
