import type { ReactNode } from 'react';

type CalloutType = 'info' | 'warning' | 'success';

interface CalloutProps {
  children: ReactNode;
  type?: CalloutType;
  className?: string;
}

const typeStyles: Record<CalloutType, string> = {
  info: 'border-olive',
  warning: 'border-orange-400',
  success: 'border-forest',
};

export function Callout({ children, type = 'info', className = '' }: CalloutProps) {
  return (
    <div
      className={`border-l-4 ${typeStyles[type]} bg-sage/5 p-4 italic text-forest/85 ${className}`}
    >
      {children}
    </div>
  );
}
