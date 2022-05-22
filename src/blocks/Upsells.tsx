import React from 'react';

import { Wrapper } from '~/components/atoms/Wrapper';
import { WavySection } from '~/components/compositions/WavySection';
import { styled } from '~/styles/stitches.config';

import { Upsell, UpsellProps } from './Upsell';

export interface UpsellsProps {
  children?: React.ReactNode;
  upsells: UpsellProps[];
}

const UpsellsUnstyled: React.FC<UpsellsProps> = ({ children, upsells, ...props }) => (
  <WavySection {...props}>
    <Wrapper wrapperPadding="x4" css={{ display: 'grid', gap: '$8' }}>
      {children}
      {upsells.map((upsell) => (
        <Upsell key={upsell.uid} {...upsell} />
      ))}
    </Wrapper>
  </WavySection>
);

/** A list of upesells with alternating directions. */
export const Upsells = styled(UpsellsUnstyled, {});
