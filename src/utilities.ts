/** Determine whether the provided date is in the past. */
export const dateIsInPast = (date: string) =>
  new Date(date).getSeconds() < new Date().getSeconds();

export const getPrefersMotion = () =>
  globalThis.matchMedia('(prefers-reduced-motion: no-preference)').matches;

/** Convert timestamp to a pretty date. */
export const toPrettyDate = (date: string) =>
  new Intl.DateTimeFormat(navigator.language, {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(date));

interface GetLinkTypeReturn {
  /** Whether the link is on the current site. */
  isInternal: boolean;
  /** Whether the link is on the same page. */
  isSamePage: boolean;
  /** Whether the link has an anchor (`#`). */
  isAnchor: boolean;
}

/** Determine if link is internal and is on the same page. */
export const getLinkType = (path: string): GetLinkTypeReturn => {
  const isAnchor = new RegExp('#.*$').test(path);

  if (path.startsWith('#')) {
    return {
      isInternal: true,
      isSamePage: true,
      isAnchor,
    };
  }

  if (path.startsWith('/')) {
    return {
      isInternal: true,
      isSamePage: path === globalThis.location.pathname,
      isAnchor,
    };
  }

  return {
    isInternal: false,
    isSamePage: false,
    isAnchor,
  };
};
