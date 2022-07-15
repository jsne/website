import type { Story } from '@storybook/react';

import type { EventCardProps } from '../EventCard';
import { EventCard } from '../EventCard';

export default {
  title: 'Compositions/EventCard',
  component: EventCard,
};

const Template: Story<EventCardProps> = (args) => <EventCard {...args} />;

export const PastEvent = Template.bind({});

PastEvent.args = {
  description: (
    <>
      Hello fellow American. This you should vote me. I leave power good. Thank you. Thank
      you. If you vote me I&apos;m hot. What? Taxes they&apos;ll be lower son. The
      democratic vote for me is right thing to do Philadelphia.
    </>
  ),
  heading: 'Chrundle the Great',
  media: { alt: 'Media', src: 'https://via.placeholder.com/512x512?text=EventCard' },
  preHeading: 'Previous Event',
};
