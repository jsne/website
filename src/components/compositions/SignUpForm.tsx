import React from 'react';

import { Box } from '../atoms/Box';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { VisuallyHidden } from '../atoms/VisuallyHidden';

export type SignUpFormProps = React.ComponentProps<'form'>;

export const SignUpForm: React.FC = (props) => (
  <Box
    as="form"
    css={{
      position: 'relative',
      display: 'flex',
      width: '100%',
      maxWidth: '32rem',
      borderRadius: '$1',
      withBoxShadow: { color: '$shadow1' },
      withLinearGradient: { variant: 'primary' },
      withTransition: 'box-shadow',

      '&:focus-within': {
        withOutline: '$secondaryContrast3Alpha',
      },
    }}
    {...props}
  >
    <VisuallyHidden>
      <label htmlFor="mailing-list-email">Email Address</label>
    </VisuallyHidden>
    <Input
      id="mailing-list-email"
      name="email"
      inputFocusAppearance="tertiary"
      placeholder="mantis.toboggan@example.com"
      type="email"
      required
      css={{
        flexGrow: 1,
        borderRadius: '$1 0 0 $1',

        // Prevent rightmost outline being covered by button when focused.
        '&:focus': {
          position: 'relative',
          zIndex: 1,
        },
      }}
    />
    <Button
      buttonAppearance="primary"
      type="submit"
      css={{
        minWidth: '9rem',
        borderRadius: '0 $1 $1 0',
        boxShadow: 'none',
        '&:active:not(:disabled), &:hover:not(:disabled)': {
          transform: 'none',
        },
        '&:focus:not(:disabled)': {
          withOutline: '$tertiary1',
        },
      }}
    >
      Confirm
    </Button>
  </Box>
);