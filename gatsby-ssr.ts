import type { RenderBodyArgs } from 'gatsby';
import { createElement } from 'react';

import { getCssText } from './src/styles/stitches.config';

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    createElement('style', {
      key: 'stitches',
      id: 'stitches',
      dangerouslySetInnerHTML: { __html: getCssText() },
    }),
  ]);
};
