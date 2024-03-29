import type { Story } from '@storybook/react';

import { Box } from '../../atoms/Box';
import type { VenueCardProps } from '../VenueCard';
import { VenueCard } from '../VenueCard';

export default {
  title: 'Compositions/VenueCard',
  component: VenueCard,
  parameters: { layout: 'fullscreen' },
};

export const Default: Story<VenueCardProps> = (args) => (
  <Box css={{ padding: '$4' }}>
    <VenueCard {...args} />
  </Box>
);

Default.args = {
  venue: {
    preHeading: 'Venue',
    heading: "Carmine's: A Place for Steaks",
    postHeading: 'I do backflips every single day of my life, NE1 2AB',
    body: 'What is this word ‘spa?’ I feel like you’re starting to say a word and you’re not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?',
    cta: 'https://example.com',
  },
} as VenueCardProps;
