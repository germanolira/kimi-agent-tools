/* eslint-disable */
import { Type, Heading1, List, FunctionSquare, LineChart } from 'lucide-react';

interface AddBlockDropdownProps {
  onSelect: (type: 'paragraph' | 'heading' | 'equation' | 'list' | 'plot') => void;
  close: () => void;
}

export default function AddBlockDropdown({ onSelect, close }: AddBlockDropdownProps) {
  return (
    <div 
      className="absolute left-0 top-full mt-1 bg-white border border-[#E5E5E5] rounded-xl shadow-xl z-50 py-1.5 w-48 animate-in fade-in zoom-in-95 duration-150"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-3 py-1 mb-1 border-b border-[#F0F0F0]">
        <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block">Add Below</span>
      </div>
      <button
        onClick={() => { onSelect('paragraph'); close(); }}
        className="w-full text-left px-3 py-1.5 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-colors text-[#444444]"
      >
        <Type size={14} className="text-[#888]" /> Text
      </button>
      <button
        onClick={() => { onSelect('heading'); close(); }}
        className="w-full text-left px-3 py-1.5 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-colors text-[#444444]"
      >
        <Heading1 size={14} className="text-[#888]" /> Heading 1
      </button>
      <button
        onClick={() => { onSelect('list'); close(); }}
        className="w-full text-left px-3 py-1.5 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-colors text-[#444444]"
      >
        <List size={14} className="text-[#888]" /> Bullet List
      </button>
      <button
        onClick={() => { onSelect('equation'); close(); }}
        className="w-full text-left px-3 py-1.5 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-colors text-[#444444]"
      >
        <FunctionSquare size={14} className="text-[#888]" /> Math Equation
      </button>
      <button
        onClick={() => { onSelect('plot'); close(); }}
        className="w-full text-left px-3 py-1.5 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-colors text-[#444444]"
      >
        <LineChart size={14} className="text-[#888]" /> Function Plot
      </button>
    </div>
  );
}
