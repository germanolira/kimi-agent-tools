import { useEffect, useRef } from 'react';
import Splitting from 'splitting';

interface DimensionalHeadlineProps {
  text: string;
}

export default function DimensionalHeadline({ text }: DimensionalHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const hasSplit = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasSplit.current) return;

    // Store original text for cleanup
    const originalText = el.textContent || '';

    Splitting({
      target: el,
      by: 'chars',
    });

    hasSplit.current = true;

    return () => {
      // Restore original text on unmount
      if (el) {
        el.textContent = originalText;
        hasSplit.current = false;
      }
    };
  }, []);

  return (
    <h1 ref={containerRef} className="dimensional-headline text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {text}
    </h1>
  );
}
