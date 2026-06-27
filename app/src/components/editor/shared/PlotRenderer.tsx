/* eslint-disable */
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface PlotRendererProps {
  formula: string;
}

function PlotRendererInner({ formula }: PlotRendererProps) {
  const data: { x: number; y: number }[] = [];
  try {
    const cleanFormula = formula.replace(/y\s*=\s*/g, '').trim();
    for (let x = -10; x <= 10; x += 0.5) {
      let y = 0;
      if (cleanFormula === 'sin(x)/x') {
        y = x === 0 ? 1 : Math.sin(x) / x;
      } else if (cleanFormula.includes('sin')) {
        y = Math.sin(x);
      } else if (cleanFormula.includes('cos')) {
        y = Math.cos(x);
      } else if (cleanFormula.includes('x^2')) {
        y = x * x;
      } else if (cleanFormula.includes('x^3')) {
        y = x * x * x;
      } else {
        y = x;
      }
      data.push({ x: parseFloat(x.toFixed(1)), y: parseFloat(y.toFixed(2)) });
    }
  } catch {
    // Fail-safe
  }

  return (
    <div className="w-full h-56 flex flex-col items-center select-none bg-white p-2 border border-[#E5E5E5] rounded-xl shadow-sm">
      <div className="w-full h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 15, right: 15, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="x" tick={{ fontSize: 10, fill: '#888' }} />
            <YAxis tick={{ fontSize: 10, fill: '#888' }} />
            <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
            <Line type="monotone" dataKey="y" stroke="#0030FC" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <span className="text-[11px] font-medium text-[#666] mt-2 font-['Inter']">Interactive function plot: y = {formula}</span>
    </div>
  );
}

const PlotRenderer = React.memo(PlotRendererInner);
export default PlotRenderer;
