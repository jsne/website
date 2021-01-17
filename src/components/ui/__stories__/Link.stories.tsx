import React from 'react';
import { Link } from '../Link';

export default {
  title: 'Link',
  component: Link,
};

export const All = () => (
  <div style={{ display: 'inline-grid', gridAutoFlow: 'row', gap: '.25rem' }}>
    <LinkPrimary {...LinkPrimary.args} />
    <LinkSecondary {...LinkSecondary.args} />
    <LinkTertiary {...LinkTertiary.args} />
  </div>
);

All.argTypes = {
  linkAppearance: { control: { disable: true }, table: { disable: true } },
};

export const LinkPrimary = (args) => (
  <div style={{ display: 'inline-flex', background: '#000' }}>
    <Link {...args} style={{ backgroundColor: 'black' }} />
  </div>
);
LinkPrimary.args = { children: 'This is h1 Text', href: '#', linkAppearance: 'primary' };

export const LinkSecondary = (args) => <Link {...args} />;
LinkSecondary.args = {
  children: 'This is h1 Text',
  href: '#',
  linkAppearance: 'secondary',
};

export const LinkTertiary = (args) => <Link {...args} />;
LinkTertiary.args = {
  children: 'This is h1 Text',
  href: '#',
  linkAppearance: 'tertiary',
};
