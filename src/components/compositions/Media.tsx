import React from 'react';

import { Button } from '~/components/atoms/Button';
import * as Card from '~/components/atoms/Card';
import { styled } from '~/styles/stitches.config';

export interface MediaProps extends Omit<Card.CardRootProps, 'cardLayout'> {
  /** Paragraph content. */
  body: React.ReactNode | string;
  /** Primary call to action. */
  ctaPrimary?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  /** Secondary call to action. */
  ctaSecondary?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  /** Main heading. */
  heading: React.ReactNode | string;
  /** Layout variant. */
  layout?: Card.CardRootProps['cardLayout'];
  /** Main image. */
  media: React.ImgHTMLAttributes<HTMLImageElement>;
  /** Heading shown before main heading. */
  preHeading?: React.ReactNode | string;
}

const defaultLayout = { '@initial': 'vertical' } as const;

const MediaUnstyled: React.FC<MediaProps> = ({
  body,
  ctaPrimary,
  ctaSecondary,
  heading,
  layout = defaultLayout,
  media,
  preHeading,
  ...props
}) => (
  <Card.CardRoot cardLayout={layout} {...props}>
    <Card.CardMedia cardLayout={layout}>
      <Card.CardImg cardLayout={layout} {...media} />
      {ctaPrimary && (
        <Card.CardLinkOverlay aria-hidden href={ctaPrimary.href}>
          {heading}
        </Card.CardLinkOverlay>
      )}
    </Card.CardMedia>

    <Card.CardBody cardLayout={layout}>
      <Card.CardPreHeading>{preHeading}</Card.CardPreHeading>
      <Card.CardHeading>{heading}</Card.CardHeading>
      <Card.CardParagraph>{body}</Card.CardParagraph>

      <Card.CardCtas cardLayout={layout}>
        {ctaPrimary && <Button as="a" buttonAppearance="primary" {...ctaPrimary} />}
        {ctaSecondary && <Button as="a" buttonAppearance="secondary" {...ctaSecondary} />}
      </Card.CardCtas>
    </Card.CardBody>
  </Card.CardRoot>
);

export const Media = styled(MediaUnstyled, {});
