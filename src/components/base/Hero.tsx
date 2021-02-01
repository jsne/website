import { StitchesProps } from '@stitches/react';

import { ReactComponent as Blob1 } from '~/assets/images/blob-hero-bottom.svg';
import { Text } from '~/components/base/Text';
import { Wrapper } from '~/components/base/Wrapper';
import { styled } from '~/styles/stitches.config';

/** Root element. */
export const HeroRoot = styled('header', {
  withLinearGradient: 'primary',
});

/** Main wrapper for content. */
export const HeroMain = styled(Wrapper, {
  display: 'grid',
  gap: '$5',
  paddingTop: '$section',
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

export type HeroMainProps = StitchesProps<typeof HeroMain>;

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
  maxWidth: '$wrapper1',
  color: '$primaryContrast3',
});
