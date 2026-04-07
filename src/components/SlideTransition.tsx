import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SlideTransitionProps {
  children: ReactNode;
  direction: number;
  slideKey: string;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

export function SlideTransition({ children, direction, slideKey }: SlideTransitionProps) {
  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.35,
          ease: 'easeInOut',
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
