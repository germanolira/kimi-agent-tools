/* eslint-disable */
import React from 'react';
import { Sparkles } from 'lucide-react';
import type { EditorBlock } from '@/pages/Editor';
import MathRenderer from '../shared/MathRenderer';
import PlotRenderer from '../shared/PlotRenderer';
import { parseInlineMath } from '../shared/parseInlineMath';
import SlashCommandMenu from './SlashCommandMenu';

interface BlockRendererProps {
  block: EditorBlock;
  isEditing: boolean;
  editValue: string;
  slashMenuOpen: boolean;
  slashMenuIndex: number;
  slashSearch: string;
  setSlashMenuIndex: (index: number) => void;
  aiSuggestion: string | null;
  handleEditValueChange: (val: string) => void;
  saveEdit: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  startEdit: (block: EditorBlock) => void;
  executeSlashCommand: (type: EditorBlock['type']) => void;
}

export default function BlockRenderer({
  block,
  isEditing,
  editValue,
  slashMenuOpen,
  slashMenuIndex,
  slashSearch,
  setSlashMenuIndex,
  aiSuggestion,
  handleEditValueChange,
  saveEdit,
  handleKeyDown,
  startEdit,
  executeSlashCommand,
}: BlockRendererProps) {
  return (
    <div className="px-3 py-2 w-full">
      {block.type === 'heading' && (
        <h2
          className="font-['Playfair_Display'] text-[28px] font-normal text-black"
          style={{ lineHeight: 1.2, letterSpacing: '-0.01em' }}
        >
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => handleEditValueChange(e.target.value)}
              onBlur={saveEdit}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full bg-transparent border border-[#0030FC] rounded px-2 py-1 outline-none font-['Playfair_Display'] text-[28px] text-black"
            />
          ) : (
            block.content
          )}
        </h2>
      )}

      {block.type === 'paragraph' && (
        <p className="font-['Inter'] text-[16px] font-normal text-black leading-relaxed relative">
          {isEditing ? (
            <div className="relative w-full">
              <textarea
                value={editValue}
                onChange={(e) => handleEditValueChange(e.target.value)}
                onBlur={() => setTimeout(saveEdit, 150)}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full bg-transparent border border-[#0030FC] rounded px-2 py-1 outline-none font-['Inter'] text-[16px] leading-relaxed resize-none relative z-10 text-black"
                rows={3}
              />
              {aiSuggestion && (
                <div className="absolute top-1 left-2 pointer-events-none opacity-40 font-['Inter'] text-[16px] leading-relaxed z-0 whitespace-pre-wrap">
                  <span className="invisible">{editValue}</span>
                  <span>{aiSuggestion}</span>
                  <div className="absolute -top-6 left-0 bg-[#0030FC] text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1 opacity-100">
                    <Sparkles size={10} /> Press Tab
                  </div>
                </div>
              )}
              <SlashCommandMenu
                slashMenuOpen={slashMenuOpen}
                slashMenuIndex={slashMenuIndex}
                setSlashMenuIndex={setSlashMenuIndex}
                slashSearch={slashSearch}
                onSelectCommand={(cmdId) => {
                  if (cmdId === 'h1' || cmdId === 'h2') executeSlashCommand('heading');
                  else if (cmdId === 'math') executeSlashCommand('equation');
                  else if (cmdId === 'plot') executeSlashCommand('plot');
                  else if (cmdId === 'list' || cmdId === 'enum') executeSlashCommand('list');
                  else executeSlashCommand('paragraph');
                }}
              />
            </div>
          ) : (
            parseInlineMath(block.content)
          )}
        </p>
      )}

      {block.type === 'equation' && (
        <div className="py-3 flex items-center justify-center">
          {isEditing ? (
            <div className="w-full">
              <textarea
                value={editValue}
                onChange={(e) => handleEditValueChange(e.target.value)}
                onBlur={saveEdit}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full bg-[#F8F8F8] border border-[#0030FC] rounded-lg px-3 py-2 outline-none font-['JetBrains_Mono'] text-sm resize-none text-black"
                rows={2}
              />
              <div className="mt-2 p-3 bg-white border border-[#E5E5E5] rounded-lg">
                <span className="text-xs text-[#888888] mb-1 block">Preview:</span>
                <MathRenderer latex={editValue} />
              </div>
            </div>
          ) : (
            <div onDoubleClick={() => startEdit(block)} className="cursor-pointer w-full text-center">
              <MathRenderer latex={block.content} />
            </div>
          )}
        </div>
      )}

      {block.type === 'plot' && (
        <div className="py-3 flex flex-col items-center justify-center w-full">
          {isEditing ? (
            <div className="w-full">
              <textarea
                value={editValue}
                onChange={(e) => handleEditValueChange(e.target.value)}
                onBlur={saveEdit}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full bg-[#F8F8F8] border border-[#0030FC] rounded-lg px-3 py-2 outline-none font-['JetBrains_Mono'] text-sm resize-none text-black"
                rows={2}
                placeholder="e.g. sin(x)/x or x^2"
              />
              <div className="mt-2 p-3 bg-white border border-[#E5E5E5] rounded-lg w-full">
                <span className="text-xs text-[#888888] mb-1 block">Live Plot Preview:</span>
                <PlotRenderer formula={editValue} />
              </div>
            </div>
          ) : (
            <div onDoubleClick={() => startEdit(block)} className="cursor-pointer w-full">
              <PlotRenderer formula={block.content} />
            </div>
          )}
        </div>
      )}

      {block.type === 'list' && (
        <div className="flex items-start gap-3">
          <span className="text-[#0030FC] mt-1.5 text-xs">•</span>
          <div className="font-['Inter'] text-[14px] font-normal text-[#444444] leading-relaxed w-full">
            {isEditing ? (
              <textarea
                value={editValue}
                onChange={(e) => handleEditValueChange(e.target.value)}
                onBlur={saveEdit}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full bg-transparent border border-[#0030FC] rounded px-2 py-1 outline-none font-['Inter'] text-[14px] resize-none text-black"
                rows={2}
              />
            ) : (
              block.content
            )}
          </div>
        </div>
      )}
    </div>
  );
}
