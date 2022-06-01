import type { ComponentProps } from 'react';
import { Box as BaseBox } from 'react-polymorphic-box';

import { styled } from '~/styles/stitches.config';

export const Box = styled(BaseBox, {});
export type BoxProps = ComponentProps<typeof Box>;
