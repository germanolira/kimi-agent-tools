/* eslint-disable */
import { useState, useCallback } from 'react';
import EditorSidebar from '@/components/editor/EditorSidebar';
import EditorToolbar from '@/components/editor/EditorToolbar';
import EditorCanvas from '@/components/editor/EditorCanvas';
import EditorRightPanel from '@/components/editor/EditorRightPanel';
import ExportModal from '@/components/editor/ExportModal';
import A4Preview from '@/components/editor/A4Preview';
import { getFullDocumentLaTeX } from '@/lib/latexExport';

export type RightPanelTab = 'library' | 'symbols' | 'collaboration' | null;

export interface EditorDocument {
  id: string;
  title: string;
  content: EditorBlock[];
}

export interface EditorBlock {
  id: string;
  type: 'heading' | 'paragraph' | 'equation' | 'list' | 'plot';
  content: string;
}

export interface LibrarySource {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  impactFactor: number;
  openAccess: boolean;
}

const initialDocument: EditorDocument = {
  id: 'doc-1',
  title: 'Maximum Deadlift Capacity of Elite Sprinters',
  content: [
    { id: 'b1', type: 'heading', content: 'Abstract' },
    { id: 'b2', type: 'paragraph', content: 'This investigation quantifies elite sprinters\' maximal deadlift capacity, showing that elite cohorts lift up to three times their body weight and underscoring the role of lower-body strength in sprint performance (Schiemann et al., 2024). This association holds across athletic populations, substantiating its contribution to explosive power (Conan & DeBeliso, 2020). Maximal lower-extremity strength also enhances jumping and sprint performance in team sports (Warneke et al., 2022).' },
    { id: 'b3', type: 'heading', content: 'Mathematical Formulation' },
    { id: 'b4', type: 'paragraph', content: 'The relationship between maximal deadlift strength and sprint velocity can be expressed as:' },
    { id: 'b5', type: 'equation', content: 'P(v_\\alpha \\to v_\\beta) = \\sin^2(2\\theta) \\sin^2 \\left( \\frac{1.27 \\Delta m^2 L}{E} \\right)' },
    { id: 'b6', type: 'paragraph', content: 'Where the mixing angle \\theta describes the relative strength contribution and \\Delta m^2 represents the differential muscle fiber recruitment between elite and sub-elite athletes.' },
    { id: 'b7', type: 'heading', content: 'Statistical Analysis' },
    { id: 'b8', type: 'equation', content: '\\eta_t = \\frac{\\eta_0}{1 + \\lambda \\left| H(\\theta) \\right|}' },
    { id: 'b9', type: 'paragraph', content: 'The training objective involves minimizing the loss function \\mathcal{L}(\\theta), typically the cross-entropy loss for classification tasks. Building on this, heavy deadlifts in warm-up protocols acutely improve vertical jump and change-of-direction performance (Abade et al., 2023).' },
    { id: 'b9_plot', type: 'plot', content: 'sin(x)/x' },
    { id: 'b10', type: 'heading', content: 'References' },
    { id: 'b11', type: 'list', content: 'Abade, E., Sánchez-Sánchez, J., Conte, D., & Pareja-Blanco, F. (2023). Effects of adding heavy loaded deadlifts to warm-up on acute vertical jump and change-of-direction performance. Journal of Strength and Conditioning Research, 37(5), 1052–1059.' },
    { id: 'b12', type: 'list', content: 'Conan, E., & DeBeliso, M. (2020). The relationship between the back squat and sprint performance in track athletes. Journal of Sport and Human Performance, 8(1), 1–15.' },
    { id: 'b13', type: 'list', content: 'Schiemann, S., Keiner, M., Wirth, K., Lohmann, L. H., & Warneke, K. (2024). The relationship between maximum deadlift strength and sprint performance in elite athletes. Journal of Strength and Conditioning Research, 38(4), 721–733.' },
    { id: 'b14', type: 'list', content: 'Warneke, K., Lohmann, L. H., Keiner, M., & Wagner, C.-M. (2022). Influence of strength training modalities on sprint performance in trained athletes. Sports, 10(7), 107.' },
  ],
};

const librarySources: LibrarySource[] = [
  { id: 's1', title: 'Maximal deadlift strength and its correlation with sprint velocity', authors: 'Schiemann, Warneke, Conan', journal: 'J. Strength & Conditioning', year: '2024', impactFactor: 15.0, openAccess: true },
  { id: 's2', title: 'Post-activation performance enhancement in elite athletes', authors: 'Abade, Sánchez, Pareja-Blanco', journal: 'Sports Medicine', year: '2023', impactFactor: 15.0, openAccess: true },
  { id: 's3', title: 'Strength training modalities for sprint performance', authors: 'Warneke, Lohmann, Keiner', journal: 'Sports', year: '2022', impactFactor: 3.7, openAccess: true },
  { id: 's4', title: 'Lower-body strength transfer to sprint: a meta-analysis', authors: 'Seitz, Reyes, Tran, Haff', journal: 'Sports Medicine', year: '2014', impactFactor: 15.0, openAccess: true },
  { id: 's5', title: 'Rate of force development in elite sprinters', authors: 'Morin, Gimenez, Edouard', journal: 'Frontiers in Physiology', year: '2019', impactFactor: 4.2, openAccess: true },
  { id: 's6', title: 'Post-activation potentiation: physiological mechanisms', authors: 'Blazevich, Babault', journal: 'Sports Medicine', year: '2019', impactFactor: 15.0, openAccess: true },
];

