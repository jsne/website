/* eslint-env node */
import type { RenderBodyArgs } from 'gatsby';
import * as React from 'react';

import { getCssString } from './src/styles/stitches.config';

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs): void => {
  setHeadComponents([
    <style
      id="stitches"
      key="stitches"
      dangerouslySetInnerHTML={{ __html: getCssString() }}
    />,
  ]);
};
