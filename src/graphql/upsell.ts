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
      resize(width: 744, height: 726, fit: FILL, format: WEBP) {
        src
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
