import type { ReactNode } from 'react';

interface TwoColumnProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}

export function TwoColumn({ left, right, className = '' }: TwoColumnProps) {
  return (
    <div className={`grid grid-cols-2 gap-8 w-full ${className}`}>
      <div className="flex flex-col">{left}</div>
      <div className="flex flex-col">{right}</div>
    </div>
  );
}
