/* eslint no-console: 0 */
import { Story } from '@storybook/react';
import React from 'react';

import { Box } from '~/components/atoms/Box';

import { SignUpForm, SignUpFormProps } from '../SignUpForm';

export default {
  title: 'Compositions/SignUpForm',
  component: SignUpForm,
  parameters: { layout: 'fullscreen' },
};

export const Default: Story<SignUpFormProps> = (props) => (
  <Box css={{ padding: '$4' }}>
    <SignUpForm {...props} />
  </Box>
);

Default.args = {
  onSubmit: (ev) => {
    ev.preventDefault();
    console.log(ev);
    (ev.target as HTMLFormElement).reset();
  },
};
