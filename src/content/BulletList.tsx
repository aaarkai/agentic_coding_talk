import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';

interface BulletListProps {
  items: string[] | ReactNode[];
  ordered?: boolean;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
};

export function BulletList({ items, ordered = false, className = '' }: BulletListProps) {
  const listStyle = ordered ? 'list-decimal' : 'list-none';

  return (
    <motion.ul
      className={`${listStyle} flex flex-col gap-3 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {items.map((bulletItem, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex items-start gap-3 text-lg text-forest/85"
        >
          {!ordered && (
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
          )}
          {typeof bulletItem === 'string' ? <span>{bulletItem}</span> : bulletItem}
        </motion.li>
      ))}
    </motion.ul>
  );
}
