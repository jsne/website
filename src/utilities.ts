/** Determine whether the provided date is in the past. */
export const dateIsInPast = (date: string) =>
  new Date(date).getSeconds() < new Date().getSeconds();
