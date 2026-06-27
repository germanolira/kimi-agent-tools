import { useMemo } from 'react';
import type { EditorDocument } from '@/pages/Editor';

export function useAiSuggestion(
  editingBlockId: string | null,
  editValue: string,
  slashMenuOpen: boolean,
  document: EditorDocument
): string | null {
  return useMemo(() => {
    if (!editingBlockId || editValue.length < 5 || slashMenuOpen) return null;
    
    const block = document.content.find(b => b.id === editingBlockId);
    if (block?.type !== 'paragraph' || !editValue.endsWith(' ')) return null;
    
    const words = editValue.trim().split(' ').length;
    if (words > 3 && editValue.toLowerCase().includes('performance')) {
      return ' This could significantly alter the expected outcomes.';
    } else if (words > 2 && editValue.toLowerCase().includes('velocity')) {
      return ' during the acceleration phase of the sprint.';
    } else if (words > 4) {
      return ' which correlates strongly with previous findings.';
    }
    
    return null;
  }, [editingBlockId, editValue, slashMenuOpen, document.content]);
}
