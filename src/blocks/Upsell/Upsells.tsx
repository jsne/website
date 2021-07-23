import React from 'react';

import { BoxProps } from '~/components/atoms/Box';
import { Wrapper } from '~/components/atoms/Wrapper';
import { WavySection } from '~/components/compositions/WavySection';

import { Upsell, UpsellProps } from './Upsell';

export interface UpsellsProps extends BoxProps {
  upsells: UpsellProps[];
}

/** A list of upesells with alternating directions. */
export const Upsells: React.FC<UpsellsProps> = ({ children, upsells, ...props }) => (
  <WavySection {...props}>
    <Wrapper wrapperPadding="x4" css={{ display: 'grid', gap: '$8' }}>
      {children}
      {upsells.map((upsell) => (
        <Upsell key={upsell.uid} {...upsell} />
      ))}
    </Wrapper>
  </WavySection>
);
