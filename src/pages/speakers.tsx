import { graphql } from 'gatsby';
import type { FC } from 'react';

import cardPlaceholderSrc from '~/assets/images/card-placeholder.svg';
import { MailingList } from '~/blocks/MailingList';
import type { UpsellsProps } from '~/blocks/Upsells';
import { Upsells } from '~/blocks/Upsells';
import { Wrapper } from '~/components/atoms/Wrapper';
import { Header } from '~/components/compositions/Header';
import {
  HERO_BOTTOM_HEIGHT,
  HeroBody,
  HeroBottom,
  HeroMain,
  HeroRoot,
  HeroTitle,
} from '~/components/compositions/Hero';
import { SpeakerCard } from '~/components/compositions/SpeakerCard';
import { Layout } from '~/components/primitives/Layout';
import { Mdx } from '~/components/primitives/Mdx';

interface PageProps {
  data: GatsbyTypes.SpeakersPageQuery;
}

const SpeakersPage: FC<PageProps> = ({ data }) => {
  const page = data.contentfulPage!;
  const heroBody = page?.titleBody?.childrenMdx?.[0]?.body;

  return (
    <Layout head={{ title: page.title, description: page.description }}>
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
          position: 'relative',
          display: 'grid',
          gridAutoFlow: 'row',
          justifyItems: 'center',
          gap: '$6',
          width: '100%',
          marginTop: 'calc((var(--offset) * 1.2) * -1)',
          paddingBottom: '$16',

          '@bpsm': {
            gridTemplateColumns: '1fr 1fr',
          },
        }}
      >
        {data.allContentfulSpeaker.nodes.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            preHeading="Guest Speaker"
            heading={speaker.name}
            eventCount={speaker.event?.length || 0}
            twitterUrl={`https://twitter.com/${speaker.handle}`}
            media={{
              alt: speaker.avatar?.title || (speaker.name as string),
              src: speaker.avatar?.file?.url || cardPlaceholderSrc,
            }}
          />
        ))}
      </Wrapper>

      {page.upsells && <Upsells upsells={page.upsells as UpsellsProps['upsells']} />}

      <Wrapper wrapperPadding="x4" wrapperWidth="medium">
        <MailingList css={{ paddingTop: '$16', paddingBottom: '$16' }} />
      </Wrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  query SpeakersPage {
    contentfulPage(slug: { eq: "/speakers" }) {
      ...Page
    }

    allContentfulSpeaker(
      filter: {
        name: { nin: [null, "JSNE"] }
        event: { elemMatch: { heading: { ne: null } } }
      }
    ) {
      nodes {
        ...SpeakerListing
      }
    }
  }
`;

export default SpeakersPage;
