import { styled } from '~/styles/stitches.config';
import { Icon } from './Icon';

export const IconGroupRoot = styled('div', {
  display: 'grid',
  gap: '$3',
});

export const IconGroupIcon = styled(Icon, {
  width: '$5',

  variants: {
    iconGroupSize: {
      large: {
        width: '$7',
      },
    },
  },
});
