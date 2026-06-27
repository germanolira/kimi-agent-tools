/* eslint-disable */
import React, { useRef, useState, useCallback, useMemo } from 'react';
import type { EditorDocument, EditorBlock } from '@/pages/Editor';
import { useEditorBlockState } from '@/hooks/useEditorBlockState';
import { useContextMenu } from '@/hooks/useContextMenu';
import { useAiSuggestion } from '@/hooks/useAiSuggestion';
import { useFocusMode } from '@/hooks/useFocusMode';
import { useScrollToBlock } from '@/hooks/useScrollToBlock';
import BlockActions from './canvas/BlockActions';
import ContextMenu from './canvas/ContextMenu';
import BlockRenderer from './canvas/BlockRenderer';

interface EditorCanvasProps {
  document: EditorDocument;
  activeBlockId: string | null;
  onSelectBlock: (id: string) => void;
  onUpdateBlock: (blockId: string, content: string) => void;
  onAddBlock: (afterId: string, type: EditorBlock['type']) => void;
  onDeleteBlock: (blockId: string) => void;
  onChangeBlockType?: (blockId: string, type: EditorBlock['type']) => void;
  isFocusMode?: boolean;
}

const getMockRewrite = (text: string) => {
  const trimmed = text.trim();
  if (trimmed.includes("maximal deadlift capacity")) return "maximal deadlift strength in elite sprinters";
  if (trimmed.includes("This association holds")) return "This relationship is consistent across athletic cohorts";
  if (trimmed.includes("Statistical Analysis")) return "Statistical Evaluation";
  if (trimmed.includes("Abstract")) return "Abstract";
  if (trimmed.includes("The relationship between")) return "The correlation between";
  if (trimmed.includes("Mathematical Formulation")) return "Mathematical Model";
  if (trimmed.includes("This investigation quantifies")) return "This study measures";
  if (trimmed.includes("showing that elite cohorts lift")) return "demonstrating that elite sprinters lift";
  if (trimmed.includes("underscoring the role of lower-body strength")) return "highlighting the importance of lower-body strength";
  if (trimmed.includes("Maximal lower-extremity strength also enhances")) return "Maximum lower-limb strength also improves";

  let rephrased = trimmed;
  rephrased = rephrased.replace(/\butilize\b/ig, 'use');
  rephrased = rephrased.replace(/\bin order to\b/ig, 'to');
  rephrased = rephrased.replace(/\bconduct an analysis of\b/ig, 'analyze');
  rephrased = rephrased.replace(/\bperform an evaluation of\b/ig, 'evaluate');
  rephrased = rephrased.replace(/\bmake a decision\b/ig, 'decide');
  rephrased = rephrased.replace(/\ba large number of\b/ig, 'many');
  rephrased = rephrased.replace(/\bhighly optimized\b/ig, 'efficient');
  rephrased = rephrased.replace(/\bquantifies\b/ig, 'measures');

  if (rephrased === trimmed) {
    if (trimmed.toLowerCase().startsWith("the ")) {
      return trimmed.replace(/^The /i, "This ");
    }
    return trimmed;
  }
  return rephrased;
};

