export const dateIsInPast = (date?: string | null) =>
  date ? new Date(date).getTime() < new Date().getTime() : true;

/** Convert timestamp to a pretty date. */
export const toPrettyDate = (date: string) =>
  new Intl.DateTimeFormat(
    typeof navigator !== 'undefined' ? navigator.language : 'en-GB',
    {
      dateStyle: 'short',
      timeStyle: 'short',
    },
  ).format(new Date(date));
