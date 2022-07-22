import { graphql, useStaticQuery } from 'gatsby';
import type { FC } from 'react';

import { Header } from '~/components/compositions/Header';
import type { HeaderNavigationProps } from '~/components/compositions/HeaderNavigation';
import { styled } from '~/styles/stitches.config';
import { createLogger } from '~/utilities/logger';

export const HeaderNavigationQuery = graphql`
  query HeaderNavigation {
    contentfulNavigation(uid: { eq: "header" }) {
      items {
        navigationLabel
        slug
      }
    }
  }
`;

const logger = createLogger({ prefix: 'Banner' });

const BannerUnstyled: FC = (props) => {
  const { contentfulNavigation } =
    useStaticQuery<GatsbyTypes.HeaderNavigationQuery>(HeaderNavigationQuery);

  if (!contentfulNavigation?.items) {
    logger.error('unable to get navigation', contentfulNavigation);

    return null;
  }

  return (
    <Header
      {...props}
      items={contentfulNavigation?.items as HeaderNavigationProps['items']}
    />
  );
};

export const Banner = styled(BannerUnstyled, {});
