/** Determine whether the provided date is in the past. */
export const dateIsInPast = (date: string) =>
  new Date(date).getSeconds() < new Date().getSeconds();

export const prefersMotion = globalThis.matchMedia(
  '(prefers-reduced-motion: no-preference)',
);

/** Convert timestamp to a pretty date. */
export const toPrettyDate = (date: string) =>
  new Intl.DateTimeFormat(navigator.language, {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date));
