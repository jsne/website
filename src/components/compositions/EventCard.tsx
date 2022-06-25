import { forwardRef } from 'react';

import {
  CardBody,
  CardCtas,
  CardHeading,
  CardImg,
  CardLinkOverlay,
  CardMedia,
  CardParagraph,
  CardPreHeading,
  CardRoot,
  CardRootProps,
} from '../atoms/Card';

export interface EventCardProps extends Omit<CardRootProps, 'cardLayout'> {
  /** Paragraph content. */
  body: React.ReactNode | string;
  /** Main heading. */
  heading: React.ReactNode | string;
  /** Main image. */
  media: React.ImgHTMLAttributes<HTMLImageElement> & { backgroundColor?: string };
  /** Heading shown before main heading. */
  preHeading: React.ReactNode | string;
}

/** Card to showcase an event. */
export const EventCard = forwardRef<HTMLElement, EventCardProps>(
  ({ body, heading, media, preHeading, ...props }, ref) => (
    <CardRoot ref={ref} {...props} cardLayout="horizontal">
      <CardBody cardLayout="horizontal" css={{ maxWidth: 'none' }}>
        <CardPreHeading>{preHeading}</CardPreHeading>
        <CardHeading>{heading}</CardHeading>
        <CardParagraph>{body}</CardParagraph>
      </CardBody>

      <CardBody
        cardLayout="horizontal"
        style={{ backgroundColor: media.backgroundColor }}
        css={{
          display: 'none',
          '@bpsm': {
            display: 'flex',
            overflow: 'hidden',
            borderRadius: '$2',
            maxWidth: '20rem',
          },
        }}
      >
        <CardImg
          {...media}
          css={{ aspectRatio: '1/1', objectFit: 'cover', borderRadius: '$2' }}
        />
      </CardBody>
    </CardRoot>
  ),
);

EventCard.displayName = 'EventCard';
