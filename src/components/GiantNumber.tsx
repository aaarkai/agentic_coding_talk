interface GiantNumberProps {
  number: string;
  label?: string;
  accent?: 'forest' | 'amber' | 'emerald' | 'rose';
  className?: string;
}

const accentColors: Record<NonNullable<GiantNumberProps['accent']>, string> = {
  forest: 'text-forest',
  amber: 'text-amber-600',
  emerald: 'text-emerald-700',
  rose: 'text-rose-600',
};

export function GiantNumber({ number, label, accent = 'forest', className = '' }: GiantNumberProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className={`text-7xl md:text-9xl font-bold ${accentColors[accent]} font-heading`}>
        {number}
      </span>
      {label && (
        <span className="text-xl md:text-2xl text-sage mt-2">{label}</span>
      )}
    </div>
  );
}
