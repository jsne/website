import type { RenderBodyArgs } from 'gatsby';
import * as React from 'react';

import { getCssString } from './src/styles/stitches.config';

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />,
  ]);
};
