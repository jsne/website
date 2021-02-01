import React from 'react';

import { HeroRoot, HeroBottom, HeroMain, HeroBody, HeroTitle } from '../Hero';

export default {
  title: 'Base/Hero',
  parameters: { layout: 'fullscreen' },
};

export const AllIntro = () => (
  <>
    <HeroRoot>
      <HeroMain heroLayout="center" wrapperWidth="small">
        <HeroTitle as="h1" textSize="hero">
          JavaScript
          <br />
          North East
        </HeroTitle>
        <HeroBody textSize="p">
          Okay, Mr. Mayor. Feast your ears on that Spin Doctors mix. Any amount of cheese
          before a date is too much cheese. Well, I don’t know how many years on this
          Earth I got left. I’m gonna get real weird with it.
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
        <HeroTitle as="h1" textSize="h1">
          JavaScript North East
        </HeroTitle>
      </HeroMain>
    </HeroRoot>
    <HeroBottom />
  </>
);

export const Root = (args) => <HeroRoot {...args} />;
Root.args = { children: 'Root' };

export const Main = (args) => (
  <HeroRoot>
    <HeroMain {...args} />
  </HeroRoot>
);
Main.args = { children: 'Main' };

export const Bottom = () => <HeroBottom />;

export const Title = (args) => (
  <HeroRoot>
    <HeroTitle as="h1" textSize="hero" {...args} />
  </HeroRoot>
);
Title.args = { children: 'There goes my hero' };

export const Body = (args) => (
  <HeroRoot>
    <HeroBody as="p" textSize="p" {...args} />
  </HeroRoot>
);
Body.args = {
  children:
    'Okay, Mr. Mayor. Feast your ears on that Spin Doctors mix. Any amount of cheese before a date is too much cheese. Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it.',
};
