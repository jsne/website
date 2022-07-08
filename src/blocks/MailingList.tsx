import { graphql, useStaticQuery } from 'gatsby';
import { FC, useRef } from 'react';

import { Box } from '~/components/atoms/Box';
import { MailingListCard } from '~/components/compositions/MailingListCard';
import { Mdx } from '~/components/primitives/Mdx';
import { styled } from '~/styles/stitches.config';

export const MAILING_LIST_ELEMENT_ID = 'join-mailing-list';

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

const MailingListRoot: FC = (props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const { contentfulUpsell } =
    useStaticQuery<GatsbyTypes.mailingListQuery>(mailingListQuery);

  if (!contentfulUpsell) {
    console.error('[MailingList] Unable to query data', contentfulUpsell);
    throw new Error('[MailingList] Unable to query data');
  }

  return (
    <Box {...props}>
      <MailingListCard
        formProps={{
          ref: formRef,
          action: 'https://jsne.nerdyman.workers.dev',
          onSubmit: (ev) => {
            ev.preventDefault();
            const data = new FormData(formRef.current as HTMLFormElement);
            console.log(Object.fromEntries(data.entries()));
          },
        }}
        id={MAILING_LIST_ELEMENT_ID}
        preHeading={contentfulUpsell.preHeading}
        heading={contentfulUpsell.heading}
        body={<Mdx>{contentfulUpsell.body?.childMdx?.body}</Mdx>}
      />
    </Box>
  );
};

export const MailingList = styled(MailingListRoot, {});
