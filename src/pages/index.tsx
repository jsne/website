import { graphql } from 'gatsby';
import React from 'react';

import { MailingList } from '~/blocks/MailingList';
import { Upsells, UpsellsProps } from '~/blocks/Upsells';
import { Venue } from '~/blocks/Venue';
import { Box } from '~/components/atoms/Box';
import { Button } from '~/components/atoms/Button';
import { Text } from '~/components/atoms/Text';
import { Wrapper } from '~/components/atoms/Wrapper';
import { Header } from '~/components/compositions/Header';
import {
  HERO_BOTTOM_HEIGHT,
  HeroBottom,
  HeroRoot,
  HeroMain,
  HeroBody,
  HeroTitle,
} from '~/components/compositions/Hero';
import { Layout } from '~/components/primitives/Layout';
import { Mdx } from '~/components/primitives/Mdx';
import { ScrollAnchor } from '~/components/primitives/ScrollAnchor';

interface IndexPageProps {
  data: GatsbyTypes.HomeQueryQuery;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const page = data.contentfulPage;
  const heroBody = page?.titleBody?.childrenMdx?.[0]?.body;
  const nextEvent = data.nextEvent.edges[0].node;
  const { placeholderEvent } = data;

  if (!page || !heroBody || !placeholderEvent) {
    console.error('Unable to load page', { page, heroBody, placeholderEvent });
    throw new Error('Unable to load page.');
  }

  const nextEventHasExpired =
    nextEvent?.eventDate &&
    new Date(nextEvent.eventDate).getSeconds() < new Date().getSeconds();

  const eventPreHeading = nextEventHasExpired ? 'Event Update' : 'Next Event';
  const event = nextEventHasExpired ? placeholderEvent : nextEvent;
  const mailingListId = 'mailing-list';

  const primaryCta = {
    as: nextEventHasExpired ? ScrollAnchor : undefined,
    children: nextEventHasExpired ? 'Join Our Mailing List' : 'Get Tickets',
    href: nextEventHasExpired ? `#${mailingListId}` : nextEvent.slug,
  };

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
        css={{
          backgroundColor: '$body3',
          color: '$bodyContrast1',
          paddingTop: HERO_BOTTOM_HEIGHT,
        }}
      >
        <Wrapper
          as="section"
          wrapperPadding="x4"
          css={{
            display: 'grid',
            gridAutoFlow: 'row',
            justifyItems: 'center',
            gap: '$2',
            width: '100%',
            maxWidth: '$wrapperWidth1',
            paddingBottom: '$section',
            textAlign: 'center',
          }}
        >
          <Text
            textStyle="preHeading"
            css={{
              color: '$bodyContrast3',
            }}
          >
            {eventPreHeading}
          </Text>
          <Text textStyle="h1" css={{ marginBottom: '$2' }}>
            {event.title}
          </Text>
          <Box
            css={{
              display: 'grid',
              gridGap: '$2',
              marginBottom: '$7',
              color: '$bodyContrast2',
              '& > *': {
                lineHeight: '$spaced',
              },
            }}
          >
            <Mdx>{event.description?.childMdx?.body}</Mdx>
          </Box>
          <Box css={{ display: 'grid', gridGap: '$6', gridAutoFlow: 'column' }}>
            <Button as="a" buttonAppearance="primary" {...primaryCta} />
          </Box>
        </Wrapper>
      </Box>

      {page.upsells && <Upsells upsells={page.upsells as UpsellsProps['upsells']} />}

      <Wrapper wrapperPadding="x4" wrapperWidth="medium">
        <MailingList css={{ paddingTop: '$section', paddingBottom: '$section' }} />
      </Wrapper>

      {event.venue && <Venue venue={event.venue} />}

      <noscript>I can&apos;t believe you&apos;ve done this.</noscript>
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(slug: { eq: "home" }) {
      ...PageFragment
    }
    placeholderEvent: contentfulEvent(uid: { eq: "placeholder" }) {
      ...EventListingFragment
    }
    nextEvent: allContentfulEvent(limit: 1, sort: { fields: [eventDate], order: DESC }) {
      edges {
        node {
          ...EventListingFragment
        }
      }
    }
  }
`;

export default IndexPage;
