import { Story } from '@storybook/react';

import { ReactComponent as Calendar } from '~/assets/images/icon-calendar.svg';

import { TextIcon, TextIconProps } from '../TextIcon';

export default {
  title: 'Compositions/TextIcon',
  component: TextIcon,
};

const Template: Story<TextIconProps> = (args) => <TextIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: Calendar,
  iconAppearance: 'body',
  children: new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(Date.now()),
};
