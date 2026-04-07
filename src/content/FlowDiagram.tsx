import type { ReactNode } from 'react';

interface FlowStep {
  label: ReactNode;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  className?: string;
}

export function FlowDiagram({ steps, className = '' }: FlowDiagramProps) {
  return (
    <div className={`flex flex-col items-center gap-3 w-full ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          <div className="rounded-lg border border-sage/30 bg-forest/[0.03] px-6 py-3 text-center text-forest/85 font-body">
            {step.label}
          </div>
          {index < steps.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sage/50 my-1"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
