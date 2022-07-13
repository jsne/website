import { FC, ReactNode } from 'react';

import { ReactComponent as IconPresentation } from '~/assets/images/icon-presentation.svg';
import { ReactComponent as IconTwitter } from '~/assets/images/icon-twitter.svg';

import { Box } from '../atoms/Box';
import {
  CardBody,
  CardHeading,
  CardImg,
  CardImgProps,
  CardMedia,
  CardPreHeading,
  CardRoot,
  CardRootProps,
} from '../atoms/Card';
import { Link } from '../atoms/Link';
import { TextIcon } from './TextIcon';

export interface SpeakerCardProps extends Omit<CardRootProps, 'cardLayout'> {
  /** Main heading. */
  heading: ReactNode | string;
  /** Main image. */
  media: CardImgProps;
  /** Heading shown before main heading. */
  preHeading?: ReactNode | string;
  /** How many events the speaker has spoken at. */
  eventCount: number;
  twitterUrl: string;
}

/** Card to showcase an event. */
export const SpeakerCard: FC<SpeakerCardProps> = ({
  heading,
  media,
  preHeading,
  as = 'article',
  eventCount,
  twitterUrl,
  ...props
}) => (
  <CardRoot {...props} as={as} cardLayout="horizontal" css={{ width: '100%' }}>
    <CardBody
      cardLayout="horizontal"
      css={{
        display: 'flex',
        flexDirection: 'column-reverse',

        '@bpxxs': {
          flexDirection: 'row',
        },
      }}
    >
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          marginBottom: '$1',
          flexGrow: 1,
          flexShrink: 1,
        }}
      >
        <CardPreHeading>{preHeading}</CardPreHeading>
        <CardHeading textPreset="h3" css={{ marginBottom: '$2' }}>
          {heading}
        </CardHeading>

        <Box css={{ display: 'flex', flexWrap: 'wrap', gap: '$4' }}>
          <TextIcon icon={IconPresentation}>
            {eventCount} talk{eventCount > 1 ? 's' : ''}
          </TextIcon>
          <TextIcon icon={IconTwitter}>
            <Link linkAppearance="secondary" href={twitterUrl}>
              @{twitterUrl}
            </Link>
          </TextIcon>
        </Box>
      </Box>

      <CardMedia
        mediaAppearance={media?.mediaAppearance}
        css={{
          width: '100%',
          maxWidth: '12rem',
          flexGrow: 1,
          flexSrhink: 0,
          overflow: 'hidden',
          borderRadius: '$2',

          '@bpxxs': {
            maxWidth: '6rem',
          },
        }}
      >
        <CardImg {...media} css={{ aspectRatio: '1/1', borderRadius: '$2' }} />
      </CardMedia>
    </CardBody>
  </CardRoot>
);
