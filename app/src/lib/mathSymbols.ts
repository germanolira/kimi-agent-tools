export interface MathSymbol {
  id: string;
  name: string;
  latex: string;
  previewLatex?: string;
  category: string;
}

export const mathSymbols: MathSymbol[] = [
  // Calculus
  { id: 'int', name: 'Integral', latex: '\\int_{a}^{b} f(x) \\, dx', previewLatex: '\\int', category: 'Calculus' },
  { id: 'int2', name: 'Double Integral', latex: '\\iint_{D} f(x,y) \\, dA', previewLatex: '\\iint', category: 'Calculus' },
  { id: 'int3', name: 'Triple Integral', latex: '\\iiint_{V} f(x,y,z) \\, dV', previewLatex: '\\iiint', category: 'Calculus' },
  { id: 'oint', name: 'Contour Integral', latex: '\\oint_{C} f(z) \\, dz', previewLatex: '\\oint', category: 'Calculus' },
  { id: 'sum', name: 'Summation', latex: '\\sum_{i=1}^{n} x_i', previewLatex: '\\sum', category: 'Calculus' },
  { id: 'prod', name: 'Product', latex: '\\prod_{i=1}^{n} x_i', previewLatex: '\\prod', category: 'Calculus' },
  { id: 'lim', name: 'Limit', latex: '\\lim_{x \\to \\infty} f(x)', previewLatex: '\\lim', category: 'Calculus' },
  { id: 'partial', name: 'Partial Derivative', latex: '\\frac{\\partial f}{\\partial x}', previewLatex: '\\partial', category: 'Calculus' },
  { id: 'nabla', name: 'Gradient', latex: '\\nabla f', previewLatex: '\\nabla', category: 'Calculus' },
  { id: 'infty', name: 'Infinity', latex: '\\infty', previewLatex: '\\infty', category: 'Calculus' },

  // Greek Letters
  { id: 'alpha', name: 'Alpha', latex: '\\alpha', previewLatex: '\\alpha', category: 'Greek' },
  { id: 'beta', name: 'Beta', latex: '\\beta', previewLatex: '\\beta', category: 'Greek' },
  { id: 'gamma', name: 'Gamma', latex: '\\gamma', previewLatex: '\\gamma', category: 'Greek' },
  { id: 'delta', name: 'Delta', latex: '\\delta', previewLatex: '\\delta', category: 'Greek' },
  { id: 'epsilon', name: 'Epsilon', latex: '\\epsilon', previewLatex: '\\epsilon', category: 'Greek' },
  { id: 'theta', name: 'Theta', latex: '\\theta', previewLatex: '\\theta', category: 'Greek' },
  { id: 'lambda', name: 'Lambda', latex: '\\lambda', previewLatex: '\\lambda', category: 'Greek' },
  { id: 'mu', name: 'Mu', latex: '\\mu', previewLatex: '\\mu', category: 'Greek' },
  { id: 'pi', name: 'Pi', latex: '\\pi', previewLatex: '\\pi', category: 'Greek' },
  { id: 'sigma', name: 'Sigma', latex: '\\sigma', previewLatex: '\\sigma', category: 'Greek' },
  { id: 'phi', name: 'Phi', latex: '\\phi', previewLatex: '\\phi', category: 'Greek' },
  { id: 'omega', name: 'Omega', latex: '\\omega', previewLatex: '\\omega', category: 'Greek' },

  // Operators
  { id: 'pm', name: 'Plus Minus', latex: '\\pm', previewLatex: '\\pm', category: 'Operators' },
  { id: 'times', name: 'Times', latex: '\\times', previewLatex: '\\times', category: 'Operators' },
  { id: 'div', name: 'Divide', latex: '\\div', previewLatex: '\\div', category: 'Operators' },
  { id: 'cdot', name: 'Dot Product', latex: '\\cdot', previewLatex: '\\cdot', category: 'Operators' },
  { id: 'leq', name: 'Less Equal', latex: '\\leq', previewLatex: '\\leq', category: 'Operators' },
  { id: 'geq', name: 'Greater Equal', latex: '\\geq', previewLatex: '\\geq', category: 'Operators' },
  { id: 'neq', name: 'Not Equal', latex: '\\neq', previewLatex: '\\neq', category: 'Operators' },
  { id: 'approx', name: 'Approximately', latex: '\\approx', previewLatex: '\\approx', category: 'Operators' },
  { id: 'equiv', name: 'Equivalent', latex: '\\equiv', previewLatex: '\\equiv', category: 'Operators' },
  { id: 'propto', name: 'Proportional', latex: '\\propto', previewLatex: '\\propto', category: 'Operators' },
  { id: 'sqrt', name: 'Square Root', latex: '\\sqrt{x}', previewLatex: '\\sqrt{x}', category: 'Operators' },
  { id: 'frac', name: 'Fraction', latex: '\\frac{a}{b}', previewLatex: '\\frac{a}{b}', category: 'Operators' },

  // Set Theory
  { id: 'in', name: 'Element Of', latex: '\\in', previewLatex: '\\in', category: 'Set Theory' },
  { id: 'notin', name: 'Not In', latex: '\\notin', previewLatex: '\\notin', category: 'Set Theory' },
  { id: 'subset', name: 'Subset', latex: '\\subset', previewLatex: '\\subset', category: 'Set Theory' },
  { id: 'supset', name: 'Superset', latex: '\\supset', previewLatex: '\\supset', category: 'Set Theory' },
  { id: 'cup', name: 'Union', latex: '\\cup', previewLatex: '\\cup', category: 'Set Theory' },
  { id: 'cap', name: 'Intersection', latex: '\\cap', previewLatex: '\\cap', category: 'Set Theory' },
  { id: 'emptyset', name: 'Empty Set', latex: '\\emptyset', previewLatex: '\\emptyset', category: 'Set Theory' },
  { id: 'forall', name: 'For All', latex: '\\forall', previewLatex: '\\forall', category: 'Set Theory' },
  { id: 'exists', name: 'Exists', latex: '\\exists', previewLatex: '\\exists', category: 'Set Theory' },

  // Logic
  { id: 'rightarrow', name: 'Implies', latex: '\\rightarrow', previewLatex: '\\rightarrow', category: 'Logic' },
  { id: 'leftarrow', name: 'Left Arrow', latex: '\\leftarrow', previewLatex: '\\leftarrow', category: 'Logic' },
  { id: 'leftrightarrow', name: 'Iff', latex: '\\leftrightarrow', previewLatex: '\\leftrightarrow', category: 'Logic' },
  { id: 'neg', name: 'Negation', latex: '\\neg', previewLatex: '\\neg', category: 'Logic' },
  { id: 'wedge', name: 'And', latex: '\\wedge', previewLatex: '\\wedge', category: 'Logic' },
  { id: 'vee', name: 'Or', latex: '\\vee', previewLatex: '\\vee', category: 'Logic' },
];
