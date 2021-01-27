import React from 'react';

import { Media } from '../Media';

export default {
  title: 'Preset/Media',
  component: Media,
};

export const Default = (args) => <Media {...args} />;

Default.args = {
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

export const SecondaryCta = (args) => <Media {...args} />;

SecondaryCta.args = {
  body: (
    <>
      Hello fellow American. This you should vote me. I leave power good. Thank you. Thank
      you. If you vote me I&apos;m hot. What? Taxes they&apos;ll be lower son. The
      democratic vote for me is right thing to do Philadelphia.
    </>
  ),
  ctaPrimary: { children: 'So do', href: '#' },
  ctaSecondary: { children: 'Yeah?!', href: '#' },
  heading: 'Chrundle the Great',
  media: { alt: 'Media', src: 'https://via.placeholder.com/768x512?text=Media' },
  preHeading: 'Speakers',
};

export const HorizontalLayout = (args) => <Media {...args} />;

HorizontalLayout.args = {
  body: (
    <>
      Hello fellow American. This you should vote me. I leave power good. Thank you. Thank
      you. If you vote me I&apos;m hot. What? Taxes they&apos;ll be lower son. The
      democratic vote for me is right thing to do Philadelphia.
    </>
  ),
  ctaPrimary: { children: 'So do', href: '#' },
  ctaSecondary: { children: 'Yeah?!', href: '#' },
  heading: 'Chrundle the Great',
  layout: 'horizontal',
  media: { alt: 'Media', src: 'https://via.placeholder.com/768x512?text=Media' },
  preHeading: 'Speakers',
};

export const ResponsiveLayout = (args) => <Media {...args} />;

ResponsiveLayout.args = {
  body: (
    <>
      Hello fellow American. This you should vote me. I leave power good. Thank you. Thank
      you. If you vote me I&apos;m hot. What? Taxes they&apos;ll be lower son. The
      democratic vote for me is right thing to do Philadelphia.
    </>
  ),
  ctaPrimary: { children: 'So do', href: '#' },
  ctaSecondary: { children: 'Yeah?!', href: '#' },
  heading: 'Chrundle the Great',
  layout: { bpsm: 'horizontal' },
  media: { alt: 'Media', src: 'https://via.placeholder.com/768x512?text=Media' },
  preHeading: 'Speakers',
};
