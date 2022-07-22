import type { FC } from 'react';

import footerWaveSrc from '~/assets/images/footer-wave.svg';
import { ReactComponent as GitHubIcon } from '~/assets/images/icon-github.svg';
import { styled } from '~/styles/stitches.config';

import { Box } from '../atoms/Box';
import { Icon } from '../atoms/Icon';
import { VisuallyHidden } from '../atoms/VisuallyHidden';
import { Wrapper } from '../atoms/Wrapper';
import { AutoLink } from '../primitives/AutoLink';

export const FOOTER_TOP_OFFSET = 'clamp(3rem, 6vw, 4rem)';

const FooterRoot = styled(Box, {
  position: 'relative',
  zIndex: 2,

  '&::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: `calc(${FOOTER_TOP_OFFSET} * -1)`,
    left: 0,
    width: '100%',
    height: FOOTER_TOP_OFFSET,
    maskImage: `url(${footerWaveSrc})`,
    maskPosition: 'top',
    WebkitMaskPosition: 'top',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '150% 102%',
    WebkitMaskSize: '110% 102%',
    withLinearGradient: { variant: 'body' },
  },
});

FooterRoot.defaultProps = { as: 'footer' };

export const Footer: FC = (props) => (
  <FooterRoot {...props}>
    <Box
      css={{
        position: 'relative',
        withLinearGradient: { variant: 'body' },
      }}
    >
      <Wrapper
        wrapperPadding="x4"
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '$2',
          paddingBottom: '$2',
        }}
      >
        <AutoLink
          href="https://github.com/jsne/website"
          css={{
            display: 'block',
            borderRadius: '$2',
            withTransition: 'outline',
            withOutlineFocus: '$tertiary1',

            '.__primary': {
              withTransition: 'fill',
            },

            ':hover': {
              '.__primary': {
                fill: '$secondary1',
              },
            },
          }}
        >
          <Icon
            as={GitHubIcon}
            iconAppearance="body"
            css={{ width: '3rem', height: '3rem' }}
            role="presentation"
          />
          <VisuallyHidden>GitHub repository</VisuallyHidden>
        </AutoLink>
      </Wrapper>
    </Box>
  </FooterRoot>
);
