import type { FC } from 'react';

import { styled } from '~/styles/stitches.config';

import { Link } from '../atoms/Link';

export const HeaderNavigationRoot = styled('nav', {
  display: 'flex',
  alignItems: 'center',
});

export const HeaderNavigationList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '$6',
  padding: 0,
  margin: 0,
  listStyleType: 'none',
});

export const HeaderNavigationLink = styled(Link, {
  fontWeight: '$bold',
  color: '$pageContrast3',
  withOutlineFocus: '$secondary1',

  '&[aria-current="page"]': {
    color: '$secondary2',
  },
});

export interface HeaderNavigationProps {
  items?: {
    navigationLabel: string | null;
    slug: string | null;
  }[];
}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({ items, ...props }) => (
  <HeaderNavigationRoot {...props}>
    {items && (
      <HeaderNavigationList>
        {items.map((node) => (
          <li key={node?.slug}>
            <HeaderNavigationLink href={node?.slug as string}>
              {node?.navigationLabel}
            </HeaderNavigationLink>
          </li>
        ))}
      </HeaderNavigationList>
    )}
  </HeaderNavigationRoot>
);
