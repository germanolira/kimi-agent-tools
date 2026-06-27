/* eslint-disable */
import { useState, useRef, useCallback } from 'react';
import { Sparkles, Eraser } from 'lucide-react';
import SymbolPreview from '@/components/editor/shared/SymbolPreview';

const STROKE_1_PREDICTIONS = [
  { id: 'p1', name: 'Alpha', latex: '\\alpha' },
  { id: 'p2', name: 'Theta', latex: '\\theta' },
  { id: 'p3', name: 'Integral', latex: '\\int' },
  { id: 'p4', name: 'Infinity', latex: '\\infty' },
  { id: 'p5', name: 'Sim', latex: '\\sim' },
];

const STROKE_2_PREDICTIONS = [
  { id: 'p6', name: 'Beta', latex: '\\beta' },
  { id: 'p7', name: 'Pi', latex: '\\pi' },
  { id: 'p8', name: 'Lambda', latex: '\\lambda' },
  { id: 'p9', name: 'Delta', latex: '\\Delta' },
  { id: 'p10', name: 'Gamma', latex: '\\gamma' },
];

const STROKE_3_PLUS_PREDICTIONS = [
  { id: 'p11', name: 'Sum', latex: '\\sum' },
  { id: 'p12', name: 'Sqrt', latex: '\\sqrt{x}' },
  { id: 'p13', name: 'Partial', latex: '\\partial' },
  { id: 'p14', name: 'Omega', latex: '\\Omega' },
  { id: 'p15', name: 'Sigma', latex: '\\sigma' },
];

interface SketchpadProps {
  onInsertEquation: (latex: string) => void;
}

export default function Sketchpad({ onInsertEquation }: SketchpadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeCount, setStrokeCount] = useState(0);

  const startDrawing = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#0030FC';

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : (e as React.MouseEvent).clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  }, []);

  const draw = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    const y = ('touches' in e) ? e.touches[0].clientY - rect.top : (e as React.MouseEvent).clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  }, [isDrawing]);

  const stopDrawing = useCallback(() => {
    if (isDrawing) {
      setIsDrawing(false);
      setStrokeCount(prev => prev + 1);
    }
  }, [isDrawing]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setStrokeCount(0);
  }, []);

  const predictions =
    strokeCount === 1
      ? STROKE_1_PREDICTIONS
      : strokeCount === 2
      ? STROKE_2_PREDICTIONS
      : STROKE_3_PLUS_PREDICTIONS;

  return (
    <div className="flex-1 flex flex-col p-4 overflow-y-auto bg-[#FAFAFA]">
      <span className="text-[10px] uppercase font-semibold text-[#888888] tracking-wider block mb-2">
        Sketch mathematical symbol below
      </span>
      <div className="relative bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm shrink-0">
        <canvas
          ref={canvasRef}
          width={308}
          height={180}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="cursor-crosshair w-full block bg-white"
        />
        <button
          onClick={clearCanvas}
          className="absolute bottom-2 right-2 p-1.5 bg-white border border-[#E5E5E5] rounded-lg shadow-sm hover:bg-[#F5F5F5] text-[#666666] hover:text-black flex items-center gap-1 transition-colors text-[10px] font-semibold"
          title="Clear canvas"
        >
          <Eraser size={12} />
          Clear
        </button>
      </div>

      <div className="mt-4 flex-1">
        <span className="text-[10px] uppercase font-semibold text-[#888888] tracking-wider block mb-2 flex items-center gap-1">
          <Sparkles size={11} className="text-[#0030FC]" />
          Predicted LaTeX Symbols
        </span>
        
        {strokeCount === 0 ? (
          <div className="text-center py-6 text-xs text-[#888888] font-['Inter'] italic">
            Draw strokes on the canvas to see predictions...
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-1.5">
            {predictions.map((symbol) => (
              <button
                key={symbol.id}
                onClick={() => onInsertEquation(symbol.latex)}
                className="flex flex-col items-center p-2 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#0030FC] hover:bg-[#EEF4FF] transition-all group shadow-sm"
                title={`${symbol.name} — ${symbol.latex}`}
              >
                <SymbolPreview latex={symbol.latex} />
                <span className="font-['Inter'] text-[9px] text-[#888888] mt-1 truncate w-full text-center group-hover:text-[#0030FC] font-medium">
                  {symbol.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
