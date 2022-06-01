import { Story } from '@storybook/react';
import React from 'react';

import { themeTextStylesKeys } from '../../../styles/theme';
import { Text } from '../Text';

export default {
  title: 'Atoms/Text',
  component: Text,
};

export const All = () => (
  <>
    {themeTextStylesKeys.map((baseKey) => (
      <Text key={baseKey} textPreset={baseKey}>
        {baseKey} example text
      </Text>
    ))}
  </>
);

All.argTypes = {
  textAppearance: { control: { disable: true }, table: { disable: true } },
  textPreset: { control: { disable: true }, table: { disable: true } },
};

export const Hero: Story = (args) => <Text {...args} />;
Hero.args = { as: 'h1', children: 'There goes my hero', textPreset: 'hero' };

export const H1: Story = (args) => <Text {...args} />;
H1.args = { as: 'h1', children: 'This is h1 Text', textPreset: 'h1' };

export const H2: Story = (args) => <Text {...args} />;
H2.args = { as: 'h2', children: 'This is h2 Text', textPreset: 'h2' };

export const H3: Story = (args) => <Text {...args} />;
H3.args = { as: 'h3', children: 'This is h3 Text', textPreset: 'h3' };

export const P: Story = (args) => <Text {...args} style={{ maxWidth: '24rem' }} />;
P.args = {
  children:
    'Okay, Mr. Mayor. Feast your ears on that Spin Doctors mix. Any amount of cheese before a date is too much cheese. Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it.',
  textPreset: 'p',
};

export const PreHeading: Story = (args) => <Text {...args} />;
PreHeading.args = {
  children: 'Is your cat making TOO MUCH NOISE ALL THE TIME?',
  textPreset: 'preHeading',
};
