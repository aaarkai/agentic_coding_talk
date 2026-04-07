import type { ReactNode } from 'react';

interface ComparisonRow {
  left: ReactNode;
  right: ReactNode;
}

interface ComparisonTableProps {
  headerLeft: string;
  headerRight: string;
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({ headerLeft, headerRight, rows, className = '' }: ComparisonTableProps) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full border-collapse text-base">
        <thead>
          <tr className="border-b border-sage/40">
            <th className="py-3 px-4 text-left font-heading font-semibold text-forest w-1/2">
              {headerLeft}
            </th>
            <th className="py-3 px-4 text-left font-heading font-semibold text-forest w-1/2">
              {headerRight}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-sage/20">
              <td className="py-3 px-4 text-lg text-forest/85 align-top">{row.left}</td>
              <td className="py-3 px-4 text-lg text-forest/85 align-top">{row.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
