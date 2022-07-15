import type { Story } from '@storybook/react';

import { WavySection } from '../WavySection';

export default {
  title: 'Compositions/WavySection',
  component: WavySection,
  parameters: { layout: 'fullscreen' },
};

export const Default: Story = (args) => <WavySection {...args} />;
Default.args = {
  children:
    'Dayman, fighter of the Nightman, champion of the sun, you’re a master of karate and friendship for everyone. Dayman!',
};
