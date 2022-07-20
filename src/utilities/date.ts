export const dateIsInPast = (date: string) =>
  new Date(date).getSeconds() < new Date().getSeconds();

/** Convert timestamp to a pretty date. */
export const toPrettyDate = (date: string) =>
  new Intl.DateTimeFormat(
    typeof navigator !== 'undefined' ? navigator.language : 'en-GB',
    {
      dateStyle: 'short',
      timeStyle: 'short',
    },
  ).format(new Date(date));
