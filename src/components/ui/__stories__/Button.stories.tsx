import React from 'react';
import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = (args) => <Button {...args} />;

Primary.args = { button: 'primary', children: 'Primary' };

export const Secondary = (args) => <Button {...args} />;

Secondary.args = { button: 'secondary', children: 'Secondary' };

export const Disabled = (args) => (
  <div style={{ display: 'inline-grid', gap: '2rem', gridAutoFlow: 'column' }}>
    <Button {...args} button="primary" />
    <Button {...args} button="secondary" />
  </div>
);

Disabled.argTypes = {
  button: { control: { disable: true }, table: { disable: true } },
};

Disabled.args = {
  children: 'Disabled 🙅‍♀️',
  disabled: true,
};
