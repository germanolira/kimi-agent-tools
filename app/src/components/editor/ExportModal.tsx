import { X, Copy, Check, FileText, Download } from 'lucide-react';
import { useState } from 'react';

interface ExportModalProps {
  format: 'latex' | 'pdf';
  latex: string;
  onClose: () => void;
}

export default function ExportModal({ format, latex, onClose }: ExportModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(latex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([latex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.tex';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30" onClick={onClose} role="presentation" onKeyDown={(e) => e.key === 'Escape' && onClose()}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-[640px] max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E5E5E5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
              <FileText size={20} strokeWidth={1.5} className="text-[#0030FC]" />
            </div>
            <div>
              <h3 className="font-['Inter'] text-lg font-semibold">
                {format === 'latex' ? 'Export as LaTeX' : 'Export as PDF'}
              </h3>
              <p className="font-['Inter'] text-xs text-[#888888]">
                {format === 'latex' ? 'Copy or download the LaTeX source' : 'LaTeX source (PDF generation coming soon)'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#F8F8F8] transition-colors"
          >
            <X size={20} strokeWidth={1.5} className="text-[#888888]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden flex flex-col p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-['Inter'] text-xs font-medium text-[#888888] uppercase tracking-wider">
              LaTeX Source
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E5E5] rounded-lg text-sm hover:bg-[#F8F8F8] transition-colors"
              >
                {copied ? <Check size={14} strokeWidth={2} className="text-green-500" /> : <Copy size={14} strokeWidth={1.5} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0030FC] text-white rounded-lg text-sm hover:bg-[#0024DB] transition-colors"
              >
                <Download size={14} strokeWidth={2} />
                Download .tex
              </button>
            </div>
          </div>
          <pre className="flex-1 overflow-auto bg-[#F8F8F8] rounded-xl p-4 font-['JetBrains_Mono'] text-[13px] leading-relaxed text-[#333333] border border-[#E5E5E5]">
            {latex}
          </pre>
        </div>
      </div>
    </div>
  );
}
