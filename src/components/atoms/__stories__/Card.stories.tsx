import type { Story } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Button } from '../Button';
import {
  CardBody,
  CardCtas,
  CardHeading,
  CardImg,
  CardMedia,
  CardParagraph,
  CardPreHeading,
  CardRoot,
} from '../Card';

export default {
  title: 'Atoms/Card',
};

export const Root: Story = (args) => <CardRoot {...args} />;
Root.args = { children: 'Hello, I am Root' };

export const Body: Story = (args) => <CardBody {...args} />;
Body.args = { children: 'Card Body' };

export const Heading: Story = (args) => (
  <CardRoot>
    <CardHeading {...args} />
  </CardRoot>
);
Heading.args = { children: 'Card Heading Goes Here' };

export const PreHeading: Story = (args) => (
  <CardRoot>
    <CardPreHeading {...args} />
  </CardRoot>
);
PreHeading.args = { children: 'Card PreHeading Goes Here' };

export const Paragraph: Story = (args) => (
  <CardRoot>
    <CardParagraph {...args} />
  </CardRoot>
);
Paragraph.args = { children: 'Card Body' };

export const Img: Story = (args) => <CardImg {...args} />;
Img.args = {
  src: 'https://picsum.photos/200/300',
  alt: 'Example Card Image',
  cardLayout: 'horizontal',
};

export const Ctas: Story<ComponentProps<typeof CardCtas>> = (args) => (
  <CardCtas {...args}>
    <Button as="a" href="#" buttonAppearance="primary">
      Primary CTA
    </Button>
    <Button as="a" href="#" buttonAppearance="secondary">
      Secondary CTA
    </Button>
  </CardCtas>
);

Ctas.args = { cardLayout: 'horizontal' };
