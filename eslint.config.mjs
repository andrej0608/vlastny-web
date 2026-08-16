// eslint-config-next v16 publishes ready-made flat-config arrays, so they are
// spread directly - no FlatCompat bridge is needed.
import coreWebVitals from 'eslint-config-next/core-web-vitals';

/**
 * `core-web-vitals` bundles the Next.js, React, React Hooks and jsx-a11y rule
 * sets: correct <Image> usage, no unoptimised <img>, valid anchors, accessible
 * alt text, and so on.
 */
const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...coreWebVitals,
];

export default config;
