/**
 * AI adoption among EU enterprises with 10 or more persons employed.
 *
 * Source: Eurostat, "Artificial intelligence use by enterprises"
 * (dataset isoc_eb_ai). These are the published shares of enterprises using at
 * least one AI technology.
 *
 * Only add a year here once the figure has actually been published — the chart
 * and the surrounding copy both read from this array, so an invented value
 * would end up presented as fact in two places at once.
 */
export interface AdoptionPoint {
  year: number;
  /** Percentage of enterprises, e.g. 20 means 20%. */
  percentage: number;
}

export const aiAdoptionData: AdoptionPoint[] = [
  { year: 2021, percentage: 7.7 },
  { year: 2023, percentage: 8.1 },
  { year: 2024, percentage: 13.5 },
  { year: 2025, percentage: 20.0 },
];

/** Highest value on the y-axis. A little headroom above the largest point. */
export const AXIS_MAX = 25;

/**
 * Formats a value for display. Dutch uses a comma as the decimal separator,
 * and whole numbers are shown without a redundant ",0".
 */
export function formatPercentage(value: number, locale: string): string {
  const isWhole = Number.isInteger(value);
  return new Intl.NumberFormat(locale === 'nl' ? 'nl-BE' : 'en-GB', {
    minimumFractionDigits: isWhole ? 0 : 1,
    maximumFractionDigits: 1,
  }).format(value);
}
