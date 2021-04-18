import React from 'react';

import { ReactComponent as Calendar } from '~/assets/images/icon-calendar.svg';

import { Icon } from '../Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

export const Body = () => <Icon as={Calendar} width="48" iconAppearance="body" />;
export const Page = () => <Icon as={Calendar} width="48" iconAppearance="page" />;
export const Ghost = () => <Icon as={Calendar} width="48" iconAppearance="ghost" />;
