import { graphql } from 'gatsby';

export const UpsellFragment = graphql`
  fragment Upsell on ContentfulUpsell {
    uid
    preHeading
    heading
    media {
      title
      description
      gatsbyImage(width: 744, height: 726, fit: FILL, formats: [WEBP])
      # fluid(maxWidth: 744, maxHeight: 726, resizingBehavior: FILL, toFormat: WEBP) {
      #   srcSet
      # }
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
