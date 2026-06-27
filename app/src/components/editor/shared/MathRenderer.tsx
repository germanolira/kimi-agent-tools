/* eslint-disable */
import { useRef, useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function MathRenderer({ latex }: { latex: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(latex, ref.current, { throwOnError: false, displayMode: true });
      } catch {
        ref.current.textContent = latex;
      }
    }
  }, [latex]);
  return <span ref={ref} className="block py-2" />;
}
