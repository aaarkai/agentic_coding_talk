import React from 'react';

interface BulletItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function BulletItem({ children, icon }: BulletItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1.5 flex-shrink-0 text-olive">
        {icon || <div className="w-2 h-2 rounded-full bg-olive mt-1.5" />}
      </div>
      <span className="text-forest/85 text-lg md:text-xl leading-relaxed">{children}</span>
    </div>
  );
}
