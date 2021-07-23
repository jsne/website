import { graphql } from 'gatsby';

export const UpsellFragment = graphql`
  fragment UpsellFragment on ContentfulUpsell {
    uid
    preHeading
    heading
    media {
      title
      description
      fluid(maxWidth: 744, maxHeight: 726, resizingBehavior: FILL, toFormat: WEBP) {
        srcSet
      }
    }
    body {
      childMdx {
        body
      }
    }
    ctaPrimaryItem {
      slug
    }
    ctaPrimaryLabel
    ctaSecondaryItem {
      slug
    }
    ctaSecondaryLabel
  }
`;
