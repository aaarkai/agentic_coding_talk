import React from 'react';

interface SectionHeaderProps {
  icon?: React.ReactNode;
  label: string;
  variant?: 'forest' | 'amber' | 'emerald' | 'blue' | 'rose' | 'purple';
}

const variantStyles: Record<NonNullable<SectionHeaderProps['variant']>, string> = {
  forest: 'border-forest/30 text-forest bg-forest/[0.06]',
  amber: 'border-amber-600/40 text-amber-700 bg-amber-500/[0.08]',
  emerald: 'border-emerald-600/40 text-emerald-700 bg-emerald-500/[0.08]',
  blue: 'border-blue-600/40 text-blue-700 bg-blue-500/[0.08]',
  rose: 'border-rose-600/40 text-rose-700 bg-rose-500/[0.08]',
  purple: 'border-purple-600/40 text-purple-700 bg-purple-500/[0.08]',
};

export function SectionHeader({ icon, label, variant = 'forest' }: SectionHeaderProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-medium tracking-wide uppercase border ${variantStyles[variant]}`}>
      {icon}
      {label}
    </div>
  );
}
