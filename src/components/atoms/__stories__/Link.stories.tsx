import type { Story } from '@storybook/react';

import type { LinkProps } from '../Link';
import { Link } from '../Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

export const All = () => (
  <div style={{ display: 'inline-grid', gridAutoFlow: 'row', gap: '.25rem' }}>
    <Primary {...(Primary.args as LinkProps)} />
    <Secondary {...(Secondary.args as LinkProps)} />
    <Tertiary {...(Tertiary.args as LinkProps)} />
  </div>
);
All.argTypes = {
  linkAppearance: { control: { disable: true }, table: { disable: true } },
};

export const Primary: Story<LinkProps> = (args) => (
  <div style={{ display: 'inline-flex', background: '#000' }}>
    <Link {...args} style={{ backgroundColor: 'black' }} />
  </div>
);

Primary.args = {
  children: 'Primary link appearance',
  href: '#',
  linkAppearance: 'primary',
};

export const Secondary: Story<LinkProps> = (args) => <Link {...args} />;
Secondary.args = {
  children: 'Secondary link appearance',
  href: '#',
  linkAppearance: 'secondary',
};

export const Tertiary: Story<LinkProps> = (args) => <Link {...args} />;
Tertiary.args = {
  children: 'Tertiary link appearance',
  href: '#',
  linkAppearance: 'tertiary',
};

export const AutoExternal: Story<LinkProps> = (args) => <Link {...args} />;
AutoExternal.args = {
  children: 'I will open in a new tab',
  href: 'https://example.com',
  linkAppearance: 'primary',
};

export const AutoInternal: Story<LinkProps> = (args) => <Link {...args} />;
AutoInternal.args = {
  children: 'I should not open in a new tab (but Storybook will force me to anyway)',
  href: '/',
  linkAppearance: 'primary',
};
