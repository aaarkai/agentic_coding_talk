import type { ReactNode } from 'react';

interface QuoteProps {
  children: ReactNode;
  author?: string;
  source?: string;
  className?: string;
}

export function Quote({ children, author, source, className = '' }: QuoteProps) {
  return (
    <blockquote className={`flex flex-col gap-2 pl-5 border-l-4 border-olive ${className}`}>
      <p className="text-lg text-forest/85 italic leading-relaxed">
        &ldquo;{children}&rdquo;
      </p>
      {(author || source) && (
        <cite className="text-sm text-sage not-italic">
          {author}
          {source && <span> &mdash; {source}</span>}
        </cite>
      )}
    </blockquote>
  );
}
