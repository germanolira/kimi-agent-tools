import { type EditorDocument } from '@/pages/Editor';

export function getFullDocumentLaTeX(doc: EditorDocument): string {
  const blocks = doc.content.map((block) => {
    switch (block.type) {
      case 'heading':
        return `\\section{${escapeLatex(block.content)}}`;
      case 'paragraph':
        return `${escapeLatex(block.content)}\n\n`;
      case 'equation':
        return `\\begin{equation}\n${block.content}\n\\end{equation}\n`;
      case 'list':
        return `\\item ${escapeLatex(block.content)}`;
      case 'plot':
        return `\\begin{figure}[h]\n\\centering\n% Plot formula: ${block.content}\n\\begin{tikzpicture}\n  \\begin{axis}[\n    axis lines = middle,\n    xlabel = $x$,\n    ylabel = $y$,\n    grid = major\n  ]\n  \\addplot[domain=-10:10, samples=100, color=blue, thick]{${block.content}};\n  \\end{axis}\n\\end{tikzpicture}\n\\caption{Plot of $y = ${block.content}$}\n\\end{figure}\n`;
      default:
        return block.content;
    }
  });

  // Group consecutive list items
  let result: string[] = [];
  let inList = false;

  for (const block of blocks) {
    if (block.startsWith('\\item ')) {
      if (!inList) {
        result.push('\\begin{itemize}');
        inList = true;
      }
      result.push(block);
    } else {
      if (inList) {
        result.push('\\end{itemize}\n');
        inList = false;
      }
      result.push(block);
    }
  }

  if (inList) {
    result.push('\\end{itemize}');
  }

  return `\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{graphicx}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}

\\title{${escapeLatex(doc.title)}}
\\author{}
\\date{\\today}

\\begin{document}

\\maketitle

${result.join('\n')}

\\end{document}`;
}

function escapeLatex(text: string): string {
  return text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/\$/g, '\\$')
    .replace(/#/g, '\\#')
    .replace(/_/g, '\\_')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}');
}
