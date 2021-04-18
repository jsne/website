import { screen, render } from '@testing-library/react';
import React from 'react';

import * as Card from '../Card';

describe('Card', () => {
  it('Should render CardRoot.', () => {
    render(<Card.CardRoot>What do now?</Card.CardRoot>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });

  it('Should render CardPreheading.', () => {
    render(<Card.CardPreheading>What do now?</Card.CardPreheading>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });

  it('Should render CardHeading.', () => {
    render(<Card.CardHeading>What do now?</Card.CardHeading>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });

  it('Should render CardParagraph.', () => {
    render(<Card.CardParagraph>What do now?</Card.CardParagraph>);
    expect(screen.getByText('What do now?')).toBeInTheDocument();
  });
});
