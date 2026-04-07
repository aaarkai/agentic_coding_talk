import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SlideTransitionProps {
  children: ReactNode;
  slideKey: string;
}

export function SlideTransition({ children, slideKey }: SlideTransitionProps) {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={slideKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="w-full h-full flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
