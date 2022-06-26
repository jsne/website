import {
  AnchorHTMLAttributes,
  ElementType,
  ImgHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import { PolymorphicComponentProps } from 'react-polymorphic-box';

import { Button } from '../atoms/Button';
import {
  CardBody,
  CardCtas,
  CardDescription,
  CardHeading,
  CardImg,
  CardPreHeading,
  CardRoot,
  CardRootProps,
} from '../atoms/Card';

export interface EventCardProps extends Omit<CardRootProps, 'cardLayout'> {
  ctas?: PolymorphicComponentProps<
    ElementType,
    AnchorHTMLAttributes<HTMLAnchorElement>
  >[];
  /** Body copy. */
  description: ReactNode | string;
  /** Main heading. */
  heading: ReactNode | string;
  /** Main image. */
  media: ImgHTMLAttributes<HTMLImageElement> & { backgroundColor?: string };
  /** Heading shown before main heading. */
  preHeading?: ReactNode | string;
}

/** Card to showcase an event. */
export const EventCard = forwardRef<HTMLElement, EventCardProps>(
  ({ description, heading, media, preHeading, as = 'article', ctas, ...props }, ref) => (
    <CardRoot ref={ref} {...props} as={as} cardLayout="horizontal">
      <CardBody cardLayout="horizontal">
        <CardPreHeading>{preHeading}</CardPreHeading>
        <CardHeading textPreset="h3">{heading}</CardHeading>
        <CardDescription>{description}</CardDescription>

        {ctas && ctas.length > 0 && (
          <CardCtas>
            {ctas.map((cta, index) => (
              <Button
                key={cta.href}
                as="a"
                buttonAppearance={index === 0 ? 'primary' : 'secondary'}
                {...cta}
              />
            ))}
          </CardCtas>
        )}
      </CardBody>

      <CardBody
        cardLayout="horizontal"
        css={{
          display: 'none',
          '@bpsm': {
            display: 'flex',
            alignItems: 'start',
            maxWidth: '20rem',
            overflow: 'hidden',
            borderRadius: '$2',
          },
        }}
      >
        <CardImg {...media} css={{ aspectRatio: '1/1', borderRadius: '$2' }} />
      </CardBody>
    </CardRoot>
  ),
);

EventCard.displayName = 'EventCard';
