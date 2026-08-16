/**
 * Portrait shown in the About section.
 *
 * To replace it: drop a new file into `public/images/about/` and update `src`
 * plus the intrinsic `width`/`height` below. A roughly 4:5 portrait crop works
 * best — the frame reserves that ratio, so a very different shape would be
 * cropped at the top and bottom.
 */
export const portraitImage = {
  src: '/images/about/andrej-juriga.webp',
  width: 900,
  height: 1125,
  /**
   * Describes the person, not the composition. Kept language-neutral: it is
   * a name and a plain description, which reads correctly in both Dutch and
   * English.
   */
  alt: 'Andrej Juriga',
} as const;
