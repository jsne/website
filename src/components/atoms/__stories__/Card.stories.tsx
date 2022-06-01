import React from 'react';

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

export const All = () => (
  <CardRoot>
    <CardMedia>
      <CardImg alt="Media" src="https://via.placeholder.com/768x512?text=Media" />
    </CardMedia>
    <CardBody>
      <CardPreHeading>Guest Speaker</CardPreHeading>
      <CardHeading>Trundle Kelly</CardHeading>
      <CardParagraph>
        Hello fellow American. This you should vote me. I leave power good. Thank you.
        Thank you. If you vote me I&apos;m hot. What? Taxes they&apos;ll be lower son. The
        democratic vote for me is right thing to do Philadelphia.
      </CardParagraph>
      <CardCtas>
        <Button as="a" href="#" buttonAppearance="primary">
          So do
        </Button>
      </CardCtas>
    </CardBody>
  </CardRoot>
);

All.argTypes = {
  linkAppearance: { control: { disable: true }, table: { disable: true } },
};

export const Root = () => (
  <CardRoot>
    I am <del>G</del>root.
  </CardRoot>
);

export const Body = () => (
  <CardBody>
    <div>
      <del>bo</del>bod<del>d</del>y
    </div>
  </CardBody>
);
