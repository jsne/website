import type { ComponentProps, FC, SVGAttributes } from 'react';

import { styled } from '~/styles/stitches.config';

import type { IconProps } from '../atoms/Icon';
import { Icon } from '../atoms/Icon';
import type { TextProps } from '../atoms/Text';
import { Text } from '../atoms/Text';

interface TextIconUnstyledProps extends TextProps, IconProps {
  icon: FC<SVGAttributes<SVGElement>>;
}

const TextIconUnstyled: FC<TextIconUnstyledProps> = ({
  css,
  children,
  icon,
  iconAppearance,
  ...props
}) => (
  <Text
    css={{ display: 'flex', gap: '$2', alignItems: 'center', lineHeight: 1, ...css }}
    {...props}
  >
    <Icon iconAppearance={iconAppearance} as={icon} css={{ width: '1.25em' }} />
    <span>{children}</span>
  </Text>
);

TextIconUnstyled.defaultProps = {
  textPreset: 'caption',
};

export const TextIcon = styled(TextIconUnstyled);
export type TextIconProps = ComponentProps<typeof TextIcon>;
