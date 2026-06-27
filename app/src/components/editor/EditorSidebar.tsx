import { useState } from 'react';
import { FileText, ChevronRight, Folder, ChevronDown, Search } from 'lucide-react';
import { type EditorDocument } from '@/pages/Editor';

interface EditorSidebarProps {
  document: EditorDocument;
  activeBlockId: string | null;
  onSelectBlock: (id: string) => void;
}

export default function EditorSidebar({ document, activeBlockId, onSelectBlock }: EditorSidebarProps) {
  const [collapsedHeadings, setCollapsedHeadings] = useState<Set<string>>(new Set());

  // Determine visibility of outline items
  let currentParentCollapsed = false;
  const outlineItems = document.content.map((block) => {
    if (block.type === 'heading') {
      currentParentCollapsed = collapsedHeadings.has(block.id);
      return { block, visible: true, isHeading: true, isCollapsed: currentParentCollapsed };
    }
    return { block, visible: !currentParentCollapsed, isHeading: false };
  });

  return (
    <div className="w-[260px] shrink-0 border-r border-[#E5E5E5] bg-[#FAFAFA] flex flex-col overflow-hidden">
      {/* Search */}
      <div className="p-3 border-b border-[#E5E5E5]">
        <div className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-lg px-3 py-2 transition-all duration-200 focus-within:border-[#0030FC] focus-within:shadow-[0_0_0_2px_rgba(0,48,252,0.1)] focus-within:scale-[1.01]">
          <Search size={14} strokeWidth={1.5} className="text-[#888888]" />
          <input
            type="text"
            aria-label="Search sources"
            placeholder="Search sources..."
            className="bg-transparent border-none outline-none text-sm font-['Inter'] w-full placeholder:text-[#888888] text-black"
          />
        </div>
      </div>

      {/* Document outline */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <Folder size={14} strokeWidth={1.5} className="text-[#888888]" />
            <span className="font-['Inter'] text-xs font-medium text-[#888888] uppercase tracking-wider">My Library</span>
          </div>

          <div className="flex items-center gap-2 px-1 py-1 mb-1">
            <ChevronDown size={14} strokeWidth={1.5} className="text-[#888888]" />
            <FileText size={14} strokeWidth={1.5} className="text-[#0030FC]" />
            <span className="font-['Inter'] text-sm font-medium text-black truncate">{document.title}</span>
          </div>

          <div className="ml-5 border-l border-[#E5E5E5] flex flex-col gap-0.5">
            {outlineItems.map(({ block, visible, isHeading, isCollapsed }) => {
              if (!visible) return null;

              if (isHeading) {
                return (
                  <div key={block.id} className="flex items-center w-full group/item">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCollapsedHeadings((prev) => {
                          const next = new Set(prev);
                          if (next.has(block.id)) {
                            next.delete(block.id);
                          } else {
                            next.add(block.id);
                          }
                          return next;
                        });
                      }}
                      className="p-1 rounded hover:bg-[#EEF4FF] text-[#888888] hover:text-[#0030FC] transition-colors"
                      title={isCollapsed ? "Expand section" : "Collapse section"}
                    >
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${isCollapsed ? '-rotate-90 text-[#888888]' : 'text-[#0030FC]'}`}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectBlock(block.id)}
                      className={`flex-1 text-left px-2 py-1.5 rounded-md transition-all duration-200 truncate ${
                        activeBlockId === block.id ? 'bg-[#EEF4FF] text-[#0030FC] font-semibold shadow-sm' : 'hover:bg-[#F0F0F0] text-[#444444] hover:text-black'
                      }`}
                    >
                      <span className="font-['Inter'] text-xs font-semibold">{block.content}</span>
                    </button>
                  </div>
                );
              }

              return (
                <button
                  type="button"
                  key={block.id}
                  onClick={() => onSelectBlock(block.id)}
                  className={`w-full text-left flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 hover:pl-4 active:scale-[0.98] ${
                    activeBlockId === block.id ? 'bg-[#EEF4FF] text-[#0030FC] font-semibold shadow-sm' : 'hover:bg-[#F0F0F0] text-[#444444] hover:text-black'
                  }`}
                >
                  {block.type === 'equation' ? (
                    <>
                      <ChevronRight size={10} strokeWidth={1.5} className="text-[#888888] shrink-0" />
                      <span className="font-['JetBrains_Mono'] text-xs truncate opacity-60">Eq: {block.content.slice(0, 30)}...</span>
                    </>
                  ) : block.type === 'plot' ? (
                    <>
                      <ChevronRight size={10} strokeWidth={1.5} className="text-[#888888] shrink-0" />
                      <span className="font-['JetBrains_Mono'] text-xs truncate text-[#0030FC] font-medium opacity-80">Plot: {block.content}</span>
                    </>
                  ) : (
                    <>
                      <ChevronRight size={10} strokeWidth={1.5} className="text-[#888888] shrink-0" />
                      <span className="font-['Inter'] text-xs truncate opacity-60">{block.content.slice(0, 40)}...</span>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sources section */}
        <div className="p-3 border-t border-[#E5E5E5]">
          <div className="flex items-center gap-2 mb-2">
            <Folder size={14} strokeWidth={1.5} className="text-[#888888]" />
            <span className="font-['Inter'] text-xs font-medium text-[#888888] uppercase tracking-wider">Collections</span>
          </div>
          <div className="ml-1">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#F0F0F0] hover:text-black transition-all duration-200 hover:pl-4 cursor-pointer active:scale-[0.98]">
              <span className="w-2 h-2 rounded-full bg-[#0030FC]" />
              <span className="font-['Inter'] text-xs text-[#444444]">Deadlift Library</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#F0F0F0] hover:text-black transition-all duration-200 hover:pl-4 cursor-pointer active:scale-[0.98]">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]" />
              <span className="font-['Inter'] text-xs text-[#444444]">Performance</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#F0F0F0] hover:text-black transition-all duration-200 hover:pl-4 cursor-pointer active:scale-[0.98]">
              <span className="w-2 h-2 rounded-full bg-[#FF9800]" />
              <span className="font-['Inter'] text-xs text-[#444444]">Sprint Mechanics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
