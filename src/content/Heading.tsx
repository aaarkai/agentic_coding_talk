import type { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

const levelStyles: Record<number, string> = {
  1: 'font-heading text-5xl font-bold text-forest',
  2: 'font-heading text-3xl font-bold text-forest',
  3: 'font-heading text-2xl font-semibold text-forest',
};

export function Heading({ children, level = 2, className = '' }: HeadingProps) {
  const styles = levelStyles[level];

  if (level === 1) {
    return <h1 className={`${styles} ${className}`}>{children}</h1>;
  }
  if (level === 3) {
    return <h3 className={`${styles} ${className}`}>{children}</h3>;
  }
  return <h2 className={`${styles} ${className}`}>{children}</h2>;
}
