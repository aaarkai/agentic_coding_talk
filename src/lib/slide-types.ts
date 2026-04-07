import type { ReactNode } from 'react';

export interface SlideProps {
  children: ReactNode;
  className?: string;
}

export interface SlideDefinition {
  id: string;
  component: React.ComponentType;
}

export interface SlideContextType {
  currentIndex: number;
  totalSlides: number;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  isFirst: boolean;
  isLast: boolean;
}
