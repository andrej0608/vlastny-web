import type { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  /** `narrow` is for long-form reading columns such as the About section. */
  width?: 'default' | 'narrow';
  className?: string;
}

export function Container({
  children,
  width = 'default',
  className,
}: ContainerProps) {
  const classes = [styles.container, width === 'narrow' && styles.narrow, className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
