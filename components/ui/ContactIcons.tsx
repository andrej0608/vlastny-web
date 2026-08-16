/**
 * Icons for the contact rows.
 *
 * Inline SVG rather than an icon package: the project needs four glyphs in
 * total, and a dependency for that would cost far more than it is worth.
 * All are decorative — the surrounding link carries the accessible name.
 */

const common = {
  width: 18,
  height: 18,
  'aria-hidden': true as const,
  focusable: 'false' as const,
};

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...common}>
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...common}>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...common}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.5h4v11H3v-11ZM9.5 9.5h3.8v1.5a4.2 4.2 0 0 1 3.7-1.9c3 0 4 1.9 4 4.9v6.5h-4v-5.8c0-1.4-.3-2.4-1.7-2.4s-1.9.9-1.9 2.3v5.9h-3.9v-11Z" />
    </svg>
  );
}
