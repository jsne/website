import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Box } from '~/components/atoms/Box';
import { MailingListCard } from '~/components/compositions/MailingListCard';
import { Mdx } from '~/components/primitives/Mdx';
import { styled } from '~/styles/stitches.config';

export const MAILING_LIST_ELEMENT_ID = 'upsell-mailing-list';

export const mailingListQuery = graphql`
  query mailingList {
    contentfulUpsell(uid: { eq: "mailing-list" }) {
      preHeading
      heading
      body {
        childMdx {
          body
        }
      }
    }
  }
`;

const MailingListRoot: React.FC = (props) => {
  const { contentfulUpsell } =
    useStaticQuery<GatsbyTypes.mailingListQuery>(mailingListQuery);

  if (!contentfulUpsell) {
    console.error('[MailingList] Unable to query data', contentfulUpsell);
    throw new Error('[MailingList] Unable to query data');
  }

  return (
    <Box {...props}>
      <MailingListCard
        id={MAILING_LIST_ELEMENT_ID}
        preHeading={contentfulUpsell.preHeading}
        heading={contentfulUpsell.heading}
        body={<Mdx>{contentfulUpsell.body?.childMdx?.body}</Mdx>}
      />
    </Box>
  );
};

export const MailingList = styled(MailingListRoot, {});
