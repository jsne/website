import { ReactComponent as Blob1 } from '~/assets/images/blob-hero-bottom.svg';
import { styled } from '~/styles/stitches.config';

import { BoxProps } from './Box';
import { Text } from './Text';
import { Wrapper } from './Wrapper';

/** Root element. */
export const HeroRoot = styled('header', {
  withLinearGradient: 'primary',
});

/** Main wrapper for content. */
export const HeroMain = styled(Wrapper, {
  display: 'grid',
  gap: '$5',
  paddingTop: '$6',
  paddingBottom: '$section',

  variants: {
    heroLayout: {
      center: {
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
  },
});

export type HeroMainProps = BoxProps<typeof HeroMain>;

export const HeroBottom = styled(Blob1, {
  width: '100%',
  height: '13vw',
  maxHeight: '10rem',
});

/** Title text. */
export const HeroTitle = styled(Text, {
  color: '$primaryContrast2',
});

/** Body text. */
export const HeroBody = styled(Text, {
  lineHeight: '$spaced',
  maxWidth: '$wrapperWidth1',
  color: '$primaryContrast3',
});
