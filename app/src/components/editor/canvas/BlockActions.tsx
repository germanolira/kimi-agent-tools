/* eslint-disable */

import { Plus, Trash2 } from 'lucide-react';
import AddBlockDropdown from './AddBlockDropdown';

interface BlockActionsProps {
  blockId: string;
  isHovered: boolean;
  addDropdownOpenId: string | null;
  toggleAddDropdown: (id: string) => void;
  closeAddDropdown: () => void;
  handleAddBlock: (id: string, type: 'paragraph' | 'heading' | 'equation' | 'list' | 'plot') => void;
  handleDeleteBlock: (id: string) => void;
}

export default function BlockActions({
  blockId,
  isHovered,
  addDropdownOpenId,
  toggleAddDropdown,
  closeAddDropdown,
  handleAddBlock,
  handleDeleteBlock,
}: BlockActionsProps) {
  if (!isHovered && addDropdownOpenId !== blockId) return null;

  return (
    <div className="absolute -left-16 top-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
      <div className="relative">
        <button
          onClick={() => toggleAddDropdown(blockId)}
          className="p-1.5 text-[#888888] hover:text-[#0030FC] hover:bg-[#EEF4FF] rounded-md transition-colors"
          title="Add block below"
        >
          <Plus size={16} />
        </button>
        {addDropdownOpenId === blockId && (
          <AddBlockDropdown 
            onSelect={(type) => handleAddBlock(blockId, type)} 
            close={closeAddDropdown} 
          />
        )}
      </div>
      <button
        onClick={() => handleDeleteBlock(blockId)}
        className="p-1.5 text-[#888888] hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
        title="Delete block"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
