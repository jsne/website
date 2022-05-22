import { ReactComponent as Blob1 } from '~/assets/images/blob-hero-bottom.svg';
import { Text } from '~/components/atoms/Text';
import { Wrapper } from '~/components/atoms/Wrapper';
import { styled } from '~/styles/stitches.config';

/** Root element. */
export const HeroRoot = styled('section', {
  position: 'relative',
  withLinearGradient: { variant: 'primary' },
});

/** Main wrapper for content. */
export const HeroMain = styled(Wrapper, {
  display: 'grid',
  gap: '$4',
  paddingTop: '$6',
  paddingBottom: '$section',

  variants: {
    heroLayout: {
      center: {
        justifyItems: 'center',
        textAlign: 'center',
      },
    },
  },
});

export const HERO_BOTTOM_HEIGHT = 'clamp(4rem, 13vw, 12rem)';

export const HeroBottom = styled(Blob1, {
  position: 'absolute',
  width: '100%',
  height: HERO_BOTTOM_HEIGHT,
});

/** Title text. */
export const HeroTitle = styled(Text, {
  color: '$primaryContrast2',
});

HeroTitle.defaultProps = { textStyle: 'hero' };

/** Body text. */
export const HeroBody = styled(Text, {
  lineHeight: '$spaced',
  maxWidth: '$wrapperWidth1',
  color: '$primaryContrast3',
  withTextStyle: '$p',
});
