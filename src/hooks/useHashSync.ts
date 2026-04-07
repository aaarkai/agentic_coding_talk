import { useEffect, useRef } from 'react';
import { useSlide } from '../components/SlideProvider';

const HASH_PREFIX = 'slide-';

function parseHash(): number | null {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith(HASH_PREFIX)) {
    const index = parseInt(hash.slice(HASH_PREFIX.length), 10) - 1;
    if (!isNaN(index) && index >= 0) {
      return index;
    }
  }
  return null;
}

export function useHashSync() {
  const { currentIndex, totalSlides, goTo } = useSlide();
  const isInitialized = useRef(false);

  // Read initial hash on mount (before first render settles)
  useEffect(() => {
    const initialIndex = parseHash();
    if (initialIndex !== null && initialIndex < totalSlides) {
      goTo(initialIndex);
    }
    isInitialized.current = true;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync hash -> slide on hashchange
  useEffect(() => {
    function onHashChange() {
      const index = parseHash();
      if (index !== null && index < totalSlides) {
        goTo(index);
      }
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [goTo, totalSlides]);

  // Sync slide -> hash
  useEffect(() => {
    if (!isInitialized.current) return;
    const hash = `${HASH_PREFIX}${currentIndex + 1}`;
    if (window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, '', `#${hash}`);
    }
  }, [currentIndex]);
}
