import {
  AnchorHTMLAttributes,
  ElementType,
  FC,
  ImgHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import { PolymorphicComponentProps } from 'react-polymorphic-box';

import { ReactComponent as Calendar } from '~/assets/images/icon-calendar.svg';
import { ReactComponent as MapMarker } from '~/assets/images/icon-map-marker.svg';
import { ReactComponent as User } from '~/assets/images/icon-user.svg';
import { toPrettyDate } from '~/utilities';

import { Box } from '../atoms/Box';
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
import { LinkAuto } from '../atoms/Link';
import { TextIcon } from './TextIcon';

type EventCardInfoProps = Pick<
  GatsbyTypes.EventListingFragment,
  'speaker' | 'eventDate' | 'venue'
>;

const EventCardInfo: FC<EventCardInfoProps> = ({ speaker, eventDate, venue }) => (
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
          <LinkAuto linkAppearance="secondary" href={venue.mapsLink as string}>
            {venue.name}
          </LinkAuto>
        ) : (
          'Unknown'
        )}
      </TextIcon>
    </li>
    <li>
      <TextIcon iconAppearance="page" icon={User}>
        {speaker ? speaker.name : 'Unknown'}
      </TextIcon>
    </li>
  </Box>
);

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
  media: ImgHTMLAttributes<HTMLImageElement> & { backgroundColor?: string };
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
      speaker,
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
        <EventCardInfo eventDate={eventDate} speaker={speaker} venue={venue} />
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
