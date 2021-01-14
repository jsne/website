import React from 'react';
import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = (args) => <Button {...args} />;

Primary.args = { appearance: 'primary', children: 'Primary' };

export const Secondary = (args) => <Button {...args} />;

Secondary.args = { appearance: 'secondary', children: 'Secondary' };

export const Disabled = (args) => (
  <div style={{ display: 'inline-grid', gap: '2rem', gridAutoFlow: 'column' }}>
    <Button {...args} appearance="primary" />
    <Button {...args} appearance="secondary" />
  </div>
);

Disabled.argTypes = {
  appearance: { control: { disable: true }, table: { disable: true } },
};

Disabled.args = {
  children: 'Disabled 🙅‍♀️',
  disabled: true,
};
