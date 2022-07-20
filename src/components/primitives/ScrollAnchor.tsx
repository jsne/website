import type { AnchorHTMLAttributes, MouseEventHandler } from 'react';
import { forwardRef, useCallback } from 'react';

import { getPrefersMotion } from '~/utilities/preferences';

export type ScrollAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

/** Smooth scroll to an anchor if the user prefers motion. */
export const ScrollAnchor = forwardRef<HTMLAnchorElement, ScrollAnchorProps>(
  ({ href, onClick, ...props }, ref) => {
    const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
      (ev) => {
        if (typeof window === 'undefined') {
          return;
        }

        ev.preventDefault();
        const anchor = href?.split('#')[1] || '';
        const targetElement = document.getElementById(anchor);

        if (!targetElement) {
          console.error('[ScrollAnchor] Unable to find target element', { href });

          return;
        }

        targetElement.scrollIntoView({
          behavior: getPrefersMotion() ? 'smooth' : 'auto',
          block: 'start',
          inline: 'start',
        });

        window.history.pushState({}, '', `#${anchor}`);

        onClick?.(ev);
      },
      [href, onClick],
    );

    return <a {...props} href={href} onClick={handleClick} ref={ref} />;
  },
);

ScrollAnchor.displayName = 'ScrollAnchor';
