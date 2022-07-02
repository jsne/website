import { FC } from 'react';

import { Media } from '~/components/compositions/Media';
import { Mdx } from '~/components/primitives/Mdx';

export type UpsellProps = GatsbyTypes.ContentfulUpsell;

/** Media upsell with alternating direction on even/odd. */
export const Upsell: FC<UpsellProps> = ({
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
      description={<Mdx>{body?.childMdx?.body}</Mdx>}
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
      media={{
        mediaAppearance: 'gradient',
        src: targetMedia?.resize?.src,
        alt: targetMedia?.description,
      }}
      {...props}
    />
  );
};
