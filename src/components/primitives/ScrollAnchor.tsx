import React, { forwardRef, useCallback } from 'react';

import { getPrefersMotion } from '~/utilities';

type BaseProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ScrollAnchorProps = Omit<BaseProps, 'href'> &
  Required<Pick<BaseProps, 'href'>>;

/** Smooth scroll to an anchor if the user prefers motion. */
export const ScrollAnchor = forwardRef<HTMLAnchorElement, ScrollAnchorProps>(
  ({ href, onClick, ...props }, ref) => {
    const handleClick = useCallback(
      (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (typeof window === 'undefined') {
          return;
        }

        ev.preventDefault();
        const anchor = href.split('#')[1];
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
