import type { ComponentProps, HTMLProps } from 'react';
import { forwardRef } from 'react';

import { Box } from '../atoms/Box';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { VisuallyHidden } from '../atoms/VisuallyHidden';

export const SignUpForm = forwardRef<HTMLFormElement, HTMLProps<HTMLFormElement>>(
  (props, ref) => (
    <Box
      ref={ref}
      as="form"
      css={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '32rem',
        borderRadius: '$1',
        withBoxShadow: { color: '$shadow1' },
        withLinearGradient: { variant: 'primary' },
        withTransition: 'outline',

        '&:focus-within': {
          withOutline: '$secondaryContrast3Alpha',
        },

        '@bpxxs': {
          flexDirection: 'row',
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
        autoCapitalize="off"
        autoCorrect="off"
        required
        css={{
          position: 'relative',
          flexGrow: 1,
          borderRadius: '$1 $1 0 0',

          // Prevent rightmost outline being covered by button when focused.
          ':focus': {
            zIndex: 2,
          },

          '@bpxxs': {
            borderRadius: '$1 0 0 $1',
          },
        }}
      />

      <Button
        buttonAppearance="primary"
        type="submit"
        css={{
          minWidth: '9rem',
          borderRadius: '0 0 $1 $1',
          boxShadow: 'none',

          '&:active:not(:disabled), &:hover:not(:disabled)': {
            transform: 'none',
          },

          '&:focus:not(:disabled)': {
            position: 'relative',
            withOutline: '$tertiary1',
          },

          '@bpxxs': {
            borderRadius: '0 $1 $1 0',
          },
        }}
      >
        Confirm
      </Button>
    </Box>
  ),
);

SignUpForm.displayName = 'SignUpForm';

export type SignUpFormProps = ComponentProps<typeof SignUpForm>;
