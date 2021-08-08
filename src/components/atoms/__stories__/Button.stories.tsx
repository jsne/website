import { Story } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary: Story = (args) => <Button {...args} />;

Primary.args = { buttonAppearance: 'primary', children: 'Primary' };

export const Secondary: Story = (args) => <Button {...args} />;

Secondary.args = { buttonAppearance: 'secondary', children: 'Secondary' };

export const Disabled: Story = (args) => (
  <div style={{ display: 'inline-grid', gap: '2rem', gridAutoFlow: 'column' }}>
    <Button {...args} buttonAppearance="primary" />
    <Button {...args} buttonAppearance="secondary" />
  </div>
);

Disabled.argTypes = {
  buttonAppearance: { control: { disable: true }, table: { disable: true } },
};

Disabled.args = {
  children: 'Disabled 🙅‍♀️',
  disabled: true,
};
