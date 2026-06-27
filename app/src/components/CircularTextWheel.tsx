/* eslint-disable */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Splitting from 'splitting';

const WHEEL_TEXT = "START WRITING TODAY • MATH MADE BEAUTIFUL • ";
const WHEEL_RADIUS = 200;

export default function CircularTextWheel() {
  const ringRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const hasInit = useRef(false);

  useEffect(() => {
    const wheel = wheelRef.current;
    const ring = ringRef.current;
    if (!wheel || !ring || hasInit.current) return;

    // Split text into characters
    Splitting({ target: wheel, by: 'chars' });

    const chars = wheel.querySelectorAll('.char');
    if (chars.length === 0) return;

    hasInit.current = true;

    const circumference = 2 * Math.PI * WHEEL_RADIUS;
    const fontSize = circumference / WHEEL_TEXT.length;
    wheel.style.fontSize = `${fontSize}px`;

    chars.forEach((char, i) => {
      const angle = (i / chars.length) * 2 * Math.PI;
      const el = char as HTMLElement;
      el.style.cssText = `position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) translate(${Math.cos(angle) * WHEEL_RADIUS}px, ${Math.sin(angle) * WHEEL_RADIUS}px) rotate(${angle + Math.PI / 2}rad)`;
    });

    // GSAP infinite rotation
    const tween = gsap.to(ring, {
      rotation: -360,
      duration: 40,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 50%',
    });

    return () => {
      tween.kill();
      hasInit.current = false;
    };
  }, []);

  return (
    <div className="text-wheel-container">
      <div ref={ringRef} className="text-wheel-ring">
        <div ref={wheelRef} className="text-wheel">
          {WHEEL_TEXT}
        </div>
      </div>
      <a href="#getstarted" className="text-wheel-center">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
}
