import React from 'react';

import { Button } from '~/components/atoms/Button';
import {
  CardBody,
  CardCtas,
  CardDescription,
  CardHeading,
  CardImg,
  CardLinkOverlay,
  CardMedia,
  CardPreHeading,
  CardRoot,
  CardRootProps,
} from '~/components/atoms/Card';
import { styled } from '~/styles/stitches.config';

export interface MediaProps extends Omit<CardRootProps, 'cardLayout'> {
  /** Primary call to action. */
  ctaPrimary?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  /** Secondary call to action. */
  ctaSecondary?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  /** Paragraph content. */
  description: React.ReactNode | string;
  /** Main heading. */
  heading: React.ReactNode | string;
  /** Layout variant. */
  layout?: CardRootProps['cardLayout'];
  /** Main image. */
  media: React.ImgHTMLAttributes<HTMLImageElement> & { backgroundColor?: string };
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
    <CardMedia cardLayout={layout} style={{ backgroundColor: media?.backgroundColor }}>
      <CardImg cardLayout={layout} {...media} />
      {ctaPrimary && (
        <CardLinkOverlay aria-hidden href={ctaPrimary.href}>
          {heading}
        </CardLinkOverlay>
      )}
    </CardMedia>

    <CardBody cardLayout={layout} css={{ alignContent: 'center', maxWidth: '38rem' }}>
      <CardPreHeading>{preHeading}</CardPreHeading>
      <CardHeading>{heading}</CardHeading>
      <CardDescription>{description}</CardDescription>

      <CardCtas cardLayout={layout}>
        {ctaPrimary?.href && <Button as="a" buttonAppearance="primary" {...ctaPrimary} />}
        {ctaSecondary?.href && (
          <Button as="a" buttonAppearance="secondary" {...ctaSecondary} />
        )}
      </CardCtas>
    </CardBody>
  </CardRoot>
);

export const Media = styled(MediaUnstyled, {});
