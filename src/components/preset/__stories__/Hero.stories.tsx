import React from 'react';

import { Hero, HeroTitle } from '../Hero';

export default {
  title: 'Preset/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
};

export const Default = (args) => <Hero {...args} />;

export const Title = (args) => (
  <Hero>
    <HeroTitle as="h1" textSize="hero" {...args} />
  </Hero>
);

Title.args = { children: 'There goes my hero' };
