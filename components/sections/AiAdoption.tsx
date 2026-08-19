'use client';

import { useEffect, useId, useRef } from 'react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/content/translations';
import {
  AXIS_MAX,
  aiAdoptionData,
  formatPercentage,
} from '@/content/ai-adoption';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import styles from './AiAdoption.module.css';

interface AiAdoptionProps {
  locale: Locale;
  dict: Dictionary;
}

/** Gridline values, from the top of the axis down to zero. */
const GRID_STEPS = [25, 20, 15, 10, 5, 0];

/**
 * Adoption chart.
 *
 * Built from plain SVG and positioned HTML rather than a charting library:
 * one line and four points do not justify the bundle, and this way the labels
 * are real text styled with the site's own tokens.
 *
 * Layout split
 * ------------
 * The SVG holds only the line and the area beneath it, stretched to the plot
 * box with `preserveAspectRatio="none"` and kept crisp with a non-scaling
 * stroke. Every label, gridline and point is HTML positioned in percentages,
 * so text scales with the type scale instead of with the drawing — the usual
 * reason charts become unreadable on a phone.
 *
 * Honesty note
 * ------------
 * Points are placed by their actual year, not evenly spaced. The gap between
 * 2021 and 2023 is twice the others, and flattening that would overstate how
 * steady the climb was.
 */
export function AiAdoption({ locale, dict }: AiAdoptionProps) {
  const t = dict.aiAdoption;
  const chartRef = useRef<HTMLDivElement>(null);
  const gradientId = useId();

  const firstYear = aiAdoptionData[0].year;
  const lastYear = aiAdoptionData[aiAdoptionData.length - 1].year;
  const yearSpan = lastYear - firstYear;

  /** Horizontal position of a year, 0–100% across the plot box. */
  const xFor = (year: number) => ((year - firstYear) / yearSpan) * 100;
  /** Vertical position of a value, 0–100% up from the baseline. */
  const yFor = (percentage: number) => (percentage / AXIS_MAX) * 100;

  const points = aiAdoptionData.map((point) => ({
    ...point,
    x: xFor(point.year),
    y: yFor(point.percentage),
  }));

  // SVG uses a top-down y axis, so it is inverted against the HTML positions.
  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${100 - p.y}`)
    .join(' ');
  const areaPath = `${linePath} L 100 100 L 0 100 Z`;

  useEffect(() => {
    const node = chartRef.current;
    if (!node) return;

    /* Toggling a class rather than React state: the reveal is a one-way visual
       side effect with no bearing on what the component renders, so there is
       no reason to re-render the whole chart for it. */
    const reveal = () => node.classList.add(styles.revealed);

    if (!('IntersectionObserver' in window)) {
      reveal();
      return;
    }

    // Drawn only once it is actually on screen, so the reveal is seen rather
    // than finishing silently above the fold.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id={t.id}
      tone="subtle"
      eyebrow={t.eyebrow}
      heading={t.headline}
      intro={t.intro}
    >
      {/* The figure arrives one step behind the heading block. The line
          drawing inside it is offset by the same amount in CSS, so the two
          run in sequence instead of over the top of each other. */}
      <Reveal as="figure" className={styles.figure} delay={1}>
        <div
          ref={chartRef}
          className={styles.chart}
          role="img"
          aria-label={t.chartLabel}
        >
          <div className={styles.plotArea}>
            {/* Gridline and axis value are siblings, not nested: the value
                sits on the card, not on the line it labels. */}
            {GRID_STEPS.map((step) => (
              <div key={step}>
                <div
                  className={styles.gridline}
                  style={{ bottom: `${yFor(step)}%` }}
                />
                <span
                  className={styles.gridValue}
                  style={{ bottom: `${yFor(step)}%` }}
                >
                  {step}%
                </span>
              </div>
            ))}

            <div className={styles.plot}>
              <svg
                className={styles.svg}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(59 130 246 / 0.42)" />
                    <stop offset="100%" stopColor="rgb(59 130 246 / 0)" />
                  </linearGradient>
                </defs>

                <path
                  className={styles.area}
                  d={areaPath}
                  fill={`url(#${gradientId})`}
                />
                <path
                  className={styles.line}
                  d={linePath}
                  fill="none"
                  stroke="var(--color-accent-400)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  /* Normalises the dash animation regardless of path length. */
                  pathLength={1}
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Points and their values are HTML so they stay perfectly round
                  and keep readable type at any width. */}
              {points.map((point, index) => (
                <div
                  key={point.year}
                  className={styles.point}
                  style={
                    {
                      left: `${point.x}%`,
                      bottom: `${point.y}%`,
                      '--reveal-delay': `${900 + index * 130}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span className={styles.dot} />
                  <span className={styles.value}>
                    {formatPercentage(point.percentage, locale)}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.xAxis}>
            {points.map((point) => (
              <span
                key={point.year}
                className={styles.year}
                style={{ left: `${point.x}%` }}
              >
                {point.year}
              </span>
            ))}
          </div>

          <p className={styles.axisLabel}>{t.axisLabel}</p>
        </div>

        {/* The same figures as text. A chart described only by an aria-label
            cannot be read value by value; this table can. */}
        <div className="visually-hidden">
          <table>
            <caption>{t.chartTableHeading}</caption>
            <thead>
              <tr>
                <th scope="col">{t.yearColumn}</th>
                <th scope="col">{t.shareColumn}</th>
              </tr>
            </thead>
            <tbody>
              {aiAdoptionData.map((point) => (
                <tr key={point.year}>
                  <th scope="row">{point.year}</th>
                  <td>{formatPercentage(point.percentage, locale)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <figcaption className={styles.source}>{t.source}</figcaption>
      </Reveal>
    </Section>
  );
}