export default function EditorCanvas({
  document: editorDoc, activeBlockId, onSelectBlock, onUpdateBlock, onAddBlock, onDeleteBlock, onChangeBlockType, isFocusMode,
}: EditorCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const blockState = useEditorBlockState();
  const contextMenu = useContextMenu();

  // Keyboard accessibility for slash menu
  const [slashMenuIndex, setSlashMenuIndex] = useState(0);
  const slashSearch = useMemo(() => {
    if (blockState.slashMenuOpen && blockState.editValue.startsWith('/')) {
      return blockState.editValue.slice(1);
    }
    return '';
  }, [blockState.slashMenuOpen, blockState.editValue]);

  useScrollToBlock(activeBlockId, canvasRef);
  const focusedBlockIds = useFocusMode(isFocusMode ?? false, activeBlockId, editorDoc);
  const aiSuggestion = useAiSuggestion(blockState.editingBlockId, blockState.editValue, blockState.slashMenuOpen, editorDoc);

  const handleContextMenu = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    let selectedText = selection?.toString().trim() || '';

    const activeEl = window.document.activeElement;
    if (!selectedText && (activeEl instanceof HTMLInputElement || activeEl instanceof HTMLTextAreaElement)) {
      const start = activeEl.selectionStart || 0;
      const end = activeEl.selectionEnd || 0;
      if (start !== end) {
        selectedText = activeEl.value.substring(start, end).trim();
      }
    }

    if (selectedText.length > 0) {
      e.preventDefault();
      
      let blockId: string | null = blockState.editingBlockId;
      
      if (!blockId && selection) {
        let node: Node | null = selection.anchorNode;
        while (node) {
          if (node instanceof HTMLElement && node.hasAttribute('data-block-id')) {
            blockId = node.getAttribute('data-block-id');
            break;
          }
          node = node.parentNode;
        }
      }

      if (!blockId && activeEl) {
        let node: HTMLElement | null = activeEl as HTMLElement;
        while (node) {
          if (node.hasAttribute('data-block-id')) {
            blockId = node.getAttribute('data-block-id');
            break;
          }
          node = node.parentElement;
        }
      }
      
      if (blockId) {
        contextMenu.openContextMenu(e.clientX, e.clientY, selectedText, blockId);
      }
    } else {
      contextMenu.closeContextMenu();
    }
  };

  const applyTextReplacement = useCallback((text: string, replacement: string) => {
    if (!contextMenu.selectedTextInfo) return;
    const { blockId } = contextMenu.selectedTextInfo;

    if (blockState.editingBlockId === blockId) {
      blockState.setEditValue(blockState.editValue.replace(text, replacement));
    } else {
      const block = editorDoc.content.find(b => b.id === blockId);
      if (block) {
        onUpdateBlock(blockId, block.content.replace(text, replacement));
      }
    }
    contextMenu.closeContextMenu();
  }, [contextMenu, blockState, editorDoc.content, onUpdateBlock]);

  const handleRewrite = () => {
    if (!contextMenu.selectedTextInfo) return;
    const newText = getMockRewrite(contextMenu.selectedTextInfo.text);
    applyTextReplacement(contextMenu.selectedTextInfo.text, newText);
  };

  const handleConvertToEquation = () => {
    if (!contextMenu.selectedTextInfo) return;
    const text = contextMenu.selectedTextInfo.text;
    const replacement = text.startsWith('$') && text.endsWith('$') ? text : `$${text}$`;
    applyTextReplacement(text, replacement);
  };

  const handleBold = () => {
    if (!contextMenu.selectedTextInfo) return;
    const text = contextMenu.selectedTextInfo.text;
    applyTextReplacement(text, `**${text}**`);
  };

  const handleItalic = () => {
    if (!contextMenu.selectedTextInfo) return;
    const text = contextMenu.selectedTextInfo.text;
    applyTextReplacement(text, `*${text}*`);
  };

  const handleSaveSelectionEdit = (newValue: string) => {
    if (!contextMenu.selectedTextInfo) return;
    applyTextReplacement(contextMenu.selectedTextInfo.text, newValue);
  };

  const saveEdit = () => {
    if (blockState.editingBlockId) {
      onUpdateBlock(blockState.editingBlockId, blockState.editValue);
      blockState.stopEditing();
    }
  };

  const executeSlashCommand = (type: EditorBlock['type']) => {
    if (blockState.editingBlockId && onChangeBlockType) {
      onChangeBlockType(blockState.editingBlockId, type);
    }
    const val = type === 'equation' ? 'E = mc^2' : type === 'heading' ? 'Heading' : type === 'plot' ? 'sin(x)/x' : '';
    blockState.setEditValue(val); // this automatically sets slashMenuOpen to false
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (blockState.slashMenuOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSlashMenuIndex(prev => Math.min(prev + 1, 7)); // max 8 commands
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSlashMenuIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        // Fallback simple map
        const types: EditorBlock['type'][] = ['paragraph', 'heading', 'heading', 'list', 'list', 'equation', 'plot', 'paragraph'];
        executeSlashCommand(types[slashMenuIndex] || 'paragraph');
      } else if (e.key === 'Escape') {
        blockState.setEditValue(''); // close slash menu
      }
      return;
    }

    if (e.key === 'Tab' && aiSuggestion) {
      e.preventDefault();
      blockState.acceptSuggestion(aiSuggestion);
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      saveEdit();
    }
    if (e.key === 'Escape') {
      blockState.stopEditing();
    }
  };

  return (
    <div className="flex-1 bg-white overflow-y-auto" ref={canvasRef} onContextMenu={handleContextMenu}>
      <div className="max-w-[720px] mx-auto py-12 px-8">
        <h1
          className="font-['Playfair_Display'] text-[42px] font-normal text-black mb-8"
          style={{ lineHeight: 1.15, letterSpacing: '-0.01em' }}
        >
          {editorDoc.title}
        </h1>

        <div className="flex flex-col gap-1">
          {editorDoc.content.map((block) => {
            const isFocused = !isFocusMode || focusedBlockIds.has(block.id);
            return (
              <div
                key={block.id}
                data-block-id={block.id}
                className={`relative group rounded-lg transition-all duration-300 ${
                  activeBlockId === block.id ? 'bg-[#F8F8FF]' : blockState.hoveredBlockId === block.id ? 'bg-[#FAFAFA]' : ''
                } ${
                  isFocusMode && !isFocused ? 'opacity-20 blur-[0.5px] hover:opacity-100 hover:blur-none' : 'opacity-100'
                }`}
                onClick={() => onSelectBlock(block.id)}
                onMouseEnter={() => blockState.setHoveredBlockId(block.id)}
                onMouseLeave={() => blockState.setHoveredBlockId(null)}
              >
                <BlockActions
                  blockId={block.id}
                  isHovered={blockState.hoveredBlockId === block.id || activeBlockId === block.id}
                  addDropdownOpenId={blockState.addDropdownOpenId}
                  toggleAddDropdown={blockState.toggleAddDropdown}
                  closeAddDropdown={blockState.closeAddDropdown}
                  handleAddBlock={onAddBlock}
                  handleDeleteBlock={onDeleteBlock}
                />
                <BlockRenderer
                  block={block}
                  isEditing={blockState.editingBlockId === block.id}
                  editValue={blockState.editingBlockId === block.id ? blockState.editValue : ''}
                  slashMenuOpen={blockState.editingBlockId === block.id && blockState.slashMenuOpen}
                  slashMenuIndex={slashMenuIndex}
                  setSlashMenuIndex={setSlashMenuIndex}
                  slashSearch={slashSearch}
                  aiSuggestion={blockState.editingBlockId === block.id ? aiSuggestion : null}
                  handleEditValueChange={blockState.setEditValue}
                  saveEdit={saveEdit}
                  handleKeyDown={handleKeyDown}
                  startEdit={blockState.startEdit}
                  executeSlashCommand={executeSlashCommand}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-6 border-t border-[#E5E5E5] flex items-center justify-between">
          <span className="font-['Inter'] text-xs text-[#888888]">
            {editorDoc.content.length} blocks • Last edited just now
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="font-['Inter'] text-xs text-[#888888]">All changes saved</span>
          </div>
        </div>
      </div>
      
      {contextMenu.contextMenuPosition && contextMenu.selectedTextInfo && (
        <ContextMenu
          contextMenuPosition={contextMenu.contextMenuPosition}
          selectedTextInfo={contextMenu.selectedTextInfo}
          isEditingSelection={contextMenu.isEditingSelection}
          selectionEditValue={contextMenu.selectionEditValue}
          setSelectionEditValue={contextMenu.setSelectionEditValue}
          handleSaveSelectionEdit={handleSaveSelectionEdit}
          handleRewrite={handleRewrite}
          handleConvertToEquation={handleConvertToEquation}
          handleBold={handleBold}
          handleItalic={handleItalic}
          closeContextMenu={contextMenu.closeContextMenu}
          startEditingSelection={contextMenu.startEditingSelection}
        />
      )}
    </div>
  );
}
