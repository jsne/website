import React from 'react';

import { ReactComponent as Mail } from '~/assets/images/icon-mail.svg';
import { styled } from '~/styles/stitches.config';

import { Box } from '../atoms/Box';
import { CardRoot, CardPreheading, CardHeading, CardBody } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
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

  '@bpxs': {
    display: 'flex',
    gap: '$8',
    flexDirection: 'row-reverse',
  },

  '@bpsm': {
    gap: '$section',
  },
});

const MailingListIcon = styled(Icon, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 'auto',
  height: '100%',
  padding: '$6',
  transform: 'translate(-50%, -50%)',
  opacity: 0.45,
  pointerEvents: 'none',

  '@bpxs': {
    position: 'static',
    width: '100%',
    height: 'auto',
    maxWidth: '10rem',
    padding: 0,
    transform: 'none',
    opacity: 1,
    pointerEvents: 'auto',
  },

  '@bpsm': {
    maxWidth: '11rem',
  },
});

export interface MailingListCardProps
  extends Pick<MediaProps, 'preHeading' | 'heading' | 'body'> {
  /** Properties to apply to sign up form. */
  formProps: SignUpFormProps;
}

export const MailingListCard: React.FC<MailingListCardProps> = ({
  preHeading,
  heading,
  body,
  formProps,
  ...props
}) => (
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
      <CardPreheading css={{ color: '$secondaryContrast2Alpha' }}>
        {preHeading}
      </CardPreheading>

      <CardHeading css={{ color: '$secondaryContrast1' }}>{heading}</CardHeading>

      <CardBody css={{ lineHeight: '$p', color: '$secondaryContrast2' }}>{body}</CardBody>

      <Box css={{ marginTop: '$2' }}>
        <SignUpForm {...formProps} />
      </Box>
    </Box>
  </MailingListCardRoot>
);
