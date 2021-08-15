import { styled } from '~/styles/stitches.config';

import { BoxProps } from './Box';

/** Generic wrapper for any content. */
export const Wrapper = styled('div', {
  width: '100%',
  maxWidth: '$wrapperWidth3',
  marginRight: 'auto',
  marginLeft: 'auto',

  variants: {
    wrapperPadding: {
      x4: {
        paddingRight: '$4',
        paddingLeft: '$4',
      },
      x8: {
        paddingRight: '$8',
        paddingLeft: '$8',
      },
    },

    wrapperWidth: {
      small: {
        maxWidth: '$wrapperWidth1',
      },
      medium: {
        maxWidth: '$wrapperWidth2',
      },
    },
  },
});

export type WrapperProps = BoxProps<typeof Wrapper>;
