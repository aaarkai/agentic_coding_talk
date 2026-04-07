import { useState, useEffect, useRef } from 'react';
import type { BundledLanguage } from 'shiki';

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
  className?: string;
}

export function CodeBlock({ code, lang = 'typescript', className = '' }: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let mounted = true;

    async function highlight() {
      setLoading(true);
      try {
        const { codeToHtml } = await import('shiki');
        const html = await codeToHtml(code, {
          lang,
          theme: 'github-light',
        });
        if (mounted) {
          // Extract inner HTML from the wrapped <pre><code>...</code></pre>
          const temp = document.createElement('div');
          temp.innerHTML = html;
          const inner = temp.querySelector('code');
          setHighlighted(inner?.innerHTML ?? code);
          setLoading(false);
        }
      } catch {
        if (mounted) {
          setHighlighted(code);
          setLoading(false);
        }
      }
    }

    highlight();
    return () => { mounted = false; };
  }, [code, lang]);

  return (
    <pre
      ref={containerRef}
      className={`overflow-x-auto rounded-lg bg-forest/[0.04] p-4 text-sm font-mono leading-relaxed text-forest ${className}`}
    >
      {loading ? (
        <code className="text-sage">{code}</code>
      ) : (
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      )}
    </pre>
  );
}
