import React from 'react';

import { ReactComponent as Calendar } from '~/assets/images/inline/calendar.svg';
import { Icon } from '../Icon';

export default {
  title: 'Base/Icon',
  component: Icon,
};

export const Body = () => <Icon as={Calendar} iconAppearance="body" />;
export const Page = () => <Icon as={Calendar} iconAppearance="page" />;
