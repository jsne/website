import { createLogger } from '~/utilities/logger';

const logger = createLogger({ prefix: 'getLinkType' });

interface GetLinkTypeReturn {
  /** Whether the link is on the current site. */
  isInternal: boolean;
  /** Whether the link is on the same page. */
  isSamePage: boolean;
  /** Whether the link has an anchor (`#`). */
  isAnchor: boolean;
}

/** Determine if link is internal and is on the same page. */
export const getLinkType = (path?: string): GetLinkTypeReturn => {
  // Some third party sources for links may not have a valid path.
  if (!path) {
    logger.trace();
    logger.error('no path provided');

    return {
      isInternal: false,
      isSamePage: false,
      isAnchor: false,
    };
  }

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
      isSamePage:
        typeof window === 'undefined' ? false : path === window.location.pathname,
      isAnchor,
    };
  }

  return {
    isInternal: false,
    isSamePage: false,
    isAnchor,
  };
};
