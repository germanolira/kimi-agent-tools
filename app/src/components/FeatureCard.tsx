import { useEffect, useRef } from 'react';
import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  label: string;
  index: number;
  registerCard: (el: HTMLDivElement | null, index: number) => void;
}

export default function FeatureCard({ icon: Icon, label, index, registerCard }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerCard(cardRef.current, index);
    return () => registerCard(null, index);
  }, [index, registerCard]);

  return (
    <div ref={cardRef} className="feature-card" data-feature-index={index}>
      <div className="feature-glow" />
      <div className="feature-icon">
        <Icon strokeWidth={1.5} color="#000" size={40} />
      </div>
      <span className="feature-label">{label}</span>
    </div>
  );
}
