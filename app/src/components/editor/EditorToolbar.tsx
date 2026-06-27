import {
  Undo2, Redo2, Bold, Italic, Underline,
  Library, Sigma, Users, Share2,
  Download, ChevronDown, FileText, Plus,
  Target, Split
} from 'lucide-react';
import { type RightPanelTab } from '@/pages/Editor';

interface EditorToolbarProps {
  docTitle: string;
  onUpdateTitle: (title: string) => void;
  onExport: (format: 'latex' | 'pdf') => void;
  wordCount: number;
  rightPanel: RightPanelTab;
  onTogglePanel: (tab: RightPanelTab) => void;
  isSplitView: boolean;
  onToggleSplitView: () => void;
  isFocusMode: boolean;
  onToggleFocusMode: () => void;
}

export default function EditorToolbar({
  docTitle, onUpdateTitle, onExport, wordCount, rightPanel, onTogglePanel,
  isSplitView, onToggleSplitView, isFocusMode, onToggleFocusMode
}: EditorToolbarProps) {
  return (
    <div className="h-14 border-b border-[#E5E5E5] bg-white flex items-center px-4 shrink-0 z-10">
      {/* Left: Logo + File */}
      <div className="flex items-center gap-3 w-[280px] shrink-0">
        <a href="/" className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="8" />
            <line x1="9" y1="1" x2="9" y2="17" />
            <line x1="1" y1="9" x2="17" y2="9" />
            <line x1="3.5" y1="3.5" x2="14.5" y2="14.5" />
            <line x1="14.5" y1="3.5" x2="3.5" y2="14.5" />
          </svg>
          <span className="font-['Playfair_Display'] text-lg font-normal">MathDesk</span>
        </a>
        <div className="w-px h-6 bg-[#E5E5E5]" />
        <input
          type="text"
          aria-label="Document Title"
          value={docTitle}
          onChange={(e) => onUpdateTitle(e.target.value)}
          className="font-['Inter'] text-sm font-medium text-black bg-transparent border-none outline-none flex-1 min-w-0"
        />
      </div>

      {/* Center: Formatting */}
      <div className="flex-1 flex items-center justify-center gap-1">
        <div className="flex items-center bg-[#F8F8F8] rounded-lg p-0.5">
          <button type="button" className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all duration-150 hover:scale-105 active:scale-95 text-[#666666] hover:text-black" title="Undo">
            <Undo2 size={16} strokeWidth={1.5} />
          </button>
          <button type="button" className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all duration-150 hover:scale-105 active:scale-95 text-[#666666] hover:text-black" title="Redo">
            <Redo2 size={16} strokeWidth={1.5} />
          </button>
          <div className="w-px h-4 bg-[#E5E5E5] mx-1" />
          <button type="button" className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all duration-150 hover:scale-105 active:scale-95 text-[#666666] hover:text-black" title="Bold">
            <Bold size={16} strokeWidth={1.5} />
          </button>
          <button type="button" className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all duration-150 hover:scale-105 active:scale-95 text-[#666666] hover:text-black" title="Italic">
            <Italic size={16} strokeWidth={1.5} />
          </button>
          <button type="button" className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all duration-150 hover:scale-105 active:scale-95 text-[#666666] hover:text-black" title="Underline">
            <Underline size={16} strokeWidth={1.5} />
          </button>
          <div className="w-px h-4 bg-[#E5E5E5] mx-1" />
          <button type="button" className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all duration-150 hover:scale-105 active:scale-95 flex items-center gap-1 text-[#666666] hover:text-black" title="Insert">
            <Plus size={16} strokeWidth={1.5} />
            <span className="text-xs font-medium">Insert</span>
          </button>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1 w-[380px] shrink-0 justify-end">
        <span className="font-['Inter'] text-xs text-[#888888] mr-2">{wordCount.toLocaleString()} words</span>
        <div className="w-px h-4 bg-[#E5E5E5] mx-1" />

        <button type="button"
          onClick={onToggleFocusMode}
          className={`p-2 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 ${isFocusMode ? 'bg-[#EEF4FF] text-[#0030FC] shadow-sm' : 'hover:bg-[#F8F8F8] text-[#666666] hover:text-black'}`}
          title="Focus Mode (Highlight active section)"
        >
          <Target size={18} strokeWidth={1.5} />
        </button>
        <button type="button"
          onClick={onToggleSplitView}
          className={`p-2 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 ${isSplitView ? 'bg-[#EEF4FF] text-[#0030FC] shadow-sm' : 'hover:bg-[#F8F8F8] text-[#666666] hover:text-black'}`}
          title="Toggle Split A4 Preview"
        >
          <Split size={18} strokeWidth={1.5} />
        </button>

        <div className="w-px h-4 bg-[#E5E5E5] mx-1" />

        <button type="button"
          onClick={() => onTogglePanel('library')}
          className={`p-2 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 ${rightPanel === 'library' ? 'bg-[#EEF4FF] text-[#0030FC] shadow-sm' : 'hover:bg-[#F8F8F8] text-[#666666] hover:text-black'}`}
          title="Library"
        >
          <Library size={18} strokeWidth={1.5} />
        </button>
        <button type="button"
          onClick={() => onTogglePanel('symbols')}
          className={`p-2 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 ${rightPanel === 'symbols' ? 'bg-[#EEF4FF] text-[#0030FC] shadow-sm' : 'hover:bg-[#F8F8F8] text-[#666666] hover:text-black'}`}
          title="Symbols"
        >
          <Sigma size={18} strokeWidth={1.5} />
        </button>
        <button type="button"
          onClick={() => onTogglePanel('collaboration')}
          className={`p-2 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95 ${rightPanel === 'collaboration' ? 'bg-[#EEF4FF] text-[#0030FC] shadow-sm' : 'hover:bg-[#F8F8F8] text-[#666666] hover:text-black'}`}
          title="Collaboration"
        >
          <Users size={18} strokeWidth={1.5} />
        </button>
        
        <div className="w-px h-4 bg-[#E5E5E5] mx-1" />

        <button type="button" className="p-2 rounded-lg hover:bg-[#F8F8F8] text-[#666666] hover:text-black hover:scale-105 active:scale-95 transition-all duration-150" title="Share">
          <Share2 size={18} strokeWidth={1.5} />
        </button>

        <div className="relative group">
          <button type="button" className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0030FC] text-white rounded-lg text-sm font-medium hover:bg-[#0024DB] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-150">
            <Download size={14} strokeWidth={2} />
            Export
            <ChevronDown size={14} strokeWidth={2} />
          </button>
          <div className="absolute right-0 top-full mt-1 bg-white border border-[#E5E5E5] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out origin-top-right transform scale-95 group-hover:scale-100 z-50 min-w-[160px] translate-y-1 group-hover:translate-y-0">
            <button type="button" onClick={() => onExport('latex')} className="w-full text-left px-3 py-2 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] transition-colors duration-150 rounded-t-lg flex items-center gap-2">
              <FileText size={14} strokeWidth={1.5} />
              Export as LaTeX
            </button>
            <button type="button" onClick={() => onExport('pdf')} className="w-full text-left px-3 py-2 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] transition-colors duration-150 rounded-b-lg flex items-center gap-2">
              <FileText size={14} strokeWidth={1.5} />
              Export as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
