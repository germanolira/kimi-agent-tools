import { useCallback, useEffect, useRef } from 'react';
import {
  Compass,
  Square,
  Sigma,
  Cloud,
  MessageCircle,
  ArrowUpRight,
  TrendingUp,
  Smartphone,
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

interface CardPhysics {
  current: { x: number; y: number; scale: number; rotate: number; stretchX: number; stretchY: number };
  target: { x: number; y: number; scale: number; rotate: number; stretchX: number; stretchY: number };
  isHovered: boolean;
  element: HTMLDivElement | null;
}

const cardsData = [
  { icon: Compass, label: 'Precision Tools' },
  { icon: Square, label: 'Geometric Shapes' },
  { icon: Sigma, label: 'Equation Editor' },
  { icon: Cloud, label: 'Cloud Sync' },
  { icon: MessageCircle, label: 'Collaboration' },
  { icon: ArrowUpRight, label: 'LaTeX Export' },
  { icon: TrendingUp, label: 'Data Plots' },
  { icon: Smartphone, label: 'Mobile Ready' },
];

export default function FeaturesBandSection() {
  const physicsArray = useRef<CardPhysics[]>([]);
  const rafId = useRef<number>(0);
  const bandRef = useRef<HTMLDivElement>(null);
  const isDesktop = useRef(false);

  useEffect(() => {
    isDesktop.current = window.matchMedia('(hover: hover)').matches;
  }, []);

  const physicsLoop = useRef(() => {
    const arr = physicsArray.current;

    for (let i = 0; i < arr.length; i++) {
      const card = arr[i];
      if (!card.element) continue;

      const atRest =
        Math.abs(card.current.x - card.target.x) < 0.01 &&
        Math.abs(card.current.y - card.target.y) < 0.01 &&
        Math.abs(card.current.scale - card.target.scale) < 0.001 &&
        Math.abs(card.current.rotate - card.target.rotate) < 0.01 &&
        Math.abs(card.current.stretchX - card.target.stretchX) < 0.001 &&
        Math.abs(card.current.stretchY - card.target.stretchY) < 0.001;

      if (!card.isHovered && atRest) continue;

      const keys: (keyof CardPhysics['current'])[] = ['x', 'y', 'scale', 'rotate', 'stretchX', 'stretchY'];
      const c = card.current;
      const t = card.target;
      for (const key of keys) {
        c[key] += (t[key] - c[key]) * 0.15;
      }

      const icon = card.element.querySelector('.feature-icon') as HTMLElement;
      const glow = card.element.querySelector('.feature-glow') as HTMLElement;

      if (icon) {
        icon.style.transform = `translate(${c.x * 0.3}px, ${c.y * 0.3}px) scale(${c.scale}) rotate(${c.rotate}deg) scaleX(${c.stretchX}) scaleY(${c.stretchY})`;
      }

      if (glow) {
        glow.style.cssText = `background: radial-gradient(circle at ${50 + c.x * 0.2}% ${50 + c.y * 0.2}%, rgba(0, 48, 252, 0.08) 0%, transparent 70%); opacity: ${(c.scale - 1) * 2}`;
      }
    }

    rafId.current = requestAnimationFrame(physicsLoop.current);
  });

  useEffect(() => {
    rafId.current = requestAnimationFrame(physicsLoop.current);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const registerCard = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      physicsArray.current[index] = {
        current: { x: 0, y: 0, scale: 1, rotate: 0, stretchX: 1, stretchY: 1 },
        target: { x: 0, y: 0, scale: 1, rotate: 0, stretchX: 1, stretchY: 1 },
        isHovered: false,
        element: el,
      };

      const onMouseEnter = () => {
        const card = physicsArray.current[index];
        if (!card) return;
        card.isHovered = true;
        card.current = { x: 0, y: 0, scale: 1, rotate: 0, stretchX: 1, stretchY: 1 };
        card.target = { x: 0, y: 0, scale: 1, rotate: 0, stretchX: 1, stretchY: 1 };
      };

      const onMouseMove = (e: MouseEvent) => {
        const card = physicsArray.current[index];
        if (!card) return;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        card.target = {
          x: e.clientX - centerX,
          y: e.clientY - centerY,
          scale: 1.5,
          rotate: (e.clientX - centerX) * 0.05,
          stretchX: 1 + Math.abs(e.clientX - centerX) * 0.001,
          stretchY: 1 + Math.abs(e.clientY - centerY) * 0.001,
        };
      };

      const onMouseLeave = () => {
        const card = physicsArray.current[index];
        if (!card) return;
        card.isHovered = false;
        card.target = { x: 0, y: 0, scale: 1, rotate: 0, stretchX: 1, stretchY: 1 };
      };

      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mousemove', onMouseMove);
      el.addEventListener('mouseleave', onMouseLeave);

      (el as any)._cleanup = () => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mousemove', onMouseMove);
        el.removeEventListener('mouseleave', onMouseLeave);
      };
    } else {
      const existing = physicsArray.current[index];
      if (existing?.element) {
        (existing.element as any)._cleanup?.();
      }
      physicsArray.current[index] = {
        current: { x: 0, y: 0, scale: 1, rotate: 0, stretchX: 1, stretchY: 1 },
        target: { x: 0, y: 0, scale: 1, rotate: 0, stretchX: 1, stretchY: 1 },
        isHovered: false,
        element: null,
      };
    }
  }, []);

  return (
    <section className="w-full py-0" style={{ background: '#FFFFFF' }}>
      <div
        ref={bandRef}
        className="w-full py-12 px-6 flex items-center justify-center gap-4 overflow-x-auto"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cardsData.map((card, i) => (
          <div key={card.label} style={{ scrollSnapAlign: 'start' }}>
            <FeatureCard
              icon={card.icon}
              label={card.label}
              index={i}
              registerCard={registerCard}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
