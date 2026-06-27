/* eslint-disable */
import React from 'react';
import InlineMath from './InlineMath';

export function parseInlineMath(text: string): React.ReactNode[] {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const latex = part.slice(1, -1);
      return <InlineMath key={`math-${latex.slice(0, 10)}-${i}`} latex={latex} />;
    }
    return <span key={`text-${i}-${part.slice(0, 10)}`}>{part}</span>;
  });
}
