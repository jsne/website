import React from 'react';
import { Text } from '../Text';

import { textVariantKeys } from '~/styles/tokens';

export default {
  title: 'Text',
  component: Text,
};

export const All = () => (
  <>
    {textVariantKeys.map((variant) => (
      <Text key={variant} text={variant}>
        {variant.replace('$', '')} example text
      </Text>
    ))}
  </>
);

All.argTypes = { text: { control: { disable: true }, table: { disable: true } } };

export const H1 = (args) => <Text {...args} />;
H1.args = { children: 'This is h1 Text', text: '$h1' };

export const H2 = (args) => <Text {...args} />;
H2.args = { as: 'h2', children: 'This is h2 Text', text: '$h2' };

export const H3 = (args) => <Text {...args} />;
H3.args = { as: 'h3', children: 'This is h3 Text', text: '$h3' };

export const P = (args) => <Text {...args} style={{ maxWidth: '24rem' }} />;
P.args = {
  children:
    'Okay, Mr. Mayor. Feast your ears on that Spin Doctors mix. Any amount of cheese before a date is too much cheese. Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it.',
  text: '$p',
};
