import { graphql } from 'gatsby';
import type { FC } from 'react';

import cardPlaceholderSrc from '~/assets/images/card-placeholder.svg';
import { Banner } from '~/blocks/Banner';
import { MAILING_LIST_ELEMENT_ID, MailingList } from '~/blocks/MailingList';
import type { UpsellsProps } from '~/blocks/Upsells';
import { Upsells } from '~/blocks/Upsells';
import { Wrapper } from '~/components/atoms/Wrapper';
import type { EventCardProps } from '~/components/compositions/EventCard';
import { EventCard } from '~/components/compositions/EventCard';
import { FOOTER_TOP_OFFSET, Footer } from '~/components/compositions/Footer';
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
import { dateIsInPast } from '~/utilities/date';

const mapFragmentToProps = (
  fragment: GatsbyTypes.EventListingFragment,
): EventCardProps => ({
  heading: fragment.heading,
  description: <Mdx>{fragment.description?.childMdx?.body}</Mdx>,
  eventDate: fragment.eventDate,
  preHeading:
    fragment.uid === 'placeholder' ? (
      'Event Update'
    ) : dateIsInPast(fragment.eventDate) ? (
      'Previous Event'
    ) : (
      <>
        Upcoming Event <span role="presentation">🚀</span>
      </>
    ),
  media: {
    mediaAppearance: fragment.focalImage?.resize?.src ? 'gradient' : undefined,
    src: fragment.focalImage?.resize?.src || cardPlaceholderSrc,
    alt: fragment.focalImage?.description || 'Placeholder with JSNE logo',
  },
  venue: fragment.venue,
  speakers: fragment.speakers,
});

interface PageProps {
  data: GatsbyTypes.EventsPageQuery;
}

const IndexPage: FC<PageProps> = ({ data }) => {
  const page = data.contentfulPage!;
  const heroBody = page?.titleBody?.childrenMdx?.[0]?.body;
  const nextEvent = data.events.edges[0].node;
  const { placeholderEvent } = data;
  const nextEventHasExpired = dateIsInPast(nextEvent.eventDate);

  /** Next event or placeholder event if next event is in the past. */
  const primaryEvent = mapFragmentToProps(
    (nextEventHasExpired
      ? placeholderEvent
      : nextEvent) as GatsbyTypes.EventListingFragment,
  );

  const previousEvents = nextEventHasExpired
    ? data.events.edges
    : data.events.edges.slice(1, data.events.edges.length);

  primaryEvent.ctas = nextEventHasExpired
    ? [
        {
          children: nextEventHasExpired ? 'Join Our Mailing List' : 'Get Tickets',
          href: nextEventHasExpired
            ? `#${MAILING_LIST_ELEMENT_ID}`
            : nextEvent.slug ?? undefined,
        },
      ]
    : undefined;

  return (
    <Layout head={{ title: page.title, description: page.description }}>
      <HeroRoot>
        <Banner />
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
          paddingBottom: '$16',
        }}
      >
        <EventCard {...primaryEvent} />

        {previousEvents.map(({ node }) => (
          <EventCard key={node.id} {...mapFragmentToProps(node)} />
        ))}
      </Wrapper>

      {page.upsells && <Upsells upsells={page.upsells as UpsellsProps['upsells']} />}

      <Wrapper
        wrapperPadding="x4"
        wrapperWidth="medium"
        css={{ marginBottom: FOOTER_TOP_OFFSET }}
      >
        <MailingList css={{ paddingTop: '$16', paddingBottom: '$16' }} />
      </Wrapper>

      <Footer />
    </Layout>
  );
};

export const pageQuery = graphql`
  query EventsPage {
    contentfulPage(slug: { eq: "/events" }) {
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
