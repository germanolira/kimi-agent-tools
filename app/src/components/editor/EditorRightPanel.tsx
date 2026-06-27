/* eslint-disable */
import { type RightPanelTab, type EditorDocument, type LibrarySource } from '@/pages/Editor';
import LibraryPanel from '@/components/editor/panels/LibraryPanel';
import SymbolsPanel from '@/components/editor/panels/SymbolsPanel';
import CollaborationPanel from '@/components/editor/panels/CollaborationPanel';

interface EditorRightPanelProps {
  tab: RightPanelTab;
  librarySources: LibrarySource[];
  onAddSource: (source: LibrarySource) => void;
  document: EditorDocument;
  onInsertEquation: (latex: string) => void;
  onCiteSource: (source: LibrarySource) => void;
}

export default function EditorRightPanel({ tab, librarySources, onAddSource, onInsertEquation, onCiteSource }: EditorRightPanelProps) {
  switch (tab) {
    case 'library':
      return <LibraryPanel librarySources={librarySources} onAddSource={onAddSource} onCiteSource={onCiteSource} />;
    case 'symbols':
      return <SymbolsPanel onInsertEquation={onInsertEquation} />;
    case 'collaboration':
      return <CollaborationPanel />;
    default:
      return null;
  }
}
