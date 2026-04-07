import { memo } from 'react';
import { useSlide } from '../components/SlideProvider';

export const NavControls = memo(function NavControls() {
  const { prev, next, isFirst, isLast } = useSlide();

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2 z-50">
      <button
        onClick={prev}
        disabled={isFirst}
        className="p-2 rounded-lg border border-sage/40 text-forest
                   disabled:opacity-30 disabled:cursor-not-allowed
                   hover:bg-forest/5 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        disabled={isLast}
        className="p-2 rounded-lg border border-sage/40 text-forest
                   disabled:opacity-30 disabled:cursor-not-allowed
                   hover:bg-forest/5 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
});
