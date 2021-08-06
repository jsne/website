import { createElement } from 'react';

import { getCssString } from './src/styles/stitches.config';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    createElement('style', {
      key: 'stitches',
      id: 'stitches',
      dangerouslySetInnerHTML: { __html: getCssString() },
    }),
  ]);
};
