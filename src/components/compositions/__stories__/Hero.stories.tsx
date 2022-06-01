import { Story } from '@storybook/react';
import React from 'react';

import { HeroBody, HeroBottom, HeroMain, HeroRoot, HeroTitle } from '../Hero';

export default {
  title: 'Atoms/Hero',
  parameters: { layout: 'fullscreen' },
};

export const AllIntro = () => (
  <>
    <HeroRoot>
      <HeroMain heroLayout="center" wrapperWidth="small">
        <HeroTitle as="h1">
          JavaScript
          <br />
          North East
        </HeroTitle>
        <HeroBody>
          Okay, Mr. Mayor. Feast your ears on that Spin Doctors mix. Any amount of cheese
          before a date is too much cheese. Well, I don&apos;t know how many years on this
          Earth I got left. I&apos;m gonna get real weird with it.
        </HeroBody>
      </HeroMain>
    </HeroRoot>
    <HeroBottom />
  </>
);

export const AllPageTitle = () => (
  <>
    <HeroRoot>
      <HeroMain wrapperPadding="x8">
        <HeroTitle as="h1" textPreset="h1">
          JavaScript North East
        </HeroTitle>
      </HeroMain>
    </HeroRoot>
    <HeroBottom />
  </>
);

export const Root: Story = (args) => <HeroRoot {...args} />;

Root.args = { children: 'Root' };

export const Main: Story = (args) => (
  <HeroRoot>
    <HeroMain {...args} />
  </HeroRoot>
);
Main.args = { children: 'Main' };

export const Bottom: Story = () => <HeroBottom />;

export const Title: Story = (args) => (
  <HeroRoot>
    <HeroTitle as="h1" {...args} />
  </HeroRoot>
);

Title.args = { children: 'There goes my hero' };

export const Body: Story = (args) => (
  <HeroRoot>
    <HeroBody as="p" {...args} />
  </HeroRoot>
);

Body.args = {
  children:
    'Okay, Mr. Mayor. Feast your ears on that Spin Doctors mix. Any amount of cheese before a date is too much cheese. Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it.',
};
