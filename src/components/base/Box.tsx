import React from 'react';
import { Box as BaseBox, PolymorphicComponentProps } from 'react-polymorphic-box';

import { CSS, styled } from '~/styles/stitches.config';

/** `css` prop. */
export type BoxCssProp = { css?: CSS };

type BoxBaseDefaultProps = Record<string, unknown>;

/** Base props without auto-generated types from `Box` component. */
export type BoxBaseProps<
  T = BoxBaseDefaultProps,
  E extends React.ElementType = 'div'
> = PolymorphicComponentProps<E, T & BoxCssProp>;

/** Generic component with standard props applied. */
const StyledBox: React.FC<BoxBaseProps> = (props) => <BaseBox {...props} />;

export const Box = styled(StyledBox, {});

export type BoxProps<T = BoxBaseDefaultProps> = React.ComponentProps<typeof Box> &
  React.PropsWithChildren<T>;
