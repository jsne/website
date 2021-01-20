import React from 'react';

import { Button } from '~/components/base/Button';
import * as Card from '~/components/base/Card';

export interface MediaProps extends Omit<Card.CardRootProps, 'cardLayout'> {
  /** Paragraph content. */
  body: React.ReactNode | string;
  /** Primary call to action. */
  ctaPrimary: React.AnchorHTMLAttributes<HTMLAnchorElement>;
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

/** Media Object. */
export const Media: React.FC<MediaProps> = ({
  body,
  ctaPrimary,
  ctaSecondary,
  heading,
  layout,
  media,
  preHeading,
  ...props
}) => (
  <Card.CardRoot cardLayout={layout} {...props}>
    <Card.CardMedia cardLayout={layout}>
      <Card.CardImg cardLayout={layout} {...media} />
    </Card.CardMedia>

    <Card.CardBody cardLayout={layout}>
      <Card.CardPreheading>{preHeading}</Card.CardPreheading>
      <Card.CardHeading>{heading}</Card.CardHeading>
      <Card.CardParagraph>{body}</Card.CardParagraph>

      <Card.CardCtas cardLayout={layout}>
        <Button as="a" buttonAppearance="primary" {...ctaPrimary} />
        {ctaSecondary && <Button as="a" buttonAppearance="secondary" {...ctaSecondary} />}
      </Card.CardCtas>
    </Card.CardBody>
  </Card.CardRoot>
);