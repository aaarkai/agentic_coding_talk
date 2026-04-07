import { memo } from 'react';
import { useSlide } from '../components/SlideProvider';

export const ProgressBar = memo(function ProgressBar() {
  const { currentIndex, totalSlides } = useSlide();
  const progress = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-0.5 bg-sage/20">
        <div
          className="h-full bg-olive transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute top-2 right-4 text-xs text-sage font-body">
        {currentIndex + 1} / {totalSlides}
      </div>
    </div>
  );
});
