import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

function classesFor(variant: Variant, size: Size, fullWidth?: boolean) {
  return [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
  ]
    .filter(Boolean)
    .join(' ');
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  /** Set for links leaving the site; adds rel and an accessible hint. */
  external?: boolean;
  'aria-label'?: string;
}

/** A link styled as a button. Use for navigation. */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  external,
  ...rest
}: ButtonLinkProps) {
  const className = classesFor(variant, size, fullWidth);

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

/** A real button. Use for actions such as submitting the contact form. */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[classesFor(variant, size, fullWidth), className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
