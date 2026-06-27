import { useReducer, useCallback } from 'react';
import type { EditorBlock } from '@/pages/Editor';

interface EditorBlockState {
  editingBlockId: string | null;
  editValue: string;
  hoveredBlockId: string | null;
  slashMenuOpen: boolean;
  addDropdownOpenId: string | null;
}

type EditorBlockAction =
  | { type: 'START_EDIT'; block: EditorBlock }
  | { type: 'SET_EDIT_VALUE'; value: string }
  | { type: 'STOP_EDITING' }
  | { type: 'SET_HOVERED'; blockId: string | null }
  | { type: 'TOGGLE_ADD_DROPDOWN'; blockId: string }
  | { type: 'CLOSE_ADD_DROPDOWN' }
  | { type: 'SET_SLASH_MENU'; open: boolean }
  | { type: 'ACCEPT_SUGGESTION'; suggestion: string };

const initialState: EditorBlockState = {
  editingBlockId: null,
  editValue: '',
  hoveredBlockId: null,
  slashMenuOpen: false,
  addDropdownOpenId: null,
};

function editorBlockReducer(state: EditorBlockState, action: EditorBlockAction): EditorBlockState {
  switch (action.type) {
    case 'START_EDIT':
      return { ...state, editingBlockId: action.block.id, editValue: action.block.content, slashMenuOpen: false };
    case 'SET_EDIT_VALUE':
      return { ...state, editValue: action.value, slashMenuOpen: action.value === '/' };
    case 'STOP_EDITING':
      return { ...state, editingBlockId: null, slashMenuOpen: false };
    case 'SET_HOVERED':
      return { ...state, hoveredBlockId: action.blockId };
    case 'TOGGLE_ADD_DROPDOWN':
      return { ...state, addDropdownOpenId: state.addDropdownOpenId === action.blockId ? null : action.blockId };
    case 'CLOSE_ADD_DROPDOWN':
      return { ...state, addDropdownOpenId: null };
    case 'SET_SLASH_MENU':
      return { ...state, slashMenuOpen: action.open };
    case 'ACCEPT_SUGGESTION':
      return { ...state, editValue: state.editValue + action.suggestion.trimStart() };
    default:
      return state;
  }
}

export function useEditorBlockState() {
  const [state, dispatch] = useReducer(editorBlockReducer, initialState);
  
  const startEdit = useCallback((block: EditorBlock) => {
    dispatch({ type: 'START_EDIT', block });
  }, []);
  
  const setEditValue = useCallback((value: string) => {
    dispatch({ type: 'SET_EDIT_VALUE', value });
  }, []);
  
  const stopEditing = useCallback(() => {
    dispatch({ type: 'STOP_EDITING' });
  }, []);
  
  const setHoveredBlockId = useCallback((blockId: string | null) => {
    dispatch({ type: 'SET_HOVERED', blockId });
  }, []);
  
  const toggleAddDropdown = useCallback((blockId: string) => {
    dispatch({ type: 'TOGGLE_ADD_DROPDOWN', blockId });
  }, []);
  
  const closeAddDropdown = useCallback(() => {
    dispatch({ type: 'CLOSE_ADD_DROPDOWN' });
  }, []);
  
  const acceptSuggestion = useCallback((suggestion: string) => {
    dispatch({ type: 'ACCEPT_SUGGESTION', suggestion });
  }, []);
  
  return {
    ...state,
    startEdit,
    setEditValue,
    stopEditing,
    setHoveredBlockId,
    toggleAddDropdown,
    closeAddDropdown,
    acceptSuggestion,
  };
}
