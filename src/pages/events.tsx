import { graphql } from 'gatsby';
import { FC } from 'react';

import cardPlaceholderSrc from '~/assets/images/card-placeholder.svg';
import { MAILING_LIST_ELEMENT_ID, MailingList } from '~/blocks/MailingList';
import { Upsells, UpsellsProps } from '~/blocks/Upsells';
import { Wrapper } from '~/components/atoms/Wrapper';
import { EventCard, EventCardProps } from '~/components/compositions/EventCard';
import { Header } from '~/components/compositions/Header';
import {
  HERO_BOTTOM_HEIGHT,
  HeroBody,
  HeroBottom,
  HeroMain,
  HeroRoot,
  HeroTitle,
} from '~/components/compositions/Hero';
import { Layout } from '~/components/primitives/Layout';
import { Mdx } from '~/components/primitives/Mdx';
import { ScrollAnchor } from '~/components/primitives/ScrollAnchor';
import { dateIsInPast } from '~/utilities';

const mapFragmentToProps = (
  fragment: GatsbyTypes.EventListingFragment,
): EventCardProps => ({
  heading: fragment.heading,
  description: <Mdx>{fragment.description?.childMdx?.body}</Mdx>,
  preHeading: dateIsInPast(fragment.eventDate as string) ? (
    'Previous Event'
  ) : (
    <>
      Upcoming Event <span role="presentation">🚀</span>
    </>
  ),
  media: {
    backgroundColor: fragment.focalImage?.gatsbyImage?.backgroundColor,
    src: fragment.focalImage?.resize?.src || cardPlaceholderSrc,
    alt: fragment.focalImage?.description || 'Placeholder with JSNE logo',
  },
});

interface PageProps {
  data: GatsbyTypes.EventPageQuery;
}

const IndexPage: FC<PageProps> = ({ data }) => {
  const page = data.contentfulPage as GatsbyTypes.ContentfulPage;
  const heroBody = page?.titleBody?.childrenMdx?.[0]?.body;
  const nextEvent = data.events.edges[0].node;
  const { placeholderEvent } = data;

  const nextEventHasExpired = dateIsInPast(nextEvent.eventDate as string);

  const primaryEvent = mapFragmentToProps(
    (nextEventHasExpired
      ? placeholderEvent
      : nextEvent) as GatsbyTypes.EventListingFragment,
  );

  const previousEvents = nextEventHasExpired
    ? data.events.edges.slice(1, data.events.edges.length)
    : data.events.edges;

  primaryEvent.ctas = nextEventHasExpired
    ? [
        {
          as: nextEventHasExpired ? ScrollAnchor : 'a',
          children: nextEventHasExpired ? 'Join Our Mailing List' : 'Get Tickets',
          href: nextEventHasExpired
            ? `#${MAILING_LIST_ELEMENT_ID}`
            : nextEvent.slug ?? undefined,
        },
      ]
    : undefined;

  return (
    <Layout head={{ title: page.title as string }}>
      <HeroRoot>
        <Header />
        <HeroMain heroLayout="left" wrapperPadding="x4" wrapperWidth="large">
          <HeroTitle as="h1" textPreset="h2">
            {page.title}
          </HeroTitle>

          {heroBody && (
            <HeroBody>
              <Mdx>{heroBody}</Mdx>
            </HeroBody>
          )}
        </HeroMain>
        <HeroBottom />
      </HeroRoot>

      <Wrapper
        as="section"
        wrapperPadding="x4"
        wrapperWidth="large"
        css={{
          '--offset': HERO_BOTTOM_HEIGHT,
          display: 'grid',
          gridAutoFlow: 'row',
          justifyItems: 'center',
          gap: '$10',
          width: '100%',
          marginTop: 'calc((var(--offset) * 1.2) * -1)',
          paddingBottom: '$section',
        }}
      >
        <EventCard {...primaryEvent} />

        {previousEvents.map(({ node }) => (
          <EventCard key={node.id} {...mapFragmentToProps(node)} />
        ))}
      </Wrapper>

      {page.upsells && <Upsells upsells={page.upsells as UpsellsProps['upsells']} />}

      <Wrapper wrapperPadding="x4" wrapperWidth="medium">
        <MailingList css={{ paddingTop: '$section', paddingBottom: '$section' }} />
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query EventPage {
    contentfulPage(slug: { eq: "events" }) {
      ...Page
    }
    placeholderEvent: contentfulEvent(uid: { eq: "placeholder" }) {
      ...EventListing
    }
    events: allContentfulEvent(
      filter: { uid: { ne: "placeholder" } }
      sort: { fields: [eventDate], order: DESC }
    ) {
      edges {
        node {
          ...EventListing
        }
      }
    }
  }
`;

export default IndexPage;
