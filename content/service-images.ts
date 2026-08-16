/**
 * Illustration for each service card.
 *
 * Keyed by the service `id` used in the language files, so the picture and the
 * copy stay together without the translations having to know about file paths.
 *
 * To swap an illustration, drop a new file into `public/images/services/` and
 * point the path here. Keep the 4:3 ratio — the card reserves that space, so a
 * different ratio would be cropped.
 */
export interface ServiceImage {
  src: string;
  width: number;
  height: number;
}

export const serviceImages: Record<string, ServiceImage> = {
  'websites-op-maat': {
    src: '/images/services/custom-websites.webp',
    width: 1200,
    height: 900,
  },
  'website-redesign': {
    src: '/images/services/website-redesign.webp',
    width: 1200,
    height: 900,
  },
  bedrijfsautomatisering: {
    src: '/images/services/business-automation.webp',
    width: 1200,
    height: 900,
  },
  onderhoud: {
    src: '/images/services/maintenance.webp',
    width: 1200,
    height: 900,
  },
};
