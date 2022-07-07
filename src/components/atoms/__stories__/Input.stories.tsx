import { Story } from '@storybook/react';

import { Input } from '../Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    backgrounds: { default: 'light' },
  },
};

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { inputAppearance: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { inputAppearance: 'secondary' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
