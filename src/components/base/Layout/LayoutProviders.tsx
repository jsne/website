import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { theme } from '~/styles/theme';

export const LayoutProviders: React.FC = (props) => (
  <ThemeProvider theme={theme} {...props} />
);
