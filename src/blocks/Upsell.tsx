import React from 'react';

import { Media, MediaProps } from '~/components/compositions/Media';
import { Mdx } from '~/components/primitives/Mdx';

export type UpsellProps = Partial<Pick<MediaProps, 'css'>> &
  GatsbyTypes.UpsellFragmentFragment;

/** Media upsell with alternating direction on even/odd. */
export const Upsell: React.FC<UpsellProps> = ({
  body,
  media,
  ctaPrimaryItem,
  ctaPrimaryLabel,
  ctaSecondaryItem,
  ctaSecondaryLabel,
  ...props
}) => {
  const targetMedia = media?.[0];

  return (
    <Media
      body={<Mdx>{body?.childMdx?.body}</Mdx>}
      ctaPrimary={{
        children: ctaPrimaryLabel,
        href: ctaPrimaryItem?.slug,
      }}
      ctaSecondary={{
        children: ctaSecondaryLabel,
        href: ctaSecondaryItem?.slug,
      }}
      css={{
        '&:nth-of-type(even)': {
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        },
      }}
      layout={{ '@initial': 'vertical', '@bpsm': 'horizontal' }}
      media={{ ...targetMedia?.fluid, alt: targetMedia?.description }}
      {...props}
    />
  );
};
