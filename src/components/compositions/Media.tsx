import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { Button } from '~/components/atoms/Button';
import {
  CardBody,
  CardCtas,
  CardDescription,
  CardHeading,
  CardImg,
  CardImgProps,
  CardLinkOverlay,
  CardMedia,
  CardPreHeading,
  CardRoot,
  CardRootProps,
} from '~/components/atoms/Card';
import { AutoLink } from '~/components/primitives/AutoLink';
import { styled } from '~/styles/stitches.config';

export interface MediaProps extends Omit<CardRootProps, 'cardLayout'> {
  /** Primary call to action. */
  ctaPrimary?: AnchorHTMLAttributes<HTMLAnchorElement>;
  /** Secondary call to action. */
  ctaSecondary?: AnchorHTMLAttributes<HTMLAnchorElement>;
  /** Paragraph content. */
  description: ReactNode | string;
  /** Main heading. */
  heading: ReactNode | string;
  /** Layout variant. */
  layout?: CardRootProps['cardLayout'];
  /** Main image. */
  media: CardImgProps & { backgroundColor?: string };
  /** Heading shown before main heading. */
  preHeading?: React.ReactNode | string;
}

const defaultLayout = { '@initial': 'vertical' } as const;

const MediaUnstyled: React.FC<MediaProps> = ({
  ctaPrimary,
  ctaSecondary,
  description,
  heading,
  layout = defaultLayout,
  media,
  preHeading,
  ...props
}) => (
  <CardRoot cardLayout={layout} {...props}>
    <CardMedia cardLayout={layout} mediaAppearance={media.mediaAppearance}>
      <CardImg {...media} />
      {ctaPrimary && (
        <CardLinkOverlay href={ctaPrimary.href as string}>{heading}</CardLinkOverlay>
      )}
    </CardMedia>

    <CardBody cardLayout={layout} css={{ alignContent: 'center', maxWidth: '38rem' }}>
      <CardPreHeading>{preHeading}</CardPreHeading>
      <CardHeading>{heading}</CardHeading>
      <CardDescription>{description}</CardDescription>

      <CardCtas cardLayout={layout}>
        {ctaPrimary?.href && (
          <Button as={AutoLink} buttonAppearance="primary" {...ctaPrimary} />
        )}
        {ctaSecondary?.href && (
          <Button as={AutoLink} buttonAppearance="secondary" {...ctaSecondary} />
        )}
      </CardCtas>
    </CardBody>
  </CardRoot>
);

export const Media = styled(MediaUnstyled, {});
