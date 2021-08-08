import { Story } from '@storybook/react';
import React from 'react';

import { Media, MediaProps } from '../Media';

export default {
  title: 'Compositions/Media',
  component: Media,
};

const Template: Story<MediaProps> = (args) => <Media {...args} />;

const templateArgs = {
  body: (
    <>
      Hello fellow American. This you should vote me. I leave power good. Thank you. Thank
      you. If you vote me I&apos;m hot. What? Taxes they&apos;ll be lower son. The
      democratic vote for me is right thing to do Philadelphia.
    </>
  ),
  ctaPrimary: { children: 'So do', href: '#' },
  heading: 'Chrundle the Great',
  media: { alt: 'Media', src: 'https://via.placeholder.com/768x512?text=Media' },
  preHeading: 'Speakers',
};

export const Default = Template.bind(templateArgs);

export const SecondaryCta = Template.bind({
  ...templateArgs,
  ctaSecondary: { children: 'Yeah?!', href: '#' },
});

export const HorizontalLayout = Template.bind({
  ...templateArgs,
  layout: 'horizontal',
});

export const ResponsiveLayout = Template.bind({
  ...templateArgs,
  layout: { '@initial': 'vertical', '@bpsm': 'horizontal' },
});
