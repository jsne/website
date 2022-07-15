/* eslint no-console: 0 */
import type { Story } from '@storybook/react';

import { Box } from '~/components/atoms/Box';

import type { MailingListCardProps } from '../MailingListCard';
import { MailingListCard } from '../MailingListCard';

export default {
  title: 'Compositions/MailingListCard',
  component: MailingListCard,
  parameters: { layout: 'fullscreen' },
};

const Template: Story<MailingListCardProps> = (args) => (
  <Box css={{ maxWidth: '$wrapperWidth3', margin: '$4 auto' }}>
    <MailingListCard {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  preHeading: 'Keep in Touch',
  heading: 'Join Our Mailing List',
  body: "Not only do all of these people exist, but they have been asking for their mail on a daily basis. It's all they're talking about up there, dude.",
};
