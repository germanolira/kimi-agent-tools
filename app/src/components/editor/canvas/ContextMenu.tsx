/* eslint-disable */
import { Pencil, Sparkles, FunctionSquare } from 'lucide-react';


interface ContextMenuProps {
  contextMenuPosition: { x: number; y: number };
  selectedTextInfo: { text: string; blockId: string };
  isEditingSelection: boolean;
  selectionEditValue: string;
  setSelectionEditValue: (val: string) => void;
  handleSaveSelectionEdit: (newValue: string) => void;
  handleRewrite: () => void;
  handleConvertToEquation: () => void;
  handleBold: () => void;
  handleItalic: () => void;
  closeContextMenu: () => void;
  startEditingSelection: () => void;
}

export default function ContextMenu({
  contextMenuPosition,
  selectedTextInfo,
  isEditingSelection,
  selectionEditValue,
  setSelectionEditValue,
  handleSaveSelectionEdit,
  handleRewrite,
  handleConvertToEquation,
  handleBold,
  handleItalic,
  closeContextMenu,
  startEditingSelection
}: ContextMenuProps) {
  return (
    <div
      className="fixed bg-white border border-[#E5E5E5] rounded-xl shadow-2xl z-[300] py-1.5 w-64 animate-in fade-in zoom-in-95 duration-150 ease-out"
      style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      {isEditingSelection ? (
        <div className="px-3 py-2 flex flex-col gap-2">
          <span className="text-[10px] uppercase font-semibold text-[#888888] tracking-wider block">
            Editar Seleção
          </span>
          <input
            type="text"
            value={selectionEditValue}
            onChange={(e) => setSelectionEditValue(e.target.value)}
            className="w-full border border-[#E5E5E5] rounded px-2 py-1 text-sm outline-none focus:border-[#0030FC] text-black font-['Inter']"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSaveSelectionEdit(selectionEditValue);
              } else if (e.key === 'Escape') {
                e.preventDefault();
                closeContextMenu();
              }
            }}
          />
          <div className="flex justify-end gap-2 mt-1">
            <button
              onClick={closeContextMenu}
              className="px-2.5 py-1 text-xs text-[#888888] hover:bg-[#F5F5F5] rounded transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={() => handleSaveSelectionEdit(selectionEditValue)}
              className="px-2.5 py-1 text-xs bg-[#0030FC] text-white hover:bg-[#0025D0] rounded transition-colors font-medium shadow-sm hover:shadow"
            >
              Salvar
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="px-3 py-1.5 border-b border-[#F0F0F0] mb-1">
            <span className="text-[10px] uppercase font-semibold text-[#888888] tracking-wider block mb-0.5">
              Assistente de Escrita
            </span>
            <span className="text-xs text-black italic truncate block max-w-full">
              "{selectedTextInfo.text}"
            </span>
          </div>
          
          <button
            onClick={handleRewrite}
            className="group w-full text-left px-3 py-2 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-all duration-150 hover:pl-4 text-black font-medium"
          >
            <Sparkles size={14} className="text-[#666666] group-hover:text-[#0030FC] transition-colors duration-150" />
            Melhorar Clareza
          </button>

          <button
            onClick={startEditingSelection}
            className="group w-full text-left px-3 py-2 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-all duration-150 hover:pl-4 text-black font-medium"
          >
            <Pencil size={14} className="text-[#666666] group-hover:text-[#0030FC] transition-colors duration-150" />
            Editar Texto
          </button>
          
          <button
            onClick={handleConvertToEquation}
            className="group w-full text-left px-3 py-2 text-sm hover:bg-[#EEF4FF] hover:text-[#0030FC] flex items-center gap-2 transition-all duration-150 hover:pl-4 text-black font-medium"
          >
            <FunctionSquare size={14} className="text-[#666666] group-hover:text-[#0030FC] transition-colors duration-150" />
            Tornar Equação ($)
          </button>

          <div className="h-px bg-[#F0F0F0] my-1" />

          <button
            onClick={handleBold}
            className="w-full text-left px-3 py-2 text-sm hover:bg-[#F5F5F5] hover:text-black flex items-center gap-2 transition-all duration-150 hover:pl-4 text-black"
          >
            <span className="font-bold text-xs w-3.5 text-center text-[#666666] hover:text-black">B</span>
            Negrito
          </button>

          <button
            onClick={handleItalic}
            className="w-full text-left px-3 py-2 text-sm hover:bg-[#F5F5F5] hover:text-black flex items-center gap-2 transition-all duration-150 hover:pl-4 text-black"
          >
            <span className="italic text-xs w-3.5 text-center text-[#666666] hover:text-black">I</span>
            Itálico
          </button>
        </>
      )}
    </div>
  );
}
