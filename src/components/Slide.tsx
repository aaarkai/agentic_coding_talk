import type { SlideProps } from '../lib/slide-types';

export function Slide({ children, className = '' }: SlideProps) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center px-12 py-12 ${className}`}
    >
      {children}
    </div>
  );
}
