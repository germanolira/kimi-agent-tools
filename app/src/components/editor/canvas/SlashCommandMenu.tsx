/* eslint-disable */
import { Type, Heading1, Heading2, List, FileDigit, FunctionSquare, LineChart, Hash } from 'lucide-react';

interface SlashCommandMenuProps {
  slashMenuOpen: boolean;
  slashMenuIndex: number;
  setSlashMenuIndex: (index: number) => void;
  slashSearch: string;
  onSelectCommand: (commandId: string) => void;
}

export const SLASH_COMMANDS = [
  { id: 'text', icon: <Type size={14} />, label: 'Text', desc: 'Just start writing' },
  { id: 'h1', icon: <Heading1 size={14} />, label: 'Heading 1', desc: 'Big section heading' },
  { id: 'h2', icon: <Heading2 size={14} />, label: 'Heading 2', desc: 'Medium section heading' },
  { id: 'list', icon: <List size={14} />, label: 'Bullet List', desc: 'Create a bulleted list' },
  { id: 'enum', icon: <FileDigit size={14} />, label: 'Numbered List', desc: 'Create a numbered list' },
  { id: 'math', icon: <FunctionSquare size={14} />, label: 'Math Equation', desc: 'Display a LaTeX equation' },
  { id: 'plot', icon: <LineChart size={14} />, label: 'Function Plot', desc: 'Plot a mathematical function' },
  { id: 'ref', icon: <Hash size={14} />, label: 'Citation', desc: 'Reference a library source' },
];

export default function SlashCommandMenu({
  slashMenuOpen,
  slashMenuIndex,
  setSlashMenuIndex,
  slashSearch,
  onSelectCommand
}: SlashCommandMenuProps) {
  if (!slashMenuOpen) return null;

  const filteredCommands = SLASH_COMMANDS.filter(cmd =>
    cmd.label.toLowerCase().includes(slashSearch.toLowerCase()) ||
    cmd.desc.toLowerCase().includes(slashSearch.toLowerCase())
  );

  if (filteredCommands.length === 0) return null;

  return (
    <div className="absolute top-full left-0 mt-2 bg-white border border-[#E5E5E5] rounded-xl shadow-2xl z-50 py-1.5 w-64 animate-in fade-in zoom-in-95 duration-100">
      <div className="px-3 py-1.5 border-b border-[#F0F0F0] mb-1">
        <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block">
          Add Block
        </span>
      </div>
      {filteredCommands.map((cmd, idx) => (
        <button
          key={cmd.id}
          onMouseEnter={() => setSlashMenuIndex(idx)}
          onClick={() => onSelectCommand(cmd.id)}
          className={`w-full text-left px-3 py-2 flex items-center gap-3 transition-colors ${
            idx === slashMenuIndex ? 'bg-[#EEF4FF] text-[#0030FC]' : 'hover:bg-[#F5F5F5] text-black'
          }`}
        >
          <div className={`p-1.5 rounded-md ${idx === slashMenuIndex ? 'bg-white shadow-sm' : 'bg-white border border-[#E5E5E5]'}`}>
            {cmd.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{cmd.label}</span>
            <span className="text-xs text-[#888888] font-['Inter']">{cmd.desc}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
