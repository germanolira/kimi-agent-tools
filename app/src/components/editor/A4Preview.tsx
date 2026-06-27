/* eslint-disable */
import { useRef, useEffect, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { type EditorDocument, type EditorBlock } from '@/pages/Editor';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface A4PreviewProps {
  document: EditorDocument;
  activeBlockId: string | null;
}

function MathRenderer({ latex }: { latex: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(latex, ref.current, {
          throwOnError: false,
          displayMode: true,
        });
      } catch {
        ref.current.textContent = latex;
      }
    }
  }, [latex]);
  return <span ref={ref} className="block text-center my-4 font-serif text-[15px]" />;
}

function InlineMath({ latex }: { latex: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(latex, ref.current, {
          throwOnError: false,
          displayMode: false,
        });
      } catch {
        ref.current.textContent = latex;
      }
    }
  }, [latex]);
  return <span ref={ref} className="inline-block px-0.5" />;
}

function parseTextWithMath(text: string): React.ReactNode[] {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={`${i}-${part.slice(1, 10)}`} latex={part.slice(1, -1)} />;
    }
    return <span key={`${i}-${part.slice(0, 10)}`}>{part}</span>;
  });
}

function PlotRenderer({ formula }: { formula: string }) {
  const data = [];
  try {
    const cleanFormula = formula.replace(/y\s*=\s*/g, '').trim();
    const isSinX = cleanFormula === 'sin(x)/x';
    const hasSin = cleanFormula.includes('sin');
    const hasCos = cleanFormula.includes('cos');
    const hasX2 = cleanFormula.includes('x^2');
    const hasX3 = cleanFormula.includes('x^3');
    for (let x = -10; x <= 10; x += 0.5) {
      let y = 0;
      if (isSinX) {
        y = x === 0 ? 1 : Math.sin(x) / x;
      } else if (hasSin) {
        y = Math.sin(x);
      } else if (hasCos) {
        y = Math.cos(x);
      } else if (hasX2) {
        y = x * x;
      } else if (hasX3) {
        y = x * x * x;
      } else {
        y = x;
      }
      data.push({ x: parseFloat(x.toFixed(1)), y: parseFloat(y.toFixed(2)) });
    }
  } catch {
    // Fail-safe
  }

  return (
    <div className="w-full my-4 flex flex-col items-center shrink-0">
      <div className="w-[320px] h-[150px] border border-[#E5E5E5] rounded-xl bg-white p-1 shadow-sm flex items-center justify-center">
        <LineChart width={310} height={140} data={data} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
          <XAxis dataKey="x" tick={{ fontSize: 8, fill: '#888' }} stroke="#E5E5E5" />
          <YAxis tick={{ fontSize: 8, fill: '#888' }} stroke="#E5E5E5" />
          <Tooltip contentStyle={{ fontSize: '9px', borderRadius: '6px' }} />
          <Line type="monotone" dataKey="y" stroke="#0030FC" strokeWidth={1.5} dot={false} />
        </LineChart>
      </div>
      <span className="text-[10px] italic text-[#666] mt-1.5 font-serif">Figure: Graphic representation of y = {formula}</span>
    </div>
  );
}

export default function A4Preview({ document }: A4PreviewProps) {
  const [dateStr, setDateStr] = useState('');
  useEffect(() => {
    setDateStr(new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long' }));
  }, []);

  // Page partitioning algorithm based on approximate line-height and block margins
  const pages: EditorBlock[][] = [];
  let currentPage: EditorBlock[] = [];
  let currentHeight = 130; // initial header offset for Page 1

  document.content.forEach((block) => {
    let blockHeight = 25;
    if (block.type === 'heading') {
      blockHeight = 45;
    } else if (block.type === 'paragraph') {
      blockHeight = Math.ceil(block.content.length / 55) * 18 + 14;
    } else if (block.type === 'equation') {
      blockHeight = 70;
    } else if (block.type === 'list') {
      blockHeight = 22;
    } else if (block.type === 'plot') {
      blockHeight = 180;
    }

    // Maximum height capacity per page (approx 520px of content area)
    if (currentHeight + blockHeight > 510 && currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [block];
      currentHeight = blockHeight; // Reset height counter for the new page
    } else {
      currentPage.push(block);
      currentHeight += blockHeight;
    }
  });
  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  let equationCounter = 0;
  let sectionCounter = 0;

  return (
    <div className="w-[440px] xl:w-[480px] shrink-0 border-l border-[#E5E5E5] bg-[#EEEEEE] overflow-y-auto p-6 flex flex-col items-center gap-6 select-none shadow-inner">
      <div className="text-[10px] font-semibold text-[#888888] uppercase tracking-wider self-start pl-2">
        A4 Compiled PDF Live Preview ({pages.length} {pages.length === 1 ? 'Page' : 'Pages'})
      </div>
      
      {pages.map((pageBlocks, pageIdx) => (
        <div 
          key={pageIdx}
          className="w-[396px] xl:w-[420px] h-[560px] xl:h-[594px] bg-white shadow-md p-8 flex flex-col font-serif text-black relative select-text border border-[#D9D9D9] shrink-0"
        >
          {/* Page Header (Only show from Page 2 onwards) */}
          {pageIdx > 0 && (
            <div className="text-center text-[9px] text-gray-400 font-serif border-b border-gray-100 pb-1 mb-6 flex justify-between select-none">
              <span>{document.title.slice(0, 35)}...</span>
              <span>Section {sectionCounter}</span>
            </div>
          )}

          {/* Academic Header (Only on Page 1) */}
          {pageIdx === 0 && (
            <div className="text-center mb-6">
              <h1 className="text-base font-bold leading-tight mb-1.5 tracking-tight">
                {document.title}
              </h1>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                MathDesk Preprint Series • {dateStr}
              </div>
              <div className="w-12 h-[1px] bg-black mx-auto mt-3.5" />
            </div>
          )}

          {/* Content Area */}
          <div className="text-[11px] leading-relaxed text-justify flex-1 flex flex-col gap-2.5 font-serif overflow-hidden">
            {pageBlocks.map((block) => {
              if (block.type === 'heading') {
                sectionCounter++;
                return (
                  <h2 key={block.id} className="text-[13px] font-bold text-black mt-3 mb-0.5 shrink-0">
                    {sectionCounter}. {block.content}
                  </h2>
                );
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={block.id} className="indent-4 leading-[1.5] shrink-0">
                    {parseTextWithMath(block.content)}
                  </p>
                );
              }
              if (block.type === 'equation') {
                equationCounter++;
                return (
                  <div key={block.id} className="relative flex items-center justify-center my-2 w-full shrink-0">
                    <div className="w-full text-center">
                      <MathRenderer latex={block.content} />
                    </div>
                    <span className="absolute right-0 text-[10px] font-serif select-none">
                      ({equationCounter})
                    </span>
                  </div>
                );
              }
              if (block.type === 'list') {
                return (
                  <div key={block.id} className="flex items-start gap-1.5 pl-3 text-[11px] leading-[1.4] shrink-0">
                    <span className="text-black">•</span>
                    <span>{block.content}</span>
                  </div>
                );
              }
              if (block.type === 'plot') {
                return <PlotRenderer key={block.id} formula={block.content} />;
              }
              return null;
            })}
          </div>

          {/* Page Footer */}
          <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-[9px] text-gray-400 font-serif select-none shrink-0">
            <span>Preprint</span>
            <span>Page {pageIdx + 1} of {pages.length}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
