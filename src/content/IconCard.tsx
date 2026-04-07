import type { ReactNode } from 'react';

interface IconCardProps {
  icon?: ReactNode;
  title: string;
  description: ReactNode;
  className?: string;
}

export function IconCard({ icon, title, description, className = '' }: IconCardProps) {
  return (
    <div
      className={`rounded-lg border border-sage/20 p-5 flex flex-col gap-2
                  hover:scale-[1.02] hover:shadow-sm transition-all ${className}`}
    >
      {icon && <div className="text-forest/70">{icon}</div>}
      <h3 className="font-heading text-lg font-semibold text-forest">{title}</h3>
      <p className="text-forest/85 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
