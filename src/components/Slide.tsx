import type { SlideProps } from '../lib/slide-types';

export function Slide({ children, className = '' }: SlideProps) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 bg-ivory text-forest font-body ${className}`}
    >
      {children}
    </div>
  );
}
