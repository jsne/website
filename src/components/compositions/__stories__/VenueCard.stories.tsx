import { Story } from '@storybook/react';
import React from 'react';

import { VenueCard, VenueCardProps } from '../VenueCard';

export default {
  title: 'Compositions/VenueCard',
  component: VenueCard,
  parameters: { layout: 'fullscreen' },
};

export const Default: Story<VenueCardProps> = (args) => <VenueCard {...args} />;

Default.args = {
  venue: {
    preHeading: 'Venue',
    heading: "Carmine's: A Place for Steaks",
    postHeading: 'I do backflips every single day of my life, NE1 2AB',
    body: 'What is this word ‘spa?’ I feel like you’re starting to say a word and you’re not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?',
    cta: 'https://example.com',
  },
} as VenueCardProps;
