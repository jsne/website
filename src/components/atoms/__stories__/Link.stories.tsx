import React from 'react';

import { Link } from '../Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

export const All = () => (
  <div style={{ display: 'inline-grid', gridAutoFlow: 'row', gap: '.25rem' }}>
    <Primary {...Primary.args} />
    <Secondary {...Secondary.args} />
    <Tertiary {...Tertiary.args} />
  </div>
);

All.argTypes = {
  linkAppearance: { control: { disable: true }, table: { disable: true } },
};

export const Primary = (args) => (
  <div style={{ display: 'inline-flex', background: '#000' }}>
    <Link {...args} style={{ backgroundColor: 'black' }} />
  </div>
);
Primary.args = { children: 'This is h1 Text', href: '#', linkAppearance: 'primary' };

export const Secondary = (args) => <Link {...args} />;
Secondary.args = {
  children: 'This is h1 Text',
  href: '#',
  linkAppearance: 'secondary',
};

export const Tertiary = (args) => <Link {...args} />;
Tertiary.args = {
  children: 'This is h1 Text',
  href: '#',
  linkAppearance: 'tertiary',
};
