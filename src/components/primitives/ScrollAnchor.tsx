import React, { useCallback } from 'react';

export type ScrollAnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> &
  Required<Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>;

/** Smooth scroll to an anchor. */
export const ScrollAnchor: React.FC<ScrollAnchorProps> = ({
  href,
  onClick,
  ...props
}) => {
  const handleClick = useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      ev.preventDefault();
      const targetElement = document.getElementById(href.replace(/#/, ''));

      if (!targetElement) {
        console.warn('[ScrollAnchor] Unable to find target element', { href });

        return;
      }

      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (onClick) {
        onClick(ev);
      }
    },
    [href, onClick],
  );

  return <a {...props} href={href} onClick={handleClick} />;
};
