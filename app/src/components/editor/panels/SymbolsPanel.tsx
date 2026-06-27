/* eslint-disable */
import { useState, useMemo } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { mathSymbols } from '@/lib/mathSymbols';
import SymbolPreview from '@/components/editor/shared/SymbolPreview';
import Sketchpad from '@/components/editor/panels/Sketchpad';

interface SymbolsPanelProps {
  onInsertEquation: (latex: string) => void;
}

export default function SymbolsPanel({ onInsertEquation }: SymbolsPanelProps) {
  const [symbolSearch, setSymbolSearch] = useState('');
  const [isSketching, setIsSketching] = useState(false);

  const filteredSymbols = useMemo(
    () =>
      mathSymbols.filter(
        (s) =>
          s.name.toLowerCase().includes(symbolSearch.toLowerCase()) ||
          s.category.toLowerCase().includes(symbolSearch.toLowerCase()) ||
          s.latex.includes(symbolSearch)
      ),
    [symbolSearch]
  );

  return (
    <div className="w-[340px] shrink-0 border-l border-[#E5E5E5] bg-white flex flex-col">
      <div className="h-12 border-b border-[#E5E5E5] flex items-center px-4 shrink-0">
        <BookOpen size={16} strokeWidth={1.5} className="text-[#0030FC] mr-2" />
        <span className="font-['Inter'] text-sm font-semibold">Symbols</span>
      </div>
      
      {/* Sub-tabs: Palette & Sketchpad */}
      <div className="flex border-b border-[#E5E5E5] text-xs font-semibold shrink-0">
        <button
          onClick={() => setIsSketching(false)}
          className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${!isSketching ? 'border-[#0030FC] text-[#0030FC]' : 'border-transparent text-[#666666] hover:text-black'}`}
        >
          Palette
        </button>
        <button
          onClick={() => setIsSketching(true)}
          className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${isSketching ? 'border-[#0030FC] text-[#0030FC]' : 'border-transparent text-[#666666] hover:text-black'}`}
        >
          Draw to LaTeX
        </button>
      </div>

      {isSketching ? (
        <Sketchpad onInsertEquation={onInsertEquation} />
      ) : (
        <>
          <div className="p-3 border-b border-[#E5E5E5] shrink-0">
            <div className="flex items-center gap-2 bg-[#F8F8F8] rounded-lg px-3 py-2">
              <Search size={14} strokeWidth={1.5} className="text-[#888888]" />
              <input
                type="text"
                value={symbolSearch}
                onChange={(e) => setSymbolSearch(e.target.value)}
                placeholder="Type 'integral' or 'sigma'..."
                className="flex-1 bg-transparent border-none outline-none font-['Inter'] text-sm placeholder:text-[#888888] text-black"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {Object.entries(
              filteredSymbols.reduce((acc, s) => {
                if (!acc[s.category]) acc[s.category] = [];
                acc[s.category].push(s);
                return acc;
              }, {} as Record<string, typeof mathSymbols>)
            ).map(([category, symbols]) => (
              <div key={category} className="mb-3">
                <span className="font-['Inter'] text-[10px] font-semibold text-[#888888] uppercase tracking-wider px-2">
                  {category}
                </span>
                <div className="grid grid-cols-4 gap-1 mt-1">
                  {symbols.slice(0, 8).map((symbol) => (
                    <button
                      key={symbol.id}
                      onClick={() => onInsertEquation(symbol.latex)}
                      className="flex flex-col items-center p-2 rounded-lg hover:bg-[#EEF4FF] transition-colors group"
                      title={`${symbol.name} — ${symbol.latex}`}
                    >
                      <SymbolPreview latex={symbol.previewLatex || symbol.latex} />
                      <span className="font-['Inter'] text-[9px] text-[#888888] mt-1 truncate w-full text-center group-hover:text-[#0030FC]">
                        {symbol.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
