import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { ReactComponent as Top } from '~/assets/images/map-section-top.svg';
import { styled } from '~/styles/stitches.config';
import { createLogger } from '~/utilities/logger';

import { Box } from '../atoms/Box';
import { Wrapper } from '../atoms/Wrapper';
import type { VenueCardProps } from '../compositions/VenueCard';
import { VenueCard } from '../compositions/VenueCard';
import type { InteractiveMapProps } from '../primitives/InteractiveMap';
import { InteractiveMap, InteractiveMapStylesheet } from '../primitives/InteractiveMap';

const logger = createLogger({ prefix: 'VenueSection' });

const VenueSectionRoot = styled('section', {
  position: 'relative',
  backgroundColor: '$secondary2',
  color: '$secondaryContrast1',
  minHeight: '65vh',
});

const VenueSectionTop = styled(Top, {
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  color: '$body3',
  zIndex: 1,
  pointerEvents: 'none',
  objectFit: 'cover',
});

const VENUE_SECTION_TOP_OFFSET = '8.511979823455233vw';

export type VenueSectionProps = InteractiveMapProps & Pick<VenueCardProps, 'venue'>;

/** Venue info and interactive map with some waaaAAAaaaAAAvy styles. */
export const VenueSection: FC<VenueSectionProps> = ({
  id,
  mapOptions,
  markerOptions,
  venue,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [shouldMountMap, setShouldMountMap] = useState(false);

  useEffect(() => {
    logger.debug('[observer] instantiating obvserver for map', rootRef.current);

    const intersectionObserver = new IntersectionObserver(
      ([entry], instance) => {
        logger.debug('[observer]', entry);

        if (entry.isIntersecting) {
          logger.debug('[observer] intersection met, removing observer');
          instance.unobserve(entry.target);
          setShouldMountMap(true);
        }
      },
      { rootMargin: '0px -400px 0px 0px' },
    );

    intersectionObserver.observe(rootRef.current as HTMLElement);

    return () => {
      logger.debug('[observer] removing obvserver for map', intersectionObserver);
      intersectionObserver?.disconnect();
    };
  }, []);

  return (
    <VenueSectionRoot ref={rootRef}>
      <VenueSectionTop aria-hidden />

      <Wrapper
        wrapperPadding="x4"
        css={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '$16',
          paddingBottom: '$16',
          zIndex: 1,
          pointerEvents: 'none',
          '@bpsm': {
            justifyContent: 'flex-end',
          },
        }}
      >
        <VenueCard
          css={{ marginTop: VENUE_SECTION_TOP_OFFSET, pointerEvents: 'auto' }}
          venue={venue}
        />
      </Wrapper>

      <Box
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',

          '.mapboxgl-map': {
            width: '100%',
            height: '100%',
          },
        }}
      >
        {shouldMountMap && (
          <>
            <InteractiveMap
              id={id}
              mapOptions={mapOptions}
              markerOptions={markerOptions}
              lonOffset={0.075}
              {...props}
            />
            <InteractiveMapStylesheet />
          </>
        )}
      </Box>
    </VenueSectionRoot>
  );
};
