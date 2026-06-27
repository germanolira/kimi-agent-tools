import { useState, useEffect, useCallback } from 'react';

interface SelectedTextInfo {
  text: string;
  blockId: string;
}

export function useContextMenu() {
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedTextInfo, setSelectedTextInfo] = useState<SelectedTextInfo | null>(null);
  const [isEditingSelection, setIsEditingSelection] = useState(false);
  const [selectionEditValue, setSelectionEditValue] = useState('');
  
  // Close on click/scroll
  useEffect(() => {
    const handleGlobalClick = () => {
      setContextMenuPosition(null);
    };
    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('scroll', handleGlobalClick, true);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('scroll', handleGlobalClick, true);
    };
  }, []);
  
  const openContextMenu = useCallback((x: number, y: number, text: string, blockId: string) => {
    setContextMenuPosition({ x, y });
    setSelectedTextInfo({ text, blockId });
    setIsEditingSelection(false);
  }, []);
  
  const closeContextMenu = useCallback(() => {
    setContextMenuPosition(null);
    setSelectedTextInfo(null);
    setIsEditingSelection(false);
  }, []);
  
  const startEditingSelection = useCallback(() => {
    if (selectedTextInfo) {
      setIsEditingSelection(true);
      setSelectionEditValue(selectedTextInfo.text);
    }
  }, [selectedTextInfo]);
  
  return {
    contextMenuPosition,
    selectedTextInfo,
    isEditingSelection,
    selectionEditValue,
    setSelectionEditValue,
    openContextMenu,
    closeContextMenu,
    startEditingSelection,
    setIsEditingSelection,
  };
}
