import type { ReactNode } from 'react';

interface BulletListProps {
  items: string[] | ReactNode[];
  ordered?: boolean;
  className?: string;
}

export function BulletList({ items, ordered = false, className = '' }: BulletListProps) {
  const listStyle = ordered ? 'list-decimal' : 'list-none';

  return (
    <ul className={`${listStyle} flex flex-col gap-3 ${className}`}>
      {items.map((bulletItem, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-lg text-forest/85"
        >
          {!ordered && (
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
          )}
          {typeof bulletItem === 'string' ? <span>{bulletItem}</span> : bulletItem}
        </li>
      ))}
    </ul>
  );
}
