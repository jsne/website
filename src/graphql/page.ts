import { graphql } from 'gatsby';

export const PageFragment = graphql`
  fragment PageFragment on ContentfulPage {
    body {
      childrenMdx {
        body
      }
    }
    id
    navigationLabel
    slug
    title
    titleBody {
      childrenMdx {
        body
      }
    }
    upsells {
      ...UpsellFragment
    }
  }
`;
