import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { Box, BoxProps } from '~/components/atoms/Box';
import { MailingListCard } from '~/components/compositions/MailingListCard';
import { Mdx } from '~/components/primitives/Mdx';

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

export const MailingList: React.FC<BoxProps> = (props) => {
  const { contentfulUpsell } =
    useStaticQuery<GatsbyTypes.mailingListQuery>(mailingListQuery);

  if (!contentfulUpsell) {
    console.error('[MailingList] Unable to query data', contentfulUpsell);
    throw new Error('[MailingList] Unable to query data');
  }

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log('!!!', ev);
  };

  return (
    <Box {...props}>
      <MailingListCard
        preHeading={contentfulUpsell.preHeading}
        heading={contentfulUpsell.heading}
        body={<Mdx>{contentfulUpsell.body?.childMdx?.body}</Mdx>}
        formProps={{ onSubmit }}
      />
    </Box>
  );
};
