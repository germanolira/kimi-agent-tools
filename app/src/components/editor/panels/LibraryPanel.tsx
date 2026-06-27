/* eslint-disable */
import { useState, useMemo, useCallback } from 'react';
import { Search, BookOpen, FileText, Quote } from 'lucide-react';
import { type LibrarySource } from '@/pages/Editor';

interface LibraryPanelProps {
  librarySources: LibrarySource[];
  onAddSource: (source: LibrarySource) => void;
  onCiteSource: (source: LibrarySource) => void;
}

export default function LibraryPanel({ librarySources, onAddSource, onCiteSource }: LibraryPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // DOI extraction states
  const [doiInput, setDoiInput] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedMsg, setExtractedMsg] = useState<string | null>(null);

  const filteredSources = useMemo(
    () =>
      librarySources.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.authors.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [librarySources, searchQuery]
  );

  const handleExtractDoi = useCallback(() => {
    if (!doiInput.trim()) return;
    setIsExtracting(true);
    setExtractedMsg(null);

    setTimeout(() => {
      setIsExtracting(false);
      const input = doiInput.trim();
      let mockSource: LibrarySource;

      if (input.includes('10.1038')) {
        mockSource = {
          id: `s-${Date.now()}`,
          title: 'Structure of the mammalian zinc transporter YiiP',
          authors: 'Lu, M., Fu, D.',
          journal: 'Nature',
          year: '2007',
          impactFactor: 42.7,
          openAccess: true,
        };
      } else if (input.includes('arXiv') || input.includes('2303.')) {
        mockSource = {
          id: `s-${Date.now()}`,
          title: 'GPT-4 Technical Report',
          authors: 'OpenAI, Achiam et al.',
          journal: 'arXiv preprint arXiv:2303.08774',
          year: '2023',
          impactFactor: 18.2,
          openAccess: true,
        };
      } else {
        const formatted = input.replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
        const words = formatted.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
        const title = words.length > 0 ? words.join(' ') : 'Scientific Research Article';
        mockSource = {
          id: `s-${Date.now()}`,
          title: `Synthesis and evaluation of ${title}`,
          authors: 'Mendel, G., Curie, M.',
          journal: 'Journal of Scientific Innovation',
          year: '2025',
          impactFactor: 8.4,
          openAccess: false,
        };
      }
      onAddSource(mockSource);
      setExtractedMsg(`Added "${mockSource.title.slice(0, 24)}..."`);
      setDoiInput('');
    }, 1200);
  }, [doiInput, onAddSource]);

  return (
    <div className="w-[340px] shrink-0 border-l border-[#E5E5E5] bg-white flex flex-col">
      <div className="h-12 border-b border-[#E5E5E5] flex items-center px-4">
        <BookOpen size={16} strokeWidth={1.5} className="text-[#0030FC] mr-2" />
        <span className="font-['Inter'] text-sm font-semibold">Library</span>
        <span className="ml-auto font-['Inter'] text-xs text-[#888888]">{librarySources.length} sources</span>
      </div>
      <div className="p-3 border-b border-[#E5E5E5] bg-[#FAFAFA] flex flex-col gap-1.5">
        <span className="text-[10px] uppercase font-semibold text-[#888888] tracking-wider block">
          Add Reference (DOI / arXiv ID)
        </span>
        <div className="flex gap-1.5">
          <input
            type="text"
            value={doiInput}
            onChange={(e) => setDoiInput(e.target.value)}
            placeholder="e.g. 10.1038/nature12345 or arXiv:2303.08774"
            className="flex-1 bg-white border border-[#E5E5E5] rounded-lg px-2.5 py-1 text-xs outline-none focus:border-[#0030FC] text-black"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleExtractDoi();
            }}
          />
          <button
            onClick={handleExtractDoi}
            disabled={isExtracting || !doiInput.trim()}
            className="px-3 py-1 bg-[#0030FC] text-white rounded-lg text-xs font-semibold hover:bg-[#0024DB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            {isExtracting ? 'Extracting...' : 'Extract'}
          </button>
        </div>
        {extractedMsg && (
          <span className="text-[10px] text-green-600 font-medium animate-in fade-in duration-200">
            {extractedMsg}
          </span>
        )}
      </div>
      <div className="p-3 border-b border-[#E5E5E5]">
        <div className="flex items-center gap-2 bg-[#F8F8F8] rounded-lg px-3 py-2">
          <Search size={14} strokeWidth={1.5} className="text-[#888888]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sources..."
            className="flex-1 bg-transparent border-none outline-none font-['Inter'] text-sm placeholder:text-[#888888] text-black"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredSources.map((source) => (
          <div
            key={source.id}
            className="p-3 border-b border-[#F5F5F5] hover:bg-[#FAFAFA] transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="px-1.5 py-0.5 bg-[#EEF4FF] text-[#0030FC] rounded text-[10px] font-semibold uppercase">
                Article
              </span>
              <span className="font-['Inter'] text-[10px] text-[#888888]">IF {source.impactFactor.toFixed(2)}</span>
              {source.openAccess && (
                <span className="px-1.5 py-0.5 bg-green-50 text-green-600 rounded text-[10px] font-semibold uppercase">
                  Open Access
                </span>
              )}
            </div>
            <h4 className="font-['Inter'] text-[13px] font-medium text-black leading-snug mb-1">
              {source.title}
            </h4>
            <p className="font-['Inter'] text-[11px] text-[#888888]">
              {source.authors} • {source.journal} • {source.year}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => onCiteSource(source)}
                className="flex items-center gap-1 px-2 py-1 bg-[#0030FC] text-white rounded-md text-[11px] font-medium hover:bg-[#0024DB] transition-colors"
              >
                <Quote size={10} strokeWidth={2} />
                Cite
              </button>
              <button className="flex items-center gap-1 px-2 py-1 border border-[#E5E5E5] rounded-md text-[11px] font-medium hover:bg-[#F8F8F8] transition-colors">
                <FileText size={10} strokeWidth={1.5} />
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
