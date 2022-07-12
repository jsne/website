import { FC } from 'react';

import { ReactComponent as Mail } from '~/assets/images/icon-mail.svg';
import { styled } from '~/styles/stitches.config';

import { Box } from '../atoms/Box';
import { CardBody, CardHeading, CardPreHeading, CardRoot } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
import { Text } from '../atoms/Text';
import { MediaProps } from './Media';
import { SignUpForm, SignUpFormProps } from './SignUpForm';

const MailingListCardRoot = styled(CardRoot, {
  position: 'relative',
  maxWidth: '$wrapperWidth2',
  padding: '$8',
  overflow: 'visible',
  withLinearGradient: { variant: 'secondary' },

  '&::before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.75,
    filter: `blur(1.5rem)`,
    withLinearGradient: { variant: 'secondary' },
    withTransition: 'filter, opacity',
  },

  '&:focus-within&::before': {
    opacity: 1,
    filter: `blur(2rem)`,
  },

  '@bpsm': {
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: '$16',
  },
});

const MailingListIcon = styled(Icon, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 'auto',
  maxWidth: '100%',
  height: '100%',
  padding: '$6',
  transform: 'translate(-50%, -50%)',
  opacity: 0.45,
  pointerEvents: 'none',

  '@bpsm': {
    position: 'static',
    width: '100%',
    height: 'auto',
    maxWidth: '10rem',
    padding: 0,
    transform: 'none',
    opacity: 1,
    pointerEvents: 'auto',
  },
});

export interface MailingListCardProps
  extends Pick<MediaProps, 'preHeading' | 'heading' | 'body'> {
  formProps: SignUpFormProps;
  id?: string;
  status?: string;
}

const MailingListCardUnstyled: FC<MailingListCardProps> = ({
  preHeading,
  heading,
  status,
  body,
  formProps,
  ...props
}) => {
  return (
    <MailingListCardRoot as="section" {...props}>
      <MailingListIcon as={Mail} iconAppearance="ghost" />
      <Box
        css={{
          position: 'relative',
          display: 'grid',
          gap: '$4',
          alignContent: 'start',
        }}
      >
        <CardPreHeading css={{ color: '$secondaryContrast2Alpha' }}>
          {preHeading}
        </CardPreHeading>

        <CardHeading css={{ color: '$secondaryContrast1' }}>{heading}</CardHeading>

        <CardBody css={{ lineHeight: '$p', color: '$secondaryContrast2' }}>
          {body}
        </CardBody>

        <Box css={{ marginTop: '$2' }}>
          <SignUpForm {...formProps} />
        </Box>

        {status && (
          <Text aria-live="polite" textPreset="caption">
            {status}
          </Text>
        )}
      </Box>
    </MailingListCardRoot>
  );
};

export const MailingListCard = styled(MailingListCardUnstyled, {});
