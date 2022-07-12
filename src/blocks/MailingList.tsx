/* eslint no-console: 0 */
import { graphql, useStaticQuery } from 'gatsby';
import { FC, useRef, useState } from 'react';

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
  const [status, setStatus] = useState<string | undefined>();

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
          action: process.env.GATSBY_MAILCHIMP_SUBSCRIBE_ENDPOINT,
          onSubmit: async (ev) => {
            ev.preventDefault();

            if (formRef.current?.checkValidity()) {
              const payload = Object.fromEntries(
                new FormData(formRef.current as HTMLFormElement).entries(),
              );

              console.debug('[MailingList][onSubmit] submitting form', payload);
              setStatus('Please wait');

              try {
                const response = await fetch(formRef.current.action, {
                  method: 'POST',
                  mode: 'cors',
                  cache: 'no-cache',
                  body: JSON.stringify(payload),
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                  },
                });

                const json = (await response.json()) as { message: string };
                console.info('[MailingList][onSubmit]', { response, json });

                setStatus(json.message);

                if (response.ok) {
                  formRef.current.reset();
                }
              } catch (err) {
                console.error('[MailingList][onSubmit] failed to submit form', err);
                setStatus("We weren't able to add your subscription, please try again.");
              }
            } else {
              console.info('[MailingList][onSubmit] form is invalid, cannot submit');
              setStatus(undefined);
            }
          },
        }}
        id={MAILING_LIST_ELEMENT_ID}
        preHeading={contentfulUpsell.preHeading}
        heading={contentfulUpsell.heading}
        body={<Mdx>{contentfulUpsell.body?.childMdx?.body}</Mdx>}
        status={status}
      />
    </Box>
  );
};

export const MailingList = styled(MailingListRoot, {});
