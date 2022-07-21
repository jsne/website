import { graphql } from 'gatsby';
import type { FC } from 'react';

import { MAILING_LIST_ELEMENT_ID, MailingList } from '~/blocks/MailingList';
import type { UpsellsProps } from '~/blocks/Upsells';
import { Upsells } from '~/blocks/Upsells';
import { Venue } from '~/blocks/Venue';
import { Box } from '~/components/atoms/Box';
import { Button } from '~/components/atoms/Button';
import { Text } from '~/components/atoms/Text';
import { Wrapper } from '~/components/atoms/Wrapper';
import { Header } from '~/components/compositions/Header';
import {
  HeroBody,
  HeroBottom,
  HeroMain,
  HeroRoot,
  HeroTitle,
} from '~/components/compositions/Hero';
import { AutoLink } from '~/components/primitives/AutoLink';
import { Layout } from '~/components/primitives/Layout';
import { Mdx } from '~/components/primitives/Mdx';
import { dateIsInPast } from '~/utilities/date';

interface IndexPageProps {
  data: GatsbyTypes.HomeQuery;
}

const IndexPage: FC<IndexPageProps> = ({ data }) => {
  const page = data.contentfulPage!;
  const heroBody = page?.titleBody?.childrenMdx?.[0]?.body;
  const nextEvent = data.nextEvent.edges[0].node;
  const { placeholderEvent } = data;
  const nextEventHasExpired = dateIsInPast(nextEvent.eventDate);
  const eventPreHeading = nextEventHasExpired ? 'Event Update' : 'Next Event';
  const event = nextEventHasExpired ? placeholderEvent : nextEvent;

  const primaryCta = {
    children: nextEventHasExpired ? 'Join Our Mailing List' : 'Get Tickets',
    href: nextEventHasExpired
      ? `#${MAILING_LIST_ELEMENT_ID}`
      : nextEvent.slug ?? undefined,
  };

  return (
    <Layout head={{ title: page.title, description: page.description }}>
      <HeroRoot>
        <Header />
        <HeroMain heroLayout="center" wrapperPadding="x4">
          <HeroTitle as="h1" textPreset="hero">
            {page.title}
          </HeroTitle>
          <HeroBody>
            <Mdx>{heroBody}</Mdx>
          </HeroBody>
        </HeroMain>
        <HeroBottom />
      </HeroRoot>

      <Box
        css={{
          backgroundColor: '$body3',
          color: '$bodyContrast1',
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
            paddingBottom: '$16',
            textAlign: 'center',
          }}
        >
          <Text
            textPreset="preHeading"
            css={{
              color: '$bodyContrast3',
            }}
          >
            {eventPreHeading}
          </Text>
          <Text textPreset="h1" css={{ marginBottom: '$2' }}>
            {event?.heading}
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
            <Mdx>{event?.description?.childMdx?.body}</Mdx>
          </Box>
          <Box css={{ display: 'grid', gridGap: '$6', gridAutoFlow: 'column' }}>
            <Button as={AutoLink} buttonAppearance="primary" {...primaryCta} />
          </Box>
        </Wrapper>
      </Box>

      {page.upsells && <Upsells upsells={page.upsells as UpsellsProps['upsells']} />}

      <Wrapper wrapperPadding="x4" wrapperWidth="medium">
        <MailingList css={{ paddingTop: '$16', paddingBottom: '$16' }} />
      </Wrapper>

      {event?.venue && <Venue venue={event.venue} />}
    </Layout>
  );
};

export const pageQuery = graphql`
  query Home {
    contentfulPage(slug: { eq: "/home" }) {
      ...Page
    }
    placeholderEvent: contentfulEvent(uid: { eq: "placeholder" }) {
      ...EventListing
    }
    nextEvent: allContentfulEvent(limit: 1, sort: { fields: [eventDate], order: DESC }) {
      edges {
        node {
          ...EventListing
        }
      }
    }
  }
`;

export default IndexPage;
