import type { ReactNode } from 'react';

interface StatProps {
  value: string;
  label: ReactNode;
  className?: string;
}

export function Stat({ value, label, className = '' }: StatProps) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <span className="font-heading text-4xl font-bold text-olive">{value}</span>
      <span className="text-sm text-sage">{label}</span>
    </div>
  );
}
