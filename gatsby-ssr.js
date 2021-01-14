/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { createElement } = require('react');
const { renderToString } = require('react-dom/server');
const { css } = require('./src/styles/stitches.config');

exports.replaceRenderer = ({ bodyComponent, setHeadComponents }) => {
  const { styles } = css.getStyles(() => renderToString(bodyComponent));

  setHeadComponents(
    styles.map((sheet, i) =>
      createElement(
        'style',
        { key: i, dangerouslySetInnerHTML: { __html: sheet } },
        null,
      ),
    ),
  );
};
