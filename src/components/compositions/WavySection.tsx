import { FC, ReactNode } from 'react';

import wavySectionBottomShadow from '~/assets/images/wavy-section-bottom-shadow.svg';
import wavySectionBottom from '~/assets/images/wavy-section-bottom.svg';
import wavySectionTop from '~/assets/images/wavy-section-top.svg';
import { Box } from '~/components/atoms/Box';
import { styled } from '~/styles/stitches.config';

// @NOTE need to use flat angle so top, middle and bottom seamlessly blend.
const withLinearGradient = { variant: 'tertiary', angle: 90 } as const;

export const WavySectionRoot = styled(Box, {
  position: 'relative',
  width: '100%',
  backgroundColor: '$body3',

  '&::before': {
    content: '',
    position: 'relative',
    display: 'block',
    top: '0.15rem',
    left: 0,
    width: '100%',
    height: '5.66vw',
    maskImage: `url(${wavySectionTop})`,
    maskPosition: 'bottom',
    WebkitMaskPosition: 'bottom',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    withLinearGradient,
  },

  '&::after': {
    content: '',
    position: 'relative',
    display: 'block',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '18.8vw',
    maskImage: `url(${wavySectionBottom}), url(${wavySectionBottomShadow})`,
    maskPosition: 'top, top',
    WebkitMaskPosition: 'top, top',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '120% 69%, 120% 100%',
    WebkitMaskSize: '120% 69%, 120% 100%',
    withLinearGradient,
  },
});

export const WavySection: FC<{ children?: ReactNode }> = ({ children, ...props }) => (
  <WavySectionRoot as="section" {...props}>
    <Box
      css={{
        paddingTop: '$16',
        withLinearGradient,
      }}
    >
      {children}
    </Box>
  </WavySectionRoot>
);
