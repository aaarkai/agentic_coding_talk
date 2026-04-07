import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  accent?: 'forest' | 'amber' | 'emerald' | 'blue' | 'rose' | 'purple' | 'olive';
  className?: string;
}

const accentStyles: Record<NonNullable<CardProps['accent']>, { border: string; iconBg: string; title: string }> = {
  forest: { border: 'border-forest/20', iconBg: 'bg-forest/[0.08] text-forest', title: 'text-forest' },
  amber: { border: 'border-amber-600/30', iconBg: 'bg-amber-500/[0.10] text-amber-700', title: 'text-amber-800' },
  emerald: { border: 'border-emerald-600/30', iconBg: 'bg-emerald-500/[0.10] text-emerald-700', title: 'text-emerald-800' },
  blue: { border: 'border-blue-600/30', iconBg: 'bg-blue-500/[0.10] text-blue-700', title: 'text-blue-800' },
  rose: { border: 'border-rose-600/30', iconBg: 'bg-rose-500/[0.10] text-rose-700', title: 'text-rose-800' },
  purple: { border: 'border-purple-600/30', iconBg: 'bg-purple-500/[0.10] text-purple-700', title: 'text-purple-800' },
  olive: { border: 'border-olive/30', iconBg: 'bg-olive/[0.12] text-forest', title: 'text-forest' },
};

export function Card({ icon, title, desc, accent = 'forest', className = '' }: CardProps) {
  const styles = accentStyles[accent];
  return (
    <div className={`p-6 md:p-7 rounded-2xl border ${styles.border} bg-white/60 flex flex-col gap-3 transition-all hover:shadow-md ${className}`}>
      {icon && (
        <div className={`w-11 h-11 rounded-xl ${styles.iconBg} flex items-center justify-center`}>
          {icon}
        </div>
      )}
      <h3 className={`text-lg md:text-xl font-semibold ${styles.title}`}>{title}</h3>
      <p className="text-sage text-base leading-relaxed">{desc}</p>
    </div>
  );
}
