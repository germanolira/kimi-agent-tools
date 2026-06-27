import { useMemo } from 'react';
import type { EditorDocument } from '@/pages/Editor';

export function useFocusMode(
  isFocusMode: boolean,
  activeBlockId: string | null,
  document: EditorDocument
): Set<string> {
  return useMemo(() => {
    const focusedBlockIds = new Set<string>();
    if (!isFocusMode || !activeBlockId) return focusedBlockIds;
    
    const activeIdx = document.content.findIndex((b) => b.id === activeBlockId);
    if (activeIdx === -1) return focusedBlockIds;
    
    let startIdx = activeIdx;
    while (startIdx > 0 && document.content[startIdx].type !== 'heading') {
      startIdx--;
    }
    focusedBlockIds.add(document.content[startIdx].id);
    let i = startIdx + 1;
    while (i < document.content.length && document.content[i].type !== 'heading') {
      focusedBlockIds.add(document.content[i].id);
      i++;
    }
    
    return focusedBlockIds;
  }, [isFocusMode, activeBlockId, document.content]);
}
