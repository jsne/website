import { graphql } from 'gatsby';
import React from 'react';

import { Box } from '~/components/atoms/Box';
import { Header } from '~/components/compositions/Header';
import {
  HERO_BOTTOM_HEIGHT,
  HeroBottom,
  HeroRoot,
  HeroMain,
  HeroBody,
  HeroTitle,
} from '~/components/compositions/Hero';
import { Layout } from '~/components/template/Layout';
import { Mdx } from '~/components/template/Mdx';

interface IndexPageProps {
  data: GatsbyTypes.HomeQueryQuery;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const page = data.contentfulPage;
  const heroBody = page?.titleBody?.childrenMdx?.[0]?.body;

  if (!page || !heroBody) {
    console.error('Unable to load page', { page, heroBody });
    throw new Error('Unable to load page.');
  }

  return (
    <Layout head={{ title: page.title }}>
      <HeroRoot>
        <Header />
        <HeroMain heroLayout="center" wrapperPadding="x4">
          <HeroTitle as="h1" textStyle="hero">
            {page.title}
          </HeroTitle>
          <HeroBody>
            <Mdx>{heroBody}</Mdx>
          </HeroBody>
        </HeroMain>
      </HeroRoot>
      <HeroBottom />

      <Box
        as="section"
        css={{
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'center',
          gap: '$4',
          backgroundColor: '$body3',
          color: '$bodyContrast1',
          paddingTop: HERO_BOTTOM_HEIGHT,
        }}
      >
        Sup
      </Box>
      <noscript>I can&apos;t believe you&apos;ve done this.</noscript>
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(slug: { eq: "home" }) {
      ...PageFragment
    }
  }
`;

export default IndexPage;
