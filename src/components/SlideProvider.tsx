import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import type { SlideContextType, SlideDefinition } from '../lib/slide-types';

interface SlideProviderProps {
  children: ReactNode;
  slides: SlideDefinition[];
}

const SlideContext = createContext<SlideContextType | null>(null);

export function useSlide() {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlide must be used within a SlideProvider');
  }
  return context;
}

export function SlideProvider({ children, slides }: SlideProviderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentIndex(index);
      }
    },
    [totalSlides],
  );

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSlides - 1;

  const value = useMemo<SlideContextType>(
    () => ({
      currentIndex,
      totalSlides,
      goTo,
      next,
      prev,
      isFirst,
      isLast,
    }),
    [currentIndex, totalSlides, goTo, next, prev, isFirst, isLast],
  );

  return (
    <SlideContext.Provider value={value}>
      {children}
    </SlideContext.Provider>
  );
}
