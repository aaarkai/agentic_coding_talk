import type { ReactNode } from 'react';

interface ChecklistItem {
  label: ReactNode;
}

interface ChecklistProps {
  items: ChecklistItem[];
  className?: string;
}

export function Checklist({ items, className = '' }: ChecklistProps) {
  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="flex items-center justify-center w-6 h-6 rounded border-2 border-olive text-olive shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <span className="text-forest/85">
            <span className="text-olive font-semibold mr-2">Step {index + 1}.</span>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
