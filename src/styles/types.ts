/** Base keys used for text variants (without `$`) for utils. */
export const tokenTextBaseKeys = ['h1', 'h2', 'h3', 'preHeading', 'p'] as const;

/** Text keys *without* `$` prefix. */
export type TokenTextBaseKey = typeof tokenTextBaseKeys[number];

/** Text keys *with* `$` prefix to directly reference tokens. */
export type TokenTextKey = `$${TokenTextBaseKey}`;

/** Tokenised text dictionary. */
export type TokenTextDictionary = { [k in TokenTextKey]: string };

/**
 * @HACK Workaround for spreading of the `css` prop.
 * @SEE <https://github.com/modulz/stitches/issues/289>
 */
export type CssPropHack = Record<string, string>;