export default function Editor() {
  const [doc, setDoc] = useState<EditorDocument>(initialDocument);
  const [rightPanel, setRightPanel] = useState<RightPanelTab>('library');
  const [showExport, setShowExport] = useState(false);
  const [exportFormat, setExportFormat] = useState<'latex' | 'pdf'>('latex');
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [wordCount] = useState(2048);

  const [sources, setSources] = useState<LibrarySource[]>(librarySources);
  const [isSplitView, setIsSplitView] = useState(true);
  const [isFocusMode, setIsFocusMode] = useState(false);

  const handleUpdateBlock = useCallback((blockId: string, newContent: string) => {
    setDoc((prev) => ({
      ...prev,
      content: prev.content.map((b) => (b.id === blockId ? { ...b, content: newContent } : b)),
    }));
  }, []);

  const handleChangeBlockType = useCallback((blockId: string, type: EditorBlock['type']) => {
    setDoc((prev) => ({
      ...prev,
      content: prev.content.map((b) => (b.id === blockId ? { ...b, type, content: type === 'equation' ? 'E = mc^2' : type === 'heading' ? 'Heading' : type === 'plot' ? 'sin(x)/x' : '' } : b)),
    }));
  }, []);

  const handleAddBlock = useCallback((afterId: string, type: EditorBlock['type']) => {
    const newBlock: EditorBlock = {
      id: `b-${Date.now()}`,
      type,
      content: type === 'equation' ? 'E = mc^2' : type === 'heading' ? 'New Section' : type === 'plot' ? 'sin(x)/x' : '',
    };
    setDoc((prev) => {
      const idx = prev.content.findIndex((b) => b.id === afterId);
      const newContent = [...prev.content];
      newContent.splice(idx + 1, 0, newBlock);
      return { ...prev, content: newContent };
    });
    setActiveBlockId(newBlock.id);
  }, []);

  const handleDeleteBlock = useCallback((blockId: string) => {
    setDoc((prev) => ({
      ...prev,
      content: prev.content.filter((b) => b.id !== blockId),
    }));
  }, []);

  const handleExport = useCallback((format: 'latex' | 'pdf') => {
    setExportFormat(format);
    setShowExport(true);
  }, []);

  const latexOutput = getFullDocumentLaTeX(doc);

  return (
    <div className="h-screen w-screen flex flex-col bg-white overflow-hidden">
      <EditorToolbar
        docTitle={doc.title}
        onUpdateTitle={(title) => setDoc((prev) => ({ ...prev, title }))}
        onExport={handleExport}
        wordCount={wordCount}
        rightPanel={rightPanel}
        onTogglePanel={(tab) => setRightPanel((prev) => (prev === tab ? null : tab))}
        isSplitView={isSplitView}
        onToggleSplitView={() => setIsSplitView((prev) => !prev)}
        isFocusMode={isFocusMode}
        onToggleFocusMode={() => setIsFocusMode((prev) => !prev)}
      />
      <div className="flex-1 flex overflow-hidden">
        <EditorSidebar document={doc} activeBlockId={activeBlockId} onSelectBlock={setActiveBlockId} />
        <EditorCanvas
          document={doc}
          activeBlockId={activeBlockId}
          onSelectBlock={setActiveBlockId}
          onUpdateBlock={handleUpdateBlock}
          onAddBlock={handleAddBlock}
          onDeleteBlock={handleDeleteBlock}
          onChangeBlockType={handleChangeBlockType}
          isFocusMode={isFocusMode}
        />
        {isSplitView && <A4Preview document={doc} activeBlockId={activeBlockId} />}
        {rightPanel && (
          <EditorRightPanel
            tab={rightPanel}
            librarySources={sources}
            onAddSource={(source) => setSources((prev) => [source, ...prev])}
            document={doc}
            onInsertEquation={(latex) => {
              if (activeBlockId) {
                handleUpdateBlock(activeBlockId, latex);
              }
            }}
            onCiteSource={(source) => {
              if (activeBlockId) {
                const citation = ` (${source.authors.split(',')[0]} et al., ${source.year})`;
                const block = doc.content.find((b) => b.id === activeBlockId);
                if (block) {
                  handleUpdateBlock(activeBlockId, block.content + citation);
                }
              }
            }}
          />
        )}
      </div>
      {showExport && (
        <ExportModal
          format={exportFormat}
          latex={latexOutput}
          onClose={() => setShowExport(false)}
        />
      )}
    </div>
  );
}
