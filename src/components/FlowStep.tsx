import { ArrowRight } from 'lucide-react';

interface FlowStepProps {
  label: string;
  active?: boolean;
}

export function FlowStep({ label, active = false }: FlowStepProps) {
  return (
    <div className={`px-5 py-2.5 rounded-lg text-base font-medium border transition-all ${
      active
        ? 'bg-forest text-ivory border-forest shadow-sm'
        : 'bg-forest/[0.04] text-forest/70 border-forest/20'
    }`}>
      {label}
    </div>
  );
}

export function FlowArrow() {
  return <ArrowRight size={20} className="text-sage flex-shrink-0" />;
}
