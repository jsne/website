import { Link } from 'gatsby';
import { forwardRef } from 'react';

import { styled } from '~/styles/stitches.config';
import { getLinkType } from '~/utilities';

import { ScrollAnchor, ScrollAnchorProps } from './ScrollAnchor';

export type AutoLinkProps = ScrollAnchorProps;

/**
 * Render a link:
 * - Gatsby `Link` when `href` starts with `/`
 * - `ScrollAnchor` when link is on the same page and has an anchor (`#`)
 * - Vanilla `a` with `rel` and `target` set (if not already provided) when `href` points to a different domain
 */
const AutoLinkUnstyled = forwardRef<HTMLAnchorElement, AutoLinkProps>((props, ref) => {
  const { isInternal, isSamePage, isAnchor } = getLinkType(props.href);

  if (isSamePage && isAnchor) {
    return <ScrollAnchor {...props} ref={ref} />;
  }

  if (isInternal) {
    // 'lil `as` hack, Gatsby types could be better.
    return <Link ref={ref as unknown as string} {...props} to={props.href} />;
  }

  return (
    <a
      {...props}
      ref={ref}
      target={props.target || isInternal ? undefined : '_blank'}
      rel={props.rel || isInternal ? undefined : 'noopener noreferrer'}
    />
  );
});

AutoLinkUnstyled.displayName = 'AutoLink';

export const AutoLink = styled(AutoLinkUnstyled, {});
