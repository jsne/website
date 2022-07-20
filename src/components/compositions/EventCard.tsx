import type { AnchorHTMLAttributes, ElementType, FC, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { PolymorphicComponentProps } from 'react-polymorphic-box';

import { ReactComponent as Calendar } from '~/assets/images/icon-calendar.svg';
import { ReactComponent as MapMarker } from '~/assets/images/icon-map-marker.svg';
import { ReactComponent as User } from '~/assets/images/icon-user.svg';
import { toPrettyDate } from '~/utilities/date';

import { Box } from '../atoms/Box';
import { Button } from '../atoms/Button';
import type { CardImgProps, CardRootProps } from '../atoms/Card';
import {
  CardBody,
  CardCtas,
  CardDescription,
  CardHeading,
  CardImg,
  CardMedia,
  CardPreHeading,
  CardRoot,
} from '../atoms/Card';
import { Link } from '../atoms/Link';
import { AutoLink } from '../primitives/AutoLink';
import { TextIcon } from './TextIcon';

type EventCardInfoProps = Pick<
  GatsbyTypes.EventListingFragment,
  'speakers' | 'eventDate' | 'venue'
>;

const EventCardInfo: FC<EventCardInfoProps> = ({ speakers, eventDate, venue }) => {
  const speakerNames = speakers?.map((speaker) => speaker?.name).join(', ');

  return (
    <Box
      as="ul"
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '$4',
        listStyle: 'none',
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
      }}
    >
      <li>
        <TextIcon iconAppearance="page" icon={Calendar}>
          {eventDate ? toPrettyDate(eventDate) : 'Unknown'}
        </TextIcon>
      </li>
      <li>
        <TextIcon iconAppearance="page" icon={MapMarker}>
          {venue ? (
            <Link linkAppearance="secondary" href={venue.mapsLink as string}>
              {venue.name}
            </Link>
          ) : (
            'Unknown'
          )}
        </TextIcon>
      </li>
      <li>
        <TextIcon iconAppearance="page" icon={User}>
          {speakerNames}
        </TextIcon>
      </li>
    </Box>
  );
};

export interface EventCardProps
  extends Omit<CardRootProps, 'cardLayout'>,
    EventCardInfoProps {
  ctas?: PolymorphicComponentProps<
    ElementType,
    AnchorHTMLAttributes<HTMLAnchorElement>
  >[];
  /** Body copy. */
  description: ReactNode | string;
  /** Main heading. */
  heading: ReactNode | string;
  /** Main image. */
  media: CardImgProps;
  /** Heading shown before main heading. */
  preHeading?: ReactNode | string;
}

/** Card to showcase an event. */
export const EventCard = forwardRef<HTMLElement, EventCardProps>(
  (
    {
      description,
      heading,
      media,
      preHeading,
      as = 'article',
      ctas,
      venue,
      speakers,
      eventDate,
      ...props
    },
    ref,
  ) => (
    <CardRoot ref={ref} {...props} as={as} cardLayout="horizontal">
      <CardBody cardLayout="horizontal">
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            marginBottom: '$1',
          }}
        >
          <CardPreHeading>{preHeading}</CardPreHeading>
          <CardHeading textPreset="h3">{heading}</CardHeading>
        </Box>
        <EventCardInfo eventDate={eventDate} speakers={speakers} venue={venue} />
        <CardDescription>{description}</CardDescription>

        {ctas && ctas.length > 0 && (
          <CardCtas>
            {ctas.map((cta, index) => (
              <Button
                key={cta.href}
                as={AutoLink}
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
          },
        }}
      >
        <CardMedia
          mediaAppearance={media?.mediaAppearance}
          css={{ width: '100%', overflow: 'hidden', borderRadius: '$2' }}
        >
          <CardImg {...media} css={{ aspectRatio: '1/1', borderRadius: '$2' }} />
        </CardMedia>
      </CardBody>
    </CardRoot>
  ),
);

EventCard.displayName = 'EventCard';
